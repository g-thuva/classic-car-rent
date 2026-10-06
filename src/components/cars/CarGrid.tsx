import clsx from 'clsx';
import type { Car } from '../../data/types';
import { CarCard } from './CarCard';

interface CarGridProps {
  cars: Car[];
  /** Mobile: horizontal scroll-snap row instead of a stacked column */
  scrollOnMobile?: boolean;
}

export const CarGrid = ({ cars, scrollOnMobile = false }: CarGridProps) => {
  if (!cars.length) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted text-lg">No vehicles found matching this criteria.</p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'w-full',
        scrollOnMobile
          ? 'flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 pt-2 pb-8 sm:mx-0 sm:px-0 sm:pt-0 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8'
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
      )}
    >
      {cars.map((car, i) => (
        <div
          key={car.slug}
          className={clsx(scrollOnMobile && 'w-[82%] shrink-0 snap-center sm:w-auto sm:shrink')}
        >
          <CarCard car={car} index={i} />
        </div>
      ))}
    </div>
  );
};
