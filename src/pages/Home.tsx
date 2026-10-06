import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { StatsStrip } from '../components/home/StatsStrip';
import { BrandStrip } from '../components/home/BrandStrip';
import { IntroSection } from '../components/home/IntroSection';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { Benefits } from '../components/home/Benefits';
import { HowItWorks } from '../components/home/HowItWorks';
import { VoucherBanner } from '../components/home/VoucherBanner';
import { CtaBand } from '../components/home/CtaBand';
import { ContactSection } from '../components/home/ContactSection';
import { VideoSection } from '../components/home/VideoSection';

/**
 * Section rhythm:
 * ink hero → ivory (stats, brands, intro) → card-alt fleet → ivory benefits →
 * card-alt how-it-works → ivory vouchers → ink CTA band → ivory contact → ink footer
 */
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Classic Car Rent | Sports &amp; Luxury Car Rental Oftringen Switzerland</title>
        <meta
          name="description"
          content="Drive the car you have always dreamed of. Sports and luxury cars in Oftringen. No deposit. No mileage limit."
        />
      </Helmet>

      {/* HERO (dark) */}
      <Hero />

      {/* 1. STATS + brands (ivory) */}
      <StatsStrip />
      <BrandStrip />

      {/* 2. INTRO (ivory) */}
      <IntroSection />

      {/* 3. FEATURED FLEET SLIDER (card-alt) */}
      <FeaturedCars />

      {/* 4. VIDEO SECTION */}
      <VideoSection />

      {/* 5. BENEFITS 01-04 (ivory) */}
      <Benefits />

      {/* 5. HOW IT WORKS (card-alt) */}
      <HowItWorks />

      {/* 6. VOUCHERS (ivory) */}
      <VoucherBanner />

      {/* 7. QUESTIONS BAND (ink) */}
      <CtaBand />

      {/* 8. CONTACT (ivory) */}
      <ContactSection />
    </>
  );
};
