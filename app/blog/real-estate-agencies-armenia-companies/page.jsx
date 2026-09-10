import RealEstateAgenciesArmeniaCompanies from '@/views/blog/RealEstateAgenciesArmeniaCompanies';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'همکاری آژانس‌های املاک ارمنستان با شرکت‌ها؛ مسیر پیدا کردن شریک معتبر',
  description: 'نکات عملی همکاری با آژانس‌های املاک ایروان برای اسکان کارکنان، مشتریان و مسافران شرکتی.',
  alternates: { canonical: 'https://caspian.am/blog/real-estate-agencies-armenia-companies' },
  openGraph: {
    title: 'همکاری آژانس‌های املاک ارمنستان با شرکت‌ها؛ مسیر پیدا کردن شریک معتبر',
    description: 'نکات عملی همکاری با آژانس‌های املاک ایروان برای اسکان کارکنان، مشتریان و مسافران شرکتی.',
    url: 'https://caspian.am/blog/real-estate-agencies-armenia-companies',
    images: [{ url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'همکاری آژانس‌های املاک ارمنستان با شرکت‌ها؛ مسیر پیدا کردن شریک معتبر',
        description: 'نکات عملی همکاری با آژانس‌های املاک ایروان برای اسکان کارکنان، مشتریان و مسافران شرکتی.',
        url: 'https://caspian.am/blog/real-estate-agencies-armenia-companies',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&q=70',
      })} />
      <RealEstateAgenciesArmeniaCompanies />
    </>
  );
}
