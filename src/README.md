# Caspian Group Armenia — Technical Documentation
> **Platform:** Base44 | **Frontend:** React + Vite + Tailwind CSS
> **Purpose:** Immigration & travel services platform (fa/en/ru)
> **Live URL:** https://caspian.am

---

## 1. Project Structure

```
/
├── App.jsx                    # React Router — all routes
├── index.css                  # CSS tokens (Vazirmatn font, dark theme)
├── tailwind.config.js         # Tailwind theme
├── api/base44Client.js        # Base44 SDK client (public, no-auth)
├── lib/
│   ├── AuthContext.jsx        # Auth state (user, isAuthenticated, logout)
│   ├── LanguageContext.jsx    # Language + theme (fa/en/ru, dark/light)
│   ├── i18n.js                # Translation strings
│   └── query-client.js        # TanStack Query instance
├── data/
│   ├── servicesContent.js     # Dynamic service page registry
│   └── staticContent.js       # Static UI labels
├── hooks/
│   ├── useSEO.js              # Document title, meta, OG, JSON-LD
│   ├── useAdminReservations.js
│   └── useBookings.js
├── agents/
│   └── customer_support.json  # AI agent (WhatsApp + Telegram)
├── functions/                 # Serverless Deno backend functions
│   ├── sendConsultationRequest.js
│   ├── notifyServiceBooking.js
│   ├── sendBookingConfirmationEmail.js
│   ├── notifyNewReservation.js
│   ├── notifyNewUser.js
│   ├── sendPaymentConfirmation.js
│   ├── sendWhatsAppNotification.js
│   ├── getTelegramChatId.js
│   ├── getImmigrationNews.js
│   └── searchAirbnb.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx / Contact.jsx / Services.jsx
│   ├── ServiceBooking.jsx     # Consultation booking form
│   ├── MyBookings.jsx / Profile.jsx / ChatSupport.jsx
│   ├── TrackingReservation.jsx / VipSupport.jsx
│   ├── service/
│   │   ├── DynamicService.jsx # Slug-based renderer
│   │   ├── VisaSchengen / Romania / Russia / SouthAmerica
│   │   ├── EmbassyAppointment.jsx
│   │   ├── StudentVisa + Armenia/Russia/Turkey/Schengen/Romania/Georgia
│   │   ├── Residency + Turkey/Oman/UAE
│   │   ├── Hotel / TicketBooking / BusTrainBooking
│   │   ├── Exchange / Transfer / CompanyReg / StudentAdmission
│   ├── travel/
│   │   ├── Flight.jsx         # Trip.com redirect
│   │   └── Apartment.jsx      # Airbnb API
│   └── admin/
│       ├── AdminReservations / AdminPayments
│       ├── AdminServiceBookings / AdminUsers
└── components/
    ├── shared/
    │   ├── GlobalNavbar.jsx   # Multi-lang nav + dropdowns
    │   ├── ServicePageLayout.jsx # Hero + FAQ + WhatsApp CTA
    │   ├── StaticFAQ.jsx
    │   ├── DatePickerInput.jsx
    │   └── CityAutocomplete.jsx
    ├── home/
    │   ├── HeroSection / ServicesSection / AboutSection
    │   ├── WhySection / ContactFooter / CurrencyWidget
    │   ├── NewsCarousel / ConsultModal
    └── booking/
        ├── BookingHubPanel / BookingFAQ / ServicesExplainer
```

---

## 2. Backend Architecture

**Platform: Base44 BaaS**

| Service | Details |
|---------|---------|
| Database | Managed NoSQL (MongoDB-like). Via `base44.entities.*` |
| Auth | JWT sessions, managed by platform |
| Functions | Serverless Deno Deploy (`/functions/*.js`) |
| Automations | Entity triggers + scheduled cron |
| AI Agent | LLM agent with WhatsApp/Telegram channels |
| Email | Built-in via Resend (`Core.SendEmail`) |

**Request Flow:**
```
Browser → React Frontend
  ├── base44.entities.X.list()   → Base44 API → MongoDB
  ├── base44.functions.invoke()  → Deno Function
  └── base44.auth.me()           → Auth Service
```

**Function pattern:**
```javascript
import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';
Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const user = await base44.auth.me(); // optional
  // Service role (admin):
  await base44.asServiceRole.entities.ServiceBooking.list();
  return Response.json({ success: true });
});
```

---

## 3. Database Schema (Entities)

### Entity: `TicketReservation`
```sql
CREATE TABLE ticket_reservations (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_date    TIMESTAMPTZ DEFAULT NOW(),
  updated_date    TIMESTAMPTZ DEFAULT NOW(),
  created_by      TEXT,                          -- user email
  ticket_type     TEXT CHECK (IN ('air','ground')),
  trip_type       TEXT CHECK (IN ('oneway','roundtrip')),
  from_city       TEXT NOT NULL,
  to_city         TEXT NOT NULL,
  depart_date     TEXT NOT NULL,
  return_date     TEXT,
  passengers      INTEGER,
  passenger_name  TEXT NOT NULL,
  passenger_phone TEXT NOT NULL,
  passenger_email TEXT,
  airline_or_operator TEXT,
  duration        TEXT,
  price_per_person NUMERIC,
  total_price     NUMERIC,
  payment_method  TEXT CHECK (IN ('rial_transfer','usd_card','crypto_usdt')),
  payment_status  TEXT DEFAULT 'pending',       -- pending|paid|confirmed|cancelled
  payment_reference TEXT,
  status          TEXT DEFAULT 'new',           -- new|processing|confirmed|cancelled
  admin_notes     TEXT,
  language        TEXT DEFAULT 'fa'
);

-- RLS:
-- read:   own record OR passenger_email match OR role=admin
-- write:  anyone (public)
-- update/delete: admin only
```

### Entity: `ServiceBooking`
```sql
CREATE TABLE service_bookings (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_date    TIMESTAMPTZ DEFAULT NOW(),
  updated_date    TIMESTAMPTZ DEFAULT NOW(),
  created_by      TEXT,
  service_type    TEXT NOT NULL,
  -- values: hotel | ticket-booking | visa-schengen | visa-russia |
  --         visa-romania | visa-south-america | residency |
  --         company-registration | student-admission |
  --         exchange | embassy-appointment
  booking_date    DATE NOT NULL,
  booking_time    TEXT NOT NULL,                -- HH:MM
  customer_name   TEXT NOT NULL,
  customer_email  TEXT,
  customer_phone  TEXT NOT NULL,
  notes           TEXT,
  status          TEXT DEFAULT 'pending',       -- pending|confirmed|completed|cancelled
  language        TEXT DEFAULT 'fa'             -- fa|en|ru
);
```

### Entity: `FAQ`
```sql
CREATE TABLE faqs (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_date TIMESTAMPTZ DEFAULT NOW(),
  question     TEXT NOT NULL,
  answer       TEXT NOT NULL,
  service_type TEXT NOT NULL,
  language     TEXT DEFAULT 'fa',               -- fa|en|ru
  display_order INTEGER DEFAULT 0
);
```

### Entity: `User` (Built-in)
```sql
-- Managed by platform. Read-only fields: id, email, full_name
-- Editable: role (admin | user)
-- Users invited via: base44.users.inviteUser(email, role)
```

---

## 4. صفحات و قسمت‌های متصل به بکند

### 🟢 فرم مشاوره رایگان (ConsultModal)
- **صفحه:** همه صفحات (دکمه "مشاوره رایگان" در Hero و Contact)
- **فانکشن:** `sendConsultationRequest`
- **کار:** اطلاعات فرم (نام، تلفن، خدمت) را به **تلگرام ادمین** و **واتساپ** ارسال می‌کند
- **فایل:** `components/home/ConsultModal.jsx`

### 🟢 اخبار مهاجرتی
- **صفحه:** `/immigration-news`
- **Entity:** `ImmigrationNews` (خواندن از دیتابیس)
- **فانکشن:** `getImmigrationNews` + `getArmeniaImmigrationNews` (هر ۸ ساعت)
- **کار:** اخبار از NewsAPI گرفته و در دیتابیس ذخیره می‌شود، صفحه آن‌ها را نمایش می‌دهد
- **فایل:** `pages/ImmigrationNews.jsx`

### 🟢 اسلایدر خبری Hero (NewsSlider)
- **صفحه:** صفحه اصلی
- **فانکشن:** `getArmeniaImmigrationNews` 
- **کار:** اخبار مهاجرتی ارمنستان را در اسلایدر کوچک Hero نمایش می‌دهد
- **فایل:** `components/home/NewsSlider.jsx`

### 🟡 رزرو بلیط (TicketReservation)
- **صفحه:** `/travel/flight`, `/travel/bus`
- **Entity:** `TicketReservation` (ایجاد رکورد)
- **Automation:** هنگام ثبت رزرو → `notifyNewReservation` فعال می‌شود
- **کار:** اطلاعات رزرو ذخیره شده، ادمین از طریق تلگرام و واتساپ خبردار می‌شود

### 🟡 رزرو خدمات (ServiceBooking)
- **صفحه:** صفحات ویزا، اقامت، هتل و سایر خدمات
- **Entity:** `ServiceBooking` (ایجاد رکورد)
- **Automation:** هنگام ثبت → `notifyServiceBooking` + `sendBookingConfirmationEmail`
- **کار:** رزرو ذخیره، ایمیل تأیید به مشتری، اطلاع‌رسانی به ادمین

### 🔴 سوالات متداول (FAQ)
- **Entity:** `FAQ` (در دیتابیس ذخیره است، اما صفحات فعلاً از داده‌های استاتیک استفاده می‌کنند)
- **وضعیت:** Entity آماده است ولی صفحات به آن وصل نیستند

### ⚪ صفحات استاتیک (بکند ندارند)
- صفحات ویزا، اقامت، تحصیلی (محتوا hardcode است)
- صفحه About، Services
- گالری ارمنستان، Hero اسلایدر

---

## 5. Backend Functions

| Function | Trigger | Description |
|----------|---------|-------------|
| `sendConsultationRequest` | Frontend call | Email + Telegram on consult form |
| `notifyServiceBooking` | Auto: ServiceBooking create | Admin email + Telegram |
| `sendBookingConfirmationEmail` | Auto: ServiceBooking create | HTML email to customer |
| `notifyNewReservation` | Auto: TicketReservation create | Email + Telegram + WhatsApp |
| `notifyNewUser` | Auto: User create | Telegram alert to admin |
| `sendPaymentConfirmation` | Called by notifyNewReservation | Crypto payment instructions |
| `sendWhatsAppNotification` | Called by notifyNewReservation | Via CallMeBot API |
| `getTelegramChatId` | Manual | Fetch bot chat ID |
| `getImmigrationNews` | Scheduled every 8h | NewsAPI → store in DB |
| `searchAirbnb` | Frontend call | Proxy Airbnb API |

---

## 6. Automations (Triggers)

| Name | Type | Entity/Schedule | Function | Status |
|------|------|----------------|----------|--------|
| Notify on New Service Booking | entity | ServiceBooking → create | notifyServiceBooking | ✅ Active |
| Update Immigration News | scheduled | Every 8 hours | getImmigrationNews | ✅ Active |
| Send Booking Confirmation Email | entity | ServiceBooking → create | sendBookingConfirmationEmail | ✅ Active |
| Notify Admin on New Service Booking | entity | ServiceBooking → create | notifyServiceBooking | ✅ Active |
| Notify Admin on New Reservation | entity | TicketReservation → create | notifyNewReservation | ⚠️ Failing |

---

## 7. Authentication

- **Type:** Public app — login optional (`requiresAuth: false`)
- **Admin routes:** `/admin/*` check `user.role === 'admin'`
- **Flow:** Check token → `base44.auth.me()` → set user context
- **Login:** `base44.auth.redirectToLogin(returnUrl)`
- **Logout:** `base44.auth.logout()`

---

## 8. Secrets & Environment Variables

| Secret | Used In | Purpose |
|--------|---------|---------|
| `ADMIN_EMAIL` | All notify functions | Admin notification target |
| `TELEGRAM_BOT_TOKEN` | All notify functions | Telegram Bot API |
| `TELEGRAM_CHAT_ID` | All notify functions | Target Telegram group |
| `CALLMEBOT_API_KEY` | sendWhatsAppNotification | WhatsApp via CallMeBot |
| `NEWSAPI_KEY` | getImmigrationNews | News API |
| `AIRBNB_AUTH_TOKEN` | searchAirbnb | Airbnb API |
| `AIRBNB_ACCOUNT_CID` | searchAirbnb | Airbnb account ID |
| `STRIPE_SECRET_KEY` | Stripe payments | Backend payment processing |
| `STRIPE_PUBLISHABLE_KEY` | Stripe frontend | Stripe.js |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook | Signature verification |

---

## 9. AI Agent

**File:** `agents/customer_support.json`
- Multilingual (fa/en/ru) customer support bot
- Channels: **WhatsApp** + **Telegram**
- No entity access (informational only)
- Adds disclaimer to each response with contact info

---

## 10. Frontend SDK Usage

```javascript
import { base44 } from '@/api/base44Client';

// CRUD
await base44.entities.ServiceBooking.list();
await base44.entities.ServiceBooking.filter({ created_by: user.email }, '-created_date', 20);
await base44.entities.ServiceBooking.create({ service_type: 'visa-schengen', ... });
await base44.entities.ServiceBooking.update(id, { status: 'confirmed' });
await base44.entities.ServiceBooking.delete(id);

// Call function
const res = await base44.functions.invoke('sendConsultationRequest', { name, phone, ... });

// Real-time
const unsub = base44.entities.ServiceBooking.subscribe((event) => {
  // event.type: 'create' | 'update' | 'delete'
  // event.data: entity data
});
return unsub; // cleanup
```

---

## 11. Migration to Supabase

### Database
Use SQL schemas from Section 3. Enable RLS in Supabase dashboard.

```sql
-- Example RLS for ticket_reservations:
ALTER TABLE ticket_reservations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_insert" ON ticket_reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "read_own" ON ticket_reservations FOR SELECT
  USING (auth.email() = created_by OR auth.email() = passenger_email);
CREATE POLICY "admin_all" ON ticket_reservations USING (
  (SELECT role FROM public.users WHERE id = auth.uid()) = 'admin'
);
```

### Auth
```javascript
// Base44 → Supabase
base44.auth.me()                    → supabase.auth.getUser()
base44.auth.redirectToLogin()       → supabase.auth.signInWithOAuth()
base44.auth.logout()                → supabase.auth.signOut()
```

### Entity Calls
```javascript
// Base44 → Supabase
base44.entities.X.list()            → supabase.from('x').select()
base44.entities.X.filter({k:v})     → supabase.from('x').select().eq('k', v)
base44.entities.X.create(data)      → supabase.from('x').insert(data)
base44.entities.X.update(id, data)  → supabase.from('x').update(data).eq('id', id)
base44.entities.X.delete(id)        → supabase.from('x').delete().eq('id', id)
base44.entities.X.subscribe(fn)     → supabase.channel().on('postgres_changes', fn)
```

### Functions → Supabase Edge Functions
```bash
# Each /functions/*.js becomes a Supabase Edge Function:
supabase functions new sendConsultationRequest
# Replace:
#   base44.asServiceRole.integrations.Core.SendEmail → Resend API directly
#   base44.asServiceRole.entities.X.list()           → supabase.from('x').select()
#   Deno.env.get('SECRET')                            → Deno.env.get('SECRET') (same!)
```

### Automations → Supabase Webhooks + pg_cron
```sql
-- Entity trigger (ServiceBooking create) → Database Webhook to Edge Function URL

-- Scheduled (every 8h):
SELECT cron.schedule('update-news', '0 */8 * * *', $$
  SELECT net.http_post(
    url := 'https://YOUR_PROJECT.supabase.co/functions/v1/getImmigrationNews',
    headers := '{"Authorization": "Bearer YOUR_ANON_KEY"}'::jsonb
  );
$$);
```

### Built-in Integrations → Direct APIs
| Base44 | Supabase Equivalent |
|--------|-------------------|
| `Core.SendEmail` | Resend API: `fetch('https://api.resend.com/emails', ...)` |
| `Core.InvokeLLM` | OpenAI SDK: `new OpenAI({ apiKey })` |
| `Core.UploadFile` | `supabase.storage.from('bucket').upload(path, file)` |
| `Core.GenerateImage` | OpenAI DALL-E API |

---

*Generated: 2026-06-06 | Caspian Group Armenia*