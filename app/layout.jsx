import './globals.css';
import { Vazirmatn } from 'next/font/google';
const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], weight: ['400', '600', '700', '900'], variable: '--font-vazir', display: 'swap' });

import Providers from './providers';
import Script from 'next/script';
import JsonLd from '@/components/shared/JsonLd';
import { organizationSchema } from '@/lib/schema';



// Self-hosted via next/font: removes the render-blocking Google Fonts
// <link> round trip (HTML -> fonts.googleapis.com CSS -> fonts.gstatic.com woff2)
// that was adding ~500-1000ms to the critical path.


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://caspian.am'),
  title: {
    default: 'کاسپین گروپ ارمنستان | رزرو هتل، آپارتمان، اقامت ایروان',
    template: '%s | کاسپین',
  },
  description: 'کاسپین گروپ ارمنستان؛ رزرو هتل و آپارتمان در ایروان، اقامت ارمنستان، ویزای روسیه و خدمات مهاجرتی با پشتیبانی فارسی.',
  keywords: 'رزرو هتل ایروان, اجاره آپارتمان ایروان, اقامت ارمنستان, ویزای روسیه',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: {
    canonical: 'https://caspian.am',
  },
  openGraph: {
    type: 'website',
    siteName: 'کاسپین گروپ ارمنستان',
    images: [{ url: '/images/GoogleSearch.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/images/GoogleSearch.png'] },
  other: { 'facebook-domain-verification': '8gn1bxsez3ghgcl1or608v60ti5dx5' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        {/* Google tag (gtag.js) — loaded after the page is interactive so it doesn't block rendering */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W5JQEDHKNC" />
        <Script id="ga-gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W5JQEDHKNC');
        ` }} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <JsonLd data={organizationSchema()} />
        <Script id="ms-clarity" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ydxpams0e3");
        ` }} />
        <style>{`html,body{background-color:#0a0a0a;color:#fafafa;}#__next{min-height:100vh;background-color:#0a0a0a;}`}</style>
      </head>
      <body style={{ backgroundColor: '#0a0a0a', margin: 0, overflowX: 'hidden', maxWidth: '100vw' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
