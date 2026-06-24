import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout titleFa="پذیرش دانشجویی" titleEn="Student Admission" titleRu="Поступление в вузы" serviceType="student-admission"
      subtitleFa="تحصیل در دانشگاه‌های ارمنستان و اروپا"
      subtitleEn="Study at Armenian and European universities"
      subtitleRu="Учёба в армянских и европейских университетах"
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80">

      {/* Armenia university image with flag */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80" alt="University Armenia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">دانشگاه‌های ایروان</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا تحصیل در ارمنستان؟">
          <p>ارمنستان با داشتن دانشگاه‌های معتبر، هزینه‌های تحصیلی پایین و محیط امن و دوستانه، یکی از بهترین مقاصد تحصیلی برای دانشجویان ایرانی است. مدرک دانشگاه‌های ارمنستان در اکثر کشورهای دنیا معتبر و قابل ترجمه است.</p>
        </InfoBlock>
        <InfoBlock title="رشته‌های محبوب در ارمنستان">
          <CheckList items={[
            'پزشکی عمومی — هزینه پایین‌تر از اروپا',
            'دندانپزشکی',
            'داروسازی',
            'مهندسی کامپیوتر',
            'معماری',
            'مدیریت و MBA',
            'حقوق',
            'هنر و طراحی',
          ]} />
        </InfoBlock>
        <InfoBlock title="دانشگاه‌های معتبر ایروان">
          <CheckList items={[
            'Yerevan State Medical University (YSMU)',
            'American University of Armenia (AUA)',
            'Yerevan State University (YSU)',
            'State Engineering University of Armenia (SEUA)',
            'French University in Armenia (UFAR)',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای تحصیل در ارمنستان">
          <CheckList items={[
            'شهریه پایین‌تر از اروپا و آمریکا',
            'زندگی ارزان‌تر',
            'امکان اخذ اقامت دانشجویی',
            'محیط فارسی‌زبان و فرهنگ مشابه',
            'امکان کار پاره‌وقت حین تحصیل',
            'فرصت ادامه تحصیل در اروپا پس از فارغ‌التحصیلی',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین برای دانشجویان">
          <CheckList items={[
            'مشاوره رایگان انتخاب رشته و دانشگاه',
            'پیگیری پذیرش و تهیه پرونده',
            'اخذ ویزای دانشجویی',
            'کمک در یافتن خوابگاه یا آپارتمان',
            'پشتیبانی تا ورود به دانشگاه',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Study in Armenia?">
          <p>Armenia, with its reputable universities, low tuition fees, and safe, friendly environment, is one of the best study destinations for international students. Armenian university degrees are recognized in most countries worldwide.</p>
        </InfoBlock>
        <InfoBlock title="Popular Fields in Armenia">
          <CheckList items={[
            'General Medicine — lower cost than Europe',
            'Dentistry',
            'Pharmacy',
            'Computer Engineering',
            'Architecture',
            'Management & MBA',
          ]} />
        </InfoBlock>
        <InfoBlock title="Top Universities in Yerevan">
          <CheckList items={[
            'Yerevan State Medical University (YSMU)',
            'American University of Armenia (AUA)',
            'Yerevan State University (YSU)',
            'State Engineering University of Armenia (SEUA)',
            'French University in Armenia (UFAR)',
          ]} />
        </InfoBlock>
        <InfoBlock title="Caspian Services for Students">
          <CheckList items={[
            'Free consultation on major and university selection',
            'Admission application and document preparation',
            'Student visa processing',
            'Help finding dormitory or apartment',
            'Support until university enrollment',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему учиться в Армении?">
          <p>Армения с авторитетными университетами, низкой стоимостью обучения и безопасной обстановкой — одно из лучших мест для обучения.</p>
        </InfoBlock>
        <InfoBlock title="Популярные специальности">
          <CheckList items={[
            'Общая медицина — дешевле, чем в Европе',
            'Стоматология',
            'Фармацевтика',
            'Компьютерная инженерия',
            'Менеджмент и MBA',
          ]} />
        </InfoBlock>
        <InfoBlock title="Услуги Caspian для студентов">
          <CheckList items={[
            'Бесплатная консультация по выбору специальности',
            'Подготовка документов для поступления',
            'Оформление студенческой визы',
            'Помощь в поиске жилья',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function StudentAdmission() {
  return <LanguageProvider><Content /></LanguageProvider>;
}