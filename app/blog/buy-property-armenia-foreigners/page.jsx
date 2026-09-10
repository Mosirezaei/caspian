import BuyPropertyArmeniaForeigners from '@/views/blog/BuyPropertyArmeniaForeigners';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'خرید ملک در ارمنستان برای اتباع خارجی؛ مراحل، مدارک و ریسک‌ها',
  description: 'راهنمای عملی بررسی ملک، قرارداد و انتقال رسمی مالکیت برای خرید ملک در ارمنستان توسط اتباع خارجی.',
  alternates: { canonical: 'https://caspian.am/blog/buy-property-armenia-foreigners' },
  openGraph: {
    title: 'خرید ملک در ارمنستان برای اتباع خارجی؛ مراحل، مدارک و ریسک‌ها',
    description: 'راهنمای عملی بررسی ملک، قرارداد و انتقال رسمی مالکیت برای خرید ملک در ارمنستان توسط اتباع خارجی.',
    url: 'https://caspian.am/blog/buy-property-armenia-foreigners',
    images: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Yerevan_Cascade_2021.jpg/1280px-Yerevan_Cascade_2021.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'خرید ملک در ارمنستان برای اتباع خارجی؛ مراحل، مدارک و ریسک‌ها',
        description: 'راهنمای عملی بررسی ملک، قرارداد و انتقال رسمی مالکیت برای خرید ملک در ارمنستان توسط اتباع خارجی.',
        url: 'https://caspian.am/blog/buy-property-armenia-foreigners',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Yerevan_Cascade_2021.jpg/1280px-Yerevan_Cascade_2021.jpg',
      })} />
      <BuyPropertyArmeniaForeigners />
    </>
  );
}
