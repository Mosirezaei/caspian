import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';
import { Plane, HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const FAQS = {
  fa: [
    { q: 'چطور بلیط پرواز رزرو کنم؟', a: 'از طریق واتساپ مبدا، مقصد، تاریخ و تعداد مسافر را بفرستید. تیم کاسپین ظرف چند ساعت بهترین گزینه‌های پروازی را با قیمت دقیق برای شما ارسال می‌کند.' },
    { q: 'به کدام مقاصد پرواز دارید؟', a: 'کاسپین بلیط پرواز به تمام مقاصد جهانی را رزرو می‌کند. مسیرهای پرطرفدار: ایروان-تهران، ایروان-دبی، ایروان-استانبول، ایروان-مسکو، ایروان-فرانکفورت و بسیاری دیگر.' },
    { q: 'کدام ایرلاین‌ها از ایروان پرواز دارند؟', a: 'ایروان با ایرلاین‌هایی مانند Flyone Armenia، Wizz Air، Armenia Air، Aeroflot، Turkish Airlines، Emirates و ایر عربیا به شهرهای مختلف جهان متصل است.' },
    { q: 'بلیط از ایروان به تهران چقدر است؟', a: 'قیمت پروازهای ایروان-تهران بسته به فصل، ایرلاین و فاصله تا پرواز متفاوت است. معمولاً در محدوده ۸۰ تا ۲۵۰ دلار (اکونومی یک‌طرفه) است.' },
    { q: 'روش‌های پرداخت کدام هستند؟', a: 'کاسپین پرداخت‌های ریالی (واریز بانکی)، دلاری (کارت بین‌المللی)، و رمزارز (USDT/TRC20) را می‌پذیرد.' },
    { q: 'امکان استرداد یا تغییر بلیط وجود دارد؟', a: 'قوانین استرداد و تغییر بسته به ایرلاین و نوع بلیط متفاوت است. کاسپین در فرآیند تغییر یا استرداد شما را راهنمایی می‌کند.' },
    { q: 'آیا کاسپین ویزای مقصد را هم کمک می‌کند؟', a: 'بله! کاسپین گروه علاوه بر بلیط، در اخذ ویزای شینگن، روسیه، ترکیه و سایر کشورها نیز به شما کمک می‌کند. پکیج‌های ترکیبی بلیط+ویزا با تخفیف ویژه ارائه می‌شود.' },
    { q: 'بهترین زمان خرید بلیط چه وقت است؟', a: 'معمولاً خرید ۳ تا ۸ هفته قبل از پرواز بهترین قیمت را دارد. برای سفرهای تعطیلات، پیشنهاد می‌کنیم حداقل ۲ ماه زودتر رزرو کنید.' },
    { q: 'آیا مدارک خاصی لازم است؟', a: 'برای خرید بلیط هواپیما به پاسپورت معتبر نیاز دارید. اطلاعات پاسپورت باید دقیقاً مطابق با نام روی بلیط باشد.' },
    { q: 'آیا می‌توان برای چند نفر یک‌جا رزرو کرد؟', a: 'بله، تعداد مسافران را هنگام درخواست اعلام کنید. برای گروه‌های بزرگ‌تر از ۹ نفر با تیم کاسپین تماس مستقیم داشته باشید.' },
  ],
  en: [
    { q: 'How do I book a flight?', a: 'Send origin, destination, date, and number of passengers via WhatsApp. Caspian\'s team will send the best flight options with exact pricing within a few hours.' },
    { q: 'Which destinations do you fly to?', a: 'Caspian books flights to all global destinations. Popular routes: Yerevan-Tehran, Yerevan-Dubai, Yerevan-Istanbul, Yerevan-Moscow, Yerevan-Frankfurt, and many more.' },
    { q: 'Which airlines fly from Yerevan?', a: 'Yerevan is connected via Flyone Armenia, Wizz Air, Armenia Air, Aeroflot, Turkish Airlines, Emirates, and Air Arabia, among others.' },
    { q: 'How much is a flight from Yerevan to Tehran?', a: 'Prices for Yerevan-Tehran flights generally range $80–$250 for one-way economy. Contact us for the most current pricing.' },
    { q: 'What payment methods are accepted?', a: 'Caspian accepts Rial bank transfers, USD card payments, and cryptocurrency (USDT/TRC20).' },
    { q: 'Can I change or refund a ticket?', a: 'Refund and change policies vary by airline and ticket type. Caspian will guide you through any modification or refund process.' },
    { q: 'Does Caspian help with destination visas?', a: 'Yes! Caspian Group also assists with Schengen, Russia, Turkey, and other country visas. Combined flight+visa packages with special discounts are available.' },
    { q: 'When is the best time to buy a ticket?', a: 'Buying 3–8 weeks in advance usually gives the best price. For holiday travel, book at least 2 months ahead.' },
    { q: 'What documents are needed?', a: 'A valid passport is required. The name on your ticket must exactly match your passport.' },
    { q: 'Can I book for multiple passengers?', a: 'Yes, mention the number of passengers when requesting. For groups larger than 9, contact Caspian directly.' },
  ],
  ru: [
    { q: 'Как забронировать авиабилет?', a: 'Напишите в WhatsApp пункт отправления, назначения, дату и количество пассажиров. Команда Caspian пришлёт лучшие варианты с точными ценами в течение нескольких часов.' },
    { q: 'В какие направления вы продаёте билеты?', a: 'Caspian бронирует билеты во все мировые направления. Популярные маршруты: Ереван-Тегеран, Ереван-Дубай, Ереван-Стамбул, Ереван-Москва, Ереван-Франкфурт и другие.' },
    { q: 'Какие авиакомпании летят из Еревана?', a: 'Из Еревана летят: Flyone Armenia, Wizz Air, Аэрофлот, Turkish Airlines, Emirates, Air Arabia и другие.' },
    { q: 'Сколько стоит перелёт из Еревана в Тегеран?', a: 'Цены обычно $80–$250 за эконом в одну сторону. Свяжитесь с нами для актуальных цен.' },
    { q: 'Какие способы оплаты принимаются?', a: 'Caspian принимает банковские переводы в риалах, оплату картой USD и криптовалюту (USDT/TRC20).' },
    { q: 'Можно ли изменить или вернуть билет?', a: 'Правила зависят от авиакомпании и типа билета. Caspian поможет в процессе изменения или возврата.' },
    { q: 'Помогает ли Caspian с визой?', a: 'Да! Оформляем шенгенские визы, визы в Россию, Турцию и другие страны. Пакеты билет+виза со скидкой.' },
    { q: 'Когда лучше покупать билет?', a: 'Покупка за 3–8 недель обычно даёт лучшую цену. Для праздничных поездок — минимум за 2 месяца.' },
    { q: 'Какие документы нужны?', a: 'Требуется действительный паспорт. Имя в билете должно совпадать с паспортом.' },
    { q: 'Можно ли забронировать сразу для нескольких пассажиров?', a: 'Да, укажите количество пассажиров при запросе. Для групп более 9 человек обратитесь в Caspian напрямую.' },
  ],
};

function FlightFAQ() {
  const { lang } = useLang();
  const [active, setActive] = useState(null);
  const faqs = FAQS[lang] || FAQS.fa;
  const title = { fa: 'سوالات متداول پرواز', en: 'Flight Booking FAQ', ru: 'Вопросы о бронировании билетов' };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-5">
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
                  <div className="px-4 sm:px-5 pb-5 text-sm text-foreground/65 leading-relaxed">{faq.a}</div>
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
  const isRtl = lang === 'fa';

  const titles = {
    fa: { main: 'رزرو پرواز', sub: 'رزرو بلیط هواپیما،قطار،اتوبوس  با بهترین قیمت — کاسپین گروه' },
    en: { main: 'Flight Booking', sub: 'Book flights at the best prices — Caspian Group' },
    ru: { main: 'Бронирование авиабилетов', sub: 'Бронирование перелётов по лучшим ценам — Caspian Group' },
  };
  const t = titles[lang] || titles.fa;

  const cards = {
    fa: [
      { icon: '✈️', title: 'رزرو بلیط پرواز', text: 'شهر مبدا، مقصد و تاریخ سفر خود را از طریق واتساپ ارسال کنید. تیم کاسپین بهترین گزینه‌های پروازی را از بین تمام ایرلاین‌ها برای شما پیدا کرده و رزرو را انجام می‌دهد.' },
      { icon: '🛡️', title: 'پشتیبانی ۷ روزه', text: 'تیم کاسپین ۷ روز هفته از ساعت ۹ صبح تا ۱۰ شب در دسترس است. از طریق واتساپ، تلگرام یا تماس مستقیم می‌توانید درخواست خود را ثبت کنید.' },
      { icon: '💡', title: 'نکات مهم', text: 'پاسپورت خود را پیش از رزرو بررسی کنید. نام روی بلیط باید دقیقاً با پاسپورت مطابقت داشته باشد. کاسپین پکیج‌های ترکیبی بلیط+ویزا+هتل با تخفیف ویژه ارائه می‌دهد.' },
    ],
    en: [
      { icon: '✈️', title: 'Book Your Flight', text: 'Send your origin, destination, and dates via WhatsApp. Caspian\'s team will find the best flight options from all airlines and complete the booking for you.' },
      { icon: '🛡️', title: '7-Day Support', text: 'Caspian\'s team is available 7 days a week from 9 AM to 10 PM. Contact us via WhatsApp, Telegram, or phone.' },
      { icon: '💡', title: 'Important Tips', text: 'Check your passport validity before booking. The name on your ticket must match your passport exactly. Caspian offers combined flight+visa+hotel packages at special rates.' },
    ],
    ru: [
      { icon: '✈️', title: 'Бронирование авиабилетов', text: 'Напишите в WhatsApp пункт отправления, назначения и даты. Команда Caspian найдёт лучшие варианты среди всех авиакомпаний и выполнит бронирование.' },
      { icon: '🛡️', title: 'Поддержка 7 дней в неделю', text: 'Команда Caspian доступна 7 дней в неделю с 9:00 до 22:00. Свяжитесь через WhatsApp, Telegram или по телефону.' },
      { icon: '💡', title: 'Важные советы', text: 'Проверьте срок действия паспорта. Имя в билете должно совпадать с паспортом. Caspian предлагает пакеты билет+виза+отель со скидкой.' },
    ],
  };
  const infoCards = cards[lang] || cards.fa;

  const waLabel = { fa: 'رزرو پرواز از طریق واتساپ', en: 'Book a Flight via WhatsApp', ru: 'Забронировать рейс в WhatsApp' };
  const waSub = { fa: 'مبدا، مقصد، تاریخ و تعداد مسافر را ارسال کنید', en: 'Send origin, destination, date and number of passengers', ru: 'Отправьте маршрут, дату и количество пассажиров' };
  const waMsg = lang === 'fa' ? 'سلام، می‌خوام بلیط پرواز رزرو کنم' : lang === 'ru' ? 'Здравствуйте, хочу забронировать авиабилет' : 'Hello, I would like to book a flight';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />
      <div className="relative pt-14">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80"
            alt="flight" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-2">
              <Plane className="w-8 h-8 text-primary" />
              <h1 className="text-3xl sm:text-5xl font-black gold-gradient-text">{t.main}</h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-foreground/60 text-sm sm:text-base">{t.sub}</motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <a href={`https://wa.me/37433149327?text=${encodeURIComponent(waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-green-600 hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-600/30 group mb-8">
          <MessageCircle className="w-6 h-6 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
          <div className="text-center">
            <div className="text-white font-bold text-base leading-tight">{waLabel[lang]}</div>
            <div className="text-green-100 text-xs mt-0.5">{waSub[lang]}</div>
          </div>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {infoCards.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-5 border border-white/8">
              <div className="text-2xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-foreground mb-2 text-sm">{b.title}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <FlightFAQ />
      </div>
      <ContactFooter />
    </div>
  );
}

export default function Flight() {
  return <LanguageProvider><FlightContent /></LanguageProvider>;
}
