import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="اقامت عمان" titleEn="Oman Residency" titleRu="ВНЖ Омана"
      subtitleFa="اقامت در کشوری امن با اقتصاد در حال توسعه و ثبات سیاسی"
      subtitleEn="Residency in a safe country with a growing economy and political stability"
      subtitleRu="ВНЖ в стабильной стране с развивающейся экономикой"
      heroImage="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=1200&q=80"
      serviceType="residency-oman"
    >
      {/* Oman flag & Muscat image */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=1200&q=80" alt="Muscat Oman" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/om.png" alt="Oman flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">مسقط، عمان</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا اقامت عمان؟">
          <p>عمان کشوری با ثبات سیاسی بالا، محیط امن و اقتصادی رو به رشد است. این کشور با اصلاحات اقتصادی اخیر و برنامه‌های سرمایه‌گذاری، درهای خود را بیش از پیش به روی خارجی‌ها گشوده است. جامعه فارسی‌زبان گسترده‌ای در عمان حضور دارد که محیطی آشنا و دوستانه ایجاد می‌کند.</p>
        </InfoBlock>
        <InfoBlock title="روش‌های اخذ اقامت عمان">
          <CheckList items={[
            'اقامت از طریق سرمایه‌گذاری (حداقل ۵۰۰,۰۰۰ ریال عمانی)',
            'اقامت از طریق خرید ملک در مناطق مجاز (ITC)',
            'اقامت از طریق اشتغال در شرکت‌های عمانی',
            'اقامت دانشجویی',
            'اقامت خانوادگی (وابسته به اقامت اصلی)',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای اقامت عمان">
          <CheckList items={[
            'ثبات سیاسی و امنیت بالا',
            'بدون مالیات بر درآمد شخصی',
            'نزدیکی فرهنگی و زبانی با ایران',
            'دسترسی آسان به بازارهای خلیج فارس و شرق آفریقا',
            'کیفیت بالای زندگی و امکانات مدرن',
            'هزینه‌های پایین‌تر نسبت به امارات',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مورد نیاز">
          <CheckList items={[
            'پاسپورت معتبر',
            'گواهی عدم سوء پیشینه',
            'مدارک مالی و بانکی',
            'بیمه درمانی',
            'مدارک ملک یا سرمایه‌گذاری (در صورت لزوم)',
            'عکس پرسنلی',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین گروه">
          <CheckList items={[
            'مشاوره تخصصی و بررسی شرایط',
            'انتخاب بهترین روش اقامت متناسب با شرایط شما',
            'آماده‌سازی و ترجمه رسمی مدارک',
            'هماهنگی با وکلا و شرکای محلی در عمان',
            'پیگیری پرونده تا دریافت اقامت',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Oman Residency?">
          <p>Oman offers high political stability, a safe environment, and a growing economy. With recent economic reforms and investment programs, the country has opened its doors wider to foreigners. There is also a significant Persian-speaking community in Oman.</p>
        </InfoBlock>
        <InfoBlock title="Methods to Obtain Oman Residency">
          <CheckList items={[
            'Investment Residency (minimum 500,000 Omani Rial)',
            'Property Purchase in designated areas (ITC)',
            'Employment at Omani companies',
            'Student Residence Permit',
            'Family Residence Permit',
          ]} />
        </InfoBlock>
        <InfoBlock title="Benefits of Oman Residency">
          <CheckList items={[
            'High political stability and security',
            'No personal income tax',
            'Access to Gulf and East African markets',
            'High quality of life and modern facilities',
            'Lower costs compared to UAE',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему ВНЖ Омана?">
          <p>Оман отличается высокой политической стабильностью, безопасной обстановкой и растущей экономикой. Страна открыта для иностранных инвестиций и предлагает привлекательные условия для получения ВНЖ.</p>
        </InfoBlock>
        <InfoBlock title="Способы получения ВНЖ Омана">
          <CheckList items={[
            'ВНЖ через инвестиции',
            'ВНЖ через покупку недвижимости',
            'ВНЖ через трудоустройство',
            'Студенческий ВНЖ',
          ]} />
        </InfoBlock>
        <InfoBlock title="Преимущества ВНЖ Омана">
          <CheckList items={[
            'Высокая политическая стабильность',
            'Отсутствие подоходного налога',
            'Доступ к рынкам Персидского залива',
            'Высокое качество жизни',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function ResidencyOman() {
  return <LanguageProvider><Content /></LanguageProvider>;
}