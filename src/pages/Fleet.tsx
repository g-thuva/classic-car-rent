import { Helmet } from 'react-helmet-async';
import { FleetBrowser } from '../components/cars/FleetBrowser';
import { PageHero } from '../components/layout/PageHero';
import { Car as CarIcon } from 'lucide-react';

export const Fleet = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Helmet>
        <title>Our Fleet | Classic Car Rent Oftringen</title>
        <meta
          name="description"
          content="Browse our exclusive fleet of sports and luxury cars in Oftringen. Ferrari, Lamborghini, Porsche, Audi, BMW, Mercedes-AMG. No deposit."
        />
      </Helmet>

      <PageHero
        eyebrow="The Showroom"
        icon={CarIcon}
        title={
          <>
            Our <span className="text-bronze">Exotic Fleet</span>
          </>
        }
        description="Nine hand-selected supercars and high-performance grand tourers, meticulously maintained in showroom condition. Every vehicle includes unlimited mileage and full tank."
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <FleetBrowser />
      </div>
    </div>
  );
};
