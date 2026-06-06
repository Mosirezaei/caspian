import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Building2, Hotel, Star, Plane } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useNavigate } from 'react-router-dom';
import ServiceDetailModal from './ServiceDetailModal';

const serviceIcons = [FileText, Globe, Building2, Plane, Hotel, Star];

// index → direct route (null = open modal)
const serviceRoutes = {
  0: '/visa/schengen',
  1: '/residency/armenia',
  2: '/services/company-registration',
  3: '/travel/bus',
  4: '/travel/hotel',
  5: '/travel/vip',
};

export default function ServicesSection() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (i) => {
    if (serviceRoutes[i]) {
      navigate(serviceRoutes[i]);
    } else {
      setOpenIndex(i);
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-4 relative">
      {/* top gold divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">{t.services.subtitle?.slice(0, 30) || 'Services'}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground leading-tight">
            {t.services.title1} <span className="gold-gradient-text">{t.services.titleGold}</span> {t.services.title2}
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => handleClick(i)}
                className="group relative rounded-2xl p-7 cursor-pointer overflow-hidden transition-all duration-400 border border-white/5 hover:border-primary/30"
                style={{ background: 'linear-gradient(135deg, rgba(22,27,34,0.9) 0%, rgba(15,18,24,0.95) 100%)', backdropFilter: 'blur(20px)' }}>
                {/* hover gold shimmer */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(212,168,68,0.06) 0%, transparent 60%)' }} />
                {/* top gold accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-400 group-hover:shadow-lg group-hover:shadow-primary/25"
                    style={{ background: 'linear-gradient(135deg, rgba(212,168,68,0.15) 0%, rgba(212,168,68,0.05) 100%)', border: '1px solid rgba(212,168,68,0.2)' }}>
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">{item.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">{item.description}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs text-primary/50 font-semibold group-hover:text-primary/80 transition-colors">
                    <span>{t.lang === 'fa' ? 'بیشتر بخوانید' : t.lang === 'ru' ? 'Подробнее' : 'Learn more'}</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block">←</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <ServiceDetailModal serviceIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}