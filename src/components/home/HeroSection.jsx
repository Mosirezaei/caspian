import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Plane, Hotel, Home as HomeIcon, Star, MapPin, Building2, GraduationCap, Globe } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import ConsultModal from '@/components/home/ConsultModal';

export default function HeroSection() {
  const { t, lang } = useLang();
  const isRtl = lang === 'fa';
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-[70vh] sm:h-screen sm:max-h-[960px] flex flex-col items-center justify-center px-4 overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1609669712881-d9bc36df5ab3?w=1400&q=80"
          alt="" role="presentation" width="1400" height="900"
          className="w-full h-full object-cover opacity-15" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/70 to-background" />
        {/* Gold radial glow center */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(212,168,68,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center z-10 pt-16 sm:pt-28">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-4 sm:mb-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full blur-2xl bg-primary/20 scale-150" />
            <img
              src="/images/logo.png"
              alt="Caspian Business Group"
              width="96" height="96"
              className="relative h-20 sm:h-24 w-auto mx-auto object-contain drop-shadow-2xl"
              fetchpriority="high"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-5 text-xs sm:text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-sm shadow-primary" />
            <span className="text-primary font-semibold tracking-wide">{t.hero.badge}</span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground mb-5 leading-tight tracking-tight">
          <span>{t.hero.title1}</span>{' '}
          <span className="gold-gradient-text">{t.hero.titleGold}</span>{' '}
          <span>{t.hero.title2}</span>
        </motion.h1>

        {/* Gold divider line */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-5" />

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          className="text-sm sm:text-base text-foreground/55 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col items-center gap-3 mb-6">

          {/* CTA Button */}
          <button
            onClick={() => setModalOpen(true)}
            aria-label={t.hero.btnConsult}
            className="relative px-10 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-background overflow-hidden group transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #D4A844 0%, #F0D078 50%, #C49030 100%)' }}>
            <span className="relative z-10">{t.hero.btnConsult}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #F0D078 0%, #D4A844 50%, #F0D078 100%)' }} />
            <div className="absolute inset-0 rounded-2xl shadow-lg shadow-primary/40" />
          </button>

          {/* Scroll arrow */}
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-primary/50 mt-1">
            <ChevronDown className="w-5 h-5" />
          </motion.div>


        </motion.div>

        {/* Quick Access Icons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-lg mx-auto mb-2 mt-4">
          <div className="grid grid-cols-4 gap-2 w-full mb-2">
            {[
              { icon: MapPin, label: lang === 'fa' ? 'اقامت' : lang === 'en' ? 'Residency' : 'ВНЖ', href: '/residency/armenia' },
              { icon: Building2, label: lang === 'fa' ? 'ثبت شرکت' : lang === 'en' ? 'Company' : 'Компания', href: '/services/company-registration' },
              { icon: GraduationCap, label: lang === 'fa' ? 'تحصیلی' : lang === 'en' ? 'Student' : 'Учёба', href: '/student-visa/armenia' },
              { icon: Globe, label: lang === 'fa' ? 'ویزای روسیه' : lang === 'en' ? 'Russia Visa' : 'Виза РФ', href: '/visa/russia' },
            ].map(({ icon: Icon, label, href }) => (
              <Link key={label} to={href}
                className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border border-primary/15 bg-white/3 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/8 transition-all group"
                style={{ background: 'rgba(212,168,68,0.03)' }}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform drop-shadow-sm" />
                <span className="text-xs font-semibold text-foreground/70 group-hover:text-primary transition-colors text-center leading-tight">{label}</span>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 w-full">
            {[
              { icon: Plane, label: lang === 'fa' ? 'پرواز' : lang === 'en' ? 'Flight' : 'Авиа', href: '/travel/flight' },
              { icon: Hotel, label: lang === 'fa' ? 'هتل' : lang === 'en' ? 'Hotel' : 'Отель', href: '/travel/hotel' },
              { icon: HomeIcon, label: lang === 'fa' ? 'آپارتمان' : lang === 'en' ? 'Apartment' : 'Квартира', href: '/travel/apartment' },
              { icon: Star, label: 'VIP', href: '/travel/vip' },
            ].map(({ icon: Icon, label, href }) => (
              <Link key={label} to={href}
                className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border border-primary/15 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/8 transition-all group"
                style={{ background: 'rgba(212,168,68,0.03)' }}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform drop-shadow-sm" />
                <span className="text-xs font-semibold text-foreground/70 group-hover:text-primary transition-colors text-center leading-tight">{label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-6 flex flex-col items-center gap-0 text-white/25">
        <ChevronDown className="w-7 h-7" />
        <ChevronDown className="w-7 h-7 -mt-4" />
      </motion.div>

      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}