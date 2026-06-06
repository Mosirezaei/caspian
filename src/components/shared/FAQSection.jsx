import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/LanguageContext';
import { ChevronDown, HelpCircle, Loader2 } from 'lucide-react';

export default function FAQSection({ serviceType }) {
  const { lang } = useLang();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const data = await base44.entities.FAQ.filter(
          { service_type: serviceType, language: lang },
          'order',
          20
        );
        setFaqs(data || []);
      } catch (e) {
        console.error('Failed to load FAQs:', e);
        setFaqs([]);
      }
      setLoading(false);
    }
    fetchFAQs();
  }, [serviceType, lang]);

  const title = {
    fa: 'سوالات متداول',
    en: 'Frequently Asked Questions',
    ru: 'Часто задаваемые вопросы',
  };

  if (loading) {
    return (
      <div className="mt-10 glass-panel rounded-2xl p-8 border border-white/10 flex items-center justify-center py-12">
        <Loader2 className="w-5 h-5 text-primary animate-spin" />
      </div>
    );
  }

  if (faqs.length === 0) {
    return null;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">{title[lang] || title.fa}</h3>
      </div>

      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
        {faqs.map((faq, i) => (
          <motion.div key={faq.id} className={i < faqs.length - 1 ? 'border-b border-white/5' : ''}>
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors text-left"
            >
              <span className="font-medium text-foreground pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                  activeIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-4 text-sm text-foreground/70 leading-relaxed bg-white/3">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}