import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const destinations = {
  fa: [
    { title: 'ویزای تحصیلی ارمنستان', desc: 'هزینه پایین، پذیرش آسان، محیط امن', href: '/services/student-visa/armenia', flag: '🇦🇲' },
    { title: 'ویزای تحصیلی روسیه', desc: 'دانشگاه‌های معتبر جهانی، بورسیه دولتی', href: '/services/student-visa/russia', flag: '🇷🇺' },
    { title: 'ویزای تحصیلی ترکیه', desc: 'تحصیل به زبان انگلیسی، مدرک معتبر', href: '/services/student-visa/turkey', flag: '🇹🇷' },
    { title: 'ویزای تحصیلی شینگن', desc: 'تحصیل در اروپا، مدرک بین‌المللی', href: '/services/student-visa/schengen', flag: '🇪🇺' },
    { title: 'ویزای تحصیلی رومانی', desc: 'ارزان‌ترین تحصیل در اروپا، پذیرش سریع', href: '/services/student-visa/romania', flag: '🇷🇴' },
  ],
  en: [
    { title: 'Armenia Student Visa', desc: 'Low cost, easy admission, safe environment', href: '/services/student-visa/armenia', flag: '🇦🇲' },
    { title: 'Russia Student Visa', desc: 'Prestigious universities, government scholarships', href: '/services/student-visa/russia', flag: '🇷🇺' },
    { title: 'Turkey Student Visa', desc: 'English-language programs, recognized degrees', href: '/services/student-visa/turkey', flag: '🇹🇷' },
    { title: 'Schengen Student Visa', desc: 'Study in Europe, international recognition', href: '/services/student-visa/schengen', flag: '🇪🇺' },
    { title: 'Romania Student Visa', desc: 'Most affordable European study, fast admission', href: '/services/student-visa/romania', flag: '🇷🇴' },
  ],
  ru: [
    { title: 'Студ. виза Армении', desc: 'Низкая стоимость, лёгкое поступление', href: '/services/student-visa/armenia', flag: '🇦🇲' },
    { title: 'Студ. виза России', desc: 'Престижные вузы, государственные стипендии', href: '/services/student-visa/russia', flag: '🇷🇺' },
    { title: 'Студ. виза Турции', desc: 'Программы на английском, признанные дипломы', href: '/services/student-visa/turkey', flag: '🇹🇷' },
    { title: 'Шенгенская студ. виза', desc: 'Учёба в Европе, международное признание', href: '/services/student-visa/schengen', flag: '🇪🇺' },
    { title: 'Студ. виза Румынии', desc: 'Самое дешёвое образование в Европе', href: '/services/student-visa/romania', flag: '🇷🇴' },
  ],
};

function Content() {
  const { lang } = useLang();
  const dests = destinations[lang] || destinations.fa;

  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی" titleEn="Student Visa" titleRu="Студенческая виза"
      subtitleFa="تحصیل در بهترین دانشگاه‌های جهان با راهنمایی متخصصان کاسپین گروه"
      subtitleEn="Study at top universities worldwide with Caspian Group experts"
      subtitleRu="Учёба в лучших университетах мира с поддержкой Caspian Group"
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      serviceType="student-admission"
    >
      {/* Student visa destinations image */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Student Visa" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          {['am','ru','tr','gb','ro'].map(c => (
            <img key={c} src={`https://flagcdn.com/w40/${c}.webp`} alt={c} className="h-5 rounded shadow" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {dests.map((d, i) => (
          <Link key={i} to={d.href}
            className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-primary/40 transition-all flex items-start gap-4 group">
            <span className="text-3xl">{d.flag}</span>
            <div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm mb-1">{d.title}</h3>
              <p className="text-xs text-foreground/50">{d.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      {lang === 'fa' && <>
        <InfoBlock title="مراحل اخذ ویزای تحصیلی">
          <CheckList items={[
            'مشاوره رایگان و انتخاب کشور و رشته مناسب',
            'دریافت پذیرش از دانشگاه مقصد',
            'آماده‌سازی و ترجمه رسمی مدارک',
            'ثبت درخواست ویزا در سفارت',
            'آمادگی برای مصاحبه (در صورت نیاز)',
            'دریافت ویزا و برنامه‌ریزی سفر',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک عمومی مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر',
            'مدارک تحصیلی (دیپلم، لیسانس و ...)',
            'ترجمه رسمی مدارک',
            'گواهی زبان (IELTS، TOEFL، یا زبان کشور مقصد)',
            'نامه پذیرش از دانشگاه',
            'اثبات توان مالی',
            'بیمه درمانی',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Student Visa Process">
          <CheckList items={[
            'Free consultation and country/field selection',
            'Obtain university acceptance letter',
            'Prepare and officially translate documents',
            'Submit visa application at embassy',
            'Attend interview if required',
            'Receive visa and plan travel',
          ]} />
        </InfoBlock>
        <InfoBlock title="General Required Documents">
          <CheckList items={[
            'Valid passport',
            'Academic certificates (diploma, bachelor, etc.)',
            'Official document translations',
            'Language certificate (IELTS, TOEFL, or local language)',
            'University acceptance letter',
            'Proof of financial means',
            'Health insurance',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Процесс получения студенческой визы">
          <CheckList items={[
            'Бесплатная консультация и выбор страны/специальности',
            'Получение письма о зачислении',
            'Подготовка и перевод документов',
            'Подача заявки на визу в посольство',
            'Собеседование при необходимости',
            'Получение визы и планирование поездки',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisa() {
  return <LanguageProvider><Content /></LanguageProvider>;
}