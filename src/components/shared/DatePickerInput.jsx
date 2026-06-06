/**
 * DatePickerInput — modal وسط صفحه، فقط میلادی، بدون تعطیلی
 */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, X } from 'lucide-react';

const GREG_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const GREG_DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa'];

export default function DatePickerInput({ value, onChange, placeholder, minDate }) {
  const [open, setOpen] = useState(false);

  const today = new Date(); today.setHours(0,0,0,0);
  const minD  = minDate
    ? (() => { const d = new Date(minDate); d.setHours(0,0,0,0); return d; })()
    : today;

  const [viewY, setViewY] = useState(today.getFullYear());
  const [viewM, setViewM] = useState(today.getMonth());

  const daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
  const firstDay    = new Date(viewY, viewM, 1).getDay(); // 0=Sun

  const prev = () => { if (viewM === 0) { setViewM(11); setViewY(y => y-1); } else setViewM(m => m-1); };
  const next = () => { if (viewM === 11) { setViewM(0); setViewY(y => y+1); } else setViewM(m => m+1); };

  const pick = (day) => {
    const d = new Date(viewY, viewM, day);
    if (d < minD) return;
    onChange(`${viewY}-${String(viewM+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`);
    setOpen(false);
  };

  const isoOf  = (day) => `${viewY}-${String(viewM+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const isSel  = (day) => value === isoOf(day);
  const isPast = (day) => new Date(viewY, viewM, day) < minD;
  const isToday= (day) => today.getFullYear()===viewY && today.getMonth()===viewM && today.getDate()===day;

  // Display in input
  let displayValue = placeholder || '';
  if (value) {
    const [y,m,d] = value.split('-');
    displayValue = `${y}/${m}/${d}`;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm hover:border-primary/40 transition-colors flex items-center justify-between gap-2"
      >
        <span className={value ? 'text-foreground' : 'text-foreground/40'}>{displayValue}</span>
        <Calendar className="w-4 h-4 text-primary/60 flex-shrink-0" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-xs rounded-2xl p-5 border border-primary/30"
            style={{ background: '#111827', boxShadow: '0 20px 60px rgba(0,0,0,0.9)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button type="button" onClick={prev}
                className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-primary/15 text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-base font-bold text-foreground">{GREG_MONTHS[viewM]} {viewY}</span>
              <button type="button" onClick={next}
                className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-primary/15 text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-1">
              {GREG_DAYS.map(d => (
                <div key={d} className="text-center text-xs text-foreground/50 font-medium py-1">{d}</div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={'e'+i} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day  = i + 1;
                const past = isPast(day);
                const sel  = isSel(day);
                const tod  = isToday(day);
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => pick(day)}
                    disabled={past}
                    className={[
                      'aspect-square flex items-center justify-center rounded-xl text-sm font-semibold transition-all select-none',
                      sel  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-110' : '',
                      tod && !sel ? 'border-2 border-primary text-primary' : '',
                      !past && !sel ? 'text-foreground hover:bg-primary/20 cursor-pointer' : '',
                      past ? 'text-foreground/25 cursor-not-allowed' : '',
                    ].join(' ')}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Close */}
            <button type="button" onClick={() => setOpen(false)}
              className="mt-4 w-full py-2 rounded-xl text-sm text-foreground/50 hover:text-foreground hover:bg-white/5 transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}