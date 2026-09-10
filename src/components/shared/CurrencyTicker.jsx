'use client';
import { useEffect, useState } from 'react';
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

function change(current, previous) {
  if (current == null || previous == null || previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

export default function CurrencyTicker() {
  const { lang } = useLang();
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    let cancelled = false;
    let debounceTimer = null;

    async function load() {
      try {
        const { data, error } = await supabase
          .from('exchange_rates_cache')
          .select('symbol, sell, prev_sell, updated_at')
          .in('symbol', SYMBOLS);
        if (!cancelled && !error && data?.length) {
          setRows(Object.fromEntries(data.map((row) => [row.symbol, row])));
          setLastUpdate(new Date(data[0].updated_at).toLocaleTimeString('fa-IR'));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    const channel = supabase
      .channel('exchange_rates_summary_live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'exchange_rates_cache' }, () => {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(load, 500);
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

  const text = {
    fa: {
      title: 'نرخ لحظه‌ای ارز در بازار آزاد ایران',
      update: 'آخرین بروزرسانی',
      current: 'نرخ فعلی',
      previous: 'نرخ ثبت‌شدهٔ قبلی',
      change: 'تغییر نسبت به ثبت قبلی',
      note: 'نرخ‌های نمایش‌داده‌شده مرجع بازار آزاد ایران هستند. نرخ نهایی با توجه به روش تسویه و جزئیات درخواست اعلام می‌شود.',
      button: 'استعلام لحظه‌ای و نرخ حواله در واتساپ',
    },
    en: { title: 'Live Iranian Open-Market Rates', update: 'Last updated', current: 'Current rate', previous: 'Previous recorded rate', change: 'Change', note: 'Displayed rates are references. Final terms are confirmed after reviewing the request.', button: 'Get a quote on WhatsApp' },
    ru: { title: 'Актуальные рыночные курсы Ирана', update: 'Обновлено', current: 'Текущий курс', previous: 'Предыдущий курс', change: 'Изменение', note: 'Курсы являются справочными. Итоговые условия подтверждаются после проверки запроса.', button: 'Узнать курс в WhatsApp' },
  }[lang] || {
    title: 'نرخ لحظه‌ای ارز در بازار آزاد ایران', update: 'آخرین بروزرسانی', current: 'نرخ فعلی', previous: 'نرخ ثبت‌شدهٔ قبلی', change: 'تغییر نسبت به ثبت قبلی', note: 'نرخ‌های نمایش‌داده‌شده مرجع بازار آزاد ایران هستند. نرخ نهایی با توجه به روش تسویه و جزئیات درخواست اعلام می‌شود.', button: 'استعلام لحظه‌ای و نرخ حواله در واتساپ',
  };

  const openWhatsApp = () => {
    const message = lang === 'fa' ? 'سلام، برای استعلام نرخ لحظه‌ای و حواله ارز پیام دادم.' : 'Hello, I would like a live currency quote.';
    window.open(`https://wa.me/37433149327?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="mb-10">
      <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-primary/20">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
          <div>
            <p className="text-sm font-black text-primary">{text.title}</p>
            <p className="text-xs text-foreground/40 mt-1">{lastUpdate ? `${text.update}: ${lastUpdate}` : text.update}</p>
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
              const current = row?.sell != null ? Math.round(row.sell / divisor) : null;
              const previous = row?.prev_sell != null ? Math.round(row.prev_sell / divisor) : null;
              const delta = change(current, previous);
              const isUp = delta != null && delta > 0;
              const isDown = delta != null && delta < 0;
              const info = LABELS[symbol];
              return (
                <article key={symbol} className="rounded-xl bg-white/3 border border-white/5 p-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xl">{info.icon}</span>
                    <span className="text-xs font-bold text-foreground/65">{info[lang] || info.fa}</span>
                  </div>
                  <p className="text-[11px] text-foreground/35">{text.current}</p>
                  <p className="text-xl font-black gold-gradient-text tabular-nums mt-1">{current != null ? current.toLocaleString('fa-IR') : '—'} <span className="text-[11px] text-foreground/35 font-normal">تومان</span></p>
                  <div className="h-px bg-white/10 my-3" />
                  <p className="text-[11px] text-foreground/35">{text.previous}</p>
                  <p className="text-sm text-foreground/65 tabular-nums mt-1">{format(row?.prev_sell, divisor)} تومان</p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] text-foreground/35">{text.change}</span>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold ${isUp ? 'text-green-400' : isDown ? 'text-red-400' : 'text-foreground/40'}`}>
                      {isUp ? <ArrowUp className="w-3.5 h-3.5" /> : isDown ? <ArrowDown className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                      {delta == null ? '—' : `${Math.abs(delta).toFixed(2)}٪`}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <span className={`block h-full rounded-full ${isUp ? 'bg-green-400' : isDown ? 'bg-red-400' : 'bg-primary'}`} style={{ width: `${Math.min(100, Math.max(16, Math.abs(delta || 0) * 20 + 16))}%` }} />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <p className="text-xs text-foreground/40 mt-5 pt-4 border-t border-white/10 text-center leading-relaxed">{text.note}</p>
        <button onClick={openWhatsApp} className="mt-4 w-full py-3.5 px-6 bg-primary text-black font-black rounded-xl hover:bg-yellow-500 transition">
          {text.button}
        </button>
      </div>
    </section>
  );
}
