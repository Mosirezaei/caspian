import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ویزای تحصیلی ارمنستان" titleEn="Armenia Student Visa" titleRu="Студенческая виза Армении"
      subtitleFa="تحصیل در ارمنستان با هزینه پایین و محیط امن"
      subtitleEn="Study in Armenia with low cost and safe environment"
      subtitleRu="Учёба в Армении — доступно и безопасно"
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80"
      serviceType="student-visa"
    >
      {lang === 'fa' && <>
        <InfoBlock title="چرا تحصیل در ارمنستان؟">
          <p>ارمنستان یکی از مقرون‌به‌صرفه‌ترین مقاصد تحصیلی در اروپا است. دانشگاه‌های ارمنستان مدارک معتبر بین‌المللی ارائه می‌دهند و هزینه‌های تحصیل و زندگی در مقایسه با اروپای غربی بسیار پایین است. ایرانیان زیادی در ارمنستان تحصیل می‌کنند و جامعه ایرانی قوی در ایروان وجود دارد.</p>
        </InfoBlock>
        <InfoBlock title="رشته‌های محبوب در ارمنستان">
          <CheckList items={[
            'پزشکی و دندانپزشکی',
            'داروسازی',
            'مهندسی و IT',
            'مدیریت و MBA',
            'معماری',
            'حقوق',
          ]} />
        </InfoBlock>
        <InfoBlock title="شرایط پذیرش">
          <CheckList items={[
            'دیپلم دبیرستان یا مدرک معادل',
            'آزمون ورودی دانشگاه (در صورت لزوم)',
            'آشنایی با زبان تدریس (ارمنی، روسی یا انگلیسی)',
            'توان مالی برای پرداخت شهریه و هزینه زندگی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مراحل اخذ ویزای تحصیلی ارمنستان">
          <CheckList items={[
            'انتخاب دانشگاه و رشته با کمک کاسپین گروه',
            'ارسال مدارک به دانشگاه و دریافت پذیرش',
            'اخذ ویزای دانشجویی از سفارت ارمنستان',
            'ثبت‌نام در دانشگاه پس از ورود به ارمنستان',
            'دریافت کارت اقامت دانشجویی',
          ]} />
        </InfoBlock>
        <InfoBlock title="هزینه‌های تقریبی">
          <CheckList items={[
            'شهریه پزشکی: ۳,۰۰۰ تا ۶,۰۰۰ دلار در سال',
            'شهریه رشته‌های دیگر: ۱,۵۰۰ تا ۳,۵۰۰ دلار در سال',
            'هزینه زندگی: ۴۰۰ تا ۷۰۰ دلار در ماه',
            'اجاره خوابگاه: ۱۰۰ تا ۲۰۰ دلار در ماه',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Study in Armenia?">
          <p>Armenia is one of the most affordable study destinations in Europe. Armenian universities offer internationally recognized degrees and living/study costs are significantly lower than Western Europe. There is a large Iranian community in Yerevan.</p>
        </InfoBlock>
        <InfoBlock title="Popular Fields in Armenia">
          <CheckList items={['Medicine & Dentistry', 'Pharmacy', 'Engineering & IT', 'Business & MBA', 'Architecture', 'Law']} />
        </InfoBlock>
        <InfoBlock title="Admission Requirements">
          <CheckList items={['High school diploma', 'University entrance exam (if required)', 'Language proficiency (Armenian, Russian or English)', 'Financial proof']} />
        </InfoBlock>
        <InfoBlock title="Approximate Costs">
          <CheckList items={['Medical tuition: $3,000–$6,000/year', 'Other fields: $1,500–$3,500/year', 'Living costs: $400–$700/month']} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему учиться в Армении?">
          <p>Армения — одно из самых доступных учебных направлений в Европе. Армянские университеты выдают международно признанные дипломы, а стоимость жизни и обучения значительно ниже, чем в Западной Европе.</p>
        </InfoBlock>
        <InfoBlock title="Популярные специальности">
          <CheckList items={['Медицина и стоматология', 'Фармацевтика', 'Инженерия и IT', 'Бизнес и MBA', 'Архитектура']} />
        </InfoBlock>
        <InfoBlock title="Примерные расходы">
          <CheckList items={['Мед. обучение: $3 000–$6 000/год', 'Другие специальности: $1 500–$3 500/год', 'Проживание: $400–$700/месяц']} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentVisaArmenia() {
  return <LanguageProvider><Content /></LanguageProvider>;
}