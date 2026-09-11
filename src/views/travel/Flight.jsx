'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import { getWhatsAppUrl } from '@/lib/contact';
import { 
  Plane, 
  Calendar, 
  Users, 
  ArrowLeftRight, 
  ChevronDown, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Clock, 
  Luggage, 
  AlertCircle,
  CheckCircle2,
  Send
} from 'lucide-react';

const FAQS = {
  fa: [
    {
      q: 'آیا برای سفر هوایی به ارمنستان نیاز به اخذ ویزا است؟',
      a: 'خیر. طبق توافق لغو روادید میان دو کشور، شهروندان ایرانی می‌توانند تا ۹۰ روز در هر بازه ۱۸۰ روزه بدون نیاز به دریافت ویزا به صورت گردشگری در ارمنستان اقامت داشته باشند. گذرنامه شما در زمان پرواز باید حداقل ۶ ماه اعتبار داشته باشد.'
    },
    {
      q: 'پرواز تهران به ایروان از کدام فرودگاه انجام می‌شود و زمان پرواز چقدر است؟',
      a: 'پروازهای خروجی از تهران به مقصد ایروان از فرودگاه بین‌المللی امام خمینی (IKA) بلند می‌شوند و در فرودگاه بین‌المللی زوارتنوتس ایروان (EVN) به زمین می‌نشینند. مدت زمان پرواز مستقیم حدود ۱ ساعت و ۱۵ دقیقه تا ۱ ساعت و ۳۰ دقیقه است.'
    },
    {
      q: 'تفاوت پرواز چارتر و سیستمی در این مسیر چیست؟',
      a: 'بلیط‌های سیستمی مستقیماً بر اساس نرخ‌گذاری مصوب ایرلاین صادر می‌شوند، نرخ کودک (۲ تا ۱۲ سال) در آن‌ها کمتر از بزرگسال محاسبه می‌شود و طبق قوانین ایرلاین قابلیت کنسلی با کسر جریمه دارند. بلیط‌های چارتری توسط کارگزاران بسته می‌شوند و ممکن است در روزهای عادی تخفیف‌های بسیار مناسب یا در ایام اوج سفر نرخ متفاوتی داشته باشند و معمولاً غیرقابل استرداد هستند.'
    },
    {
      q: 'میزان بار مجاز برای هر مسافر چقدر است و هزینه اضافه‌بار چگونه محاسبه می‌شود؟',
      a: 'میزان بار مجاز معمولاً در کلاس اکونومی بین ۲۰ تا ۲۵ کیلوگرم برای چمدان پذیرش‌شده و ۵ تا ۷ کیلوگرم برای ساک دستی داخل کابین است (در کلاس بیزینس تا ۳۰ کیلوگرم). جریمه اضافه‌بار در فرودگاه به ازای هر کیلوگرم محاسبه می‌شود؛ لذا در صورت داشتن چمدان سنگین حتماً قبل از پرواز هماهنگی کنید.'
    },
    {
      q: 'روش‌های پرداخت هزینه بلیط از طریق کاسپین چیست؟',
      a: 'کاسپین گروپ برای مسافران ایرانی سه روش پرداخت آسان فراهم کرده است: واریز ریالی با کارت‌های شتاب در ایران، پرداخت نقدی دلاری در ایروان یا ایران، و انتقال رمزارز تتر (USDT).'
    },
    {
      q: 'فاصله فرودگاه زوارتنوتس تا مرکز ایروان چقدر است و ترانسفر چگونه انجام می‌شود؟',
      a: 'فرودگاه بین‌المللی زوارتنوتس حدود ۱۲ کیلومتر با مرکز شهر ایروان (میدان جمهوری) فاصله دارد و با خودرو بین ۱۵ تا ۲۵ دقیقه زمان می‌برد. تیم کاسپین هماهنگی ترانسفر فرودگاهی مستقیم با راننده معتمد را نیز انجام می‌دهد.'
    }
  ],
  en: [
    {
      q: 'Do Iranian citizens need a visa to visit Armenia?',
      a: 'No, holders of Iranian passports can travel to Armenia visa-free for tourist stays up to 90 days within any 180-day period. Passports must have at least 6 months validity.'
    },
    {
      q: 'What is the flight time between Tehran and Yerevan?',
      a: 'Direct flights between Imam Khomeini International Airport (IKA) and Zvartnots International Airport (EVN) take about 1 hour and 15 minutes.'
    },
    {
      q: 'What payment options are available?',
      a: 'Payments are accepted via Iranian Shetab cards (Rial), cash USD, or USDT crypto without requiring international bank cards.'
    }
  ],
  ru: [
    {
      q: 'Нужна ли виза в Армению?',
      a: 'Для граждан Ирана, России и многих других стран действует безвизовый режим до 90 дней. Паспорт должен действовать не менее 6 месяцев.'
    },
    {
      q: 'Сколько длится перелет Тегеран — Ереван?',
      a: 'Прямой перелет между аэропортами Имам Хомейни (IKA) и Звартноц (EVN) занимает около 1 часа 15 минут.'
    }
  ],
  hy: [
    {
      q: 'Արդյո՞ք Իրանի քաղաքացիներին անհրաժեշտ է վիզա Հայաստան այցելելու համար:',
      a: 'Ոչ, Իրանի քաղաքացիները կարող են առանց վիզայի մնալ Հայաստանում մինչև 90 օր՝ 180 օրվա ընթացքում:'
    }
  ]
};

function FlightFAQ({ lang }) {
  const [active, setActive] = useState(null);
  const faqs = FAQS[lang] || FAQS.fa;
  const title = {
    fa: 'سوالات متداول پرواز و سفر هوایی به ارمنستان',
    en: 'Frequently Asked Questions about Flights',
    ru: 'Часто задаваемые вопросы о перелетах',
    hy: 'Հաճախակի տրվող հարցեր թռիչքների վերաբերյալ'
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-amber-400 mb-4">{title[lang] || title.fa}</h3>
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              onClick={() => setActive(active === idx ? null : idx)}
              className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors text-right">
              <span className="font-semibold text-gray-200 text-sm leading-relaxed pr-2">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-200 ${
                  active === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {active === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-black/20">
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlightContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';

  const [tripType, setTripType] = useState('round');
  const [cabinClass, setCabinClass] = useState('economy');
  const [formData, setFormData] = useState({
    origin: 'تهران (IKA)',
    destination: 'ایروان (EVN)',
    departDate: '',
    returnDate: '',
    adults: 1,
    childrenAbove7: 0,
    childrenUnder7: 0
  });

  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const departRef = useRef(null);
  const returnRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowGuestsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const swapRoute = () => {
    setFormData(prev => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin
    }));
  };

  const updateCount = (key, delta, min = 0, max = 15) => {
    setFormData(prev => ({
      ...prev,
      [key]: Math.min(max, Math.max(min, prev[key] + delta))
    }));
  };

  const totalPassengers = formData.adults + formData.childrenAbove7 + formData.childrenUnder7;

  const handleWhatsAppInquiry = () => {
    const text = isFa 
      ? `درخواست استعلام قیمت و رزرو بلیط هواپیما:
✈️ مسیر: ${formData.origin} ➔ ${formData.destination}
🔄 نوع سفر: ${tripType === 'round' ? 'رفت و برگشت' : 'یک‌طرفه'}
🛫 تاریخ رفت: ${formData.departDate || 'نامشخص'}
${tripType === 'round' ? `🛬 تاریخ برگشت: ${formData.returnDate || 'نامشخص'}\n` : ''}💺 کلاس: ${cabinClass === 'business' ? 'بیزینس' : 'اکونومی'}
👥 مسافران:
• بزرگسال: ${formData.adults} نفر
• کودک بالای ۷ سال: ${formData.childrenAbove7} نفر
• کودک زیر ۷ سال: ${formData.childrenUnder7} نفر`
      : `Flight Price Inquiry:
✈️ Route: ${formData.origin} to ${formData.destination}
🔄 Type: ${tripType === 'round' ? 'Round-trip' : 'One-way'}
🛫 Departure: ${formData.departDate || 'Not specified'}
${tripType === 'round' ? `🛬 Return: ${formData.returnDate || 'Not specified'}\n` : ''}💺 Class: ${cabinClass}
👥 Passengers: ${formData.adults} Adults, ${formData.childrenAbove7} Children (7+), ${formData.childrenUnder7} Children (<7)`;

    window.open(getWhatsAppUrl(undefined, text), '_blank');
  };

  const content = {
    fa: {
      tag: "Caspian Group Armenia",
      title: "راهنمای جامع پرواز و استعلام قیمت بلیط تهران ⇄ ایروان",
      subtitle: "استعلام لحظه‌ای پروازهای چارتر و سیستمی، صدور آنی بلیط با تسویه ریالی، دلاری یا تتر بدون نیاز به کارت بین‌المللی",
      whyUs: "مزایای رزرو پرواز با گروه کاسپین:",
      features: [
        "پشتیبانی مستقیم و ۲۴ ساعته فارسی‌زبان در تهران و ایروان",
        "دسترسی به بهترین نرخ‌های پروازی سیستمی و پروازهای چارتری لحظه آخری",
        "مشاوره رایگان قوانین گمرک، مقررات بار مجاز، ترانسفر و شرایط ورود",
        "امکان تسویه ریالی (کارت شتاب)، دلاری نقد و رمزارز USDT بدون دردسرهای بانکی",
        "صدور آنی واچر و بلیط رسمی با کد رهگیری PNR معتبر قابل استعلام"
      ],
      ctaTitle: "استعلام قیمت لحظه‌ای و رزرو سریع پرواز",
      ctaText: "با توجه به تغییرات روزانه ساعات پرواز ایرلاین‌ها و نرخ‌های لحظه‌ای چارتر، برای دریافت دقیق‌ترین قیمت، جدول پروازی و رزرو صندلی در واتساپ پیام بدهید.",
      btnText: "استعلام قیمت و رزرو در واتساپ"
    },
    en: {
      tag: "Caspian Group Armenia",
      title: "Tehran & Yerevan Flight Guide & Price Inquiry",
      subtitle: "Instant rates and booking for direct charter & scheduled flights on the Tehran ⇄ Yerevan route",
      whyUs: "Why book with Caspian Group?",
      features: [
        "24/7 dedicated bilingual support in Armenia and Iran",
        "Best accessible rates for charter and scheduled flights",
        "Free consultation on luggage allowance, visa-free rules, and transfers",
        "Flexible payment via Iranian Rial, cash USD, or USDT crypto",
        "Instant official electronic ticket issuance with verified PNR"
      ],
      ctaTitle: "Instant Price Inquiry & WhatsApp Booking",
      ctaText: "Schedules and fares update daily. Get in touch directly on WhatsApp for live quotes and ticket confirmation.",
      btnText: "Inquire & Book on WhatsApp"
    },
    ru: {
      tag: "Caspian Group Armenia",
      title: "Рейсы Тегеран ⇄ Ереван | Расписание и бронирование",
      subtitle: "Быстрое бронирование регулярных и чартерных рейсов с круглосуточной поддержкой",
      whyUs: "Преимущества Caspian Group:",
      features: [
        "Поддержка 24/7 в Армении и Иране",
        "Выгодные тарифы на чартеры и регулярные рейсы",
        "Консультации по нормам багажа и трансферам",
        "Оплата в риалах, долларах США или USDT",
        "Моментальная выписка билетов с кодом бронирования"
      ],
      ctaTitle: "Запрос цен и бронирование через WhatsApp",
      ctaText: "Свяжитесь с нами в WhatsApp, чтобы получить актуальное расписание и лучшую цену на выбранные даты.",
      btnText: "Забронировать в WhatsApp"
    },
    hy: {
      tag: "Caspian Group Armenia",
      title: "Թեհրան - Երևան ավիատոմսերի ամրագրում և տեղեկատվություն",
      subtitle: "Արագ և հուսալի չվերթների ամրագրում Թեհրան ⇄ Երևան ուղղությամբ",
      whyUs: "Ինչու՞ ընտրել Caspian Group-ը:",
      features: [
        "24/7 աջակցություն Հայաստանում և Իրանում",
        "Լավագույն սակագներ կանոնավոր և չարտերային չվերթների համար",
        "Անվճար խորհրդատվություն ուղեբեռի և թռիչքային կանոնների վերաբերյալ",
        "Վճարման ճկուն եղանակներ (ռիալ, դոլար, USDT)",
        "Ավիատոմսերի արագ ձևակերպում"
      ],
      ctaTitle: "Ամրագրում WhatsApp-ի միջոցով",
      ctaText: "Գրեք մեզ WhatsApp-ով՝ ընթացիկ գները և չվացուցակը ստանալու համար:",
      btnText: "Կապ հաստատել WhatsApp-ով"
    }
  };

  const t = content[lang] || content.fa;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between font-vazirmatn">
      <div>
        <GlobalNavbar />

        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mt-16">
          
          {/* هدر صفحه */}
          <div className="text-center mb-10">
            <span className="text-amber-400 text-xs tracking-widest uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              {t.tag}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 leading-relaxed">
              {t.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* فرم رزرو و استعلام پرواز */}
          <div className="bg-[#121212] border border-amber-400/25 p-5 sm:p-7 rounded-3xl mb-10 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {isFa ? 'فرم استعلام نرخ بلیط هواپیما و استعلام ظرفیت' : 'Flight Price & Seat Availability'}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTripType('round')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    tripType === 'round' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}>
                  {isFa ? 'رفت و برگشت' : 'Round-trip'}
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('oneway')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    tripType === 'oneway' ? 'bg-amber-400 text-black font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}>
                  {isFa ? 'یک‌طرفه' : 'One-way'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* مبدأ و مقصد با دکمه جابه‌جایی */}
              <div className="lg:col-span-2 grid grid-cols-[1fr,auto,1fr] items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-2xl">
                <div className="px-2">
                  <span className="text-[11px] text-gray-400 block mb-0.5">{isFa ? 'مبدأ' : 'From'}</span>
                  <span className="text-sm font-bold text-white block truncate">{formData.origin}</span>
                </div>
                <button
                  type="button"
                  onClick={swapRoute}
                  className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-black transition-colors"
                  title="جابجایی مبدا و مقصد">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </button>
                <div className="px-2 text-left">
                  <span className="text-[11px] text-gray-400 block mb-0.5">{isFa ? 'مقصد' : 'To'}</span>
                  <span className="text-sm font-bold text-white block truncate">{formData.destination}</span>
                </div>
              </div>

              {/* تاریخ رفت */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {isFa ? 'تاریخ رفت' : 'Departure'}
                </label>
                <input
                  ref={departRef}
                  type="date"
                  min={today}
                  value={formData.departDate}
                  onClick={() => departRef.current?.showPicker?.()}
                  onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-amber-400 focus:outline-none cursor-pointer [color-scheme:dark]"
                />
              </div>

              {/* تاریخ برگشت */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {isFa ? 'تاریخ برگشت' : 'Return'}
                </label>
                <input
                  ref={returnRef}
                  type="date"
                  disabled={tripType === 'oneway'}
                  min={formData.departDate || today}
                  value={tripType === 'oneway' ? '' : formData.returnDate}
                  onClick={() => returnRef.current?.showPicker?.()}
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                  placeholder={tripType === 'oneway' ? (isFa ? 'یک‌طرفه' : 'One-way') : ''}
                  className={`w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-amber-400 focus:outline-none cursor-pointer [color-scheme:dark] ${
                    tripType === 'oneway' ? 'opacity-30 cursor-not-allowed' : ''
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 items-end">
              {/* کلاس پروازی */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-amber-400" />
                  {isFa ? 'کلاس پروازی' : 'Cabin Class'}
                </label>
                <select
                  value={cabinClass}
                  onChange={(e) => setCabinClass(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:border-amber-400 focus:outline-none transition-colors">
                  <option value="economy" className="bg-neutral-900 text-white">{isFa ? 'اکونومی (معمولی)' : 'Economy'}</option>
                  <option value="business" className="bg-neutral-900 text-white">{isFa ? 'بیزینس کلاس' : 'Business Class'}</option>
                </select>
              </div>

              {/* انتخاب مسافران به تفکیک سن */}
              <div className="relative" ref={dropdownRef}>
                <label className="text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  {isFa ? 'مسافران و رده سنی' : 'Passengers'}
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
                      : `${totalPassengers} Passenger(s)`}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${showGuestsDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showGuestsDropdown && (
                  <div className="absolute z-50 right-0 left-0 mt-2 bg-[#161616] border border-white/15 p-4 rounded-2xl shadow-2xl backdrop-blur-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div>
                        <div className="text-sm font-semibold text-white">{isFa ? 'بزرگسال' : 'Adults'}</div>
                        <div className="text-xs text-gray-400">{isFa ? '۱۲ سال به بالا (نرخ کامل)' : 'Age 12+'}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateCount('adults', -1, 1, 10)}
                          disabled={formData.adults <= 1}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-white text-sm">{formData.adults}</span>
                        <button
                          type="button"
                          onClick={() => updateCount('adults', 1, 1, 10)}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div>
                        <div className="text-sm font-semibold text-white">{isFa ? 'کودک (۷ تا ۱۲ سال)' : 'Child (7–12 yrs)'}</div>
                        <div className="text-xs text-gray-400">{isFa ? 'دارای صندلی مجزا' : 'With seat'}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateCount('childrenAbove7', -1, 0, 5)}
                          disabled={formData.childrenAbove7 <= 0}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-white text-sm">{formData.childrenAbove7}</span>
                        <button
                          type="button"
                          onClick={() => updateCount('childrenAbove7', 1, 0, 5)}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">{isFa ? 'خردسال / نوزاد (زیر ۷ سال)' : 'Infant / Toddler (<7)'}</div>
                        <div className="text-xs text-gray-400">{isFa ? 'نرخ بلیط خردسال' : 'Discounted fare'}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateCount('childrenUnder7', -1, 0, 5)}
                          disabled={formData.childrenUnder7 <= 0}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-white text-sm">{formData.childrenUnder7}</span>
                        <button
                          type="button"
                          onClick={() => updateCount('childrenUnder7', 1, 0, 5)}
                          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* دکمه ارسال به واتساپ */}
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full p-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-[0.99]">
                <Send className="w-4 h-4" />
                <span>{isFa ? 'استعلام قیمت و رزرو در واتساپ' : 'Inquire on WhatsApp'}</span>
              </button>
            </div>
          </div>

          {/* بدنه تفصیلی مقاله و اطلاعات کاربردی */}
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10">
            
            {/* معرفی دالان هوایی */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-300 flex items-center gap-2">
                <Plane className="w-5 h-5 text-amber-400" />
                دالان هوایی تهران - ایروان؛ سریع‌ترین پل ارتباطی ایران و ارمنستان
              </h2>
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  مسیر پروازی میان فرودگاه بین‌المللی امام خمینی تهران (IKA) و فرودگاه بین‌المللی زوارتنوتس ایروان (EVN)، اصلی‌ترین شریان هوایی برای گردشگران، دانشجویان، تجار و کسانی است که به قصد امور اداری، کنسولی یا ترانزیت به ارمنستان سفر می‌کنند. پرواز مستقیم این مسیر تنها بین <strong>۱ ساعت و ۱۵ دقیقه تا ۱ ساعت و ۳۰ دقیقه</strong> زمان می‌برد و در مقایسه با سفر زمینی ۲۴ ساعته، آرامش و صرفه‌جویی بالایی در وقت برای مسافران فراهم می‌کند.
                </p>
                <p>
                  به دلیل نوسان فصلی تعداد پروازها و ترکیب پروازهای منظم با پروازهای چارتر ویژه، آگاهی از برنامه خطوط پروازی و شرایط هر ایرلاین به شما کمک می‌کند تا بهترین صندلی را با مناسب‌ترین قیمت انتخاب کنید.
                </p>
              </div>
            </section>

            {/* کارت‌های مشخصات کلیدی پرواز */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">مدت زمان پرواز</h4>
                  <p className="text-xs text-gray-400">۱ ساعت و ۱۵ دقیقه (پرواز مستقیم)</p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <Luggage className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">میزان بار مجاز</h4>
                  <p className="text-xs text-gray-400">۲۰ الی ۲۵ کیلوگرم اکونومی + ۷ کگ دستی</p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">وضعیت ویزا</h4>
                  <p className="text-xs text-gray-400">بدون نیاز به ویزا برای اقامت تا ۹۰ روز</p>
                </div>
              </div>
            </div>

            {/* ایرلاین‌های فعال در این مسیر */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-amber-300">ایرلاین‌های ارائه‌دهنده پرواز در خط تهران - ایروان</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">هواپیمایی آسمان (Aseman)</span>
                    <span className="text-[11px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded-full">پروازهای منظم</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    با سابقه طولانی در خط ایروان، ناوگان بوئینگ و فوکر، و قیمت مناسب برای مسافران تجاری و خانوادگی.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">هواپیمایی ماهان (Mahan Air)</span>
                    <span className="text-[11px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded-full">کیفیت برتر</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    کابین‌های جادار با امکان انتخاب صندلی‌های کلاس تجاری (Business) و ناوگان ارباس در فصول پرتردد.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">قشم‌ایر و ایران ایرتور</span>
                    <span className="text-[11px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded-full">چارتری و فصلی</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    فعال در تعطیلات نوروز، بهار و تابستان با پکیج‌های رقابتی مناسب برای تورهای گردشگری.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">ایرلاین‌های ارمنی (FlyOne Armenia)</span>
                    <span className="text-[11px] bg-amber-400/10 text-amber-400 px-2 py-0.5 rounded-full">ترانزیت اروپایی</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    مناسب برای اتصال مسافران ایرانی به مقاصد اروپایی نظیر پاریس، رم، میلان و روسیه از طریق ایروان.
                  </p>
                </div>
              </div>
            </section>

            {/* قوانین بار و راهنمای فرودگاه زوارتنوتس */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-amber-300">نکات مهم فرودگاهی، بار و مدارک سفر</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span><strong>اعتبار پاسپورت:</strong> گذرنامه شما باید حداقل ۶ ماه از تاریخ پرواز اعتبار داشته باشد. نیازی به اخذ ویزا نیست و مهر ورود رایگان صادر می‌شود.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span><strong>زمان حضور در فرودگاه:</strong> برای پروازهای خروجی از فرودگاه امام خمینی حداقل ۳ ساعت قبل و برای بازگشت از فرودگاه زوارتنوتس حداقل ۲ ساعت و نیم قبل در پایانه حضور داشته باشید.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span><strong>قوانین پاوربانک و وسایل دیجیتال:</strong> طبق مقررات هوانوردی بین‌المللی، هرگونه پاوربانک، باتری لیتیومی یدک و لپ‌تاپ باید در بار دستی به داخل کابین برده شود و قرار دادن آن در چمدان پذیرش‌شده ممنوع است.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span><strong>امکانات فرودگاه زوارتنوتس:</strong> اینترنت وای‌فای نامحدود و رایگان در ترمینال، کیوسک‌های تبدیل ارز ۲۴ ساعته و صرافی، باجه‌های سیم‌کارت محلی (Viva-MTS، Ucom، Team) و تاکسی رسمی در خروجی سالن.</span>
                </li>
              </ul>
            </section>

            {/* مزایای رزرو از کاسپین گروپ */}
            <div className="bg-[#1a1a1a] border border-amber-400/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-amber-300 mb-4">{t.whyUs}</h3>
              <ul className="space-y-3">
                {t.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1.5"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* باکس اکشن واتساپ */}
            <div className="bg-gradient-to-r from-amber-950/40 via-[#1a1a1a] to-amber-950/40 border border-amber-400/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-xl font-black text-amber-300">{t.ctaTitle}</h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                {t.ctaText}
              </p>
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-[0_4px_25px_rgba(16,185,129,0.35)] text-sm sm:text-base cursor-pointer">
                  <span className="text-xl">💬</span> 
                  <span>{t.btnText}</span>
                </button>
              </div>
            </div>

            {/* سوالات متداول اختصاصی پرواز */}
            <FlightFAQ lang={lang} />

          </div>
        </div>

        {/* لیست سایر پروازهای مستقیم از ایروان */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-10">
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-xl space-y-5">
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">پروازهای مستقیم از ایروان به مقاصد ایران</h3>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>✈️ <strong>تهران</strong> (IKA) — پروازهای منظم روزانه در طول سال</li>
                <li>✈️ <strong>مشهد</strong> (MHD) — پروازهای فصلی و ویژه در ایام خاص</li>
                <li>✈️ <strong>شیراز و اصفهان</strong> (SYZ/IFN) — پروازهای دوره‌ای و چارترهای تابستان و نوروز</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-lg font-bold text-amber-400 mb-2">پروازهای بین‌المللی محبوب از فرودگاه ایروان</h3>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>✈️ <strong>روسیه:</strong> مسکو (SVO/DME/VKO)، سن‌پترزبورگ، سوچی و روستوف — روزانه</li>
                <li>✈️ <strong>خاورمیانه:</strong> دبی، ابوظبی، دوحه و استانبول — روزانه با ایرلاین‌های معتبر</li>
                <li>✈️ <strong>اروپا:</strong> پاریس، رم، میلان، فرانکفورت، وین، ورشو و آتن — پروازهای منظم هفتگی</li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h3 className="text-lg font-bold text-amber-400 mb-2">توصیه‌های مهم قبل از خرید بلیط</h3>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>✅ امکان پرداخت ریالی بدون کسر کارمزد بین‌المللی از طریق کاسپین گروپ</li>
                <li>✅ صدور واچر و شماره PNR جهت استعلام در وب‌سایت رسمی ایرلاین</li>
                <li>⚠️ در فصل اوج سفر (تیر تا شهریور و تعطیلات نوروز) قیمت‌ها تا ۴۰ درصد افزایش می‌یابد؛ رزرو خود را حداقل ۳ الی ۵ هفته قبل نهایی کنید.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* فوتر سراسری */}
      <div className="mt-16 bg-[#0a0a0a] border-t border-white/10">
      </div>
    </div>
  );
}

export default FlightContent;
