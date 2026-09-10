import OfficeRentalYerevanBusinesses from '@/views/blog/OfficeRentalYerevanBusinesses';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'اجاره دفتر کار در ایروان برای شرکت‌ها؛ محله‌ها، قرارداد و هزینه‌های جانبی',
  description: 'راهنمای انتخاب دفتر مناسب برای شرکت‌های تازه‌تأسیس، تیم‌های کوچک و کسب‌وکارهای بین‌المللی در ایروان.',
  alternates: { canonical: 'https://caspian.am/blog/office-rental-yerevan-businesses' },
  openGraph: {
    title: 'اجاره دفتر کار در ایروان برای شرکت‌ها؛ محله‌ها، قرارداد و هزینه‌های جانبی',
    description: 'راهنمای اشترانت دفتر مناسب برای شرکت‌های تازه‌تأسیس، تیم‌های کوچک و کسب‌وکارهای بین‌المللی در ایروان.',
    url: 'https://caspian.am/blog/office-rental-yerevan-businesses',
    images: [{ url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'اجاره دفتر کار در ایروان برای شرکت‌ها؛ محله‌ها، قرارداد و هزینه‌های جانبی',
        description: 'راهنمای انتخاب دفتر مناسب برای شرکت‌ها؛ محله‌ها، قرارداد و هزینه‌های جانبی',
        url: 'https://caspian.am/blog/office-rental-yerevan-businesses',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=640&q=70',
      })} />
      <OfficeRentalYerevanBusinesses />
    </>
  );
}
