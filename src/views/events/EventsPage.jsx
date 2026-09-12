'use client';
import { useState, useEffect, useMemo } from 'react';
import { Search, Calendar, Music, Ticket, MapPin, Loader2, X, ExternalLink } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import Link from 'next/link';
import FestivalsCalendar from '@/components/festivals/FestivalsCalendar';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices';
import DiscoLegendsBookingModal from '@/components/events/DiscoLegendsBookingModal';
import { getWhatsAppUrl } from '@/lib/contact';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function EventsPage({ initialEvents = [] }) {
  // Seeded from the server component's own fetch (used for the page's
  // Event/ItemList schema) so there's no loading flash on first paint;
  // we still re-fetch client-side below to pick up anything that's
  // changed since this request was rendered.
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(initialEvents.length === 0);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('festivals');
  const [discoBookingOpen, setDiscoBookingOpen] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        if (data.events && data.events.length > 0) {
          setEvents(data.events);
        } else if (initialEvents.length === 0) {
          setError(data.error || 'رویدادی یافت نشد');
        }
      } catch (e) {
        if (initialEvents.length === 0) setError('خطا در اتصال');
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // /retro به /events?tab=concerts هدایت می‌شود. این روش بعد از mount
  // پارامتر را می‌خواند تا صفحه /events همچنان بتواند به‌صورت استاتیک ساخته شود.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('tab') === 'concerts') {
      setActiveTab('concerts');
    }
  }, []);

  // Dedupe tabs by the Persian label, not the raw Armenian category --
  // several raw categories (e.g. Համերգ/Ռոք/Ըազ/Դասական/Ժողովրդական/Փոփ) all map to the
  // same کنسرت tab, so keying by raw category produced one duplicate tab per
  // raw subtype instead of a single merged tab.
  const categories = useMemo(() => {
    const cats = new Set();
    events.forEach(e => { if (e.categoryFa) cats.add(e.categoryFa); });
    return Array.from(cats);
  }, [events]);

  const filtered = useMemo(() => {
    return events.filter(e => {
      if (selectedCategory !== 'all' && e.categoryFa !== selectedCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const haystack = [e.titleFa, e.titleEn, e.title, e.venueFa, e.venueEn, e.venue]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [events, selectedCategory, searchQuery]);

  function requestCaspianPurchase(event) {
    const title = event.titleFa || event.titleEn || event.title;
    const venue = event.venueFa || event.venueEn || event.venue;
    const price = event.priceDisplay || event.price;
    const msg =
      `سلام، می‌خوام برای این رویداد بلیط برام تهیه کنید:\n\n` +
      `🎫 ${title}\n` +
      (event.date ? `📅 ${event.date}\n` : '') +
      (venue ? `📍 ${venue}\n` : '') +
      (price ? `💰 ${price}\n` : '') +
      `\nلطفاً راهنمایی کنید.`;
    window.open(getWhatsAppUrl(undefined, msg), '_blank');
  }

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground">
            <span className="gold-gradient-text">فستیوال‌ها و رویدادهای ایروان</span>
          </h1>
          <p className="text-foreground/60 mt-2">فستیوال‌های سالانه، کنسرت‌ها و رویدادهای بلیط‌دار در ارمنستان</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <button type="button" onClick={() => setActiveTab('festivals')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition ${activeTab === 'festivals' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/30'}`}>
            فستیوال‌های سالیانه
          </button>
          <button type="button" onClick={() => setActiveTab('concerts')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition ${activeTab === 'concerts' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/30'}`}>
            کنسرت‌ها و رویدادها
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 min-w-0">
        {activeTab === 'festivals' ? (
          <FestivalsCalendar idPrefix="events-" />
        ) : (
          <>
        {/* Featured / Pinned Events — کاسپین این دو رویداد رو مستقیم مدیریت می‌کنه */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {/* Disco Legends / Retro Stage */}
          <button type="button" onClick={() => setDiscoBookingOpen(true)}
            className="text-right group relative rounded-2xl overflow-hidden border border-primary/25 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <img src="/images/retrodesk.jpeg" alt="فستیوال Disco Legends" loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <span className="absolute top-3 right-3 bg-primary text-black text-[11px] font-black px-2.5 py-1 rounded-full">
                رزرو مستقیم از کاسپین
              </span>
              <div className="absolute bottom-0 right-0 left-0 p-4">
                <h3 className="font-black text-foreground text-lg group-hover:text-primary transition-colors">
                  فستیوال Disco Legends
                </h3>
                <p className="text-xs text-foreground/70 mt-1">Retro Stage · بلیط ایستاده، نشسته و افترپارتی</p>
                <p className="text-sm font-bold text-primary mt-2">بلیط از ۴۰ دلار</p>
              </div>
            </div>
          </button>

          {/* Ebi Live in Yerevan */}
          <a href="https://wa.me/37433149327?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D9%85%20%D8%A8%D8%B1%D8%A7%DB%8C%20%DA%A9%D9%86%D8%B3%D8%B1%D8%AA%20%D8%A7%D8%A8%DB%8C%20%D8%AF%D8%B1%20%D8%A7%DB%8C%D8%B1%D9%88%D8%A7%D9%86%20(16%20%D8%B4%D9%87%D8%B1%DB%8C%D9%88%D8%B1)%20%D8%A8%D9%84%DB%8C%D8%B7%20%D8%A8%D8%AE%D8%B1%D9%85"
            target="_blank" rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden border border-primary/25 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <img src="/images/events/ebi-yerevan-2026.webp" alt="کنسرت زنده ابی در ایروان" loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <span className="absolute top-3 right-3 bg-primary text-black text-[11px] font-black px-2.5 py-1 rounded-full">
                رزرو مستقیم از کاسپین
              </span>
              <div className="absolute bottom-0 right-0 left-0 p-4">
                <h3 className="font-black text-foreground text-lg group-hover:text-primary transition-colors">
                  کنسرت زنده ابی در ایروان
                </h3>
                <p className="text-xs text-foreground/70 mt-1">۱۶ شهریور (۲۵ شهریور ۱۴۰۵) · مجتمع کارن دمیرچیان</p>
                <p className="text-sm font-bold text-primary mt-2">از ۱۰۹ تا ۶۹۹ دلار</p>
              </div>
            </div>
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input type="text" placeholder="جستجو..." value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/40 focus:outline-none" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button type="button" onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition ${selectedCategory === 'all' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/30'}`}>
              همه
            </button>
            {categories.map((label) => (
              <button type="button" key={label} onClick={() => setSelectedCategory(label)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${selectedCategory === label ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/30'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="text-foreground/50 mr-3 text-sm">در حال دریافت رویدادها...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-foreground/50">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(event => {
              const title = event.titleFa || event.titleEn || event.title;
              const venue = event.venueFa || event.venueEn || event.venue;
              const price = event.priceDisplay || event.price;
              return (
                <div key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-white/5">
                    {event.image ? (
                      <img src={event.image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                        onError={(e) => { e.target.style.display='none'; }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Music className="w-12 h-12 text-foreground/20" />
                      </div>
                    )}
                    {event.categoryFa && (
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                        <span className="text-[11px] font-bold text-primary">{event.categoryFa}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-2">
                      {title}
                    </h3>
                    {title !== event.title && (
                      <p className="text-[11px] text-foreground/30 line-clamp-1 mb-2">{event.title}</p>
                    )}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                        <Calendar className="w-3.5 h-3.5 shrink-0 text-primary/60" /> {event.date || '—'}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-primary/60" /> <span className="line-clamp-1">{venue || '—'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-primary/80 font-semibold">
                        <Ticket className="w-3.5 h-3.5 shrink-0" /> {price || 'قیمت نامشخص'}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                      {event.url && (
                        <a href={event.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-primary/80 transition">
                          <ExternalLink className="w-3 h-3 shrink-0" />
                          برای رزرو، آنلاین از سایت اصلی خریداری کنید
                        </a>
                      )}
                      <p className="text-[10.5px] text-foreground/35 mt-1.5 leading-relaxed">
                        اگر مایل باشید کاسپین بلیط را برایتان تهیه کند، مبلغی به‌عنوان کارمزد رزرو دریافت می‌شود.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
          </>
        )}
          </div>

          <PageSidebar
            tags={['festivals', 'events', 'concerts', 'tourism', 'armenia']}
            currentPath="/events"
            serviceType="tour"
          />
        </div>

        <RelatedServices pageType="tour" />
      </main>

      {/* Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div className="relative w-full max-w-lg bg-background border border-white/10 rounded-2xl overflow-hidden shadow-2xl" dir="rtl" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button onClick={() => setSelectedEvent(null)} className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-foreground/70 hover:text-foreground">
              <X className="w-4 h-4" />
            </button>

            {/* Image */}
            {selectedEvent.image && (
              <div className="h-52 overflow-hidden">
                <img src={selectedEvent.image} alt={selectedEvent.titleFa || selectedEvent.titleEn || selectedEvent.title || ''} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-6">
              {selectedEvent.categoryFa && (
                <span className="text-xs text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full">{selectedEvent.categoryFa}</span>
              )}
              {(() => {
                const modalTitle = selectedEvent.titleFa || selectedEvent.titleEn || selectedEvent.title;
                const modalVenue = selectedEvent.venueFa || selectedEvent.venueEn || selectedEvent.venue;
                const modalPrice = selectedEvent.priceDisplay || selectedEvent.price;
                return (
                  <>
                    <h2 className="text-xl font-black text-foreground mt-3 leading-snug">
                      {modalTitle}
                    </h2>
                    {modalTitle !== selectedEvent.title && (
                      <p className="text-sm text-foreground/40 mt-1">{selectedEvent.title}</p>
                    )}

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-foreground/70">
                        <Calendar className="w-5 h-5 text-primary/70 shrink-0" />
                        <span>{selectedEvent.date || 'تاریخ نامشخص'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-foreground/70">
                        <MapPin className="w-5 h-5 text-primary/70 shrink-0" />
                        <span>{modalVenue || 'محل نامشخص'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Ticket className="w-5 h-5 text-primary/70 shrink-0" />
                        <div>
                          <div className="text-sm font-bold text-primary">{modalPrice || 'قیمت نامشخص'}</div>
                          <div className="text-[11px] text-foreground/40">قیمت بلیط (درام ارمنی)</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}

              {selectedEvent.url && (
                <a href={selectedEvent.url} target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-white/5 border border-primary/40 hover:bg-primary/10 transition text-primary font-bold text-sm">
                  <ExternalLink className="w-5 h-5" />
                  خرید با ویزا/مسترکارت از سایت اصلی
                </a>
              )}

              <button onClick={() => requestCaspianPurchase(selectedEvent)}
                className="mt-3 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-primary hover:bg-yellow-500 transition text-black font-bold text-sm">
                <WhatsAppIcon className="w-5 h-5" />
                خرید ریالی از کاسپین (با کارمزد و نرخ حواله روز)
              </button>

              <p className="text-[11px] text-foreground/40 text-center mt-3 leading-relaxed">
                برای رزرو می‌توانید مستقیم و آنلاین از سایت اصلی برگزارکننده خریداری کنید. اگر مایل باشید کاسپین بلیط را برایتان تهیه کند، مبلغی به‌عنوان کارمزد تهیه دریافت می‌شود.
              </p>
            </div>
          </div>
        </div>
      )}
      {discoBookingOpen && <DiscoLegendsBookingModal onClose={() => setDiscoBookingOpen(false)} />}
    </div>
  );
}
