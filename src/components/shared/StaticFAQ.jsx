'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

import { FAQ_DATA } from '@/data/faqData';
import { useLang } from '@/lib/LanguageContext';

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function StaticFAQ({ serviceType }) {
  const { lang } = useLang();
  const [active, setActive] = useState(null);
  const data = FAQ_DATA[serviceType] || [];
  const faqs = Array.isArray(data) ? data : (data[lang] || data.fa || []);
  const title = { fa: 'پرسش‌های متداول', en: 'Frequently Asked Questions', ru: 'Часто задаваемые вопросы' }[lang] || 'Frequently Asked Questions';

  if (faqs.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i} className={i < faqs.length - 1 ? 'border-b border-white/5' : ''}>
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors text-right"
            >
              <span className="font-medium text-foreground/90 text-sm leading-relaxed pr-2">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${active === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-5 text-sm text-foreground/65 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
