import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout titleFa="ویزای روسیه" titleEn="Russia Visa" titleRu="Виза в Россию"
      subtitleFa="ویزای توریستی و تجاری روسیه با پشتیبانی کامل"
      subtitleEn="Tourist and business visas for Russia with full support"
      subtitleRu="Туристические и деловые визы в Россию"
      heroImage="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80"
      serviceType="visa-russia">

      {/* Russia flag & Moscow Red Square */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80" alt="Moscow Russia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/ru.png" alt="Russia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">مسکو، روسیه</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="ویزای روسیه برای ایرانیان">
          <p>روسیه یکی از مقاصد محبوب برای ایرانیان است. اخذ ویزای روسیه نیازمند دعوتنامه رسمی (ووچر) از یک هتل یا آژانس مسافرتی معتبر در روسیه است. کاسپین گروه تمام مراحل دریافت دعوتنامه و ویزا را برای شما انجام می‌دهد.</p>
        </InfoBlock>
        <InfoBlock title="انواع ویزای روسیه">
          <CheckList items={[
            'ویزای توریستی — اقامت تا ۳۰ روز',
            'ویزای تجاری — برای فعالیت‌های تجاری',
            'ویزای خروجی — برای اتباع خارجی مقیم روسیه',
            'ویزای ترانزیت — برای عبور از خاک روسیه',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'پاسپورت با حداقل ۶ ماه اعتبار',
            'دعوتنامه رسمی از هتل یا آژانس روسی',
            'فرم درخواست ویزا',
            'عکس',
            'بیمه مسافرتی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدت پردازش">
          <p>معمولاً ۵ تا ۱۰ روز کاری. کاسپین گروه دعوتنامه رسمی را از طریق شرکای تایید شده در روسیه تهیه می‌کند.</p>
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Russia Visa for Iranians">
          <p>Russia is a popular destination for Iranian travelers. Getting a Russian visa requires an official invitation (voucher) from a certified hotel or travel agency in Russia. Caspian Group handles all stages of obtaining the invitation and visa.</p>
        </InfoBlock>
        <InfoBlock title="Types of Russian Visa">
          <CheckList items={[
            'Tourist Visa — stay up to 30 days',
            'Business Visa — for commercial activities',
            'Transit Visa — for passing through Russian territory',
          ]} />
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Passport with at least 6 months validity',
            'Official invitation from a Russian hotel or agency',
            'Visa application form',
            'Photo',
            'Travel insurance',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Виза в Россию для иностранных граждан">
          <p>Для получения российской визы необходимо официальное приглашение (ваучер) от сертифицированного отеля или турагентства. Caspian Group берёт на себя все этапы получения приглашения и визы.</p>
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Паспорт с минимум 6 месяцами действия',
            'Официальное приглашение',
            'Анкета на визу',
            'Фотография',
            'Медицинская страховка',
          ]} />
        </InfoBlock>
      </>}

    </ServicePageLayout>
  );
}

export default function VisaRussia() {
  return <LanguageProvider><Content /></LanguageProvider>;
}