import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';
import {
  CheckCircle,
  Loader2,
  Send,
  User,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

const content = {
  fa: {
    title: 'درخواست مشاوره رایگان',
    name: 'نام و نام خانوادگی',
    phone: 'شماره تلفن',
    email: 'ایمیل (اختیاری)',
    service: 'نوع خدمات',
    notes: 'توضیحات بیشتر',
    submit: 'ارسال درخواست',
    sending: 'در حال ارسال...',
    success: 'درخواست شما با موفقیت ثبت شد'
  },
  en: {
    title: 'Free Consultation',
    name: 'Full Name',
    phone: 'Phone Number',
    email: 'Email (Optional)',
    service: 'Service Type',
    notes: 'Additional Notes',
    submit: 'Submit Request',
    sending: 'Sending...',
    success: 'Your request has been submitted successfully'
  }
};

export default function ContactForm() {
  const { lang } = useLang();
  const c = content[lang] || content.fa;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputClass =
    "w-full bg-black/40 border border-yellow-500/30 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none transition-all";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('consultation_requests')
        .insert([{
          name: form.name,
          phone: form.phone,
          service: form.service,
          notes: form.notes,
          language: lang,
          source: 'contact_form'
        }]);

      if (error) throw error;

      setSuccess(true);

    } catch (err) {
      console.error('Error saving contact:', err);

      alert(
        lang === 'fa'
          ? 'خطا در ارسال فرم'
          : 'Submission error'
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-10"
      >
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <p className="text-white font-medium">
          {c.success}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <h2 className="text-2xl font-bold text-white mb-6">
        {c.title}
      </h2>

      <div className="relative">
        <User className="absolute right-3 top-3.5 w-4 h-4 text-yellow-500" />
        <input
          type="text"
          placeholder={c.name}
          className={`${inputClass} pr-10`}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />
      </div>

      <div className="relative">
        <Phone className="absolute right-3 top-3.5 w-4 h-4 text-yellow-500" />
        <input
          type="tel"
          placeholder={c.phone}
          className={`${inputClass} pr-10`}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />
      </div>

      <div className="relative">
        <Mail className="absolute right-3 top-3.5 w-4 h-4 text-yellow-500" />
        <input
          type="email"
          placeholder={c.email}
          className={`${inputClass} pr-10`}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
      </div>

      <input
        type="text"
        placeholder={c.service}
        className={inputClass}
        onChange={(e) =>
          setForm({ ...form, service: e.target.value })
        }
      />

      <div className="relative">
        <MessageSquare className="absolute right-3 top-3.5 w-4 h-4 text-yellow-500" />
        <textarea
          rows="4"
          placeholder={c.notes}
          className={`${inputClass} pr-10 resize-none`}
          onChange={(e) =>
            setForm({ ...form, notes: e.target.value })
          }
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {c.sending}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {c.submit}
          </>
        )}
      </button>

    </form>
  );
}
