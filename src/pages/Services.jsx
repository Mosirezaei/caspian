import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import {
  FileText, Building2, Hotel, Star, MessageCircle, Send, Instagram,
  CreditCard, GraduationCap, Home as HomeIcon, Landmark, ArrowRight, Plane, Bus
} from 'lucide-react';

const WHATSAPP = 'https://wa.me/37433149327';
const TELEGRAM = 'https://t.me/caspianbusinessgroup';
const INSTAGRAM = 'https://www.instagram.com/caspiangroup.am';

const services = {
  fa: [
    { icon: Plane, title: 'رزرو بلیط', subtitle: 'هواپیما و زمینی با بهترین قیمت', href: '/services/ticket-booking', color: 'from-sky-500/20 to-sky-500/5' },
    { icon: Hotel, title: 'رزرو هتل', subtitle: 'کاسپین تور از ۲۰۰۷', href: '/services/hotel', color: 'from-amber-500/20 to-amber-500/5' },
    { icon: FileText, title: 'ویزای شینگن', subtitle: 'دسترسی به ۲۶ کشور اروپایی', href: '/services/visa-schengen', color: 'from-blue-500/20 to-blue-500/5' },
    { icon: FileText, title: 'ویزای روسیه', subtitle: 'توریستی و تجاری', href: '/services/visa-russia', color: 'from-red-500/20 to-red-500/5' },
    { icon: FileText, title: 'ویزای رومانی', subtitle: 'دروازه اروپا برای ایرانیان', href: '/services/visa-romania', color: 'from-yellow-500/20 to-yellow-500/5' },
    { icon: FileText, title: 'ویزای آمریکای جنوبی', subtitle: 'آرژانتین، برزیل، شیلی', href: '/services/visa-south-america', color: 'from-green-500/20 to-green-500/5' },
    { icon: Landmark, title: 'اقامت ارمنستان', subtitle: 'سریع‌ترین اقامت اروپایی', href: '/services/residency', color: 'from-purple-500/20 to-purple-500/5' },
    { icon: Building2, title: 'ثبت شرکت', subtitle: 'ثبت LLC در ۳ روز', href: '/services/company-registration', color: 'from-indigo-500/20 to-indigo-500/5' },
    { icon: GraduationCap, title: 'پذیرش دانشجویی', subtitle: 'تحصیل در ارمنستان و اروپا', href: '/services/student-admission', color: 'from-teal-500/20 to-teal-500/5' },
    { icon: CreditCard, title: 'صرافی و رمزارز', subtitle: 'بهترین نرخ ارز در ایروان', href: '/services/exchange', color: 'from-orange-500/20 to-orange-500/5' },
    { icon: Landmark, title: 'وقت سفارت', subtitle: 'سریع‌ترین نوبت سفارت‌ها', href: '/services/embassy-appointment', color: 'from-pink-500/20 to-pink-500/5' },
  ],
  en: [
    { icon: Plane, title: 'Ticket Booking', subtitle: 'Flights & ground at best prices', href: '/services/ticket-booking', color: 'from-sky-500/20 to-sky-500/5' },
    { icon: Hotel, title: 'Hotel Booking', subtitle: 'Caspian Tour since 2007', href: '/services/hotel', color: 'from-amber-500/20 to-amber-500/5' },
    { icon: FileText, title: 'Schengen Visa', subtitle: 'Access to 26 European countries', href: '/services/visa-schengen', color: 'from-blue-500/20 to-blue-500/5' },
    { icon: FileText, title: 'Russia Visa', subtitle: 'Tourist & business', href: '/services/visa-russia', color: 'from-red-500/20 to-red-500/5' },
    { icon: FileText, title: 'Romania Visa', subtitle: 'Gateway to Europe for Iranians', href: '/services/visa-romania', color: 'from-yellow-500/20 to-yellow-500/5' },
    { icon: FileText, title: 'South America Visa', subtitle: 'Argentina, Brazil, Chile', href: '/services/visa-south-america', color: 'from-green-500/20 to-green-500/5' },
    { icon: Landmark, title: 'Armenia Residency', subtitle: 'Fastest European residency', href: '/services/residency', color: 'from-purple-500/20 to-purple-500/5' },
    { icon: Building2, title: 'Company Registration', subtitle: 'LLC in 3 days', href: '/services/company-registration', color: 'from-indigo-500/20 to-indigo-500/5' },
    { icon: GraduationCap, title: 'Student Admission', subtitle: 'Study in Armenia & Europe', href: '/services/student-admission', color: 'from-teal-500/20 to-teal-500/5' },
    { icon: CreditCard, title: 'Exchange & Crypto', subtitle: 'Best rates in Yerevan', href: '/services/exchange', color: 'from-orange-500/20 to-orange-500/5' },
    { icon: Landmark, title: 'Embassy Appointment', subtitle: 'Fastest appointments', href: '/services/embassy-appointment', color: 'from-pink-500/20 to-pink-500/5' },
  ],
  ru: [
    { icon: Plane, title: 'Бронирование билетов', subtitle: 'Авиа и наземный транспорт', href: '/services/ticket-booking', color: 'from-sky-500/20 to-sky-500/5' },
    { icon: Hotel, title: 'Бронирование отелей', subtitle: 'Caspian Tour с 2007 года', href: '/services/hotel', color: 'from-amber-500/20 to-amber-500/5' },
    { icon: FileText, title: 'Шенгенская виза', subtitle: 'Доступ к 26 странам', href: '/services/visa-schengen', color: 'from-blue-500/20 to-blue-500/5' },
    { icon: FileText, title: 'Виза в Россию', subtitle: 'Туристическая и деловая', href: '/services/visa-russia', color: 'from-red-500/20 to-red-500/5' },
    { icon: FileText, title: 'Виза в Румынию', subtitle: 'Ворота в Европу', href: '/services/visa-romania', color: 'from-yellow-500/20 to-yellow-500/5' },
    { icon: FileText, title: 'Виза в Южную Америку', subtitle: 'Аргентина, Бразилия, Чили', href: '/services/visa-south-america', color: 'from-green-500/20 to-green-500/5' },
    { icon: Landmark, title: 'ВНЖ Армении', subtitle: 'Самый быстрый европейский ВНЖ', href: '/services/residency', color: 'from-purple-500/20 to-purple-500/5' },
    { icon: Building2, title: 'Регистрация компании', subtitle: 'ООО за 3 дня', href: '/services/company-registration', color: 'from-indigo-500/20 to-indigo-500/5' },
    { icon: GraduationCap, title: 'Поступление в вузы', subtitle: 'Учёба в Армении и Европе', href: '/services/student-admission', color: 'from-teal-500/20 to-teal-500/5' },
    { icon: CreditCard, title: 'Обмен и криптовалюта', subtitle: 'Лучший курс в Ереване', href: '/services/exchange', color: 'from-orange-500/20 to-orange-500/5' },
    { icon: Landmark, title: 'Запись в посольство', subtitle: 'Быстрая запись', href: '/services/embassy-appointment', color: 'from-pink-500/20 to-pink-500/5' },
  ],
};

function ServicesContent() {
  const { lang } = useLang();
  const list = services[lang] || services.fa;
  const isRtl = lang === 'fa';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/">
            <img src="/images/contact.png"
              alt="Caspian" className="h-10 w-auto object-contain" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
            {!isRtl && <ArrowRight className="w-4 h-4 rotate-180" />}
            {isRtl ? 'بازگشت' : lang === 'ru' ? 'На главную' : 'Back'}
            {isRtl && <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-14 relative">
        <div className="relative h-48 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80" alt="bg"
            className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl font-black">
              {isRtl ? <>همه <span className="gold-gradient-text">خدمات</span></> :
               lang === 'ru' ? <>Все <span className="gold-gradient-text">услуги</span></> :
               <>All <span className="gold-gradient-text">Services</span></>}
            </h1>
            <p className="text-foreground/50 text-sm mt-2">
              {isRtl ? 'روی هر خدمت کلیک کنید تا جزئیات را ببینید' :
               lang === 'ru' ? 'Нажмите на услугу для подробностей' :
               'Click any service to see details'}
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 pb-24 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link to={svc.href}
                  className="group glass-panel rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 block">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} border border-white/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{svc.title}</div>
                    <div className="text-xs text-foreground/50 mt-0.5">{svc.subtitle}</div>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-primary/20 text-center">
          <p className="text-foreground/60 text-sm mb-4">
            {isRtl ? 'برای دریافت جزئیات بیشتر و قیمت با کارشناسان ما در تماس باشید' :
             lang === 'ru' ? 'Для подробностей и цен свяжитесь с нашими экспертами' :
             'For details and pricing, contact our experts'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link to="/book"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background font-bold text-sm hover:shadow-lg transition-all">
              {isRtl ? '📅 رزرو خدمات' : lang === 'ru' ? '📅 Забронировать услугу' : '📅 Book a Service'}
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-600/20 border border-green-500/20 text-green-400 font-bold text-sm hover:bg-green-600/30 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/20 text-blue-400 font-bold text-sm hover:bg-blue-600/30 transition-all">
              <Send className="w-4 h-4" /> Telegram
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600/20 border border-pink-500/20 text-pink-400 font-bold text-sm hover:bg-pink-600/30 transition-all">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <LanguageProvider>
      <ServicesContent />
    </LanguageProvider>
  );
}