import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { supabase } from '@/api/supabaseClient'; // این بخش باید دقیق باشد
import { CheckCircle, Loader2, Send, User, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

const content = { /* ... محتوای چندزبانه شما که همین الان فرستادید ... */ };

export default function ContactForm() {
  const { lang } = useLang();
  const c = content[lang] || content.fa;
  const isRtl = lang === 'fa';

  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // منطق ارسال اصلاح شده به Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setSuccess(true); // نمایش پیام موفقیت
    } catch (err) {
      console.error('Error saving contact:', err);
      alert('خطا در ارسال. لطفاً دوباره تلاش کنید.');
    }
    setLoading(false);
  };

  // ... بقیه کدهای UI (Input ها و Select ها) که در کد خودتان داشتید دقیقاً همین‌جا بگذارید ...
  // فقط دقت کنید که handleSubmit جدید بالا، جایگزین تابع قدیمی شود.
}
