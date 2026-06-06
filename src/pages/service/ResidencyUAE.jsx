import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="اقامت امارات" titleEn="UAE Residency" titleRu="ВНЖ ОАЭ"
      subtitleFa="اقامت طلایی در مرکز تجاری خاورمیانه"
      subtitleEn="Golden residency in the Middle East's business hub"
      subtitleRu="Золотой ВНЖ в деловом центре Ближнего Востока"
      heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
      serviceType="residency-uae"
    >
      {/* UAE flag & Dubai skyline */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="Dubai UAE" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/ae.png" alt="UAE flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">دبی، امارات</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا اقامت امارات؟">
          <p>امارات متحده عربی یکی از پیشرفته‌ترین و مدرن‌ترین کشورهای خاورمیانه است. دبی و ابوظبی به عنوان مراکز تجاری جهانی شناخته می‌شوند. با اقامت امارات می‌توانید از مزایای یک اقتصاد جهانی، زیرساخت‌های فوق‌العاده و بدون مالیات بر درآمد بهره‌مند شوید.</p>
        </InfoBlock>
        <InfoBlock title="انواع اقامت امارات">
          <CheckList items={[
            'ویزای طلایی (Golden Visa) ۵ یا ۱۰ ساله',
            'اقامت از طریق سرمایه‌گذاری (حداقل ۲ میلیون درهم)',
            'اقامت از طریق خرید ملک',
            'اقامت از طریق اشتغال در شرکت‌های امارات',
            'اقامت دانشجویی',
            'اقامت از طریق تأسیس شرکت در فری‌زون',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای اقامت امارات">
          <CheckList items={[
            'بدون مالیات بر درآمد شخصی و شرکتی',
            'دسترسی به یکی از بزرگ‌ترین فرودگاه‌های جهان',
            'سیستم بانکی بین‌المللی پیشرفته',
            'امکان اقامت خانواده',
            'محیط کاری چندملیتی و بین‌المللی',
            'زیرساخت‌های مدرن و کلاس جهانی',
            'امنیت بالا و کیفیت زندگی عالی',
          ]} />
        </InfoBlock>
        <InfoBlock title="ویزای طلایی امارات">
          <CheckList items={[
            'اعتبار ۵ یا ۱۰ ساله قابل تمدید',
            'بدون نیاز به کفیل (Sponsor)',
            'امکان زندگی ۶ ماه خارج از امارات بدون لغو ویزا',
            'شامل همسر و فرزندان',
            'مناسب برای سرمایه‌گذاران، کارآفرینان و متخصصان',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین گروه در امارات">
          <CheckList items={[
            'مشاوره رایگان و انتخاب نوع اقامت مناسب',
            'راهنمایی در خرید ملک یا سرمایه‌گذاری',
            'ثبت شرکت در فری‌زون‌های دبی',
            'آماده‌سازی مدارک و هماهنگی با اداره هجرة',
            'پیگیری تا دریافت اقامت',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why UAE Residency?">
          <p>The UAE is one of the most advanced countries in the Middle East. Dubai and Abu Dhabi are recognized as global business centers. With UAE residency, you can benefit from a global economy, outstanding infrastructure, and no personal income tax.</p>
        </InfoBlock>
        <InfoBlock title="Types of UAE Residency">
          <CheckList items={[
            'Golden Visa (5 or 10 years)',
            'Investment Residency (minimum AED 2 million)',
            'Residency through Property Purchase',
            'Employment Residency',
            'Student Residence Permit',
            'Free Zone Company Setup',
          ]} />
        </InfoBlock>
        <InfoBlock title="Benefits of UAE Residency">
          <CheckList items={[
            'No personal or corporate income tax',
            'Access to one of the world\'s largest airports',
            'Advanced international banking system',
            'Family residency sponsorship',
            'Multicultural international work environment',
            'World-class infrastructure and security',
          ]} />
        </InfoBlock>
        <InfoBlock title="UAE Golden Visa">
          <CheckList items={[
            '5 or 10-year renewable validity',
            'No sponsor (kafeel) required',
            'Stay abroad up to 6 months without visa cancellation',
            'Includes spouse and children',
            'Suitable for investors, entrepreneurs and professionals',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему ВНЖ ОАЭ?">
          <p>ОАЭ — одна из самых развитых стран Ближнего Востока. Дубай и Абу-Даби признаны мировыми деловыми центрами. ВНЖ ОАЭ даёт доступ к мировой экономике, передовой инфраструктуре и отсутствию подоходного налога.</p>
        </InfoBlock>
        <InfoBlock title="Виды ВНЖ ОАЭ">
          <CheckList items={[
            'Золотая виза (5 или 10 лет)',
            'ВНЖ через инвестиции',
            'ВНЖ через покупку недвижимости',
            'ВНЖ через трудоустройство',
            'Студенческий ВНЖ',
          ]} />
        </InfoBlock>
        <InfoBlock title="Преимущества ВНЖ ОАЭ">
          <CheckList items={[
            'Отсутствие подоходного налога',
            'Передовая банковская система',
            'Мировая инфраструктура',
            'Высокий уровень безопасности',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function ResidencyUAE() {
  return <LanguageProvider><Content /></LanguageProvider>;
}