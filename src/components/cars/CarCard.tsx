import { Link } from 'react-router-dom';
import type { Car } from '../../data/types';
import { getCarImages, brandLogos } from '../../data/images';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

interface CarCardProps {
  car: Car;
  /** Position in the grid – used to stagger the entrance animation */
  index?: number;
}

export const CarCard = ({ car, index = 0 }: CarCardProps) => {
  const img = getCarImages(car.slug);
  const logo = brandLogos[car.brand];

  return (
    <Reveal delay={Math.min(index, 5) * 0.07} className="h-full">
      <Link
        to={`/fleet/${car.slug}`}
        aria-label={`${car.name} – view details`}
        className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-line bg-white shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-bronze hover:shadow-md focus:outline-none focus:ring-2 focus:ring-bronze"
      >
        {/* Top: Brand Logo */}
        <div className="flex justify-center items-center pt-8 pb-4">
          {logo ? (
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[44px] max-w-[64px] object-contain"
              loading="lazy"
            />
          ) : (
            <span className="text-sm font-bold uppercase tracking-widest text-muted">
              {car.brand}
            </span>
          )}
        </div>

        {/* Middle: Car cut-out on spotlight */}
        <div 
          className="relative aspect-[4/3] w-full"
          style={{ background: 'radial-gradient(circle at center, #FFFFFF 0%, #F5F2EB 100%)' }}
        >
          <img
            src={img.hero}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain p-6 drop-shadow-[0_16px_14px_rgba(33,18,17,0.15)] transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        </div>

        {/* Bottom: Car Name and Details Link */}
        <div className="flex flex-grow flex-col items-center justify-start p-6 text-center">
          <h3 className="font-display text-xl font-semibold leading-tight text-ink mb-3">
            {car.name}
          </h3>
          
          <div className="mt-auto flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bronze-deep transition-colors group-hover:text-bronze">
            View details
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

