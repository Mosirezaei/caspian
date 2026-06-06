Deno.serve(async (req) => {
  try {
    const { createClientFromRequest } = await import('npm:@base44/sdk@0.8.25');
    const base44 = createClientFromRequest(req);
    
    const apiKey = Deno.env.get('NEWSAPI_KEY');
    const queries = [
      'visa processing immigration',
      'Schengen visa news',
      'residency permit',
      'travel documents requirements',
      'visa policy changes',
      'immigration rules update',
      'hotel accommodation visa',
      'temporary residence permit'
    ];

    const allArticles = [];
    
    for (const query of queries) {
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.articles) {
        allArticles.push(...data.articles.slice(0, 3));
      }
    }

    const uniqueArticles = Array.from(
      new Map(allArticles.map(a => [a.url, a])).values()
    ).slice(0, 10);

    const translationPrompt = `ترجمه این تیتل و خلاصه اخبار به فارسی (برای هر یکی یک خط):
${uniqueArticles.map((a, i) => `${i + 1}. "${a.title}"\n"${a.description || a.content?.substring(0, 100) || ''}"`).join('\n\n')}

فقط ترجمه کن، به صورت JSON: {"translations": [{"fa_title": "...", "fa_summary": "..."}, ...]}`;

    const translations = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt: translationPrompt,
      response_json_schema: {
        type: "object",
        properties: {
          translations: {
            type: "array",
            items: {
              type: "object",
              properties: {
                fa_title: { type: "string" },
                fa_summary: { type: "string" }
              }
            }
          }
        }
      }
    });

    const news = uniqueArticles
      .filter(article => !isAIGenerated(article.title + ' ' + (article.description || '')))
      .filter(article => isRelevantToImmigration(article.title + ' ' + (article.description || '')))
      .map((article, idx) => {
        const trans = translations.translations?.[idx] || {};
        return {
          title_fa: trans.fa_title || article.title,
          title_en: article.title,
          summary_fa: trans.fa_summary || article.description,
          summary_en: article.description || article.content?.substring(0, 100),
          country: detectCountry(article.title + ' ' + (article.description || '')),
          date: new Date(article.publishedAt).toLocaleDateString(),
          source: article.source.name,
          url: article.url
        };
      });

    return Response.json({ news });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});

function detectCountry(text) {
  const countryPatterns = {
    'Schengen': 'Schengen',
    'Romania': 'Romania',
    'Armenia': 'Armenia',
    'Russia': 'Russia',
    'USA': 'USA',
    'Australia': 'Australia',
    'Canada': 'Canada',
    'Germany': 'Germany',
    'France': 'France',
    'Iran': 'Iran'
  };
  
  for (const [pattern, country] of Object.entries(countryPatterns)) {
    if (text.toUpperCase().includes(pattern.toUpperCase())) {
      return country;
    }
  }
  return 'International';
}

function isAIGenerated(text) {
  const aiKeywords = ['chatgpt', 'chat gpt', 'ai generated', 'artificial intelligence', 'machine learning', 'algorithm'];
  const lowerText = text.toLowerCase();
  return aiKeywords.some(keyword => lowerText.includes(keyword));
}

function isRelevantToImmigration(text) {
  const relevantKeywords = ['visa', 'immigration', 'residency', 'hotel', 'travel', 'passport', 'schengen', 'armenia', 'romania', 'russia', 'iran', 'document', 'citizenship', 'temporary residence', 'accommodation'];
  const lowerText = text.toLowerCase();
  return relevantKeywords.some(keyword => lowerText.includes(keyword));
}