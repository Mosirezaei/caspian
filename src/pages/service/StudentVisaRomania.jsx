import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی رومانی" titleEn="Romania Student Visa" titleRu="Студенческая виза Румынии"
      subtitleFa="ارزان‌ترین تحصیل در اروپا با مدرک معتبر EU"
      subtitleEn="Most affordable European study with a valid EU degree"
      subtitleRu="Самое доступное образование в Европе с дипломом ЕС"
      heroImage="https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=1200&q=80"
      serviceType="student-visa"
    >
      {lang === 'fa' && <>
        <InfoBlock title="چرا تحصیل در رومانی؟">
          <p>رومانی عضو اتحادیه اروپا است و مدارک دانشگاه‌های آن در سراسر اروپا معتبر است. هزینه تحصیل و زندگی در رومانی بسیار پایین‌تر از سایر کشورهای اروپایی است. دانشگاه‌های رومانی رشته پزشکی و دندانپزشکی به انگلیسی ارائه می‌دهند که در بین ایرانیان محبوبیت زیادی دارد.</p>
        </InfoBlock>
        <InfoBlock title="دانشگاه‌های برتر رومانی">
          <CheckList items={[
            'دانشگاه بوخارست (University of Bucharest)',
            'دانشگاه فنی بوخارست',
            'دانشگاه پزشکی Carol Davila',
            'دانشگاه Babeș-Bolyai (کلوژ)',
            'دانشگاه یاشی (Iași)',
          ]} />
        </InfoBlock>
        <InfoBlock title="رشته‌های محبوب ایرانیان در رومانی">
          <CheckList items={['پزشکی (MD) به زبان انگلیسی', 'دندانپزشکی', 'داروسازی', 'مهندسی', 'معماری', 'MBA و مدیریت']} />
        </InfoBlock>
        <InfoBlock title="هزینه‌های تحصیل در رومانی">
          <CheckList items={[
            'شهریه پزشکی: ۴,۰۰۰ تا ۶,۰۰۰ یورو در سال',
            'شهریه سایر رشته‌ها: ۲,۰۰۰ تا ۴,۰۰۰ یورو در سال',
            'هزینه زندگی: ۵۰۰ تا ۸۰۰ یورو در ماه',
            'خوابگاه دانشگاه: ۱۰۰ تا ۲۰۰ یورو در ماه',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر',
            'دیپلم دبیرستان ترجمه و تأییدشده',
            'نمرات ریاضی و علوم برای رشته‌های فنی',
            'گواهی زبان انگلیسی',
            'نامه پذیرش از دانشگاه',
            'اثبات توان مالی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایا">
          <CheckList items={[
            'مدرک EU معتبر در تمام کشورهای اروپایی',
            'امکان کار در کشورهای EU پس از فارغ‌التحصیلی',
            'هزینه‌های بسیار پایین‌تر از آلمان، فرانسه و هلند',
            'پذیرش آسان‌تر نسبت به سایر کشورهای اروپایی',
            'جامعه ایرانی فعال در بوخارست',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Study in Romania?">
          <p>Romania is an EU member state and its university degrees are valid throughout Europe. Study and living costs are significantly lower than other European countries. Romanian universities offer Medicine and Dentistry programs in English, which are very popular among Iranians.</p>
        </InfoBlock>
        <InfoBlock title="Top Romanian Universities">
          <CheckList items={['University of Bucharest', 'Politehnica University of Bucharest', 'Carol Davila Medical University', 'Babeș-Bolyai University (Cluj)', 'Alexandru Ioan Cuza University (Iași)']} />
        </InfoBlock>
        <InfoBlock title="Study Costs in Romania">
          <CheckList items={['Medicine tuition: €4,000–€6,000/year', 'Other fields: €2,000–€4,000/year', 'Living costs: €500–€800/month', 'University dorm: €100–€200/month']} />
        </InfoBlock>
        <InfoBlock title="Benefits">
          <CheckList items={['Valid EU degree recognized across Europe', 'Right to work in EU after graduation', 'Much cheaper than Germany, France, Netherlands', 'Easier admission than other EU countries']} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему учиться в Румынии?">
          <p>Румыния — член ЕС, её дипломы признаются по всей Европе. Стоимость обучения и жизни значительно ниже, чем в других странах ЕС.</p>
        </InfoBlock>
        <InfoBlock title="Стоимость обучения">
          <CheckList items={['Медицина: €4 000–€6 000/год', 'Другие специальности: €2 000–€4 000/год', 'Проживание: €500–€800/месяц']} />
        </InfoBlock>
        <InfoBlock title="Преимущества">
          <CheckList items={['Диплом ЕС', 'Право на работу в ЕС', 'Доступные цены', 'Лёгкое поступление']} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisaRomania() {
  return <LanguageProvider><Content /></LanguageProvider>;
}