import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { Link } from 'react-router-dom';

export default function VipSearch() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';

  const labels = {
    fa: { title: 'خدمات VIP', desc: 'با ما تماس بگیرید برای بسته‌های شخصی‌سازی شده', contact: 'تماس با VIP' },
    en: { title: 'VIP Services', desc: 'Contact us for personalized luxury packages', contact: 'Contact VIP' },
    ru: { title: 'VIP услуги', desc: 'Свяжитесь с нами для персонализированных пакетов', contact: 'Контакт VIP' },
  };

  const t = labels[lang] || labels.fa;

  return (
    <motion.div className="glass-panel rounded-2xl p-8 border border-primary/20 text-center">
      <h3 className="text-2xl font-bold gold-gradient-text mb-3">{t.title}</h3>
      <p className="text-foreground/70 mb-6">{t.desc}</p>
      <Link
        to="/travel/vip"
        className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background font-bold hover:shadow-lg transition-all"
      >
        {t.contact}
      </Link>
    </motion.div>
  );
}