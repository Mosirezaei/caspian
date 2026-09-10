'use client';
import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';

const SYMBOLS = ['usd', 'eur', 'gbp', 'amd'];
const LABELS = {
  usd: { fa: 'دلار آمریکا', en: 'US Dollar', ru: 'Доллар США', icon: '💵' },
  eur: { fa: 'یورو', en: 'Euro', ru: 'Евро', icon: '💶' },
  gbp: { fa: 'پوند انگلیس', en: 'British Pound', ru: 'Британский фунт', icon: '💷' },
  amd: { fa: 'درام ارمنستان', en: 'Armenian Dram', ru: 'Армянский драм', icon: '🇦🇲' },
};
const PER_UNIT_DIVISOR = { amd: 100 };

function format(value, divisor = 1) {
  return value == null ? '—' : Math.round(value / divisor).toLocaleString('fa-IR');
}

function valueAtOrBefore(records, target, divisor) {
  const record = [...records].reverse().find((item) => new Date(item.captured_at).getTime() <= target);
  return record?.sell == null ? null : Math.round(record.sell / divisor);
}

function percentage(current, previous) {
  if (current == null || previous == null || previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

function sample(records, max = 42) {
  if (records.length <= max) return records;
  const step = Math.ceil(records.length / max);
  return records.filter((_, index) => index % step === 0 || index === records.length - 1);
}

function Sparkline({ records, divisor, direction }) {
  const values = sample(records).map((item) => Number(item.sell) / divisor).filter(Number.isFinite);
  if (values.length < 2) {
    return <div className="h-10 flex items-center text-[10px] text-foreground/30">در حال جمع‌آوری تاریخچهٔ نمودار</div>;
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 36 - ((value - min) / span) * 30;
    return `${x},${y}`;
  }).join(' ');
  const color = direction > 0 ? '#4ade80' : direction < 0 ? '#f87171' : '#d6af3c';
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-10 mt-3" aria-label="نمودار ۲۴ ساعت اخیر">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function CurrencyTicker() {
  const { lang } = useLang();
  const [rows, setRows] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');
  const [historyReady, setHistoryReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let debounceTimer = null;

    async function load() {
      try {
        const [currentResult, historyResult] = await Promise.all([
          supabase.from('exchange_rates_cache').select('symbol, sell, prev_sell, updated_at').in('symbol', SYMBOLS),
          supabase.from('exchange_rate_history').select('symbol, sell, captured_at').in('symbol', SYMBOLS).gte('captured_at', new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString()).order('captured_at', { ascending: true }),
        ]);
        if (cancelled) return;
        if (!currentResult.error && currentResult.data?.length) {
          setRows(Object.fromEntries(currentResult.data.map((row) => [row.symbol, row])));
          setLastUpdate(new Date(currentResult.data[0].updated_at).toLocaleTimeString('fa-IR'));
        }
        if (!historyResult.error) {
          setHistory(historyResult.data || []);
          setHistoryReady(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    const channel = supabase
      .channel('exchange_rate_dashboard_live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'exchange_rates_cache' }, () => {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(load, 700);
      })
      .subscribe();
    const fallback = setInterval(load, 2 * 60 * 1000);

    return () => {
      cancelled = true;
      if (debounceTimer) clearTimeout(debounceTimer);
      clearInterval(fallback);
      supabase.removeChannel(channel);
    };
  }, []);

  const groupedHistory = useMemo(() => Object.fromEntries(SYMBOLS.map((symbol) => [symbol, history.filter((row) => row.symbol === symbol)])), [history]);
  const copy = {
    fa: {
      title: 'نرخ لحظه‌ای ارز در بازار آزاد ایران',
      update: 'آخرین بروزرسانی',
      current: 'نرخ فعلی',
      oneHour: 'یک ساعت قبل',
      yesterday: 'روز قبل',
      change: 'تغییر ۲۴ ساعت اخیر',
      chart: 'نمودار ۲۴ ساعت اخیر',
      note: 'نرخ‌های نمایش‌داده‌شده مرجع بازار آزاد ایران هستند. نرخ نهایی با توجه به روش تسویه و جزئیات درخواست اعلام می‌شود.',
      button: 'استعلام لحظه‌ای و نرخ حواله در واتساپ',
    },
    en: { title: 'Live Iranian Open-Market Rates', update: 'Last updated', current: 'Current', oneHour: '1 hour ago', yesterday: 'Yesterday', change: '24h change', chart: '24-hour trend', note: 'Displayed rates are references. Final terms are confirmed after reviewing the request.', button: 'Get a quote on WhatsApp' },
    ru: { title: 'Актуальные рыночные курсы Ирана', update: 'Обновлено', current: 'Текущий', oneHour: '1 час назад', yesterday: 'Вчера', change: 'Изменение за 24 часа', chart: 'График за 24 часа', note: 'Курсы являются справочными. Итоговые условия подтверждаются после проверки запроса.', button: 'Узнать курс в WhatsApp' },
  }[lang] || {};

  const openWhatsApp = () => {
    const message = lang === 'fa' ? 'سلام، برای استعلام نرخ لحظه‌ای و حواله ارز پیام دادم.' : 'Hello, I would like a live currency quote.';
    window.open(`https://wa.me/37433149327?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="mb-10">
      <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-primary/20">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
          <div>
            <p className="text-sm font-black text-primary">{copy.title}</p>
            <p className="text-xs text-foreground/40 mt-1">{lastUpdate ? `${copy.update}: ${lastUpdate}` : copy.update}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold gold-gradient-text">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {lang === 'fa' ? 'به‌روزرسانی خودکار' : lang === 'ru' ? 'Автообновление' : 'Auto-updating'}
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center py-10"><div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SYMBOLS.map((symbol) => {
              const row = rows?.[symbol];
              const divisor = PER_UNIT_DIVISOR[symbol] || 1;
              const records = groupedHistory[symbol] || [];
              const current = row?.sell == null ? null : Math.round(row.sell / divisor);
              const oneHour = valueAtOrBefore(records, Date.now() - 60 * 60 * 1000, divisor);
              const yesterday = valueAtOrBefore(records, Date.now() - 24 * 60 * 60 * 1000, divisor);
              const delta = percentage(current, yesterday);
              const info = LABELS[symbol];
              const isUp = delta != null && delta > 0;
              const isDown = delta != null && delta < 0;

              return (
                <article key={symbol} className="rounded-xl bg-white/3 border border-white/5 p-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xl">{info.icon}</span>
                    <span className="text-xs font-bold text-foreground/65">{info[lang] || info.fa}</span>
                  </div>
                  <p className="text-[11px] text-foreground/35">{copy.current}</p>
                  <p className="text-xl font-black gold-gradient-text tabular-nums mt-1">{current == null ? '—' : current.toLocaleString('fa-IR')} <span className="text-[11px] text-foreground/35 font-normal">تومان</span></p>
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
                    <div><p className="text-[10px] text-foreground/35">{copy.oneHour}</p><p className="text-xs text-foreground/65 tabular-nums mt-1">{format(oneHour)} تومان</p></div>
                    <div><p className="text-[10px] text-foreground/35">{copy.yesterday}</p><p className="text-xs text-foreground/65 tabular-nums mt-1">{format(yesterday)} تومان</p></div>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] text-foreground/35">{copy.change}</span>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold ${isUp ? 'text-green-400' : isDown ? 'text-red-400' : 'text-foreground/40'}`}>
                      {isUp ? <ArrowUp className="w-3.5 h-3.5" /> : isDown ? <ArrowDown className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                      {delta == null ? '—' : `${Math.abs(delta).toFixed(2)}٪`}
                    </span>
                  </div>
                  <p className="text-[10px] text-foreground/35 mt-3">{copy.chart}</p>
                  <Sparkline records={records} divisor={divisor} direction={delta || 0} />
                </article>
              );
            })}
          </div>
        )}

        {historyReady && history.length < 8 && <p className="text-[11px] text-foreground/35 text-center mt-4">دادهٔ نمودار از زمان فعال‌سازی ثبت تاریخچه تکمیل می‌شود.</p>}
        <p className="text-xs text-foreground/40 mt-5 pt-4 border-t border-white/10 text-center leading-relaxed">{copy.note}</p>
        <button onClick={openWhatsApp} className="mt-4 w-full py-3.5 px-6 bg-primary text-black font-black rounded-xl hover:bg-yellow-500 transition">{copy.button}</button>
      </div>
    </section>
  );
}
