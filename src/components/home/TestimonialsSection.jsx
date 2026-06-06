import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const testimonialsData = {
  fa: [
    { name: 'علی رضایی', location: 'تهران', text: 'واقعاً ممنون از تیم کاسپین. ویزای شینگن‌م تو ۱۰ روز آماده شد. انتظار نداشتم انقدر سریع باشه!', rating: 5 },
    { name: 'م. کریمی', location: 'مشهد', text: 'اقامت ارمنستان را از طریق این مجموعه اخذ نمودم. روند کار کاملاً شفاف و حرفه‌ای بود و در تمام مراحل همراهی کردند.', rating: 5 },
    { name: 'سارا ح.', location: 'اصفهان', text: 'بلیطمو از اینا گرفتم خیلی راحت بود فقط یکم دیر جواب دادن ولی در کل عالی بود ⭐', rating: 4 },
    { name: 'ف. موسوی', location: 'تبریز', text: 'ثبت شرکت در ارمنستان رو برام انجام دادن. هزینه‌ها از اول مشخص بود و هیچ هزینه پنهانی نداشت.', rating: 5 },
    { name: 'نیما ط.', location: 'تهران', text: 'داداشم گفته بود برو پیش کاسپین، رفتم ویزای رومانی گرفتم. دستشون درد نکنه واقعا سریع کار کردن', rating: 5 },
    { name: 'زهرا امیری', location: 'شیراز', text: 'خدمات پذیرش دانشجویی را با حرفه‌ای‌ترین شکل ممکن انجام دادند. از ابتدا تا انتها مراحل توسط مشاوران متخصص پیگیری شد.', rating: 5 },
    { name: 'ر. نصیری', location: 'کرج', text: 'وقت سفارت گرفتم، همه چیز درست بود فقط یکم گرون بود ولی کیفیتش خوب بود ارزش داشت', rating: 4 },
    { name: 'حامد ب.', location: 'قم', text: 'صرافی‌شون خوبه نرخشون منصفانه‌س. چند بار باهاشون کار کردم راضی بودم', rating: 5 },
    { name: 'مریم شریفی', location: 'ایروان', text: 'به عنوان یک ایرانی مقیم ارمنستان، خدمات این مجموعه را بسیار کاربردی و قابل اعتماد یافتم. توصیه می‌کنم.', rating: 5 },
    { name: 'ک. احمدی', location: 'رشت', text: 'ویزای روسیه گرفتم ازشون. اول یکم نگران بودم ولی همه چیز خوب پیش رفت ممنون از تیم خوبشون', rating: 5 },
  ],
  en: [
    { name: 'Ali R.', location: 'Tehran', text: 'Really grateful to Caspian team. My Schengen visa was ready in 10 days. Didn\'t expect it to be that fast!', rating: 5 },
    { name: 'M. Karimi', location: 'Mashhad', text: 'I obtained Armenia residency through this group. The process was completely transparent and professional throughout.', rating: 5 },
    { name: 'Sara H.', location: 'Isfahan', text: 'Got my ticket from them it was very easy just a bit slow to reply but overall great experience ⭐', rating: 4 },
    { name: 'F. Mousavi', location: 'Tabriz', text: 'They handled my company registration in Armenia. Costs were clear from the start, no hidden fees whatsoever.', rating: 5 },
    { name: 'Nima T.', location: 'Tehran', text: 'My brother recommended Caspian, got my Romania visa sorted. They worked really fast, highly recommend', rating: 5 },
    { name: 'Zahra A.', location: 'Shiraz', text: 'Student admission services were handled in the most professional manner. Every step was followed up by expert consultants.', rating: 5 },
    { name: 'R. Nasiri', location: 'Karaj', text: 'Got embassy appointment, everything was fine just a bit pricey but quality was good worth it', rating: 4 },
    { name: 'Hamed B.', location: 'Qom', text: 'Their exchange rates are fair. Worked with them several times and always satisfied', rating: 5 },
    { name: 'Maryam Sh.', location: 'Yerevan', text: 'As an Iranian living in Armenia, I found their services very practical and trustworthy. Highly recommended.', rating: 5 },
    { name: 'K. Ahmadi', location: 'Rasht', text: 'Got Russia visa from them. Was a bit worried at first but everything went smoothly, thanks to their great team', rating: 5 },
  ],
  ru: [
    { name: 'Али Р.', location: 'Тегеран', text: 'Очень благодарен команде Caspian. Шенгенская виза была готова за 10 дней. Не ожидал такой скорости!', rating: 5 },
    { name: 'М. Карими', location: 'Мешхед', text: 'Оформил ВНЖ Армении через эту компанию. Весь процесс был прозрачным и профессиональным.', rating: 5 },
    { name: 'Сара Х.', location: 'Исфахан', text: 'Купил билет у них, очень удобно, только немного медленно отвечают, но в целом отличный опыт ⭐', rating: 4 },
    { name: 'Ф. Мусави', location: 'Тебриз', text: 'Зарегистрировали компанию в Армении. Стоимость была известна заранее, никаких скрытых платежей.', rating: 5 },
    { name: 'Нима Т.', location: 'Тегеран', text: 'Брат посоветовал Caspian, получил визу в Румынию. Работают очень быстро, рекомендую', rating: 5 },
    { name: 'Захра А.', location: 'Шираз', text: 'Зачисление в вуз организовали максимально профессионально. Каждый шаг сопровождался опытными консультантами.', rating: 5 },
    { name: 'Р. Насири', location: 'Карадж', text: 'Записали в посольство, всё прошло нормально, немного дорого но качество хорошее, оно того стоит', rating: 4 },
    { name: 'Хамед Б.', location: 'Кум', text: 'Обменный курс справедливый. Работаю с ними несколько раз, всегда доволен', rating: 5 },
    { name: 'Марьям Ш.', location: 'Ереван', text: 'Как иранка, живущая в Армении, нахожу их услуги очень практичными и надёжными. Рекомендую.', rating: 5 },
    { name: 'К. Ахмади', location: 'Решт', text: 'Оформил визу в Россию. Сначала немного волновался, но всё прошло отлично, спасибо команде', rating: 5 },
  ],
};

export default function TestimonialsSection() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const items = testimonialsData[lang] || testimonialsData.fa;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs text-primary/70 font-medium">
            {lang === 'fa' ? 'نظرات مشتریان' : lang === 'ru' ? 'Отзывы клиентов' : 'Client Reviews'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-1">
            {lang === 'fa' ? 'صحبت‌های مشتریان ما' : lang === 'en' ? 'What Our Customers Say' : 'Что говорят наши клиенты'}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: isRtl ? '100%' : '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRtl ? '-100%' : '100%', opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-xl p-5 border border-primary/10 min-h-[140px]"
            >
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-3 h-3 ${j < items[current].rating ? 'text-primary fill-primary' : 'text-foreground/20'}`} />
                ))}
              </div>
              <p className="text-foreground/70 text-xs mb-3 leading-relaxed line-clamp-4">"{items[current].text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{items[current].name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-xs">{items[current].name}</p>
                  <p className="text-xs text-foreground/50">{items[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`h-1 rounded-full transition-all ${
                  idx === current ? 'bg-primary w-5' : 'bg-white/20 w-1 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}