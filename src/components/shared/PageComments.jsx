'use client';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { MessageCircle, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

// Anon-key client only -- this component never sees a service-role key.
// It can only ever SELECT rows where status = 'approved' (enforced by the
// page_comments RLS policy) and submit new ones through the
// submit_page_comment() RPC, which always inserts as 'pending'.
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const T = {
  fa: {
    heading: 'نظر یا سوالی دارید؟',
    subheading: 'پیامتون رو تیم کاسپین می‌بینه و در سریع‌ترین زمان جواب می‌ده.',
    namePh: 'اسم (اختیاری)',
    messagePh: 'نظر یا سوالتون رو اینجا بنویسید...',
    contactToggle: 'می‌خواید مستقیم باهاتون تماس بگیریم؟ (اختیاری)',
    contactNote: 'این اطلاعات فقط برای تیم کاسپین ارسال می‌شه؛ هیچ‌وقت رو سایت یا برای کاربرهای دیگه نمایش داده نمی‌شه.',
    telegramPh: 'آیدی تلگرام',
    whatsappPh: 'شماره واتساپ',
    emailPh: 'ایمیل',
    submit: 'ارسال',
    sending: 'در حال ارسال...',
    sent: 'پیامتون ثبت شد و بعد از بررسی منتشر می‌شه. ممنون از وقتی که گذاشتید!',
    error: 'یه مشکلی پیش اومد، دوباره امتحان کنید.',
    empty: 'اولین نفری باشید که نظر می‌ده.',
    replyLabel: 'پاسخ کاسپین',
  },
  en: {
    heading: 'Have a question or comment?',
    subheading: 'The Caspian team reads every message and replies as soon as possible.',
    namePh: 'Name (optional)',
    messagePh: 'Write your comment or question here...',
    contactToggle: 'Want us to contact you directly? (optional)',
    contactNote: 'This info is only ever sent to the Caspian team; it is never shown on the site or to other users.',
    telegramPh: 'Telegram ID',
    whatsappPh: 'WhatsApp number',
    emailPh: 'Email',
    submit: 'Send',
    sending: 'Sending...',
    sent: 'Your message was submitted and will appear after review. Thanks for reaching out!',
    error: 'Something went wrong, please try again.',
    empty: 'Be the first to leave a comment.',
    replyLabel: 'Caspian reply',
  },
  ru: {
    heading: 'Есть вопрос или комментарий?',
    subheading: 'Команда Caspian читает каждое сообщение и отвечает как можно скорее.',
    namePh: 'Имя (необязательно)',
    messagePh: 'Напишите свой комментарий или вопрос здесь...',
    contactToggle: 'Хотите, чтобы мы связались с вами напрямую? (необязательно)',
    contactNote: 'Эта информация отправляется только команде Caspian и никогда не показывается на сайте или другим пользователям.',
    telegramPh: 'Telegram ID',
    whatsappPh: 'Номер WhatsApp',
    emailPh: 'Email',
    submit: 'Отправить',
    sending: 'Отправка...',
    sent: 'Ваше сообщение отправлено и появится после проверки. Спасибо!',
    error: 'Что-то пошло не так, попробуйте ещё раз.',
    empty: 'Будьте первым, кто оставит комментарий.',
    replyLabel: 'Ответ Caspian',
  },
};

export default function PageComments() {
  const pathname = usePathname();
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const t = T[lang] || T.fa;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot -- must stay empty
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [showContact, setShowContact] = useState(false);
  const [telegramId, setTelegramId] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  // The homepage has its own conversion flow. Every other public page gets
  // this single shared form in one reliable position: after page content and
  // before the footer (rendered by app/providers.jsx).
  const hidden = !pathname || pathname === '/' || pathname.startsWith('/admin');

  const loadComments = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase || !pathname) return;
    setLoading(true);
    const { data } = await supabase
      .from('page_comments')
      .select('id, name, message, reply, reply_admin_name, replied_at, created_at')
      .eq('page_path', pathname)
      .eq('status', 'approved')
      .order('created_at', { ascending: false });
    setComments(data || []);
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    if (hidden) return;
    loadComments();
  }, [hidden, loadComments]);

  if (hidden) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim() || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page_path: pathname, lang, name, message, website,
          telegram_id: telegramId, whatsapp, email,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      setName('');
      setMessage('');
      setTelegramId('');
      setWhatsapp('');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  const content = (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="max-w-6xl mx-auto px-4 py-14 border-t border-white/10">
      <h2 className="text-xl font-bold text-foreground mb-1.5 flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-primary" /> {t.heading}
      </h2>
      <p className="text-sm text-foreground/55 mb-6">{t.subheading}</p>

      {status === 'sent' ? (
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-foreground/75 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          {t.sent}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden mb-10">
          <div className="grid md:grid-cols-3">
            <div className="hidden md:flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-b from-primary/10 to-transparent border-e border-white/10">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -bottom-1 -end-1 w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <CheckCircle2 className="w-5 h-5 text-background" />
                </div>
              </div>
              <p className="text-xs text-foreground/40 text-center leading-relaxed">{t.subheading}</p>
            </div>

            <div className="md:col-span-2 p-6">
              <form onSubmit={handleSubmit} className="relative space-y-4">
                {/* Honeypot: real visitors never see or fill this field. It remains
                    in the form, without expanding the document width. */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-0 top-0 w-px h-px opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <label className="block text-xs text-foreground/50 mb-1.5">{t.messagePh}</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    maxLength={2000}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground focus:outline-none focus:border-primary/40 resize-none"
                  />
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePh}
                  maxLength={80}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary/40"
                />

                <div className="rounded-xl border border-white/10 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowContact((v) => !v)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-3 text-xs text-foreground/55 hover:text-foreground/80 hover:bg-white/[0.03] transition"
                  >
                    <span>{t.contactToggle}</span>
                    <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${showContact ? 'rotate-180' : ''}`} />
                  </button>
                  {showContact && (
                    <div className="space-y-2 px-4 pb-4 pt-1 border-t border-white/10 bg-white/[0.02]">
                      <p className="text-[11px] text-foreground/40 leading-relaxed">{t.contactNote}</p>
                      <input
                        type="text"
                        value={telegramId}
                        onChange={(e) => setTelegramId(e.target.value)}
                        placeholder={t.telegramPh}
                        maxLength={100}
                        className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary/40"
                      />
                      <input
                        type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder={t.whatsappPh}
                        maxLength={40}
                        className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary/40"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPh}
                        maxLength={200}
                        className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary/40"
                      />
                    </div>
                  )}
                </div>

                {status === 'error' && <p className="text-xs text-red-400">{t.error}</p>}
                <button
                  type="submit"
                  disabled={status === 'sending' || !message.trim()}
                  className="inline-flex items-center gap-2 bg-primary text-black font-bold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" /> {status === 'sending' ? t.sending : t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {!loading && comments.length === 0 && (
        <p className="text-sm text-foreground/35">{t.empty}</p>
      )}

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-semibold text-foreground">{c.name || (isRtl ? 'کاربر' : 'Guest')}</span>
              <span className="text-[11px] text-foreground/35">{new Date(c.created_at).toLocaleDateString(isRtl ? 'fa-IR' : 'en-US')}</span>
            </div>
            <p className="text-sm text-foreground/70 leading-6">{c.message}</p>
            {c.reply && (
              <div className="mt-3 ms-4 ps-4 border-s-2 border-primary/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-primary">{t.replyLabel} — {c.reply_admin_name}</span>
                  <span className="text-[11px] text-foreground/35">{new Date(c.replied_at).toLocaleString(isRtl ? 'fa-IR' : 'en-US')}</span>
                </div>
                <p className="text-sm text-foreground/65 leading-6">{c.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return content;
}
