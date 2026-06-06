import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative glass-panel rounded-3xl p-7 sm:p-8 cursor-pointer transition-all duration-500 hover:border-primary/40 overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-foreground/60 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}