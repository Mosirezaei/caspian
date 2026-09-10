/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: 'caspian.am' },
    ],
  },

  experimental: {
    // Tree-shakes barrel-style imports from these packages so only the
    // icons/components actually used end up in the client bundle, instead of
    // the whole library. Directly targets the "Reduce unused JavaScript"
    // finding from PageSpeed Insights.
    optimizePackageImports: ['lucide-react', 'framer-motion', 'recharts', 'date-fns', 'lodash'],
  },

  async redirects() {
    return [
      // Keep one public hostname for users and search engines. This is a
      // server-side redirect only; it does not change any rendered page.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.caspian.am' }],
        destination: 'https://caspian.am/:path*',
        permanent: true,
      },
      { source: '/blog/living-cost-yerevan-1404', destination: '/blog/living-cost-yerevan', permanent: true },
      { source: '/services/visa-schengen',        destination: '/contact',            permanent: true },
      { source: '/services/visa-russia',          destination: '/visa/russia',         permanent: true },
      { source: '/visa/russia/multi',              destination: '/visa/russia/business', permanent: true },
      { source: '/services/residency',            destination: '/residency/business',  permanent: true },
      { source: '/services/hotel',               destination: '/travel/hotel',         permanent: true },
      { source: '/vip',                           destination: '/contact',             permanent: true },
      { source: '/services/embassy-appointment',  destination: '/contact',             permanent: true },
      { source: '/services/visa-south-america',   destination: '/contact',             permanent: true },
      { source: '/services/visa-romania',         destination: '/contact',             permanent: true },
      { source: '/services/student-visa',         destination: '/student-visa/russia', permanent: true },
      { source: '/services/company-registration', destination: '/residency/business',  permanent: true },
      { source: '/blog/eqamat-armenia-az-tarigh-sherktat', destination: '/blog/residency-via-company-registration', permanent: true },
      { source: '/blog/hazine-maliyat-bank-armenia',      destination: '/blog/company-costs-tax-banking-armenia',  permanent: true },
      { source: '/blog/sabt-sherktat-armenia-marahel',    destination: '/blog/company-registration-steps-armenia',  permanent: true },
      { source: '/blog/sakhtare-hoqooqi-sherktat-armenia', destination: '/blog/company-legal-structures-armenia',   permanent: true },
      { source: '/travel/flight', destination: '/travel/flight-bus', permanent: true },
      { source: '/travel/bus',    destination: '/travel/flight-bus', permanent: true },
      { source: '/travel/festivals', destination: '/events', permanent: true },

      // Old URLs still indexed/getting impressions in Google Search Console
      // as of 2026-09-08 but with no matching page anymore -- redirect each
      // to the closest current equivalent so anyone clicking through from
      // an old Google result lands on-topic instead of a 404.
      { source: '/residency/armenia',          destination: '/residency/business',        permanent: true },
      { source: '/student-visa/armenia',       destination: '/residency/student',         permanent: true },
      { source: '/services/student-admission', destination: '/residency/student',         permanent: true },
      { source: '/travel/armenia-guide',       destination: '/blog/armenia-tourism-guide', permanent: true },
      { source: '/services',                   destination: '/',                          permanent: true },
      { source: '/residency/uae',              destination: '/contact',                   permanent: true },
      { source: '/visa/schengen',              destination: '/contact',                   permanent: true },
      { source: '/visa/romania',               destination: '/contact',                   permanent: true },
      { source: '/visa/embassy-usa',           destination: '/contact',                   permanent: true },
      { source: '/visa/embassy-canada',        destination: '/contact',                   permanent: true },
    ];
  },
};

export default nextConfig;
