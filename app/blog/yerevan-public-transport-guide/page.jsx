import YerevanPublicTransportGuide from '@/views/blog/YerevanPublicTransportGuide';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس، تاکسی و هزینه‌های رفت‌وآمد',
  description: 'راهنمای کاربردی استفاده از حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس و تاکسی برای مهاجران، دانشجویان و مسافران.',
  alternates: { canonical: 'https://caspian.am/blog/yerevan-public-transport-guide' },
  openGraph: {
    title: 'حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس، تاکسی و هزینه‌های رفت‌وآمد',
    description: 'راهنمای کاربردی استفاده از حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس و تاکسی برای مهاجران، دانشجویان و مسافران.',
    url: 'https://caspian.am/blog/yerevan-public-transport-guide',
    images: [{ url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس، تاکسی و هزینه‌های رفت‌وآمد',
        description: 'راهنمای کاربردی استفاده از حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس و تاکسی برای مهاجران، دانشجویان و مسافران.',
        url: 'https://caspian.am/blog/yerevan-public-transport-guide',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=640&q=70',
      })} />
      <YerevanPublicTransportGuide />
    </>
  );
}
