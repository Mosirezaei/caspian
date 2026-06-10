import React, { useState } from 'react';
import CityAutocomplete from '@/components/shared/CityAutocomplete';

export default function BookingSearchModal({
title = 'رزرو هتل'
}) {
const [city, setCity] = useState('');
const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
const [adults, setAdults] = useState(1);
const [infants, setInfants] = useState(0);
const [children, setChildren] = useState(0);
const [note, setNote] = useState('');

const handleSubmit = () => {
const message = `🏨 رزرو هتل

شهر مقصد: ${city}

تاریخ ورود: ${checkIn}
تاریخ خروج: ${checkOut}

بزرگسال: ${adults}
کودک زیر ۲ سال: ${infants}
کودک ۲ تا ۱۲ سال: ${children}

توضیحات:
${note}`;

window.open(
  `https://wa.me/37433149327?text=${encodeURIComponent(message)}`,
  '_blank'
);

};

const Counter = ({ label, value, setValue, min = 0 }) => (
<div>
<label className="block text-xs text-foreground/70 mb-1">
{label}
</label>

  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-background/40 p-1.5">
    <button
      type="button"
      onClick={() => setValue(Math.max(min, value - 1))}
      className="w-8 h-8 rounded-md bg-primary/10 text-primary font-bold"
    >
      -
    </button>

    <span className="font-bold text-sm">
      {value}
    </span>

    <button
      type="button"
      onClick={() => setValue(value + 1)}
      className="w-8 h-8 rounded-md bg-primary/10 text-primary font-bold"
    >
      +
    </button>
  </div>
</div>

);

return (
<div className="glass-panel max-w-4xl mx-auto rounded-2xl border border-primary/20 p-4 mb-6">

  <h2 className="text-lg font-black gold-gradient-text mb-4 text-center">
    {title}
  </h2>

  <div className="space-y-3">

    <div>
      <label className="block text-xs text-foreground/70 mb-1">
        شهر یا کشور مقصد
      </label>

      <CityAutocomplete
        value={city}
        onChange={setCity}
        isRtl={true}
        placeholder="ایروان، تفلیس، استانبول..."
        className="w-full rounded-lg border border-white/10 bg-background/40 p-2.5"
      />
    </div>

    <div className="grid grid-cols-2 gap-2">

      <div>
        <label className="block text-xs text-foreground/70 mb-1">
          تاریخ ورود
        </label>

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-background/40 p-2.5"
        />
      </div>

      <div>
        <label className="block text-xs text-foreground/70 mb-1">
          تاریخ خروج
        </label>

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-background/40 p-2.5"
        />
      </div>

    </div>

    <div className="grid grid-cols-3 gap-2">

      <Counter
        label="بزرگسال"
        value={adults}
        setValue={setAdults}
        min={1}
      />

      <Counter
        label="زیر ۲ سال"
        value={infants}
        setValue={setInfants}
      />

      <Counter
        label="۲ تا ۱۲ سال"
        value={children}
        setValue={setChildren}
      />

    </div>

    <textarea
      rows="3"
      value={note}
      onChange={(e) => setNote(e.target.value)}
      placeholder="توضیحات اضافی"
      className="w-full rounded-lg border border-white/10 bg-background/40 p-2.5"
    />

    <button
      onClick={handleSubmit}
      className="w-full py-3 rounded-xl bg-primary text-background font-bold hover:opacity-90 transition"
    >
      جستجوی هتل
    </button>

  </div>

</div>

);
}
