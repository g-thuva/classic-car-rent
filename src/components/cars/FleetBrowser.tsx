import { useState } from 'react';
import clsx from 'clsx';
import { cars } from '../../data/cars';
import { brandLogos } from '../../data/images';
import { CarGrid } from './CarGrid';

const BRANDS = ['All', 'Ferrari', 'Lamborghini', 'Porsche', 'Audi', 'BMW', 'Mercedes'];

interface FleetBrowserProps {
  /** Use a horizontal scroll-snap row on mobile (home page) */
  scrollOnMobile?: boolean;
}

/** Brand filter chips + car grid, shared by the home page and the fleet page. */
export const FleetBrowser = ({ scrollOnMobile = false }: FleetBrowserProps) => {
  const [filter, setFilter] = useState('All');

  // "Mercedes" covers both Mercedes-AMG and Mercedes-Benz models.
  const filtered = filter === 'All' ? cars : cars.filter((c) => c.brand.startsWith(filter));

  return (
    <div>
      <div className="w-full mb-10">
        <div className="flex flex-wrap gap-3 w-full" role="group" aria-label="Filter by brand">
          {BRANDS.map((brand) => {
            const logo = brandLogos[brand];
            return (
              <button
                key={brand}
                type="button"
                aria-pressed={filter === brand}
                onClick={() => setFilter(brand)}
                className={clsx(
                  'flex-1 min-w-[140px] px-6 h-14 rounded-xl border text-lg font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-3',
                  filter === brand
                    ? 'bg-ink border-ink text-ivory shadow-md'
                    : 'bg-card border-line text-ink hover:border-bronze-deep hover:text-bronze-deep',
                )}
              >
                {brand !== 'All' && logo && (
                  <img src={logo.src} alt="" className="h-[28px] w-auto object-contain" aria-hidden="true" />
                )}
                {brand}
              </button>
            );
          })}
        </div>
      </div>

      <CarGrid cars={filtered} scrollOnMobile={scrollOnMobile} />
    </div>
  );
};
