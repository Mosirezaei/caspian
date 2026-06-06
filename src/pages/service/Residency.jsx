import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  
  useSEO({
    title: lang === 'fa' ? 'اقامت ارمنستان | کاسپین گروپ' : 
           lang === 'ru' ? 'ВНЖ Армении | Caspian Group' : 
           'Armenia Residency | Caspian Group',
    description: lang === 'fa' ? 'اقامت ارمنستان - سریع‌ترین اقامت اروپایی برای ایرانیان. ثبت شرکت در ۳ روز، هزینه پایین، مالیات ۱۰٪.' :
                 lang === 'ru' ? 'ВНЖ Армении - самый быстрый европейский ВНЖ. Регистрация компании за 3 дня, низкие налоги 10%.' :
                 'Armenia Residency - Fastest European residency for Iranians. Company registration in 3 days, 10% tax rate.',
    keywords: lang === 'fa' ? 'اقامت ارمنستان، کارت اقامت، ثبت شرکت، کاسپین' :
              lang === 'ru' ? 'ВНЖ Армения, виза Армении, регистрация компании' :
              'Armenia residency, residency card, company registration',
    ogImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: lang === 'fa' ? 'اقامت ارمنستان' : 'Armenia Residency',
      description: lang === 'fa' ? 'خدمات اقامت ارمنستان برای ایرانیان' : 'Armenia Residency Services',
      provider: {
        '@type': 'Organization',
        name: 'Caspian Group',
        url: 'https://caspiangroup.am'
      },
      areaServed: 'Iran'
    }
  });
  
  return (
    <ServicePageLayout titleFa="اقامت ارمنستان" titleEn="Armenia Residency" titleRu="ВНЖ Армении" serviceType="residency"
      subtitleFa="سریع‌ترین و مقرون‌به‌صرفه‌ترین اقامت اروپایی"
      subtitleEn="The fastest and most affordable European residency"
      subtitleRu="Самый быстрый и доступный европейский ВНЖ"
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80">

      {/* Armenia flag & cityscape image */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80" alt="Yerevan Armenia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/am.png" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">یروان، ارمنستان</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا اقامت ارمنستان؟">
          <p>ارمنستان یکی از بهترین گزینه‌ها برای اقامت خارج از کشور برای ایرانیان است. این کشور عضو اتحادیه اروپایی نیست، اما دارای روابط بسیار خوبی با اروپا، روسیه و کشورهای CIS است. هزینه زندگی پایین، مردم مهمان‌نواز، فرهنگ مشابه و محیط امن، ارمنستان را به مقصد ایده‌آلی برای ایرانیان تبدیل کرده است.</p>
        </InfoBlock>
        <InfoBlock title="روش‌های دریافت اقامت ارمنستان">
          <CheckList items={[
            'ثبت شرکت در ارمنستان (سریع‌ترین روش — ۳ روز)',
            'سرمایه‌گذاری در ارمنستان',
            'اشتغال در شرکت ارمنستانی',
            'ازدواج با شهروند ارمنستانی',
            'تحصیل در دانشگاه‌های ارمنستان',
            'اقامت بشردوستانه',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای اقامت ارمنستان">
          <CheckList items={[
            'اخذ اقامت در کمتر از ۳۰ روز',
            'هزینه پایین نسبت به سایر کشورهای اروپایی',
            'دسترسی به بازارهای اروپایی و CIS',
            'محیط امن و آرام برای زندگی',
            'امکان تحصیل فرزندان در سیستم آموزشی ارمنستان',
            'مالیات پایین — ۱۰٪ مالیات فردی',
            'پل ارتباطی برای اقامت‌های بزرگ‌تر در آینده',
          ]} />
        </InfoBlock>
        <InfoBlock title="مراحل دریافت اقامت از طریق کاسپین گروه">
          <CheckList items={[
            'مشاوره رایگان و بررسی وضعیت',
            'آماده‌سازی مدارک لازم',
            'ثبت شرکت یا انجام روش انتخابی',
            'ثبت محل سکونت',
            'درخواست کارت اقامت (ID)',
            'دریافت کارت اقامت ارمنستان',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Armenia Residency?">
          <p>Armenia is one of the best options for Iranians seeking residency abroad. Although not an EU member, it has excellent relations with Europe, Russia and CIS countries. Low cost of living, welcoming people, similar culture, and a safe environment make Armenia an ideal destination.</p>
        </InfoBlock>
        <InfoBlock title="Methods to Obtain Armenia Residency">
          <CheckList items={[
            'Company registration in Armenia (fastest — 3 days)',
            'Investment in Armenia',
            'Employment at an Armenian company',
            'Marriage to an Armenian citizen',
            'Study at Armenian universities',
          ]} />
        </InfoBlock>
        <InfoBlock title="Benefits of Armenia Residency">
          <CheckList items={[
            'Obtain residency in less than 30 days',
            'Low cost compared to other European countries',
            'Access to European and CIS markets',
            'Safe and peaceful living environment',
            'Children can study in Armenian education system',
            'Low taxes — 10% personal income tax',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему ВНЖ Армении?">
          <p>Армения — один из лучших вариантов для иностранцев, желающих получить ВНЖ. Низкая стоимость жизни, безопасная обстановка и хорошие отношения с Европой и СНГ делают её привлекательным выбором.</p>
        </InfoBlock>
        <InfoBlock title="Способы получения ВНЖ Армении">
          <CheckList items={[
            'Регистрация компании (самый быстрый способ — 3 дня)',
            'Инвестиции в Армению',
            'Трудоустройство в армянской компании',
            'Брак с гражданином Армении',
            'Обучение в университетах Армении',
          ]} />
        </InfoBlock>
        <InfoBlock title="Преимущества ВНЖ Армении">
          <CheckList items={[
            'Получение ВНЖ менее чем за 30 дней',
            'Низкие расходы по сравнению с другими европейскими странами',
            'Низкие налоги — 10% подоходный налог',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function Residency() {
  return <LanguageProvider><Content /></LanguageProvider>;
}