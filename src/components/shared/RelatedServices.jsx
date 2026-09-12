'use client';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';

/**
 * RelatedServices — لینک‌های داخلی مرتبط در پایین هر صفحه
 * هدف: PageRank، کاهش bounce rate، کمک به Googlebot
 */

const SERVICES = {
  hotel: {
    fa: { title: 'رزرو هتل در ایروان', desc: 'هتل ۳ تا ۵ ستاره با واچر رسمی' },
    en: { title: 'Hotel Booking Yerevan', desc: '3–5 star hotels with official voucher' },
    ru: { title: 'Бронирование отеля в Ереване', desc: 'Отели 3–5 звёзд с официальным ваучером' },
    href: '/travel/hotel', icon: '🏨',
  },
  apartment: {
    fa: { title: 'رزرو آپارتمان مبله', desc: 'اقامت کوتاه‌مدت و ماهانه با هماهنگی تاریخ سفر' },
    en: { title: 'Furnished Apartment Booking', desc: 'Short- and monthly stays tailored to travel dates' },
    ru: { title: 'Бронирование квартиры в Ереване', desc: 'Краткосрочное и помесячное проживание по датам поездки' },
    href: '/travel/apartment', icon: '🏠',
  },
  residency: {
    fa: { title: 'اقامت ارمنستان', desc: 'کارت اقامت در کمتر از ۳۰ روز' },
    en: { title: 'Armenia Residency', desc: 'Residency card in under 30 days' },
    ru: { title: 'ВНЖ Армении', desc: 'Карта ВНЖ менее чем за 30 дней' },
    href: '/residency/business', icon: '🪪',
  },
  company: {
    fa: { title: 'ثبت شرکت در ارمنستان', desc: 'LLC در ۳ روز، مالیات ۵٪' },
    en: { title: 'Company Registration', desc: 'LLC in 3 days, 5% tax' },
    ru: { title: 'Регистрация компании', desc: 'ООО за 3 дня, налог 5%' },
    href: '/residency/business', icon: '🏢',
  },
  visaRussia: {
    fa: { title: 'ویزای توریستی روسیه', desc: 'eVisa با بررسی شرایط و زمان صدور' },
    en: { title: 'Russia Tourist Visa', desc: 'eVisa eligibility and processing time' },
    ru: { title: 'Туристическая виза в Россию', desc: 'eVisa: условия и сроки оформления' },
    href: '/visa/russia', icon: '🇷🇺',
  },
  transfer: {
    fa: { title: 'ترانسفر فرودگاهی ایروان', desc: 'مستقیم از فرودگاه زوارتنوتس' },
    en: { title: 'Yerevan Airport Transfer', desc: 'Direct from Zvartnots Airport' },
    ru: { title: 'Трансфер из аэропорта Еревана', desc: 'Прямо из аэропорта Звартноц' },
    href: '/travel/transfer', icon: '🚗',
  },
  studentVisa: {
    fa: { title: 'ویزای تحصیلی ارمنستان', desc: 'پذیرش YSU، YSMU، AUA از ۱۵۰۰ دلار' },
    en: { title: 'Armenia Student Visa', desc: 'Admission to YSU, YSMU, AUA from $1,500' },
    ru: { title: 'Учебная виза Армении', desc: 'Поступление в YSU, YSMU, AUA от $1500' },
    href: '/student-visa/russia', icon: '🎓',
  },
  tour: {
    fa: { title: 'تور ارمنستان', desc: 'تور زمینی و هوایی با راهنمای فارسی' },
    en: { title: 'Armenia Tours', desc: 'Land & air tours with Persian guide' },
    ru: { title: 'Туры по Армении', desc: 'Наземные и авиатуры с русскоязычным гидом' },
    href: '/travel/tour', icon: '🗺️',
  },
  exchange: {
    fa: { title: 'صرافی ارزی کاسپین', desc: 'تبدیل ریال، دلار، یورو، روبل و تتر با نرخ شفاف' },
    en: { title: 'Caspian Currency Exchange', desc: 'Rial, USD, EUR, RUB & USDT at transparent rates' },
    ru: { title: 'Обмен валют Caspian', desc: 'Риал, доллар, евро, рубль и USDT по прозрачному курсу' },
    href: '/travel/exchange', icon: '💱',
  },
};

// نقشه ارتباطات: هر صفحه چه لینک‌هایی باید داشته باشه
const RELATED_MAP = {
  'hotel':        ['apartment', 'transfer', 'tour', 'residency'],
  'apartment':    ['hotel', 'transfer', 'residency', 'company'],
  'residency':    ['company', 'hotel', 'apartment', 'exchange'],
  'company':      ['residency', 'hotel', 'apartment', 'exchange'],
  'visa-russia':  ['hotel', 'tour', 'transfer', 'visaRussia'],
  'student-visa': ['studentVisa', 'hotel', 'apartment', 'residency'],
  'tour':         ['hotel', 'apartment', 'transfer', 'exchange'],
  'transfer':     ['hotel', 'apartment', 'tour', 'residency'],
  'exchange':     ['apartment', 'residency', 'company', 'hotel'],
  'default':      ['hotel', 'apartment', 'residency', 'exchange'],
};

export default function RelatedServices({ pageType = 'default', variant = 'grid' }) {
  const { lang } = useLang();
  const keys = RELATED_MAP[pageType] || RELATED_MAP.default;
  const items = keys.map(k => SERVICES[k]).filter(Boolean);

  const labels = {
    fa: 'خدمات مرتبط', en: 'Related Services', ru: 'Связанные услуги'
  };

  if (variant === 'sidebar') {
    return (
      <nav aria-label={labels[lang] || labels.fa}>
        <h3 className="text-sm font-bold text-foreground mb-3">{labels[lang] || labels.fa}</h3>
        <div className="space-y-2.5">
          {items.map((svc) => {
            const text = svc[lang] || svc.fa;
            return (
              <Link key={svc.href} href={svc.href}
                className="group flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition">
                <span className="text-lg shrink-0">{svc.icon}</span>
                <span className="text-xs font-bold text-foreground/85 group-hover:text-primary transition-colors leading-tight">
                  {text.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label={labels[lang] || labels.fa} className="mt-10 mb-4">
      <h2 className="text-lg font-black text-foreground mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-primary rounded-full inline-block" />
        {labels[lang] || labels.fa}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((svc) => {
          const text = svc[lang] || svc.fa;
          return (
            <Link
              key={svc.href}
              href={svc.href}
              className="glass-panel rounded-xl p-3 border border-white/8 hover:border-primary/40 transition-all duration-200 group flex flex-col gap-1"
            >
              <span className="text-xl">{svc.icon}</span>
              <span className="text-xs font-bold text-foreground/85 group-hover:text-primary transition-colors leading-tight">
                {text.title}
              </span>
              <span className="text-xs text-foreground/45 leading-tight hidden sm:block">
                {text.desc}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
