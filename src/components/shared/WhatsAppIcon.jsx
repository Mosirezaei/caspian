const WHATSAPP_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';

/** Official WhatsApp mark supplied by the client (Wikimedia Commons source). */
export default function WhatsAppIcon({ className = '', alt = '' }) {
  return <img src={WHATSAPP_LOGO} alt={alt} aria-hidden={alt ? undefined : true} className={`object-contain ${className}`} />;
}
