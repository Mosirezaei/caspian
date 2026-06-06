import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, Clock } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const whyIcons = [Shield, Zap, Award, Clock];

export default function WhySection() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      {/* subtle gold radial bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,168,68,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs text-primary font-semibold tracking-widest uppercase">{t.why.badge}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground leading-tight">
            {t.why.title1} <span className="gold-gradient-text">{t.why.titleGold}</span> {t.why.title2}
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-5" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-4 text-foreground/50 max-w-xl mx-auto text-sm">{t.why.subtitle}</motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.why.items.map((item, i) => {
            const Icon = whyIcons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-7 text-center overflow-hidden transition-all duration-400 border border-white/5 hover:border-primary/25"
                style={{ background: 'linear-gradient(160deg, rgba(22,27,34,0.95) 0%, rgba(12,15,20,0.98) 100%)', backdropFilter: 'blur(16px)' }}>
                {/* hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(160deg, rgba(212,168,68,0.05) 0%, transparent 60%)' }} />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-400 group-hover:shadow-md group-hover:shadow-primary/20"
                    style={{ background: 'linear-gradient(135deg, rgba(212,168,68,0.12) 0%, rgba(212,168,68,0.04) 100%)', border: '1px solid rgba(212,168,68,0.18)' }}>
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}