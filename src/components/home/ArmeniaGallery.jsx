import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const PLACES = [
  {
    url: 'https://images.unsplash.com/photo-1609669712881-d9bc36df5ab3?w=1400&q=85',
    name: { fa: 'میدان جمهوری ایروان', en: 'Republic Square, Yerevan', ru: 'Площадь Республики, Ереван' },
    desc: { fa: 'قلب تپنده پایتخت ارمنستان با فواره‌های موزیکال و ساختمان‌های کلاسیک توف', en: 'The beating heart of Armenia\'s capital with musical fountains and classic tuff buildings', ru: 'Сердце столицы Армении с музыкальными фонтанами и классическими зданиями из туфа' },
  },
  {
    url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1400&q=85',
    name: { fa: 'معبد گارنی', en: 'Garni Temple', ru: 'Храм Гарни' },
    desc: { fa: 'تنها معبد یونانی-رومی باقی‌مانده در ارمنستان، قرن اول میلادی', en: 'The only surviving Greco-Roman colonnaded building in Armenia, 1st century AD', ru: 'Единственный сохранившийся греко-римский храм в Армении, I век н.э.' },
  },
  {
    url: 'https://images.unsplash.com/photo-1571195530810-42c1e4e8b4d3?w=1400&q=85',
    name: { fa: 'صومعه گغارد', en: 'Geghard Monastery', ru: 'Монастырь Гегард' },
    desc: { fa: 'صومعه میراث جهانی یونسکو منحوت در سنگ، نزدیک دره آزات', en: 'UNESCO World Heritage monastery partially carved out of the adjacent cliff', ru: 'Монастырь ЮНЕСКО, частично вырубленный в скале, в долине Азат' },
  },
  {
    url: 'https://images.unsplash.com/photo-1567960890665-e3e0f38c64e9?w=1400&q=85',
    name: { fa: 'دریاچه سوان', en: 'Lake Sevan', ru: 'Озеро Севан' },
    desc: { fa: 'یکی از بزرگ‌ترین دریاچه‌های آب شیرین آسیا در ارتفاع ۱۹۰۰ متری', en: 'One of the largest freshwater high-altitude lakes in Asia at 1,900m elevation', ru: 'Одно из крупнейших высокогорных пресноводных озёр Азии на высоте 1900 м' },
  },
  {
    url: 'https://images.unsplash.com/photo-1612478378820-b9e41a6c18d8?w=1400&q=85',
    name: { fa: 'صومعه سوانواک', en: 'Sevanavank Monastery', ru: 'Монастырь Севанаванк' },
    desc: { fa: 'صومعه قرن نهم میلادی بر فراز تپه‌ای در کنار دریاچه سوان', en: '9th-century monastery perched on a hilltop overlooking Lake Sevan', ru: 'Монастырь IX века на холме с видом на озеро Севан' },
  },
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1400&q=85',
    name: { fa: 'صومعه خور ویراپ', en: 'Khor Virap Monastery', ru: 'Монастырь Хор Вирап' },
    desc: { fa: 'صومعه‌ای با نمای خیره‌کننده کوه آرارات — نماد ملی ارمنستان', en: 'Monastery with a breathtaking backdrop of Mt. Ararat — Armenia\'s national symbol', ru: 'Монастырь с захватывающим видом на Арарат — национальный символ Армении' },
  },
  {
    url: 'https://images.unsplash.com/photo-1622396636438-07aef1f9b1be?w=1400&q=85',
    name: { fa: 'صومعه نوراوانک', en: 'Noravank Monastery', ru: 'Монастырь Нораванк' },
    desc: { fa: 'صومعه قرن سیزدهم در دل دره‌ای با صخره‌های سرخ‌رنگ در جنوب ارمنستان', en: '13th-century monastery in a dramatic red-rock canyon in southern Armenia', ru: 'Монастырь XIII века в живописном красном ущелье на юге Армении' },
  },
  {
    url: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=1400&q=85',
    name: { fa: 'کاسکاد ایروان', en: 'Cascade Complex, Yerevan', ru: 'Каскад, Ереван' },
    desc: { fa: 'مجموعه عظیم پله‌کانی با آثار هنری مدرن و چشم‌انداز پانوراما به شهر', en: 'Giant stairway complex with modern art installations and panoramic city views', ru: 'Грандиозный лестничный комплекс с современным искусством и панорамой города' },
  },
  {
    url: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=1400&q=85',
    name: { fa: 'کلیسای آراگاتزوتن', en: 'Saghmosavank Monastery', ru: 'Монастырь Сагмосаванк' },
    desc: { fa: 'صومعه قرن سیزدهم بر لبه دره کاساخ با منظره‌ای حیرت‌انگیز', en: '13th-century monastery on the edge of Kasagh River gorge with stunning views', ru: 'Монастырь XIII века на краю ущелья реки Касах с потрясающими видами' },
  },
  {
    url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=85',
    name: { fa: 'کوه آرارات', en: 'Mount Ararat', ru: 'Гора Арарат' },
    desc: { fa: 'بلندترین قله خاورمیانه — نماد ابدی هویت ارمنی', en: 'The highest peak in the Middle East — the eternal symbol of Armenian identity', ru: 'Высочайшая вершина Ближнего Востока — вечный символ армянской идентичности' },
  },
  {
    url: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=1400&q=85',
    name: { fa: 'خیابان شمالی ایروان', en: 'Northern Avenue, Yerevan', ru: 'Северный проспект, Ереван' },
    desc: { fa: 'خیابان پیاده‌رو اصلی ایروان با کافه‌ها، گالری‌ها و معماری نئوکلاسیک', en: 'Yerevan\'s main pedestrian boulevard with cafes, galleries and neoclassical architecture', ru: 'Главный пешеходный бульвар Еревана с кафе, галереями и неоклассической архитектурой' },
  },
  {
    url: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1400&q=85',
    name: { fa: 'دره آزات', en: 'Azat River Gorge', ru: 'Ущелье реки Азат' },
    desc: { fa: 'دره‌ای بکر با ستون‌های بازالتی شگفت‌انگیز در نزدیکی معبد گارنی', en: 'Pristine gorge with spectacular basalt columns near Garni Temple', ru: 'Нетронутое ущелье с удивительными базальтовыми колоннами близ Гарни' },
  },
  {
    url: 'https://images.unsplash.com/photo-1565060169194-19fabf63012c?w=1400&q=85',
    name: { fa: 'باغ‌های آبشار ایروان', en: 'Hrazdan Gorge, Yerevan', ru: 'Ущелье Раздан, Ереван' },
    desc: { fa: 'دره سبز رود راژدان که از قلب شهر ایروان می‌گذرد', en: 'The green Hrazdan River gorge cutting through the heart of Yerevan', ru: 'Зелёное ущелье реки Раздан, проходящее через центр Еревана' },
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85',
    name: { fa: 'کوهستان‌های آراگاتز', en: 'Mount Aragats', ru: 'Гора Арагац' },
    desc: { fa: 'بلندترین کوه داخل ارمنستان با دریاچه‌های کوهستانی و چشم‌اندازهای فوق‌العاده', en: 'The highest mountain entirely within Armenia with alpine lakes and spectacular views', ru: 'Высочайшая гора в пределах Армении с горными озёрами и захватывающими видами' },
  },
  {
    url: 'https://images.unsplash.com/photo-1518450580564-e7372f7af6df?w=1400&q=85',
    name: { fa: 'کلیسای سنت گریگور ایروان', en: 'St. Gregory Cathedral, Yerevan', ru: 'Кафедральный собор Св. Григория, Ереван' },
    desc: { fa: 'بزرگ‌ترین کلیسای ارمنستان، ساخته‌شده به مناسبت جشن ۱۷۰۰ سالگی مسیحیت', en: 'Armenia\'s largest cathedral, built to mark 1700 years of Christianity', ru: 'Крупнейший собор Армении, построенный к 1700-летию христианства' },
  },
  {
    url: 'https://images.unsplash.com/photo-1554260570-9b89f5b7b6f9?w=1400&q=85',
    name: { fa: 'موزه ملی ایروان', en: 'History Museum of Armenia', ru: 'Исторический музей Армении' },
    desc: { fa: 'یکی از غنی‌ترین موزه‌های خاورمیانه با آثار ۸۰۰ هزار ساله', en: 'One of the richest museums in the Middle East with artifacts spanning 800,000 years', ru: 'Один из богатейших музеев Ближнего Востока с экспонатами возрастом 800 000 лет' },
  },
  {
    url: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1400&q=85',
    name: { fa: 'دیلیجان — سوئیس ارمنستان', en: 'Dilijan — Armenia\'s Switzerland', ru: 'Дилижан — Армянская Швейцария' },
    desc: { fa: 'شهری در دل جنگل‌های انبوه شمال ارمنستان — بهشت طبیعت و آرامش', en: 'A town nestled in the dense forests of northern Armenia — paradise of nature', ru: 'Город в густых лесах севера Армении — рай природы и спокойствия' },
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=85',
    name: { fa: 'هتل‌های مجلل ایروان', en: 'Luxury Hotels of Yerevan', ru: 'Роскошные отели Еревана' },
    desc: { fa: 'اقامت در بهترین هتل‌های ایروان — آسایش اروپایی در قلب آسیا', en: 'Staying in Yerevan\'s finest hotels — European comfort in the heart of Asia', ru: 'Проживание в лучших отелях Еревана — европейский комфорт в сердце Азии' },
  },
  {
    url: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=1400&q=85',
    name: { fa: 'بازار تاریخی ورناسار', en: 'Vernissage Market, Yerevan', ru: 'Вернисаж, Ереван' },
    desc: { fa: 'بازار هنری آخر هفته ایروان — صنایع دستی ارمنی، قالیچه و جواهرات سنتی', en: 'Yerevan\'s famous weekend art market — Armenian crafts, carpets and traditional jewelry', ru: 'Знаменитый воскресный рынок Еревана — армянские ремёсла, ковры и украшения' },
  },
  {
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=85',
    name: { fa: 'دریاچه کوهستانی کاری لیچ', en: 'Kari Lake, Mount Aragats', ru: 'Озеро Кари, гора Арагац' },
    desc: { fa: 'دریاچه آلپاین در ارتفاع ۳۱۸۵ متری پای کوه آراگاتز با آب زلال و آسمان صاف', en: 'Alpine lake at 3,185m at the foot of Aragats with crystal clear water and open sky', ru: 'Альпийское озеро на высоте 3185 м у подножия Арагаца с чистейшей водой' },
  },
];

const TITLE = {
  fa: { badge: 'طبیعت و فرهنگ', title: 'ارمنستان را', gold: 'کشف کنید', sub: 'سرزمینی با تاریخ ۳۰۰۰ ساله، طبیعت بکر و معماری باشکوه' },
  en: { badge: 'Nature & Culture', title: 'Discover', gold: 'Armenia', sub: 'A land with 3,000 years of history, pristine nature and magnificent architecture' },
  ru: { badge: 'Природа и Культура', title: 'Откройте для себя', gold: 'Армению', sub: 'Страна с 3000-летней историей, нетронутой природой и великолепной архитектурой' },
};

export default function ArmeniaGallery() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const c = TITLE[lang] || TITLE.fa;
  const isRtl = lang === 'fa';

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    clearInterval(timerRef.current);
    const idx = (current - 1 + PLACES.length) % PLACES.length;
    setDirection(-1);
    setCurrent(idx);
  };

  const next = () => {
    clearInterval(timerRef.current);
    const idx = (current + 1) % PLACES.length;
    setDirection(1);
    setCurrent(idx);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(p => (p + 1) % PLACES.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const place = PLACES[current];

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="py-16 sm:py-24 px-4 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
            <MapPin className="w-3.5 h-3.5" />
            {c.badge}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-foreground mb-3">
            {c.title} <span className="gold-gradient-text">{c.gold}</span>
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
            className="w-14 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3" />
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-foreground/50 text-sm max-w-lg mx-auto">{c.sub}</motion.p>
        </div>

        {/* Main Slider */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] shadow-2xl"
          style={{ boxShadow: '0 0 80px rgba(212,168,68,0.1), 0 0 160px rgba(212,168,68,0.04)', border: '1px solid rgba(212,168,68,0.15)' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0">
              <img src={place.url} alt={place.name[lang]}
                className="w-full h-full object-cover" loading="lazy" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Info overlay */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 z-10">
            <AnimatePresence mode="wait">
              <motion.div key={current + 'txt'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.15 }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-primary font-black text-lg sm:text-2xl">{place.name[lang]}</span>
                </div>
                <p className="text-white/70 text-xs sm:text-sm max-w-md leading-relaxed">{place.desc[lang]}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 start-3 sm:start-5 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass-panel border border-white/15 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
            <ChevronLeft className="w-5 h-5 text-white/80" />
          </button>
          <button onClick={next}
            className="absolute top-1/2 -translate-y-1/2 end-3 sm:end-5 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass-panel border border-white/15 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
            <ChevronRight className="w-5 h-5 text-white/80" />
          </button>

          {/* Progress bar */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-white/10 z-20">
            <motion.div key={current + 'bar'} className="h-full bg-primary"
              initial={{ width: '0%' }} animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }} />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 sm:gap-3 mt-4 justify-center overflow-x-auto pb-1">
          {PLACES.map((p, i) => (
            <button key={i} onClick={() => go(i)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${i === current ? 'ring-2 ring-primary shadow-lg shadow-primary/20 scale-105' : 'opacity-50 hover:opacity-80'}`}
              style={{ width: 64, height: 44 }}>
              <img src={p.url} alt={p.name[lang]}
                className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}