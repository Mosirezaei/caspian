import RentCarArmeniaGuide from '@/views/blog/RentCarArmeniaGuide';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'اجاره خودرو در ارمنستان؛ مدارک، بیمه، هزینه و نکات رانندگی',
  description: 'راهنمای انتخاب خودرو و بررسی قرارداد اجاره برای سفرهای شهری و بین‌شهری در ارمنستان.',
  alternates: { canonical: 'https://caspian.am/blog/rent-car-armenia-guide' },
  openGraph: {
    title: 'اجاره خودرو در ارمنستان؛ مدارک، بیمه، هزینه و نکات رانندگی',
    description: 'راهنمای انتخاب خودرو و بررسی قرارداد اجاره برای سفرهای شهری و بین‌شهری در ارمنستان.',
    url: 'https://caspian.am/blog/rent-car-armenia-guide',
    images: [{ url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'اجاره خودرو در ارمنستان؛ مدارک، بیمه، هزینه و نکات رانندگی',
        description: 'راهنمای اشترانت خودرو و بررسی قرارداد اجاره برای سفرهای شهری و بین‌شهری در ارمنستان.',
        url: 'https://caspian.am/blog/rent-car-armenia-guide',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=640&q=70',
      })} />
      <RentCarArmeniaGuide />
    </>
  );
}
