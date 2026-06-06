import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';
import { CheckCircle, Loader2, Send, User, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const content = {
  fa: {
    title: 'درخواست مشاوره رایگان',
    subtitle: 'فرم را پر کنید — کارشناسان ما در کمتر از ۲۴ ساعت با شما تماس می‌گیرند',
    name: 'نام و نام‌خانوادگی',
    phone: 'شماره تلفن (WhatsApp)',
    email: 'ایمیل (اختیاری)',
    service: 'نوع خدمت',
    notes: 'توضیحات بیشتر (اختیاری)',
    submit: 'ارسال درخواست',
    sending: 'در حال ارسال...',
    successTitle: 'درخواست شما ارسال شد!',
    successText: 'کارشناسان کاسپین گروه به زودی با شما تماس می‌گیرند. یک ایمیل تأییدیه نیز برای شما ارسال شد.',
    services: [
      { value: 'visa-schengen', label: '🇪🇺 ویزای شینگن' },
      { value: 'visa-romania', label: '🇷🇴 ویزای رومانی' },
      { value: 'visa-russia', label: '🇷🇺 ویزای روسیه' },
      { value: 'residency-armenia', label: '🏠 اقامت ارمنستان' },
      { value: 'residency-turkey', label: '🇹🇷 اقامت ترکیه' },
      { value: 'residency-uae', label: '🇦🇪 اقامت امارات' },
      { value: 'hotel', label: '🏨 رزرو هتل' },
      { value: 'flight', label: '✈️ رزرو بلیط' },
      { value: 'company-registration', label: '🏢 ثبت شرکت' },
      { value: 'student-admission', label: '🎓 پذیرش تحصیلی' },
    ],
    required: 'این فیلد الزامی است',
    emailPlaceholder: 'example@email.com',
  },
  en: {
    title: 'Free Consultation Request',
    subtitle: 'Fill out the form — our experts will contact you within 24 hours',
    name: 'Full Name',
    phone: 'Phone Number (WhatsApp)',
    email: 'Email (optional)',
    service: 'Service Type',
    notes: 'Additional Notes (optional)',
    submit: 'Send Request',
    sending: 'Sending...',
    successTitle: 'Request Sent!',
    successText: 'Caspian Group experts will contact you shortly. A confirmation email has also been sent.',
    services: [
      { value: 'visa-schengen', label: '🇪🇺 Schengen Visa' },
      { value: 'visa-romania', label: '🇷🇴 Romania Visa' },
      { value: 'visa-russia', label: '🇷🇺 Russia Visa' },
      { value: 'residency-armenia', label: '🏠 Armenia Residency' },
      { value: 'residency-turkey', label: '🇹🇷 Turkey Residency' },
      { value: 'residency-uae', label: '🇦🇪 UAE Residency' },
      { value: 'hotel', label: '🏨 Hotel Booking' },
      { value: 'flight', label: '✈️ Flight Ticket' },
      { value: 'company-registration', label: '🏢 Company Registration' },
      { value: 'student-admission', label: '🎓 Student Admission' },
    ],
    required: 'This field is required',
    emailPlaceholder: 'example@email.com',
  },
  ru: {
    title: 'Запрос бесплатной консультации',
    subtitle: 'Заполните форму — наши эксперты свяжутся с вами в течение 24 часов',
    name: 'Полное имя',
    phone: 'Номер телефона (WhatsApp)',
    email: 'Email (необязательно)',
    service: 'Тип услуги',
    notes: 'Дополнительные заметки (необязательно)',
    submit: 'Отправить запрос',
    sending: 'Отправка...',
    successTitle: 'Запрос отправлен!',
    successText: 'Эксперты Caspian Group свяжутся с вами в ближайшее время. Письмо с подтверждением также было отправлено.',
    services: [
      { value: 'visa-schengen', label: '🇪🇺 Шенгенская виза' },
      { value: 'visa-romania', label: '🇷🇴 Виза в Румынию' },
      { value: 'visa-russia', label: '🇷🇺 Виза в Россию' },
      { value: 'residency-armenia', label: '🏠 ВНЖ Армении' },
      { value: 'residency-turkey', label: '🇹🇷 ВНЖ Турции' },
      { value: 'residency-uae', label: '🇦🇪 ВНЖ ОАЭ' },
      { value: 'hotel', label: '🏨 Бронирование отелей' },
      { value: 'flight', label: '✈️ Авиабилеты' },
      { value: 'company-registration', label: '🏢 Регистрация компании' },
      { value: 'student-admission', label: '🎓 Поступление в вуз' },
    ],
    required: 'Это поле обязательно',
    emailPlaceholder: 'example@email.com',
  },
};

export default function ContactForm() {
  const { lang } = useLang();
  const c = content[lang] || content.fa;
  const isRtl = lang === 'fa';

  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = c.required;
    if (!form.phone.trim()) e.phone = c.required;
    if (!form.service) e.service = c.required;
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
          name: form.name, 
          email: form.email || 'N/A', 
          message: `Phone: ${form.phone} | Service: ${form.service} | Notes: ${form.notes}`
        }]);

      if (error) throw error;
      setSuccess(true);
    } catch (err) {
      console.error('Error saving contact:', err);
      alert('خطا در ارسال. لطفاً دوباره تلاش کنید.');
    }
    setLoading(false);
  };

  const field = 'w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:border-primary transition-colors outline-none';

  if (success) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{c.successTitle}</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">{c.successText}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} dir={isRtl ? 'rtl' : 'ltr'} className="space-y-4">
      <div>
        <div className="relative">
          <User className={`absolute top-3.5 ${isRtl ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground pointer-events-none`} />
          <input type="text" placeholder={c.name} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={`${field} ${isRtl ? 'pr-10' : 'pl-10'} ${errors.name ? 'border-destructive' : ''}`} />
        </div>
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <div className="relative">
          <Phone className={`absolute top-3.5 ${isRtl ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground pointer-events-none`} />
          <input type="tel" placeholder={c.phone} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={`${field} ${isRtl ? 'pr-10' : 'pl-10'} ${errors.phone ? 'border-destructive' : ''}`} />
        </div>
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
      </div>

      <div className="relative">
        <Mail className={`absolute top-3.5 ${isRtl ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground pointer-events-none`} />
        <input type="email" placeholder={c.emailPlaceholder || c.email} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={`${field} ${isRtl ? 'pr-10' : 'pl-10'}`} />
      </div>

      <div>
        <div className="relative">
          <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} className={`${field} appearance-none cursor-pointer ${errors.service ? 'border-destructive' : ''}`}>
            <option value="">{c.service}</option>
            {c.services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <ChevronDown className={`absolute top-3.5 ${isRtl ? 'left-3' : 'right-3'} w-4 h-4 text-muted-foreground pointer-events-none`} />
        </div>
        {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
      </div>

      <div className="relative">
        <MessageSquare className={`absolute top-3.5 ${isRtl ? 'right-3' : 'left-3'} w-4 h-4 text-muted-foreground pointer-events-none`} />
        <textarea rows={3} placeholder={c.notes} value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} className={`${field} ${isRtl ? 'pr-10' : 'pl-10'} resize-none`} />
      </div>

      <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? c.sending : c.submit}
      </button>
    </form>
  );
}
