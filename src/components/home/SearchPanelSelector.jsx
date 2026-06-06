import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Hotel, Home as HomeIcon, Star, Bus } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { Link } from 'react-router-dom';
import HotelSearch from '@/components/hotel/HotelSearch';
import AirbnbSearch from '@/components/shared/AirbnbSearch';
import FlightSearch from '@/components/travel/FlightSearch';
import VipSearch from '@/components/home/VipSearch';

export default function SearchPanelSelector() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState('flight');
  const isRtl = lang === 'fa';

  const tabs = [
    { id: 'flight', icon: Plane, label: lang === 'fa' ? 'پرواز' : lang === 'en' ? 'Flight' : 'Авиа' },
    { id: 'hotel', icon: Hotel, label: lang === 'fa' ? 'هتل' : lang === 'en' ? 'Hotel' : 'Отель' },
    { id: 'apartment', icon: HomeIcon, label: lang === 'fa' ? 'آپارتمان' : lang === 'en' ? 'Apartment' : 'Квартира' },
    { id: 'bus', icon: Bus, label: lang === 'fa' ? 'اتوبوس/قطار' : lang === 'en' ? 'Bus/Train' : 'Автобус', link: '/travel/bus' },
    { id: 'vip', icon: Star, label: 'VIP' },
  ];

  const components = {
    flight: FlightSearch,
    hotel: HotelSearch,
    apartment: AirbnbSearch,
    vip: VipSearch,
  };

  const ActiveComponent = components[activeTab];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto">
      
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-6 justify-center flex-wrap">
        {tabs.map(({ id, icon: Icon, label, link }) => (
          link ? (
            <Link
              key={id}
              to={link}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 glass-panel border border-white/10 text-foreground/70 hover:text-primary hover:border-primary/40"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ) : (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === id
                ? 'bg-gradient-to-r from-primary to-primary/80 text-background gold-glow'
                : 'glass-panel border border-white/10 text-foreground/70 hover:text-primary hover:border-primary/40'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
          )
        ))}
      </div>

      {/* Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}