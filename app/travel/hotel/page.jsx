import Hotel from '@/views/service/Hotel';
import JsonLd from '@/components/shared/JsonLd';
import { hotelServiceSchema } from '@/lib/schema';

export const metadata = {
  title: 'رزرو هتل در ایروان | ۳ تا ۵ ستاره با واچر',
  description: 'رزرو هتل در ایروان با واچر رسمی، هماهنگی فارسی و بررسی ظرفیت بر اساس تاریخ سفر؛ هتل‌های ۳ تا ۵ ستاره برای سفر خانوادگی، کاری و گردشگری.',
  keywords: 'رزرو هتل در ارمنستان, هتل های ایروان, بهترین هتل‌های ارمنستان, رزرو هتل آپارتمان در مرکز ایروان, هتل‌های نزدیک میدان جمهوری ایروان, رزرو هتل با واچر رسمی در ارمنستان, هتل‌های ارمنستان با ترانسفر فرودگاهی, رزرو هتل ایروان آنلاین, هتل‌های نزدیک فرودگاه زوارتنوتس, رزرو هتل ایروان برای سفر تجاری, هتل‌های مناسب خانواده در ایروان, رزرو هتل و ویزا با هم در ارمنستان, هتل ایروان پرداخت ریالی',
  alternates: { canonical: 'https://caspian.am/travel/hotel' },
  openGraph: {
    title: 'رزرو هتل در ایروان | ۳ تا ۵ ستاره با واچر رسمی',
    description: 'رزرو هتل ایروان با واچر رسمی، هماهنگی فارسی و بررسی ظرفیت بر اساس تاریخ سفر.',
    url: 'https://caspian.am/travel/hotel',
    images: [{ url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رزرو هتل در ایروان | ۳ تا ۵ ستاره با واچر رسمی',
    description: 'رزرو هتل ایروان با واچر رسمی، هماهنگی فارسی و بررسی ظرفیت بر اساس تاریخ سفر.',
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80'],
  },
};

// Mirrors src/views/service/Hotel.jsx's HOTELS list (15 real, named
// properties) -- kept here only for structured data, so if a hotel is
// added/removed there, update this list too.
const HOTELS_FOR_SCHEMA = [
  { name: 'Erebuni Hotel', price: 55, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=75', descEn: "Erebuni Hotel is one of Yerevan's oldest recognized hotels. Central location, proximity to major attractions, and included breakfast.", stars: 3 },
  { name: 'Hotel Nork', price: 50, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=75', descEn: 'Hotel Nork is in peaceful Nork with stunning views of Yerevan and Mount Ararat.', stars: 3 },
  { name: 'Hotel Dvin', price: 48, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75', descEn: 'Hotel Dvin offers excellent central location, clean rooms, and proximity to restaurants and shopping.', stars: 3 },
  { name: 'Cascade Hotel', price: 52, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=75', descEn: 'Cascade Hotel is located near the famous Cascade complex with easy access to art galleries, cafés, and city parks.', stars: 3 },
  { name: 'Nairi Hotel', price: 45, image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=75', descEn: 'Nairi Hotel in the heart of historic Yerevan with excellent metro access and Iranian restaurants nearby.', stars: 3 },
  { name: 'Best Western Plus Congress Hotel', price: 120, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=75', descEn: 'Best Western Plus Congress directly faces Republic Square with unique views, pool, and spa.', stars: 4 },
  { name: 'Yerevan Marriott Hotel', price: 150, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=75', descEn: "Yerevan Marriott is one of the city's finest 4-star hotels with international buffet, fitness club, indoor pool.", stars: 4 },
  { name: 'Radisson Blu Hotel Yerevan', price: 135, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=75', descEn: 'Radisson Blu Yerevan is in the heart of the business center with city and Ararat views.', stars: 4 },
  { name: 'Golden Palace Hotel', price: 110, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=75', descEn: 'Golden Palace Hotel near the Opera House. Classic Armenian design, national restaurant, and premium services.', stars: 4 },
  { name: 'Ararat Park Hyatt', price: 145, image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&q=75', descEn: 'Ararat Park Hyatt with direct Ararat views, spacious rooms, luxury restaurant, and rooftop pool.', stars: 4 },
  { name: 'The Alexander, a Luxury Collection Hotel', price: 250, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=75', descEn: "The Alexander Luxury Collection is Yerevan's most beautiful 5-star hotel with world-class spa and fine dining.", stars: 5 },
  { name: 'Marriott Armenia Hotel', price: 230, image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&q=75', descEn: "Marriott Armenia at Republic Square is Yerevan's most iconic hotel.", stars: 5 },
  { name: 'Hilton Yerevan', price: 220, image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=75', descEn: 'Hilton Yerevan next to famous museums and theaters. 240 luxury rooms and 4 restaurants.', stars: 5 },
  { name: 'Tufenkian Historic Yerevan Hotel', price: 195, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=75', descEn: 'Tufenkian Historic Hotel in old Yerevan with authentic Armenian design.', stars: 5 },
  { name: 'Grand Hotel Yerevan', price: 240, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=75', descEn: 'Grand Hotel Yerevan with stunning Ararat views and rooftop restaurant with live music.', stars: 5 },
];

export default function Page() {
  return (
    <>
      <JsonLd data={hotelServiceSchema(HOTELS_FOR_SCHEMA)} />
      <Hotel />
    </>
  );
}
