import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { MessageCircle, ChevronDown, HelpCircle, MapPin, Bed } from 'lucide-react';

const APARTMENTS = [
  {
    titleFa: 'استودیوی مدرن — کنتقال',
    titleEn: 'Modern Studio — Kentron',
    titleRu: 'Современная студия — Кентрон',
    locationFa: 'خیابان آبوویان، مرکز ایروان',
    locationEn: 'Abovyan Street, central Yerevan',
    locationRu: 'Улица Абовяна, центр Еревана',
    bedrooms: 'Studio',
    priceLow: 35, priceHigh: 50,
    priceSeason: { fa: 'تابستان و نوروز: ۵۵–۷۰ دلار', en: 'Summer & Nowruz: $55–70', ru: 'Лето и Новруз: $55–70' },
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75',
    descFa: 'استودیوی شیک در قلب ایروان. آشپزخانه کامل، وای‌فای پرسرعت، نزدیک به مترو و رستوران‌های ایرانی. مناسب برای یک نفر یا زوج.',
    descEn: 'Chic studio in the heart of Yerevan. Full kitchen, high-speed Wi-Fi, close to metro and Iranian restaurants. Ideal for one person or a couple.',
    descRu: 'Стильная студия в самом сердце Еревана. Полная кухня, высокоскоростной Wi-Fi, рядом с метро и иранскими ресторанами.',
  },
  {
    titleFa: 'آپارتمان ۱ خوابه — نزدیک کاسکاد',
    titleEn: '1-Bedroom Apt — Near Cascade',
    titleRu: '1-комн. квартира — рядом с Каскадом',
    locationFa: 'نزدیک کمپلکس کاسکاد، ایروان',
    locationEn: 'Near Cascade Complex, Yerevan',
    locationRu: 'Рядом с комплексом Каскад, Ереван',
    bedrooms: '1 Bed',
    priceLow: 45, priceHigh: 65,
    priceSeason: { fa: 'تابستان و نوروز: ۷۰–۹۰ دلار', en: 'Summer & Nowruz: $70–90', ru: 'Лето и Новруз: $70–90' },
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=75',
    descFa: 'آپارتمان یک‌خوابه لوکس در نزدیکی کاسکاد با منظره شهر. بالکن، آشپزخانه مدرن، پارکینگ. مناسب برای اقامت کوتاه و بلندمدت.',
    descEn: 'Luxury 1-bedroom apartment near Cascade with city views. Balcony, modern kitchen, parking. Short and long-term stays.',
    descRu: 'Роскошная квартира рядом с Каскадом с видом на город. Балкон, современная кухня, парковка.',
  },
  {
    titleFa: 'آپارتمان ۱ خوابه — خیابان آبوویان',
    titleEn: '1-Bedroom — Abovyan Street',
    titleRu: '1-комн. — улица Абовяна',
    locationFa: 'خیابان آبوویان، مرکز شهر',
    locationEn: 'Abovyan Street, city center',
    locationRu: 'Улица Абовяна, центр города',
    bedrooms: '1 Bed',
    priceLow: 42, priceHigh: 60,
    priceSeason: { fa: 'تابستان و نوروز: ۶۵–۸۰ دلار', en: 'Summer & Nowruz: $65–80', ru: 'Лето и Новруз: $65–80' },
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75',
    descFa: 'آپارتمان نوساز با طراحی اسکاندیناوی در مرکز شهر. کمد دیواری بزرگ، آشپزخانه اپن، نزدیک به مراکز خرید.',
    descEn: 'Modern apartment with Scandinavian design in city center. Large wardrobe, open kitchen, near shopping centers.',
    descRu: 'Современная квартира со скандинавским дизайном в центре. Большой шкаф, открытая кухня, рядом с магазинами.',
  },
  {
    titleFa: 'آپارتمان ۲ خوابه — محله نورک',
    titleEn: '2-Bedroom Apt — Nork District',
    titleRu: '2-комн. квартира — район Норк',
    locationFa: 'محله نورک، ایروان',
    locationEn: 'Nork Neighborhood, Yerevan',
    locationRu: 'Район Норк, Ереван',
    bedrooms: '2 Beds',
    priceLow: 55, priceHigh: 75,
    priceSeason: { fa: 'تابستان و نوروز: ۸۵–۱۰۵ دلار', en: 'Summer & Nowruz: $85–105', ru: 'Лето и Новруз: $85–105' },
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=75',
    descFa: 'آپارتمان فضادار ۲ خوابه با منظره کوه آرارات. محیط آرام و سبز، پارکینگ اختصاصی، اینترنت فیبر نوری. مناسب برای خانواده‌ها.',
    descEn: 'Spacious 2-bedroom apartment with Ararat mountain views. Peaceful green environment, dedicated parking, fiber internet.',
    descRu: 'Просторная 2-комнатная квартира с видом на Арарат. Тихая обстановка, выделенная парковка, оптоволоконный интернет.',
  },
  {
    titleFa: 'آپارتمان ۲ خوابه — اراباکیر',
    titleEn: '2-Bedroom — Arabkir',
    titleRu: '2-комн. — Арабкир',
    locationFa: 'محله اراباکیر، شمال غرب ایروان',
    locationEn: 'Arabkir District, northwest Yerevan',
    locationRu: 'Район Арабкир, северо-запад Еревана',
    bedrooms: '2 Beds',
    priceLow: 50, priceHigh: 70,
    priceSeason: { fa: 'تابستان و نوروز: ۸۰–۱۰۰ دلار', en: 'Summer & Nowruz: $80–100', ru: 'Лето и Новруз: $80–100' },
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=75',
    descFa: 'آپارتمان دوخوابه روشن با پنجره‌های بزرگ در محله آرام اراباکیر. نزدیک به پارک و فروشگاه‌های ایرانی.',
    descEn: 'Bright 2-bedroom apartment with large windows in quiet Arabkir. Close to parks and Iranian stores.',
    descRu: 'Светлая 2-комнатная квартира с большими окнами в тихом Арабкире. Рядом с парками и иранскими магазинами.',
  },
  {
    titleFa: 'آپارتمان لوکس روفتاپ — کنتقال',
    titleEn: 'Luxury Rooftop Apt — Kentron',
    titleRu: 'Люкс с террасой — Кентрон',
    locationFa: 'خیابان آرامی، مرکز شهر',
    locationEn: 'Arami Street, city center',
    locationRu: 'Улица Арами, центр города',
    bedrooms: '2 Beds + Terrace',
    priceLow: 90, priceHigh: 130,
    priceSeason: { fa: 'تابستان و نوروز: ۱۴۰–۱۷۰ دلار', en: 'Summer & Nowruz: $140–170', ru: 'Лето и Новруз: $140–170' },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75',
    descFa: 'آپارتمان لوکس در طبقه آخر با تراس بزرگ و منظره ۳۶۰ درجه از ایروان. دکوراسیون اروپایی، جکوزی، آشپزخانه کاملاً مجهز.',
    descEn: 'Luxury top-floor apartment with large terrace and 360° Yerevan views. European décor, jacuzzi, fully equipped kitchen.',
    descRu: 'Роскошная квартира на последнем этаже с террасой и видом 360° на Ереван. Европейский декор, джакузи, полная кухня.',
  },
  {
    titleFa: 'آپارتمان ۳ خوابه — خانوادگی اراباکیر',
    titleEn: '3-Bedroom Family Apt — Arabkir',
    titleRu: '3-комн. семейная — Арабкир',
    locationFa: 'محله اراباکیر، ایروان',
    locationEn: 'Arabkir Neighborhood, Yerevan',
    locationRu: 'Район Арабкир, Ереван',
    bedrooms: '3 Beds',
    priceLow: 75, priceHigh: 100,
    priceSeason: { fa: 'تابستان و نوروز: ۱۱۰–۱۳۵ دلار', en: 'Summer & Nowruz: $110–135', ru: 'Лето и Новруз: $110–135' },
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=75',
    descFa: 'آپارتمان بزرگ ۳ خوابه مناسب خانواده‌های ۵ تا ۶ نفره. ۲ حمام، آشپزخانه بزرگ، پارکینگ مجانی. محله خانوادگی و آرام.',
    descEn: 'Large 3-bedroom apartment for 5–6 people. 2 bathrooms, large kitchen, free parking. Family-friendly neighborhood.',
    descRu: 'Большая 3-комнатная квартира для 5–6 человек. 2 ванные, большая кухня, бесплатная парковка.',
  },
  {
    titleFa: 'آپارتمان ۳ خوابه — کمیتاس',
    titleEn: '3-Bedroom — Komitas',
    titleRu: '3-комн. — Комитас',
    locationFa: 'بلوار کمیتاس، ایروان',
    locationEn: 'Komitas Avenue, Yerevan',
    locationRu: 'Проспект Комитас, Ереван',
    bedrooms: '3 Beds',
    priceLow: 80, priceHigh: 110,
    priceSeason: { fa: 'تابستان و نوروز: ۱۲۰–۱۵۰ دلار', en: 'Summer & Nowruz: $120–150', ru: 'Лето и Новруз: $120–150' },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=75',
    descFa: 'آپارتمان نوساز ۳ خوابه در بلوار کمیتاس، محله فارسی‌زبان ایروان. ۲ حمام، پارکینگ زیرزمینی، آسانسور.',
    descEn: 'New 3-bedroom apartment on Komitas Avenue in Yerevan\'s Persian-speaking area. 2 bathrooms, underground parking, elevator.',
    descRu: 'Новая 3-комнатная квартира на проспекте Комитас в персоязычном районе. 2 ванные, подземная парковка, лифт.',
  },
  {
    titleFa: 'پنت‌هاوس — نورک هیلز',
    titleEn: 'Penthouse — Nork Hills',
    titleRu: 'Пентхаус — Норк Хиллс',
    locationFa: 'نورک هیلز، بالای شهر ایروان',
    locationEn: 'Nork Hills, upper Yerevan',
    locationRu: 'Норк Хиллс, верхний Ереван',
    bedrooms: '3 Beds + Penthouse',
    priceLow: 150, priceHigh: 220,
    priceSeason: { fa: 'تابستان و نوروز: ۲۵۰–۳۰۰ دلار', en: 'Summer & Nowruz: $250–300', ru: 'Лето и Новруз: $250–300' },
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=75',
    descFa: 'پنت‌هاوس لوکس در بالاترین نقطه ایروان با منظره کاملاً بی‌نظیر از کوه آرارات. استخر اختصاصی، پارکینگ VIP، ۳ خوابه.',
    descEn: 'Luxury penthouse at the highest point of Yerevan with unparalleled Ararat views. Private pool, VIP parking, 3 bedrooms.',
    descRu: 'Роскошный пентхаус на вершине Еревана с непревзойдённым видом на Арарат. Личный бассейн, VIP-парковка, 3 спальни.',
  },
  {
    titleFa: 'آپارتمان بوتیک — داون‌تاون',
    titleEn: 'Boutique Apt — Downtown',
    titleRu: 'Бутик-квартира — даунтаун',
    locationFa: 'خیابان سایات‌نووا، مرکز فرهنگی',
    locationEn: 'Sayat-Nova Ave, cultural center',
    locationRu: 'Пр. Саят-Нова, культурный центр',
    bedrooms: '1 Bed',
    priceLow: 60, priceHigh: 85,
    priceSeason: { fa: 'تابستان و نوروز: ۹۵–۱۲۰ دلار', en: 'Summer & Nowruz: $95–120', ru: 'Лето и Новруз: $95–120' },
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=75',
    descFa: 'آپارتمان بوتیک با دکوراسیون هنری منحصربه‌فرد در قلب فرهنگی ایروان. نزدیک گالری‌ها، کافه‌ها و اپرا.',
    descEn: 'Boutique apartment with unique artistic decor in Yerevan\'s cultural heart. Near galleries, cafés, and the opera.',
    descRu: 'Бутик-квартира с уникальным художественным декором в культурном центре Еревана. Рядом с галереями, кафе и оперой.',
  },
];

function ApartmentCard({ apt, lang }) {
  const title = lang === 'fa' ? apt.titleFa : lang === 'ru' ? apt.titleRu : apt.titleEn;
  const location = lang === 'fa' ? apt.locationFa : lang === 'ru' ? apt.locationRu : apt.locationEn;
  const desc = lang === 'fa' ? apt.descFa : lang === 'ru' ? apt.descRu : apt.descEn;
  const season = apt.priceSeason[lang] || apt.priceSeason.en;
  const priceLabel = lang === 'fa'
    ? `${apt.priceLow}–${apt.priceHigh} دلار/شب`
    : lang === 'ru'
    ? `$${apt.priceLow}–${apt.priceHigh}/ночь`
    : `$${apt.priceLow}–${apt.priceHigh}/night`;
  const isMonthly = apt.priceLow > 200;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="glass-panel rounded-2xl overflow-hidden border border-white/8 hover:border-primary/30 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img src={apt.image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 flex-wrap">
          <span className="text-white font-bold text-sm drop-shadow leading-tight">{title}</span>
          <span className="bg-primary/90 text-background text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">
            {isMonthly ? `$${apt.priceLow}–${apt.priceHigh}/mo` : priceLabel}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1 text-primary/80"><MapPin className="w-3.5 h-3.5" />{location}</span>
          <span className="flex items-center gap-1 text-foreground/50"><Bed className="w-3.5 h-3.5" />{apt.bedrooms}</span>
        </div>
        <p className="text-xs text-foreground/60 leading-relaxed">{desc}</p>
        <p className="text-xs text-primary/60 bg-primary/5 rounded-lg px-3 py-1.5">📅 {season}</p>
      </div>
    </motion.div>
  );
}

const FAQS = {
  fa: [
    { q: 'چطور آپارتمان رزرو کنم؟', a: 'از طریق واتساپ تاریخ ورود و خروج، تعداد نفرات و بودجه تقریبی را ارسال کنید. تیم کاسپین بهترین گزینه‌های موجود با عکس و قیمت دقیق برای شما ارسال می‌کند.' },
    { q: 'قیمت‌ها در فصول مختلف چطور است؟', a: 'فصل اوج (تیر تا شهریور و نوروز): ۲۰ تا ۴۰ درصد گران‌تر. بهترین فصل از نظر قیمت: اردیبهشت، خرداد و مهر. زمستان ارزان‌ترین قیمت‌ها را دارد.' },
    { q: 'آپارتمان ماهانه چه قیمتی دارد؟', a: 'آپارتمان‌های ماهانه در ایروان از ۶۰۰ تا ۱۵۰۰ دلار در ماه بسته به اندازه و موقعیت هستند. این قیمت‌ها تغییر فصلی ندارند.' },
    { q: 'ترانسفر فرودگاه دارید؟', a: 'بله، کاسپین ترانسفر از فرودگاه زوارتنوتس به آپارتمان را با هماهنگی قبلی انجام می‌دهد.' },
  ],
  en: [
    { q: 'How do I book an apartment?', a: 'Send check-in/out dates, number of guests, and approximate budget via WhatsApp. Caspian\'s team will send the best available options with photos and exact pricing.' },
    { q: 'How do prices vary by season?', a: 'Peak season (July–September and Nowruz): 20–40% more expensive. Best price season: May, June, and October. Winter offers the lowest prices.' },
    { q: 'What are monthly apartment rates?', a: 'Monthly apartments in Yerevan range from $600 to $1,500/month depending on size and location. These prices don\'t have seasonal variation.' },
    { q: 'Is airport transfer available?', a: 'Yes, Caspian arranges transfer from Zvartnots Airport to your apartment upon prior arrangement.' },
  ],
  ru: [
    { q: 'Как забронировать квартиру?', a: 'Напишите в WhatsApp даты заезда/выезда, количество гостей и примерный бюджет. Команда Caspian пришлёт лучшие доступные варианты с фото и точными ценами.' },
    { q: 'Как цены меняются по сезонам?', a: 'Пик (июль–сентябрь и Новруз): дороже на 20–40%. Лучшее соотношение цены и сезона: май, июнь и октябрь. Зимой самые низкие цены.' },
    { q: 'Каковы цены на помесячную аренду?', a: 'Помесячная аренда в Ереване от $600 до $1500/месяц в зависимости от размера и расположения. Без сезонных колебаний.' },
    { q: 'Есть ли трансфер из аэропорта?', a: 'Да, Caspian организует трансфер из аэропорта Звартноц в квартиру по предварительному согласованию.' },
  ],
};

function ApartmentFAQ() {
  const { lang } = useLang();
  const [active, setActive] = useState(null);
  const faqs = FAQS[lang] || FAQS.fa;
  const title = { fa: 'سوالات متداول', en: 'FAQ', ru: 'Вопросы и ответы' };
  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">{title[lang]}</h2>
      </div>
      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i} className={i < faqs.length - 1 ? 'border-b border-white/5' : ''}>
            <button onClick={() => setActive(active === i ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors text-right">
              <span className="font-medium text-foreground/90 text-sm leading-relaxed pr-2">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${active === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {active === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                  <div className="px-5 pb-5 text-sm text-foreground/65 leading-relaxed">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApartmentContent() {
  const { lang } = useLang();
  const waMsg = lang === 'fa' ? 'سلام، می‌خوام آپارتمان در ایروان اجاره کنم' : lang === 'ru' ? 'Здравствуйте, хочу снять квартиру в Ереване' : 'Hello, I would like to rent an apartment in Yerevan';
  const waBtn = { fa: 'رزرو آپارتمان از طریق واتساپ', en: 'Book an Apartment via WhatsApp', ru: 'Забронировать квартиру в WhatsApp' };
  const waSub = { fa: 'تاریخ، تعداد نفرات و بودجه را ارسال کنید', en: 'Send dates, guests and budget', ru: 'Отправьте даты, количество гостей и бюджет' };
  const sectionTitle = { fa: 'نمونه آپارتمان‌های ایروان', en: 'Sample Apartments in Yerevan', ru: 'Примеры квартир в Ереване' };
  const priceNote = {
    fa: '* قیمت‌های شبانه برای فصل معمولی (مهر تا اردیبهشت). در تابستان و نوروز ۲۰–۴۰٪ بیشتر است.',
    en: '* Nightly prices for regular season (Oct–May). Summer & Nowruz: +20–40%.',
    ru: '* Ночные цены для обычного сезона (окт–май). Лето и Новруз: +20–40%.',
  };

  return (
    <ServicePageLayout
      titleFa="اجاره آپارتمان در ارمنستان" titleEn="Apartment Rental in Armenia" titleRu="Аренда квартир в Армении"
      subtitleFa="آپارتمان‌های مجهز در ایروان — اقتصادی‌تر از هتل، راحت‌تر از خوابگاه"
      subtitleEn="Furnished apartments in Yerevan — more affordable than hotels"
      subtitleRu="Меблированные квартиры в Ереване — дешевле отелей"
      heroImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
      serviceType="apartment"
    >
      <a href={`https://wa.me/37433149327?text=${encodeURIComponent(waMsg)}`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-green-600 hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-600/30 group mb-8">
        <MessageCircle className="w-6 h-6 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
        <div className="text-center">
          <div className="text-white font-bold text-base leading-tight">{waBtn[lang]}</div>
          <div className="text-green-100 text-xs mt-0.5">{waSub[lang]}</div>
        </div>
      </a>

      <h2 className="text-2xl font-black text-foreground mb-5 text-center gold-gradient-text">{sectionTitle[lang]}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
        {APARTMENTS.map((apt, i) => <ApartmentCard key={i} apt={apt} lang={lang} />)}
      </div>

      <p className="text-xs text-foreground/40 text-center mb-8">{priceNote[lang]}</p>

      <InfoBlock title={lang === 'fa' ? 'مزایای آپارتمان نسبت به هتل' : lang === 'ru' ? 'Преимущества квартиры перед отелем' : 'Apartment vs Hotel'}>
        <CheckList items={
          lang === 'fa'
            ? ['فضای بیشتر — آشپزخانه کامل برای پختن غذای ایرانی', 'هزینه کمتر — مخصوصاً برای اقامت بالای ۳ شب', 'حریم خصوصی بیشتر برای خانواده‌ها', 'امکان ماندن ماهانه با قیمت مناسب‌تر', 'مناسب برای افرادی که به محله‌های فارسی‌زبان نزدیک باشند']
            : lang === 'ru'
            ? ['Больше пространства — полная кухня', 'Дешевле — особенно при проживании более 3 ночей', 'Больше приватности для семей', 'Возможность помесячной аренды по выгодной цене', 'Близость к персоязычным районам']
            : ['More space — full kitchen for cooking', 'Lower cost — especially for stays over 3 nights', 'More privacy for families', 'Option for monthly stay at better rates', 'Close to Persian-speaking neighborhoods']
        } />
      </InfoBlock>

      <ApartmentFAQ />
    </ServicePageLayout>
  );
}

export default function Apartment() {
  return <LanguageProvider><ApartmentContent /></LanguageProvider>;
}