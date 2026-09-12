'use client';
import React from 'react';
import { Phone, Send, MapPin, Instagram } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { getWhatsAppUrl } from '@/lib/contact';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function ContactFooter() {
  const { t, lang } = useLang();
  const addresses = {
    fa: 'ایروان، خیابان کومیتاس، پلاک ۴۹، ارمنستان',
    en: 'No. 49, Komitas, Yerevan, Armenia',
    ru: 'Армения, Ереван, ул. Комитаса, 49',
  };

  return (
    <footer id="contact" className="py-16 sm:py-20 px-4 relative text-center" style={{ borderTop: '1px solid rgba(212,168,68,0.12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <img src="/images/contact.webp"
            alt="لوگوی کاسپین گروه" width="72" height="72" className="h-[4.5rem] w-auto object-contain mb-3" loading="lazy" />
          <h2 className="text-xl font-black gold-gradient-text leading-tight">کاسپین گروه</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-foreground/60 leading-relaxed">کاسپین گروه ارمنستان — همراه مطمئن شما در مسیر مهاجرت، سفر و سرمایه‌گذاری بین‌المللی</p>

          <div className="mt-10 w-full border-t border-white/10 pt-8">
            <h3 className="font-bold text-foreground mb-5">{t.footer.contactTitle}</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <a href="tel:0037433149327" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span dir="ltr">0037433149327</span>
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/caspianbusinessgroup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Telegram Admin</span>
              </a>
              <a href="https://t.me/CaspianGroups" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Telegram Group</span>
              </a>
              <a href="https://www.instagram.com/caspian.am?igsh=bDBsdTE0ZHJ3bno0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <span>@caspian.am</span>
              </a>
              <a href="https://maps.app.goo.gl/BqpSLLeYy2H9f8a69" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span dir={lang === 'fa' ? 'rtl' : 'ltr'}>{addresses[lang] || addresses.fa}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/60">{t.footer.copyright}</p>
          <p className="text-xs text-foreground/60">Designed & Developed with @Mosirezaei</p>
        </div>
      </div>
    </footer>
  );
}
