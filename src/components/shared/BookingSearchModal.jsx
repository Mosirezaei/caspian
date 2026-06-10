import React, { useState } from 'react';

export default function BookingSearchModal({
isOpen,
onClose,
title = 'رزرو'
}) {
const [city, setCity] = useState('ایروان');
const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
const [adults, setAdults] = useState(1);
const [infants, setInfants] = useState(0);
const [children, setChildren] = useState(0);
const [note, setNote] = useState('');

if (!isOpen) return null;

const handleSubmit = () => {
const message = `🏨 رزرو هتل

شهر: ${city}

تاریخ ورود: ${checkIn}
تاریخ خروج: ${checkOut}

بزرگسال: ${adults}
کودک زیر ۲ سال: ${infants}
کودک ۲ تا ۱۲ سال: ${children}

توضیحات:
${note}

پاسخ آنی`;

window.open(
  `https://wa.me/37433149327?text=${encodeURIComponent(message)}`,
  '_blank'
);

};

return (
<>
<div
className="fixed inset-0 bg-black/70 z-50"
onClick={onClose}
/>

  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
    <div className="glass-panel w-full max-w-xl rounded-3xl border border-primary/20 p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black gold-gradient-text">
          {title}
        </h2>

        <button
          onClick={onClose}
          className="text-xl text-foreground/60 hover:text-foreground"
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="شهر"
          className="w-full rounded-xl border border-white/10 bg-background/40 p-3"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="rounded-xl border border-white/10 bg-background/40 p-3"
          />

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="rounded-xl border border-white/10 bg-background/40 p-3"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">

          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            placeholder="بزرگسال"
            className="rounded-xl border border-white/10 bg-background/40 p-3"
          />

          <input
            type="number"
            min="0"
            value={infants}
            onChange={(e) => setInfants(e.target.value)}
            placeholder="زیر ۲ سال"
            className="rounded-xl border border-white/10 bg-background/40 p-3"
          />

          <input
            type="number"
            min="0"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            placeholder="۲ تا ۱۲ سال"
            className="rounded-xl border border-white/10 bg-background/40 p-3"
          />

        </div>

        <textarea
          rows="4"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="توضیحات اضافی"
          className="w-full rounded-xl border border-white/10 bg-background/40 p-3"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-4 rounded-2xl bg-primary text-background font-bold hover:opacity-90 transition"
        >
          جستجو
        </button>

        <p className="text-center text-sm text-primary">
          ⚡ پاسخ آنی در واتساپ
        </p>

      </div>

    </div>
  </div>
</>

);
}
