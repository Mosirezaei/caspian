import ApartmentBookingYerevanCompanies from '@/views/blog/ApartmentBookingYerevanCompanies';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'رزرو آپارتمان در ایروان برای شرکت‌ها و مسافران؛ راهنمای انتخاب امن',
  description: 'چطور برای اقامت کوتاه‌مدت یا کاری، آپارتمان مناسب در ایروان رزرو کنیم؟ راهنمای انتخاب امن برای شرکت‌ها و مسافران.',
  alternates: { canonical: 'https://caspian.am/blog/apartment-booking-yerevan-companies' },
  openGraph: {
    title: 'رزرو آپارتمان در ایروان برای شرکت‌ها و مسافران؛ راهنمای انتخاب امن',
    description: 'چطور برای اقامت کوتاه‌مدت یا کاری، آپارتمان مناسب در ایروان رزرو کنیم؟ راهنمای انتخاب امن برای شرکت‌ها و مسافران.',
    url: 'https://caspian.am/blog/apartment-booking-yerevan-companies',
    images: [{ url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'رزرو آپارتمان در ایروان برای شرکت‌ها و مسافران؛ راهنمای انتخاب امن',
        description: 'چطور برای اقامت کوتاه‌مدت یا کاری، آپارتمان مناسب در ایروان رزرو کنیم؟ راهنمای انتخاب امن برای شرکت‌ها و مسافران.',
        url: 'https://caspian.am/blog/apartment-booking-yerevan-companies',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640&q=70',
      })} />
      <ApartmentBookingYerevanCompanies />
    </>
  );
}
