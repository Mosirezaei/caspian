// شماره‌های واتساپ سایت — یه‌جای مرکزی، به‌جای hardcode پراکنده تو کامپوننت‌ها.
// GENERAL: شماره‌ی عمومی کاسپین گروپ (اقامت، ویزا، ثبت شرکت، مقالات، صرافی، اجاره آپارتمان و ...)
// BOOKING: شماره‌ی اختصاصی رزرو هتل/تور/ترانسفر (خط جدا، مخصوص همین ۳ سرویس)
export const WHATSAPP_GENERAL = '37433149327';
export const WHATSAPP_BOOKING = '37433149329';

// serviceType هایی که PageSidebar می‌گیره -> کدوم شماره
const BOOKING_SERVICE_TYPES = new Set(['hotel', 'tour', 'transfer']);

export function getWhatsAppNumber(serviceType) {
  return BOOKING_SERVICE_TYPES.has(serviceType) ? WHATSAPP_BOOKING : WHATSAPP_GENERAL;
}

export function getWhatsAppUrl(serviceType, message = '') {
  const number = getWhatsAppNumber(serviceType);
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}
