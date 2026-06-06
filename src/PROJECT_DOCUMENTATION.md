# 📋 مستندات پروژه کاسپین گروپ

**تاریخ تولید:** ۲۶/۵/۱۴۰۵  
**نسخه:** ۱.۰  
**زبان:** فارسی  

---

## 📑 فهرست مطالب

1. [معماری کلی](#معماری-کلی)
2. [ساختار صفحات](#ساختار-صفحات)
3. [دیتابیس](#دیتابیس)
4. [Backend Functions](#backend-functions)
5. [داده‌های ثابت](#داده‌های-ثابت)
6. [Components اصلی](#components-اصلی)
7. [جریان داده](#جریان-داده)
8. [Secrets و API Keys](#secrets-و-api-keys)
9. [خلاصه نهایی](#خلاصه-نهایی)

---

## معماری کلی

**پروژه:** سایت خدمات مهاجرتی و سفارتی کاسپین گروپ  
**تکنولوژی:** React + Base44 Backend as a Service  
**نسخه:** v1.0  

### مشخصات کلی:
- **۳۷ صفحه مختلف**
- **۳ Entity متغیر** (Read/Write)
- **۱۰ Backend Function**
- **۲۷ صفحه خدماتی**
- **۳ زبان:** فارسی، انگلیسی، روسی

---

## ساختار صفحات

### 1. صفحات استاتیک (۳ صفحه)

محتوای ثابت که از فایل‌های محلی بارگزاری می‌شود:

| صفحه | Route | فایل | توضیح |
|------|-------|------|-------|
| صفحه اصلی | `/` | `pages/Home.jsx` | صفحه رو درهم با تمام بخش‌ها |
| درباره | `/about` | `pages/About.jsx` | اطلاعات شرکت |
| تماس | `/contact` | `pages/Contact.jsx` | فرم تماس |
| خدمات | `/services` | `pages/Services.jsx` | لیست تمام ۲۷ خدمت |

---

### 2. صفحات کاربری (۵ صفحه)

رزرو و مدیریت رزروهای کاربران:

| صفحه | Route | Entity | توضیح |
|------|-------|--------|-------|
| رزرو خدمات | `/book` | `ServiceBooking` | فرم رزرو سرویس‌ها |
| رزروهای من | `/my-bookings` | Read | نمایش رزروهای کاربر |
| پیگیری رزرو | `/track` | Read | جستجوی رزرو با شماره |
| چت پشتیبانی | `/chat` | - | صفحه پشتیبانی آنلاین |
| پروفایل | `/profile` | User | اطلاعات کاربر |

**Entity مرتبط:**
- `ServiceBooking` — رزروهای تمام سرویس‌ها
- `TicketReservation` — رزروهای بلیط

---

### 3. صفحات ادمین (۴ صفحه)

مدیریت رزروها و کاربران:

| صفحه | Route | Entity | توضیح |
|------|-------|--------|-------|
| رزروهای بلیط | `/admin/reservations` | `TicketReservation` | مدیریت رزروهای بلیط |
| پرداخت‌ها | `/admin/payments` | - | مدیریت پرداخت‌ها |
| رزروهای سرویس | `/admin/bookings` | `ServiceBooking` | مدیریت رزروهای خدمات |
| کاربران | `/admin/users` | User | مدیریت کاربران |

---

### 4. صفحات ویزا (۶ صفحه)

هر کدوم صفحه **جداگانه** با محتوای خاص:

| صفحه | Route | فایل | قالب |
|------|-------|------|-----|
| شینگن | `/visa/schengen` | `pages/service/VisaSchengen.jsx` | `ServicePageLayout` |
| رومانی | `/visa/romania` | `pages/service/VisaRomania.jsx` | `ServicePageLayout` |
| روسیه | `/visa/russia` | `pages/service/VisaRussia.jsx` | `ServicePageLayout` |
| آمریکای جنوبی | `/visa/south-america` | `pages/service/VisaSouthAmerica.jsx` | `ServicePageLayout` |
| سفارت آمریکا | `/visa/embassy-usa` | `pages/service/EmbassyAppointment.jsx` | `ServicePageLayout` |
| سفارت کانادا | `/visa/embassy-canada` | `pages/service/EmbassyAppointment.jsx` | `ServicePageLayout` |

**نکته:** تمام ۶ صفحه از یک `ServicePageLayout` واحد استفاده می‌کنند.

---

### 5. صفحات ویزای تحصیلی (۷ صفحه)

هر کدوم صفحه **جداگانه** برای کشور مختلف:

| صفحه | Route | فایل |
|------|-------|------|
| صفحه روی درهم | `/student-visa` | `pages/service/StudentVisa.jsx` |
| ارمنستان | `/student-visa/armenia` | `pages/service/StudentVisaArmenia.jsx` |
| روسیه | `/student-visa/russia` | `pages/service/StudentVisaRussia.jsx` |
| ترکیه | `/student-visa/turkey` | `pages/service/StudentVisaTurkey.jsx` |
| شینگن | `/student-visa/schengen` | `pages/service/StudentVisaSchengen.jsx` |
| رومانی | `/student-visa/romania` | `pages/service/StudentVisaRomania.jsx` |
| گرجستان | `/student-visa/georgia` | `pages/service/StudentVisaGeorgia.jsx` |

**ویژگی:** هر صفحه شامل:
- لیست دانشگاه‌های برتر
- هزینه‌های تحصیل
- شرایط دخول
- مشروط‌ها

---

### 6. صفحات اقامت (۴ صفحه)

رزیدنسی برای کشورهای مختلف:

| صفحه | Route | فایل |
|------|-------|------|
| ارمنستان | `/residency/armenia` | `pages/service/Residency.jsx` |
| ترکیه | `/residency/turkey` | `pages/service/ResidencyTurkey.jsx` |
| عمان | `/residency/oman` | `pages/service/ResidencyOman.jsx` |
| امارات | `/residency/uae` | `pages/service/ResidencyUAE.jsx` |

**محتوا:** انواع اقامت، مزایا، شرایط، هزینه‌ها

---

### 7. صفحات سفر (۷ صفحه)

خدمات سفر و رزرو:

| صفحه | Route | فایل | عملکرد |
|------|-------|------|--------|
| پرواز | `/travel/flight` | `pages/travel/Flight.jsx` | جستجوی Skyscanner |
| هتل | `/travel/hotel` | `pages/service/Hotel.jsx` | جستجوی Booking.com |
| آپارتمان | `/travel/apartment` | `pages/travel/Apartment.jsx` | جستجوی Airbnb (Affiliate) |
| اتوبوس/قطار | `/travel/bus` | `pages/service/TicketBooking.jsx` | رزرو و پرداخت |
| ترانسفر | `/travel/transfer` | `pages/service/Exchange.jsx` | رزرو ترانسفر |
| صرافی | `/travel/exchange` | `pages/service/Exchange.jsx` | معاملات ارز |
| VIP | `/travel/vip` | `pages/VipSupport.jsx` | خدمات VIP |

**جستجوهای یکپارچه:**
- Flight: `components/travel/FlightSearch.jsx` → Skyscanner
- Hotel: `components/hotel/HotelSearch.jsx` → Booking.com
- Apartment: `components/shared/AirbnbSearch.jsx` → Airbnb

---

### 8. صفحات دیگر (۲ صفحه)

| صفحه | Route | فایل |
|------|-------|------|
| ثبت شرکت | `/services/company-registration` | `pages/service/CompanyReg.jsx` |
| پذیرش دانشجویی | `/services/student-admission` | `pages/service/StudentAdmission.jsx` |

---

### 9. صفحات Dynamic (۱ صفحه)

**Route:** `/service/:slug`  
**فایل:** `pages/service/DynamicService.jsx`  
**توضیح:** برای خدمات دیگری که صفحه جداگانه ندارند (قرائت از `data/servicesContent.js`)

---

## دیتابیس

### Base44 Entities

پروژه فقط **۳ Entity** دارد که برای داده‌های متغیر استفاده می‌شود:

#### 1. **ServiceBooking** ✅ فعال

**استفاده:** رزرو تمام سرویس‌ها (ویزا، اقامت، صرافی، etc.)

```javascript
{
  service_type: enum ['hotel', 'visa-schengen', 'visa-russia', ...],
  booking_date: date,
  booking_time: string (HH:MM),
  customer_name: string,
  customer_email: string,
  customer_phone: string,
  notes: string,
  status: enum ['pending', 'confirmed', 'completed', 'cancelled'],
  language: enum ['fa', 'en', 'ru']
}
```

**صفحات کاربردی:**
- `/book` — ایجاد رزرو
- `/my-bookings` — نمایش رزروهای کاربر
- `/admin/bookings` — مدیریت ادمین

---

#### 2. **TicketReservation** ✅ فعال

**استفاده:** رزرو بلیط (اتوبوس، قطار، هواپیما)

```javascript
{
  ticket_type: enum ['air', 'ground'],
  trip_type: enum ['oneway', 'roundtrip'],
  from_city: string,
  to_city: string,
  depart_date: string,
  return_date: string,
  passengers: number,
  passenger_name: string,
  passenger_phone: string,
  passenger_email: string,
  airline_or_operator: string,
  price_per_person: number,
  total_price: number,
  payment_method: enum ['rial_transfer', 'usd_card', 'crypto_usdt'],
  payment_status: enum ['pending', 'paid', 'confirmed', 'cancelled'],
  status: enum ['new', 'processing', 'confirmed', 'cancelled']
}
```

**صفحات کاربردی:**
- `/travel/bus` — رزرو بلیط
- `/my-bookings` — نمایش رزروهای کاربر
- `/admin/reservations` — مدیریت ادمین

---

#### 3. **FAQ** ✅ فعال

**استفاده:** سوالات متداول برای هر سرویس

```javascript
{
  question: string,
  answer: string,
  service_type: enum [۲۲ نوع خدمت],
  language: enum ['fa', 'en', 'ru'],
  order: number (ترتیب نمایش)
}
```

**صفحات کاربردی:**
- تمام ۲۷ صفحه خدماتی (نمایش خودکار FAQ مرتبط)

---

#### ❌ Entities حذف شده

| Entity | دلیل حذف |
|--------|----------|
| `BlogPost` | صفحه بلاگ حذف شد (۲۶/۵/۱۴۰۵) |

---

### تعداد Records (تقریبی)

| Entity | Records | متغیر/ثابت |
|--------|---------|-----------|
| ServiceBooking | 50+ | ✅ متغیر |
| TicketReservation | 30+ | ✅ متغیر |
| FAQ | 100+ | ✅ متغیر |

---

## Backend Functions

۱۰ تا Backend Function برای کارهای خاص:

### 1. **searchAirbnb**

**مقصد:** جستجوی Airbnb و ارسال لینک Affiliate

**ورودی:**
```javascript
{ city: 'Yerevan, Armenia' }
```

**خروجی:**
```javascript
{
  accountCid: 'AFFILIATE_ID',
  featuredListings: [
    { id, title, image, price, rating, ... }
  ]
}
```

**استفاده:** `/travel/apartment` — جستجوی آپارتمان

---

### 2. **sendConsultationRequest**

**مقصد:** ارسال درخواست مشاوره به ایمیل/واتساپ

**ورودی:**
```javascript
{
  name: string,
  email: string,
  phone: string,
  service: string,
  message: string
}
```

**استفاده:** فرم‌های تماس

---

### 3. **sendBookingConfirmationEmail**

**مقصد:** ارسال تایید رزرو به ایمیل کاربر

**ورودی:**
```javascript
{
  bookingId: string,
  customerEmail: string,
  bookingDetails: object
}
```

**استفاده:** بعد از رزرو موفق

---

### 4. **notifyNewReservation**

**مقصد:** اطلاع سازمان از رزرو جدید (واتساپ/تلگرام)

**ورودی:**
```javascript
{
  reservationId: string,
  customerName: string,
  serviceType: string
}
```

**استفاده:** هر رزرو جدید (ServiceBooking یا TicketReservation)

---

### 5. **notifyServiceBooking**

**مقصد:** اطلاع ادمین از رزرو خدمات جدید

**ورودی:**
```javascript
{
  bookingId: string,
  serviceType: string,
  customerName: string
}
```

**استفاده:** رزرو سرویس جدید

---

### 6. **notifyNewUser**

**مقصد:** ارسال خوش‌آمدگویی به کاربر جدید

**ورودی:**
```javascript
{
  email: string,
  fullName: string
}
```

**استفاده:** ثبت‌نام کاربر جدید

---

### 7. **sendPaymentConfirmation**

**مقصد:** تایید پرداخت

**ورودی:**
```javascript
{
  email: string,
  amount: number,
  currency: string,
  transactionId: string
}
```

**استفاده:** بعد از پرداخت موفق Stripe

---

### 8. **sendWhatsAppNotification**

**مقصد:** ارسال پیام واتساپ

**ورودی:**
```javascript
{
  phoneNumber: string,
  message: string
}
```

**استفاده:** اطلاع‌رسانی‌های فوری

---

### 9. **getImmigrationNews**

**مقصد:** دریافت اخبار مهاجرت از API با استفاده از LLM

**ورودی:**
```javascript
{
  category?: string,
  language?: string
}
```

**خروجی:**
```javascript
{
  news: [
    { title, summary, source, date }
  ]
}
```

**API:** NewsAPI.com  
**استفاده:** بخش اخبار صفحه اصلی

---

### 10. **getTelegramChatId**

**مقصد:** دریافت Chat ID از تلگرام

**ورودی:**
```javascript
{ }
```

**خروجی:**
```javascript
{
  chatId: string
}
```

**استفاده:** برای اطلاع‌رسانی‌های تلگرام

---

## داده‌های ثابت

تمام متن‌های استاتیک و محتوای ثابت در پوشه `data/`:

### 1. **data/servicesContent.js**

متن دقیق و شرح تمام ۲۷ خدمت:

```javascript
export const servicesContent = {
  'visa-schengen': {
    titleFa: 'ویزای شینگن',
    titleEn: 'Schengen Visa',
    titleRu: 'Шенгенская виза',
    blocks: {
      fa: [
        { title: 'درباره', content: '...' },
        { title: 'شرایط', content: '...' },
        ...
      ]
    }
  },
  'hotel': { ... },
  'residency-armenia': { ... },
  // ... ۲۴ خدمت دیگر
}
```

**استفاده:**
- صفحات سرویس جداگانه (مثلاً `VisaSchengen.jsx`)
- `DynamicService.jsx` برای صفحات dynamic

---

### 2. **data/staticContent.js**

متن‌های کلی و برچسب‌های ثابت

---

## Components اصلی

### Shared Components (مشترک)

```
components/shared/
├── ServicePageLayout.jsx      ← قالب یکسان ۲۷ صفحه
├── StaticFAQ.jsx             ← نمایش FAQ برای هر سرویس
├── GlobalNavbar.jsx           ← منوی سایت
├── AirbnbSearch.jsx          ← جستجوی Airbnb
├── CityAutocomplete.jsx       ← تکمیل خودکار شهر
├── DatePickerInput.jsx        ← انتخاب تاریخ
├── BookingCalendar.jsx        ← تقویم رزرو
└── AirlinesFooter.jsx         ← فوتر
```

### Home Components

```
components/home/
├── HeroSection.jsx            ← بخش بالایی صفحه اصلی
├── ServicesSection.jsx        ← ۲۷ خدمت
├── AboutSection.jsx           ← درباره ما
├── WhySection.jsx             ← چرا کاسپین
├── CurrencyWidget.jsx         ← نمایش نرخ ارز
├── ContactFooter.jsx          ← فوتر تماس
└── WhatsAppButton.jsx         ← دکمه واتساپ
```

### Travel Components

```
components/travel/
├── FlightSearch.jsx           ← جستجوی پرواز
└── ...
```

### Hotel Components

```
components/hotel/
└── HotelSearch.jsx            ← جستجوی هتل
```

---

## جریان داده

```
┌─────────────────────────────────────────────────────────┐
│                    صفحه اصلی (Home)                     │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┬──────────────┬─────────┐
        │                         │              │         │
    ServicesSection          AboutSection   WhySection  CurrencyWidget
    (۲۷ خدمت)
        │
        ├─── کلیک Visa ───→ VisaSchengen.jsx
        │                    + StaticFAQ
        │                    + محتوا از data/
        │
        ├─── کلیک Student Visa ───→ StudentVisaArmenia.jsx
        │                            + StaticFAQ
        │
        ├─── کلیک Travel ───→ Hotel.jsx
        │                      ├── HotelSearch.jsx → Booking.com
        │                      ├── AirbnbSearch.jsx → Airbnb (Affiliate)
        │                      └── FlightSearch.jsx → Skyscanner
        │
        └─── کلیک Residency ───→ Residency.jsx
                                 + StaticFAQ

┌──────────────────────────────────────────────────────────┐
│              صفحات با رزرو (فعل‌وانفعال)                 │
└───────────────────────┬──────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   ServiceBooking   TicketBooking    HotelSearch
   (/book)         (/travel/bus)     (/travel/hotel)
        │               │               │
        │               │               │
    Validate        Validate        Validate
        │               │               │
        ↓               ↓               ↓
   Create Entity   Create Entity    Redirect
   (ServiceBooking) (TicketReservation) (Booking.com)
        │               │
        └───────────────┴─→ Function: sendBookingConfirmationEmail
                           Function: notifyNewReservation
                           
┌──────────────────────────────────────────────────────────┐
│         صفحات کاربری (خواندن و پیگیری)                   │
└───────────────────────┬──────────────────────────────────┘
                        │
        ┌───────────────┼────────────────┐
        │               │                │
   MyBookings      TrackingReservation  Profile
   (/my-bookings)  (/track)            (/profile)
        │               │                │
        ├─ Read ────→ ServiceBooking     │
        │              TicketReservation  │
        └─────────────────────────────────┘
```

---

## Secrets و API Keys

### تنظیمات جاری

```
AIRBNB_ACCOUNT_CID      = [AFFILIATE_ID]
AIRBNB_AUTH_TOKEN       = [TOKEN]
TELEGRAM_BOT_TOKEN      = [TOKEN]
TELEGRAM_CHAT_ID        = [ID]
ADMIN_EMAIL             = [EMAIL]
NEWSAPI_KEY             = [KEY]
CALLMEBOT_API_KEY       = [KEY]

STRIPE_SECRET_KEY       = [KEY] (غیرفعال - test mode)
STRIPE_PUBLISHABLE_KEY  = [KEY]
STRIPE_WEBHOOK_SECRET   = [SECRET]
```

### عملکرد

| Secret | استفاده | عملکرد |
|--------|---------|--------|
| `AIRBNB_ACCOUNT_CID` | جستجوی آپارتمان | ارسال Affiliate ID |
| `TELEGRAM_BOT_TOKEN` | اطلاع‌رسانی | ارسال پیام تلگرام |
| `ADMIN_EMAIL` | ارسال ایمیل | دریافت‌کننده اطلاع‌ات |
| `NEWSAPI_KEY` | اخبار مهاجرت | دریافت اخبار از API |

---

## خلاصه نهایی

### معاملات

| موضوع | تعداد | وضعیت |
|-------|------|-------|
| **صفحات کل** | ۳۷ | ✅ فعال |
| **صفحات خدماتی** | ۲۷ | ✅ جداگانه |
| **صفحات کاربری** | ۵ | ✅ فعال |
| **صفحات ادمین** | ۴ | ✅ محدود |
| **Entities فعال** | ۳ | ✅ متغیر |
| **Backend Functions** | ۱۰ | ✅ فعال |
| **Secrets/APIs** | ۱۱ | ✅ جاری |
| **Components شامل** | ۲۰+ | ✅ قابل‌استفاده‌مجدد |

---

### ویژگی‌های کلیدی

✅ **سه‌زبانه:** فارسی، انگلیسی، روسی  
✅ **Affiliate Marketing:** Airbnb  
✅ **رزرو آنلاین:** خدمات و بلیط  
✅ **جستجوی یکپارچه:** پرواز، هتل، آپارتمان  
✅ **مدیریت ادمین:** کامل برای همه رزروها  
✅ **اطلاع‌رسانی:** ایمیل، واتساپ، تلگرام  
✅ **RTL Support:** قالب‌های راست‌به‌چپ  

---

### نقشه راه

**فاز فعلی:** ✅ Production Ready  
**قابلیت توسعه:** High (Component-based)  
**بهبودی‌های آتی:**
- پرداخت Stripe (فعال‌سازی)
- داشبورد تحلیلی
- سیستم نظرات
- بیشتر Integration‌ها

---

**پایان مستندات | Generated: ۲۶/۵/۱۴۰۵**