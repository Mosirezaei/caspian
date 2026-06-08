import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';
import { CheckCircle, Loader2, Send, User, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const content = {
  fa: { title: "تماس با ما", name: "نام", phone: "تلفن", email: "ایمیل", service: "خدمات", notes: "توضیحات", submit: "ارسال" },
  en: { title: "Contact Us", name: "Name", phone: "Phone", email: "Email", service: "Service", notes: "Notes", submit: "Submit" }
};

export default function ContactForm() {
  const { lang } = useLang();
  const c = content[lang] || content.fa;
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
          message: `Phone: ${form.phone} | Service: ${form.service} | Notes: ${form.notes}` 

      if (error) throw error;
      setSuccess(true);
    } catch (err) {
      console.error('Error saving contact:', err);
      alert(lang === 'fa' ? 'خطا در ارسال. لطفاً دوباره تلاش کنید.' : 'Submission error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) return <div className="text-center p-4"><CheckCircle className="mx-auto text-green-500" /></div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">{c.title}</h2>
      <input type="text" placeholder={c.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-2 border rounded" required />
      <input type="tel" placeholder={c.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full p-2 border rounded" />
      <input type="email" placeholder={c.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full p-2 border rounded" />
      <input type="text" placeholder={c.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full p-2 border rounded" />
      <textarea placeholder={c.notes} onChange={e => setForm({...form, notes: e.target.value})} className="w-full p-2 border rounded" />
      
      <button type="submit" disabled={loading} className="w-full p-2 bg-blue-600 text-white rounded flex justify-center items-center">
        {loading ? <Loader2 className="animate-spin" /> : <><Send className="mr-2" /> {c.submit}</>}
      </button>
    </form>
  );
}
