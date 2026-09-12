import EventsPage from '@/views/events/EventsPage';

export const metadata = {
  title: 'رویدادها و کنسرت‌های ایروان | گروه کاسپین',
  description: 'برنامه‌ی کنسرت، تئاتر، فستیوال و نمایشگاه‌های ایروان — به‌روز و ترجمه‌شده به فارسی.',
  alternates: { canonical: 'https://caspian.am/events' },
};

export default function Page() {
  return <EventsPage />;
}
