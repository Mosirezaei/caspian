import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout titleFa="وقت سفارت" titleEn="Embassy Appointment" titleRu="Запись в посольство"
      serviceType="embassy-appointment"
      subtitleFa="سریع‌ترین نوبت سفارت‌های اروپایی در ایروان"
      subtitleEn="Fastest embassy appointments in Yerevan"
      subtitleRu="Быстрая запись в посольства в Ереване"
      heroImage="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1200&q=80">

      {/* Yerevan with embassy flags */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1200&q=80" alt="Embassy Yerevan" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2 flex-wrap">
          {['de','fr','it','es','ca','gb','us'].map(c => (
            <img key={c} src={`https://flagcdn.com/w40/${c}.png`} alt={c} className="h-5 rounded shadow" />
          ))}
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="وقت سفارت در ایروان">
          <p>ایروان پایتخت ارمنستان یکی از بهترین مکان‌ها برای دریافت وقت سفارت‌های اروپایی و آمریکای شمالی برای اتباع ایرانی است. به دلیل تقاضای کمتر نسبت به تهران، نوبت‌های سریع‌تری در دسترس است.</p>
        </InfoBlock>
        <InfoBlock title="سفارت‌هایی که کاسپین تجربه دارد">
          <CheckList items={[
            'سفارت آلمان در ایروان — ویزای شینگن',
            'سفارت فرانسه در ایروان',
            'سفارت ایتالیا در ایروان',
            'سفارت اسپانیا در ایروان',
            'سفارت کانادا در ایروان',
            'سفارت انگلستان در ایروان',
            'سفارت آمریکا در ایروان',
            'سفارت هلند در ایروان',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین برای وقت سفارت">
          <CheckList items={[
            'رزرو سریع‌ترین نوبت موجود',
            'آماده‌سازی کامل مدارک',
            'آموزش برای مصاحبه',
            'پیگیری تا دریافت پاسپورت',
            'مشاوره در مورد دلایل رد احتمالی',
          ]} />
        </InfoBlock>
        <InfoBlock title="چرا از ایروان؟">
          <p>ایروان نسبت به تهران نوبت‌های بسیار سریع‌تری برای سفارت‌های اروپایی دارد. کاسپین گروه با استقرار در ایروان و ارتباط مستقیم با سفارتخانه‌ها، بهترین تاریخ ممکن را برای شما رزرو می‌کند.</p>
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Embassy Appointments in Yerevan">
          <p>Yerevan is one of the best places for Iranian nationals to secure embassy appointments for European and North American countries. Due to lower demand compared to Tehran, appointments are available much faster.</p>
        </InfoBlock>
        <InfoBlock title="Embassies We Work With">
          <CheckList items={[
            'German Embassy in Yerevan — Schengen visa',
            'French Embassy in Yerevan',
            'Italian Embassy in Yerevan',
            'Spanish Embassy in Yerevan',
            'Canadian Embassy in Yerevan',
            'British Embassy in Yerevan',
            'US Embassy in Yerevan',
          ]} />
        </InfoBlock>
        <InfoBlock title="Caspian Services">
          <CheckList items={[
            'Book the fastest available appointment',
            'Complete document preparation',
            'Interview coaching',
            'Follow-up until passport return',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Запись в посольства в Ереване">
          <p>Ереван — одно из лучших мест для получения консульских записей в европейские страны для иностранных граждан. Из-за меньшего спроса записи доступны намного быстрее, чем в других городах.</p>
        </InfoBlock>
        <InfoBlock title="Посольства, с которыми мы работаем">
          <CheckList items={[
            'Посольство Германии в Ереване',
            'Посольство Франции в Ереване',
            'Посольство Италии в Ереване',
            'Посольство Испании в Ереване',
            'Посольство Канады в Ереване',
            'Посольство Великобритании в Ереване',
          ]} />
        </InfoBlock>
      </>}

    </ServicePageLayout>
  );
}

export default function EmbassyAppointment() {
  return <LanguageProvider><Content /></LanguageProvider>;
}