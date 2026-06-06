import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function CurrencyWidget() {
  const { lang } = useLang();
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch('https://bonbast.com/json', {
          headers: { 'Accept': 'application/json' }
        });
        const data = await res.json();

        const usd = data?.usd?.[0] ? parseInt(data.usd[0]) : null;
        const dram = data?.amd?.[0] ? parseInt(data.amd[0]) : null;
        const usdt = usd;

        if (usd && dram) {
          setRates({ usd, dram, usdt });
          setLastUpdate(new Date().toLocaleTimeString('fa-IR'));
        } else {
          throw new Error('invalid data');
        }
      } catch {
        setRates({ usd: 180600, dram: 5000, usdt: 180600 });
        setLastUpdate('—');
      }
      setLoading(false);
    }
    fetchRates();
    const iv = setInterval(fetchRates, 5 * 60 * 1000);
    return () => clearInterval(iv);
  }, []);

  const label = lang === 'fa' ? 'نرخ لحظه‌ای ارز (تومان)' : lang === 'ru' ? 'Курс валют (туман)' : 'Live Exchange Rates (Toman)';
  const src = lang === 'fa' ? 'منبع: بازار آزاد ایران' : lang === 'ru' ? 'Источник: свободный рынок Ирана' : 'Source: Iran Free Market';

  const items = [
    { symbol: '💵', name: lang === 'fa' ? 'دلار آمریکا' : lang === 'ru' ? 'Доллар США' : 'US Dollar', value: rates?.usd },
    { symbol: '🇦🇲', name: lang === 'fa' ? 'درام ارمنستان' : lang === 'ru' ? 'Армянский драм' : 'Armenian Dram', value: rates?.dram },
    { symbol: '₮', name: 'Tether (USDT)', value: rates?.usdt },
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-panel rounded-2xl p-5 border border-primary/20">

          {/* ردیف بالا: عنوان سمت چپ، منبع سمت راست */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-primary">{label}</span>
            <span className="text-sm font-bold text-primary">{src}</span>
          </div>

          {/* نرخ‌ها */}
          {loading ? (
            <div className="flex justify-center py-4">
              <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {items.map((it, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-white/3">
                  <div className="text-xl mb-1">{it.symbol}</div>
                  <div className="text-xs text-foreground/50 mb-1">{it.name}</div>
                  <div className="text-base font-black gold-gradient-text">
                    {it.value ? it.value.toLocaleString('fa-IR') : '—'}
                  </div>
                  <div className="text-xs text-foreground/30">{lang === 'fa' ? 'تومان' : lang === 'ru' ? 'туман' : 'Toman'}</div>
                </div>
              ))}
            </div>
          )}

          {/* ردیف پایین: واتساپ سمت چپ، آخرین بروزرسانی سمت راست */}
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://wa.me/37433149327?text=%D8%B3%D9%84%D8%A7%D9%85%20%D9%88%D9%82%D8%AA%20%D8%A8%D8%AE%DB%8C%D8%B1%20%0A*%D9%86%D8%B1%D8%AE%20%D8%AD%D9%88%D8%A7%D9%84%D9%87%20%D9%84%D8%B7%D9%81%20%D9%85%DB%8C%DA%A9%D9%86%DB%8C%D8%AF*"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-colors text-xs font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              {lang === 'fa' ? 'استعلام لحظه‌ای' : lang === 'ru' ? 'Запрос цены' : 'Live Quote'}
            </a>
            {lastUpdate && (
              <span className="text-xs text-foreground/30">
                {lang === 'fa' ? `آخرین بروزرسانی: ${lastUpdate}` : lang === 'ru' ? `Обновлено: ${lastUpdate}` : `Updated: ${lastUpdate}`}
              </span>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}