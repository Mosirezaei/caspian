import WineFactoryTour from '@/views/travel/WineFactoryTour';
import JsonLd from '@/components/shared/JsonLd';
import { WHATSAPP_BOOKING } from '@/lib/contact';

export const metadata = {
  title: 'تور کارخانه شراب ارمنستان | بازدید از تاکستان‌های آرنی | کاسپین',
  description: 'تور بازدید از کارخانه‌های شراب‌سازی ارمنستان از ایروان؛ تجربه تاکستان‌های آرنی، تاریخ ۶۰۰۰ ساله شراب و تست شراب‌های ارمنی با پکیج‌های متنوع.',
  keywords: 'تور کارخانه شراب ارمنستان, تور شراب ارمنی, بازدید تاکستان آرنی, تست شراب ارمنستان, تور آرنی از ایروان, گردشگری غذایی ارمنستان',
  alternates: { canonical: 'https://caspian.am/travel/tour/wine-factory-tour' },
  openGraph: {
    title: 'تور کارخانه شراب ارمنستان | تجربه تاکستان‌های آرنی',
    description: 'سفری فرهنگی و خوش‌طعم به قدیمی‌ترین خاستگاه شراب جهان، همراه با ترانسفر و تست شراب ارمنی.',
    url: 'https://caspian.am/travel/tour/wine-factory-tour',
    images: [{ url: 'https://unsplash.com/photos/S4c5HHJqCOo/download?force=true&w=1600', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org', '@type': 'TouristTrip',
  name: 'تور بازدید از کارخانه‌های شراب‌سازی ارمنستان',
  description: 'تور فرهنگی و گردشگری غذایی از ایروان به تاکستان‌ها و کارخانه‌های شراب‌سازی منطقه آرنی.',
  provider: { '@type': 'Organization', name: 'Caspian Group Armenia', url: 'https://caspian.am', telephone: `+${WHATSAPP_BOOKING}` },
  touristType: ['Food Tourism', 'Cultural Tourism', 'Wine Tourism'],
  url: 'https://caspian.am/travel/tour/wine-factory-tour',
  image: 'https://unsplash.com/photos/S4c5HHJqCOo/download?force=true&w=1600',
};

export default function Page() { return <><JsonLd data={schema} /><WineFactoryTour /></>; }
