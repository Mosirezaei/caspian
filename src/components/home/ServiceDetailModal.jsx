import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Instagram, Send } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const WHATSAPP = 'https://wa.me/37433149327';
const TELEGRAM = 'https://t.me/caspianbusinessgroup';
const INSTAGRAM = 'https://www.instagram.com/caspiangroup.am?igsh=bDBsdTE0ZHJ3bno0';
const PHONE = 'tel:0037433149327';

const IMG = {
  visa: 'https://media.base44.com/images/public/69ff28fc8133d94a3d4a5b95/caec63b66_1778916035995.png',
  residency: 'https://media.base44.com/images/public/69ff28fc8133d94a3d4a5b95/c3f3dc3f1_1778916252824.png',
  company: 'https://media.base44.com/images/public/69ff28fc8133d94a3d4a5b95/9fae8d104_1778916043701.png',
  tours: 'https://media.base44.com/images/public/69ff28fc8133d94a3d4a5b95/b121cf159_1778916018969.png',
  hotel: 'https://media.base44.com/images/public/69ff28fc8133d94a3d4a5b95/19e7c9c3b_1778916012367.png',
  vip: 'https://media.base44.com/images/public/69ff28fc8133d94a3d4a5b95/827efd038_1778916428232.png',
};

const serviceDetails = {
  0: {
    fa: {
      title: 'خدمات ویزا',
      description: 'کاسپین گروه با بیش از ۱۵ سال تجربه، خدمات اخذ ویزا برای کشورهای مختلف را با بالاترین درصد موفقیت ارائه می‌دهد. تیم متخصص ما تمامی مراحل از جمع‌آوری مدارک تا پیگیری پرونده را انجام می‌دهد.',
      items: ['ویزای شینگن (اروپا)', 'ویزای روسیه', 'ویزای رومانی', 'ویزای آمریکای جنوبی', 'وقت سفارت آمریکا و کانادا'],
      image: IMG.visa,
    },
    en: {
      title: 'Visa Services',
      description: 'Caspian Group offers visa acquisition services for various countries with the highest success rate. Our expert team handles everything from document collection to case follow-up.',
      items: ['Schengen Visa (Europe)', 'Russia Visa', 'Romania Visa', 'South America Visa', 'US & Canada Embassy Appointment'],
      image: IMG.visa,
    },
    ru: {
      title: 'Визовые услуги',
      description: 'Caspian Group предлагает услуги по получению виз для различных стран с наивысшим процентом успеха. Наша команда берёт на себя всё — от сбора документов до сопровождения дела.',
      items: ['Шенгенская виза (Европа)', 'Виза в Россию', 'Виза в Румынию', 'Виза в Южную Америку', 'Запись в посольство США и Канады'],
      image: IMG.visa,
    },
  },
  1: {
    fa: {
      title: 'اقامت و تابعیت',
      description: 'با کمک کاسپین گروه می‌توانید اقامت رسمی ارمنستان، ترکیه، امارات و کشورهای اروپایی را دریافت کنید. ما تمام مراحل قانونی را با دقت و سرعت پیگیری می‌کنیم.',
      items: ['اقامت ارمنستان (پاسپورت و کارت اقامت)', 'اقامت ترکیه (کیملیک)', 'اقامت امارات', 'مشاوره مهاجرت به اروپا'],
      image: IMG.residency,
    },
    en: {
      title: 'Residency & Citizenship',
      description: 'With Caspian Group\'s help, you can obtain official residency in Armenia, Turkey, UAE and European countries. We handle all legal steps precisely and quickly.',
      items: ['Armenia Residency (Passport & Residence Card)', 'Turkey Residency (Kimlik)', 'UAE Residency', 'European Immigration Consulting'],
      image: IMG.residency,
    },
    ru: {
      title: 'ВНЖ и гражданство',
      description: 'С помощью Caspian Group вы можете получить официальный ВНЖ в Армении, Турции, ОАЭ и европейских странах. Мы берёмся за все юридические этапы точно и быстро.',
      items: ['ВНЖ в Армении (паспорт и вид на жительство)', 'ВНЖ в Турции (kimlik)', 'ВНЖ в ОАЭ', 'Консультация по иммиграции в Европу'],
      image: IMG.residency,
    },
  },
  2: {
    fa: {
      title: 'ثبت شرکت',
      description: 'ثبت شرکت در ارمنستان با مزایای مالیاتی بسیار، فرآیند ساده و بدون بوروکراسی پیچیده انجام می‌شود. کاسپین گروه تمام مراحل از ثبت تا دریافت مجوزها را پشتیبانی می‌کند.',
      items: ['ثبت شرکت LLC در ارمنستان', 'ثبت شرکت در ترکیه و امارات', 'باز کردن حساب بانکی بین‌المللی', 'دریافت مجوزهای کسب‌وکار'],
      image: IMG.company,
    },
    en: {
      title: 'Company Registration',
      description: 'Register your company in Armenia with great tax benefits, a simple process and minimal bureaucracy. Caspian Group supports all steps from registration to obtaining licenses.',
      items: ['LLC Registration in Armenia', 'Company Registration in Turkey & UAE', 'International Bank Account Opening', 'Business License Acquisition'],
      image: IMG.company,
    },
    ru: {
      title: 'Регистрация компаний',
      description: 'Зарегистрируйте компанию в Армении с отличными налоговыми преимуществами, простым процессом и минимальной бюрократией. Caspian Group сопровождает все этапы.',
      items: ['Регистрация ООО в Армении', 'Регистрация компании в Турции и ОАЭ', 'Открытие международного банковского счёта', 'Получение лицензий'],
      image: IMG.company,
    },
  },
  3: {
    fa: {
      title: 'تورهای خارجی',
      description: 'تورهای لوکس و گروهی به مقاصد محبوب دنیا با برنامه‌ریزی کامل، اقامت مرغوب و راهنمای فارسی‌زبان. تجربه‌ای به یادماندنی از سفر.',
      items: ['تورهای ارمنستان، گرجستان، ترکیه', 'تورهای اروپایی', 'پکیج‌های هتل + پرواز', 'تور اختصاصی و VIP'],
      image: IMG.tours,
    },
    en: {
      title: 'International Tours',
      description: 'Luxury and group tours to the world\'s most popular destinations with full planning, quality accommodation and Persian-speaking guides. An unforgettable travel experience.',
      items: ['Tours to Armenia, Georgia, Turkey', 'European Tours', 'Hotel + Flight Packages', 'Private & VIP Tours'],
      image: IMG.tours,
    },
    ru: {
      title: 'Международные туры',
      description: 'Люксовые и групповые туры в самые популярные места мира с полным планированием, качественным размещением и русскоязычными гидами.',
      items: ['Туры в Армению, Грузию, Турцию', 'Европейские туры', 'Пакеты отель + перелёт', 'Частные туры и VIP'],
      image: IMG.tours,
    },
  },
  4: {
    fa: {
      title: 'رزرو هتل',
      description: 'رزرو هتل‌های ۴ و ۵ ستاره در سراسر جهان با تضمین بهترین قیمت. کاسپین گروه با بزرگ‌ترین هتل‌های ایروان و اروپا قرارداد مستقیم دارد.',
      items: ['هتل‌های ۴ و ۵ ستاره ایروان', 'هتل‌های اروپایی با قیمت ویژه', 'رزرو آپارتمان مبله', 'ترانسفر فرودگاهی'],
      image: IMG.hotel,
    },
    en: {
      title: 'Hotel Booking',
      description: '4 and 5-star hotel bookings worldwide with best price guarantee. Caspian Group has direct contracts with Yerevan\'s top hotels and European properties.',
      items: ['4 & 5-Star Hotels in Yerevan', 'European Hotels at Special Rates', 'Furnished Apartment Rentals', 'Airport Transfer'],
      image: IMG.hotel,
    },
    ru: {
      title: 'Бронирование отелей',
      description: 'Бронирование 4 и 5-звёздочных отелей по всему миру с гарантией лучшей цены. Прямые договоры с лучшими отелями Еревана и Европы.',
      items: ['4 и 5-звёздочные отели в Ереване', 'Европейские отели по спецценам', 'Аренда меблированных квартир', 'Трансфер из аэропорта'],
      image: IMG.hotel,
    },
  },
  5: {
    fa: {
      title: 'خدمات VIP',
      description: 'برای مشتریان ویژه، کاسپین گروه خدمات اختصاصی و شخصی‌سازی شده ارائه می‌دهد. از مشاوره حقوقی تا خدمات فرودگاهی، همه چیز در یک بسته کامل.',
      items: ['مشاوره حقوقی اختصاصی', 'استقبال و بدرقه VIP فرودگاه', 'پشتیبانی ۲۴ ساعته اختصاصی', 'تسهیل امور بانکی بین‌المللی'],
      image: IMG.vip,
    },
    en: {
      title: 'VIP Services',
      description: 'For premium clients, Caspian Group offers exclusive and personalized services. From legal consulting to airport services, everything in one complete package.',
      items: ['Dedicated Legal Consulting', 'VIP Airport Meet & Greet', '24/7 Dedicated Support', 'International Banking Facilitation'],
      image: IMG.vip,
    },
    ru: {
      title: 'VIP-услуги',
      description: 'Для премиум-клиентов Caspian Group предлагает эксклюзивные персонализированные услуги. От юридической консультации до аэропортовых услуг — всё в одном пакете.',
      items: ['Персональная юридическая консультация', 'VIP встреча и проводы в аэропорту', 'Персональная поддержка 24/7', 'Помощь с международными банковскими операциями'],
      image: IMG.vip,
    },
  },
};

export default function ServiceDetailModal({ serviceIndex, onClose }) {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const detail = serviceDetails[serviceIndex]?.[lang] || serviceDetails[serviceIndex]?.fa;

  if (!detail) return null;

  const contactLabels = {
    fa: { whatsapp: 'واتساپ', telegram: 'تلگرام', instagram: 'اینستاگرام', phone: 'تماس مستقیم', title: 'راه‌های ارتباطی', checkTitle: 'خدمات شامل:' },
    en: { whatsapp: 'WhatsApp', telegram: 'Telegram', instagram: 'Instagram', phone: 'Call Us', title: 'Contact Us', checkTitle: 'Services Include:' },
    ru: { whatsapp: 'WhatsApp', telegram: 'Telegram', instagram: 'Instagram', phone: 'Позвонить', title: 'Связаться с нами', checkTitle: 'Услуги включают:' },
  };
  const cl = contactLabels[lang] || contactLabels.fa;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end justify-center"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          dir={isRtl ? 'rtl' : 'ltr'}
          className="w-full sm:max-w-xl bg-card border-t border-x border-primary/20 rounded-t-3xl overflow-hidden flex flex-col"
          style={{ height: '92vh' }}
        >
          {/* Image */}
          <div className="relative h-56 flex-shrink-0">
            <img src={detail.image} alt={detail.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <button onClick={onClose}
              className="absolute top-3 end-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h2 className="absolute bottom-4 start-4 text-xl font-black text-white">{detail.title}</h2>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 p-5 space-y-5">
            {/* Description */}
            <p className="text-sm text-foreground/80 leading-relaxed">{detail.description}</p>

            {/* Items */}
            <div>
              <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{cl.checkTitle}</p>
              <ul className="space-y-2">
                {detail.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{cl.title}</p>
              <div className="grid grid-cols-2 gap-2">
                <a href={WHATSAPP} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  {cl.whatsapp}
                </a>
                <a href={TELEGRAM} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold hover:bg-blue-500/20 transition-colors">
                  <Send className="w-4 h-4 flex-shrink-0" />
                  {cl.telegram}
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold hover:bg-pink-500/20 transition-colors">
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  {cl.instagram}
                </a>
                <a href={PHONE}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {cl.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}