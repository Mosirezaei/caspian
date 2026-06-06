import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const { name, phone, email, service, notes, language } = body;

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const adminEmail = Deno.env.get('ADMIN_EMAIL');
    const telegramBotToken = Deno.env.get('TELEGRAM_BOT_TOKEN');

    const serviceLabels = {
      fa: {
        'visa-schengen': 'ویزای شینگن',
        'visa-romania': 'ویزای رومانی',
        'visa-russia': 'ویزای روسیه',
        'residency-armenia': 'اقامت ارمنستان',
        'residency-turkey': 'اقامت ترکیه',
        'residency-uae': 'اقامت امارات',
        'hotel': 'رزرو هتل',
        'flight': 'رزرو بلیط',
        'company-registration': 'ثبت شرکت',
        'student-admission': 'پذیرش تحصیلی',
        'residency': 'اقامت',
      },
      en: {
        'visa-schengen': 'Schengen Visa',
        'visa-romania': 'Romania Visa',
        'visa-russia': 'Russia Visa',
        'residency-armenia': 'Armenia Residency',
        'residency-turkey': 'Turkey Residency',
        'residency-uae': 'UAE Residency',
        'hotel': 'Hotel Booking',
        'flight': 'Flight Ticket',
        'company-registration': 'Company Registration',
        'student-admission': 'Student Admission',
        'residency': 'Residency',
      },
      ru: {
        'visa-schengen': 'Шенгенская виза',
        'visa-romania': 'Виза в Румынию',
        'visa-russia': 'Виза в Россию',
        'residency-armenia': 'ВНЖ Армении',
        'residency-turkey': 'ВНЖ Турции',
        'residency-uae': 'ВНЖ ОАЭ',
        'hotel': 'Бронирование отелей',
        'flight': 'Авиабилеты',
        'company-registration': 'Регистрация компании',
        'student-admission': 'Поступление в вуз',
        'residency': 'ВНЖ',
      }
    };

    const lang = language || 'fa';
    const serviceName = serviceLabels[lang]?.[service] || serviceLabels['fa']?.[service] || service;

    const telegramMessage = `
📋 <b>درخواست مشاوره جدید</b>

👤 نام: ${name}
📱 تلفن: ${phone}
📧 ایمیل: ${email || '-'}
🎯 خدمت: ${serviceName}
📝 توضیحات: ${notes || '-'}
🌐 زبان: ${lang === 'fa' ? 'فارسی' : lang === 'en' ? 'انگلیسی' : 'روسی'}
`;

    // 1. Notify admin via email
    if (adminEmail) {
      try {
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: adminEmail,
          subject: `📋 درخواست مشاوره جدید - ${name}`,
          body: `نام: ${name}\nتلفن: ${phone}\nایمیل: ${email || '-'}\nخدمت: ${serviceName}\nتوضیحات: ${notes || '-'}\nزبان: ${lang}`
        });
      } catch (err) {
        console.error('Admin email error:', err.message);
      }
    }

    // 2. Send confirmation email to user
    if (email) {
      const confirmationContent = {
        fa: {
          subject: 'تأییدیه درخواست مشاوره — کاسپین گروه',
          body: `سلام ${name} عزیز،\n\nدرخواست مشاوره شما با موفقیت دریافت شد.\n\n📋 جزئیات درخواست:\n• خدمت: ${serviceName}\n• تلفن: ${phone}\n\nکارشناسان کاسپین گروه در کمتر از ۲۴ ساعت با شما تماس خواهند گرفت.\n\nبا احترام،\nتیم کاسپین گروه\n📞 +374 33 149 327\n🌐 caspiangroup.am`
        },
        en: {
          subject: 'Consultation Request Confirmed — Caspian Group',
          body: `Dear ${name},\n\nYour consultation request has been successfully received.\n\n📋 Request Details:\n• Service: ${serviceName}\n• Phone: ${phone}\n\nCaspian Group experts will contact you within 24 hours.\n\nBest regards,\nCaspian Group Team\n📞 +374 33 149 327\n🌐 caspiangroup.am`
        },
        ru: {
          subject: 'Запрос на консультацию подтверждён — Caspian Group',
          body: `Уважаемый(ая) ${name},\n\nВаш запрос на консультацию успешно получен.\n\n📋 Детали запроса:\n• Услуга: ${serviceName}\n• Телефон: ${phone}\n\nЭксперты Caspian Group свяжутся с вами в течение 24 часов.\n\nС уважением,\nКоманда Caspian Group\n📞 +374 33 149 327\n🌐 caspiangroup.am`
        }
      };

      const conf = confirmationContent[lang] || confirmationContent.fa;
      try {
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: email,
          from_name: 'Caspian Group',
          subject: conf.subject,
          body: conf.body
        });
      } catch (err) {
        console.error('User confirmation email error:', err.message);
      }
    }

    // 3. Send to Telegram
    if (telegramBotToken) {
      try {
        const chatId = Deno.env.get('TELEGRAM_CHAT_ID') || '-1002371566033';
        const tgRes = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: telegramMessage, parse_mode: 'HTML' })
        });
        const tgData = await tgRes.json();
        console.log('Telegram response:', JSON.stringify(tgData));
      } catch (err) {
        console.error('Telegram error:', err.message);
      }
    }

    return Response.json({ success: true, message: 'Consultation request sent' });
  } catch (error) {
    console.error('sendConsultationRequest error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});