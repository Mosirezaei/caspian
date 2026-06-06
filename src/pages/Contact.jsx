import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';
import {
  Phone, MessageCircle, Send, Instagram, MapPin,
  Clock, Mail, Globe, Building2, CheckCircle, Loader2
} from 'lucide-react';
import { base44 } from '@/api/base44Client';

const content = {
  fa: {
    heroTitle: 'تماس با ما',
    heroSub: 'هر سوالی دارید، کارشناسان ما آماده پاسخگویی هستند',
    directTitle: 'ارتباط مستقیم',
    directItems: [
      { icon: 'phone', label: 'تماس مستقیم', value: '0037433149327', href: 'tel:0037433149327', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
      { icon: 'whatsapp', label: 'واتساپ', value: 'wa.me/37433149327', href: 'https://wa.me/37433149327', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
      { icon: 'telegram', label: 'تلگرام (ادمین)', value: '@caspianbusinessgroup', href: 'https://t.me/caspianbusinessgroup', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { icon: 'instagram', label: 'اینستاگرام', value: '@caspiangroup.am', href: 'https://www.instagram.com/caspiangroup.am?igsh=bDBsdTE0ZHJ3bno0', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
    ],
    hoursTitle: 'ساعات کاری',
    hours: [
      { day: 'شنبه تا چهارشنبه', time: '۹:۰۰ صبح — ۶:۰۰ عصر' },
      { day: 'پنجشنبه', time: '۹:۰۰ صبح — ۳:۰۰ بعدازظهر' },
      { day: 'جمعه', time: 'تعطیل' },
      { day: 'اورژانس واتساپ', time: '۲۴ ساعته' },
    ],
    addressTitle: 'آدرس دفتر',
    address: 'خیابان کومیتاس، شماره ۴۹، ایروان، ارمنستان',
    mapLink: 'https://maps.app.goo.gl/BqpSLLeYy2H9f8a69',
    formTitle: 'ارسال پیام',
    formSub: 'پیام خود را برای ما بفرستید، در اسرع وقت پاسخ می‌دهیم',
    nameLabel: 'نام و نام خانوادگی',
    phoneLabel: 'شماره تماس',
    serviceLabel: 'موضوع',
    serviceOptions: ['مشاوره ویزا', 'اقامت و مهاجرت', 'ثبت شرکت', 'رزرو هتل و بلیط', 'صرافی', 'سایر'],
    msgLabel: 'متن پیام',
    submit: 'ارسال پیام',
    submitting: 'در حال ارسال...',
    successTitle: 'پیام شما ارسال شد!',
    successMsg: 'در اسرع وقت با شما تماس خواهیم گرفت.',
    faqTitle: 'سوالات متداول',
    faqs: [
      { q: 'چه مدت طول می‌کشد تا کاسپین با من تماس بگیرد؟', a: 'معمولاً در کمتر از ۲ ساعت در ساعات کاری پاسخ می‌گیرید. برای موارد فوری از واتساپ استفاده کنید.' },
      { q: 'آیا مشاوره اولیه هزینه دارد؟', a: 'خیر. اولین مشاوره کاملاً رایگان است. بعد از بررسی پرونده شما، هزینه‌های دقیق اعلام می‌شود.' },
      { q: 'آیا خدمات کاسپین فقط برای ایرانیان است؟', a: 'خیر. کاسپین به اتباع ملیت‌های مختلف خدمات ارائه می‌دهد، با پشتیبانی فارسی، روسی و انگلیسی.' },
      { q: 'دفتر کاسپین کجاست؟', a: 'دفتر مرکزی ما در خیابان کومیتاس، شماره ۴۹، ایروان قرار دارد. برای مراجعه حضوری لطفاً از قبل وقت بگیرید.' },
    ],
  },
  en: {
    heroTitle: 'Contact Us',
    heroSub: 'Whatever your question, our experts are ready to help',
    directTitle: 'Direct Contact',
    directItems: [
      { icon: 'phone', label: 'Direct Call', value: '0037433149327', href: 'tel:0037433149327', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
      { icon: 'whatsapp', label: 'WhatsApp', value: 'wa.me/37433149327', href: 'https://wa.me/37433149327', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
      { icon: 'telegram', label: 'Telegram Admin', value: '@caspianbusinessgroup', href: 'https://t.me/caspianbusinessgroup', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { icon: 'instagram', label: 'Instagram', value: '@caspiangroup.am', href: 'https://www.instagram.com/caspiangroup.am?igsh=bDBsdTE0ZHJ3bno0', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
    ],
    hoursTitle: 'Working Hours',
    hours: [
      { day: 'Saturday – Wednesday', time: '9:00 AM — 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM — 3:00 PM' },
      { day: 'Friday', time: 'Closed' },
      { day: 'WhatsApp Emergency', time: '24/7' },
    ],
    addressTitle: 'Office Address',
    address: '49 Komitas Street, Yerevan, Armenia',
    mapLink: 'https://maps.app.goo.gl/BqpSLLeYy2H9f8a69',
    formTitle: 'Send a Message',
    formSub: 'Send us your message and we will respond as soon as possible',
    nameLabel: 'Full Name',
    phoneLabel: 'Phone Number',
    serviceLabel: 'Subject',
    serviceOptions: ['Visa Consultation', 'Residency & Immigration', 'Company Registration', 'Hotel & Ticket Booking', 'Exchange', 'Other'],
    msgLabel: 'Message',
    submit: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Message Sent!',
    successMsg: 'We will contact you as soon as possible.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How long does it take for Caspian to contact me?', a: 'Usually within 2 hours during business hours. For urgent matters, use WhatsApp.' },
      { q: 'Is the initial consultation free?', a: 'Yes. The first consultation is completely free. Exact costs are provided after reviewing your case.' },
      { q: 'Are Caspian\'s services only for Iranians?', a: 'No. Caspian serves clients of various nationalities with support in Persian, Russian, and English.' },
      { q: 'Where is the Caspian office?', a: 'Our main office is at 49 Komitas Street, Yerevan. Please schedule an appointment before visiting.' },
    ],
  },
  ru: {
    heroTitle: 'Связаться с нами',
    heroSub: 'Какой бы ни был ваш вопрос, наши эксперты готовы помочь',
    directTitle: 'Прямой контакт',
    directItems: [
      { icon: 'phone', label: 'Прямой звонок', value: '0037433149327', href: 'tel:0037433149327', color: 'text-primary', bg: 'bg-primary/10 border-primary/20' },
      { icon: 'whatsapp', label: 'WhatsApp', value: 'wa.me/37433149327', href: 'https://wa.me/37433149327', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
      { icon: 'telegram', label: 'Telegram Admin', value: '@caspianbusinessgroup', href: 'https://t.me/caspianbusinessgroup', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { icon: 'instagram', label: 'Instagram', value: '@caspiangroup.am', href: 'https://www.instagram.com/caspiangroup.am?igsh=bDBsdTE0ZHJ3bno0', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
    ],
    hoursTitle: 'Рабочее время',
    hours: [
      { day: 'Суббота — Среда', time: '9:00 — 18:00' },
      { day: 'Четверг', time: '9:00 — 15:00' },
      { day: 'Пятница', time: 'Выходной' },
      { day: 'Экстренный WhatsApp', time: '24/7' },
    ],
    addressTitle: 'Адрес офиса',
    address: 'ул. Комитас, 49, Ереван, Армения',
    mapLink: 'https://maps.app.goo.gl/BqpSLLeYy2H9f8a69',
    formTitle: 'Отправить сообщение',
    formSub: 'Напишите нам — ответим как можно скорее',
    nameLabel: 'ФИО',
    phoneLabel: 'Номер телефона',
    serviceLabel: 'Тема',
    serviceOptions: ['Консультация по визе', 'ВНЖ и иммиграция', 'Регистрация компании', 'Отель и билеты', 'Обмен валют', 'Другое'],
    msgLabel: 'Сообщение',
    submit: 'Отправить',
    submitting: 'Отправка...',
    successTitle: 'Сообщение отправлено!',
    successMsg: 'Мы свяжемся с вами как можно скорее.',
    faqTitle: 'Часто задаваемые вопросы',
    faqs: [
      { q: 'Сколько времени занимает ответ от Caspian?', a: 'Обычно в течение 2 часов в рабочее время. По срочным вопросам используйте WhatsApp.' },
      { q: 'Первичная консультация платная?', a: 'Нет. Первая консультация абсолютно бесплатна.' },
      { q: 'Услуги Caspian только для иранцев?', a: 'Нет. Мы обслуживаем клиентов разных национальностей на персидском, русском и английском языках.' },
    ],
  },
};

function IconForType({ type, className }) {
  if (type === 'phone') return <Phone className={className} />;
  if (type === 'whatsapp') return <MessageCircle className={className} />;
  if (type === 'telegram') return <Send className={className} />;
  if (type === 'instagram') return <Instagram className={className} />;
  return <Globe className={className} />;
}

function ContactContent() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const c = content[lang] || content.fa;

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.functions.invoke('sendConsultationRequest', {
        name: form.name,
        phone: form.phone,
        service: form.service,
        notes: form.message,
        language: lang,
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />

      {/* Hero */}
      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt="Contact" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl font-black gold-gradient-text mb-2">{c.heroTitle}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="text-foreground/60 text-sm sm:text-base">{c.heroSub}</motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 pb-0 space-y-14">

        {/* Direct Contact Cards */}
        <div>
          <h2 className="text-xl font-black gold-gradient-text mb-5 text-center">{c.directTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {c.directItems.map((item, i) => (
              <motion.a key={i} href={item.href} target={item.icon !== 'phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl border ${item.bg} hover:scale-105 transition-all`}>
                <IconForType type={item.icon} className={`w-7 h-7 ${item.color}`} />
                <div className="text-center">
                  <div className={`text-sm font-bold ${item.color}`}>{item.label}</div>
                  <div className="text-xs text-foreground/50 mt-0.5 break-all" dir="ltr">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Hours + Address */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">{c.hoursTitle}</h3>
            </div>
            <div className="space-y-2.5">
              {c.hours.map((h, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">{h.day}</span>
                  <span className={`font-medium ${h.time.includes('تعطیل') || h.time.includes('Closed') || h.time.includes('Выходной') ? 'text-destructive/70' : 'text-primary'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-panel rounded-2xl p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">{c.addressTitle}</h3>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/70 leading-relaxed">{c.address}</p>
            </div>
            <a href={c.mapLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
              <MapPin className="w-4 h-4" />
              {lang === 'fa' ? 'مشاهده روی نقشه' : lang === 'ru' ? 'На карте' : 'View on Map'}
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 border border-primary/20">
          <h2 className="text-xl font-black gold-gradient-text mb-1">{c.formTitle}</h2>
          <p className="text-sm text-foreground/50 mb-6">{c.formSub}</p>

          {success ? (
            <div className="text-center py-10">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{c.successTitle}</h3>
              <p className="text-foreground/60 text-sm">{c.successMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-foreground/60 mb-1.5 block">{c.nameLabel} *</label>
                <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required
                  placeholder={c.nameLabel}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-primary/40" />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/60 mb-1.5 block">{c.phoneLabel} *</label>
                <input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} required
                  placeholder="+98..." dir="ltr"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-primary/40" />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/60 mb-1.5 block">{c.serviceLabel}</label>
                <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary/40">
                  <option value="">—</option>
                  {c.serviceOptions.map((o, i) => <option key={i} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/60 mb-1.5 block">{c.msgLabel}</label>
                <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  rows={4} placeholder={c.msgLabel}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-primary/40 resize-none" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background font-bold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" />{c.submitting}</> : c.submit}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* FAQ */}
        <div className="pb-4">
          <h2 className="text-xl font-black gold-gradient-text mb-5 text-center">{c.faqTitle}</h2>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass-panel rounded-2xl border border-primary/15 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-foreground hover:text-primary transition-colors">
                  {faq.q}
                  <span className={`text-primary transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-foreground/65 leading-relaxed">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}

export default function Contact() {
  return <LanguageProvider><ContactContent /></LanguageProvider>;
}