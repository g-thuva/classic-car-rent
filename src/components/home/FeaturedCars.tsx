import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../../data/cars';
import { brandLogos, getCarImages } from '../../data/images';
import clsx from 'clsx';

/** Home page fleet section – shows an auto-sliding single-car carousel. */
export const FeaturedCars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cars.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-card-alt py-12 md:py-20 overflow-hidden" aria-label="Featured Cars Carousel">
      {/* Top Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#CCAE7E] w-full opacity-60" />
      
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative h-[500px] md:h-[600px] flex items-center justify-center">
        {cars.map((car, index) => {
          const img = getCarImages(car.slug);
          const logo = brandLogos[car.brand];
          const isActive = index === currentIndex;

          return (
            <div 
              key={car.slug}
              className={clsx(
                'absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out',
                isActive ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'
              )}
            >
              <Link
                to={`/fleet/${car.slug}`}
                className="group flex flex-col items-center justify-center h-full w-full focus:outline-none"
              >
                {/* Logo */}
                <div className="h-14 md:h-16 mb-8 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  {logo ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-auto object-contain drop-shadow-md"
                    />
                  ) : (
                    <span className="text-sm font-bold uppercase tracking-widest text-muted">
                      {car.brand}
                    </span>
                  )}
                </div>
                
                {/* Image */}
                <div className="relative w-full max-w-4xl aspect-[21/9] flex items-center justify-center px-4">
                  <img
                    src={img.hero}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-10 font-display text-3xl md:text-4xl font-semibold text-ink transition-colors group-hover:text-bronze">
                  {car.name}
                </h3>
              </Link>
            </div>
          );
        })}

        {/* Carousel Indicators */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3">
          {cars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={clsx(
                'w-2.5 h-2.5 rounded-full transition-all duration-300',
                idx === currentIndex ? 'bg-bronze w-8' : 'bg-bronze/30 hover:bg-bronze/60'
              )}
            />
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[#CCAE7E] w-full opacity-60" />
    </section>
  );
};
