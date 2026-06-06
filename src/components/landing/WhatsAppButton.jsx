import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/37433149327"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl shadow-green-500/30 animate-gold-pulse cursor-pointer"
      style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 4px 20px rgba(0,0,0,0.3)' }}
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </motion.a>
  );
}