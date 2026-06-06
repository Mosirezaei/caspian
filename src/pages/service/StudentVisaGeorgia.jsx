import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی گرجستان" titleEn="Georgia Student Visa" titleRu="Студенческая виза в Грузию"
      subtitleFa="تحصیل در دانشگاه‌های معتبر گرجستان با هزینه پایین"
      subtitleEn="Study at top Georgian universities at affordable costs"
      subtitleRu="Обучение в ведущих университетах Грузии по доступным ценам"
      heroImage="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80"
      serviceType="student-visa">
      {lang === 'fa' && <>
        <InfoBlock title="ویزای تحصیلی گرجستان">
          <p>گرجستان با دانشگاه‌های معتبر بین‌المللی، هزینه‌های پایین زندگی و تحصیل، و فرایند اخذ ویزای ساده، یکی از مقاصد محبوب برای دانشجویان ایرانی است.</p>
          <p className="mt-2">کاسپین گروه تمام مراحل از پذیرش دانشگاه تا اخذ ویزا و اسکان شما را در تفلیس مدیریت می‌کند.</p>
        </InfoBlock>
        <InfoBlock title="مزایای تحصیل در گرجستان">
          <CheckList items={[
            'شهریه پایین (۲,۵۰۰ تا ۶,۰۰۰ دلار در سال)',
            'هزینه زندگی مناسب در تفلیس',
            'پذیرش آسان برای اتباع ایرانی',
            'تدریس برنامه‌های پزشکی به زبان انگلیسی',
            'محیط امن و دوستانه برای دانشجویان خارجی',
            'فاصله کوتاه تا ارمنستان (۳ ساعت)',
          ]} />
        </InfoBlock>
        <InfoBlock title="رشته‌های محبوب">
          <CheckList items={[
            'پزشکی و دندانپزشکی',
            'مهندسی و فناوری اطلاعات',
            'حقوق و علوم سیاسی',
            'کسب‌وکار و مدیریت',
            'معماری و هنر',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'پاسپورت معتبر',
            'مدرک تحصیلی دیپلم یا لیسانس',
            'ریزنمرات ترجمه شده',
            'نامه پذیرش از دانشگاه',
            'مدارک مالی برای نشان دادن توانایی پرداخت شهریه',
            'بیمه درمانی',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Georgia Student Visa">
          <p>Georgia offers internationally recognized universities, low living and tuition costs, and a straightforward visa process, making it a popular destination for Iranian students.</p>
          <p className="mt-2">Caspian Group manages everything from university admission to visa processing and accommodation in Tbilisi.</p>
        </InfoBlock>
        <InfoBlock title="Benefits of Studying in Georgia">
          <CheckList items={[
            'Low tuition fees ($2,500–$6,000/year)',
            'Affordable cost of living in Tbilisi',
            'Easy admission for Iranian nationals',
            'Medical programs taught in English',
            'Safe and welcoming environment for international students',
            'Short distance to Armenia (3 hours)',
          ]} />
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Valid passport',
            'High school diploma or bachelor degree',
            'Translated academic transcripts',
            'University acceptance letter',
            'Financial documents proving tuition payment ability',
            'Health insurance',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Студенческая виза в Грузию">
          <p>Грузия предлагает международно признанные университеты, низкие расходы на проживание и обучение, а также простой процесс получения визы.</p>
        </InfoBlock>
        <InfoBlock title="Преимущества обучения в Грузии">
          <CheckList items={[
            'Низкая стоимость обучения ($2 500–$6 000 в год)',
            'Доступная стоимость жизни в Тбилиси',
            'Простое поступление для граждан Ирана',
            'Медицинские программы на английском языке',
            'Безопасная среда для иностранных студентов',
          ]} />
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Действительный паспорт',
            'Диплом об образовании',
            'Переведённые академические справки',
            'Письмо о зачислении из университета',
            'Финансовые документы',
            'Медицинская страховка',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisaGeorgia() {
  return <LanguageProvider><Content /></LanguageProvider>;
}