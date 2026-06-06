import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';
import { Train, Bus, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = {
  fa: [
    { q: 'چطور بلیط اتوبوس یا قطار رزرو کنم؟', a: 'از طریق واتساپ مبدا، مقصد، تاریخ، تعداد مسافر و نوع سفر (اتوبوس یا قطار) را ارسال کنید. تیم کاسپین گزینه‌های موجود را برای شما پیدا می‌کند.' },
    { q: 'به چه مسیرهایی سرویس دارید؟', a: 'کاسپین بلیط زمینی در مسیرهای ایران (تهران، مشهد، تبریز و...)، ترکیه، گرجستان، ارمنستان، روسیه و آذربایجان را رزرو می‌کند.' },
    { q: 'کوپه دربست چیست؟', a: 'در قطار، می‌توانید کل کوپه ۴ نفره را برای گروه خصوصی خود رزرو کنید. این گزینه برای خانواده‌ها و گروه‌های دوستانه مناسب است.' },
    { q: 'مدت سفر با اتوبوس از تهران به ایروان چقدر است؟', a: 'مسیر تهران-ایروان با اتوبوس حدود ۱۶ تا ۱۸ ساعت طول می‌کشد. معمولاً اتوبوس‌ها شب حرکت می‌کنند و صبح می‌رسند.' },
    { q: 'روش پرداخت چیست؟', a: 'پرداخت از طریق واریز ریالی، کارت دلاری یا رمزارز (USDT) انجام می‌شود. بلیط پس از تأیید پرداخت ارسال می‌شود.' },
    { q: 'آیا استرداد بلیط امکان‌پذیر است؟', a: 'شرایط استرداد بسته به شرکت حمل‌ونقل متفاوت است. تیم کاسپین در این فرآیند راهنمای شماست.' },
    { q: 'آیا امکان رزرو برای گروه‌های بزرگ وجود دارد؟', a: 'بله، کاسپین رزرو گروهی اتوبوس و قطار را انجام می‌دهد. برای گروه‌های بالای ۱۰ نفر تخفیف ویژه در نظر گرفته می‌شود.' },
  ],
  en: [
    { q: 'How do I book a bus or train ticket?', a: 'Send origin, destination, date, number of passengers, and travel type (bus or train) via WhatsApp. Caspian\'s team will find the available options for you.' },
    { q: 'Which routes do you cover?', a: 'Caspian books ground transportation on routes in Iran (Tehran, Mashhad, Tabriz...), Turkey, Georgia, Armenia, Russia, and Azerbaijan.' },
    { q: 'What is a private compartment?', a: 'On the train, you can book an entire 4-person compartment for your private group. This option is suitable for families and friend groups.' },
    { q: 'How long is the bus journey from Tehran to Yerevan?', a: 'The Tehran-Yerevan bus journey takes approximately 16–18 hours. Buses usually depart at night and arrive in the morning.' },
    { q: 'What are the payment options?', a: 'Payment is accepted via Rial bank transfer, USD card, or cryptocurrency (USDT). Ticket is sent after payment confirmation.' },
    { q: 'Is ticket refund possible?', a: 'Refund conditions vary by transportation company. Caspian\'s team will guide you through the process.' },
    { q: 'Can you book for large groups?', a: 'Yes, Caspian handles group bookings for buses and trains. Special discounts apply for groups of 10 or more.' },
  ],
  ru: [
    { q: 'Как забронировать билет на автобус или поезд?', a: 'Напишите в WhatsApp пункт отправления, назначения, дату, количество пассажиров и тип (автобус или поезд). Команда Caspian найдёт доступные варианты.' },
    { q: 'По каким маршрутам работаете?', a: 'Caspian бронирует наземный транспорт по маршрутам в Иране, Турции, Грузии, Армении, России и Азербайджане.' },
    { q: 'Что такое купе целиком?', a: 'В поезде можно забронировать всё купе (на 4 человека) для своей группы. Подходит для семей и компаний друзей.' },
    { q: 'Сколько времени занимает автобус из Тегерана в Ереван?', a: 'Маршрут Тегеран-Ереван на автобусе занимает около 16–18 часов. Обычно автобусы отправляются ночью и прибывают утром.' },
    { q: 'Какие способы оплаты?', a: 'Оплата принимается в риалах, по карте USD или криптовалютой (USDT). Билет отправляется после подтверждения оплаты.' },
    { q: 'Можно ли вернуть билет?', a: 'Условия возврата зависят от транспортной компании. Команда Caspian поможет в этом процессе.' },
    { q: 'Можно ли бронировать для большой группы?', a: 'Да, Caspian занимается групповыми бронированиями автобусов и поездов. Для групп от 10 человек действуют специальные скидки.' },
  ],
};

function BusFAQ() {
  const { lang } = useLang();
  const [active, setActive] = useState(null);
  const faqs = FAQS[lang] || FAQS.fa;
  const title = { fa: 'سوالات متداول قطار و اتوبوس', en: 'Train & Bus FAQ', ru: 'Вопросы о поезде и автобусе' };

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

function PageContent() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';

  const titles = {
    fa: { main: 'قطار و اتوبوس', sub: 'رزرو بلیط زمینی — کاسپین گروه' },
    en: { main: 'Train & Bus', sub: 'Ground ticket booking — Caspian Group' },
    ru: { main: 'Поезд и автобус', sub: 'Бронирование наземных билетов — Caspian Group' },
  };
  const t = titles[lang] || titles.fa;

  const waLabel = { fa: 'رزرو بلیط از طریق واتساپ', en: 'Book a Ticket via WhatsApp', ru: 'Забронировать билет в WhatsApp' };
  const waSub = { fa: 'مبدا، مقصد، تاریخ و نوع سفر را ارسال کنید', en: 'Send route, date and travel type', ru: 'Отправьте маршрут, дату и тип поездки' };
  const waMsg = lang === 'fa' ? 'سلام، می‌خوام بلیط اتوبوس یا قطار رزرو کنم' : lang === 'ru' ? 'Здравствуйте, хочу забронировать билет на автобус или поезд' : 'Hello, I would like to book a bus or train ticket';

  const infoCards = {
    fa: [
      { icon: '🚌', title: 'اتوبوس', text: 'رزرو بلیط اتوبوس بین‌شهری و بین‌المللی. مسیرهای ایران، ترکیه، گرجستان و ارمنستان با شرکت‌های معتبر.' },
      { icon: '🚂', title: 'قطار', text: 'رزرو کوپه معمولی یا کوپه دربست. مسیرهای داخلی و بین‌المللی با بهترین قیمت و امکانات.' },
      { icon: '💳', title: 'پرداخت', text: 'واریز ریالی، دلار یا تتر. تیم کاسپین پس از تأیید پرداخت، بلیط را ارسال می‌کند.' },
    ],
    en: [
      { icon: '🚌', title: 'Bus', text: 'Book intercity and international bus tickets. Routes in Iran, Turkey, Georgia and Armenia with reputable companies.' },
      { icon: '🚂', title: 'Train', text: 'Book regular or private compartment. Domestic and international routes at the best price.' },
      { icon: '💳', title: 'Payment', text: 'Pay in Rial, USD or USDT. Caspian\'s team sends your ticket after payment confirmation.' },
    ],
    ru: [
      { icon: '🚌', title: 'Автобус', text: 'Бронирование междугородных и международных автобусов по маршрутам в Иран, Турцию, Грузию и Армению.' },
      { icon: '🚂', title: 'Поезд', text: 'Бронирование обычного или целого купе. Внутренние и международные маршруты по лучшим ценам.' },
      { icon: '💳', title: 'Оплата', text: 'Оплата в риалах, USD или USDT. Команда Caspian отправит билет после подтверждения оплаты.' },
    ],
  };
  const cards = infoCards[lang] || infoCards.fa;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />
      <div className="relative pt-14">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1400&q=80"
            alt="train bus" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-2">
              <Train className="w-8 h-8 text-primary" />
              <Bus className="w-7 h-7 text-primary/70" />
              <h1 className="text-3xl sm:text-5xl font-black gold-gradient-text">{t.main}</h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-foreground/60 text-sm sm:text-base">{t.sub}</motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
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
          {cards.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-5 border border-white/8">
              <div className="text-2xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-foreground mb-1 text-sm">{b.title}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <BusFAQ />
      </div>
      <ContactFooter />
    </div>
  );
}

export default function BusTrainBooking() {
  return <LanguageProvider><PageContent /></LanguageProvider>;
}