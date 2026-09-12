import PrivateCarArmeniaCarnetGuide from '@/views/blog/PrivateCarArmeniaCarnetGuide';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'راهنمای جامع کاپوتاژ خودرو، پلاک ترانزیت، هزینه بنزین و مسیر تا ارمنستان',
  description: 'همه‌چیز درباره کاپوتاژ ماشین برای سفر به ارمنستان: مدارک لازم، پلاک ترانزیت، هزینه بنزین و مسیر مرز نوردوز تا ایروان.',
  alternates: { canonical: 'https://caspian.am/blog/private-car-armenia-carnet-transit-plate-route' },
  openGraph: {
    title: 'راهنمای جامع کاپوتاژ خودرو، پلاک ترانزیت، هزینه بنزین و مسیر تا ارمنستان',
    description: 'همه‌چیز درباره کاپوتاژ ماشین برای سفر به ارمنستان: مدارک لازم، پلاک ترانزیت، هزینه بنزین و مسیر مرز نوردوز تا ایروان.',
    url: 'https://caspian.am/blog/private-car-armenia-carnet-transit-plate-route',
    images: [{ url: 'https://caspian.am/images/blog/private-car-armenia-carnet-transit-plate-route.svg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'راهنمای جامع کاپوتاژ خودرو، پلاک ترانزیت، هزینه بنزین و مسیر تا ارمنستان',
        description: 'همه‌چیز درباره کاپوتاژ ماشین برای سفر به ارمنستان: مدارک لازم، پلاک ترانزیت، هزینه بنزین و مسیر مرز نوردوز تا ایروان.',
        url: 'https://caspian.am/blog/private-car-armenia-carnet-transit-plate-route',
        datePublished: '2026-09-12',
        dateModified: '2026-09-12',
        image: 'https://caspian.am/images/blog/private-car-armenia-carnet-transit-plate-route.svg',
      })} />
      <PrivateCarArmeniaCarnetGuide />
    </>
  );
}
