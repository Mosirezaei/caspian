import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

export default function FlightSearch() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
  });

  const labels = {
    fa: { from: 'مبدا', to: 'مقصد', date: 'تاریخ', passengers: 'مسافران', search: 'جستجو' },
    en: { from: 'From', to: 'To', date: 'Date', passengers: 'Passengers', search: 'Search' },
    ru: { from: 'Откуда', to: 'Куда', date: 'Дата', passengers: 'Пассажиры', search: 'Поиск' },
  };

  const t = labels[lang] || labels.fa;

  const handleSearch = () => {
    if (formData.from && formData.to && formData.date) {
      const query = new URLSearchParams({
        from: formData.from,
        to: formData.to,
        date: formData.date,
        passengers: formData.passengers,
      }).toString();
      window.location.href = `/travel/flight?${query}`;
    }
  };

  return (
    <motion.div className="glass-panel rounded-2xl p-6 border border-primary/20 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          value={formData.from}
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          placeholder={t.from}
          dir={isRtl ? 'rtl' : 'ltr'}
          className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/40"
        />
        <input
          type="text"
          value={formData.to}
          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          placeholder={t.to}
          dir={isRtl ? 'rtl' : 'ltr'}
          className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/40"
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40"
        />
        <select
          value={formData.passengers}
          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
          className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} {t.passengers}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSearch}
        disabled={!formData.from || !formData.to || !formData.date}
        className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50"
      >
        {t.search}
      </button>
    </motion.div>
  );
}