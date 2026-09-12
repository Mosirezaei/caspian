'use client';
import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import TourInquiryWidget from '@/components/shared/TourInquiryWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

export default function DilijanTour() {
  useSEO({
    title: 'تور یک‌روزه بهشتی دیلیجان، سوئیس سرسبز ارمنستان | گروه کاسپین',
    description: 'تور یک‌روزه دیلیجان: صومعه هاغارتسین، صومعه گشاوانک، دریاچه پارز و بافت تاریخی چوبی شارامبیان، با ترانسفر، راهنمای فارسی و ناهار کامل.',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src="/images/tourism/dilijan.webp"
            alt="جنگل‌های سرسبز دیلیجان، سوئیس ارمنستان"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">
              تور یک‌روزه بهشتی دیلیجان، سوئیس سرسبز ارمنستان
            </h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">
              فرار به دل جنگل‌های مه‌آلود، تنفس در پاک‌ترین هوای کوهستانی و کشف صومعه‌های کهن پنهان‌شده میان درختان سرسبز قفقاز
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">

              {/* === متن تبلیغاتی ارسالی کاربر — دست‌نخورده === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">
                  🌲 تور یک‌روزه بهشتی دیلیجان؛ سوئیس سرسبز ارمنستان 🏞️✨
                  <br /><br />
                  فرار به دل جنگل‌های مه‌آلود، تنفس در پاک‌ترین هوای کوهستانی، قدم‌زدن در بافت تاریخی چوبی و کشف صومعه‌های کهن پنهان‌شده در میان درختان سرسبز قفقاز! 😍🕊️
                </p>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🌸 جاهایی که با هم می‌بینیم:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🌲 <b>پارک ملی دیلیجان:</b> گذر از دل دالان‌های جنگلی و دره‌های سرسبز با آب‌وهوای کوهستانی و چشمه‌های آب معدنی 🌿🌤️</li>
                  <li>🏡 <b>خیابان تاریخی شارامبیان (بافت قدیم دیلیجان):</b> قدم‌زدن در کوچه سنگ‌فرش قرن نوزدهم با خانه‌های چوبی منحصربه‌فرد، بالکن‌های مشبک و کارگاه‌های سفال و چوب‌تراشی 🪵🎨</li>
                  <li>⛪ <b>صومعه تاریخی هاغارتسین (Haghartsin):</b> شاهکار قرن دهم تا سیزدهم با کلیساها و سالن ناهارخوری سنگی شگفت‌انگیز در احاطه جنگل بلوط 🏰🕯️</li>
                  <li>⛪ <b>صومعه گشاوانک (Goshavank):</b> مرکز علمی و حقوقی قرن دوازدهم ارمنستان و جایگاه زیباترین و ظریف‌ترین خاچکار (سنگ‌صلیب) جهان با نام سوزنی‌دوزی‌شده 📜🪨</li>
                  <li>🌊 <b>دریاچه آرام پارز (Parz Lich):</b> دریاچه‌ای زمردین در میان درختان انبوه جنگل؛ مناسب قایق‌سواری، زیپ‌لاین و ثبت عکس‌های رویایی 🚣‍♀️📸</li>
                </ul>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍽️ خدمات تور:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🚐 ترانسفر رفت و برگشت توریستی، راحت، کولردار و مجهز</li>
                  <li>🗣️ راهنمای مجرب، پرانرژی و مسلط (بیان تاریخ صومعه‌ها و ناگفته‌های منطقه)</li>
                  <li>🍱 صرف ناهار کامل و لذیذ در باغ‌رستوران‌های باصفای دل جنگل با طعم کباب و خوراک‌های بومی 🍲🥗</li>
                  <li>☕ بیمه مسافرتی و پذیرایی در طول مسیر</li>
                </ul>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> زمان‌بندی</p>
                    <p className="font-bold text-foreground">حرکت ۰۹:۰۰ صبح — بازگشت حدود ۱۹:۳۰ عصر</p>
                    <p className="text-xs text-foreground/50 mt-1">شروع از ایروان</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1">📍 مقصد</p>
                    <p className="font-bold text-foreground">دیلیجان، استان تاووش</p>
                    <p className="text-xs text-foreground/50 mt-1">سوئیس کوچک ارمنستان</p>
                  </div>
                </div>

                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2">
                  <Backpack className="w-5 h-5" /> چی همراه داشته باشیم؟
                </h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed">
                  <li>👟 کفش پیاده‌روی راحت و آج‌دار برای مسیرهای جنگلی و سنگ‌فرش صومعه‌ها</li>
                  <li>🧥 یک ژاکت سبک، سویشرت یا بادگیر (هوای دیلیجان به دلیل جنگلی و کوهستانی بودن خنک‌تر از ایروان است)</li>
                  <li>☔ چتر سبک یا پانچو بارانی (احتمال بارش باران‌های بهاری و تابستانی در منطقه جنگلی)</li>
                  <li>🕶️🧴 عینک آفتابی و کرم ضدآفتاب</li>
                  <li>📸🔋 گوشی و دوربین پر از شارژ برای ثبت زیباترین قاب‌های کارت‌پستالی از طبیعت سبز!</li>
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <span>✨ برای اطلاعات بیشتر، قیمت تور و ثبت‌نام سریع، همین حالا پیام بده یا با ما تماس بگیر! ظرفیت هر اجرا محدود است. 📲</span>
                </div>
              </section>

              {/* === مقاله‌ی کامل درباره‌ی دیلیجان === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-foreground mb-4">درباره‌ی شهر جنگلی دیلیجان (سوئیس ارمنستان)</h2>
                <div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base">
                  <p>
                    شهر دیلیجان (Dilijan)، واقع در استان تاووش در شمال ارمنستان و در فاصله حدود ۱۰۰ کیلومتری از ایروان، یکی از مهم‌ترین مناطق اییلاقی، تفریحی و درمانی قفقاز به شمار می‌رود. این منطقه به سبب دره‌های پوشیده از جنگل‌های انبوه، هوای پاک آکنده از عطر کاج و بلوط، چشمه‌های آب معدنی گازدار و شباهت چشم‌اندازهای طبیعیش به رشته‌کوه‌های آلپ، لقب سوئیس کوچک ارمنستان را به خود اختصاص داده است. دیلیجان علاوه بر جاذبه‌های اکوتوریسمی، گنجینه‌ای ارزشمند از تاریخ، هنر و میراث معماری قرون‌وسطایی ارمنستان را در دل خود جای داده است.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۱. اکوسیستم و ویژگی‌های اقلیمی پارک ملی دیلیجان</h3>
                  <p>
                    پارک ملی دیلیجان یکی از چهار ذخیره‌گاه طبیعی حفاظت‌شده ارمنستان است که بیش از ۲۴ هزار هکتار از دامنه‌های سرسبز رشته‌کوه‌های پامباک و ایجوان را پوشش می‌دهد. موقعیت کوهستانی و وجود توده‌های جنگلی گسترده سبب شده تا آب‌وهوای دیلیجان رطوبت معتدل، تابستان‌هایی خنک و زمستان‌هایی ملایم داشته باشد. این شهر در دوران شوروی به عنوان یک استراحتگاه درمانی برای بیماران تنفسی و ریوی انتخاب شد. همچنین چشمه‌های طبیعی آب معدنی دیلیجان به دلیل دارا بودن املاح مفید هیدروکربنات و سدیم، در سراسر منطقه شهرت تجاری دارند.
                  </p>
                  <p>
                    جنگل‌های راش، بلوط، ممرز و کاج بخش اعظم ارتفاعات را پوشانده‌اند و دشت‌های آلپی در ارتفاعات بالاتر چشم‌اندازی مخملی خلق کرده‌اند. این پارک ملی زیستگاه جانورانی نظیر خرس قهوه‌ای قفقازی، شوکا، سیاه‌گوش و گونه‌های متعددی از پرندگان شکاری است.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۲. بافت تاریخی و معماری بومی دیلیجان (خیابان شارامبیان)</h3>
                  <p>
                    دیلیجان در سده نوزدهم به عنوان مقصدی محبوب برای تعطیلات تابستانی نخبگان، نویسندگان، نقاشان و آهنگسازان امپراتوری روسیه و قفقاز (از جمله شوستاکوویچ و بنجامین بریتن) شهرت یافت. برخلاف ایروان و گیومری که با سنگ‌های توف تیره و اخرایی شناخته می‌شوند، هویت معماری دیلیجان پیوند عمیقی با چوب دارد. خانه‌های تاریخی این شهر معمولاً دارای طبقه‌ای همکف از سنگ لاشه و طبقه‌ای فوقانی با دیوارهای سفید و بالکن‌های بزرگ چوبی پیش‌آمده با تزئینات منبت‌کاری ظریف، پنجره‌های قوسی و سقف‌های شیروانی سفالی هستند.
                  </p>
                  <p>
                    خیابان سنگ‌فرش‌شده شارامبیان به عنوان قلب تاریخی دیلیجان بازسازی شده و به موزه‌ای روباز بدل گشته است. در این گذر تاریخی، کارگاه‌های سنتی بافت فرش قفقازی، نجاری، سفال‌گری و استودیوهای نقاشی فعال هستند و گردشگران می‌توانند مراحل خلق آثار هنری دستی را از نزدیک مشاهده کنند.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۳. صومعه هاغارتسین (Haghartsin Monastery)</h3>
                  <p>
                    صومعه هاغارتسین پنهان‌شده در انتهای دره‌ای پوشیده از جنگل‌های متراکم در ۱۲ کیلومتری شمال دیلیجان، یکی از برجسته‌ترین نمونه‌های معماری کلیسایی سده‌های ۱۰ تا ۱۳ میلادی است. نام هاغارتسین در زبان کهن ارمنی به معنای «بازی یا پرواز عقاب‌ها» است؛ برگرفته از این باور که در زمان گشایش کلیسا، عقابی بر فراز گنبد اصلی به پرواز درآمده و به عنوان نماد روح‌القدس تعبیر شده است.
                  </p>
                  <p>
                    این صومعه از سه کلیسای اصلی تشکیل شده: کلیسای سنت گریگور (قرن ۱۰) با گنبدی هشت‌ضلعی؛ کلیسای سنت استپانوس (قرن ۱۲) از سنگ گرانیت آبی‌رنگ؛ و کلیسای جامع مریم مقدس (آستواتساتسین، قرن ۱۳)، باشکوه‌ترین بنا با گنبدی بلند و نقش‌برجسته‌هایی از دو معمار و متولی بنا. تالار ناهارخوری سلطنتی (رفکتوری) که در سال ۱۲۴۸ میلادی توسط معمار «میناس» بنا شد، نمونه‌ای شگفت‌انگیز از مهندسی طاق و تویزه قرون وسطی است — دو ستون قطور سنگی بار طاق‌های متقاطع این تالار بزرگ را تحمل می‌کنند و فضایی بدون ستون‌های مزاحم با آکوستیک فوق‌العاده ایجاد کرده‌اند. در محوطه صومعه، تنه به جای مانده از درخت بلوطی با قدمت تخمینی بیش از ۸۰۰ سال هم دیدنی‌ست.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۴. صومعه گشاوانک (Goshavank Monastery)</h3>
                  <p>
                    صومعه گشاوانک در دره‌ای موازی و در روستای گَش قرار دارد و نه‌تنها یک مکان مذهبی، بلکه یکی از بزرگ‌ترین مراکز آموزشی، دانشگاهی و حقوقی ارمنستان در قرون وسطی به شمار می‌رفت. این مرکز توسط دانشمند، فیلسوف و حقوق‌دان برجسته ارمنی، مخیتار گَش (نویسنده نخستین قانون‌نامه مدنی و کیفری ارمنستان)، در اواخر قرن دوازدهم و با حمایت شاهزادگان خاندان زاکاریان پایه‌گذاری شد.
                  </p>
                  <p>
                    گشاوانک میزبان یکی از شاهکارهای بی‌بدیل تاریخ سنگ‌تراشی جهان است: خاچکاری که توسط استادکاری به نام «پوغروس» در سال ۱۲۹۱ میلادی تراشیده شد، چنان جزئیات هندسی ریز و ظریفی از خطوط متقاطع، گل‌ها و ستاره‌ها بر روی سنگ توف دارد که به آن «خاچکار سوزن‌دوزی یا توری» می‌گویند؛ اثری که به سختی می‌توان باور کرد بدون ماشین‌آلات مدرن و صرفاً با قلم و چکش خلق شده باشد.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۵. دریاچه پارز (Parz Lich)</h3>
                  <p>
                    دریاچه پارز (در زبان ارمنی به معنای «دریاچه زلال یا شفاف») در عمق پارک ملی دیلیجان و در ارتفاع حدود ۱،۳۳۰ متری از سطح دریا واقع شده است. این دریاچه بر اثر رانش زمین و مسدود شدن آبراهه‌ای کوهستانی تشکیل شده؛ درختان انبوه تا لبه آب پیش آمده‌اند و بازتاب تصویر جنگل بر سطح آرام دریاچه، رنگ سبز زمردین خیره‌کننده‌ای به آن بخشیده است. دریاچه پارز مقصدی عالی برای پیاده‌روی در مسیرهای تندرستی، قایق‌سواری پدالی در سکوت آب، تجربه زیپ‌لاین معلق بر فراز سطح آب و کمپینگ در دل طبیعت پاک قفقاز به حساب می‌آید.
                  </p>
                </div>
              </section>

              <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent border border-primary/25">
                <h3 className="text-lg font-black text-foreground mb-2">همین حالا استعلام قیمت بگیر</h3>
                <p className="text-sm text-foreground/60 mb-5">قیمت این تور فعلاً روی سایت اعلام نشده — فرم زیر رو پر کن تا همون لحظه در واتساپ قیمت دقیق بگیری</p>
                <TourInquiryWidget tourName="تور دیلیجان" />
              </div>

              <WhatsAppBottomCTA serviceType="tour" />

            </article>

            <PageSidebar tags={['tourism', 'dilijan', 'armenia', 'tour']} serviceType="tour" />
          </div>

          <div className="mt-10">
            <RelatedServices pageType="tour" />
            <RelatedContent currentTags={['tourism', 'dilijan', 'armenia']} currentPath="/travel/tour/dilijan" />
          </div>
        </div>
      </div>
    </div>
  );
}
