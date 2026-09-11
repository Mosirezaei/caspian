'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu, X, ChevronDown, ChevronRight,
  Home, Building2, Briefcase, MapPin,
  GraduationCap, Compass, PartyPopper, Key, ShoppingBag,
} from 'lucide-react';

import { useLang } from '@/lib/LanguageContext';

function YerevanClock({ lang }) {
  // Start as null (not `new Date()`) so server and client render identical
  // empty markup on the first pass. The real value is set client-side only,
  // inside useEffect (after hydration) — this avoids the server/client text
  // mismatch (React error #418) caused by `new Date()` differing by a few ms
  // between server render time and browser hydration time.
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) {
    return <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-foreground/65 font-vazir tabular-nums" />;
  }

  const locale = lang === 'fa' ? 'fa-IR' : lang === 'ru' ? 'ru-RU' : 'en-GB';
  const timeStr = now.toLocaleTimeString(locale, { timeZone: 'Asia/Yerevan', hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString(locale, { timeZone: 'Asia/Yerevan', month: 'long', day: 'numeric' });

  return (
    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-foreground/65 font-vazir tabular-nums">
      <span>{dateStr}</span>
      <span className="opacity-40">|</span>
      <span dir="ltr">{timeStr}</span>
    </span>
  );
}

// دسته‌های مگامنوی وبلاگ — آیکون + عنوان هر دسته، همه به آرشیو وبلاگ لینک می‌شن
// (فیلتر بر اساس دسته وقتی صفحات مقالات نوشته بشن به /blog?category= اضافه میشه)
const blogCategories = {
  fa: [
    { icon: Home, label: 'اقامت و مهاجرت', href: '/blog?category=residency' },
    { icon: Building2, label: 'ثبت شرکت و مالی', href: '/blog?category=company' },
    { icon: Briefcase, label: 'کار و اشتغال', href: '/blog?category=work' },
    { icon: MapPin, label: 'زندگی در ایروان', href: '/blog?category=life' },
    { icon: GraduationCap, label: 'تحصیل', href: '/blog?category=education' },
    { icon: Compass, label: 'گردشگری و دیدنی‌ها', href: '/blog?category=tourism' },
    { icon: PartyPopper, label: 'اخبار و فستیوال‌ها', href: '/blog?category=news' },
          { icon: Key, label: 'اجاره و خرید ملک', href: '/blog?category=apartment' },
          { icon: ShoppingBag, label: 'خرید در ارمنستان', href: '/blog?category=shopping' },
  ],
  en: [
    { icon: Home, label: 'Residency & Immigration', href: '/blog?category=residency' },
    { icon: Building2, label: 'Company Registration & Finance', href: '/blog?category=company' },
    { icon: Briefcase, label: 'Work & Employment', href: '/blog?category=work' },
    { icon: MapPin, label: 'Life in Yerevan', href: '/blog?category=life' },
    { icon: GraduationCap, label: 'Education', href: '/blog?category=education' },
    { icon: Compass, label: 'Tourism & Sights', href: '/blog?category=tourism' },
    { icon: PartyPopper, label: 'News & Festivals', href: '/blog?category=news' },
          { icon: Key, label: 'Rental & Purchase', href: '/blog?category=apartment' },
          { icon: ShoppingBag, label: 'Shopping in Armenia', href: '/blog?category=shopping' },
  ],
  ru: [
    { icon: Home, label: 'ВНЖ и миграция', href: '/blog?category=residency' },
    { icon: Building2, label: 'Регистрация компаний и финансы', href: '/blog?category=company' },
    { icon: Briefcase, label: 'Работа и трудоустройство', href: '/blog?category=work' },
    { icon: MapPin, label: 'Жизнь в Ереване', href: '/blog?category=life' },
    { icon: GraduationCap, label: 'Образование', href: '/blog?category=education' },
    { icon: Compass, label: 'Туризм и достопримечательности', href: '/blog?category=tourism' },
    { icon: PartyPopper, label: 'Новости и фестивали', href: '/blog?category=news' },
          { icon: Key, label: 'Аренда и покупка', href: '/blog?category=apartment' },
          { icon: ShoppingBag, label: 'Шопинг в Армении', href: '/blog?category=shopping' },
  ],
};

const navLinks = {
  fa: [
    { label: 'صفحه اصلی', href: '/' },
    {
      label: 'خدمات مسافرتی', href: '#', children: [
        { label: 'تورهای ارمنستان', href: '/travel/tour' },
        { label: 'رزرو هتل', href: '/travel/hotel' },
        { label: 'رزرو آپارتمان', href: '/travel/apartment' },
        { label: 'بلیط هوایی و زمینی', href: '/travel/flight-bus' },
        { label: 'ترانسفر فرودگاهی', href: '/travel/transfer' },
        { label: 'صرافی ارزی', href: '/travel/exchange' },
        { label: 'فستیوال‌ها', href: '/events' },
      ],
    },
    {
      label: 'اقامت', href: '#', children: [
        { label: 'ثبت شرکت ارمنستان', href: '/residency/business' },
        { label: 'اقامت کاری ارمنستان', href: '/residency/work' },
        { label: 'اقامت تحصیلی', href: '/residency/student' },
        { label: 'اقامت از طریق کالج‌های زبان', href: '/residency/language-college' },
        { label: 'اقامت ارمنستان از طریق تولد فرزند', href: '/residency/child-birth' },
        { label: 'اقامت از طریق سرمایه‌گذاری', href: '/residency/investment' },
      ],
    },
    {
      label: 'روسیه', href: '#', children: [
        { label: 'ویزای توریستی', href: '/visa/russia' },
        { label: 'ویزای تجاری', href: '/visa/russia/business' },
        { label: 'ویزای تحصیلی', href: '/student-visa/russia' },
      ],
    },
    { label: 'وبلاگ', href: '/blog', mega: true },
    {
      label: 'درباره کاسپین', href: '#', children: [
        { label: 'درباره ما', href: '/about' },
        { label: 'تماس با ما', href: '/contact' },
      ],
    },
  ],
  en: [
    { label: 'Home', href: '/' },
    {
      label: 'Travel Services', href: '#', children: [
        { label: 'Armenia Tours', href: '/travel/tour' },
        { label: 'Hotel Booking', href: '/travel/hotel' },
        { label: 'Apartment Booking', href: '/travel/apartment' },
        { label: 'Flight & Ground Tickets', href: '/travel/flight-bus' },
        { label: 'Airport Transfer', href: '/travel/transfer' },
        { label: 'Currency Exchange', href: '/travel/exchange' },
        { label: 'Events & Tickets', href: '/events' },
      ],
    },
    {
      label: 'Residency', href: '#', children: [
        { label: 'Armenia Company Registration', href: '/residency/business' },
        { label: 'Armenia Work Residency', href: '/residency/work' },
        { label: 'Student Residency', href: '/residency/student' },
        { label: 'Residency via Language Colleges', href: '/residency/language-college' },
        { label: 'Residency via Child Birth in Armenia', href: '/residency/child-birth' },
        { label: 'Residency via Investment', href: '/residency/investment' },
      ],
    },
    {
      label: 'Russia', href: '#', children: [
        { label: 'Tourist Visa', href: '/visa/russia' },
        { label: 'Business Visa', href: '/visa/russia/business' },
        { label: 'Student Visa', href: '/student-visa/russia' },
      ],
    },
    { label: 'Blog', href: '/blog', mega: true },
    {
      label: 'About Caspian', href: '#', children: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  ru: [
    { label: 'Главная', href: '/' },
    {
      label: 'Туристические услуги', href: '#', children: [
        { label: 'Туры по Армении', href: '/travel/tour' },
        { label: 'Бронирование отелей', href: '/travel/hotel' },
        { label: 'Бронирование апартаментов', href: '/travel/apartment' },
        { label: 'Авиа и наземные билеты', href: '/travel/flight-bus' },
        { label: 'Трансфер из аэропорта', href: '/travel/transfer' },
        { label: 'Обмен валют', href: '/travel/exchange' },
        { label: 'События и билеты', href: '/events' },
      ],
    },
    {
      label: 'ВНЖ', href: '#', children: [
        { label: 'Регистрация компании в Армении', href: '/residency/business' },
        { label: 'Рабочий ВНЖ Армении', href: '/residency/work' },
        { label: 'Учебный ВНЖ', href: '/residency/student' },
        { label: 'ВНЖ через языковые колледжи', href: '/residency/language-college' },
        { label: 'ВНЖ через рождение ребёнка в Армении', href: '/residency/child-birth' },
        { label: 'ВНЖ через инвестиции', href: '/residency/investment' },
      ],
    },
    {
      label: 'Россия', href: '#', children: [
        { label: 'Туристическая виза', href: '/visa/russia' },
        { label: 'Бизнес-виза', href: '/visa/russia/business' },
        { label: 'Студенческая виза', href: '/student-visa/russia' },
      ],
    },
    { label: 'Блог', href: '/blog', mega: true },
    {
      label: 'О Caspian', href: '#', children: [
        { label: 'О нас', href: '/about' },
        { label: 'Контакты', href: '/contact' },
      ],
    },
  ],
};

const langs = [
  { code: 'fa', label: 'فارسی' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

function DropdownItem({ child, isRtl, onNavigate }) {
  const [subOpen, setSubOpen] = useState(false);

  if (!child.children) {
    return (
      <Link href={child.href}
        onClick={onNavigate}
        className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">
        {child.label}
      </Link>
    );
  }

  return (
    <div className="relative"
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={() => setSubOpen(false)}>
      <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">
        {child.label}
        <ChevronRight className={`w-3 h-3 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {subOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 6 : -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 6 : -6 }}
            className={`absolute top-0 w-52 glass-panel border border-white/10 rounded-xl py-2 shadow-xl z-50 ${isRtl ? 'right-full mr-1' : 'left-full ml-1'}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {child.children.map((sub) => (
              <Link key={sub.href + sub.label} href={sub.href}
                onClick={onNavigate}
                className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">
                {sub.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// دراپ‌داون وبلاگ — لیست ساده مثل بقیه منوها (بدون آیکون)
function BlogMegaMenu({ isRtl, lang, onNavigate }) {
  const categories = blogCategories[lang] || blogCategories.fa;
  return (
    <div className="glass-panel border border-white/10 rounded-xl py-2 shadow-xl w-56" dir={isRtl ? 'rtl' : 'ltr'}>
      {categories.map((cat) => (
        <Link
          key={cat.label}
          href={cat.href}
          onClick={onNavigate}
          className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors"
        >
          {cat.label}
        </Link>
      ))}
      <div className="mt-1 pt-1 border-t border-white/10">
        <Link
          href="/blog"
          onClick={onNavigate}
          className="block px-4 py-2 text-sm font-bold text-primary hover:text-amber-300 transition-colors"
        >
          {lang === 'fa' ? 'مشاهده همه مقالات ←' : lang === 'ru' ? 'Все статьи →' : 'View all articles →'}
        </Link>
      </div>
    </div>
  );
}

export default function GlobalNavbar() {
  const { lang, setLang } = useLang();
  const isRtl = lang === 'fa';
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [openGroups, setOpenGroups] = useState({});

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleGroup = (label) => setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));

  const links = navLinks[lang] || navLinks.fa;
  const categories = blogCategories[lang] || blogCategories.fa;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10" aria-label="منوی اصلی">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between w-full min-w-0" dir={isRtl ? 'rtl' : 'ltr'}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="صفحه اصلی کاسپین گروه">
            <Image
              src="/images/logo.webp"
              alt="Caspian Business Group"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center min-w-0">
            {links.map((link) =>
              link.mega ? (
                <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <button id={`desktop-nav-${link.label}`} aria-haspopup="menu" aria-expanded={openDropdown === link.label}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)} onFocus={() => setOpenDropdown(link.label)}
                    onKeyDown={(event) => event.key === 'Escape' && setOpenDropdown(null)} className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary transition-colors font-medium whitespace-nowrap">
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform flex-shrink-0 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && <div role="menu" aria-labelledby={`desktop-nav-${link.label}`}
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                    dir={isRtl ? 'rtl' : 'ltr'}
                  >
                    <BlogMegaMenu isRtl={isRtl} lang={lang} onNavigate={() => {}} />
                  </div>}
                </div>
              ) : link.children ? (
                <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <button id={`desktop-nav-${link.label}`} aria-haspopup="menu" aria-expanded={openDropdown === link.label}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)} onFocus={() => setOpenDropdown(link.label)}
                    onKeyDown={(event) => event.key === 'Escape' && setOpenDropdown(null)} className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary transition-colors font-medium whitespace-nowrap">
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform flex-shrink-0 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && <div role="menu" aria-labelledby={`desktop-nav-${link.label}`}
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                    dir={isRtl ? 'rtl' : 'ltr'}
                  >
                    <div className="glass-panel border border-white/10 rounded-xl py-2 shadow-xl">
                      {link.children.map((child) => (
                        <DropdownItem key={child.label} child={child} isRtl={isRtl} onNavigate={() => {}} />
                      ))}
                    </div>
                  </div>}
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className="px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary transition-colors font-medium whitespace-nowrap">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop: Language switcher */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <YerevanClock lang={lang} />
            <div className="flex gap-1 bg-[#1a1a1a] p-1 rounded-xl border border-white/10">
              {langs.map((l) => (
                <button 
                  key={l.code} 
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${lang === l.code ? 'bg-amber-400 text-black shadow-md' : 'text-gray-300 hover:text-white'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex gap-1 bg-[#1a1a1a] p-1 rounded-lg border border-white/10">
              {langs.map((l) => (
                <button 
                  key={l.code} 
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${lang === l.code ? 'bg-amber-400 text-black' : 'text-gray-300'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button onClick={() => setMobileOpen(true)}
              aria-label="باز کردن منو" aria-expanded={mobileOpen} aria-controls="mobile-navigation"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors outline-none cursor-pointer">
              <Menu className="w-5 h-5 text-foreground/70" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/90 z-50 md:hidden" />
            <motion.div
              initial={{ x: isRtl ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              dir={isRtl ? 'rtl' : 'ltr'}
              id="mobile-navigation" role="dialog" aria-modal="true" aria-label="منوی اصلی"
              className={`fixed top-0 w-72 h-full bg-card border-white/10 z-50 flex flex-col ${isRtl ? 'right-0 border-l' : 'left-0 border-r'}`}>

              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <Image
                  src="/images/logo.webp"
                  alt="Caspian"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <button onClick={() => setMobileOpen(false)}
                  aria-label="بستن منو"
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <X className="w-4 h-4 text-foreground/60" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {links.map((link) =>
                  link.mega ? (
                    <div key={link.label}>
                      <button onClick={() => toggleGroup(link.label)} aria-expanded={Boolean(openGroups[link.label])}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-white/5 transition-colors cursor-pointer">
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openGroups[link.label] ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openGroups[link.label] && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="ps-4 py-1 space-y-0.5 border-b border-white/5 mb-1">
                              {categories.map((cat) => (
                                <Link key={cat.label} href={cat.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">
                                  {cat.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.children ? (
                    <div key={link.label}>
                      <button onClick={() => toggleGroup(link.label)} aria-expanded={Boolean(openGroups[link.label])}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-white/5 transition-colors cursor-pointer">
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openGroups[link.label] ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openGroups[link.label] && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="ps-4 py-1 space-y-0.5 border-b border-white/5 mb-1">
                              {link.children.map((child) =>
                                child.children ? (
                                  <div key={child.label}>
                                    <button onClick={() => toggleGroup(link.label + child.label)} aria-expanded={Boolean(openGroups[link.label + child.label])}
                                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-white/5 transition-colors cursor-pointer">
                                      {child.label}
                                      <ChevronDown className={`w-3 h-3 transition-transform ${openGroups[link.label + child.label] ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                      {openGroups[link.label + child.label] && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                          <div className="ps-4 space-y-0.5">
                                            {child.children.map((sub) => (
                                              <Link key={sub.label} href={sub.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-3 py-1.5 rounded-lg text-xs text-foreground/50 hover:text-primary hover:bg-white/5 transition-colors">
                                                {sub.label}
                                              </Link>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link key={child.label} href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2 rounded-lg text-sm text-foreground/60 hover:text-primary hover:bg-white/5 transition-colors">
                                    {child.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link key={link.href} href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors border-b border-white/5">
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
