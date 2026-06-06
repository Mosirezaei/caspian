import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const prompt = `تو یک متخصص حقوق مهاجرت و اقامت ارمنستان هستی.
۸ خبر یا قانون مهم و به‌روز درباره قوانین مهاجرتی، ویزا، اقامت، و قوانین اتباع خارجی در ارمنستان بنویس.
این اخبار باید واقع‌گرایانه، دقیق و مرتبط با سال ۲۰۲۵ باشند.
هر خبر باید عنوان کامل، خلاصه کامل (۳ تا ۵ جمله)، و اطلاعات تکمیلی داشته باشد.
خبرها فقط درباره ارمنستان باشند.
موضوعات: ویزا، اقامت موقت، اقامت دائم، ویزای دانشجویی، ثبت شرکت اتباع خارجی، مالیات اتباع خارجی، تغییرات قانونی جدید.

پاسخ به صورت JSON:
{
  "articles": [
    {
      "title_fa": "عنوان به فارسی",
      "title_en": "Title in English",
      "title_ru": "Заголовок на русском",
      "summary_fa": "خلاصه کامل به فارسی (۳-۵ جمله)",
      "summary_en": "Full summary in English (3-5 sentences)",
      "summary_ru": "Полное резюме на русском (3-5 предложений)",
      "body_fa": "متن کامل خبر به فارسی (۸-۱۲ جمله)",
      "body_en": "Full article body in English (8-12 sentences)",
      "body_ru": "Полный текст статьи на русском (8-12 предложений)",
      "category_fa": "دسته‌بندی (مثلاً: اقامت، ویزا، ثبت شرکت)",
      "category_en": "Category",
      "date": "تاریخ تقریبی (مثل: ژوئن ۲۰۲۵)"
    }
  ]
}`;

    const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt,
      response_json_schema: {
        type: "object",
        properties: {
          articles: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title_fa: { type: "string" },
                title_en: { type: "string" },
                title_ru: { type: "string" },
                summary_fa: { type: "string" },
                summary_en: { type: "string" },
                summary_ru: { type: "string" },
                body_fa: { type: "string" },
                body_en: { type: "string" },
                body_ru: { type: "string" },
                category_fa: { type: "string" },
                category_en: { type: "string" },
                date: { type: "string" }
              }
            }
          }
        }
      }
    });

    return Response.json({ articles: result.articles || [] });
  } catch (error) {
    console.error('getArmeniaImmigrationNews error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});