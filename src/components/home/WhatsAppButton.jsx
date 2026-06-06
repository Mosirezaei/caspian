import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-32 left-6 z-50 flex flex-col items-start gap-3">
      <motion.button onClick={() => setOpen(!open)}
        initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        aria-label="تماس از طریق واتساپ"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl animate-gold-pulse cursor-pointer"
        style={{ boxShadow: '0 0 20px rgba(34,197,94,0.4), 0 4px 20px rgba(0,0,0,0.3)' }}>
        {open ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />}
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden w-72">
            <div className="bg-gradient-to-r from-green-600 to-green-500 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">کاسپین گروه ارمنستان</div>
                <div className="text-green-100 text-xs">معمولاً در کمتر از یک ساعت پاسخ می‌دهیم</div>
              </div>
              <button onClick={() => setOpen(false)} className="mr-auto text-white/70 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-[#0d0d0d]">
              <a href="https://wa.me/37433149327?text=سلام، میخواهم مشاوره بگیرم" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold hover:shadow-lg transition-all">
                شروع گفتگو در واتساپ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}