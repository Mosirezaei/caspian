import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { ArrowLeftRight, TrendingUp, Loader2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const CURRENCIES = ['USD', 'EUR', 'RUB', 'TRY', 'AED', 'AMD', 'GBP', 'CAD', 'CHF', 'JPY', 'GEL'];

const API_KEY = '9d89f0a8895f9a7474ae1361';

function CurrencyConverter() {
  const { lang } = useLang();
  const [amount, setAmount] = useState('100');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('AMD');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState(null);
  const [rateTime, setRateTime] = useState(null);
  const [ratesLoading, setRatesLoading] = useState(true);

  const labels = {
    fa: { from: 'از', to: 'به', amount: 'مقدار', calc: 'محاسبه', note: 'نرخ‌های زنده از ExchangeRate-API', updated: 'آخرین به‌روزرسانی' },
    en: { from: 'From', to: 'To', amount: 'Amount', calc: 'Convert', note: 'Live rates from ExchangeRate-API', updated: 'Last updated' },
    ru: { from: 'Из', to: 'В', amount: 'Сумма', calc: 'Конвертировать', note: 'Актуальные курсы от ExchangeRate-API', updated: 'Обновлено' },
  };
  const lbl = labels[lang] || labels.fa;

  React.useEffect(() => {
    setRatesLoading(true);
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(r => r.json())
      .then(data => {
        if (data.result === 'success') {
          setRates(data.conversion_rates);
          setRateTime(data.time_last_update_utc);
        }
      })
      .catch(() => {})
      .finally(() => setRatesLoading(false));
  }, []);

  const calculate = () => {
    if (!rates) return;
    setLoading(true);
    const usd = parseFloat(amount) / rates[from];
    const res = (usd * rates[to]).toFixed(4);
    setResult(res);
    setLoading(false);
  };

  const swap = () => { setFrom(to); setTo(from); setResult(null); };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-foreground">{lang === 'fa' ? 'ماشین‌حساب ارز' : lang === 'ru' ? 'Калькулятор валют' : 'Currency Calculator'}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">{lbl.amount}</label>
          <input
            type="number"
            value={amount}
            onChange={e => { setAmount(e.target.value); setResult(null); }}
            className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">{lbl.from}</label>
          <select value={from} onChange={e => { setFrom(e.target.value); setResult(null); }}
            className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm outline-none focus:border-primary cursor-pointer">
            {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1">
          <label className="text-xs text-muted-foreground mb-1 block">{lbl.to}</label>
          <select value={to} onChange={e => { setTo(e.target.value); setResult(null); }}
            className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm outline-none focus:border-primary cursor-pointer">
            {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <button onClick={swap} className="mx-3 mt-5 p-2 rounded-xl border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeftRight className="w-4 h-4" />
        </button>
      </div>
      <button onClick={calculate} disabled={loading || ratesLoading || !amount || !rates}
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
        {ratesLoading ? (lang === 'fa' ? 'در حال دریافت نرخ...' : 'Loading rates...') : lbl.calc}
      </button>
      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/30 text-center">
          <p className="text-2xl font-black text-primary">{parseFloat(result).toLocaleString(undefined, { maximumFractionDigits: 2 })} {to}</p>
          <p className="text-xs text-muted-foreground mt-1">{amount} {from} ≈ {parseFloat(result).toLocaleString(undefined, { maximumFractionDigits: 2 })} {to}</p>
        </motion.div>
      )}
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-muted-foreground">{lbl.note}</p>
        {rateTime && <p className="text-xs text-muted-foreground">{lbl.updated}: {new Date(rateTime).toLocaleDateString()}</p>}
      </div>
    </motion.div>
  );
}

function Content() {
  const { lang } = useLang();

  useSEO({
    title: lang === 'fa' ? 'صرافی و تبدیل ارز | کاسپین گروپ' :
           lang === 'ru' ? 'Обмен валют | Caspian Group' :
           'Currency Exchange | Caspian Group',
    description: lang === 'fa' ? 'صرافی کاسپین گروه — تبدیل ارز با بهترین نرخ در ایروان. دلار، یورو، روبل، درهم و بیشتر.' :
                 lang === 'ru' ? 'Caspian Group — обмен валюты по лучшему курсу в Ереване.' :
                 'Caspian Group currency exchange — best rates in Yerevan for USD, EUR, RUB, AED and more.',
    keywords: 'صرافی ارمنستان, تبدیل ارز, نرخ ارز, دلار, یورو, کاسپین',
  });

  return (
    <ServicePageLayout
      titleFa="صرافی و تبدیل ارز"
      titleEn="Currency Exchange"
      titleRu="Обмен валюты"
      subtitleFa="بهترین نرخ‌های ارز در ایروان — دلار، یورو، روبل، درهم و بیشتر"
      subtitleEn="Best exchange rates in Yerevan — USD, EUR, RUB, AED and more"
      subtitleRu="Лучшие курсы обмена в Ереване — USD, EUR, RUB, AED и другие"
      heroImage="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1200&q=80"
      serviceType="exchange">

      <CurrencyConverter />

      {lang === 'fa' && <>
        <InfoBlock title="خدمات صرافی کاسپین">
          <p>صرافی کاسپین گروه با بیش از ۱۵ سال تجربه در ایروان، بهترین نرخ‌های ارز را برای مشتریان ایرانی ارائه می‌دهد. ما امکان خرید و فروش دلار، یورو، روبل، درهم، لیر و سایر ارزها را با شفافیت کامل فراهم می‌کنیم.</p>
        </InfoBlock>
        <InfoBlock title="ارزهای پشتیبانی‌شده">
          <CheckList items={['دلار آمریکا (USD)', 'یورو (EUR)', 'روبل روسیه (RUB)', 'درهم امارات (AED)', 'لیر ترکیه (TRY)', 'درام ارمنستان (AMD)', 'پوند انگلیس (GBP)']} />
        </InfoBlock>
        <InfoBlock title="چرا کاسپین؟">
          <CheckList items={['بهترین نرخ بازار با کمترین کارمزد', 'تراکنش‌های سریع و امن', 'امکان حواله بین‌المللی', 'مشاوره مالی رایگان', 'پشتیبانی فارسی‌زبان']} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Caspian Exchange Services">
          <p>Caspian Group currency exchange offers the best rates in Yerevan for Iranian clients. Buy and sell USD, EUR, RUB, AED, TRY, and more with full transparency.</p>
        </InfoBlock>
        <InfoBlock title="Supported Currencies">
          <CheckList items={['US Dollar (USD)', 'Euro (EUR)', 'Russian Ruble (RUB)', 'UAE Dirham (AED)', 'Turkish Lira (TRY)', 'Armenian Dram (AMD)', 'British Pound (GBP)']} />
        </InfoBlock>
        <InfoBlock title="Why Caspian?">
          <CheckList items={['Best market rates, lowest fees', 'Fast and secure transactions', 'International wire transfers', 'Free financial consulting', 'Persian-speaking support']} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Обменный сервис Caspian">
          <p>Caspian Group предлагает лучшие курсы обмена в Ереване. Покупайте и продавайте USD, EUR, RUB, AED, TRY и другие валюты.</p>
        </InfoBlock>
        <InfoBlock title="Поддерживаемые валюты">
          <CheckList items={['Доллар США (USD)', 'Евро (EUR)', 'Российский рубль (RUB)', 'Дирхам ОАЭ (AED)', 'Турецкая лира (TRY)', 'Армянский драм (AMD)']} />
        </InfoBlock>
        <InfoBlock title="Почему Caspian?">
          <CheckList items={['Лучшие курсы рынка', 'Быстрые и безопасные транзакции', 'Международные переводы', 'Бесплатные консультации']} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function Exchange() {
  return <LanguageProvider><Content /></LanguageProvider>;
}