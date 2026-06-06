import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی شینگن" titleEn="Schengen Student Visa" titleRu="Студенческая виза Шенген"
      subtitleFa="تحصیل در اروپا و دریافت مدرک معتبر بین‌المللی"
      subtitleEn="Study in Europe and earn an internationally recognized degree"
      subtitleRu="Учёба в Европе с международно признанным дипломом"
      heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80"
      serviceType="student-visa"
    >
      {lang === 'fa' && <>
        <InfoBlock title="ویزای تحصیلی شینگن چیست؟">
          <p>ویزای تحصیلی شینگن (نوع D) به دانشجویان اجازه می‌دهد در کشورهای منطقه شینگن (آلمان، فرانسه، ایتالیا، اسپانیا، هلند و ۲۲ کشور دیگر) تحصیل کنند. این ویزا برای دوره‌های بیش از ۹۰ روز صادر می‌شود.</p>
        </InfoBlock>
        <InfoBlock title="کشورهای محبوب شینگن برای تحصیل">
          <CheckList items={[
            'آلمان — تحصیل رایگان در دانشگاه‌های دولتی',
            'فرانسه — دانشگاه‌های معتبر با شهریه پایین',
            'هلند — برنامه‌های انگلیسی‌زبان گسترده',
            'ایتالیا — هنر، معماری، مد',
            'اسپانیا — هزینه زندگی مناسب',
            'لهستان — دسترسی آسان‌تر و هزینه پایین',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار',
            'نامه پذیرش از دانشگاه اروپایی',
            'اثبات توان مالی (حداقل ۷۰۰ یورو در ماه)',
            'بیمه درمانی معتبر در اروپا',
            'گواهی زبان (IELTS/TOEFL یا زبان کشور مقصد)',
            'رزرو بلیط و محل اقامت',
            'گواهی عدم سوء پیشینه',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای تحصیل در اروپا">
          <CheckList items={[
            'مدرک معتبر و شناخته‌شده در سراسر جهان',
            'امکان کار پاره‌وقت در دوران تحصیل',
            'دسترسی آسان به بازار کار اروپا',
            'تجربه زندگی در فرهنگ اروپایی',
            'امکان اخذ اقامت پس از فارغ‌التحصیلی',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین گروه">
          <CheckList items={[
            'مشاوره رایگان و انتخاب کشور و دانشگاه',
            'کمک در ارسال درخواست به دانشگاه',
            'آماده‌سازی پرونده ویزا',
            'هماهنگی نوبت سفارت',
            'پیگیری تا دریافت ویزا',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="What is a Schengen Student Visa?">
          <p>The Schengen Student Visa (Type D) allows students to study in Schengen countries (Germany, France, Italy, Spain, Netherlands and 22 others). This visa is issued for programs longer than 90 days.</p>
        </InfoBlock>
        <InfoBlock title="Popular Schengen Countries for Study">
          <CheckList items={['Germany — Free tuition at public universities', 'France — Prestigious universities, low fees', 'Netherlands — Wide English-language programs', 'Italy — Art, architecture, fashion', 'Spain — Affordable living costs', 'Poland — Easier access and lower costs']} />
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={['Valid passport (6+ months)', 'University acceptance letter', 'Proof of financial means (€700+/month)', 'European health insurance', 'Language certificate (IELTS/TOEFL)', 'Flight reservation and accommodation', 'Police clearance certificate']} />
        </InfoBlock>
        <InfoBlock title="Benefits of Studying in Europe">
          <CheckList items={['Globally recognized degree', 'Part-time work during studies', 'Access to European job market', 'Path to residency after graduation']} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Что такое студенческая виза Шенгена?">
          <p>Студенческая шенгенская виза (тип D) позволяет учиться в шенгенских странах более 90 дней.</p>
        </InfoBlock>
        <InfoBlock title="Популярные страны для учёбы">
          <CheckList items={['Германия — бесплатное обучение в госвузах', 'Франция — престижные университеты', 'Нидерланды — программы на английском', 'Польша — доступные цены']} />
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={['Действующий паспорт', 'Письмо о зачислении', 'Подтверждение финансов (€700+/мес)', 'Медицинская страховка', 'Языковой сертификат']} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisaSchengen() {
  return <LanguageProvider><Content /></LanguageProvider>;
}