'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import GlobalNavbar from './GlobalNavbar';
import StaticFAQ from './StaticFAQ';
import PageSidebar from './PageSidebar';
import WhatsAppBottomCTA from './WhatsAppBottomCTA';

const SITE_URL = 'https://caspian.am';

export function ServicePageLayout({ children, titleFa, titleEn, titleRu, subtitleFa, subtitleEn, subtitleRu, heroImage, serviceType, seoTitle, seoDescription, breadcrumbs }) {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const title = lang === 'fa' ? titleFa : lang === 'ru' ? titleRu : titleEn;
  const subtitle = lang === 'fa' ? subtitleFa : lang === 'ru' ? subtitleRu : subtitleEn;
  useSEO({ title: seoTitle || (title ? `${title} | گروه کاسپین` : undefined), description: seoDescription || subtitle });
  const showBreadcrumbs = isRtl && breadcrumbs && breadcrumbs.length > 0;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />
      {showBreadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.label, ...(b.href ? { item: `${SITE_URL}${b.href}` } : {}) })) }) }} />}
      <div className="relative pt-14"><div className="relative h-56 sm:h-72 overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl font-black text-foreground mb-2"><span className="gold-gradient-text">{title}</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-foreground/60 text-sm sm:text-base max-w-xl">{subtitle}</motion.p>
        </div>
      </div></div>
      {showBreadcrumbs && <nav aria-label="breadcrumb" className="max-w-6xl mx-auto px-4 pt-4 text-xs text-foreground/50 flex items-center gap-1.5 flex-wrap">{breadcrumbs.map((b, i) => <span key={i} className="flex items-center gap-1.5">{i > 0 && <span className="text-foreground/30">/</span>}{b.href ? <Link href={b.href} className="hover:text-primary transition-colors">{b.label}</Link> : <span className="text-foreground/80" aria-current="page">{b.label}</span>}</span>)}</nav>}
      <main className="max-w-6xl mx-auto px-4 py-10 pb-10"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">{children}{serviceType && <div className="mt-8"><WhatsAppBottomCTA serviceType={serviceType} /></div>}{serviceType && <StaticFAQ serviceType={serviceType} />}</div>
        <PageSidebar serviceType={serviceType} />
      </div></main>
    </div>
  );
}

export function InfoBlock({ title, children }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel rounded-2xl p-6 mb-6">{title && <h2 className="text-xl font-black text-primary mb-3">{title}</h2>}<div className="text-sm text-foreground/70 leading-relaxed space-y-2">{children}</div></motion.div>;
}
export function CheckList({ items }) {
  return <ul className="space-y-2 mt-3">{items.map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-foreground/70"><span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>{item}</li>)}</ul>;
}
export function withLanguage(Component) {
  return function WrappedComponent(props) { return <LanguageProvider><Component {...props} /></LanguageProvider>; };
}