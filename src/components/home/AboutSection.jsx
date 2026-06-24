import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            style={{ boxShadow: '0 0 60px rgba(212,168,68,0.08), 0 0 120px rgba(212,168,68,0.04)' }}>
            {/* Gold border frame */}
            <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
              style={{ border: '1px solid rgba(212,168,68,0.2)' }} />
            <img src="/images/about.webp"
              alt="Partnership" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          {/* Stat badge */}
          <div className="absolute -bottom-5 -end-5 rounded-2xl p-5 flex items-center gap-3 z-20"
            style={{ background: 'linear-gradient(135deg, rgba(22,27,34,0.97) 0%, rgba(15,18,24,0.99) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,168,68,0.25)', boxShadow: '0 8px 32px rgba(212,168,68,0.12)' }}>
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-lg font-black">✓</span>
            </div>
            <div>
              <div className="text-2xl font-black gold-gradient-text leading-none">{t.about.statVal}</div>
              <div className="text-xs text-foreground/50 mt-1">{t.about.statLabel}</div>
            </div>
          </div>
          {/* Gold corner accent */}
          <div className="absolute -top-3 -start-3 w-12 h-12 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,168,68,0.15) 0%, transparent 70%)' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4 leading-tight">
            {t.about.title1} <span className="gold-gradient-text">{t.about.titleGold}</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-primary/60 to-transparent mb-6" />
          <p className="text-foreground/55 leading-relaxed mb-8 text-sm sm:text-base">{t.about.body}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.about.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-primary/8 hover:border-primary/20 transition-colors"
                style={{ background: 'rgba(212,168,68,0.02)' }}>
                <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                <span className="text-sm text-foreground/65">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}