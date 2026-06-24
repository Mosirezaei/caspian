import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout titleFa="ویزای رومانی" titleEn="Romania Visa" titleRu="Виза в Румынию"
      subtitleFa="دروازه ورود به اروپا برای ایرانیان"
      subtitleEn="The gateway to Europe for Iranian nationals"
      subtitleRu="Ворота в Европу для иранских граждан"
      heroImage="https://images.unsplash.com/photo-1584652868574-4df7e3c8a6b1?w=1200&q=80"
      serviceType="visa-romania">

      {/* Romania flag & landscape */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80" alt="Romania" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/ro.webp" alt="Romania flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">رومانی</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="ویزای رومانی برای ایرانیان">
          <p>رومانی عضو اتحادیه اروپاست اما هنوز به طور کامل وارد منطقه شینگن نشده؛ با این حال دارندگان ویزای معتبر رومانی می‌توانند با استفاده از ویزای رومانی به بلغارستان و برخی کشورهای دیگر نیز سفر کنند. برای ایرانیان، رومانی یکی از قابل‌دسترس‌ترین کشورهای اروپایی محسوب می‌شود.</p>
          <p className="mt-2">کاسپین گروه با تجربه گسترده در اخذ ویزای رومانی برای اتباع ایرانی، تمام مراحل از تهیه مدارک تا دریافت ویزا را برایتان انجام می‌دهد.</p>
        </InfoBlock>
        <InfoBlock title="انواع ویزای رومانی">
          <CheckList items={[
            'ویزای C توریستی (کوتاه‌مدت) — تا ۹۰ روز',
            'ویزای D اقامتی (بلندمدت) — برای تحصیل، کار یا سرمایه‌گذاری',
            'ویزای ترانزیت — برای عبور از خاک رومانی',
            'ویزای تجاری — برای فعالیت‌های بازرگانی',
          ]} />
        </InfoBlock>
        <InfoBlock title="چرا ویزای رومانی برای ایرانیان مناسب است؟">
          <CheckList items={[
            'نرخ رد پرونده پایین‌تر نسبت به شینگن',
            'امکان اقامت قانونی در اروپا',
            'هزینه زندگی پایین‌تر نسبت به اروپای غربی',
            'دانشگاه‌های معتبر با پذیرش دانشجوی خارجی',
            'پل ارتباطی برای اقامت دائم اروپا',
            'امکان کار قانونی در رومانی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'پاسپورت با حداقل ۶ ماه اعتبار',
            'فرم درخواست ویزای رومانی',
            'عکس بیومتریک',
            'بیمه مسافرتی',
            'مدارک مالی — نشان‌دهنده توانایی تامین هزینه سفر',
            'رزرو هتل یا دعوتنامه',
            'بلیط رفت‌وبرگشت',
            'مدارک شغلی یا تحصیلی',
          ]} />
        </InfoBlock>
        <InfoBlock title="نکته مهم">
          <p>سفارت رومانی در ایروان (ارمنستان) نوبت‌های آسان‌تری نسبت به ایران دارد. کاسپین گروه با هماهنگی مستقیم با سفارت، سریع‌ترین وقت ممکن را برای شما رزرو می‌کند.</p>
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Romania Visa for Iranian Nationals">
          <p>Romania is an EU member state that has not yet fully joined the Schengen zone, but Romanian visa holders can also travel to Bulgaria and some other countries. For Iranians, Romania is one of the most accessible European countries.</p>
        </InfoBlock>
        <InfoBlock title="Types of Romanian Visa">
          <CheckList items={[
            'Type C Tourist Visa (short-stay) — up to 90 days',
            'Type D Residence Visa (long-stay) — for study, work, or investment',
            'Transit Visa — for passing through Romanian territory',
            'Business Visa — for commercial activities',
          ]} />
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Passport with at least 6 months validity',
            'Romania visa application form',
            'Biometric photo',
            'Travel insurance',
            'Financial documents showing ability to cover travel costs',
            'Hotel reservation or invitation letter',
            'Round-trip flight booking',
            'Employment or student documents',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Виза в Румынию для иранских граждан">
          <p>Румыния является членом ЕС, хотя ещё не полностью вошла в Шенгенскую зону. Тем не менее обладатели румынской визы могут также посещать Болгарию. Для иранцев Румыния — одна из наиболее доступных европейских стран.</p>
        </InfoBlock>
        <InfoBlock title="Типы румынской визы">
          <CheckList items={[
            'Виза C (туристическая) — до 90 дней',
            'Виза D (долгосрочная) — учёба, работа, инвестиции',
            'Транзитная виза',
            'Деловая виза',
          ]} />
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Паспорт с минимум 6 месяцами действия',
            'Анкета на визу Румынии',
            'Биометрическое фото',
            'Страховой полис',
            'Финансовые документы',
            'Бронирование отеля или приглашение',
            'Авиабилеты туда-обратно',
          ]} />
        </InfoBlock>
      </>}

    </ServicePageLayout>
  );
}

export default function VisaRomania() {
  return <LanguageProvider><Content /></LanguageProvider>;
}