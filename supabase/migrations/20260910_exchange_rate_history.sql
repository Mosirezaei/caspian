-- Historical snapshots for the four rates displayed on /travel/exchange.
-- Run this once in Supabase SQL Editor. The trigger records a snapshot at
-- most every five minutes (or immediately when the rate changes).

create table if not exists public.exchange_rate_history (
  id bigint generated always as identity primary key,
  symbol text not null check (symbol in ('usd', 'eur', 'gbp', 'amd')),
  buy numeric not null,
  sell numeric not null,
  captured_at timestamptz not null default now()
);

create index if not exists exchange_rate_history_symbol_captured_at_idx
  on public.exchange_rate_history (symbol, captured_at desc);

alter table public.exchange_rate_history enable row level security;

drop policy if exists "Public can read exchange rate history" on public.exchange_rate_history;
create policy "Public can read exchange rate history"
  on public.exchange_rate_history
  for select
  using (true);

create or replace function public.capture_exchange_rate_history()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.symbol not in ('usd', 'eur', 'gbp', 'amd') then
    return new;
  end if;

  -- Keep enough points for truthful hourly/daily comparisons without
  -- inserting a duplicate every minute when the source has not changed.
  if tg_op = 'INSERT'
     or old.buy is distinct from new.buy
     or old.sell is distinct from new.sell
     or not exists (
       select 1
       from public.exchange_rate_history
       where symbol = new.symbol
         and captured_at > now() - interval '5 minutes'
     ) then
    insert into public.exchange_rate_history (symbol, buy, sell)
    values (new.symbol, new.buy, new.sell);
  end if;

  return new;
end;
$$;

drop trigger if exists capture_exchange_rate_history on public.exchange_rates_cache;
create trigger capture_exchange_rate_history
after insert or update of buy, sell on public.exchange_rates_cache
for each row
execute function public.capture_exchange_rate_history();

-- Seed one starting point. The next normal sync creates the first fresh one.
insert into public.exchange_rate_history (symbol, buy, sell, captured_at)
select symbol, buy, sell, coalesce(updated_at, now())
from public.exchange_rates_cache
where symbol in ('usd', 'eur', 'gbp', 'amd')
  and not exists (
    select 1
    from public.exchange_rate_history history
    where history.symbol = exchange_rates_cache.symbol
  );
