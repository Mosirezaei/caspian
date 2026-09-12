'use client';
import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import TourBookingWidget from '@/components/shared/TourBookingWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

export default function GarniGeghardTour() {
  useSEO({
    title: 'تور یک‌روزه گارنی، گغارد و سمفونی سنگ‌ها | گروه کاسپین',
    description: 'تور یک‌روزه معبد گارنی، صومعه صخره‌ای گغارد (میراث یونسکو) و سمفونی سنگ‌ها، با پخت نان سنتی لواش، ترانسفر، راهنمای فارسی و ناهار کامل — فقط ۱۵,۰۰۰ درام.',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1629761905941-a3801e2874e2?w=1600&q=80"
            alt="معبد باستانی گارنی و صومعه صخره‌ای گغارد، ارمنستان"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">
              تور یک‌روزه جادویی گارنی، گغارد و سمفونی سنگ‌ها
            </h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">
              سفری به اعماق تاریخ کهن و شگفتی‌های زمین‌شناسی ارمنستان؛ از تنها معبد هلنیستی قفقاز تا صومعه تراشیده‌شده در دل صخره‌ها
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">

              {/* === متن تبلیغاتی ارسالی کاربر — دست‌نخورده === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">
                  🏛️ تور یک‌روزه جادویی گارنی، گغارد و سمفونی سنگ‌ها ⛰️✨
                  <br /><br />
                  سفری به اعماق تاریخ کهن و شگفتی‌های زمین‌شناسی ارمنستان؛ از تنها معبد هلنیستی قفقاز تا صومعه تراشیده‌شده در دل صخره‌ها! 😍📜
                </p>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🌸 جاهایی که با هم می‌بینیم:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🏛️ <b>معبد باستانی گارنی:</b> تنها معبد بازمانده دوران پاگانیسم (مهرپرستی و یونانی-رومی) با ۲۴ ستون باشکوه بر لبه دره رود آزات ☀️🌿</li>
                  <li>⛪ <b>صومعه صخره‌ای گغارد (میراث جهانی یونسکو):</b> شاهکار معماری قرون‌وسطی تراشیده‌شده در دل کوه با آکوستیک صوتی حیرت‌انگیز 🏔️🕯️</li>
                  <li>🎶 <b>سمفونی سنگ‌ها (دره گارنی):</b> ستون‌های شگفت‌انگیز بازالتی و منشورهای طبیعی شبیه لوله‌های ارگ کلیسا 🎻🪨</li>
                  <li>🍞 <b>تجربه پخت نان سنتی لواش:</b> آشنایی با سنت پخت نان در تنور زمینی (ثبت‌شده در فهرست یونسکو) 🥖🔥</li>
                </ul>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍽️ خدمات تور:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🚐 ترانسفر رفت و برگشت با خودروهای توریستی مجهز و راحت</li>
                  <li>🗣️ راهنمای مسلط و باتجربه (روایت ناگفته‌های باستانی و اساطیری)</li>
                  <li>🍱 صرف ناهار کامل و اصیل ارمنی در باغ‌رستوران‌های باصفای روستای گارنی 🥗🍖</li>
                  <li>🎟️ پوشش ورودیه‌ها و بیمه مسافرتی</li>
                </ul>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1">💰 هزینه تور</p>
                    <p className="font-bold text-foreground">فقط ۱۵,۰۰۰ درام به ازای هر نفر</p>
                    <p className="text-xs text-foreground/50 mt-1">شامل ترانسفر + راهنما + گشت کامل + ناهار کامل 🌟</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> زمان‌بندی</p>
                    <p className="font-bold text-foreground">حرکت ۱۰:۰۰ صبح — بازگشت حدود ۱۷:۰۰ بعدازظهر</p>
                    <p className="text-xs text-foreground/50 mt-1">شروع از ایروان</p>
                  </div>
                </div>

                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2">
                  <Backpack className="w-5 h-5" /> وسایل پیشنهادی
                </h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed">
                  <li>👟 کفش پیاده‌روی مناسب برای سنگ‌فرش‌ها و مسیر دره سمفونی</li>
                  <li>🕶️🧢 عینک آفتابی، کلاه آفتاب‌گیر و ضدآفتاب</li>
                  <li>🧣 لباس مناسب برای ورود به فضای معنوی صومعه</li>
                  <li>📸🔋 گوشی و دوربین پر از شارژ برای ثبت عکس‌های بی‌نظیر صخره‌ای!</li>
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <span>✨ برای اطلاعات بیشتر و ثبت‌نام سریع، همین حالا پیام بده یا با ما تماس بگیر! ظرفیت هر اجرا محدود است. 📲</span>
                </div>

                <div className="mt-5">
                  <TourBookingWidget tourName="تور گارنی، گغارد و سمفونی سنگ‌ها" adultPrice={15000} childPrice={12000} />
                </div>
              </section>

              {/* === مقاله‌ی کامل درباره‌ی گارنی، گغارد و سمفونی سنگ‌ها === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-foreground mb-4">راهنمای کامل جاذبه‌های مسیر گارنی و گغارد</h2>
                <div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base">
                  <p>
                    استان کوتایک ارمنستان به دلیل نزدیکی به پایتخت و دارا بودن مجموعه‌ای کم‌نظیر از آثار باستانی پیش از مسیحیت، بناهای مقدس قرون‌وسطایی و پدیده‌های ژئوتوریسمی، یکی از مهم‌ترین محورهای گردشگری این کشور محسوب می‌شود. در ادامه با جزئیات تاریخی و ساختاری این سه مقصد بی‌نظیر آشنا می‌شوییم.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۱. معبد باستانی گارنی (Temple of Garni)</h3>
                  <p>
                    معبد گارنی در حدود ۳۰ کیلومتری شرق ایروان، بر فراز دماغه‌ای صخره‌ای و مشرف به دره عمیق رودخانه آزات جای گرفته است.
                  </p>
                  <p>
                    <b className="text-foreground">تاریخچه و کاربرد:</b> این معبد در نیمه دوم قرن اول میلادی (حدود سال ۷۷ میلادی) توسط پادشاه تیرداد اول اشکانی ساخته شد و به میهر (ایزد خورشید در باورهای کهن مهرپرستی/میترائیسم) تقدیم شده بود. پس از پذیرش مسیحیت به عنوان دین رسمی ارمنستان در سال ۳۰۱ میلادی و تخریب اکثر معابد پاگان، گارنی به دلیل موقعیت استراتژیک، آب‌وهوای ییلاقی و کاربرد آن به عنوان اقامتگاه تابستانی خاندان سلطنتی (خواهر پادشاه خسرویدوخت) از تخریب در امان ماند.
                  </p>
                  <p>
                    <b className="text-foreground">سبک معماری:</b> این سازه تنها معبد به سبک کلاسیک یونانی-رومی (هلنیستی) است که در سراسر قفقاز برپا مانده است. بنا روی سکویی با پله‌های بلند از سنگ بازالت سیاه ساخته شده و دورادور آن را ۲۴ ستون باریک یونانی از نوع یونی (Ionic) احاطه کرده‌اند که نمادی از ۲۴ ساعت شبانه‌روز هستند. سقف و دیوارهای داخلی معبد با نقش‌برجسته‌های پیچک انگور و انار تزئین شده است.
                  </p>
                  <p>
                    <b className="text-foreground">حمام رومی و کاخ سلطنتی:</b> در محوطه اطراف معبد، بقایای دژ نظامی قرن سوم پیش از میلاد و حمام سلطنتی رومی قرار دارد. بخش شگفت‌انگیز حمام، کف موزائیکی آن با سنگ‌های طبیعی رنگی است که صحنه‌هایی از اساطیر دریایی یونانی و نوشته‌ای به زبان یونانی کهن را به نمایش می‌گذارد.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1629761905941-a3801e2874e2?w=1200&q=80"
                    alt="معبد باستانی گارنی، تنها معبد هلنیستی باقی‌مانده در قفقاز"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2"
                    loading="lazy"
                  />

                  <h3 className="text-lg font-bold text-foreground mt-6">۲. صومعه گغارد (Geghard Monastery)</h3>
                  <p>
                    صومعه گغارد در انتهای دره صخره‌ای آزات قرار دارد و یکی از شکوه‌مندترین بناهای مذهبی ثبت‌شده در میراث جهانی یونسکو است.
                  </p>
                  <p>
                    <b className="text-foreground">وجه تسمیه و نیزه مقدس:</b> نام کامل این صومعه «گغارداوانک» به معنای «صومعه نیزه» است. بنا بر روایات تاریخی، نیزه‌ای که به پهلوی عیسی مسیح در زمان مصلوب شدن زده شد (نیزه مقدس یا لانگینوس)، توسط تادئوس قدیس به ارمنستان آورده شد و قرن‌ها در این صومعه نگهداری می‌شد؛ این اثر تاریخی امروزه در موزه کلیسای جامع اچمیازین قرار دارد.
                  </p>
                  <p>
                    <b className="text-foreground">معماری دست‌کند صخره‌ای:</b> بخش چشمگیری از این مجموعه شامل سالن‌های کلیسایی، مقبره‌ها و حجره‌های راهبان است که مستقیماً در دل صخره‌های گرانیتی کوه حفر و تراشیده شده‌اند. معماران قرون‌وسطایی بدون استفاده از ملات، ستون‌ها، محراب‌ها و گنبدهای سنگی را از دل کوه بیرون کشیده‌اند.
                  </p>
                  <p>
                    <b className="text-foreground">آکوستیک و ویژگی‌های صوتی:</b> در تالارهای سنگی داخلی (ژاماتون)، طراحی فضا و دریچه‌های هوایی به شکلی است که کوچک‌ترین زمزمه یا سرود روحانی صدها بار با پژواکی گوش‌نواز طنین‌انداز می‌شود. در گوشه‌ای از فضای داخلی کلیسا، چشمه‌ای مقدس از دل سنگ طبیعی می‌جوشد که زائران آب آن را متبرک می‌دانند.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۳. پدیده زمین‌شناسی سمفونی سنگ‌ها (Symphony of Stones)</h3>
                  <p>
                    در کف دره گارنی و در راستای بستر رودخانه آزات، یکی از خیره‌کننده‌ترین پدیده‌های ژئومورفولوژی دنیا موسوم به «سمفونی سنگ‌ها» شکل گرفته است.
                  </p>
                  <p>
                    <b className="text-foreground">نحوه پیدایش:</b> میلیون‌ها سال پیش، بر اثر فوران آتشفشان و ورود جریان‌های گدازه‌ای بازالت به دره و خنک شدن تدریجی آن تحت انقباض سطحی، ستون‌های چندضلعی (غالباً شش‌ضلعی و پنج‌ضلعی) بسیار منظمی پدید آمده است.
                  </p>
                  <p>
                    <b className="text-foreground">جذابیت بصری:</b> این ستون‌های متراکم سنگی که ارتفاع آن‌ها در برخی دیواره‌ها به بیش از ۵۰ متر می‌رسد، به شکلی متقارن و منظم از بالای دیواره به سمت پایین آویزان به نظر می‌رسند و شباهت شگفت‌انگیزی به لوله‌های یک ساز بادی بزرگ (ارگ کلیسا) دارند؛ به همین دلیل به عنوان نمادی طبیعی از «موسیقی منجمد در سنگ» شناخته می‌شوند.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1603872864781-798ed261b79d?w=1200&q=80"
                    alt="خاچکارها بر دیواره صومعه صخره‌ای گغارد، ارمنستان"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2"
                    loading="lazy"
                  />

                  <h3 className="text-lg font-bold text-foreground mt-6">۴. فرهنگ پخت نان لواش ارمنی</h3>
                  <p>
                    در فرهنگ سنتی این منطقه، نان لواش تنها یک خوراک روزمره نیست، بلکه نمادی از برکت، اتحاد خانواده و پیوند نسل‌هاست. خمیر نازک پهن‌شده بر بالشتک‌های مخصوص، در تنورهای سنتی گلی (تونیر) با حرارت هیزم پخته می‌شود؛ سنتی که به عنوان میراث ناملموس جهانی یونسکو ثبت شده و معمولاً در طول این تور مسافران از نزدیک شاهد مراحل سنتی پخت و طعم بی‌نظیر آن همراه با پنیر محلی و سبزیجات تازه هستند.
                  </p>
                </div>
              </section>

              <WhatsAppBottomCTA serviceType="tour" />

            </article>

            <PageSidebar tags={['tourism', 'garni', 'geghard', 'tour']} serviceType="tour" />
          </div>

          <div className="mt-10">
            <RelatedServices pageType="tour" />
            <RelatedContent currentTags={['tourism', 'garni', 'geghard', 'armenia']} currentPath="/travel/tour/garni-geghard" />
          </div>
        </div>
      </div>
    </div>
  );
}
