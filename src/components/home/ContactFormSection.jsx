import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import ContactForm from './ContactForm';

const labels = {
  fa: {
    badge: 'مشاوره رایگان',
    title: 'همین الان شروع کنید',
    sub: 'تیم متخصص کاسپین گروه آماده پاسخگویی به سوالات شما است',
    features: ['پاسخ در کمتر از ۲۴ ساعت', 'کارشناسان فارسی‌زبان', 'مشاوره کاملاً رایگان'],
  },
  en: {
    badge: 'Free Consultation',
    title: 'Start Right Now',
    sub: 'Caspian Group\'s expert team is ready to answer your questions',
    features: ['Response in under 24 hours', 'Persian-speaking experts', 'Completely free consultation'],
  },
  ru: {
    badge: 'Бесплатная консультация',
    title: 'Начните прямо сейчас',
    sub: 'Команда экспертов Caspian Group готова ответить на ваши вопросы',
    features: ['Ответ в течение 24 часов', 'Эксперты, говорящие на фарси', 'Полностью бесплатная консультация'],
  },
};

export default function ContactFormSection() {
  const { lang } = useLang();
  const c = labels[lang] || labels.fa;
  const isRtl = lang === 'fa';

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="relative py-20 px-4 overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left info */}
          <motion.div initial={{ opacity: 0, x: isRtl ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
              {c.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4 leading-tight">
              {c.title}
            </h2>
            <p className="text-muted-foreground text-sm mb-8">{c.sub}</p>
            <ul className="space-y-3">
              {c.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right form */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}