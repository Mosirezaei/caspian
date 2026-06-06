import React, { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

// لیست شهرهای محبوب برای پیشنهاد فوری
const POPULAR_CITIES = [
  'Yerevan, Armenia', 'Tehran, Iran', 'Tabriz, Iran', 'Mashhad, Iran', 'Isfahan, Iran', 'Shiraz, Iran',
  'Istanbul, Turkey', 'Ankara, Turkey', 'Antalya, Turkey', 'Dubai, UAE', 'Abu Dhabi, UAE',
  'Moscow, Russia', 'Saint Petersburg, Russia', 'Paris, France', 'London, UK',
  'Frankfurt, Germany', 'Berlin, Germany', 'Amsterdam, Netherlands', 'Rome, Italy',
  'Vienna, Austria', 'Madrid, Spain', 'Barcelona, Spain', 'Brussels, Belgium',
  'Warsaw, Poland', 'Prague, Czech Republic', 'Budapest, Hungary', 'Athens, Greece',
  'Bucharest, Romania', 'Sofia, Bulgaria', 'Belgrade, Serbia', 'Tbilisi, Georgia',
  'Baku, Azerbaijan', 'Beirut, Lebanon', 'Doha, Qatar', 'Kuwait City, Kuwait',
  'Muscat, Oman', 'Riyadh, Saudi Arabia', 'Cairo, Egypt', 'Almaty, Kazakhstan',
  'Tashkent, Uzbekistan', 'Bangkok, Thailand', 'Kuala Lumpur, Malaysia',
  'Singapore, Singapore', 'Tokyo, Japan', 'Beijing, China', 'Delhi, India',
  'New York, USA', 'Los Angeles, USA', 'Toronto, Canada', 'Sydney, Australia',
];

function filterCities(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return POPULAR_CITIES.filter(c => c.toLowerCase().includes(q)).slice(0, 5);
}

export default function CityAutocomplete({ value, onChange, placeholder, className = '', isRtl = false }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timerRef = useRef(null);

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    const instant = filterCities(val);
    setSuggestions(instant);
    setShowSuggestions(instant.length > 0);

    // اگر نتیجه کمتر از ۳ تا بود، از Nominatim هم بگیر
    if (val.length >= 3 && instant.length < 3) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(val)}&format=json&addressdetails=1&limit=5&featuretype=city`,
            { headers: { 'Accept-Language': 'en' } }
          );
          const json = await res.json();
          const results = json.map((item) => {
            const addr = item.address || {};
            const parts = [
              addr.city || addr.town || addr.village || item.display_name.split(',')[0],
              addr.country,
            ].filter(Boolean);
            return [...new Set(parts)].join(', ');
          }).filter(Boolean);
          const merged = [...new Set([...instant, ...results])].slice(0, 5);
          setSuggestions(merged);
          setShowSuggestions(merged.length > 0);
        } catch { /* keep instant results */ }
      }, 400);
    }
  };

  const select = (city) => {
    onChange(city);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={() => { const s = filterCities(value); if (s.length > 0) { setSuggestions(s); setShowSuggestions(true); } }}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        placeholder={placeholder}
        autoComplete="off"
        dir={isRtl ? 'rtl' : 'ltr'}
        className={className}
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-card border border-white/15 rounded-xl shadow-2xl overflow-hidden">
          {suggestions.map((s, i) => (
            <button
              key={i}
              type="button"
              onMouseDown={() => select(s)}
              className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/80 hover:bg-white/8 hover:text-primary transition-colors text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-primary/50 flex-shrink-0" />
              <span>{s}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}