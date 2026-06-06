import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="ترانسفر فرودگاهی و ترمینال"
      titleEn="Airport & Terminal Transfer"
      titleRu="Трансфер из аэропорта и терминала"
      subtitleFa="سفر آرام و ایمن از فرودگاه زوارتنوتس یا ترمینال مرکزی به هتل و آپارتمان"
      subtitleEn="Safe and comfortable transfer from Zvartnots Airport or central terminal to hotels and apartments"
      subtitleRu="Безопасный трансфер от аэропорта Звартноц или центрального терминала в отели и апартаменты"
      heroImage="https://images.unsplash.com/photo-1552183299-a5f2bff2d0f3?w=1200&q=80"
      serviceType="transfer">

      {/* Zvartnots airport image */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1200&q=80" alt="Airport Transfer" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/am.png" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">فرودگاه زوارتنوتس، ایروان</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="ترانسفر کاسپین گروه">
          <p>خدمات ترانسفر کاسپین گروه برای مسافرانی که از فرودگاه یا ترمینال مرکزی ایروان وارد شهر می‌شوند، راهی آسان و ایمن ارائه می‌دهد. ما خودروهای مدرن و راننده‌های حرفه‌ای را در نظر گرفته‌ایم.</p>
        </InfoBlock>
        <InfoBlock title="خدمات ترانسفر">
          <CheckList items={[
            'ترانسفر از فرودگاه زوارتنوتس به هتل',
            'ترانسفر از ترمینال مرکزی به آپارتمان',
            'ترانسفر بین شهرهای ارمنستان',
            'رزرو قبلی برای مسافران',
            'راننده‌های فارسی‌زبان حرفه‌ای',
            'خودروهای VIP و استاندارد',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای خدمات ما">
          <CheckList items={[
            'قیمت معقول و شفاف',
            'درخواست ساده از طریق واتساپ',
            'رزرو آنلاین با تأیید فوری',
            'ایمنی و حرفه‌گرایی',
            'انتظار در فرودگاه برای رسیدگی به بار',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Caspian Group Transfer Service">
          <p>Caspian Group provides reliable airport and terminal transfer services for travelers arriving at Zvartnots Airport or central terminal in Yerevan.</p>
        </InfoBlock>
        <InfoBlock title="Transfer Services">
          <CheckList items={[
            'Airport to hotel transfer',
            'Central terminal to apartment transfer',
            'City-to-city transfers within Armenia',
            'Online booking with instant confirmation',
            'Persian-speaking professional drivers',
            'VIP and standard vehicles available',
          ]} />
        </InfoBlock>
        <InfoBlock title="Benefits">
          <CheckList items={[
            'Transparent and reasonable pricing',
            'Easy booking via WhatsApp',
            'Airport waiting assistance',
            'Safe and professional service',
            'Luggage handling support',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Сервис трансфера Caspian Group">
          <p>Caspian Group предоставляет надёжные услуги трансфера из аэропорта Звартноц или центрального терминала Еревана.</p>
        </InfoBlock>
        <InfoBlock title="Услуги трансфера">
          <CheckList items={[
            'Трансфер из аэропорта в отель',
            'Трансфер из терминала в апартаменты',
            'Трансфер между городами Армении',
            'Онлайн-бронирование с мгновенным подтверждением',
            'Водители, говорящие по-персидски',
            'VIP и стандартные автомобили',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function Transfer() {
  return <LanguageProvider><Content /></LanguageProvider>;
}