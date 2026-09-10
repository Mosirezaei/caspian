import Exchange from '@/views/travel/Exchange';

export const metadata = {
  title: 'صرافی کاسپین در ایروان | حواله و خدمات ارزی در ارمنستان',
  description: 'خدمات ارزی کاسپین در ایروان: پرداخت نقدی، واریز و دریافت حسابی، تسویه تتر، پرداخت دانشگاهی و بررسی درخواست‌های بین‌المللی.',
  keywords: 'صرافی ایروان, صرافی کاسپین, حواله ارمنستان, تبدیل ارز ارمنستان, نرخ دلار درام یورو پوند, تتر در ایروان, پرداخت دانشگاه ارمنستان',
  alternates: { canonical: 'https://caspian.am/travel/exchange' },
  openGraph: {
    title: 'صرافی کاسپین در ایروان | خدمات ارزی در ارمنستان',
    description: 'پرداخت نقدی، واریز و دریافت حسابی و هماهنگی خدمات ارزی در ایروان.',
    url: 'https://caspian.am/travel/exchange',
    images: [{ url: 'https://images.unsplash.com/photo-1629339938591-ec5e73815e47?w=1200&q=80', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'صرافی ارزی کاسپین',
            description: 'خدمات ارزی، هماهنگی پرداخت و حواله برای ایرانیان در ارمنستان',
            provider: {
              '@type': 'Organization',
              name: 'Caspian Business Group',
              url: 'https://caspian.am',
              telephone: '+37433149327',
            },
            areaServed: {
              '@type': 'City',
              name: 'Yerevan',
              containedInPlace: { '@type': 'Country', name: 'Armenia' },
            },
          }),
        }}
      />
      <Exchange />
    </>
  );
}
