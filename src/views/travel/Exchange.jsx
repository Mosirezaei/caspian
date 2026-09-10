'use client';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import CurrencyTicker from '@/components/shared/CurrencyTicker';
import CurrencyRatesTable from '@/components/shared/CurrencyRatesTable';

const services = [
  ['💶', 'پرداخت نقدی', 'هماهنگی تحویل نقدی دلار، یورو، پوند یا درام در ایروان، پس از تأیید درخواست.'],
  ['🏦', 'واریز حسابی', 'هماهنگی پرداخت به حساب‌های شخصی یا شرکتی با ثبت جزئیات و رسید مرحلهٔ پرداخت.'],
  ['📥', 'دریافت حسابی', 'بررسی دریافت وجه از حساب‌های اعلام‌شده و انتخاب روش تسویه متناسب با درخواست شما.'],
  ['🎓', 'شهریه و پرداخت دانشگاهی', 'هماهنگی پرداخت شهریه، دیپوزیت و هزینه‌های ثبت‌نام مراکز آموزشی در ارمنستان.'],
  ['🏢', 'حوالهٔ شرکتی', 'برای پرداخت‌های تجاری، اطلاعات شرکت، مقصد و نوع پرداخت پیش از شروع بررسی می‌شود.'],
  ['₮', 'تسویه با تتر', 'امکان بررسی تسویه با USDT برای پرداخت نقدی یا حواله، با هماهنگی شبکه و جزئیات تراکنش.'],
  ['🌐', 'درخواست پرداخت بین‌المللی', 'برای پرداخت یا دریافت خارج از ارمنستان، مقصد و روش را در واتساپ بفرستید تا امکان انجام بررسی شود.'],
  ['💳', 'وسترن یونیون و مانی‌گرام', 'درخواست ارسال یا دریافت از طریق شبکه‌های بین‌المللی، پس از بررسی مقصد و شرایط روز.'],
  ['🇮🇷', 'انتقال پول به ایران', 'هماهنگی تسویه در ایران بر اساس روش پرداخت، مبلغ و زمان‌بندی مورد تأیید طرفین.'],
];

function ExchangeContent() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  const handleWhatsApp = () => {
    const text = 'سلام، برای استعلام نرخ لحظه‌ای و خدمات ارزی کاسپین در ارمنستان پیام دادم.';
    window.open(`https://wa.me/37433149327?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <ServicePageLayout
      titleFa="حواله و خدمات ارزی کاسپین در ارمنستان" titleEn="Caspian Currency Services in Armenia" titleRu="Валютные услуги Caspian в Армении"
      subtitleFa="پرداخت نقدی، واریز و دریافت حسابی و خدمات ارزی در ایروان؛ با هماهنگی و بررسی هر درخواست"
      subtitleEn="Cash, account payment and currency services in Yerevan, arranged after review of each request"
      subtitleRu="Наличные, банковские платежи и валютные услуги в Ереване после проверки каждого запроса"
      heroImage="https://images.unsplash.com/photo-1629339938591-ec5e73815e47?w=1200&q=80"
      serviceType="exchange"
    >
      <CurrencyTicker />
      <CurrencyRatesTable />

      {isFa && <>
        <InfoBlock title="خدمات ارزی از ارمنستان، با پاسخ‌گویی روشن">
          <p>ارمنستان برای بسیاری از ایرانیان مقصد تحصیل، درمان، تجارت و زندگی است. کاسپین در ایروان برای پرداخت نقدی دلار، یورو، پوند و درام، و همچنین هماهنگی واریز یا دریافت حسابی، همراه شماست. برای هر درخواست، ابتدا مقصد، روش پرداخت و مدارک لازم بررسی می‌شود تا مسیر مناسب و نرخ قابل اجرا پیش از شروع روشن باشد.</p>
        </InfoBlock>

        <section className="mb-10">
          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <p className="text-xs font-bold text-primary mb-1">خدمات کاسپین در ایروان</p>
              <h2 className="text-2xl font-black text-foreground">راه‌حل مناسب برای هر درخواست ارزی</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(([icon, title, description]) => (
              <article key={title} className="glass-panel rounded-2xl border border-primary/15 p-5 hover:border-primary/40 transition-colors">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-primary/10 text-2xl mb-4">{icon}</span>
                <h3 className="font-black text-foreground mb-2">{title}</h3>
                <p className="text-sm leading-7 text-foreground/65">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <InfoBlock title="مراحل همکاری">
          <ol className="space-y-4 text-foreground/75 leading-7">
            <li><strong className="text-foreground">۱. درخواست در واتساپ:</strong> مبلغ، شهر، نوع ارز و نقدی یا حسابی بودن درخواست را بفرستید تا امکان انجام و نرخ همان زمان بررسی شود.</li>
            <li><strong className="text-foreground">۲. بررسی اطلاعات:</strong> برای درخواست‌های لازم، احراز هویت و اطلاعات مقصد طبق نوع خدمت دریافت می‌شود.</li>
            <li><strong className="text-foreground">۳. تأیید روش و تسویه:</strong> روش تسویه، هزینه‌های احتمالی و زمان‌بندی پیش از شروع شفاف اعلام می‌شود.</li>
            <li><strong className="text-foreground">۴. پرداخت و رسید:</strong> پس از هماهنگی، پرداخت انجام و جزئیات یا رسید قابل ارائه در اختیار شما قرار می‌گیرد.</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="چرا کاسپین؟">
          <CheckList items={[
            'پاسخ‌گویی فارسی‌زبان در ایروان و بررسی هر درخواست پیش از شروع',
            'اعلام شفاف روش تسویه و شرایط همان درخواست، پیش از پرداخت',
            'هماهنگی خدمات نقدی، حسابی، دانشجویی و تجاری در یک نقطه تماس',
            'پیگیری وضعیت پرداخت تا پایان مرحلهٔ توافق‌شده',
          ]} />
        </InfoBlock>

        <InfoBlock title="پرسش‌های متداول">
          <div className="space-y-4 text-foreground/70 leading-7">
            <p><strong className="text-foreground">کدام ارزها در صفحه نرخ دارند؟</strong><br />دلار آمریکا، یورو، پوند انگلیس و درام ارمنستان. سایر ارزها با استعلام پیش از ثبت درخواست بررسی می‌شوند.</p>
            <p><strong className="text-foreground">برای پرداخت خارج از ارمنستان چه کار کنم؟</strong><br />در واتساپ مبلغ، ارز و مقصد را بفرستید تا امکان انجام، روش و مدارک لازم بررسی شود.</p>
            <p><strong className="text-foreground">آیا نرخ نمایش‌داده‌شده نرخ نهایی حواله است؟</strong><br />خیر. نرخ‌های صفحه مرجع بازار آزاد ایران هستند؛ نرخ نهایی با توجه به روش تسویه و جزئیات درخواست اعلام می‌شود.</p>
            <p><strong className="text-foreground">کارمزد چگونه مشخص می‌شود؟</strong><br />کارمزد احتمالی به مبلغ، روش پرداخت و مقصد وابسته است و پیش از تأیید نهایی اعلام می‌شود.</p>
          </div>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Currency Services Based in Armenia"><p>Caspian coordinates cash, account-payment and settlement requests in Yerevan. The destination, payment method and required details are reviewed before a rate or timeline is confirmed.</p></InfoBlock>
        <InfoBlock title="How It Works"><CheckList items={['Send the amount, currency and preferred method on WhatsApp', 'We review the request and any required details', 'The available method and terms are confirmed before payment', 'Payment details or a receipt are shared after coordination']} /></InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Валютные услуги в Армении"><p>Caspian координирует наличные, банковские платежи и расчёты в Ереване. Перед подтверждением курса или срока мы проверяем направление, способ оплаты и необходимые данные.</p></InfoBlock>
        <InfoBlock title="Как проходит работа"><CheckList items={['Отправьте сумму, валюту и предпочтительный способ в WhatsApp', 'Мы проверим запрос и необходимые данные', 'Способ и условия подтверждаются до оплаты', 'После координации предоставляются детали платежа или подтверждение']} /></InfoBlock>
      </>}

      <div className="glass-panel p-6 rounded-2xl border border-primary/30 mb-10 bg-black/40 backdrop-blur-md text-center">
        <p className="text-sm text-foreground/70 mb-4">
          {isFa ? 'برای استعلام نرخ نهایی، خدمات نقدی یا درخواست پرداخت بین‌المللی، در واتساپ پیام بدهید.' :
            isRu ? 'Напишите в WhatsApp, чтобы уточнить курс, наличный расчёт или международный платёж.' :
            'Message us on WhatsApp to confirm a rate, cash service or an international payment request.'}
        </p>
        <button onClick={handleWhatsApp} className="py-4 px-8 bg-primary text-black font-black rounded-xl hover:bg-yellow-500">
          {isFa ? 'گفت‌وگو در واتساپ' : isRu ? 'Написать в WhatsApp' : 'Message on WhatsApp'}
        </button>
      </div>
    </ServicePageLayout>
  );
}

export default ExchangeContent;
