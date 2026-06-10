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
${note}

⚡ پاسخ آنی`;

window.open(
  `https://wa.me/37433149327?text=${encodeURIComponent(message)}`,
  '_blank'
);

};

const Counter = ({ label, value, setValue, min = 0 }) => (
<div>
<label className="block text-sm text-foreground/70 mb-2">
{label}
</label>

  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-background/40 p-2">
    <button
      type="button"
      onClick={() => setValue(Math.max(min, value - 1))}
      className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold"
    >
      −
    </button>

    <span className="font-bold text-lg">
      {value}
    </span>

    <button
      type="button"
      onClick={() => setValue(value + 1)}
      className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold"
    >
      +
    </button>
  </div>
</div>

);

return (
<div className="glass-panel w-full rounded-3xl border border-primary/20 p-6 mb-8">

  <h2 className="text-2xl font-black gold-gradient-text mb-6 text-center">
    {title}
  </h2>

  <div className="space-y-4">

    <div>
      <label className="block text-sm text-foreground/70 mb-2">
        شهر یا کشور مقصد
      </label>

      <CityAutocomplete
        value={city}
        onChange={setCity}
        isRtl={true}
        placeholder="ایروان، تفلیس، استانبول، دبی ..."
        className="w-full rounded-xl border border-white/10 bg-background/40 p-3"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

      <div>
        <label className="block text-sm text-foreground/70 mb-2">
          تاریخ ورود
        </label>

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-background/40 p-3"
        />
      </div>

      <div>
        <label className="block text-sm text-foreground/70 mb-2">
          تاریخ خروج
        </label>

        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-background/40 p-3"
        />
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

      <Counter
        label="بزرگسال"
        value={adults}
        setValue={setAdults}
        min={1}
      />

      <Counter
        label="کودک زیر ۲ سال"
        value={infants}
        setValue={setInfants}
      />

      <Counter
        label="کودک ۲ تا ۱۲ سال"
        value={children}
        setValue={setChildren}
      />

    </div>

    <div>
      <label className="block text-sm text-foreground/70 mb-2">
        توضیحات اضافی
      </label>

      <textarea
        rows="4"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="نام هتل، بودجه، تعداد اتاق، ویوی خاص و ..."
        className="w-full rounded-xl border border-white/10 bg-background/40 p-3"
      />
    </div>

    <button
      onClick={handleSubmit}
      className="w-full py-4 rounded-2xl bg-primary text-background font-bold hover:opacity-90 transition"
    >
      جستجوی هتل
    </button>

    <p className="text-center text-sm text-primary">
      ⚡ پاسخ آنی در واتساپ
    </p>

  </div>

</div>

);
}
