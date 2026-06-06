import React from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { Crown, Building2, Plane, Car, Shield, Utensils, Gem, Star } from 'lucide-react';

const vipFeatures = {
  fa: [
    { icon: Crown, title: 'اقامتگاه اختصاصی', desc: 'ویلاهای خصوصی و آپارتمان‌های لوکس مجهز با خدمات ۲۴ ساعته' },
    { icon: Building2, title: 'هتل‌های ۵ ستاره', desc: 'رزرو اتاق‌های سوئیت در بهترین هتل‌های ایروان، دبی، استانبول و اروپا' },
    { icon: Plane, title: 'پرواز درجه یک', desc: 'رزرو بلیط بیزینس‌کلاس و فرست‌کلاس با خدمات ترانسفر فرودگاهی VIP' },
    { icon: Car, title: 'خودرو اختصاصی', desc: 'سرویس لیموزین و خودروهای لوکس با راننده حرفه‌ای برای تمام مسیرها' },
    { icon: Shield, title: 'مشاور شخصی', desc: 'یک مشاور اختصاصی که تمام مراحل سفر و اقامت شما را مدیریت می‌کند' },
    { icon: Utensils, title: 'رستوران‌های ویژه', desc: 'رزرو میز در برترین رستوران‌های ایروان و رویدادهای خصوصی' },
  ],
  en: [
    { icon: Crown, title: 'Exclusive Residences', desc: 'Private villas and fully-equipped luxury apartments with 24/7 concierge service' },
    { icon: Building2, title: '5-Star Hotels', desc: 'Suite bookings at the finest hotels in Yerevan, Dubai, Istanbul, and Europe' },
    { icon: Plane, title: 'First Class Flights', desc: 'Business & First Class ticket bookings with VIP airport transfer service' },
    { icon: Car, title: 'Private Chauffeur', desc: 'Limousine and luxury vehicle service with professional drivers for all routes' },
    { icon: Shield, title: 'Personal Concierge', desc: 'A dedicated advisor managing every detail of your travel and stay' },
    { icon: Utensils, title: 'Fine Dining', desc: "Reservations at Yerevan's top restaurants and exclusive private events" },
  ],
  ru: [
    { icon: Crown, title: 'Эксклюзивные резиденции', desc: 'Частные виллы и апартаменты класса люкс с круглосуточным консьерж-сервисом' },
    { icon: Building2, title: 'Отели 5 звёзд', desc: 'Бронирование люксовых номеров в лучших отелях Еревана, Дубая, Стамбула и Европы' },
    { icon: Plane, title: 'Бизнес и первый класс', desc: 'Авиабилеты бизнес-класса и первого класса с VIP-трансфером из аэропорта' },
    { icon: Car, title: 'Персональный водитель', desc: 'Лимузин и премиальные автомобили с профессиональными водителями' },
    { icon: Shield, title: 'Персональный консьерж', desc: 'Личный советник, управляющий всеми деталями вашего путешествия' },
    { icon: Utensils, title: 'Изысканная кухня', desc: 'Столики в лучших ресторанах Еревана и организация частных мероприятий' },
  ],
};

const packages = {
  fa: [
    { name: 'پکیج نقره‌ای', color: 'border-slate-400/40', items: ['هتل ۴ تا ۵ ستاره', 'ترانسفر فرودگاهی', 'مشاوره ویزا', 'پشتیبانی ۱۲ ساعته'] },
    { name: 'پکیج طلایی', color: 'border-primary/50', items: ['هتل ۵ ستاره سوئیت', 'لیموزین اختصاصی', 'مشاور شخصی', 'پشتیبانی ۲۴ ساعته', 'رزرو رستوران'] },
    { name: 'پکیج الماس', color: 'border-cyan-400/40', items: ['ویلا یا پنت‌هاوس', 'پرواز بیزینس‌کلاس', 'مشاور اختصاصی VIP', 'خدمات نامحدود', 'برنامه‌ریزی کامل سفر', 'رویدادهای خصوصی'] },
  ],
  en: [
    { name: 'Silver Package', color: 'border-slate-400/40', items: ['4–5 Star Hotel', 'Airport Transfer', 'Visa Consulting', '12hr Support'] },
    { name: 'Gold Package', color: 'border-primary/50', items: ['5-Star Suite Hotel', 'Private Limousine', 'Personal Advisor', '24/7 Support', 'Restaurant Booking'] },
    { name: 'Diamond Package', color: 'border-cyan-400/40', items: ['Villa or Penthouse', 'Business Class Flight', 'VIP Personal Concierge', 'Unlimited Services', 'Full Trip Planning', 'Private Events'] },
  ],
  ru: [
    { name: 'Серебряный пакет', color: 'border-slate-400/40', items: ['Отель 4–5 звёзд', 'Трансфер из аэропорта', 'Консультация по визе', 'Поддержка 12 ч'] },
    { name: 'Золотой пакет', color: 'border-primary/50', items: ['Люкс 5 звёзд', 'Частный лимузин', 'Личный советник', 'Поддержка 24/7', 'Бронь ресторана'] },
    { name: 'Бриллиантовый пакет', color: 'border-cyan-400/40', items: ['Вилла или пентхаус', 'Бизнес-класс', 'VIP-консьерж', 'Безлимитные услуги', 'Полное планирование', 'Частные мероприятия'] },
  ],
};

function VipContent() {
  const { lang } = useLang();
  const features = vipFeatures[lang] || vipFeatures.fa;
  const pkgs = packages[lang] || packages.fa;

  const titles = {
    feat: { fa: 'خدمات VIP ما', en: 'Our VIP Services', ru: 'Наши VIP-услуги' },
    pkg: { fa: 'پکیج‌های اختصاصی', en: 'Exclusive Packages', ru: 'Эксклюзивные пакеты' },
    why: { fa: 'چرا VIP کاسپین؟', en: 'Why Caspian VIP?', ru: 'Почему VIP Caspian?' },
  };

  const whyItems = {
    fa: [
      'بیش از ۱۵ سال تجربه در خدمات لوکس',
      'شبکه گسترده هتل‌های برتر ارمنستان و جهان',
      'مشاور اختصاصی فارسی‌زبان در تمام ساعات',
      'ضمانت بازگشت وجه در صورت عدم رضایت',
      'همکاری با برندهای معتبر بین‌المللی',
    ],
    en: [
      '15+ years in luxury hospitality services',
      'Extensive network of top hotels in Armenia & worldwide',
      'Dedicated Persian-speaking advisor around the clock',
      'Satisfaction guarantee or full refund',
      'Partnerships with prestigious international brands',
    ],
    ru: [
      '15+ лет в сфере люкс-услуг',
      'Широкая сеть лучших отелей Армении и мира',
      'Персональный консьерж на фарси круглосуточно',
      'Гарантия возврата при неудовлетворённости',
      'Партнёрство с престижными международными брендами',
    ],
  };

  const intro = {
    fa: 'تجربه‌ای متفاوت از سفر و اقامت — جایی که هر جزئیاتی برای شما مدیریت می‌شود',
    en: 'A different travel experience — where every detail is managed for you',
    ru: 'Иной опыт путешествий — где каждая деталь управляется для вас',
  };

  return (
    <ServicePageLayout
      titleFa="پشتیبانی VIP"
      titleEn="VIP Support"
      titleRu="VIP Поддержка"
      subtitleFa={intro.fa}
      subtitleEn={intro.en}
      subtitleRu={intro.ru}
      heroImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
      serviceType="vip"
    >
      {/* VIP Feature Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-black gold-gradient-text text-center mb-5">{titles.feat[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-panel rounded-2xl p-5 border border-primary/15 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Packages */}
      <div className="mb-8">
        <h2 className="text-xl font-black gold-gradient-text text-center mb-5">{titles.pkg[lang]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pkgs.map((pkg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`glass-panel rounded-2xl p-5 border ${pkg.color} flex flex-col`}>
              <div className="flex items-center gap-2 mb-4">
                <Gem className="w-4 h-4 text-primary" />
                <h3 className="font-black text-foreground text-sm">{pkg.name}</h3>
              </div>
              <ul className="space-y-2">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                    <Star className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Caspian VIP */}
      <InfoBlock title={titles.why[lang]}>
        <CheckList items={whyItems[lang] || whyItems.fa} />
      </InfoBlock>
    </ServicePageLayout>
  );
}

export default function VipSupport() {
  return <LanguageProvider><VipContent /></LanguageProvider>;
}