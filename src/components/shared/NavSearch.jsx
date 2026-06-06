import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const sitePages = [
  { fa: 'صفحه اصلی', en: 'Home', ru: 'Главная', href: '/' },
  { fa: 'ویزای شینگن', en: 'Schengen Visa', ru: 'Шенгенская виза', href: '/services/visa-schengen' },
  { fa: 'ویزای رومانی', en: 'Romania Visa', ru: 'Виза в Румынию', href: '/services/visa-romania' },
  { fa: 'ویزای روسیه', en: 'Russia Visa', ru: 'Виза в Россию', href: '/services/visa-russia' },
  { fa: 'ویزای آمریکای جنوبی', en: 'South America Visa', ru: 'Виза в Южную Америку', href: '/services/visa-south-america' },
  { fa: 'وقت سفارت آمریکا و کانادا', en: 'US/Canada Embassy Appointment', ru: 'Запись в посольство', href: '/services/embassy-appointment' },
  { fa: 'اقامت ارمنستان', en: 'Armenia Residency', ru: 'ВНЖ Армении', href: '/services/residency' },
  { fa: 'ثبت شرکت در ارمنستان', en: 'Company Registration', ru: 'Регистрация компании', href: '/services/company-registration' },
  { fa: 'پذیرش تحصیلی', en: 'Student Admission', ru: 'Поступление в вузы', href: '/services/student-admission' },
  { fa: 'صرافی و رمزارز', en: 'Exchange & Crypto', ru: 'Обмен и криптовалюта', href: '/services/exchange' },
  { fa: 'رزرو بلیط هواپیما', en: 'Flight Ticket Booking', ru: 'Бронирование билетов', href: '/services/ticket-booking' },
  { fa: 'رزرو هتل و آپارتمان', en: 'Hotel & Apartment Booking', ru: 'Бронирование отелей', href: '/services/hotel' },
  { fa: 'پشتیبانی VIP', en: 'VIP Support', ru: 'VIP поддержка', href: '/vip' },
  { fa: 'درباره ما', en: 'About Us', ru: 'О нас', href: '/about' },
  { fa: 'تماس با ما', en: 'Contact Us', ru: 'Контакты', href: '/contact' },
  { fa: 'رزرو مشاوره', en: 'Book Consultation', ru: 'Консультация', href: '/book' },
  { fa: 'پیگیری سفارش', en: 'Track Order', ru: 'Отследить заказ', href: '/track' },
  { fa: 'پنل کاربری', en: 'Dashboard', ru: 'Панель', href: '/profile' },
];

const labels = {
  fa: { placeholder: 'جستجو در سایت...', noResult: 'نتیجه‌ای پیدا نشد' },
  en: { placeholder: 'Search the site...', noResult: 'No results found' },
  ru: { placeholder: 'Поиск по сайту...', noResult: 'Ничего не найдено' },
};

export default function NavSearch() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const l = labels[lang] || labels.fa;

  const siteResults = query.trim().length >= 2
    ? sitePages.filter(p =>
        (p[lang] || p.fa).toLowerCase().includes(query.toLowerCase()) ||
        p.fa.includes(query) || p.en.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handler = (e) => { if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
    else setQuery('');
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button onClick={() => setOpen(v => !v)}
        aria-label="جستجو در سایت"
        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-foreground/60 hover:text-primary">
        <Search className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 w-80 glass-panel border border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden"
            dir={lang === 'fa' ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10">
              <Search className="w-4 h-4 text-foreground/40 flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={l.placeholder}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/30 outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-foreground/30 hover:text-foreground/60">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {query.trim().length >= 2 && (
              <div className="max-h-80 overflow-y-auto">
                {siteResults.length > 0 ? (
                  siteResults.map((p, i) => (
                    <Link
                      key={i}
                      to={p.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                    >
                      <Search className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{p[lang] || p.fa}</span>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-4 text-sm text-foreground/30 text-center">{l.noResult}</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}