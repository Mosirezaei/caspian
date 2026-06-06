import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, Baby, Star, ExternalLink, Building2 } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import DatePickerInput from '@/components/shared/DatePickerInput';
import CityAutocomplete from '@/components/shared/CityAutocomplete';

const labels = {
  fa: {
    title: 'رزرو هتل در سراسر جهان',
    subtitle: 'بهترین هتل‌های ۳، ۴ و ۵ ستاره با قیمت‌های اختصاصی کاسپین',
    city: 'شهر / کشور',
    checkin: 'تاریخ ورود',
    checkout: 'تاریخ خروج',
    guests: 'تعداد مهمان',
    rooms: 'اتاق',
    search: 'جستجو',
    searching: 'در حال جستجو...',
    featured: 'هتل‌های پیشنهادی',
    perNight: '/ شب',
    reviews: 'نظر',
    book: 'رزرو کنید',
    viewAll: 'مشاهده همه',
    cityPlaceholder: 'مثلاً: Yerevan, Armenia',
    stars: 'ستاره',
  },
  en: {
    title: 'Hotel Booking Worldwide',
    subtitle: 'Best 3, 4 & 5-star hotels at exclusive Caspian rates',
    city: 'City / Country',
    checkin: 'Check-in',
    checkout: 'Check-out',
    guests: 'Guests',
    rooms: 'Rooms',
    search: 'Search',
    searching: 'Searching...',
    featured: 'Featured Hotels',
    perNight: '/ night',
    reviews: 'reviews',
    book: 'Book Now',
    viewAll: 'View All',
    cityPlaceholder: 'e.g. Yerevan, Armenia',
    stars: 'stars',
  },
  ru: {
    title: 'Бронирование отелей по всему миру',
    subtitle: 'Лучшие отели 3, 4 и 5 звёзд по эксклюзивным ценам Caspian',
    city: 'Город / Страна',
    checkin: 'Заезд',
    checkout: 'Выезд',
    guests: 'Гостей',
    rooms: 'Номеров',
    search: 'Поиск',
    searching: 'Поиск...',
    featured: 'Рекомендуемые отели',
    perNight: '/ ночь',
    reviews: 'отзывов',
    book: 'Забронировать',
    viewAll: 'Смотреть все',
    cityPlaceholder: 'напр. Ереван, Армения',
    stars: 'звёзд',
  },
};

const featuredHotels = [
  // ارمنستان
  {
    id: 1,
    name: 'The Alexander — Luxury Collection',
    location: { fa: 'ایروان، ارمنستان', en: 'Yerevan, Armenia', ru: 'Ереван, Армения' },
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
    stars: 5, price: 180, rating: 4.9, reviews: 312,
  },
  {
    id: 2,
    name: 'Marriott Armenia Yerevan',
    location: { fa: 'ایروان، ارمنستان', en: 'Yerevan, Armenia', ru: 'Ереван, Армения' },
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
    stars: 5, price: 150, rating: 4.8, reviews: 489,
  },
  {
    id: 3,
    name: 'Radisson Blu Yerevan',
    location: { fa: 'ایروان، ارمنستان', en: 'Yerevan, Armenia', ru: 'Ереван, Армения' },
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
    stars: 5, price: 130, rating: 4.7, reviews: 276,
  },
  // دبی
  {
    id: 4,
    name: 'Burj Al Arab',
    location: { fa: 'دبی، امارات', en: 'Dubai, UAE', ru: 'Дубай, ОАЭ' },
    image: 'https://images.unsplash.com/photo-1580224048312-89dff81ca0e5?w=400&h=300&fit=crop',
    stars: 5, price: 780, rating: 5.0, reviews: 1204,
  },
  {
    id: 5,
    name: 'Atlantis The Palm',
    location: { fa: 'دبی، امارات', en: 'Dubai, UAE', ru: 'Дубай, ОАЭ' },
    image: 'https://images.unsplash.com/photo-1567636788276-40a47795ba4d?w=400&h=300&fit=crop',
    stars: 5, price: 420, rating: 4.8, reviews: 2341,
  },
  // آنتالیا
  {
    id: 6,
    name: 'Rixos Premium Belek',
    location: { fa: 'آنتالیا، ترکیه', en: 'Antalya, Turkey', ru: 'Анталья, Турция' },
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
    stars: 5, price: 210, rating: 4.9, reviews: 876,
  },
];

export default function HotelSearch() {
  const { lang } = useLang();
  const t = labels[lang] || labels.fa;
  const isRtl = lang === 'fa';
  // lang is already available from useLang above

  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    // Booking.com search link
    const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city || 'Yerevan')}&checkin=${checkin || ''}&checkout=${checkout || ''}&group_adults=${guests}&group_children=${children}`;
    window.open(bookingUrl, '_blank');
  };

  return (
    <section className="py-12" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
            <Building2 className="inline w-3 h-3 mr-1" /> رزرو هتل
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">{t.title}</h2>
          <p className="text-foreground/50 text-sm">{t.subtitle}</p>
        </motion.div>
      </div>

      {/* Search Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="glass-panel rounded-2xl p-4 md:p-6 mb-8 border border-primary/30 gold-glow"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {/* City */}
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs text-foreground/50 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {t.city}
            </label>
            <CityAutocomplete
              value={city}
              onChange={setCity}
              placeholder={t.cityPlaceholder}
              isRtl={isRtl}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary/40"
            />
          </div>

          {/* Check-in */}
          <div>
            <label className="text-xs text-foreground/50 mb-1.5 block">{t.checkin}</label>
            <DatePickerInput value={checkin} onChange={setCheckin} placeholder={t.checkin} />
          </div>

          {/* Check-out */}
          <div>
            <label className="text-xs text-foreground/50 mb-1.5 block">{t.checkout}</label>
            <DatePickerInput value={checkout} onChange={setCheckout} placeholder={t.checkout} minDate={checkin} />
          </div>

          {/* Guests */}
          <div>
            <label className="text-xs text-foreground/50 mb-1.5 flex items-center gap-1">
              <Users className="w-3 h-3" /> {t.guests}
            </label>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
              <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center hover:bg-primary/40">−</button>
              <span className="flex-1 text-center text-sm font-bold">{guests}</span>
              <button onClick={() => setGuests(Math.min(9, guests + 1))} className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center hover:bg-primary/40">+</button>
            </div>
          </div>

          {/* Children */}
          <div>
            <label className="text-xs text-foreground/50 mb-1.5 flex items-center gap-1">
              <Baby className="w-3 h-3" /> {lang === 'fa' ? 'کودک' : lang === 'ru' ? 'Дети' : 'Children'}
            </label>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5">
              <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center hover:bg-primary/40">−</button>
              <span className="flex-1 text-center text-sm font-bold">{children}</span>
              <button onClick={() => setChildren(Math.min(6, children + 1))} className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center hover:bg-primary/40">+</button>
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-2 md:col-span-1 flex items-end">
            <button onClick={handleSearch}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> {t.search}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Featured Hotels */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-4">{t.featured}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredHotels.map((hotel, idx) => (
          <motion.div key={hotel.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
            className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all cursor-pointer"
            onClick={handleSearch}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={hotel.image} alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 flex gap-2">
                <span className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {hotel.rating}
                </span>
                <span className="px-2 py-1 rounded-lg bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-bold">
                  {'★'.repeat(hotel.stars)}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-foreground mb-1 line-clamp-1">{hotel.name}</h4>
              <p className="text-xs text-foreground/50 mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {hotel.location[lang] || hotel.location.en}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-black text-primary">${hotel.price}</span>
                  <span className="text-xs text-foreground/50">{t.perNight}</span>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t.book} <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-8">
        <button onClick={handleSearch}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all">
          {t.viewAll} <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}