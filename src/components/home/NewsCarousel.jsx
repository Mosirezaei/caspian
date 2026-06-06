import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

export default function NewsCarousel() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const [news, setNews] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await base44.functions.invoke('getImmigrationNews', {});
        setNews(res.data.news || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % news.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [news.length]);

  if (loading) return null;
  if (news.length === 0) return null;

  const currentNews = news[current];
  const title = lang === 'fa' ? currentNews.title_fa : currentNews.title_en;
  const summary = lang === 'fa' ? currentNews.summary_fa : currentNews.summary_en;

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs text-primary/70 font-medium">
            {lang === 'fa' ? 'اخبار مهاجرت' : lang === 'ru' ? 'Новости миграции' : 'Immigration News'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-1">
            {lang === 'fa' ? 'آخرین اخبار و به‌روزرسانی‌ها' : lang === 'en' ? 'Latest News & Updates' : 'Последние новости'}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: isRtl ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRtl ? '-100%' : '100%', opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-xl p-5 border border-primary/10 min-h-[140px]"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/20 text-primary">
                      {currentNews.country}
                    </span>
                    <span className="text-xs text-foreground/50">{currentNews.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-foreground/70 text-xs leading-relaxed line-clamp-3">
                    {summary}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {news.map((_, idx) => (
              <button
                key={idx}
                className={`h-1 rounded-full transition-all ${
                  idx === current ? 'bg-primary w-5' : 'bg-white/20 w-1 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}