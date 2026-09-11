'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  return (
    <ServicePageLayout
      titleFa="ویزای تجاری روسیه" titleEn="Russia Business Visa" titleRu="Деловая виза в Россию"
      subtitleFa="ویزای روسیه برای سفرهای کاری، مذاکرات تجاری و شرکت در نمایشگاه‌ها — از تک‌ورودی تا چندبار ورود"
      subtitleEn="Russian visa for business trips, negotiations, and trade fairs — single to multiple entry"
      subtitleRu="Виза в Россию для деловых поездок и переговоров"
      heroImage="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80"
      serviceType="visa-russia-business"
      seoTitle="ویزای تجاری روسیه برای ایرانیان | شرایط، مدارک و هزینه | کاسپین"
      seoDescription="ویزای تجاری روسیه از ایروان برای مذاکره، نمایشگاه و همکاری‌های تجاری — شامل ویزای چندبار ورود (Multiple Entry). مدارک، انواع اعتبار و مراحل کامل."
      breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'ویزای روسیه', href: '/visa/russia' }, { label: 'ویزای تجاری' }]}>

      {isFa && <>
        <InfoBlock title="ویزای تجاری روسیه چیه؟">
          <p>ویزای تجاری برای افرادی صادر می‌شه که هدف سفرشون به روسیه مذاکره‌ی تجاری، بازدید از شرکای کاری، شرکت در نمایشگاه یا کنفرانس، یا انجام امور اداری/حقوقی برای شرکته — نه اقامت یا اشتغال دائم. برخلاف ویزای توریستی eVisa که حداکثر ۳۰ روز اقامت مداوم می‌ده، ویزای تجاری معمولاً اعتبار و مدت اقامت بیشتری داره و می‌تونه به‌صورت چندبار ورود هم صادر بشه.</p>
        </InfoBlock>

        <InfoBlock title="مقایسه ویزای تجاری و توریستی روسیه">
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-primary/15 text-foreground">
                  <th className="p-2 text-right border border-white/10">معیار مقایسه</th>
                  <th className="p-2 text-right border border-white/10">ویزای تجاری (Business)</th>
                  <th className="p-2 text-right border border-white/10">ویزای توریستی (eVisa)</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                {[
                  ['هدف از سفر', 'مراودات بازرگانی، قراردادها، نشست‌های صنعتی', 'گردشگری، بازدید از جاذبه‌های تاریخی و تفریحی'],
                  ['مدت اعتبار', 'از ۹۰ روز تا ۵ سال (تک تا چندبار ورود)', 'اعتبار ۱۲۰ روزه، حداکثر ۳۰ روز اقامت'],
                  ['نیاز به دعوت‌نامه رسمی', 'الزامی (از شرکت روسی یا وزارت امور خارجه)', 'الزامی نیست'],
                ].map(([f, b, t]) => (
                  <tr key={f} className="border-b border-white/5 hover:bg-white/3">
                    <td className="p-2 border border-white/8 font-medium text-foreground/80">{f}</td>
                    <td className="p-2 border border-white/8">{b}</td>
                    <td className="p-2 border border-white/8">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-foreground/40 mt-3">برای جزئیات ویزای توریستی، <Link href="/visa/russia" className="text-primary hover:underline">ویزای توریستی روسیه</Link> را ببینید.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'دعوت‌نامه‌ی رسمی از یک شرکت یا اتاق بازرگانی روسی (Invitation Letter)',
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار از تاریخ ورود و صفحات خالی کافی — برای ویزای چندبار ورود، صفحات بیشتری برای مهرهای مکرر لازم است',
            'فرم درخواست ویزا تکمیل‌شده',
            'عکس بیومتریک استاندارد',
            'بیمه‌ی مسافرتی معتبر — برای ویزای بلندمدت باید کل دوره‌ی اعتبار را پوشش دهد',
            'مدارک شغلی/شرکتی متقاضی (نامه از شرکت ایرانی طرف قرارداد)',
          ]} />
        </InfoBlock>

        <InfoBlock title="تک‌ورودی، دوبار ورود یا چندبار ورود؟ (Single / Double / Multiple Entry)">
          <p className="mb-3">ویزای تجاری روسیه بسته به نیاز متقاضی در چند نوع اعتبار صادر می‌شود:</p>
          <CheckList items={[
            'تک‌ورودی — معمولاً تا ۳۰ روز اقامت، برای یک سفر مشخص',
            'دوبار ورود — برای دو سفر جداگانه در بازه‌ی اعتبار ویزا',
            'چندبار ورود کوتاه‌مدت (Multiple Entry) — تا ۶ ماه اعتبار، مناسب بازرگانانی که چند بار در این بازه سفر می‌کنند',
            'چندبار ورود بلندمدت — تا ۱ سال اعتبار (با محدودیت روزهای اقامت مجاز در هر بازه، مثلاً ۹۰ روز از هر ۱۸۰ روز)، برای همکاری‌های تجاری مستمر',
          ]} />
          <p className="text-xs text-foreground/50 mt-3">ویزای چندبار ورود نیازی به درخواست جداگانه برای هر سفر ندارد؛ سابقه‌ی سفر قبلی به روسیه معمولاً شانس تأیید این نوع را بالا می‌برد.</p>
        </InfoBlock>

        <InfoBlock title="مراحل درخواست">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>مشخص‌کردن نوع اعتبار موردنیاز (تک‌ورودی، دوبار ورود یا چندبار ورود) و دریافت دعوت‌نامه‌ی متناظر از طرف روسی</li>
            <li>تکمیل فرم آنلاین درخواست ویزای روسیه با ذکر صریح نوع ورود درخواستی</li>
            <li>ارائه‌ی مدارک و بیومتریک در کنسولگری یا مرکز ویزا</li>
            <li>پرداخت هزینه‌ی کنسولی (متناسب با نوع و مدت اعتبار)</li>
            <li>دریافت ویزا (زمان رسیدگی معمولاً ۴ تا ۱۰ روز کاری)</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="دلایل رایج رد شدن درخواست">
          <CheckList items={[
            'دعوت‌نامه‌ی ناقص یا فاقد مهر و امضای رسمی شرکت/نهاد روسی',
            'عدم تطابق هدف سفر اعلام‌شده با نوع دعوت‌نامه',
            'صفحات خالی ناکافی در پاسپورت برای ویزای چندبار ورود',
            'بیمه‌ی مسافرتی با پوشش کمتر از الزام یا با تاریخ انقضای زودتر از پایان اعتبار ویزا',
          ]} />
          <p className="text-xs text-foreground/50 mt-3">تصمیم نهایی همیشه با کنسولگری روسیه است؛ کاسپین در هماهنگی دعوت‌نامه و آماده‌سازی مدارک کمک می‌کند.</p>
        </InfoBlock>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-panel rounded-2xl p-6 mb-6 text-center">
          <h2 className="text-lg font-black text-foreground mb-2">برای سفر کاری بعدی‌تان به روسیه آماده‌اید؟</h2>
          <p className="text-sm text-foreground/60 mb-4">کاسپین در هماهنگی دعوت‌نامه‌ی تجاری و انتخاب نوع ویزای مناسب (تک‌ورودی تا چندبار ورود) همراه شماست.</p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-sm font-bold">
            مشاوره ویزای تجاری در واتساپ
          </a>
        </motion.div>

        <p className="text-xs text-foreground/40 mt-2">برای سفرهای گردشگری، <Link href="/visa/russia" className="text-primary hover:underline">ویزای توریستی روسیه</Link> را ببینید.</p>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="What Is a Russia Business Visa?">
          <p>The business visa is issued for those traveling to Russia for business negotiations, meeting partners, attending trade fairs or conferences, or handling administrative/legal company matters — not permanent residency or employment. It typically allows a longer stay than the 16-day tourist eVisa, and can be issued as single, double, or multiple-entry.</p>
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Official invitation letter from a Russian company or chamber of commerce',
            'Valid passport with at least 6 months validity from entry date, with enough blank pages for multiple-entry stamps',
            'Completed visa application form',
            'Standard biometric photo',
            'Valid travel insurance covering the full visa validity period',
            "Applicant's employment/company documents",
          ]} />
        </InfoBlock>
        <InfoBlock title="Single, Double, or Multiple Entry?">
          <CheckList items={[
            'Single-entry — usually up to 30 days for one trip',
            'Double-entry — for two separate trips within validity',
            'Multiple-entry (short-term, up to 6 months) or long-term (up to 1 year, with a stay-day cap per period) — for frequent business travelers',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Что такое деловая виза в Россию?">
          <p>Деловая виза выдаётся для деловых переговоров, встреч с партнёрами, участия в выставках или конференциях — не для постоянного проживания. Обычно даёт более длительный срок пребывания, чем 16-дневная туристическая eVisa, и может быть однократной, двукратной или многократной.</p>
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Официальное приглашение от российской компании или ТПП',
            'Действующий паспорт (не менее 6 месяцев, с чистыми страницами для многократной визы)',
            'Заполненная анкета на визу',
            'Биометрическое фото',
            'Действующая медицинская страховка на весь срок визы',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
