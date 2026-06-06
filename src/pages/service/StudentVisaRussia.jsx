import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی روسیه" titleEn="Russia Student Visa" titleRu="Студенческая виза России"
      subtitleFa="تحصیل در دانشگاه‌های معتبر روسیه با امکان بورسیه دولتی"
      subtitleEn="Study at prestigious Russian universities with government scholarship opportunities"
      subtitleRu="Учёба в престижных вузах России с возможностью государственной стипендии"
      heroImage="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80"
      serviceType="student-visa"
    >
      {lang === 'fa' && <>
        <InfoBlock title="چرا تحصیل در روسیه؟">
          <p>روسیه دارای برخی از معتبرترین دانشگاه‌های جهان است که در رتبه‌بندی‌های بین‌المللی جایگاه بالایی دارند. دولت روسیه بورسیه‌های دولتی برای دانشجویان خارجی ارائه می‌دهد. تحصیل در رشته‌های پزشکی، مهندسی و علوم در روسیه بسیار معتبر است.</p>
        </InfoBlock>
        <InfoBlock title="دانشگاه‌های برتر روسیه">
          <CheckList items={[
            'دانشگاه دولتی مسکو (MGU) — رتبه ۷۵ جهان',
            'دانشگاه سنت پترزبورگ',
            'دانشگاه بومن مسکو (BMSTU)',
            'دانشگاه RUDN (دانشگاه دوستی ملل)',
            'دانشگاه MIPT',
          ]} />
        </InfoBlock>
        <InfoBlock title="رشته‌های محبوب">
          <CheckList items={['پزشکی و دندانپزشکی', 'مهندسی هوافضا و مکانیک', 'IT و علوم کامپیوتر', 'فیزیک و ریاضی', 'نفت و گاز', 'داروسازی']} />
        </InfoBlock>
        <InfoBlock title="بورسیه دولتی روسیه">
          <CheckList items={[
            'پوشش کامل شهریه',
            'خوابگاه رایگان یا یارانه‌ای',
            'کمک هزینه ماهانه',
            'بیمه درمانی',
            'هر سال بین ۱۵,۰۰۰ تا ۱۸,۰۰۰ بورسیه برای خارجی‌ها',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر',
            'مدارک تحصیلی ترجمه‌شده و تأییدیه',
            'نامه پذیرش از دانشگاه',
            'گواهی زبان روسی یا انگلیسی',
            'معاینه پزشکی و آزمایش HIV',
            'عکس پرسنلی',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Study in Russia?">
          <p>Russia has some of the world's most prestigious universities with high international rankings. The Russian government offers state scholarships for foreign students. Medicine, engineering and science degrees from Russian universities are highly respected.</p>
        </InfoBlock>
        <InfoBlock title="Top Russian Universities">
          <CheckList items={['Moscow State University (MGU) — Ranked 75th globally', 'Saint Petersburg State University', 'Bauman Moscow State Technical University', 'RUDN University', 'MIPT']} />
        </InfoBlock>
        <InfoBlock title="Government Scholarship">
          <CheckList items={['Full tuition coverage', 'Free or subsidized dormitory', 'Monthly stipend', 'Health insurance', '15,000–18,000 scholarships available annually for foreigners']} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему учиться в России?">
          <p>Россия имеет одни из самых престижных университетов мира. Правительство России предоставляет государственные стипендии для иностранных студентов.</p>
        </InfoBlock>
        <InfoBlock title="Ведущие университеты России">
          <CheckList items={['МГУ им. Ломоносова', 'СПбГУ', 'МГТУ им. Баумана', 'РУДН', 'МФТИ']} />
        </InfoBlock>
        <InfoBlock title="Государственная стипендия">
          <CheckList items={['Полное покрытие обучения', 'Бесплатное общежитие', 'Ежемесячная стипендия', 'Медицинская страховка']} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisaRussia() {
  return <LanguageProvider><Content /></LanguageProvider>;
}