import React, { useState } from 'react';
import BookingSearchModal from '@/components/shared/BookingSearchModal';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { MessageCircle, ChevronDown, HelpCircle, Star } from 'lucide-react';

// ۱۵ هتل واقعی ارمنستان
const HOTELS = {
  3: [
    {
      name: 'Erebuni Hotel',
      location: 'مرکز ایروان، نزدیک میدان جمهوری',
      locationEn: 'Yerevan Center, near Republic Square',
      locationRu: 'Центр Еревана, рядом с площадью Республики',
      price: 55,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=75',
      descFa: 'هتل اربونی یکی از قدیمی‌ترین و شناخته‌شده‌ترین هتل‌های ایروان است. موقعیت مرکزی، نزدیکی به جاذبه‌های اصلی شهر و سرویس صبحانه شامل از ویژگی‌های اصلی آن است.',
      descEn: 'Erebuni Hotel is one of Yerevan\'s oldest and most recognized hotels. Central location, proximity to major attractions, and included breakfast are key features.',
      descRu: 'Отель Erebuni — один из старейших и наиболее известных отелей Еревана. Центральное расположение, близость к главным достопримечательностям и включённый завтрак.',
    },
    {
      name: 'Hotel Nork',
      location: 'محله نورک، منظره شهر',
      locationEn: 'Nork District, city view',
      locationRu: 'Район Норк, вид на город',
      price: 50,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=75',
      descFa: 'هتل نورک در محله آرام نورک قرار دارد و منظره فوق‌العاده‌ای از ایروان و کوه آرارات دارد. مناسب برای کسانی که محیط آرام را ترجیح می‌دهند.',
      descEn: 'Hotel Nork is located in the peaceful Nork neighborhood with stunning views of Yerevan and Mount Ararat. Ideal for those who prefer a quieter environment.',
      descRu: 'Отель Nork расположен в спокойном районе Норк с потрясающим видом на Ереван и гору Арарат. Идеален для тех, кто предпочитает тихую обстановку.',
    },
    {
      name: 'Hotel Dvin',
      location: 'بلوار مشروتیان، مرکز شهر',
      locationEn: 'Mesrobian Boulevard, city center',
      locationRu: 'Бульвар Месробян, центр города',
      price: 48,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75',
      descFa: 'هتل دوین با موقعیت مرکزی عالی، اتاق‌های تمیز و راحت و نزدیکی به رستوران‌ها و مراکز خرید یکی از محبوب‌ترین انتخاب‌های ۳ ستاره در ایروان است.',
      descEn: 'Hotel Dvin offers excellent central location, clean and comfortable rooms, and proximity to restaurants and shopping centers — one of the most popular 3-star choices in Yerevan.',
      descRu: 'Отель Dvin предлагает отличное центральное расположение, чистые и комфортные номера и близость к ресторанам и торговым центрам.',
    },
    {
      name: 'Cascade Hotel',
      location: 'نزدیک کاسکاد، خیابان ترامپلین',
      locationEn: 'Near Cascade, Tramplin Street',
      locationRu: 'Рядом с Каскадом, ул. Трамплин',
      price: 52,
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=75',
      descFa: 'هتل کاسکاد در نزدیکی کمپلکس معروف کاسکاد قرار دارد. دسترسی آسان به گالری‌های هنری، کافه‌ها و پارک‌های شهری از مزایای اصلی آن است.',
      descEn: 'Cascade Hotel is located near the famous Cascade complex with easy access to art galleries, cafés, and city parks.',
      descRu: 'Отель Cascade расположен вблизи знаменитого комплекса Каскад с удобным доступом к художественным галереям, кафе и городским паркам.',
    },
    {
      name: 'Nairi Hotel',
      location: 'خیابان آبوویان، مرکز تاریخی',
      locationEn: 'Abovyan Street, historic center',
      locationRu: 'Улица Абовяна, исторический центр',
      price: 45,
      image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=75',
      descFa: 'هتل نایری در قلب ایروان تاریخی واقع شده و دسترسی عالی به مترو، رستوران‌های ایرانی و مراکز اداری دارد. انتخاب اقتصادی با کیفیت خوب.',
      descEn: 'Nairi Hotel is located in the heart of historic Yerevan with excellent access to metro, Iranian restaurants, and administrative centers. A budget-friendly choice with good quality.',
      descRu: 'Отель Nairi расположен в историческом центре Еревана с удобным доступом к метро, иранским ресторанам и административным центрам.',
    },
  ],
  4: [
    {
      name: 'Best Western Plus Congress Hotel',
      location: 'میدان جمهوری، مرکز اصلی ایروان',
      locationEn: 'Republic Square, main center of Yerevan',
      locationRu: 'Площадь Республики, центр Еревана',
      price: 120,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=75',
      descFa: 'هتل بست وسترن پلاس کنگره در بهترین موقعیت ایروان، درست روبروی میدان جمهوری قرار دارد. ویو کاملاً بی‌نظیر از میدان، استخر و اسپا از امکانات آن است.',
      descEn: 'Best Western Plus Congress Hotel is in Yerevan\'s best location, directly facing Republic Square. Unique square view, pool, and spa are among its facilities.',
      descRu: 'Отель Best Western Plus Congress расположен в лучшем месте Еревана прямо напротив площади Республики. Уникальный вид на площадь, бассейн и спа.',
    },
    {
      name: 'Yerevan Marriott Hotel',
      location: 'میدان جمهوری، قلب ایروان',
      locationEn: 'Republic Square, heart of Yerevan',
      locationRu: 'Площадь Республики, сердце Еревана',
      price: 150,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=75',
      descFa: 'ماریوت ایروان یکی از بهترین هتل‌های ۴ ستاره شهر است. صبحانه بوفه بین‌المللی، فیتنس کلاب، استخر سرپوشیده و رستوران‌های متنوع از امکانات عالی آن است.',
      descEn: 'Yerevan Marriott is one of the city\'s finest 4-star hotels with international buffet breakfast, fitness club, indoor pool, and diverse restaurants.',
      descRu: 'Marriott Ереван — один из лучших 4-звёздочных отелей города с международным шведским столом, фитнес-клубом, крытым бассейном и разнообразными ресторанами.',
    },
    {
      name: 'Radisson Blu Hotel Yerevan',
      location: 'مرکز تجاری، نزدیک پارک Victory',
      locationEn: 'Business center, near Victory Park',
      locationRu: 'Деловой центр, рядом с парком Победы',
      price: 135,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=75',
      descFa: 'هتل رادیسون بلو در قلب مرکز تجاری ایروان، چشم‌اندازی زیبا از شهر و کوه آرارات دارد. مناسب برای سفرهای تجاری و مسافران VIP.',
      descEn: 'Radisson Blu Yerevan is in the heart of the business center with beautiful views of the city and Mount Ararat. Ideal for business trips and VIP travelers.',
      descRu: 'Отель Radisson Blu Yerevan расположен в центре делового района с прекрасным видом на город и гору Арарат. Идеален для деловых поездок и VIP-путешественников.',
    },
    {
      name: 'Golden Palace Hotel',
      location: 'ابوویان، نزدیک اپرا',
      locationEn: 'Abovyan, near Opera House',
      locationRu: 'Абовян, рядом с оперным театром',
      price: 110,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=75',
      descFa: 'هتل گلدن پالاس در نزدیکی خانه اپرا و جاذبه‌های فرهنگی ایروان قرار دارد. طراحی کلاسیک ارمنی، رستوران ملی و خدمات سطح بالا از ویژگی‌های آن است.',
      descEn: 'Golden Palace Hotel is near the Opera House and cultural attractions. Classic Armenian design, national restaurant, and premium services are its highlights.',
      descRu: 'Отель Golden Palace расположен рядом с оперным театром и культурными достопримечательностями. Классический армянский дизайн, национальный ресторан и первоклассный сервис.',
    },
    {
      name: 'Ararat Park Hyatt',
      location: 'پشت کاخ ریاست جمهوری، چشم‌انداز آرارات',
      locationEn: 'Behind Presidential Palace, Ararat view',
      locationRu: 'За президентским дворцом, вид на Арарат',
      price: 145,
      image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&q=75',
      descFa: 'آرارات پارک هایت با چشم‌انداز مستقیم به کوه آرارات، یکی از بهترین هتل‌های ۴ ستاره بالای ایروان است. اتاق‌های بزرگ، رستوران لوکس و استخر روفتاپ دارد.',
      descEn: 'Ararat Park Hyatt with direct views of Mount Ararat is one of Yerevan\'s finest upper 4-star hotels. Spacious rooms, luxury restaurant, and rooftop pool.',
      descRu: 'Ararat Park Hyatt с прямым видом на гору Арарат — один из лучших отелей Еревана категории "4+" с просторными номерами, роскошным рестораном и бассейном на крыше.',
    },
  ],
  5: [
    {
      name: 'The Alexander, a Luxury Collection Hotel',
      location: 'خیابان آرامی، قلب شهر',
      locationEn: 'Arami Street, heart of the city',
      locationRu: 'Улица Арами, сердце города',
      price: 250,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=75',
      descFa: 'الکساندر لاکچری کالکشن زیباترین هتل ۵ ستاره ایروان است. ساختمانی تاریخی با طراحی داخلی بین‌المللی، اسپا جهانی، بار بام‌بام و رستوران فاین‌دایننگ.',
      descEn: 'The Alexander Luxury Collection is Yerevan\'s most beautiful 5-star hotel. Historic building with international interior design, world-class spa, rooftop bar, and fine dining.',
      descRu: 'The Alexander Luxury Collection — самый красивый 5-звёздочный отель Еревана. Историческое здание с международным интерьером, мировым спа, баром на крыше и изысканным рестораном.',
    },
    {
      name: 'Marriott Armenia Hotel',
      location: 'میدان جمهوری، نمادین‌ترین آدرس شهر',
      locationEn: 'Republic Square, most iconic address',
      locationRu: 'Площадь Республики, самый знаковый адрес',
      price: 230,
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&q=75',
      descFa: 'ماریوت ارمنستان در میدان جمهوری، نمادین‌ترین هتل ایروان است. بالکن‌هایی با چشم‌انداز مستقیم میدان، اتاق‌های با دکوراسیون لوکس و خدمات ۲۴ ساعته.',
      descEn: 'Marriott Armenia at Republic Square is Yerevan\'s most iconic hotel. Balconies with direct square views, luxuriously decorated rooms, and 24/7 services.',
      descRu: 'Marriott Armenia на площади Республики — самый знаковый отель Еревана с балконами с прямым видом на площадь, роскошными номерами и круглосуточным обслуживанием.',
    },
    {
      name: 'Hilton Yerevan',
      location: 'خیابان سایات نووا، مرکز فرهنگی',
      locationEn: 'Sayat-Nova Avenue, cultural center',
      locationRu: 'Проспект Саят-Нова, культурный центр',
      price: 220,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=75',
      descFa: 'هیلتون ایروان در خیابان فرهنگی سایات‌نووا، کنار موزه‌ها و تئاترهای معروف شهر است. ۲۴۰ اتاق و سوئیت لوکس، استخر داخلی، مرکز تناسب اندام و ۴ رستوران.',
      descEn: 'Hilton Yerevan on cultural Sayat-Nova Avenue is next to famous museums and theaters. 240 luxury rooms and suites, indoor pool, fitness center, and 4 restaurants.',
      descRu: 'Hilton Yerevan на культурном проспекте Саят-Нова рядом с известными музеями и театрами. 240 роскошных номеров и люксов, крытый бассейн, фитнес-центр и 4 ресторана.',
    },
    {
      name: 'Tufenkian Historic Yerevan Hotel',
      location: 'مرکز قدیمی ایروان، میراث فرهنگی',
      locationEn: 'Old Yerevan center, cultural heritage',
      locationRu: 'Исторический центр Еревана, культурное наследие',
      price: 195,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=75',
      descFa: 'هتل تاریخی توفنکیان در بافت قدیمی ایروان، با طراحی اختصاصی ارمنی و هنر اصیل. هر اتاق یک اثر هنری منحصر به فرد است. مناسب برای مسافران فرهنگ‌دوست.',
      descEn: 'Tufenkian Historic Hotel in old Yerevan with authentic Armenian design and original art. Each room is a unique work of art. Perfect for culturally curious travelers.',
      descRu: 'Исторический отель Tufenkian в старом Ереване с аутентичным армянским дизайном и оригинальным искусством. Каждый номер — уникальное произведение искусства.',
    },
    {
      name: 'Grand Hotel Yerevan',
      location: 'بلوار مشروتیان، مشرف به آرارات',
      locationEn: 'Mesrobian Blvd, overlooking Ararat',
      locationRu: 'Бульвар Месробян, с видом на Арарат',
      price: 240,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=75',
      descFa: 'گرند هتل ایروان با چشم‌اندازی حیرت‌انگیز از کوه آرارات، جاکوزی در سوئیت‌ها، باشگاه ورزشی VIP و رستوران بام‌بام با موزیک زنده، یک تجربه اقامت کاملاً لوکس است.',
      descEn: 'Grand Hotel Yerevan with stunning Ararat views, in-suite jacuzzi, VIP fitness club, and rooftop restaurant with live music offers a truly luxurious experience.',
      descRu: 'Grand Hotel Yerevan с потрясающим видом на Арарат, джакузи в люксах, VIP-фитнес-клубом и рестораном на крыше с живой музыкой предлагает подлинно роскошный опыт.',
    },
  ],
};

const starLabels = { fa: ['هتل‌های پیشنهادی', 'ستاره'], en: ['Recommended Hotels', 'Star'], ru: ['Рекомендуемые отели', 'Звёзд'] };

function StarBadge({ count }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </span>
  );
}

function HotelCard({ hotel, lang }) {
  const price = lang === 'fa'
    ? `از ~$${hotel.price}/شب دبل`
    : lang === 'ru'
    ? `от ~$${hotel.price}/ночь double`
    : `from ~$${hotel.price}/night double`;
  const location = lang === 'fa' ? hotel.location : lang === 'ru' ? hotel.locationRu : hotel.locationEn;
  const desc = lang === 'fa' ? hotel.descFa : lang === 'ru' ? hotel.descRu : hotel.descEn;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="glass-panel rounded-2xl overflow-hidden border border-white/8 hover:border-primary/30 transition-all duration-300">
      <div className="relative h-44 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="text-white font-bold text-base drop-shadow">{hotel.name}</span>
          <span className="bg-primary/90 text-background text-xs font-bold px-2 py-1 rounded-lg">{price}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-primary/80 mb-2">📍 {location}</p>
        <p className="text-xs text-foreground/60 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function HotelCategorySection({ stars, hotels, lang }) {
  const sectionTitle = {
    fa: { 3: 'هتل‌های ۳ ستاره — اقتصادی با کیفیت', 4: 'هتل‌های ۴ ستاره — راحتی بالا', 5: 'هتل‌های ۵ ستاره — لاکچری' },
    en: { 3: '3-Star Hotels — Budget Quality', 4: '4-Star Hotels — High Comfort', 5: '5-Star Hotels — Luxury' },
    ru: { 3: '3-звёздочные отели — бюджет', 4: '4-звёздочные отели — комфорт', 5: '5-звёздочные отели — люкс' },
  };
  const priceNote = {
    fa: { 3: 'میانگین قیمت دبل: ۴۵ تا ۶۰ دلار/شب', 4: 'میانگین قیمت دبل: ۱۰۰ تا ۱۵۰ دلار/شب', 5: 'میانگین قیمت دبل: ۱۹۰ تا ۲۵۰ دلار/شب' },
    en: { 3: 'Avg double rate: $45–$60/night', 4: 'Avg double rate: $100–$150/night', 5: 'Avg double rate: $190–$250/night' },
    ru: { 3: 'Средняя цена двухместного: $45–$60/ночь', 4: 'Средняя цена: $100–$150/ночь', 5: 'Средняя цена: $190–$250/ночь' },
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <StarBadge count={stars} />
          <h2 className="text-lg font-black text-foreground">{sectionTitle[lang]?.[stars]}</h2>
        </div>
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
          {priceNote[lang]?.[stars]}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((h, i) => <HotelCard key={i} hotel={h} lang={lang} />)}
      </div>
    </div>
  );
}

const FAQS = {
  fa: [
    { q: 'چطور هتل رزرو کنم؟', a: 'از طریق واتساپ نام هتل، تاریخ ورود و خروج و تعداد نفرات را ارسال کنید. تیم کاسپین ظرف چند ساعت قیمت دقیق و در صورت موجودی رزرو می‌کند.' },
    { q: 'قیمت‌ها بسته به فصل فرق دارد؟', a: 'بله. فصل اوج گردشگری ارمنستان (خرداد تا شهریور) و تعطیلات نوروز قیمت‌ها بالاتر هستند. بهار و پاییز بهترین ترکیب قیمت و آب‌وهوا را دارند.' },
    { q: 'روش پرداخت چیست؟', a: 'واریز ریالی، کارت دلاری یا رمزارز USDT. جزئیات پس از تأیید رزرو ارسال می‌شود.' },
    { q: 'لغو رزرو چطور است؟', a: 'شرایط لغو بسته به هتل متفاوت است. کاسپین هنگام رزرو شرایط کامل را توضیح می‌دهد.' },
  ],
  en: [
    { q: 'How do I book a hotel?', a: 'Send the hotel name, check-in/out dates, and number of guests via WhatsApp. Caspian\'s team will confirm pricing and availability within hours.' },
    { q: 'Do prices vary by season?', a: 'Yes. Armenia\'s peak tourist season (June–September) and Nowruz holidays have higher prices. Spring and autumn offer the best price-weather combination.' },
    { q: 'What are the payment options?', a: 'Rial bank transfer, USD card, or USDT cryptocurrency. Details are provided after booking confirmation.' },
    { q: 'What is the cancellation policy?', a: 'Cancellation terms vary by hotel. Caspian explains all conditions clearly at the time of booking.' },
  ],
  ru: [
    { q: 'Как забронировать отель?', a: 'Напишите в WhatsApp название отеля, даты и количество гостей. Команда Caspian подтвердит цену и наличие мест в течение нескольких часов.' },
    { q: 'Цены меняются в зависимости от сезона?', a: 'Да. Пик туристического сезона в Армении (июнь–сентябрь) и праздники Новруз — цены выше. Весна и осень предлагают лучшее сочетание цены и погоды.' },
    { q: 'Какие способы оплаты?', a: 'Банковский перевод в риалах, карта USD или криптовалюта USDT. Детали предоставляются после подтверждения бронирования.' },
    { q: 'Условия отмены?', a: 'Условия отмены зависят от отеля. Caspian подробно объясняет все условия при бронировании.' },
  ],
};

function HotelFAQ() {
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

function HotelContent() {
  const { lang } = useLang();
    const waMsg = lang === 'fa' ? 'سلام، می‌خوام هتل در ارمنستان رزرو کنم' : lang === 'ru' ? 'Здравствуйте, хочу забронировать отель в Армении' : 'Hello, I would like to book a hotel in Armenia';
  const waBtn = { fa: 'رزرو هتل از طریق واتساپ', en: 'Book a Hotel via WhatsApp', ru: 'Забронировать отель в WhatsApp' };
  const waSub = { fa: 'نام هتل، تاریخ و تعداد نفرات را ارسال کنید', en: 'Send hotel name, dates and number of guests', ru: 'Отправьте название отеля, даты и количество гостей' };
  const sectionTitle = { fa: 'هتل‌های پیشنهادی ارمنستان', en: 'Recommended Hotels in Armenia', ru: 'Рекомендуемые отели Армении' };
  const note = {
    fa: '* قیمت‌ها میانگین تخمینی برای اتاق دبل در فصل معمولی هستند. در فصل اوج (تابستان، نوروز) ممکن است ۲۰ تا ۴۰ درصد بیشتر باشد.',
    en: '* Prices are estimated averages for a double room in regular season. Peak season (summer, Nowruz) may be 20–40% higher.',
    ru: '* Цены — ориентировочные средние для двухместного номера в обычный сезон. В пиковый сезон (лето, Новруз) может быть на 20–40% выше.',
  };

  return (
    <ServicePageLayout
      titleEn="Hotel Booking Armenia" titleFa="رزرو هتل در ارمنستان" titleRu="Бронирование отелей в Армении"
      subtitleEn="3, 4 & 5-star hotels in Yerevan — best prices via Caspian Group"
      subtitleFa="هتل‌های ۳، ۴ و ۵ ستاره در ایروان — بهترین قیمت از طریق کاسپین"
      subtitleRu="Отели 3, 4 и 5 звёзд в Ереване — лучшие цены от Caspian Group"
      heroImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80"
      serviceType="hotel"
    >

      <h2 className="text-2xl font-black text-foreground mb-6 text-center gold-gradient-text">{sectionTitle[lang]}</h2>

      <HotelCategorySection stars={3} hotels={HOTELS[3]} lang={lang} />
      <HotelCategorySection stars={4} hotels={HOTELS[4]} lang={lang} />
      <HotelCategorySection stars={5} hotels={HOTELS[5]} lang={lang} />

      <p className="text-xs text-foreground/40 text-center mt-2 mb-6">{note[lang]}</p>

<BookingSearchModal isOpen={true} title="رزرو هتل" />
    </ServicePageLayout>
  );
}

export default function Hotel() {
  return <LanguageProvider><HotelContent /></LanguageProvider>;
}
