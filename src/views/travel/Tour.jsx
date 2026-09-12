'use client';
import React from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { PartyPopper, Users, Car, Hotel, Sunrise, CalendarDays, MapPin } from 'lucide-react';
import { WHATSAPP_BOOKING } from '@/lib/contact';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

const EVENTS = {
  fa: {
    badge: '🎉 ویژه شهریور ۱۴۰۵ — فستیوال‌ها و کنسرت‌های ایروان',
    title: 'تور ارمنستان، ویژه فستیوال‌ها و کنسرت‌های شهریور',
    intro: 'ایروان در شهریور امسال میزبان دو رویداد بزرگ موسیقی است؛ کاسپین تور بسته‌های ویژه اقامت و ترانسفر هماهنگ با این دو تاریخ را برایتان طراحی کرده است.',
    items: [
      { date: 'چهارشنبه ۲۵ شهریور ۱۴۰۵ (۱۶ سپتامبر ۲۰۲۶)', name: 'کنسرت ابی — تور «پوست شیر»', place: 'مجموعه ورزشی و کنسرت کارن دمیرچیان، ایروان' },
      { date: 'یکشنبه ۲۹ شهریور ۱۴۰۵ (۲۰ سپتامبر ۲۰۲۶)', name: 'فستیوال بزرگ Disco Legends (Retro Stars Fest)', place: 'مجموعه Aura by Adana، حومه ایروان — با اجرای هدوی، Mr. President، دکتر آلبان و بونی ام' },
    ],
    cta: 'برای بررسی تور در این تاریخ‌ها یا هر تاریخ دیگری، همین حالا به واتساپ ما پیام بدهید',
  },
  en: {
    badge: '🎉 September 2026 Special — Yerevan Festivals & Concerts',
    title: 'Armenia Tour — Special September Festivals & Concerts Edition',
    intro: "Yerevan is hosting two major music events this September. Caspian Tour has built special stay-and-transfer packages timed around both dates.",
    items: [
      { date: 'Wednesday, September 16, 2026', name: 'Ebi Concert — "Pooste Shir" Tour', place: 'Karen Demirchyan Sports & Concerts Complex, Yerevan' },
      { date: 'Sunday, September 20, 2026', name: 'Disco Legends Festival (Retro Stars Fest)', place: 'Aura by Adana Complex, near Yerevan — featuring Haddaway, Mr. President, Dr. Alban and Boney M.' },
    ],
    cta: 'Message us on WhatsApp now to check tour availability for these dates or any other date',
  },
  ru: {
    badge: '🎉 Специально к сентябрю 2026 — фестивали и концерты в Ереване',
    title: 'Тур по Армении — специальный выпуск к сентябрьским фестивалям и концертам',
    intro: 'В сентябре Ереван примет два крупных музыкальных события. Caspian Tour подготовил специальные пакеты проживания и трансфера, приуроченные к этим датам.',
    items: [
      { date: 'Среда, 16 сентября 2026', name: 'Концерт Эби — тур «Pooste Shir»', place: 'Спортивно-концертный комплекс им. Карена Демирчяна, Ереван' },
      { date: 'Воскресенье, 20 сентября 2026', name: 'Фестиваль Disco Legends (Retro Stars Fest)', place: 'Комплекс Aura by Adana, пригород Еревана — с участием Haddaway, Mr. President, Dr. Alban и Boney M.' },
    ],
    cta: 'Напишите нам в WhatsApp прямо сейчас, чтобы уточнить наличие тура на эти или любые другие даты',
  },
};

const HIGHLIGHTS = {
  fa: [
    { name: 'ایروان', desc: 'میدان جمهوری، کاسکاد و موزه تاریخ ارمنستان' },
    { name: 'دریاچه سوان', desc: 'بزرگ‌ترین دریاچه قفقاز، صومعه سواناوانک' },
    { name: 'گارنی و گقارد', desc: 'معبد یونانی گارنی و صومعه صخره‌ای گقارد (میراث یونسکو)' },
    { name: 'خور ویراپ', desc: 'صومعه تاریخی با چشم‌انداز مستقیم کوه آرارات' },
    { name: 'دیلیجان', desc: 'شهر جنگلی معروف به سوئیس ارمنستان' },
    { name: 'گیومری', desc: 'دومین شهر بزرگ ارمنستان با معماری تاریخی روسی' },
    { name: 'کارخانه شراب‌سازی', desc: 'تاکستان‌های آرنی و تجربه تست شراب‌های اصیل ارمنی' },
  ],
  en: [
    { name: 'Yerevan', desc: 'Republic Square, Cascade and the History Museum of Armenia' },
    { name: 'Lake Sevan', desc: 'The largest lake in the Caucasus, Sevanavank Monastery' },
    { name: 'Garni & Geghard', desc: 'Garni Greek temple and the rock-hewn Geghard Monastery (UNESCO)' },
    { name: 'Khor Virap', desc: 'Historic monastery with a direct view of Mount Ararat' },
    { name: 'Dilijan', desc: "The forest town known as Armenia's Switzerland" },
    { name: 'Gyumri', desc: "Armenia's second-largest city with historic Russian-era architecture" },
    { name: 'Wine Factory Tour', desc: 'Areni vineyards and Armenian wine tasting experience' },
  ],
  ru: [
    { name: 'Ереван', desc: 'Площадь Республики, Каскад и Музей истории Армении' },
    { name: 'Озеро Севан', desc: 'Крупнейшее озеро Кавказа, монастырь Севанаванк' },
    { name: 'Гарни и Гегард', desc: 'Греческий храм Гарни и пещерный монастырь Гегард (ЮНЕСКО)' },
    { name: 'Хор Вирап', desc: 'Исторический монастырь с видом на гору Арарат' },
    { name: 'Дилижан', desc: 'Лесной город, известный как "армянская Швейцария"' },
    { name: 'Гюмри', desc: 'Второй по величине город Армении с исторической архитектурой' },
    { name: 'Винодельни Армении', desc: 'Виноградники Арени и дегустация армянских вин' },
  ],
};

const HIGHLIGHT_IMAGES = [
  'https://images.unsplash.com/photo-1693071486458-810787f9d465?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1702675231835-ba8c6136b173?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1657968641725-deb8d1a24142?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1677864109159-34eb97228c65?w=800&q=80&auto=format&fit=crop',
  '/images/tourism/dilijan.webp',
  'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80&auto=format&fit=crop',
];

const HIGHLIGHT_HREFS = [
  '/travel/tour/yerevan-city',
  '/travel/tour/sevan-lake',
  '/travel/tour/garni-geghard',
  '/travel/tour/khor-virap',
  '/travel/tour/dilijan',
  '/travel/tour/gyumri',
  '/travel/tour/wine-factory-tour',
];

const WHY_ICONS = [Users, Car, Hotel];

function TourContent() {
  const { lang } = useLang();
  const t = {
    fa: {
      why: 'چرا تور ارمنستان با کاسپین؟', whyBody: 'کاسپین تور از سال ۲۰۰۷ به‌صورت تخصصی تورهای ارمنستان را برای مسافران ایرانی برگزار می‌کند. بدون نیاز به ویزا، با پرواز کوتاه از تهران و راهنمای فارسی‌زبان، ارمنستان یکی از بهترین مقاصد برای سفر فرهنگی، طبیعت‌گردی و حتی سفرهای کاری کوتاه است.',
      whyPoints: ['بدون نیاز به ویزا برای ایرانیان', 'پرواز کوتاه و مستقیم از تهران', 'راهنمای فارسی‌زبان در تمام مسیر'],
      typesTitle: 'انواع تور ارمنستان', types: ['تور گروهی — با گروه‌های ثابت و راهنمای مشترک، مقرون‌به‌صرفه‌تر', 'تور اختصاصی (خصوصی) — خودرو و برنامه اختصاصی برای خانواده یا گروه دوستانه', 'تور آخر هفته — ۲ تا ۳ شب برای بازدید سریع از ایروان و اطراف', 'تور کامل ۶-۷ شبه — پوشش کامل جاذبه‌های اصلی ارمنستان'],
      includesTitle: 'بسته تور شامل چه مواردی می‌شود؟', includes: ['اقامت در هتل ۳، ۴ یا ۵ ستاره منتخب', 'ترانسفر فرودگاهی رفت و برگشت', 'گشت‌های تعیین‌شده با راهنمای فارسی‌زبان', 'صبحانه در هتل', 'پشتیبانی ۲۴ ساعته در طول سفر'],
      highlightsTitle: 'مقاصد اصلی تور ارمنستان', highlightsSubtitle: 'روی هر مقصد بزنید تا برنامه، هزینه و جزئیات تور یک‌روزه‌اش را ببینید',
      seasonTitle: 'بهترین فصل برای تور ارمنستان',
      season: ['بهار (اردیبهشت-خرداد) — گل‌های وحشی، دریاچه سوان آبی-سبز، قیمت متعادل. بهترین انتخاب', 'تابستان (تیر-شهریور) — گرمای ایروان ولی آب‌وهوای کوهستان خنک. فصل اوج — هتل‌ها زودتر رزرو می‌شوند', 'پاییز (مهر-آبان) — رنگ‌آمیزی طبیعی جنگل‌ها، جشنواره انار آرنی. توصیه‌شده', 'زمستان (آذر-بهمن) — اسکی در تسخکاذور، ایروان آرام و ارزان. مناسب کسانی که شلوغی دوست ندارند'],
      cta: 'مشاوره رایگان تور از طریق واتساپ',
    },
    en: {
      why: 'Why Book an Armenia Tour with Caspian?', whyBody: 'Caspian Tour has specialized in Armenia tours for Iranian travelers since 2007. With no visa required, a short flight from Tehran, and a Persian-speaking guide, Armenia is one of the best destinations for cultural travel, nature trips, and even short business visits.',
      whyPoints: ['No visa required for Iranian citizens', 'Short, direct flight from Tehran', 'Persian-speaking guide throughout the trip'],
      typesTitle: 'Types of Armenia Tours', types: ['Group Tour — fixed groups with a shared guide, more affordable', 'Private Tour — dedicated car and itinerary for families or friend groups', 'Weekend Tour — 2-3 nights for a quick look at Yerevan and surroundings', "Full 6-7 Night Tour — complete coverage of Armenia's main attractions"],
      includesTitle: "What's Included in the Tour Package?", includes: ['Stay at a selected 3, 4 or 5-star hotel', 'Round-trip airport transfer', 'Scheduled excursions with a Persian-speaking guide', 'Breakfast at the hotel', '24-hour support throughout your trip'],
      highlightsTitle: 'Main Armenia Tour Destinations', highlightsSubtitle: 'Tap any destination for its itinerary, pricing and day-tour details',
      seasonTitle: 'Best Season for an Armenia Tour',
      season: ['Spring (Apr-Jun) — wildflowers, turquoise Lake Sevan, balanced prices. Best pick', 'Summer (Jul-Sep) — warm Yerevan but cool mountain air. Peak season — book hotels early', 'Autumn (Oct-Nov) — natural forest colors, Areni pomegranate festival. Recommended', 'Winter (Dec-Feb) — skiing in Tsaghkadzor, a quiet and affordable Yerevan. Best for avoiding crowds'],
      cta: 'Free Tour Consultation via WhatsApp',
    },
    ru: {
      why: 'Почему тур по Армении с Caspian?', whyBody: 'Caspian Tour с 2007 года специализируется на турах по Армении. Виза не требуется, короткий перелёт из Тегерана и русскоговорящий/персоязычный гид делают Армению отличным направлением для культурного и природного туризма.',
      whyPoints: ['Виза не требуется для граждан Ирана', 'Короткий прямой перелёт из Тегерана', 'Русско/персоязычный гид на протяжении всей поездки'],
      typesTitle: 'Виды туров по Армении', types: ['Групповой тур — фиксированные группы с общим гидом, более доступно', 'Индивидуальный тур — отдельный автомобиль и программа для семей и компаний', 'Тур выходного дня — 2-3 ночи для быстрого знакомства с Ереваном', 'Полный тур на 6-7 ночей — все главные достопримечательности Армении'],
      includesTitle: 'Что входит в тур?', includes: ['Проживание в отеле 3, 4 или 5 звёзд', 'Трансфер из аэропорта и обратно', 'Запланированные экскурсии с гидом', 'Завтрак в отеле', 'Поддержка 24 часа в течение поездки'],
      highlightsTitle: 'Главные направления тура по Армении', highlightsSubtitle: 'Нажмите на направление, чтобы увидеть программу и стоимость',
      seasonTitle: 'Лучший сезон для тура по Армении',
      season: ['Весна (апр-июн) — дикие цветы, бирюзовое озеро Севан, средние цены. Лучший выбор', 'Лето (июл-сен) — тёплый Ереван, прохладный горный воздух. Пик сезона — бронируйте отели заранее', 'Осень (окт-ноя) — краски осеннего леса, фестиваль граната в Арени. Рекомендуется', 'Зима (дек-фев) — катание на лыжах в Цахкадзоре, тихий и недорогой Ереван. Для тех, кто не любит толпы'],
      cta: 'Бесплатная консультация в WhatsApp',
    },
  }[lang] || {};

  const highlights = HIGHLIGHTS[lang] || HIGHLIGHTS.fa;
  const ev = EVENTS[lang] || EVENTS.fa;

  return (
    <ServicePageLayout titleFa="تور ارمنستان" titleEn="Armenia Tour" titleRu="Тур по Армении" subtitleFa="تور گروهی و اختصاصی به ایروان، سوان، گارنی و دیلیجان از سال ۲۰۰۷" subtitleEn="Group & private tours to Yerevan, Sevan, Garni and Dilijan since 2007" subtitleRu="Групповые и индивидуальные туры с 2007 года" heroImage="https://images.unsplash.com/photo-1609669712881-d9bc36df5ab3?w=1200&q=80" serviceType="tour">

      {/* چرا کاسپین — کارت‌های آیکون‌دار به‌جای متن خام */}
      <section className="glass-panel rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-black text-primary mb-3">{t.why}</h2>
        <p className="text-sm text-foreground/70 leading-relaxed mb-5">{t.whyBody}</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {t.whyPoints.map((pt, i) => {
            const Icon = WHY_ICONS[i] || Users;
            return (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3">
                <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </span>
                <span className="text-sm text-foreground/80">{pt}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* مقاصد اصلی — گرید تصویری */}
      <section className="mb-10">
        <h2 className="text-2xl font-black mb-1">{t.highlightsTitle}</h2>
        <p className="text-sm text-foreground/50 mb-5">{t.highlightsSubtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => {
            const href = HIGHLIGHT_HREFS[i];
            const card = (
              <>
                <div className="relative overflow-hidden">
                  <img src={HIGHLIGHT_IMAGES[i]} alt={h.name} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-black text-base mb-1 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />{h.name}</h3>
                  <p className="text-sm text-foreground/60">{h.desc}</p>
                </div>
              </>
            );
            return href
              ? <Link key={i} href={href} className="group glass-panel rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">{card}</Link>
              : <div key={i} className="glass-panel rounded-2xl overflow-hidden">{card}</div>;
          })}
        </div>
      </section>

      {/* فستیوال‌ها و کنسرت‌های ویژه */}
      <section className="mb-10 rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 to-transparent p-6 sm:p-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
          <PartyPopper className="w-3.5 h-3.5" /> {ev.badge}
        </span>
        <h2 className="text-xl font-black text-foreground mb-2">{ev.title}</h2>
        <p className="text-sm text-foreground/70 leading-relaxed mb-5">{ev.intro}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {ev.items.map((item) => (
            <div key={item.name} className="rounded-2xl bg-black/15 border border-white/5 p-4">
              <div className="flex items-center gap-1.5 text-xs text-primary/80 font-bold mb-1.5">
                <CalendarDays className="w-3.5 h-3.5" /> {item.date}
              </div>
              <strong className="text-sm text-foreground">{item.name}</strong>
              <p className="text-xs text-foreground/50 mt-1">{item.place}</p>
            </div>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP_BOOKING}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-black text-black hover:bg-yellow-500 transition-colors">
          <WhatsAppIcon className="w-5 h-5" /> {ev.cta}
        </a>
      </section>

      {/* انواع تور + شامل چه مواردی */}
      <div className="grid sm:grid-cols-2 gap-6 mb-2">
        <InfoBlock title={t.typesTitle}><CheckList items={t.types} /></InfoBlock>
        <InfoBlock title={t.includesTitle}><CheckList items={t.includes} /></InfoBlock>
      </div>

      <InfoBlock title={t.seasonTitle}><CheckList items={t.season} /></InfoBlock>
    </ServicePageLayout>
  );
}

export default TourContent;
