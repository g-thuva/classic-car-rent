import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { CarDetail } from './pages/CarDetail';
import { Prices } from './pages/Prices';
import { Booking } from './pages/Booking';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { useScrollTop } from './lib/useScrollTop';

const AppRoutes = () => {
  useScrollTop();
  const { pathname } = useLocation();
  const isFullBleed = pathname === '/' || pathname === '/prices';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={isFullBleed ? 'flex-grow' : 'flex-grow pt-[68px] md:pt-[84px]'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/fleet/:slug" element={<CarDetail />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
