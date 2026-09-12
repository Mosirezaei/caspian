'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { getWhatsAppUrl } from '@/lib/contact';
import { 
  MapPin, 
  Calendar, 
  Users, 
  BedDouble, 
  Plus, 
  Minus, 
  ChevronDown,
  Send,
  X
} from 'lucide-react';

// مقاصد و مناطق ارمنستان
const ARMENIA_LOCATIONS = [
  { fa: 'ایروان — مرکز شهر (کنترون)', en: 'Yerevan — Kentron (City Center)', ru: 'Ереван — Кентрон (Центр)' },
  { fa: 'ایروان — خیابان شمالی و میدان جمهوری', en: 'Yerevan — Northern Ave & Republic Sq', ru: 'Ереван — Северный пр. и пл. Республики' },
  { fa: 'ایروان — منطقه کاسکاد', en: 'Yerevan — Cascade Area', ru: 'Ереван — Каскад' },
  { fa: 'ایروان — آرابکیر (خیابان کومیتاس)', en: 'Yerevan — Arabkir (Komitas Ave)', ru: 'Ереван — Арабкир (пр. Комитаса)' },
  { fa: 'ایروان — داوتاشن و نور نورک', en: 'Yerevan — Davtashen & Nor Nork', ru: 'Ереван — Давташен и Нор Норк' },
  { fa: 'زاخکادزور (منطقه کوهستانی و پیست اسکی)', en: 'Tsaghkadzor (Ski Resort)', ru: 'Цахкадзор (Горнолыжный курорт)' },
  { fa: 'دیلیجان (طبیعت سرسبز)', en: 'Dilijan (Resort Town)', ru: 'Дилижан' },
  { fa: 'دریاچه سوان', en: 'Lake Sevan', ru: 'Озеро Севан' }
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=75', altFa: 'نمونه فضای نشیمن آپارتمان مبله در ایروان', altEn: 'Sample furnished living room in Yerevan' },
  { src: 'https://images.unsplash.com/photo-1697700257503-1b6e2034eb37?w=800&q=75', altFa: 'ساختمان و فواره در نزدیکی میدان جمهوری ایروان', altEn: 'Building and fountain near Republic Square, Yerevan' },
  { src: 'https://images.unsplash.com/photo-1675279200694-8529c73b1fd0?w=800&q=75', altFa: 'نمونه آشپزخانه مجهز آپارتمان‌های اجاره‌ای ایروان', altEn: 'Sample equipped kitchen in a Yerevan rental apartment' },
  { src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=75', altFa: 'نمونه اتاق خواب آپارتمان مبله', altEn: 'Sample bedroom in a furnished apartment' },
];

const GALLERY = [
  { src: 'https://unsplash.com/photos/3wylDrjxH-E/download?force=true&w=1200', altFa: 'نشیمن آپارتمان نوساز با مبلمان مدرن', altEn: 'Modern living room in a new apartment' },
  { src: 'https://unsplash.com/photos/gREquCUXQLI/download?force=true&w=1200', altFa: 'اتاق مرتب و مبله آپارتمان نوساز', altEn: 'Tidy furnished room in a new apartment' },
  { src: 'https://unsplash.com/photos/tHkJAMcO3QE/download?force=true&w=1200', altFa: 'مبل و صندلی در آپارتمان نوساز', altEn: 'Sofa and armchair in a new apartment' },
  { src: 'https://unsplash.com/photos/MP0bgaS_d1c/download?force=true&w=1200', altFa: 'آشپزخانه مدرن با یخچال نو', altEn: 'Modern kitchen with a new refrigerator' },
  { src: 'https://unsplash.com/photos/AB-q9lwCVv8/download?force=true&w=1200', altFa: 'نشیمن مجهز با تلویزیون و صندلی', altEn: 'Furnished living room with television' },
];

const APARTMENT_STYLES = [
  {
    id: 'new', label: 'ساختمان‌های نوساز',
    title: 'ساختمان‌های نوساز؛ امکانات تازه و طراحی مدرن',
    text: 'این واحدها در ساختمان‌هایی ساخته شده‌اند که عمر کمی دارند و معمولاً آسانسور، لابی، تأسیسات به‌روز و عایق‌کاری مناسب‌تری ارائه می‌دهند. داخل آپارتمان نیز اغلب کاملاً نوساز است؛ کابینت، لوازم آشپزخانه، مبلمان، تخت، تشک و وسایل برقی معمولاً نو یا بسیار کم‌استفاده هستند. این گزینه برای خانواده‌ها و مسافرانی که ظاهر مدرن، تمیزی و امکانات کامل برایشان اولویت دارد مناسب‌تر است.',
    images: GALLERY,
  },
  {
    id: 'renovated', label: 'قدیمی‌ساز بازسازی‌شده',
    title: 'قدیمی‌ساز بازسازی‌شده؛ داخل مدرن، ساختمان اصیل',
    text: 'در این سبک، نمای بیرونی، راهروها یا مشاعات ممکن است قدیمی‌ساز باشند، اما خودِ واحد به‌طور کامل یا مرحله‌ای بازسازی شده است. کف، رنگ، سرویس بهداشتی، آشپزخانه، سیستم گرمایش و مبلمان می‌تواند نوسازی شده باشد. مزیت آن معمولاً متراژ بهتر، محله‌های مرکزی‌تر و دسترسی عالی است؛ بااین‌حال کیفیت آسانسور، عایق صدا، پارکینگ و وضعیت مشاعات باید پیش از رزرو بررسی شود.',
    images: [
      { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80', altFa: 'نشیمن بازسازی‌شده آپارتمان', altEn: 'Renovated apartment living room' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80', altFa: 'آشپزخانه مدرن در ساختمان قدیمی بازسازی‌شده', altEn: 'Modern kitchen in a renovated older building' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80', altFa: 'اتاق خواب آپارتمان بازسازی‌شده', altEn: 'Bedroom in a renovated apartment' },
      { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80', altFa: 'حمام و فضای داخلی بازسازی‌شده', altEn: 'Renovated bathroom and interior' },
    ],
  },
  {
    id: 'budget', label: 'قدیمی‌ساز اقتصادی',
    title: 'قدیمی‌ساز اقتصادی؛ انتخاب کاربردی با اولویت بودجه',
    text: 'این واحدها معمولاً در ساختمان‌های قدیمی‌تر و محله‌های اقتصادی‌تر قرار دارند. ممکن است نمای ساختمان، راهروها، پنجره‌ها یا بخشی از تأسیسات قدیمی باشد و دکوراسیون کاملاً مطابق سلیقهٔ مدرن نباشد. برای سفرهای کاری کوتاه، اقامت اقتصادی یا کسانی که بیشتر روز را بیرون از خانه هستند می‌تواند مقرون‌به‌صرفه باشد؛ اما معمولاً برای خانواده‌هایی که به ظاهر، سکوت، آسانسور مدرن و امکانات لوکس اهمیت می‌دهند پیشنهاد اول نیست.',
    images: [
      { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80', altFa: 'فضای داخلی آپارتمان اقتصادی', altEn: 'Budget apartment interior' },
      { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80', altFa: 'نشیمن ساده آپارتمان قدیمی', altEn: 'Simple living room in an older apartment' },
      { src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=900&q=80', altFa: 'آشپزخانه ساده و کاربردی', altEn: 'Simple practical kitchen' },
      { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80&crop=faces', altFa: 'نمونه اتاق خواب اقتصادی', altEn: 'Budget apartment bedroom' },
    ],
  },
];

function ApartmentStyleGuide() {
  const [active, setActive] = useState('new');
  const [selected, setSelected] = useState(null);
  const style = APARTMENT_STYLES.find((item) => item.id === active) || APARTMENT_STYLES[0];

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => { if (event.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return <section id="apartment-styles" className="glass-panel rounded-2xl p-6 sm:p-8 mb-10 scroll-mt-24">
    <h2 className="text-xl sm:text-2xl font-black text-primary mb-2">سبک و استاندارد آپارتمان‌های ارمنستان</h2>
    <p className="text-sm text-foreground/60 leading-7 mb-5">پیش از انتخاب، تفاوت ساختمان و داخل واحد را ببینید؛ عکس‌ها نمونهٔ سبک هستند و تصاویر دقیق واحد آزاد هنگام هماهنگی ارسال می‌شود.</p>
    <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
      {APARTMENT_STYLES.map((item) => <button key={item.id} type="button" onClick={() => { setActive(item.id); setSelected(null); }} className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-colors ${active === item.id ? 'bg-primary text-black' : 'bg-white/5 text-foreground/65 border border-white/10 hover:border-primary/40'}`}>{item.label}</button>)}
    </div>
    <div className="pt-5">
      <h3 className="text-lg font-black text-foreground mb-3">{style.title}</h3>
      <p className="text-sm text-foreground/75 leading-8 mb-5">{style.text}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {style.images.map((image, index) => <button key={`${style.id}-${index}`} type="button" onClick={() => setSelected(index)} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"><img src={image.src} alt={image.altFa} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" /><span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" /></button>)}
      </div>
    </div>
    {selected !== null && <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="نمایش تصاویر آپارتمان" onClick={() => setSelected(null)}>
      <button type="button" onClick={() => setSelected(null)} aria-label="بستن تصویر" className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"><X className="w-5 h-5" /></button>
      <div className="w-full max-w-5xl max-h-full flex flex-col items-center gap-3" onClick={(event) => event.stopPropagation()}>
        <img src={style.images[selected].src} alt={style.images[selected].altFa} className="max-h-[78vh] max-w-full object-contain rounded-xl" />
        <div className="flex gap-2 overflow-x-auto max-w-full pb-1">{style.images.map((image, index) => <button key={`modal-${style.id}-${index}`} type="button" onClick={() => setSelected(index)} className={`w-16 h-12 shrink-0 rounded-lg overflow-hidden border-2 ${selected === index ? 'border-primary' : 'border-white/20'}`}><img src={image.src} alt="" className="w-full h-full object-cover" /></button>)}</div>
      </div>
    </div>}
  </section>;
}\n\nfunction ApartmentContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  const [formData, setFormData] = useState({
    destination: 'ایروان — مرکز شهر (کنترون)',
    checkIn: '',
    checkOut: '',
    bedrooms: '1',
    adults: 2,
    childrenAbove7: 0,
    childrenUnder7: 0
  });

  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];

  // بستن منوی کشویی نفرات در صورت کلیک بیرون از آن
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGuestsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateCount = (key, delta, min = 0, max = 20) => {
    setFormData(prev => ({
      ...prev,
      [key]: Math.min(max, Math.max(min, prev[key] + delta))
    }));
  };

  const totalGuests = formData.adults + formData.childrenAbove7 + formData.childrenUnder7;

  const handleWhatsAppBooking = () => {
    const text = isFa 
      ? `درخواست رزرو آپارتمان در ارمنستان:
📍 مقصد / منطقه: ${formData.destination}
📅 تاریخ ورود: ${formData.checkIn || 'نامشخص'}
📅 تاریخ خروج: ${formData.checkOut || 'نامشخص'}
🛏 تعداد اتاق خواب: ${formData.bedrooms === 'studio' ? 'استودیو (بدون اتاق)' : `${formData.bedrooms} خوابه`}
👥 بزرگسال: ${formData.adults} نفر
🧒 کودک ۷ سال به بالا: ${formData.childrenAbove7} نفر
👶 کودک زیر ۷ سال: ${formData.childrenUnder7} نفر`
      : `Apartment Booking Inquiry in Armenia:
📍 Destination / Area: ${formData.destination}
📅 Check-in: ${formData.checkIn || 'Not specified'}
📅 Check-out: ${formData.checkOut || 'Not specified'}
🛏 Bedrooms: ${formData.bedrooms}
👥 Adults: ${formData.adults}
🧒 Children (7+ yrs): ${formData.childrenAbove7}
👶 Children (<7 yrs): ${formData.childrenUnder7}`;

    window.open(getWhatsAppUrl(undefined, text), '_blank');
  };

  return (
    <ServicePageLayout
      titleFa="اجاره آپارتمان مبله در ایروان"
      titleEn="Furnished Apartment Rental in Yerevan"
      titleRu="Аренда меблированных квартир в Ереване"
      subtitleFa="اقامت کوتاه‌مدت و ماهانه با آشپزخانه کامل، عکس واقعی و بررسی ظرفیت"
      subtitleEn="Daily & monthly stays with a full kitchen, real photos, and availability checks"
      subtitleRu="Посуточное и помесячное проживание с полной кухней, реальными фото и проверкой доступности"
      heroImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
      showFaq={false}>

        <button type="button" onClick={() => document.getElementById('apartment-styles')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="mb-4 w-full sm:w-auto px-5 py-3 rounded-2xl bg-primary text-black font-black hover:bg-yellow-500 transition-colors">حتماً قبل از رزرو مطالعه کنید</button>\n\n      {/* فرم رزرو شکیل و اختصاصی */}
      <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-primary/20 mb-10 bg-black/60 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <h3 className="text-base sm:text-lg font-bold text-white">
            {isFa ? 'استعلام قیمت و رزرو سریع آپارتمان در ارمنستان' : 'Check Availability & Instant Quote'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* شهر / منطقه ارمنستان */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {isFa ? 'شهر / منطقه ارمنستان' : 'Destination / Area'}
            </label>
            <select
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-primary focus:outline-none transition-colors">
              {ARMENIA_LOCATIONS.map((loc, idx) => (
                <option key={idx} value={loc.fa} className="bg-neutral-900 text-white">
                  {isFa ? loc.fa : isRu ? loc.ru : loc.en}
                </option>
              ))}
            </select>
          </div>

          {/* تعداد اتاق خواب */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-primary" />
              {isFa ? 'تعداد اتاق خواب' : 'Bedrooms'}
            </label>
            <select
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-primary focus:outline-none transition-colors">
              <option value="studio" className="bg-neutral-900 text-white">{isFa ? 'استودیو (سوئیت بدون خواب)' : 'Studio'}</option>
              <option value="1" className="bg-neutral-900 text-white">{isFa ? 'یک خوابه' : '1 Bedroom'}</option>
              <option value="2" className="bg-neutral-900 text-white">{isFa ? 'دو خوابه' : '2 Bedrooms'}</option>
              <option value="3" className="bg-neutral-900 text-white">{isFa ? 'سه خوابه' : '3 Bedrooms'}</option>
              <option value="4+" className="bg-neutral-900 text-white">{isFa ? 'چهار خوابه یا بزرگتر' : '4+ Bedrooms'}</option>
            </select>
          </div>

          {/* تاریخ ورود */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {isFa ? 'تاریخ ورود' : 'Check-in'}
            </label>
            <input
              ref={checkInRef}
              type="date"
              min={today}
              value={formData.checkIn}
              onClick={() => checkInRef.current?.showPicker?.()}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-primary focus:outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>

          {/* تاریخ خروج */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {isFa ? 'تاریخ خروج' : 'Check-out'}
            </label>
            <input
              ref={checkOutRef}
              type="date"
              min={formData.checkIn || today}
              value={formData.checkOut}
              onClick={() => checkOutRef.current?.showPicker?.()}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-primary focus:outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>
        </div>

        {/* بخش تعداد مسافران و دکمه ارسال */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 items-end">
          {/* منوی انتخاب تفکیکی مسافران */}
          <div className="sm:col-span-2 relative" ref={dropdownRef}>
            <label className="text-xs font-medium text-foreground/70 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-primary" />
              {isFa ? 'مسافران و همراهان' : 'Guests'}
            </label>
            
            <button
              type="button"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm flex items-center justify-between hover:border-white/20 transition-all text-right">
              <span className="truncate">
                {isFa 
                  ? `${formData.adults} بزرگسال` +
                    (formData.childrenAbove7 > 0 ? ` • ${formData.childrenAbove7} کودک بالای ۷ سال` : '') +
                    (formData.childrenUnder7 > 0 ? ` • ${formData.childrenUnder7} کودک زیر ۷ سال` : '')
                  : `${totalGuests} Guests (${formData.adults} Adults, ${formData.childrenAbove7 + formData.childrenUnder7} Children)`}
              </span>
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${showGuestsDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showGuestsDropdown && (
              <div className="absolute z-50 right-0 left-0 mt-2 bg-neutral-900/95 border border-white/15 p-4 rounded-2xl shadow-2xl backdrop-blur-xl space-y-4">
                {/* بزرگسالان */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <div className="text-sm font-semibold text-white">{isFa ? 'بزرگسال' : 'Adults'}</div>
                    <div className="text-xs text-foreground/50">{isFa ? 'سن ۱۲ سال به بالا' : 'Age 12+'}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateCount('adults', -1, 1, 15)}
                      disabled={formData.adults <= 1}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-white text-sm">{formData.adults}</span>
                    <button
                      type="button"
                      onClick={() => updateCount('adults', 1, 1, 15)}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* کودک بالای ۷ سال */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <div className="text-sm font-semibold text-white">{isFa ? 'کودک (۷ تا ۱۲ سال)' : 'Children (Age 7-12)'}</div>
                    <div className="text-xs text-foreground/50">{isFa ? 'نیازمند تخت مجزا' : 'With separate bed'}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateCount('childrenAbove7', -1, 0, 6)}
                      disabled={formData.childrenAbove7 <= 0}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-white text-sm">{formData.childrenAbove7}</span>
                    <button
                      type="button"
                      onClick={() => updateCount('childrenAbove7', 1, 0, 6)}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* کودک زیر ۷ سال */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">{isFa ? 'کودک (زیر ۷ سال)' : 'Toddlers / Infants (<7)'}</div>
                    <div className="text-xs text-foreground/50">{isFa ? 'بدون نیاز به تخت مجزا' : 'Sharing bed / Cot'}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateCount('childrenUnder7', -1, 0, 6)}
                      disabled={formData.childrenUnder7 <= 0}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-white text-sm">{formData.childrenUnder7}</span>
                    <button
                      type="button"
                      onClick={() => updateCount('childrenUnder7', 1, 0, 6)}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* دکمه اقدام */}
          <button
            onClick={handleWhatsAppBooking}
            className="w-full p-3.5 bg-primary text-black font-extrabold rounded-2xl hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            <Send className="w-4 h-4" />
            <span>{isFa ? 'ارسال درخواست در واتساپ' : 'Send WhatsApp Inquiry'}</span>
          </button>
        </div>
      </div>

      {/* گالری تصاویر نمونه */}
      <div className="grid grid-cols-2 gap-2 mb-2 rounded-2xl overflow-hidden">
        {GALLERY.map((img, i) => (
          <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
            <img src={img.src} alt={isFa ? img.altFa : img.altEn} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <p className="text-xs text-foreground/40 text-center mb-8">
        {isFa ? '* تصاویر بالا نمونه‌ای از استایل و کیفیت آپارتمان‌ها هستند. چون وضعیت موجودی هر روز تغییر می‌کند، عکس و ویدیوی دقیق واحد آزاد هنگام تماس در واتساپ برای شما ارسال می‌شود.' :
          isRu ? '* Фото выше — примеры стиля и качества квартир. Точные фото и видео свободной квартиры отправляются в WhatsApp при обращении.' :
          '* Photos above show the general style and quality of our apartments. Since availability changes daily, exact photos and video of the actual free unit are sent via WhatsApp when you reach out.'}
      </p>

      {isFa && <>
        <InfoBlock title="چرا اجاره آپارتمان به‌جای هتل؟">
          <p>برای بسیاری از مسافران ایرانی، آپارتمان مبله می‌تواند از نظر فضا و امکانات، گزینه مناسب‌تری از هتل باشد؛ چه برای سفر چندروزه و چه برای اقامت کاری، تحصیلی یا خانوادگی. برخلاف اتاق هتل، آشپزخانه، ماشین لباسشویی، فضای بیشتر و حریم خصوصی در اختیار شماست. انتخاب میان هتل و آپارتمان باید بر اساس تعداد نفرات، مدت سفر، محل موردنیاز و خدماتی باشد که واقعاً به آن نیاز دارید.</p>
        </InfoBlock>

        <InfoBlock title="بهترین محله‌های ایروان برای اجاره آپارتمان">
          <p className="mb-3">شرایط اقامت در ایروان به محله، فصل، مدت سفر و امکانات واحد بستگی دارد. انتخاب محله را بر اساس اولویت واقعی خودتان؛ دسترسی، آرامش یا نزدیکی به مقصدهای روزانه، انجام دهید:</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">کنترون (مرکز شهر) و میدان جمهوری</h3>
          <p className="mb-3">قلب تپنده ایروان با دسترسی پیاده به کافه‌ها، رستوران‌ها، موزه‌ها و مراکز خرید. برای کسانی که ماشین ندارند و می‌خواهند بیشتر کارهای روزانه در دسترس پیاده باشد، انتخاب مناسبی است؛ اما در زمان‌های پرتقاضا باید زودتر ظرفیت را بررسی کرد.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">کاسکاد</h3>
          <p className="mb-3">در امتداد مجموعه تاریخی کاسکاد (هزار پله ایروان)، فاصله کوتاه تا خیابان شمالی و میدان جمهوری. محله‌ای پرتردد با گالری‌های هنری و کافه‌های معروف، مناسب کسانی که به زندگی شبانه و فضای توریستی اهمیت می‌دهند.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">آرابکیر</h3>
          <p className="mb-3">محله‌ای خانوادگی و مدرن، کمی دورتر از مرکز اما با مراکز خرید و امکانات کامل. برای اقامت‌های میان‌مدت با خانواده، انتخابی متعادل از نظر فضای محله و دسترسی به خدمات است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">مالاتیا-سباستیا</h3>
          <p className="mb-3">دسترسی مناسب به حمل‌ونقل عمومی و قیمت معقول‌تر نسبت به مرکز، بدون این‌که خیلی از شهر دور باشد.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">نورنورک، آوان و داواتاشن</h3>
          <p>این محله‌ها معمولاً آرام‌تر و دورتر از مرکز هستند و برای کسانی مناسب‌اند که با رفت‌وآمد روزانه تا مرکز شهر مسئله‌ای ندارند. کیفیت ساختمان، گرمایش، نزدیکی به ایستگاه حمل‌ونقل و فروشگاه باید پیش از انتخاب هر واحد جداگانه بررسی شود.</p>
        </InfoBlock>

        <InfoBlock title="چطور مطمئن شویم آپارتمان واقعی و بدون کلاهبرداری است؟">
          <p>یکی از بزرگ‌ترین نگرانی‌های کسانی که از راه دور و بدون بازدید حضوری آپارتمان اجاره می‌کنند، ریسک آگهی‌های تقلبی یا آپارتمان‌هایی است که در واقعیت شبیه عکس‌های تبلیغاتی نیستند. برای جلوگیری از این مشکل:</p>
          <CheckList items={[
            'پیش از تأیید نهایی و پرداخت، عکس و ویدیوی واقعی از همان واحد آزاد (نه عکس تبلیغاتی قدیمی) برای شما ارسال می‌شود',
            'موقعیت دقیق آپارتمان روی نقشه و فاصله تا نقاط مهم شهر مشخص می‌شود',
            'هیچ پرداخت کاملی پیش از تأیید نهایی شما دریافت نمی‌شود',
            'در صورت هرگونه مغایرت بین عکس ارسالی و آپارتمان واقعی، جایگزینی رایگان انجام می‌شود',
          ]} />
        </InfoBlock>

        <InfoBlock title="روش‌های پرداخت اجاره برای ایرانیان">
          <p>با توجه به محدودیت‌های بانکی موجود، پرداخت اجاره از ایران معمولاً بزرگ‌ترین دغدغه مسافران است. کاسپین گروپ سه روش پرداخت را بدون نیاز به کارت بانکی بین‌المللی می‌پذیرد:</p>
          <CheckList items={[
            'واریز ریالی به حساب داخل ایران — بدون نیاز به تبدیل ارز از سوی شما',
            'پرداخت دلاری نقد یا کارت‌های دلاری معتبر',
            'رمزارز USDT برای پرداخت سریع و بدون واسطه بانکی',
          ]} />
        </InfoBlock>

        <InfoBlock title="هزینه‌های جانبی که باید بدانید">
          <p>در اقامت‌های ماهانه، جزئیاتی مانند اینترنت، شارژ ساختمان، آب، برق و گرمایش ممکن است با توجه به واحد و قرارداد متفاوت باشد. پیش از نهایی‌شدن رزرو، مواردی که در هماهنگی اقامت لحاظ شده و موارد احتمالیِ جداگانه، شفاف اعلام می‌شود تا تصمیم‌گیری بر اساس اطلاعات کامل باشد.</p>
        </InfoBlock>

        <InfoBlock title="انواع آپارتمان و متراژ">
          <CheckList items={[
            'استودیو (تک‌فضایی) — مناسب مسافر تکی یا زوج',
            'یک‌خوابه — مناسب زوج یا خانواده کوچک',
            'دوخوابه — مناسب خانواده یا گروه کوچک',
            'سه‌خوابه و بیشتر — مناسب گروه‌ها و خانواده‌های بزرگ',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل رزرو آپارتمان با کاسپین گروپ">
          <p className="mb-3">فرآیند رزرو ساده و کاملاً شفاف است:</p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>تاریخ سفر، منطقه مورد نظر و تعداد نفرات را در واتساپ اعلام می‌کنید</li>
            <li>تیم کاسپین گزینه‌های موجود را همراه با عکس و ویدیوی واقعی همان زمان برایتان ارسال می‌کند</li>
            <li>پس از انتخاب و تأیید نهایی شما، رزرو با پیش‌پرداخت مشخص تثبیت می‌شود</li>
            <li>در روز ورود، در صورت درخواست، ترانسفر از فرودگاه زوارتنوتس تا درِ آپارتمان هماهنگ می‌شود</li>
            <li>کلید و راهنمای کامل استفاده از امکانات آپارتمان تحویل داده می‌شود</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="مدارک لازم برای اجاره">
          <p>برخلاف اجاره بلندمدت که معمولاً به ضامن یا قرارداد رسمی نیاز دارد، برای اجاره کوتاه‌مدت و میان‌مدت از طریق کاسپین تنها داشتن پاسپورت معتبر کافی است. برای اقامت‌های بیش از یک ماه، امکان تنظیم قرارداد اجاره رسمی نیز فراهم است — موضوعی که برای کسانی که همزمان به دنبال اقامت ارمنستان هستند اهمیت دارد.</p>
        </InfoBlock>

        <InfoBlock title="اجاره میان‌مدت و بلندمدت (۳، ۶ و ۱۲ ماهه)">
          <p className="mb-3">علاوه بر اجاره روزانه و ماهانه، برای کسانی که برای اقامت، ثبت شرکت یا کار به ایروان می‌آیند و به یک بازه مشخص‌تر نیاز دارند، بسته‌های میان‌مدت و بلندمدت هم در دسترس است:</p>
          <CheckList items={[
            'اجاره ۳ ماهه — مناسب کسانی که در حال طی‌کردن مراحل اقامت یا ثبت شرکت هستند',
            'اجاره ۶ ماهه — امکان بررسی قرارداد رسمی برای ارائه به ادارات در صورت نیاز',
            'اجاره ۱۲ ماهه (سالانه) — گزینه رایج برای خانواده‌هایی که قصد سکونت در ایروان دارند',
            'در تمام بسته‌های میان‌مدت و بلندمدت امکان تمدید یا فسخ زودتر از موعد با هماهنگی قبلی وجود دارد',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Why Rent an Apartment Instead of a Hotel?">
          <p>For most travelers visiting Yerevan, a furnished apartment is a more affordable and comfortable option than a hotel room. Unlike a hotel room, a furnished apartment gives you a full kitchen, washing machine, more space for families, and real privacy.</p>
        </InfoBlock>

        <InfoBlock title="Best Neighborhoods in Yerevan for Apartment Rental">
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Kentron (City Center) & Republic Square</h3>
          <p className="mb-3">Yerevan's beating heart and the most convenient district. Walking distance to cafés, restaurants, museums and shopping.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Cascade</h3>
          <p className="mb-3">Lively and walkable, near art galleries, cafés, and nightlife.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">Arabkir</h3>
          <p className="mb-3">Quiet, family-friendly, and modern, with quick metro and bus access to the center.</p>
        </InfoBlock>

        <InfoBlock title="Scam-Free Booking Guarantee">
          <CheckList items={[
            'Real photos and video of the exact unit are sent before confirmation',
            'Clear address and pinned location',
            'Free replacement if the apartment differs from photos',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Почему квартира лучше отеля?">
          <p>Для большинства путешественников меблированная квартира в Ереване — более выгодный и удобный вариант, чем номер в отеле. Полная кухня, стиральная машина и семейный уют.</p>
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default ApartmentContent;
