import Tour from '@/views/travel/Tour';
import JsonLd from '@/components/shared/JsonLd';
import { tourSchema } from '@/lib/schema';

export const metadata = {
  title: 'تور ارمنستان | تور زمینی و هوایی با راهنمای فارسی‌زبان',
  description: 'تورهای ارمنستان با برنامه کامل: هتل، ترانسفر، راهنمای فارسی. تور ۳ تا ۷ روزه، گروهی و خصوصی. دریاچه سوان، قرناهبد، آبادی خاچکار.',
  keywords: 'تور ارمنستان, تور ایروان, تور ارمنستان از تهران, تور گردشگری ارمنستان',
  alternates: { canonical: 'https://caspian.am/travel/tour' },
  openGraph: {
    title: 'تور ارمنستان | تور زمینی و هوایی با راهنمای فارسی‌زبان',
    description: 'تورهای ارمنستان با برنامه کامل: هتل، ترانسفر، راهنمای فارسی. تور ۳ تا ۷ روزه، گروهی و خصوصی. دریاچه سوان، قرناهبد، آبادی خاچکار.',
    url: 'https://caspian.am/travel/tour',
  },
};

const schemas = tourSchema({
  name: 'تور ارمنستان — ایروان، دریاچه سوان و جاذبه‌های تاریخی',
  description: 'تور ۳ تا ۷ روزه ارمنستان شامل اقامت، ترانسفر و راهنمای فارسی‌زبان، با بازدید از ایروان، دریاچه سوان، معبد گارنی، صومعه گقارد و خور ویراپ.',
  itineraryPlaces: [
    { name: 'Yerevan', desc: 'میدان جمهوری، کاسکاد و موزه تاریخ ارمنستان' },
    { name: 'Lake Sevan', desc: 'بزرگ‌ترین دریاچه قفقاز، صومعه سواناوانک' },
    { name: 'Garni Temple', desc: 'معبد یونانی گارنی' },
    { name: 'Geghard Monastery', desc: 'صومعه صخره‌ای گقارد (میراث یونسکو)' },
    { name: 'Khor Virap', desc: 'صومعه خور ویراپ با چشم‌انداز کوه آرارات' },
    { name: 'Areni Wine Factory', desc: 'تاکستان‌های آرنی و کارخانه‌های شراب‌سازی ارمنستان' },
  ],
  events: [
    {
      name: 'کنسرت ابی — تور «پوست شیر»',
      startDate: '2026-09-16',
      place: 'مجموعه ورزشی و کنسرت کارن دمیرچیان، ایروان',
    },
    {
      name: 'فستیوال Disco Legends (Retro Stars Fest)',
      startDate: '2026-09-20',
      place: 'مجموعه Aura by Adana، حومه ایروان',
    },
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={schemas} />
      <Tour />
    </>
  );
}
