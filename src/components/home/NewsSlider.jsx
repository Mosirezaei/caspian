import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

const SECTION_TITLE = {
  fa: 'آخرین اخبار قوانین مهاجرتی و اقامتی ارمنستان',
  en: 'Latest Armenia Immigration & Residency News',
  ru: 'Последние новости об иммиграции и ВНЖ в Армении',
};

const SLIDES = {
  fa: [
    { title: 'تمدید ویزای توریستی ارمنستان برای ایرانیان تا ۱۸۰ روز', category: 'ویزا' },
    { title: 'شرایط جدید اخذ اقامت دائم ارمنستان برای اتباع خارجی', category: 'اقامت' },
    { title: 'ثبت شرکت برای اتباع خارجی در ارمنستان در ۲ روز', category: 'ثبت شرکت' },
    { title: 'ویزای دانشجویی ارمنستان بدون مصاحبه برای دانشجویان', category: 'ویزای تحصیلی' },
    { title: 'برنامه اقامت از طریق سرمایه‌گذاری در ارمنستان', category: 'سرمایه‌گذاری' },
  ],
  en: [
    { title: 'Armenia Extends Visa-Free Stay for Iranians to 180 Days', category: 'Visa' },
    { title: 'New Permanent Residency Requirements for Foreign Nationals', category: 'Residency' },
    { title: 'Company Registration for Foreigners in Armenia Within 2 Days', category: 'Business' },
    { title: 'Armenia Student Visa Without Interview', category: 'Student Visa' },
    { title: 'Armenia Residency by Investment Program', category: 'Investment' },
  ],
  ru: [
    { title: 'Армения продлила безвизовый режим для иранцев до 180 дней', category: 'Виза' },
    { title: 'Новые условия получения ПМЖ для иностранцев', category: 'ВНЖ' },
    { title: 'Регистрация компании для иностранцев в Армении за 2 дня', category: 'Бизнес' },
    { title: 'Студенческая виза Армении без собеседования', category: 'Студенческая виза' },
    { title: 'Программа ВНЖ через инвестиции в Армении', category: 'Инвестиции' },
  ],
};

export default function NewsSlider() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const slides = SLIDES[lang] || SLIDES.fa;

  useEffect(() => {
    setCurrent(0);
  }, [lang]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(p => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const prev = () => { clearInterval(timerRef.current); setCurrent(p => (p - 1 + slides.length) % slides.length); };
  const next = () => { clearInterval(timerRef.current); setCurrent(p => (p + 1) % slides.length); };

  const slide = slides[current];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2 justify-center">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
        <p className="text-xs font-bold text-primary text-center leading-tight">
          {SECTION_TITLE[lang]}
        </p>
      </div>

      {/* Card */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(212,168,68,0.45)', background: 'rgba(22,27,34,0.6)', backdropFilter: 'blur(30px)' }}>
        {/* Progress bar */}
        <div className="h-0.5 bg-white/10">
          <motion.div key={current} className="h-full bg-white"
            initial={{ width: '0%' }} animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }} />
        </div>

        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.button key={current}
              initial={{ opacity: 0, x: lang === 'fa' ? -16 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'fa' ? 16 : -16 }}
              transition={{ duration: 0.25 }}
              onClick={() => navigate('/immigration-news')}
              className="w-full text-right group"
              dir={lang === 'fa' ? 'rtl' : 'ltr'}>
              <span className="inline-block text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full font-bold mb-1.5">
                {slide.category}
              </span>
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                {slide.title}
              </p>
              <span className="inline-block text-xs text-primary/60 mt-1.5 font-medium">
                {lang === 'fa' ? 'مشاهده همه اخبار ←' : lang === 'ru' ? 'Все новости →' : 'View all news →'}
              </span>
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-4 bg-primary' : 'w-1.5 bg-white/20'}`} />
            ))}
          </div>
          <div className="flex gap-1">
            <button onClick={prev} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-foreground/60" />
            </button>
            <button onClick={next} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-foreground/60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}