import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Bus, Train, Car } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const info = {
  fa: [
    {
      icon: Plane,
      title: 'پرواز',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      desc: 'بلیط پرواز داخلی و بین‌المللی با بهترین ایرلاین‌ها از جمله ماهان، ایران‌ایر، فلای‌دبی، پگاسوس و ترکیش. جستجوی آنی قیمت و رزرو آنلاین با پشتیبانی ۲۴ ساعته کاسپین گروه.',
    },
    {
      icon: Hotel,
      title: 'هتل',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      desc: 'رزرو هتل در سراسر جهان از طریق Booking.com با بیش از ۵۰۰ هزار هتل. مقایسه قیمت، مشاهده عکس و امکانات و رزرو فوری با کمترین نرخ.',
    },
    {
      icon: Bus,
      title: 'اتوبوس',
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      desc: 'بلیط اتوبوس بین‌شهری و بین‌المللی برای مسیرهای پرطرفدار مانند ایروان–تفلیس، ایروان–تهران، ایروان–باتومی و سایر مسیرها. صندلی‌های VIP و اتوبوس‌های مجهز.',
    },
    {
      icon: Train,
      title: 'قطار',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      desc: 'رزرو قطار با کوپه خصوصی یا مشترک برای مسیرهای ارمنستان، روسیه، گرجستان و اروپا. انتخاب نوع کوپه (یک‌نفره، دو‌نفره، چهار‌نفره) با قیمت مناسب.',
    },
    {
      icon: Car,
      title: 'ترانسفر',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      desc: 'سرویس ترانسفر فرودگاهی و بین‌شهری با خودرو خصوصی یا ون‌های مجهز. شامل: فرودگاه زوارتنوتس ایروان، مرزهای بین‌المللی، هتل‌ها و هر مقصد درخواستی.',
    },
  ],
  en: [
    {
      icon: Plane,
      title: 'Flight',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      desc: 'Domestic and international flight tickets with top airlines including Mahan Air, Iran Air, FlyDubai, Pegasus, and Turkish Airlines. Instant price search and online booking with 24/7 Caspian Group support.',
    },
    {
      icon: Hotel,
      title: 'Hotel',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      desc: 'Hotel reservations worldwide via Booking.com with over 500,000 hotels. Compare prices, view photos and amenities, and book instantly at the lowest rates.',
    },
    {
      icon: Bus,
      title: 'Bus',
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      desc: 'Intercity and international bus tickets for popular routes such as Yerevan–Tbilisi, Yerevan–Tehran, Yerevan–Batumi, and more. VIP seats and fully equipped coaches available.',
    },
    {
      icon: Train,
      title: 'Train',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      desc: 'Train reservations with private or shared compartments for routes across Armenia, Russia, Georgia, and Europe. Choose your compartment type (single, double, four-bed) at competitive prices.',
    },
    {
      icon: Car,
      title: 'Transfer',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      desc: 'Airport and intercity transfer service with private cars or equipped vans. Includes: Zvartnots International Airport, border crossings, hotels, and any requested destination.',
    },
  ],
  ru: [
    {
      icon: Plane,
      title: 'Авиабилеты',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      desc: 'Билеты на внутренние и международные рейсы ведущих авиакомпаний: Mahan Air, Iran Air, FlyDubai, Pegasus, Turkish Airlines. Мгновенный поиск и бронирование онлайн с поддержкой Caspian Group 24/7.',
    },
    {
      icon: Hotel,
      title: 'Отели',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      desc: 'Бронирование отелей по всему миру через Booking.com — более 500 000 объектов. Сравнение цен, просмотр фото и удобств, мгновенное бронирование по лучшим ценам.',
    },
    {
      icon: Bus,
      title: 'Автобусы',
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      desc: 'Билеты на межгородские и международные автобусы по популярным маршрутам: Ереван–Тбилиси, Ереван–Тегеран, Ереван–Батуми и другим. VIP-места и комфортабельные автобусы.',
    },
    {
      icon: Train,
      title: 'Поезда',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      desc: 'Бронирование поездов с купе разного типа (одно-, двух-, четырёхместное) по маршрутам Армении, России, Грузии и Европы. Удобные цены и быстрое оформление.',
    },
    {
      icon: Car,
      title: 'Трансфер',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      desc: 'Трансфер в аэропорт и межгородские перевозки на частных автомобилях или микроавтобусах. Направления: аэропорт Звартноц, пограничные переходы, отели и любые другие пункты назначения.',
    },
  ],
};

export default function ServiceInfoSection() {
  const { lang } = useLang();
  const items = info[lang] || info.fa;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl font-black text-center mb-6 gold-gradient-text"
      >
        {lang === 'fa' ? 'راهنمای خدمات رزرو' : lang === 'ru' ? 'Руководство по услугам' : 'Booking Services Guide'}
      </motion.h2>
      <div className="space-y-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: lang === 'fa' ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-2xl p-4 flex gap-4 items-start"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className={`font-bold text-sm ${item.color} mb-1`}>{item.title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}