'use client';
import React from 'react';
import { Phone, MessageCircle, Send, MapPin, Instagram } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { getWhatsAppUrl } from '@/lib/contact';

export default function ContactFooter() {
  const { t } = useLang();

  return (
    <>
    <footer id="contact" className="py-20 px-4 relative" style={{ borderTop: '1px solid rgba(212,168,68,0.12)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
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
            <div className="space-y-3">
              <a href="tel:0037433149327" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span dir="ltr">0037433149327</span>
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/caspianbusinessgroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Telegram Admin</span>
              </a>
              <a href="https://t.me/CaspianGroups" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Send className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Telegram Group</span>
              </a>
              <a href="https://www.instagram.com/caspian.am?igsh=bDBsdTE0ZHJ3bno0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <span>@caspian.am</span>
              </a>
              <a href="https://maps.app.goo.gl/BqpSLLeYy2H9f8a69" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-foreground/60 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span dir="ltr">No 49, Komitas, Yerevan, Armenia</span>
              </a>
            </div>
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
