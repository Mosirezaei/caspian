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
    <ServicePageLayout titleFa="ویزای توریستی روسیه" titleEn="Russia Tourist Visa" titleRu="Туристическая виза в Россию"
      subtitleFa="دو روش دریافت: eVisa الکترونیکی یا ویزای استیکری از سفارت ایروان"
      subtitleEn="Two routes: eVisa or embassy sticker visa from Yerevan"
      subtitleRu="Два способа: eVisa или стикерная виза через посольство в Ереване"
      heroImage="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80"
      serviceType="visa-russia-tourist"
      seoTitle="ویزای توریستی روسیه برای ایرانیان | شرایط، مدارک و هزینه ۲۰۲۶ | کاسپین"
      seoDescription="ویزای توریستی روسیه برای ایرانیان از ایروان: eVisa در ۴ روز کاری یا ویزای سفارت تا ۳۰ روز اقامت. مدارک، دعوتنامه و مراحل کامل درخواست."
      breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'ویزای روسیه', href: '/visa/russia' }, { label: 'ویزای توریستی' }]}>

      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&q=80" alt={isFa ? 'میدان سرخ مسکو، مقصد سفر با ویزای روسیه' : isRu ? 'Красная площадь, Москва' : 'Moscow Red Square, Russia'} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/ru.webp" alt="Russia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">{isFa ? 'مسکو، روسیه' : isRu ? 'Москва, Россия' : 'Moscow, Russia'}</span>
        </div>
      </div>

      {isFa && <>
        <InfoBlock title="آیا ایرانیان به ویزای روسیه نیاز دارند؟">
          <p>بله. برخلاف تصور رایج، روابط دیپلماتیک خوب ایران و روسیه به معنای لغو ویزا نیست و اتباع ایرانی همچنان برای هر نوع سفر به روسیه باید ویزای معتبر دریافت کنند. خبر خوب این است که دو روش در دسترس وجود دارد که هر کدام مزایا و محدودیت‌های خاص خود را دارند — و انتخاب درست بین آن‌ها می‌تواند هم در هزینه و هم در زمان تفاوت قابل توجهی ایجاد کند.</p>
        </InfoBlock>

        <InfoBlock title="مقایسه دو روش: eVisa الکترونیکی در برابر ویزای استیکری سفارت">
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-primary/15 text-foreground">
                  <th className="p-2 text-right border border-white/10">ویژگی</th>
                  <th className="p-2 text-center border border-white/10">eVisa الکترونیکی</th>
                  <th className="p-2 text-center border border-white/10">ویزای استیکری سفارت</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                {[
                  ['مدت اعتبار روادید', 'تا ۱۲۰ روز از تاریخ صدور', '—'],
                  ['زمان صدور', '۴ روز کاری', '۵–۱۰ روز کاری'],
                  ['حداکثر اقامت', 'تا ۳۰ روز مداوم', '۳۰ روز'],
                  ['دعوتنامه لازم؟', '❌ لازم نیست', '✅ الزامی'],
                  ['حضور در سفارت', '❌ لازم نیست', '✅ الزامی (بیومتریک)'],
                  ['پذیرش مرزی', 'فقط مرزهای مشخص', 'همه مرزهای قانونی'],
                  ['مناسب برای', 'سفر کوتاه، اولین‌بار', 'سفر طولانی‌تر، چند ورود'],
                ].map(([f, e, s]) => (
                  <tr key={f} className="border-b border-white/5 hover:bg-white/3">
                    <td className="p-2 border border-white/8 font-medium text-foreground/80">{f}</td>
                    <td className="p-2 border border-white/8 text-center">{e}</td>
                    <td className="p-2 border border-white/8 text-center">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoBlock>

        <InfoBlock title="ویزای الکترونیکی (eVisa) روسیه برای ایرانیان">
          <p className="mb-3">eVisa روسیه یکی از راحت‌ترین روش‌ها برای سفر کوتاه‌مدت است — بدون نیاز به دعوتنامه، بدون حضور در سفارت. مراحل آن:</p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>ورود به سامانه رسمی وزارت خارجه روسیه (electronic-visa.kdmid.ru)</li>
            <li>تکمیل فرم آنلاین با اطلاعات پاسپورت</li>
            <li>آپلود عکس دیجیتال زمینه سفید</li>
            <li>پرداخت هزینه کنسولی به‌صورت آنلاین</li>
            <li>دریافت eVisa به ایمیل پس از ۴ روز کاری</li>
          </ol>
          <p className="text-xs text-foreground/50 mt-3">⚠️ نکته مهم: eVisa فقط در برخی گذرگاه‌های مرزی و فرودگاه‌های مشخص (از جمله فرودگاه شرمتیوو و دومودیوو مسکو، فرودگاه پولکووو سن‌پترزبورگ) قابل استفاده است. قبل از سفر لیست کامل مرزهای مجاز را بررسی کنید.</p>
        </InfoBlock>

        <InfoBlock title="ویزای استیکری از سفارت روسیه در ایروان">
          <p className="mb-3">این روش مناسب کسانی است که می‌خواهند بیش از ۳۰ روز در روسیه بمانند، بیش از یک بار سفر کنند، یا از هر مرزی وارد شوند. سفارت روسیه در ایروان یکی از فعال‌ترین و سریع‌ترین نمایندگی‌های روسیه در منطقه است — همین موضوع باعث شده بسیاری از ایرانیان ترجیح دهند ویزا را از ارمنستان بگیرند.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">مدارک لازم</h3>
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار از تاریخ ورود و حداقل دو صفحه سفید',
            'دعوتنامه رسمی (ووچر) از هتل یا آژانس روسی دارای مجوز — تهیه‌شده توسط کاسپین',
            'فرم الکترونیکی درخواست ویزا (سامانه رسمی وزارت خارجه روسیه)',
            'یک قطعه عکس بیومتریک با زمینه سفید، استاندارد اروپایی',
            'بیمه مسافرتی با پوشش درمانی حداقل ۳۰٬۰۰۰ یورو یا معادل',
            'برای ویزای تجاری: دعوتنامه از شرکت روسی طرف قرارداد',
            'برای اتباع زیر ۱۸ سال: رضایت‌نامه رسمی والد غایب',
          ]} />
        </InfoBlock>

        <InfoBlock title="دعوتنامه (ووچر) روسیه چیست؟">
          <p>برخلاف ویزای شینگن که رزرو هتل معمولاً کافی است، برای ویزای استیکری روسیه یک سند رسمی به نام دعوتنامه یا ووچر لازم است که تنها توسط هتل‌ها یا آژانس‌های دارای مجوز از وزارت خارجه روسیه صادر می‌شود. کاسپین گروپ از طریق شرکای معتبر در روسیه این دعوتنامه را در کوتاه‌ترین زمان صادر می‌کند — بدون نیاز به رزرو واقعی هتل.</p>
        </InfoBlock>

        <InfoBlock title="انواع ویزای روسیه و کاربرد هرکدام">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ویزای توریستی</h3>
          <p className="mb-3">برای گردشگری و دیدار خانوادگی، معمولاً یک یا دو بار ورود تا ۳۰ روز اقامت. پرتقاضاترین نوع ویزا در میان مسافران ایرانی است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ویزای تجاری</h3>
          <p className="mb-3">برای نمایشگاه، مذاکره یا بازدید شرکا. نیاز به دعوتنامه از شرکت روسی دارد. می‌تواند به‌صورت Multiple Entry صادر شود — برای فعالان تجاری با سفرهای مکرر بسیار به‌صرفه است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ویزای ترانزیت</h3>
          <p>برای عبور از خاک روسیه. اعتبار کوتاه‌مدت (تا ۱۰ روز)، مدارک ساده‌تر.</p>
        </InfoBlock>

        <InfoBlock title="مراحل اخذ ویزای استیکری با کاسپین">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>تماس با کاسپین در واتساپ، اعلام نوع ویزا و تاریخ سفر</li>
            <li>ارسال اسکن پاسپورت — تهیه دعوتنامه توسط شریک مجاز کاسپین (۲–۳ روز کاری)</li>
            <li>تکمیل فرم آنلاین و هماهنگی نوبت سفارت روسیه در ایروان</li>
            <li>تحویل مدارک + بیومتریک در سفارت (حضوری)</li>
            <li>دریافت پاسپورت با ویزا — معمولاً ۵ تا ۱۰ روز کاری پس از ثبت</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="جاذبه‌های توریستی روسیه که نباید از دست داد">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">مسکو</h3>
          <p className="mb-3">میدان سرخ و کرملین قلب تاریخی روسیه هستند. کلیسای رنگارنگ سنت باسیل، موزه تاریخی روسیه، ایستگاه‌های مترو با معماری شگفت‌انگیز، مرکز خرید GUM و بازار معروف Izmaylovo از جاذبه‌های اصلی هستند. مسکو به‌ویژه در روزهای پایان هفته ارزان‌تر و آرام‌تر است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">سن‌پترزبورگ</h3>
          <p className="mb-3">موزه آرمیتاژ یکی از بزرگ‌ترین و مهم‌ترین موزه‌های جهان با ۳ میلیون اثر هنری، کاخ زمستانی، کلیسای ناجی در خون با کاشی‌کاری خیره‌کننده، تئاتر ماریینسکی معتبرترین سالن اپرای روسیه، و کاخ‌موزه پترهوف با آبشارهای طلایی و فواره‌های معروف. شب‌های سفید تابستانی (May-July) پدیده‌ای فراموش‌نشدنی است.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">بهترین فصل سفر</h3>
          <p>بهار (اردیبهشت-خرداد) و تابستان (تیر-شهریور) بهترین آب‌وهوا را دارند. تابستان سن‌پترزبورگ با شب‌های سفید تجربه‌ای منحصربه‌فرد است. زمستان مقصدی آرام‌تر و کم‌ازدحام‌تر است، هرچند باید برای سرمای شدید آماده باشید.</p>
        </InfoBlock>

        <InfoBlock title="نکات مهم قبل از اقدام">
          <CheckList items={[
            'ثبت‌نام در سامانه Gosuslugi باید با اطلاعات دقیقاً منطبق با پاسپورت باشد — کوچک‌ترین اختلاف می‌تواند باعث تأخیر یا رد شود',
            'بیومتریک (اثر انگشت) برای اکثر متقاضیان الزامی است و باید حضوری در سفارت انجام شود',
            'ویزای روسیه غیرقابل تمدید است — مدت ویزا باید با مدت اقامت واقعی هماهنگ باشد',
            'برای سفر خانوادگی، دعوتنامه و فرم هر عضو خانواده — حتی کودکان — باید جداگانه تهیه شود',
            'هزینه‌های کنسولی بسته به سیاست‌های سفارت ممکن است تغییر کنند — قبل از اقدام آخرین نرخ را از کاسپین بپرسید',
          ]} />
        </InfoBlock>

        <InfoBlock title="تک‌ورودی، دوبار ورود یا چندبار ورود؟ (Single / Double / Multiple Entry)">
          <p className="mb-2">ویزای استیکری توریستی روسیه معمولاً به‌صورت تک‌ورودی یا دوبار ورود صادر می‌شود و برای اکثر سفرهای گردشگری همین کافی است. اگر در یک بازه‌ی زمانی مشخص قصد چند سفر جداگانه به روسیه را دارید، گزینه‌ی ویزای <strong>چندبار ورود (Multiple Entry)</strong> — که بیشتر در قالب ویزای تجاری صادر می‌شود — می‌تواند مناسب‌تر باشد؛ جزئیات این نوع را در <Link href="/visa/russia/business" className="text-primary hover:underline">ویزای تجاری روسیه</Link> توضیح داده‌ایم.</p>
        </InfoBlock>

        <InfoBlock title="توافق لغو ویزای گروهی برای ایرانیان">
          <p>بر اساس توافق‌نامه‌های گردشگری میان دولت ایران و روسیه، تورهای مسافرتی گروهی (حداقل ۵ نفره) که از طریق آژانس‌های مجاز سازماندهی می‌شوند، از دریافت ویزای انفرادی معاف هستند. با این حال، سفرهای انفرادی، تجاری یا خانوادگی همچنان نیازمند طی کردن مراحل اخذ ویزا به‌صورت مستقل یا الکترونیکی هستند.</p>
        </InfoBlock>

        <InfoBlock title="دلایل رایج رد شدن درخواست ویزا">
          <CheckList items={[
            'مغایرت اطلاعات فرم آنلاین با مندرجات پاسپورت',
            'دعوتنامه‌ی نامعتبر یا صادرشده از منبع فاقد مجوز',
            'اعتبار ناکافی پاسپورت (کمتر از ۶ ماه از تاریخ ورود) یا نبود صفحه‌ی خالی کافی',
            'بیمه‌ی مسافرتی با پوشش کمتر از حداقل الزامی',
            'سابقه‌ی مشکل در ویزاهای قبلی روسیه یا شینگن (بسته به ارزیابی کنسولگری)',
          ]} />
          <p className="text-xs text-foreground/50 mt-3">این موارد بر اساس رایج‌ترین دلایل مشاهده‌شده است و تصمیم نهایی همیشه با کنسولگری روسیه است؛ کاسپین در آماده‌سازی صحیح مدارک کمک می‌کند تا این ریسک‌ها به حداقل برسد.</p>
        </InfoBlock>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-panel rounded-2xl p-6 mb-6 text-center">
          <h2 className="text-lg font-black text-foreground mb-2">آماده‌اید درخواست ویزای توریستی روسیه را ثبت کنید؟</h2>
          <p className="text-sm text-foreground/60 mb-4">همین حالا با کارشناسان کاسپین در واتساپ صحبت کنید و مسیر eVisa یا ویزای سفارت را متناسب با برنامه‌ی سفرتان انتخاب کنید.</p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-sm font-bold">
            درخواست ویزای روسیه در واتساپ
          </a>
        </motion.div>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Do Iranians Need a Visa to Travel to Russia?">
          <p>Yes. Despite the strong Iran–Russia diplomatic relationship, this does not translate into visa-free travel. Two routes are available — and choosing the right one can make a real difference in cost and time.</p>
        </InfoBlock>

        <InfoBlock title="Two Routes: eVisa vs. Embassy Sticker Visa">
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-primary/15"><th className="p-2 text-left border border-white/10">Feature</th><th className="p-2 text-center border border-white/10">eVisa</th><th className="p-2 text-center border border-white/10">Embassy Sticker</th></tr>
              </thead>
              <tbody className="text-foreground/70">
                {[['Processing','4 business days','5–10 business days'],['Max stay','16 days','30 days'],['Invitation needed?','❌ No','✅ Required'],['Embassy visit?','❌ Not required','✅ Required (biometrics)'],['Good for','Short trips, first-time','Longer stays, multiple entry']].map(([f,e,s])=>(
                  <tr key={f} className="border-b border-white/5"><td className="p-2 border border-white/8 font-medium text-foreground/80">{f}</td><td className="p-2 border border-white/8 text-center">{e}</td><td className="p-2 border border-white/8 text-center">{s}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoBlock>

        <InfoBlock title="Russia eVisa for Iranians">
          <p className="mb-3">Russia's eVisa is the easiest route for short visits — no invitation letter required, no embassy visit. Apply online at the official MFA portal (electronic-visa.kdmid.ru), upload a white-background digital photo, pay the fee, and receive your eVisa by email within 4 business days.</p>
          <p className="text-xs text-foreground/50">⚠️ eVisa is only accepted at designated border crossings and airports (incl. Moscow Sheremetyevo & Domodedovo, St. Petersburg Pulkovo). Verify the allowed entry points before booking your flight.</p>
        </InfoBlock>

        <InfoBlock title="Embassy Sticker Visa from Yerevan">
          <CheckList items={[
            'Passport valid for 6+ months from entry, with 2+ blank pages',
            'Official invitation letter (voucher) — arranged by Caspian Group',
            'Completed visa application form (Russian MFA portal)',
            'One biometric photo on a white background',
            'Travel insurance with €30,000+ medical coverage',
            'For business visa: invitation letter from a Russian partner company',
          ]} />
        </InfoBlock>

        <InfoBlock title="Top Attractions in Russia">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Moscow</h3>
          <p className="mb-3">Red Square, the Kremlin, Saint Basil's Cathedral, the Russian History Museum, stunningly decorated Metro stations, and the GUM department store. Prices at hotels are lower on weekdays.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Saint Petersburg</h3>
          <p>The Hermitage Museum (3 million artworks), Winter Palace, Church of the Saviour on Spilled Blood, Mariinsky Theatre, and Peterhof Palace with its golden cascades. The White Nights of summer (May–July) are unforgettable.</p>
        </InfoBlock>

        <InfoBlock title="Important Notes Before Applying">
          <CheckList items={[
            'The Gosuslugi form must match your passport exactly — any discrepancy can cause delays',
            'Biometrics (fingerprints) are mandatory and must be done in person at the embassy',
            'Russian visas are non-extendable — match the visa duration to your actual stay',
            'Every family member, including children, needs a separate invitation letter and form',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Нужна ли иранцам виза для поездки в Россию?">
          <p>Да. Несмотря на тёплые отношения между Ираном и Россией, безвизового въезда нет. Доступны два способа — и правильный выбор может сэкономить время и деньги.</p>
        </InfoBlock>

        <InfoBlock title="Сравнение: eVisa vs. стикерная виза посольства">
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-primary/15"><th className="p-2 text-right border border-white/10">Параметр</th><th className="p-2 text-center border border-white/10">eVisa</th><th className="p-2 text-center border border-white/10">Посольство</th></tr>
              </thead>
              <tbody className="text-foreground/70">
                {[['Срок','4 рабочих дня','5–10 рабочих дней'],['Макс. пребывание','16 дней','30 дней'],['Нужно приглашение?','❌ Нет','✅ Да'],['Визит в посольство?','❌ Нет','✅ Да (биометрия)']].map(([f,e,s])=>(
                  <tr key={f} className="border-b border-white/5"><td className="p-2 border border-white/8 font-medium">{f}</td><td className="p-2 border border-white/8 text-center">{e}</td><td className="p-2 border border-white/8 text-center">{s}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoBlock>

        <InfoBlock title="eVisa России для иранцев">
          <p>Оформляется онлайн на портале МИД России, фото на белом фоне, срок — 4 рабочих дня. Принимается только в ряде аэропортов и погранпереходов: Москва (Шереметьево, Домодедово), Санкт-Петербург (Пулково) и другие.</p>
        </InfoBlock>

        <InfoBlock title="Документы для стикерной визы">
          <CheckList items={[
            'Паспорт (минимум 6 мес. действия, 2 чистые страницы)',
            'Официальное приглашение — оформляется через Caspian Group',
            'Анкета на визу (портал МИД)',
            'Фото биометрического формата',
            'Медстраховка на сумму от 30 000 €',
          ]} />
        </InfoBlock>

        <InfoBlock title="Достопримечательности России">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Москва</h3>
          <p className="mb-2">Красная площадь, Кремль, Собор Василия Блаженного, исторические станции метро, ГУМ.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Санкт-Петербург</h3>
          <p>Эрмитаж, Зимний дворец, Спас-на-Крови, Мариинский театр, Петергоф. Белые ночи (май–июль) — незабываемое явление.</p>
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
