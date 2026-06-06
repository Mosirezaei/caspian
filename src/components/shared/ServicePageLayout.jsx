import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from './GlobalNavbar';
import StaticFAQ from './StaticFAQ';
import ContactFooter from '@/components/home/ContactFooter';

const consultTexts = {
  fa: { label: 'مشاوره آنلاین رایگان', sub: 'همین الان با کارشناس ما در واتساپ صحبت کنید' },
  en: { label: 'Free Online Consultation', sub: 'Chat with our expert on WhatsApp right now' },
  ru: { label: 'Бесплатная онлайн-консультация', sub: 'Напишите нашему специалисту в WhatsApp прямо сейчас' },
};

function WhatsAppConsultButton() {
  const { lang } = useLang();
  const t = consultTexts[lang] || consultTexts.fa;
  return (
    <div className="mt-8 mb-4">
      <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-green-600 hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-600/30 group">
        <MessageCircle className="w-6 h-6 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
        <div className="text-center">
          <div className="text-white font-bold text-base leading-tight">{t.label}</div>
          <div className="text-green-100 text-xs mt-0.5">{t.sub}</div>
        </div>
      </a>
    </div>
  );
}

export function ServicePageLayout({ children, titleFa, titleEn, titleRu, subtitleFa, subtitleEn, subtitleRu, heroImage, serviceType }) {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const title = lang === 'fa' ? titleFa : lang === 'ru' ? titleRu : titleEn;
  const subtitle = lang === 'fa' ? subtitleFa : lang === 'ru' ? subtitleRu : subtitleEn;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />

      {/* Hero */}
      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">{title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-foreground/60 text-sm sm:text-base max-w-xl">{subtitle}</motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 pb-10">
        {children}
        {serviceType && <StaticFAQ serviceType={serviceType} />}
        <WhatsAppConsultButton />
      </div>
      <ContactFooter />
    </div>
  );
}

export function InfoBlock({ title, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="glass-panel rounded-2xl p-6 mb-6">
      {title && <h2 className="text-xl font-black text-primary mb-3">{title}</h2>}
      <div className="text-sm text-foreground/70 leading-relaxed space-y-2">{children}</div>
    </motion.div>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
          <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function withLanguage(Component) {
  return function WrappedComponent(props) {
    return (
      <LanguageProvider>
        <Component {...props} />
      </LanguageProvider>
    );
  };
}