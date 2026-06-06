import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const GREGORIAN_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const GREGORIAN_DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const TIMES = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

export default function BookingCalendar({ selectedDate, selectedTime, onDateChange, onTimeChange }) {
  const { lang } = useLang();

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const labels = {
    fa: { selectTime: 'انتخاب ساعت', selected: 'انتخاب شده', available: 'آزاد' },
    en: { selectTime: 'Select Time', selected: 'Selected', available: 'Available' },
    ru: { selectTime: 'Выберите время', selected: 'Выбрано', available: 'Доступно' },
  };
  const t = labels[lang] || labels.en;

  const prevMonth = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else setViewMonth(m => m - 1); };
  const nextMonth = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else setViewMonth(m => m + 1); };

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const isoOf = (day) => `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const isPast = (day) => { const d = new Date(viewYear, viewMonth, day); d.setHours(0,0,0,0); return d < today; };
  const isSel  = (day) => isoOf(day) === selectedDate;
  const isToday= (day) => today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day;

  const handleDay = (day) => {
    if (isPast(day)) return;
    onDateChange(isoOf(day));
    onTimeChange('');
  };

  return (
    <div className="space-y-4">
      {/* Calendar */}
      <div className="glass-panel rounded-2xl border border-primary/20 p-3 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={prevMonth} className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-primary/10 text-primary active:scale-95 transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-foreground text-base">{GREGORIAN_MONTHS[viewMonth]} {viewYear}</span>
          <button type="button" onClick={nextMonth} className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-primary/10 text-primary active:scale-95 transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 mb-2">
          {GREGORIAN_DAYS.map((d, i) => <div key={i} className="text-center text-xs text-foreground/40 font-semibold py-1.5">{d}</div>)}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => <div key={'e' + i} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const past = isPast(day);
            const sel  = isSel(day);
            const tod  = isToday(day);
            return (
              <button key={day} type="button" onClick={() => handleDay(day)} disabled={past}
                className={`aspect-square flex items-center justify-center rounded-xl text-sm font-semibold transition-all active:scale-95
                  ${sel ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105' : ''}
                  ${tod && !sel ? 'border-2 border-primary text-primary' : ''}
                  ${!past && !sel ? 'hover:bg-primary/20 text-foreground/80' : ''}
                  ${past ? 'opacity-20 cursor-not-allowed text-foreground/40' : 'cursor-pointer'}`}>
                {day}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-foreground/50">{t.selected}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <span className="text-xs text-foreground/50">{t.available}</span>
          </div>
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="glass-panel rounded-2xl border border-primary/20 p-3 sm:p-5">
          <p className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t.selectTime}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {TIMES.map(time => (
              <button key={time} type="button" onClick={() => onTimeChange(time)}
                className={`py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-95 ${selectedTime === time
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-white/5 border border-white/10 text-foreground/70 hover:bg-primary/10 hover:border-primary/30'}`}>
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}