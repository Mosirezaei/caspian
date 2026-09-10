'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';

// The four reference currencies displayed on Caspian's exchange page.
// Symbols match the rate source's slug field exactly.
const ORDER = ['usd', 'eur', 'gbp', 'amd'];

const HEADERS = {
  fa: { name: 'نام ارز', buy: 'خرید', sell: 'فروش', usdRate: 'نرخ به دلار', toman: 'تومان' },
  en: { name: 'Currency', buy: 'Buy', sell: 'Sell', usdRate: 'USD Rate', toman: 'Toman' },
  ru: { name: 'Валюта', buy: 'Покупка', sell: 'Продажа', usdRate: 'Курс к USD', toman: 'Туман' },
};

const DISCLAIMER = {
  fa: 'نرخ‌های نمایش‌داده‌شده مرجع بازار آزاد ایران هستند. برای نرخ نهایی و سایر ارزها، پیش از ثبت درخواست در واتساپ استعلام بگیرید.',
  en: 'For real-time quotes and money-transfer rates, please check with our partners.',
  ru: 'Для получения актуального курса и условий денежного перевода уточняйте у наших партнёров.',
};

const WHATSAPP_BUTTON_LABEL = {
  fa: 'استعلام لحظه‌ای و نرخ حواله در واتساپ',
  en: 'Get Live Rates & Transfer Info on WhatsApp',
  ru: 'Узнать курс и условия перевода в WhatsApp',
};

const WHATSAPP_MESSAGE = {
  fa: 'سلام، برای استعلام نرخ لحظه‌ای و حواله ارز پیام دادم.',
  en: "Hi, I'm messaging for a live exchange rate and money-transfer quote.",
  ru: 'Здравствуйте, хочу узнать актуальный курс и условия перевода.',
};

const CLOCK_LABEL = {
  fa: 'ساعت ایروان',
  en: 'Yerevan Time',
  ru: 'Время в Ереване',
};

function yerevanClock() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Yerevan',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
}

function openWhatsApp(lang) {
  const text = WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.fa;
  window.open(`https://wa.me/37433149327?text=${encodeURIComponent(text)}`, '_blank');
}

export default function CurrencyRatesTable() {
  const { lang } = useLang();
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');
  const [clock, setClock] = useState(yerevanClock());

  // Ticks every second regardless of when the data itself last changed --
  // this is what gives the page a visibly "alive" feel between the ~1-minute
  // rate syncs, on top of the real Realtime-driven rate updates below.
  useEffect(() => {
    const tick = setInterval(() => setClock(yerevanClock()), 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let debounceTimer = null;

    async function load() {
      try {
        const { data, error } = await supabase
          .from('exchange_rates_cache')
          .select('symbol, name, buy, sell, dolar_rate, updated_at')
          .in('symbol', ORDER);

        if (!cancelled && !error && data?.length) {
          const bySymbol = Object.fromEntries(data.map((r) => [r.symbol, r]));
          setRows(bySymbol);
          setLastUpdate(new Date(data[0].updated_at).toLocaleTimeString('fa-IR'));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    // Live updates: the daily sync writes a fresh batch to exchange_rates_cache
    // roughly every minute, so instead of polling on a timer we subscribe to
    // Postgres changes and re-fetch the instant new rows land. A single sync
    // touches all ~44 rows at once, so incoming change events are debounced
    // to a single re-fetch rather than one per row.
    const channel = supabase
      .channel('exchange_rates_cache_live')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'exchange_rates_cache' },
        () => {
          if (debounceTimer) clearTimeout(debounceTimer);
          debounceTimer = setTimeout(load, 500);
        }
      )
      .subscribe();

    // Fallback poll in case the realtime connection drops for any reason --
    // infrequent since it's just a safety net, not the primary update path.
    const fallbackIv = setInterval(load, 2 * 60 * 1000);

    return () => {
      cancelled = true;
      if (debounceTimer) clearTimeout(debounceTimer);
      clearInterval(fallbackIv);
      supabase.removeChannel(channel);
    };
  }, []);

  const h = HEADERS[lang] || HEADERS.fa;
  const dir = lang === 'fa' ? 'rtl' : lang === 'en' ? 'ltr' : 'ltr';

  return (
    <section className="mb-10">
      <div className="glass-panel rounded-2xl p-5 border border-primary/20 overflow-x-auto">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-primary">
            {lang === 'fa' ? 'نرخ چهار ارز اصلی' : lang === 'ru' ? 'Курсы четырёх основных валют' : 'Four Main Currency Rates'}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-bold gold-gradient-text">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {CLOCK_LABEL[lang] || CLOCK_LABEL.fa}: <span className="tabular-nums">{clock}</span>
          </span>
        </div>
        {lastUpdate && (
          <div className="text-[11px] text-foreground/30 mb-3">
            {lang === 'fa' ? `آخرین بروزرسانی نرخ‌ها: ${lastUpdate}` : lang === 'ru' ? `Курс обновлён: ${lastUpdate}` : `Rates last synced: ${lastUpdate}`}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : (
          <table className="w-full text-sm" dir={dir}>
            <thead>
              <tr className="text-foreground/50 text-xs border-b border-white/10">
                <th className="text-start py-2 px-2 font-normal">{h.name}</th>
                <th className="text-center py-2 px-2 font-normal">{h.buy}</th>
                <th className="text-center py-2 px-2 font-normal">{h.sell}</th>
                <th className="text-center py-2 px-2 font-normal">{h.usdRate}</th>
              </tr>
            </thead>
            <tbody>
              {ORDER.map((sym) => {
                const row = rows?.[sym];
                if (!row) return null;
                return (
                  <tr key={sym} className="border-b border-white/5 hover:bg-white/3">
                    <td className="py-2.5 px-2 font-bold text-foreground/90">{row.name}</td>
                    <td className="py-2.5 px-2 text-center text-foreground/70">
                      {row.buy != null ? Number(row.buy).toLocaleString('en-US') : '—'}
                    </td>
                    <td className="py-2.5 px-2 text-center gold-gradient-text font-bold">
                      {row.sell != null ? Number(row.sell).toLocaleString('en-US') : '—'}
                    </td>
                    <td className="py-2.5 px-2 text-center text-foreground/50 text-xs">
                      {sym === 'usd' || sym === 'usd-ist' ? '—' : (row.dolar_rate ?? '—')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <p className="text-xs text-foreground/40 mt-4 pt-4 border-t border-white/10 text-center leading-relaxed">
          {DISCLAIMER[lang] || DISCLAIMER.fa}
        </p>

        <button
          onClick={() => openWhatsApp(lang)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-primary text-black font-black rounded-xl hover:bg-yellow-500 transition"
        >
          {WHATSAPP_BUTTON_LABEL[lang] || WHATSAPP_BUTTON_LABEL.fa}
        </button>
      </div>
    </section>
  );
}
