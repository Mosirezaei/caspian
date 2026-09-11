'use client';
import React from 'react';
import {
  Phone, MessageCircle, Send, MapPin, Instagram,
  Plane, Building2, FileCheck2, Home as HomeIcon, GraduationCap, Banknote,
} from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { getWhatsAppUrl } from '@/lib/contact';

const AIRLINES = ['FlyOne Armenia', 'Wizz Air', 'Armenian Airlines'];

const SERVICES = [
  { icon: Plane, label: { fa: 'رزرو بلیط و هتل', en: 'Flights & Hotels', ru: 'Билеты и отели' } },
  { icon: FileCheck2, label: { fa: 'ویزا', en: 'Visa', ru: 'Виза' } },
  { icon: HomeIcon, label: { fa: 'اقامت ارمنستان', en: 'Residency', ru: 'ВНЖ Армении' } },
  { icon: Building2, label: { fa: 'ثبت شرکت', en: 'Company Registration', ru: 'Регистрация компании' } },
  { icon: GraduationCap, label: { fa: 'پذیرش دانشجویی', en: 'Student Admission', ru: 'Поступление в вузы' } },
  { icon: Banknote, label: { fa: 'صرافی و رمزارز', en: 'Exchange & Crypto', ru: 'Обмен и крипто' } },
];

export default function ContactFooter() {
  const { t, lang } = useLang();
  const addresses = {
    fa: 'ایروان، خیابان کومیتاس، پلاک ۴۹، ارمنستان',
    en: 'No. 49, Komitas, Yerevan, Armenia',
    ru: 'Армения, Ереван, ул. Комитаса, 49',
  };

  return (
    <>
    <footer id="contact" className="py-20 px-4 relative" style={{ borderTop: '1px solid rgba(212,168,68,0.12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/images/contact.webp"
                alt="لوگوی کاسپین گروه" width="48" height="48" className="h-12 w-auto object-contain" loading="lazy" />
              <span className="text-xl font-black gold-gradient-text leading-tight">کاسپین گروه</span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">{t.footer.tagline}</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">{t.footer.contactTitle}</h3>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href="tel:0037433149327" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span dir="ltr">0037433149327</span>
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/caspianbusinessgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Telegram Admin</span>
              </a>
              <a href="https://t.me/CaspianGroups" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Telegram Group</span>
              </a>
              <a href="https://www.instagram.com/caspian.am?igsh=bDBsdTE0ZHJ3bno0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <span>@caspian.am</span>
              </a>
              <a href="https://maps.app.goo.gl/BqpSLLeYy2H9f8a69" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span dir={lang === 'fa' ? 'rtl' : 'ltr'}>{addresses[lang] || addresses.fa}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-6">
            {SERVICES.map(({ icon: Icon, label }) => (
              <div key={label.en} className="flex items-center gap-2 text-foreground/35 hover:text-primary transition-colors">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-xs font-medium">{label[lang] || label.fa}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {AIRLINES.map((name) => (
              <div key={name} className="flex items-center gap-1.5 text-foreground/30 hover:text-primary transition-colors">
                <Plane className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="text-xs font-semibold tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/60">{t.footer.copyright}</p>
          <p className="text-xs text-foreground/60">Designed & Developed with @Mosirezaei</p>
        </div>
      </div>
    </footer>
        </>
  );
}
