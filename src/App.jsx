import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import { lazy, Suspense } from 'react';
import Home from '@/pages/Home';

// Static pages
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Services = lazy(() => import('@/pages/Services'));

// Visa pages
const VisaSchengen = lazy(() => import('@/pages/service/VisaSchengen'));
const VisaRomania = lazy(() => import('@/pages/service/VisaRomania'));
const VisaRussia = lazy(() => import('@/pages/service/VisaRussia'));
const VisaSouthAmerica = lazy(() => import('@/pages/service/VisaSouthAmerica'));
const EmbassyAppointment = lazy(() => import('@/pages/service/EmbassyAppointment'));

// Student Visa pages
const StudentVisa = lazy(() => import('@/pages/service/StudentVisa'));
const StudentVisaArmenia = lazy(() => import('@/pages/service/StudentVisaArmenia'));
const StudentVisaRussia = lazy(() => import('@/pages/service/StudentVisaRussia'));
const StudentVisaTurkey = lazy(() => import('@/pages/service/StudentVisaTurkey'));
const StudentVisaSchengen = lazy(() => import('@/pages/service/StudentVisaSchengen'));
const StudentVisaRomania = lazy(() => import('@/pages/service/StudentVisaRomania'));
const StudentVisaGeorgia = lazy(() => import('@/pages/service/StudentVisaGeorgia'));

// Residency pages
const Residency = lazy(() => import('@/pages/service/Residency'));
const ResidencyTurkey = lazy(() => import('@/pages/service/ResidencyTurkey'));
const ResidencyOman = lazy(() => import('@/pages/service/ResidencyOman'));
const ResidencyUAE = lazy(() => import('@/pages/service/ResidencyUAE'));

// Dynamic service page (slug-based)
const DynamicService = lazy(() => import('@/pages/service/DynamicService'));

// Travel pages
const Flight = lazy(() => import('@/pages/travel/Flight'));
const Apartment = lazy(() => import('@/pages/travel/Apartment'));
const Hotel = lazy(() => import('@/pages/service/Hotel'));
const BusTrainBooking = lazy(() => import('@/pages/service/BusTrainBooking'));
const Exchange = lazy(() => import('@/pages/service/Exchange'));
const Transfer = lazy(() => import('@/pages/service/Transfer'));
const VipSupport = lazy(() => import('@/pages/VipSupport'));
const ImmigrationNews = lazy(() => import('@/pages/ImmigrationNews'));

// Other service pages
const CompanyReg = lazy(() => import('@/pages/service/CompanyReg'));
const StudentAdmission = lazy(() => import('@/pages/service/StudentAdmission'));

const S = ({ children }) => (
  <Suspense fallback={
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
    </div>
  }>{children}</Suspense>
);

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Static */}
      <Route path="/about" element={<S><About /></S>} />
      <Route path="/contact" element={<S><Contact /></S>} />
      <Route path="/services" element={<S><Services /></S>} />

      {/* ── VISA ── */}
      <Route path="/visa/schengen" element={<S><VisaSchengen /></S>} />
      <Route path="/visa/romania" element={<S><VisaRomania /></S>} />
      <Route path="/visa/russia" element={<S><VisaRussia /></S>} />
      <Route path="/visa/south-america" element={<S><VisaSouthAmerica /></S>} />
      <Route path="/visa/embassy-usa" element={<S><EmbassyAppointment /></S>} />
      <Route path="/visa/embassy-canada" element={<S><EmbassyAppointment /></S>} />
      {/* Legacy redirects */}
      <Route path="/services/visa-schengen" element={<S><VisaSchengen /></S>} />
      <Route path="/services/visa-romania" element={<S><VisaRomania /></S>} />
      <Route path="/services/visa-russia" element={<S><VisaRussia /></S>} />
      <Route path="/services/visa-south-america" element={<S><VisaSouthAmerica /></S>} />
      <Route path="/services/embassy-appointment" element={<S><EmbassyAppointment /></S>} />

      {/* ── STUDENT VISA ── */}
      <Route path="/student-visa" element={<S><StudentVisa /></S>} />
      <Route path="/student-visa/armenia" element={<S><StudentVisaArmenia /></S>} />
      <Route path="/student-visa/russia" element={<S><StudentVisaRussia /></S>} />
      <Route path="/student-visa/turkey" element={<S><StudentVisaTurkey /></S>} />
      <Route path="/student-visa/schengen" element={<S><StudentVisaSchengen /></S>} />
      <Route path="/student-visa/romania" element={<S><StudentVisaRomania /></S>} />
      <Route path="/student-visa/georgia" element={<S><StudentVisaGeorgia /></S>} />
      {/* Legacy redirects */}
      <Route path="/services/student-visa" element={<S><StudentVisa /></S>} />
      <Route path="/services/student-visa/armenia" element={<S><StudentVisaArmenia /></S>} />
      <Route path="/services/student-visa/russia" element={<S><StudentVisaRussia /></S>} />
      <Route path="/services/student-visa/turkey" element={<S><StudentVisaTurkey /></S>} />
      <Route path="/services/student-visa/schengen" element={<S><StudentVisaSchengen /></S>} />
      <Route path="/services/student-visa/romania" element={<S><StudentVisaRomania /></S>} />

      {/* ── RESIDENCY ── */}
      <Route path="/residency/armenia" element={<S><Residency /></S>} />
      <Route path="/residency/turkey" element={<S><ResidencyTurkey /></S>} />
      <Route path="/residency/oman" element={<S><ResidencyOman /></S>} />
      <Route path="/residency/uae" element={<S><ResidencyUAE /></S>} />
      {/* Legacy redirects */}
      <Route path="/services/residency" element={<S><Residency /></S>} />
      <Route path="/services/residency-turkey" element={<S><ResidencyTurkey /></S>} />
      <Route path="/services/residency-oman" element={<S><ResidencyOman /></S>} />
      <Route path="/services/residency-uae" element={<S><ResidencyUAE /></S>} />

      {/* ── TRAVEL ── */}
      <Route path="/travel/flight" element={<S><Flight /></S>} />
      <Route path="/travel/bus" element={<S><BusTrainBooking /></S>} />
      <Route path="/travel/hotel" element={<S><Hotel /></S>} />
      <Route path="/travel/apartment" element={<S><Apartment /></S>} />
      <Route path="/travel/transfer" element={<S><Transfer /></S>} />
      <Route path="/travel/exchange" element={<S><Exchange /></S>} />
      <Route path="/travel/vip" element={<S><VipSupport /></S>} />
      {/* Legacy redirects */}
      <Route path="/services/hotel" element={<S><Hotel /></S>} />
      <Route path="/services/exchange" element={<S><Exchange /></S>} />
      <Route path="/vip" element={<S><VipSupport /></S>} />

      {/* Dynamic service pages (slug-based, reads from data/servicesContent.js) */}
      <Route path="/service/:slug" element={<S><DynamicService /></S>} />

      <Route path="/immigration-news" element={<S><ImmigrationNews /></S>} />

      {/* Other */}
      <Route path="/services/company-registration" element={<S><CompanyReg /></S>} />
      <Route path="/services/student-admission" element={<S><StudentAdmission /></S>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App