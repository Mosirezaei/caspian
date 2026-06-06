import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MessageCircle, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { base44 } from '@/api/base44Client';

const servicesList = {
  fa: [
    { value: 'hotel', label: 'رزرو هتل' },
    { value: 'ticket-booking', label: 'رزرو بلیط' },
    { value: 'visa-schengen', label: 'ویزای شینگن' },
    { value: 'visa-russia', label: 'ویزای روسیه' },
    { value: 'visa-romania', label: 'ویزای رومانی' },
    { value: 'visa-south-america', label: 'ویزای آمریکای جنوبی' },
    { value: 'residency', label: 'اقامت ارمنستان' },
    { value: 'company-registration', label: 'ثبت شرکت' },
    { value: 'student-admission', label: 'پذیرش دانشجویی' },
    { value: 'exchange', label: 'صرافی و رمزارز' },
    { value: 'embassy-appointment', label: 'وقت سفارت' },
  ],
  en: [
    { value: 'hotel', label: 'Hotel Booking' },
    { value: 'ticket-booking', label: 'Ticket Booking' },
    { value: 'visa-schengen', label: 'Schengen Visa' },
    { value: 'visa-russia', label: 'Russia Visa' },
    { value: 'visa-romania', label: 'Romania Visa' },
    { value: 'visa-south-america', label: 'South America Visa' },
    { value: 'residency', label: 'Armenia Residency' },
    { value: 'company-registration', label: 'Company Registration' },
    { value: 'student-admission', label: 'Student Admission' },
    { value: 'exchange', label: 'Exchange & Crypto' },
    { value: 'embassy-appointment', label: 'Embassy Appointment' },
  ],
  ru: [
    { value: 'hotel', label: 'Бронирование отелей' },
    { value: 'ticket-booking', label: 'Бронирование билетов' },
    { value: 'visa-schengen', label: 'Шенгенская виза' },
    { value: 'visa-russia', label: 'Виза в Россию' },
    { value: 'visa-romania', label: 'Виза в Румынию' },
    { value: 'visa-south-america', label: 'Виза в Южную Америку' },
    { value: 'residency', label: 'ВНЖ Армении' },
    { value: 'company-registration', label: 'Регистрация компании' },
    { value: 'student-admission', label: 'Поступление в вузы' },
    { value: 'exchange', label: 'Обмен и криптовалюта' },
    { value: 'embassy-appointment', label: 'Запись в посольство' },
  ],
};

const labels = {
  fa: {
    title: 'مشاوره رایگان',
    subtitle: 'اطلاعات خود را وارد کنید، کارشناسان ما با شما تماس می‌گیرند',
    name: 'نام و نام خانوادگی',
    phone: 'شماره تماس',
    contact: 'آیدی تلگرام / شماره واتساپ / سایر',
    contactPlaceholder: '@telegram یا +989123456789',
    service: 'خدمت مورد نظر',
    selectService: 'انتخاب کنید...',
    notes: 'توضیحات',
    notesPlaceholder: 'هر توضیح اضافه‌ای که لازم است...',
    submit: 'ارسال درخواست',
    submitting: 'در حال ارسال...',
    required: '* اجباری',
    optional: '(اختیاری)',
  },
  en: {
    title: 'Free Consultation',
    subtitle: 'Fill in your details and our team will contact you',
    name: 'Full Name',
    phone: 'Phone Number',
    contact: 'Telegram ID / WhatsApp / Other',
    contactPlaceholder: '@telegram or +989123456789',
    service: 'Service of Interest',
    selectService: 'Select a service...',
    notes: 'Notes',
    notesPlaceholder: 'Any additional details...',
    submit: 'Submit Request',
    submitting: 'Submitting...',
    required: '* required',
    optional: '(optional)',
  },
  ru: {
    title: 'Бесплатная консультация',
    subtitle: 'Заполните форму и наши специалисты свяжутся с вами',
    name: 'ФИО',
    phone: 'Номер телефона',
    contact: 'Telegram ID / WhatsApp / Другое',
    contactPlaceholder: '@telegram или +989123456789',
    service: 'Интересующая услуга',
    selectService: 'Выберите услугу...',
    notes: 'Примечания',
    notesPlaceholder: 'Дополнительные детали...',
    submit: 'Отправить заявку',
    submitting: 'Отправка...',
    required: '* обязательно',
    optional: '(необязательно)',
  },
};

export default function ConsultModal({ isOpen, onClose }) {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const t = labels[lang] || labels.fa;
  const services = servicesList[lang] || servicesList.fa;

  const [form, setForm] = useState({ name: '', phone: '', contact: '', service: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.functions.invoke('sendConsultationRequest', {
        name: form.name,
        phone: form.phone,
        contact: form.contact,
        service: form.service,
        notes: form.notes,
        language: lang
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting consultation:', error);
      alert(lang === 'fa' ? 'خطا در ارسال درخواست' : 'Error submitting request');
    }
    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: '', phone: '', contact: '', service: '', notes: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              dir={isRtl ? 'rtl' : 'ltr'}
              className="w-full max-w-md glass-panel rounded-3xl border border-primary/25 shadow-2xl pointer-events-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-white/10">
                <div>
                  <h2 className="text-lg font-black gold-gradient-text">{t.title}</h2>
                  <p className="text-xs text-foreground/50 mt-0.5">{t.subtitle}</p>
                </div>
                <button onClick={handleClose}
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-foreground/40 hover:text-foreground mt-0.5">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {success ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {lang === 'fa' ? 'درخواست ثبت شد!' : lang === 'ru' ? 'Заявка принята!' : 'Request Submitted!'}
                    </h3>
                    <p className="text-sm text-foreground/50">
                      {lang === 'fa' ? 'به زودی با شما تماس خواهیم گرفت.' : lang === 'ru' ? 'Мы скоро с вами свяжемся.' : 'We will contact you shortly.'}
                    </p>
                    <button onClick={handleClose}
                      className="mt-6 px-6 py-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background font-bold text-sm">
                      {lang === 'fa' ? 'بستن' : lang === 'ru' ? 'Закрыть' : 'Close'}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 mb-1.5">
                        <User className="w-3 h-3 text-primary" />
                        {t.name} <span className="text-primary text-xs">*</span>
                      </label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder={t.name}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-foreground/25 text-sm focus:outline-none focus:border-primary/40 transition-colors" />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 mb-1.5">
                        <Phone className="w-3 h-3 text-primary" />
                        {t.phone} <span className="text-primary text-xs">*</span>
                      </label>
                      <input name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="+98123456789" type="tel"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-foreground/25 text-sm focus:outline-none focus:border-primary/40 transition-colors" />
                    </div>

                    {/* Contact (optional) */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 mb-1.5">
                        <MessageCircle className="w-3 h-3 text-primary" />
                        {t.contact} <span className="text-foreground/35 text-xs">{t.optional}</span>
                      </label>
                      <input name="contact" value={form.contact} onChange={handleChange}
                        placeholder={t.contactPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-foreground/25 text-sm focus:outline-none focus:border-primary/40 transition-colors" />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 mb-1.5">
                        <FileText className="w-3 h-3 text-primary" />
                        {t.service}
                      </label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-primary/40 transition-colors">
                        <option value="">{t.selectService}</option>
                        {services.map(s => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 mb-1.5">
                        <FileText className="w-3 h-3 text-primary" />
                        {t.notes} <span className="text-foreground/35 text-xs">{t.optional}</span>
                      </label>
                      <textarea name="notes" value={form.notes} onChange={handleChange}
                        placeholder={t.notesPlaceholder} rows={3}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-foreground/25 text-sm focus:outline-none focus:border-primary/40 transition-colors resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-1">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" />{t.submitting}</> : t.submit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}