import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  
  useSEO({
    title: lang === 'fa' ? 'ویزای شینگن | کاسپین گروپ ارمنستان' : 
           lang === 'ru' ? 'Шенгенская виза | Caspian Group' : 
           'Schengen Visa | Caspian Group',
    description: lang === 'fa' ? 'اخذ ویزای شینگن برای ایرانیان - دسترسی به ۲۶ کشور اروپایی. بیش از ۱۵ سال تجربه و بالاترین نرخ موفقیت.' :
                 lang === 'ru' ? 'Получение Шенгенской визы для граждан Ирана - доступ к 26 европейским странам. Более 15 лет опыта.' :
                 'Get Schengen Visa for Iranians - Access to 26 European countries. Over 15 years of experience, highest success rate.',
    keywords: lang === 'fa' ? 'ویزای شینگن، ویزای اروپا، اخذ ویزا ارمنستان، کاسپین' :
              lang === 'ru' ? 'Шенгенская виза, виза в Европу, visa Schengen' :
              'Schengen visa, Europe visa, Caspian Group',
    ogImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: lang === 'fa' ? 'ویزای شینگن' : 'Schengen Visa',
      description: lang === 'fa' ? 'خدمات اخذ ویزای شینگن برای ایرانیان' : 'Schengen Visa Services',
      provider: {
        '@type': 'Organization',
        name: 'Caspian Group',
        url: 'https://caspiangroup.am'
      },
      areaServed: 'Iran'
    }
  });
  
  return (
    <ServicePageLayout titleFa="ویزای شینگن" titleEn="Schengen Visa" titleRu="Шенгенская виза"
      subtitleFa="دسترسی به ۲۶ کشور اروپایی با یک ویزا"
      subtitleEn="Access to 26 European countries with a single visa"
      subtitleRu="Доступ к 26 европейским странам с одной визой"
      heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80"
      serviceType="visa-schengen">

      {/* Schengen countries flags mosaic */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80" alt="Europe Schengen" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2 flex-wrap">
          {['de','fr','it','es','nl','at','ch','gr'].map(c => (
            <img key={c} src={`https://flagcdn.com/w40/${c}.png`} alt={c} className="h-5 rounded shadow" />
          ))}
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="ویزای شینگن چیست؟">
          <p>ویزای شینگن یک ویزای چندکشوره اروپایی است که به دارنده اجازه می‌دهد بدون نیاز به ویزای جداگانه در ۲۶ کشور عضو منطقه شینگن سفر کند. این کشورها شامل آلمان، فرانسه، ایتالیا، اسپانیا، هلند، سوئیس، اتریش، یونان و بسیاری دیگر می‌شوند.</p>
          <p className="mt-2">کاسپین گروه ارمنستان با بیش از ۱۵ سال تجربه در اخذ ویزای شینگن برای اتباع ایرانی، بالاترین نرخ موفقیت را در منطقه دارد.</p>
        </InfoBlock>
        <InfoBlock title="مزایای اخذ ویزا از طریق ارمنستان">
          <CheckList items={[
            'نوبت‌های سریع‌تر سفارت نسبت به ایران',
            'محیط آرام‌تر و استرس کمتر در مصاحبه',
            'امکان رزرو هتل و پکیج کامل توسط کاسپین',
            'مشاوره تخصصی برای هر پرونده به صورت جداگانه',
            'پشتیبانی تا صدور ویزا',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک لازم برای ویزای شینگن">
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار',
            'فرم تکمیل‌شده درخواست ویزا',
            'عکس بیومتریک طبق استاندارد اروپایی',
            'بیمه مسافرتی با پوشش حداقل ۳۰,۰۰۰ یورو',
            'رزرو هتل یا دعوتنامه رسمی',
            'بلیط رفت‌وبرگشت یا رزرو',
            'مدارک مالی (صورت حساب بانکی ۳ ماه اخیر)',
            'مدارک شغلی (گواهی اشتغال یا جواز کسب)',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدت پردازش">
          <p>معمولاً ۱۰ تا ۱۵ روز کاری. در موارد اورژانسی امکان پیگیری سریع‌تر وجود دارد. کاسپین گروه از زمان تکمیل مدارک تا دریافت پاسپورت شما را همراهی می‌کند.</p>
        </InfoBlock>
        <InfoBlock title="کشورهای شینگن که کاسپین تجربه دارد">
          <CheckList items={[
            'آلمان — اشتغال، توریست، تجاری',
            'فرانسه — توریست، فرهنگی',
            'ایتالیا — توریست، خانوادگی',
            'اسپانیا — توریست، تجاری',
            'هلند، بلژیک، اتریش، سوئیس',
            'یونان، مجارستان، لهستان، چک',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="What is the Schengen Visa?">
          <p>The Schengen visa is a multi-country European visa that allows the holder to travel across 26 Schengen member states without needing a separate visa for each country. These include Germany, France, Italy, Spain, Netherlands, Switzerland, Austria, Greece, and many more.</p>
          <p className="mt-2">Caspian Group Armenia, with over 15 years of experience in obtaining Schengen visas for Iranian nationals, holds the highest success rate in the region.</p>
        </InfoBlock>
        <InfoBlock title="Advantages of Applying Through Armenia">
          <CheckList items={[
            'Faster embassy appointments than in Iran',
            'More relaxed interview environment',
            'Full hotel reservation and package available through Caspian',
            'Specialized consultation for each individual case',
            'Full support until visa issuance',
          ]} />
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Valid passport with at least 6 months validity',
            'Completed visa application form',
            'Biometric photo per European standards',
            'Travel insurance with minimum €30,000 coverage',
            'Hotel reservation or official invitation',
            'Round-trip flight booking',
            'Bank statements (last 3 months)',
            'Employment documents (letter or business license)',
          ]} />
        </InfoBlock>
        <InfoBlock title="Processing Time">
          <p>Typically 10–15 business days. In urgent cases, expedited processing is available. Caspian Group accompanies you from document completion to passport return.</p>
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Что такое Шенгенская виза?">
          <p>Шенгенская виза — это многострановая европейская виза, позволяющая путешествовать по 26 государствам Шенгенской зоны без отдельной визы для каждой страны. В их числе Германия, Франция, Италия, Испания, Нидерланды, Швейцария, Австрия, Греция и многие другие.</p>
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Действительный паспорт (не менее 6 месяцев)',
            'Заполненная анкета на визу',
            'Биометрическое фото по европейским стандартам',
            'Страховка на сумму не менее 30 000 €',
            'Бронирование отеля или официальное приглашение',
            'Бронирование авиабилетов туда-обратно',
            'Банковские выписки за 3 месяца',
            'Документы о занятости',
          ]} />
        </InfoBlock>
        <InfoBlock title="Сроки оформления">
          <p>Обычно 10–15 рабочих дней. Caspian Group сопровождает вас от подачи документов до получения паспорта.</p>
        </InfoBlock>
      </>}

    </ServicePageLayout>
  );
}

export default function VisaSchengen() {
  return <LanguageProvider><Content /></LanguageProvider>;
}