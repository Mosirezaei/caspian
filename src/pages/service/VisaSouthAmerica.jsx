import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout titleFa="ویزای آمریکای جنوبی" titleEn="South America Visa" titleRu="Виза в Южную Америку"
      subtitleFa="سفر به آرژانتین، برزیل، شیلی و دیگر کشورهای آمریکای لاتین"
      subtitleEn="Travel to Argentina, Brazil, Chile and other Latin American countries"
      subtitleRu="Путешествие в Аргентину, Бразилию, Чили и другие страны"
      heroImage="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80"
      serviceType="visa-south-america">
      {lang === 'fa' && <>
        <InfoBlock title="آمریکای جنوبی — مقصدی متفاوت برای ایرانیان">
          <p>کشورهای آمریکای جنوبی از جمله آرژانتین، برزیل، شیلی، اروگوئه و بولیوی برای اتباع ایرانی نسبتاً قابل‌دسترس هستند. برخی از این کشورها بدون نیاز به ویزا و برخی دیگر با ویزای ساده‌ای که از طریق سفارت در ارمنستان قابل دریافت است، به ایرانیان خدمت می‌دهند.</p>
        </InfoBlock>
        <InfoBlock title="کشورهایی که کاسپین تجربه دارد">
          <CheckList items={[
            'آرژانتین — یکی از آسان‌ترین ویزاها برای ایرانیان',
            'برزیل — ویزا از طریق سفارت در ایروان',
            'شیلی — ویزا آنلاین یا حضوری',
            'اروگوئه — بدون ویزا برای اقامت کوتاه',
            'بولیوی — ویزا در فرودگاه',
            'پاراگوئه، پرو، کلمبیا',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک عمومی">
          <CheckList items={[
            'پاسپورت با حداقل ۶ ماه اعتبار',
            'فرم درخواست ویزا',
            'مدارک مالی',
            'رزرو هتل و بلیط',
            'بیمه مسافرتی',
          ]} />
        </InfoBlock>
        <InfoBlock title="مشاوره رایگان">
          <p>با توجه به تفاوت قوانین هر کشور، پیشنهاد می‌کنیم قبل از هر اقدامی با کارشناسان کاسپین گروه مشورت نمایید تا بهترین مسیر برای شما انتخاب شود.</p>
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="South America — A Different Destination">
          <p>South American countries including Argentina, Brazil, Chile, Uruguay and Bolivia are relatively accessible for Iranian nationals. Some of these countries require no visa for short stays, while others offer simple visas obtainable through embassies in Armenia.</p>
        </InfoBlock>
        <InfoBlock title="Countries We Have Experience With">
          <CheckList items={[
            'Argentina — one of the easiest visas for Iranians',
            'Brazil — visa through embassy in Yerevan',
            'Chile — online or in-person visa',
            'Uruguay — visa-free for short stays',
            'Bolivia — visa on arrival',
            'Paraguay, Peru, Colombia',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Южная Америка">
          <p>Такие страны, как Аргентина, Бразилия, Чили, Уругвай и Боливия, относительно доступны для иранских граждан. Для некоторых виза не нужна, для других можно получить простую визу через посольства в Армении.</p>
        </InfoBlock>
        <InfoBlock title="Страны с опытом работы">
          <CheckList items={[
            'Аргентина — одна из наиболее доступных виз',
            'Бразилия — виза через посольство в Ереване',
            'Чили — онлайн или очная виза',
            'Уругвай — безвизовый въезд',
            'Боливия — виза по прилёту',
          ]} />
        </InfoBlock>
      </>}

    </ServicePageLayout>
  );
}

export default function VisaSouthAmerica() {
  return <LanguageProvider><Content /></LanguageProvider>;
}