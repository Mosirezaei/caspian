import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient';
import { CheckCircle, Loader2, Send } from 'lucide-react';

const content = {
  fa: { title: "تماس با ما", name: "نام", submit: "ارسال" },
  en: { title: "Contact Us", name: "Name", submit: "Submit" }
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
    const { error } = await supabase
      .from('contacts')
      .insert([{ name: form.name, email: form.email || 'N/A', message: \`Phone: \${form.phone} | Service: \${form.service} | Notes: \${form.notes}\` }]);

    if (!error) setSuccess(true);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* بقیه اجزای فرم را اینجا قرار دهید */}
      <button type="submit" disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : c.submit}
      </button>
    </form>
  );
}
