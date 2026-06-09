import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';
import ConsultModal from '@/components/home/ConsultModal';
import {
  Award, Globe, CheckCircle,
  Shield, MapPin
} from 'lucide-react';

const content = {
  fa: {
    badge: 'بیش از ۱۵ سال تجربه',
    heroTitle: 'کاسپین گروه ارمنستان',
    heroSub: 'پیشرو در خدمات مهاجرت، ویزا و سفر در ایروان',
    storyTitle: 'داستان ما',
    story: [
      'کاسپین گروه ارمنستان در سال ۲۰۰۸ با هدف ارائه خدمات حرفه‌ای مهاجرت و سفر به ایرانیان در ایروان تأسیس شد. در سال‌هایی که تحریم‌ها زندگی بین‌المللی ایرانیان را محدود کرده بود، کاسپین به عنوان یک پل ارتباطی معتمد میان ایران و جهان عمل کرد.',
      'با استقرار دفتر مرکزی در قلب ایروان، خیابان کومیتاس، ما در طول بیش از یک دهه به بیش از ۵۰,۰۰۰ نفر در دریافت ویزا، اقامت، ثبت شرکت و رزرو سفر کمک کرده‌ایم.',
      'تیم ما متشکل از وکلا، مشاوران مهاجرتی، متخصصان سفر و کارشناسان مالی است که همه با یک هدف مشترک کار می‌کنند: ساده کردن پیچیده‌ترین مراحل اداری برای مشتریان.',
    ],
    missionTitle: 'مأموریت ما',
    mission: 'ما معتقدیم هر انسانی حق دارد بدون موانع بوروکراتیک، آزادانه زندگی کند، سفر کند و کار کند. کاسپین گروه با ارائه خدمات شفاف، سریع و مطمئن، این حق را برای مشتریانش ممکن می‌سازد.',
    valuesTitle: 'ارزش‌های ما',
    values: [
      { title: 'شفافیت کامل', desc: 'از همان ابتدا تمام هزینه‌ها، مدت‌زمان و احتمال موفقیت را صادقانه اعلام می‌کنیم.' },
      { title: 'پشتیبانی تا پایان', desc: 'از اولین مشاوره تا دریافت نتیجه نهایی، در تمام مراحل کنار شما هستیم.' },
      { title: 'تخصص واقعی', desc: 'تیم ما دارای مجوزهای رسمی و تجربه عملی در تمام خدمات ارائه‌شده است.' },
      { title: 'احترام به مشتری', desc: 'هر مشتری پرونده‌ای منحصربه‌فرد دارد و با همان دقت و توجه رسیدگی می‌شود.' },
    ],
    statsTitle: 'کاسپین در اعداد',
    stats: [
      { val: '۹۷٪', label: 'موفقیت پرونده‌های مهاجرتی' },
      { val: '۱۵+', label: 'سال تجربه' },
      { val: '۹۷٪', label: 'نرخ موفقیت ویزا' },
      { val: '۲۴/۷', label: 'پشتیبانی' },
    ],
    servicesTitle: 'خدمات تخصصی ما',
    services: [
      { title: 'ویزا', items: ['ویزای شینگن (اروپا)', 'ویزای روسیه', 'ویزای رومانی', 'ویزای آمریکای جنوبی', 'وقت سفارت آمریکا و کانادا'] },
      { title: 'اقامت و مهاجرت', items: ['اقامت ارمنستان', 'اقامت ترکیه', 'اقامت امارات', 'مشاوره مهاجرت اروپا'] },
      { title: 'کسب‌وکار', items: ['ثبت شرکت LLC', 'صرافی و انتقال ارز', 'مشاوره مالیاتی'] },
      { title: 'سفر و اقامت', items: ['رزرو هتل ۵ ستاره', 'رزرو بلیط هواپیما', 'اجاره آپارتمان مبله', 'ترانسفر فرودگاهی VIP'] },
    ],
    teamTitle: 'چرا کاسپین؟',
    teamPoints: [
      'دفتر رسمی و ثبت‌شده در ایروان، ارمنستان',
      'همکاری مستقیم با سفارتخانه‌های اروپایی در ایروان',
      'تیم ۳۰ نفره متخصص با پشتیبانی فارسی، روسی و انگلیسی',
      'بیش از ۵۰۰ نظر مثبت در Google Maps',
      'عضو اتحادیه گردشگری ارمنستان',
      'قرارداد مستقیم با هتل‌های برتر ایروان',
      'سیستم پیگیری آنلاین پرونده برای مشتریان',
    ],
    officeTitle: 'دفتر ما',
    officeAddr: 'خیابان کومیتاس شماره ۴۹، ایروان، ارمنستان',
    consultBtn: 'مشاوره رایگان بگیرید',
    testimonialsTitle: 'تجربه مشتریان ما',
    testimonials: [
      { name: 'علی محمدی', service: 'ویزای شینگن', text: 'بعد از دو بار رد شدن از سفارت آلمان در تهران، کاسپین کمک کرد از ایروان ویزا بگیرم. تمام مدارک رو آماده کردن و مصاحبه رو تمرین کردیم. نتیجه مثبت بود!', rating: 5 },
      { name: 'سارا رضایی', service: 'اقامت ارمنستان', text: 'اقامت ارمنستانم رو در کمتر از ۳ هفته گرفتم. فرآیند خیلی راحت‌تر از اون چیزی بود که فکر می‌کردم. تیم کاسپین همه چیز رو توضیح دادن.', rating: 5 },
      { name: 'کیانوش ف.', service: 'ثبت شرکت', text: 'شرکتم رو در ارمنستان ثبت کردم و حساب بانکی باز کردم. کاسپین تمام مراحل قانونی رو انجام داد. الان تراکنش‌های بین‌المللیم راحت انجام میشه.', rating: 5 },
      { name: 'نسرین ت.', service: 'رزرو هتل + ویزا', text: 'پکیج کامل هتل + ویزای ایتالیا رو گرفتم. قیمت منصفانه و خدمات عالی. هتل انتخابی‌شون واقعاً باکیفیت بود.', rating: 5 },
    ],
  },
  en: {
    badge: 'Over 15 Years of Experience',
    heroTitle: 'Caspian Group Armenia',
    heroSub: 'Leading provider of immigration, visa, and travel services in Yerevan',
    storyTitle: 'Our Story',
    story: [
      'Caspian Group Armenia was founded in 2008 with the goal of providing professional immigration and travel services to Iranians in Yerevan. During years when sanctions limited international mobility for Iranians, Caspian served as a trusted bridge between Iran and the world.',
      'Based in the heart of Yerevan on Komitas Street, we have helped over 50,000 people with visas, residency, company registration, and travel bookings over more than a decade.',
      'Our team includes lawyers, immigration advisors, travel specialists, and financial experts — all working toward one common goal: simplifying the most complex bureaucratic processes for our clients.',
    ],
    missionTitle: 'Our Mission',
    mission: 'We believe every person has the right to live, travel, and work freely without bureaucratic obstacles. Caspian Group makes this possible through transparent, fast, and reliable services.',
    valuesTitle: 'Our Values',
    values: [
      { title: 'Full Transparency', desc: 'From the very start, we honestly disclose all costs, timelines, and success probabilities.' },
      { title: 'End-to-End Support', desc: 'From your first consultation to receiving your final outcome, we are with you every step.' },
      { title: 'Real Expertise', desc: 'Our team holds official licenses and practical experience across all offered services.' },
      { title: 'Client Respect', desc: 'Each client has a unique case and receives the same level of care and attention.' },
    ],
    statsTitle: 'Caspian by the Numbers',
    stats: [
      { val: '97%', label: 'Immigration Success Rate' },
      { val: '15+', label: 'Years Experience' },
      { val: '97%', label: 'Visa Success Rate' },
      { val: '24/7', label: 'Support' },
    ],
    servicesTitle: 'Our Specialized Services',
    services: [
      { title: 'Visa', items: ['Schengen Visa (Europe)', 'Russia Visa', 'Romania Visa', 'South America Visa', 'US & Canada Embassy Appointment'] },
      { title: 'Residency & Immigration', items: ['Armenia Residency', 'Turkey Residency', 'UAE Residency', 'European Immigration Consulting'] },
      { title: 'Business', items: ['LLC Company Registration', 'Currency Exchange & Transfers', 'Tax Consulting'] },
      { title: 'Travel & Accommodation', items: ['5-Star Hotel Booking', 'Flight Ticket Booking', 'Furnished Apartment Rental', 'VIP Airport Transfer'] },
    ],
    teamTitle: 'Why Caspian?',
    teamPoints: [
      'Official registered office in Yerevan, Armenia',
      'Direct cooperation with European embassies in Yerevan',
      'Team of 30 specialists with Persian, Russian, and English support',
      'Over 500 positive reviews on Google Maps',
      'Member of the Armenia Tourism Association',
      'Direct contracts with top hotels in Yerevan',
      'Online case tracking system for clients',
    ],
    officeTitle: 'Our Office',
    officeAddr: '49 Komitas Street, Yerevan, Armenia',
    consultBtn: 'Get a Free Consultation',
    testimonialsTitle: 'Client Experiences',
    testimonials: [
      { name: 'Ali M.', service: 'Schengen Visa', text: 'After two rejections from the German embassy in Tehran, Caspian helped me get a visa from Yerevan. They prepared all documents and practiced the interview with me. The result was positive!', rating: 5 },
      { name: 'Sara R.', service: 'Armenia Residency', text: 'I got my Armenian residency in less than 3 weeks. The process was much easier than I expected. The Caspian team explained everything clearly.', rating: 5 },
      { name: 'Kianoush F.', service: 'Company Registration', text: 'I registered my company in Armenia and opened a bank account. Caspian handled all the legal steps. International transactions are now seamless.', rating: 5 },
      { name: 'Nasrin T.', service: 'Hotel + Visa Package', text: 'I got a complete hotel + Italy visa package. Fair pricing and excellent service. The hotel they chose was truly high quality.', rating: 5 },
    ],
  },
  ru: {
    badge: 'Более 15 лет опыта',
    heroTitle: 'Caspian Group Armenia',
    heroSub: 'Ведущий поставщик услуг по иммиграции, визам и путешествиям в Ереване',
    storyTitle: 'Наша история',
    story: [
      'Caspian Group Armenia была основана в 2008 году с целью предоставления профессиональных иммиграционных и туристических услуг иностранным гражданам в Ереване. На протяжении многих лет мы служим надёжным мостом между нашими клиентами и остальным миром.',
      'Расположенные в самом сердце Еревана на улице Комитас, мы помогли более 50 000 людям с визами, ВНЖ, регистрацией компаний и бронированием поездок за более чем десятилетие.',
    ],
    missionTitle: 'Наша миссия',
    mission: 'Мы верим, что каждый человек имеет право свободно жить, путешествовать и работать без бюрократических препятствий. Caspian Group делает это возможным через прозрачные, быстрые и надёжные услуги.',
    valuesTitle: 'Наши ценности',
    values: [
      { title: 'Полная прозрачность', desc: 'С самого начала мы честно сообщаем все расходы, сроки и вероятность успеха.' },
      { title: 'Поддержка до конца', desc: 'От первой консультации до получения результата мы рядом на каждом этапе.' },
      { title: 'Настоящая экспертиза', desc: 'Наша команда имеет официальные лицензии и практический опыт по всем услугам.' },
      { title: 'Уважение к клиенту', desc: 'У каждого клиента уникальное дело, которое рассматривается с одинаковым вниманием.' },
    ],
    statsTitle: 'Caspian в цифрах',
    stats: [
      { val: '97%', label: 'Успешность иммиграционных дел' },
      { val: '15+', label: 'Лет опыта' },
      { val: '97%', label: 'Успех по визам' },
      { val: '24/7', label: 'Поддержка' },
    ],
    servicesTitle: 'Наши специализированные услуги',
    services: [
      { title: 'Виза', items: ['Шенгенская виза', 'Виза в Россию', 'Виза в Румынию', 'Виза в Южную Америку', 'Запись в посольство'] },
      { title: 'ВНЖ и иммиграция', items: ['ВНЖ Армении', 'ВНЖ Турции', 'ВНЖ ОАЭ', 'Консультации по иммиграции в Европу'] },
      { title: 'Бизнес', items: ['Регистрация ООО', 'Обмен валют и переводы', 'Налоговое консультирование'] },
      { title: 'Путешествия', items: ['Бронирование 5-звёздочных отелей', 'Авиабилеты', 'Аренда меблированных квартир', 'VIP трансфер'] },
    ],
    teamTitle: 'Почему Caspian?',
    teamPoints: [
      'Официально зарегистрированный офис в Ереване',
      'Прямое сотрудничество с европейскими посольствами',
      'Команда из 30 специалистов с поддержкой на персидском, русском и английском',
      'Более 500 положительных отзывов на Google Maps',
      'Член Ассоциации туризма Армении',
      'Прямые договоры с лучшими отелями Еревана',
    ],
    officeTitle: 'Наш офис',
    officeAddr: 'Улица Комитас, 49, Ереван, Армения',
    consultBtn: 'Получить бесплатную консультацию',
    testimonialsTitle: 'Отзывы клиентов',
    testimonials: [
      { name: 'Али М.', service: 'Шенгенская виза', text: 'После двух отказов в немецком посольстве в Тегеране, Caspian помог мне получить визу из Еревана. Они подготовили все документы и провели репетицию собеседования. Результат — положительный!', rating: 5 },
      { name: 'Сара Р.', service: 'ВНЖ Армении', text: 'Получила вид на жительство в Армении менее чем за 3 недели. Процесс оказался намного проще, чем я ожидала.', rating: 5 },
    ],
  },
};

function AboutContent() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const c = content[lang] || content.fa;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />

      {/* Hero */}
      <div className="relative pt-14">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="About" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/20 mb-4 text-sm text-primary font-medium">
              <Award className="w-4 h-4" /> {c.badge}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-2">
              <img src="/images/logo.png" alt="Caspian" className="h-10 sm:h-14 w-auto" />
              <span className="text-3xl sm:text-5xl font-black gold-gradient-text">{c.heroTitle}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-foreground/60 text-sm sm:text-base max-w-xl">{c.heroSub}</motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16 pb-0">

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {c.stats.map((s, i) => (
            <div key={i} className="glass-panel rounded-2xl p-5 text-center border border-primary/15">
              <div className="text-2xl sm:text-3xl font-black gold-gradient-text mb-1">{s.val}</div>
              <div className="text-xs text-foreground/55">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-5">
              <span className="gold-gradient-text">{c.storyTitle}</span>
            </h2>
            <div className="space-y-4">
              {c.story.map((p, i) => (
                <p key={i} className="text-foreground/70 leading-relaxed text-sm">{p}</p>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img src="/images/about.png"
              alt="Caspian Office" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute bottom-4 start-4 glass-panel rounded-xl px-4 py-2 border border-primary/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs text-foreground/80 font-bold">{c.officeAddr}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 border border-primary/20 text-center">
          <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-black gold-gradient-text mb-3">{c.missionTitle}</h2>
          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">{c.mission}</p>
        </motion.div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">
            <span className="gold-gradient-text">{c.valuesTitle}</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-5 border border-primary/15 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-2xl font-black text-foreground mb-6 text-center">
            <span className="gold-gradient-text">{c.servicesTitle}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-5 border border-primary/15">
                <h3 className="font-bold text-primary mb-3 text-sm">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Caspian */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 border border-primary/20">
          <h2 className="text-2xl font-black gold-gradient-text mb-6 text-center">{c.teamTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {c.teamPoints.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground/75">{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center pb-4">
          <button onClick={() => setModalOpen(true)}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-background font-black text-lg hover:shadow-xl hover:shadow-primary/30 transition-all gold-glow">
            {c.consultBtn}
          </button>
        </motion.div>
      </div>

      <ContactFooter />
      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default function About() {
  return <LanguageProvider><AboutContent /></LanguageProvider>;
}