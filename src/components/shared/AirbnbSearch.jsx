import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, Star, ExternalLink, Bed, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/LanguageContext';
import DatePickerInput from '@/components/shared/DatePickerInput';
import CityAutocomplete from '@/components/shared/CityAutocomplete';

const labels = {
  fa: {
    title: 'اجاره آپارتمان در سراسر جهان',
    subtitle: 'آپارتمان‌های مجهز و مبله در ایروان و شهرهای مختلف جهان',
    city: 'شهر / کشور',
    checkin: 'تاریخ ورود',
    checkout: 'تاریخ خروج',
    guests: 'تعداد مهمان',
    search: 'جستجو',
    searching: 'در حال جستجو...',
    featured: 'آپارتمان‌های ویژه ایروان',
    perNight: '/ شب',
    reviews: 'نظر',
    beds: 'تخت',
    guests_label: 'مهمان',
    viewAll: 'مشاهده همه',
    book: 'رزرو کنید',
    cityPlaceholder: 'مثلاً: Paris, France',
  },
  en: {
    title: 'Apartment Rental Worldwide',
    subtitle: 'Furnished apartments in Yerevan and cities worldwide',
    city: 'City / Country',
    checkin: 'Check-in',
    checkout: 'Check-out',
    guests: 'Guests',
    search: 'Search',
    searching: 'Searching...',
    featured: 'Featured Yerevan Apartments',
    perNight: '/ night',
    reviews: 'reviews',
    beds: 'beds',
    guests_label: 'guests',
    viewAll: 'View All',
    book: 'Book Now',
    cityPlaceholder: 'e.g. Paris, France',
  },
  ru: {
    title: 'Аренда квартир по всему миру',
    subtitle: 'Меблированные апартаменты в Ереване и городах по всему миру',
    city: 'Город / Страна',
    checkin: 'Заезд',
    checkout: 'Выезд',
    guests: 'Гостей',
    search: 'Поиск',
    searching: 'Поиск...',
    featured: 'Лучшие апартаменты в Ереване',
    perNight: '/ ночь',
    reviews: 'отзывов',
    beds: 'кроватей',
    guests_label: 'гостей',
    viewAll: 'Смотреть все',
    book: 'Забронировать',
    cityPlaceholder: 'напр. Париж, Франция',
  },
};

export default function AirbnbSearch() {
  const { lang } = useLang();
  const t = labels[lang] || labels.fa;
  const isRtl = lang === 'fa';

  const [city, setCity] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    loadFeatured();
  }, []);

  const loadFeatured = async () => {
    setLoading(true);
    try {
      const res = await base44.functions.invoke('searchAirbnb', { city: 'Yerevan, Armenia' });
      setData(res.data);
    } catch (err) {
      console.error('Error loading apartments:', err);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    const searchCity = city.trim() || 'Yerevan, Armenia';
    const accountCid = data?.accountCid || '';
    const airbnbUrl = `https://www.airbnb.com/s/${encodeURIComponent(searchCity)}/homes?checkin=${checkin || ''}&checkout=${checkout || ''}&adults=${guests}${accountCid ? `&af=${accountCid}` : ''}`;
    window.open(airbnbUrl, '_blank');
  };

  return (
    <section className="py-12" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
            🏠 رزرو آپارتمان
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">{t.title}</h2>
          <p className="text-foreground/50 text-sm">{t.subtitle}</p>
        </motion.div>
      </div>

      {/* Search Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
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
              placeholder={t.cityPlaceholder || 'e.g. Paris, France'}
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
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary/40"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="col-span-2 md:col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {loading ? t.searching : t.search}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Featured Listings */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-4">{t.featured}</h3>
      </div>

      {loading && !data ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.featuredListings?.map((listing, idx) => (
            <motion.div
              key={listing.id}
              onClick={handleSearch}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {listing.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="font-bold text-foreground mb-1 line-clamp-1">{listing.title}</h4>
                <p className="text-xs text-foreground/50 mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {listing.location}
                </p>

                <div className="flex items-center gap-3 text-xs text-foreground/60 mb-3">
                  <span className="flex items-center gap-1">
                    <Bed className="w-3 h-3" /> {listing.beds} {t.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" /> {listing.guests} {t.guests_label}
                  </span>
                  <span>({listing.reviews} {t.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-primary">${listing.price}</span>
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
      )}

      {/* Contact CTA */}
      <div className="text-center mt-8">
        <button
          onClick={handleSearch}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          {t.viewAll}
        </button>
      </div>
    </section>
  );
}