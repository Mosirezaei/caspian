import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

export default function TicketSection() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';

  const titles = {
    fa: { main: 'رزرو بلیط', subtitle: 'بلیط هواپیما و زمینی با بهترین قیمت‌ها', air: 'هواپیما', ground: 'زمینی' },
    en: { main: 'Book Tickets', subtitle: 'Best prices for flights and ground transport', air: 'Flights', ground: 'Ground' },
    ru: { main: 'Бронирование билетов', subtitle: 'Лучшие цены на авиабилеты и наземный транспорт', air: 'Авиа', ground: 'Наземный' }
  };

  const t = titles[lang] || titles.fa;

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-2 md:mb-3">
            {t.main}
          </h2>
          <p className="text-sm md:text-base text-foreground/60">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Flight Card */}
          <Link to="/services/ticket-booking">
            <motion.div
              whileHover={{ translateY: -4 }}
              className="group glass-panel rounded-2xl md:rounded-3xl border border-primary/20 p-6 md:p-8 transition-all hover:border-primary/40 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs md:text-sm text-primary font-bold mb-1">{t.air}</p>
                  <h3 className="text-lg md:text-xl font-black text-foreground">
                    {lang === 'fa' ? 'تورهای هوایی' : lang === 'en' ? 'Flight Tours' : 'Авиатуры'}
                  </h3>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  <Plane className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-foreground/60 mb-5 md:mb-6">
                {lang === 'fa' ? 'بهترین قیمت‌ها برای پروازهای داخلی و بین‌المللی' : lang === 'en' ? 'Best prices for domestic and international flights' : 'Лучшие цены на внутренние и международные рейсы'}
              </p>
              <div className="w-full py-2.5 md:py-3 rounded-xl bg-primary/20 border border-primary/40 text-primary text-xs md:text-sm font-bold hover:bg-primary/30 transition-all text-center">
                {lang === 'fa' ? 'رزرو کنید' : lang === 'en' ? 'Book Now' : 'Забронировать'}
              </div>
            </motion.div>
          </Link>

          {/* Ground Card */}
          <Link to="/services/ticket-booking">
            <motion.div
              whileHover={{ translateY: -4 }}
              className="group glass-panel rounded-2xl md:rounded-3xl border border-primary/20 p-6 md:p-8 transition-all hover:border-primary/40 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs md:text-sm text-primary font-bold mb-1">{t.ground}</p>
                  <h3 className="text-lg md:text-xl font-black text-foreground">
                    {lang === 'fa' ? 'حمل‌ونقل زمینی' : lang === 'en' ? 'Ground Transport' : 'Наземный транспорт'}
                  </h3>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  <Bus className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
              <p className="text-xs md:text-sm text-foreground/60 mb-5 md:mb-6">
                {lang === 'fa' ? 'بهترین خدمات ترانسفر و اتوبوس' : lang === 'en' ? 'Best transfer and bus services' : 'Лучший транспорт и услуги трансфера'}
              </p>
              <div className="w-full py-2.5 md:py-3 rounded-xl bg-primary/20 border border-primary/40 text-primary text-xs md:text-sm font-bold hover:bg-primary/30 transition-all text-center">
                {lang === 'fa' ? 'رزرو کنید' : lang === 'en' ? 'Book Now' : 'Забронировать'}
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}