# ساختار پروژه — کاسپین گروه ارمنستان

> **پلتفرم:** Base44 (React + Vite + Tailwind CSS)  
> **زبان‌ها:** فارسی (RTL پیش‌فرض) / انگلیسی / روسی  
> **احراز هویت:** ندارد (سایت عمومی)

---

## ساختار فایل‌ها

```
src/
├── pages/
│   ├── Home.jsx                        # صفحه اصلی (/)
│   ├── About.jsx                       # درباره ما (/about)
│   ├── Contact.jsx                     # تماس با ما (/contact)
│   ├── Services.jsx                    # لیست خدمات (/services)
│   ├── ImmigrationNews.jsx             # اخبار مهاجرتی (/immigration-news)
│   ├── VipSupport.jsx                  # VIP (/travel/vip)
│   ├── service/
│   │   ├── VisaSchengen.jsx            # /visa/schengen
│   │   ├── VisaRomania.jsx             # /visa/romania
│   │   ├── VisaRussia.jsx              # /visa/russia
│   │   ├── VisaSouthAmerica.jsx        # /visa/south-america
│   │   ├── EmbassyAppointment.jsx      # /visa/embassy-usa | /visa/embassy-canada
│   │   ├── StudentVisa.jsx             # /student-visa
│   │   ├── StudentVisaArmenia.jsx      # /student-visa/armenia
│   │   ├── StudentVisaRussia.jsx       # /student-visa/russia
│   │   ├── StudentVisaTurkey.jsx       # /student-visa/turkey
│   │   ├── StudentVisaSchengen.jsx     # /student-visa/schengen
│   │   ├── StudentVisaRomania.jsx      # /student-visa/romania
│   │   ├── StudentVisaGeorgia.jsx      # /student-visa/georgia
│   │   ├── Residency.jsx               # /residency/armenia
│   │   ├── ResidencyTurkey.jsx         # /residency/turkey
│   │   ├── ResidencyOman.jsx           # /residency/oman
│   │   ├── ResidencyUAE.jsx            # /residency/uae
│   │   ├── CompanyReg.jsx              # /services/company-registration
│   │   ├── StudentAdmission.jsx        # /services/student-admission
│   │   ├── Hotel.jsx                   # /travel/hotel
│   │   ├── BusTrainBooking.jsx         # /travel/bus
│   │   ├── Transfer.jsx                # /travel/transfer
│   │   ├── Exchange.jsx                # /travel/exchange
│   │   └── DynamicService.jsx          # /service/:slug
│   └── travel/
│       ├── Flight.jsx                  # /travel/flight
│       └── Apartment.jsx               # /travel/apartment
│
├── components/
│   ├── shared/
│   │   ├── GlobalNavbar.jsx            # ناوبار ثابت (همه صفحات)
│   │   └── ServicePageLayout.jsx       # قالب مشترک صفحات خدمات
│   └── home/
│       ├── HeroSection.jsx             # بخش hero صفحه اصلی
│       ├── ServicesSection.jsx         # ۶ کارت خدمات
│       ├── AboutSection.jsx            # بخش درباره ما
│       ├── WhySection.jsx              # چرا کاسپین؟
│       ├── ContactFormSection.jsx      # بخش فرم تماس
│       ├── ContactForm.jsx             # فرم تماس
│       ├── ContactFooter.jsx           # فوتر سراسری
│       ├── ConsultModal.jsx            # مودال مشاوره رایگان ← Base44
│       └── NewsSlider.jsx              # اسلایدر اخبار (static)
│
├── lib/
│   ├── i18n.js                         # همه متون ثابت سه‌زبانه
│   ├── LanguageContext.jsx             # Context زبان + تم روشن/تاریک
│   └── query-client.js
│
├── data/
│   ├── staticContent.js                # برچسب‌های خدمات
│   └── servicesContent.js              # محتوای صفحات slug-based
│
├── functions/                          # بک‌اند Deno — وابسته به Base44
│   ├── sendConsultationRequest.js      # ⚠️ ایمیل + تلگرام (ضروری)
│   ├── getArmeniaImmigrationNews.js    # اخبار از NewsAPI (اختیاری)
│   ├── getImmigrationNews.js           # اخبار (اختیاری)
│   └── getTelegramChatId.js            # ابزار تنظیم تلگرام
│
└── api/
    └── base44Client.js                 # کلاینت Base44 SDK
```

---

## روت‌ها (App.jsx)

| مسیر | صفحه |
|------|------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/services` | Services |
| `/immigration-news` | ImmigrationNews |
| `/visa/schengen` | VisaSchengen |
| `/visa/romania` | VisaRomania |
| `/visa/russia` | VisaRussia |
| `/visa/south-america` | VisaSouthAmerica |
| `/visa/embassy-usa` | EmbassyAppointment |
| `/visa/embassy-canada` | EmbassyAppointment |
| `/student-visa` | StudentVisa |
| `/student-visa/armenia` | StudentVisaArmenia |
| `/student-visa/russia` | StudentVisaRussia |
| `/student-visa/turkey` | StudentVisaTurkey |
| `/student-visa/schengen` | StudentVisaSchengen |
| `/student-visa/romania` | StudentVisaRomania |
| `/student-visa/georgia` | StudentVisaGeorgia |
| `/residency/armenia` | Residency |
| `/residency/turkey` | ResidencyTurkey |
| `/residency/oman` | ResidencyOman |
| `/residency/uae` | ResidencyUAE |
| `/travel/flight` | Flight |
| `/travel/bus` | BusTrainBooking |
| `/travel/hotel` | Hotel |
| `/travel/apartment` | Apartment |
| `/travel/transfer` | Transfer |
| `/travel/exchange` | Exchange |
| `/travel/vip` | VipSupport |
| `/services/company-registration` | CompanyReg |
| `/services/student-admission` | StudentAdmission |
| `/service/:slug` | DynamicService |

---

## وابستگی‌های Base44

| فایل | نوع وابستگی |
|------|-------------|
| `functions/sendConsultationRequest.js` | Base44 SDK + Core Email + Telegram Bot |
| `components/home/ConsultModal.jsx` | `base44.functions.invoke(...)` |
| `pages/Contact.jsx` | `base44.functions.invoke(...)` |
| `pages/ImmigrationNews.jsx` | `base44.entities.ImmigrationNews` (اختیاری) |

---

## متغیرهای محیطی

| نام | کاربرد |
|-----|--------|
| `ADMIN_EMAIL` | دریافت ایمیل درخواست مشاوره |
| `TELEGRAM_BOT_TOKEN` | ارسال پیام تلگرام |
| `TELEGRAM_CHAT_ID` | شناسه چت تلگرام |
| `NEWSAPI_KEY` | اخبار مهاجرتی (اختیاری) |

---

## منوی ناوبار → روت‌ها

```
ویزا
  ├── وقت سفارت آمریکا   → /visa/embassy-usa
  ├── وقت سفارت کانادا   → /visa/embassy-canada
  ├── ویزای شینگن        → /visa/schengen
  ├── ویزای رومانی       → /visa/romania
  ├── ویزای روسیه        → /visa/russia
  └── ویزای آمریکای جنوبی → /visa/south-america

ویزای تحصیلی            → /student-visa
  ├── ارمنستان           → /student-visa/armenia
  ├── روسیه              → /student-visa/russia
  ├── ترکیه              → /student-visa/turkey
  ├── شینگن              → /student-visa/schengen
  ├── رومانی             → /student-visa/romania
  └── گرجستان            → /student-visa/georgia

اقامت و مهاجرت
  ├── ارمنستان           → /residency/armenia
  ├── ترکیه              → /residency/turkey
  ├── عمان               → /residency/oman
  └── امارات             → /residency/uae

خدمات مسافرتی
  ├── پرواز              → /travel/flight
  ├── هتل                → /travel/hotel
  ├── آپارتمان           → /travel/apartment
  ├── ترانسفر            → /travel/transfer
  ├── صرافی و رمزارز     → /travel/exchange
  └── پشتیبانی VIP       → /travel/vip

کاسپین گروه
  ├── درباره ما          → /about
  └── تماس با ما         → /contact
```

---

## آیکون‌های دسترسی سریع (Hero)

| ردیف اول | روت |
|---------|-----|
| اقامت | `/residency/armenia` |
| ثبت شرکت | `/services/company-registration` |
| تحصیلی | `/student-visa/armenia` |
| ویزای روسیه | `/visa/russia` |

| ردیف دوم | روت |
|---------|-----|
| پرواز | `/travel/flight` |
| هتل | `/travel/hotel` |
| آپارتمان | `/travel/apartment` |
| VIP | `/travel/vip` |

---

## کارت‌های ServicesSection → روت‌ها

| ایندکس | روت |
|--------|-----|
| 0 — ویزا | `/visa/schengen` |
| 1 — اقامت | `/residency/armenia` |
| 2 — ثبت شرکت | `/services/company-registration` |
| 3 — تور | `/travel/bus` |
| 4 — هتل | `/travel/hotel` |
| 5 — VIP | `/travel/vip` |
