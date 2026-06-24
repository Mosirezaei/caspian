import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout titleFa="ثبت شرکت در ارمنستان" titleEn="Company Registration" titleRu="Регистрация компании" serviceType="company-registration"
      subtitleFa="ثبت LLC در 1 روز — مالیات پایین ترین درصد ممکن"
      subtitleEn="Register an LLC in under 3 days — 18% corporate tax"
      subtitleRu="Регистрация ООО менее чем за 3 дня — налог 18%"
      heroImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80">

      {/* Armenia flag & business district */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80" alt="Company Registration Armenia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">ثبت شرکت در ارمنستان</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا ارمنستان برای ثبت شرکت؟">
          <p>ارمنستان به دلیل محیط کسب‌وکار ساده، مالیات پایین و فرآیند سریع ثبت، یکی از بهترین مکان‌ها برای کارآفرینان ایرانی است.</p>
        </InfoBlock>
        <InfoBlock title="مزایای ثبت شرکت در ارمنستان">
          <CheckList items={[
            'ثبت در کمتر از ۳ روز کاری',
            'مالیات بر درآمد شرکتی ۱۸٪',
            'مالیات بر ارزش افزوده ۲۰٪',
            'مالیات بر درآمد فردی ۱۰٪',
            'دسترسی به بازارهای اروپا و CIS',
            'امکان دریافت اقامت از طریق شرکت',
            'بدون محدودیت انتقال ارز',
          ]} />
        </InfoBlock>
        <InfoBlock title="انواع شرکت در ارمنستان">
          <CheckList items={[
            'LLC (ՍՊԸ) — مناسب‌ترین برای ایرانیان',
            'CJSC — شرکت سهامی خاص',
            'OJSC — شرکت سهامی عام',
            'Individual Entrepreneur — کارآفرین انفرادی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مراحل ثبت شرکت توسط کاسپین">
          <CheckList items={[
            'مشاوره رایگان و انتخاب نوع شرکت',
            'انتخاب نام شرکت و بررسی تکراری نبودن',
            'تنظیم اساسنامه و مدارک قانونی',
            'ثبت در اداره عدلیه ارمنستان',
            'دریافت شناسه مالیاتی (HVHH)',
            'افتتاح حساب بانکی شرکت',
            'اخذ اقامت برای مدیر شرکت',
          ]} />
        </InfoBlock>
        <InfoBlock title="هزینه‌ها">
          <p>هزینه ثبت رسمی شرکت در ارمنستان بسیار پایین است. کاسپین گروه پکیج‌های کامل شامل ثبت شرکت + اقامت + حساب بانکی را با شفافیت کامل قیمت‌گذاری می‌کند. برای دریافت قیمت با ما تماس بگیرید.</p>
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Armenia for Company Registration?">
          <p>Armenia offers a simple business environment, low taxes, and fast registration processes, making it one of the best locations for entrepreneurs.</p>
        </InfoBlock>
        <InfoBlock title="Benefits of Registering in Armenia">
          <CheckList items={[
            'Registration in less than 3 business days',
            '18% corporate income tax',
            '10% personal income tax',
            'Access to European and CIS markets',
            'Residency through company registration',
            'No restrictions on currency transfers',
          ]} />
        </InfoBlock>
        <InfoBlock title="Steps by Caspian Group">
          <CheckList items={[
            'Free consultation and company type selection',
            'Company name selection and verification',
            'Prepare articles of association',
            'Register with Armenian Ministry of Justice',
            'Obtain tax ID (HVHH)',
            'Open company bank account',
            'Obtain residency for company director',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему Армения для регистрации компании?">
          <p>Армения предлагает простую деловую среду, низкие налоги и быстрые процессы регистрации. Компания, зарегистрированная в Армении, может иметь международный банковский счёт и вести торговлю с европейскими странами.</p>
        </InfoBlock>
        <InfoBlock title="Преимущества регистрации в Армении">
          <CheckList items={[
            'Регистрация менее чем за 3 рабочих дня',
            'Корпоративный налог 18%',
            'Подоходный налог 10%',
            'Международный банковский счёт',
            'Доступ к рынкам Европы и СНГ',
            'ВНЖ через регистрацию компании',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function CompanyReg() {
  return <LanguageProvider><Content /></LanguageProvider>;
}
