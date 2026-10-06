import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { 
  ShieldCheck, 
  Fuel, 
  Compass, 
  Clock, 
  ChevronDown, 
  Phone, 
  Gift,
  ArrowRight
} from 'lucide-react';

import { cars } from '../data/cars';
import { getCarImages } from '../data/images';
import { formatPrice } from '../lib/format';

type Tab = 'monThu' | 'friSun';

const brands = ['All', 'Ferrari', 'Lamborghini', 'Porsche', 'Audi', 'BMW', 'Mercedes'];
const durations = ['3h', '6h', '12h', '24h'] as const;

export const Prices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const rate: Tab = searchParams.get('rate') === 'weekend' ? 'friSun' : 'monThu';
  const selectedDuration = searchParams.get('duration') || '24h';
  const brand = searchParams.get('brand') || 'All';
  const sort = searchParams.get('sort') || 'price-asc';

  const updateParams = (updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([k, v]) => newParams.set(k, v));
    setSearchParams(newParams);
  };

  const filteredCars = useMemo(() => {
    let result = [...cars];
    if (brand !== 'All') {
      result = result.filter(c => c.brand.toLowerCase().includes(brand.toLowerCase()));
    }
    
    result.sort((a, b) => {
      if (sort === 'power') return b.powerPs - a.powerPs;
      const aPrice = a.prices[rate].h24;
      const bPrice = b.prices[rate].h24;
      return sort === 'price-desc' ? bPrice - aPrice : aPrice - bPrice;
    });
    
    return result;
  }, [brand, sort, rate]);

  const bestValueSlug = useMemo(() => {
    if (!filteredCars.length) return null;
    const cheapest = [...filteredCars].sort((a, b) => a.prices[rate].h24 - b.prices[rate].h24)[0];
    return cheapest.slug;
  }, [filteredCars, rate]);

  const getDelta = (car: typeof cars[0], currentRate: Tab) => {
    const weekDayPrice = car.prices.monThu.h24;
    const weekendPrice = car.prices.friSun.h24;
    if (weekDayPrice === weekendPrice) return null;
    
    if (currentRate === 'monThu') {
      const diff = weekendPrice - weekDayPrice;
      return `Weekend: +CHF ${diff} for 24h`;
    } else {
      const diff = weekendPrice - weekDayPrice;
      return `Weekday: -CHF ${diff} for 24h`;
    }
  };



  return (
    <div className="min-h-screen bg-ivory">
      <Helmet>
        <title>Rental Rates &amp; Prices | Classic Car Rent Oftringen</title>
        <meta
          name="description"
          content="Choose weekday or weekend rates. Every rental includes unlimited kilometres and a full tank, with no deposit. Transparent CHF pricing for all supercars."
        />
      </Helmet>

      {/* 1. COMPACT HERO BANNER */}
      <div className="relative h-[240px] md:h-[280px] bg-ink flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
            alt="Hero Background" 
            className="w-full h-full object-cover object-center opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 text-ivory">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-ivory">
            Rental Rates
          </h1>
          <p className="max-w-xl text-sm md:text-base text-ivory/80 leading-relaxed mb-6">
            Choose weekday or weekend rates. Every rental includes unlimited kilometres and a full tank, with no deposit.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ivory">
            <div className="flex items-center gap-1.5 bg-card/10 px-3 py-1.5 rounded-full border border-line/20 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-bronze" /> No deposit
            </div>
            <div className="flex items-center gap-1.5 bg-card/10 px-3 py-1.5 rounded-full border border-line/20 backdrop-blur-sm">
              <Compass size={14} className="text-bronze" /> Unlimited kilometres
            </div>
            <div className="flex items-center gap-1.5 bg-card/10 px-3 py-1.5 rounded-full border border-line/20 backdrop-blur-sm">
              <Fuel size={14} className="text-bronze" /> Full tank
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY CONTROL BAR */}
      <div className="sticky top-[60px] md:top-[72px] z-40 bg-ivory/95 backdrop-blur-md border-b border-line shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Rate Switcher */}
          <div 
            className="flex flex-col sm:flex-row gap-2"
            role="group"
            aria-label="Rate category"
          >
            <button
              type="button"
              aria-pressed={rate === 'monThu'}
              onClick={() => updateParams({ rate: 'weekday' })}
              className={clsx(
                "px-5 py-2 rounded-lg flex flex-col items-center justify-center border transition-colors",
                rate === 'monThu' 
                  ? "bg-ink border-ink text-ivory" 
                  : "bg-ivory border-line text-ink hover:border-bronze"
              )}
            >
              <span className="text-sm font-bold tracking-wide">Monday - Thursday</span>
              <span className={clsx("text-[10px] uppercase tracking-wider mt-0.5", rate === 'monThu' ? "text-ivory/60" : "text-muted")}>Weekday rates</span>
            </button>
            <button
              type="button"
              aria-pressed={rate === 'friSun'}
              onClick={() => updateParams({ rate: 'weekend' })}
              className={clsx(
                "px-5 py-2 rounded-lg flex flex-col items-center justify-center border transition-colors",
                rate === 'friSun' 
                  ? "bg-ink border-ink text-ivory" 
                  : "bg-ivory border-line text-ink hover:border-bronze"
              )}
            >
              <span className="text-sm font-bold tracking-wide">Friday - Sunday</span>
              <span className={clsx("text-[10px] uppercase tracking-wider mt-0.5", rate === 'friSun' ? "text-ivory/60" : "text-muted")}>Weekend rates</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-1 justify-end w-full lg:w-auto">
            {/* Duration Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted mr-1">Highlight Duration:</span>
              <div className="flex bg-card rounded-lg p-1 border border-line" role="group" aria-label="Highlight duration">
                {durations.map(d => (
                  <button
                    key={d}
                    type="button"
                    aria-pressed={selectedDuration === d}
                    onClick={() => updateParams({ duration: d })}
                    className={clsx(
                      "px-4 py-1.5 text-sm font-bold rounded-md transition-colors",
                      selectedDuration === d ? "bg-bronze text-white shadow-sm" : "text-ink/60 hover:text-ink"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide w-full sm:w-auto">
              <div className="flex gap-2">
                {brands.map(b => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={brand === b}
                    onClick={() => updateParams({ brand: b })}
                    className={clsx(
                      "px-4 py-1.5 text-sm font-medium rounded-lg border whitespace-nowrap transition-colors",
                      brand === b ? "bg-ink text-ivory border-ink" : "bg-card border-line text-ink hover:border-bronze"
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="relative group">
              <select 
                value={sort} 
                onChange={(e) => updateParams({ sort: e.target.value })}
                className="appearance-none bg-card border border-line pl-4 pr-10 py-1.5 rounded-lg text-sm font-medium text-ink outline-none focus:border-bronze focus:ring-1 focus:ring-bronze cursor-pointer"
                aria-label="Sort cars"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="power">Power</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRICE CARD GRID */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car, idx) => {
              const deltaText = getDelta(car, rate);
              const isBestValue = bestValueSlug === car.slug;
              const img = getCarImages(car.slug);
              
              return (
                <motion.div
                  key={car.slug + rate} // Re-animate if rate changes
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-card border border-line rounded-[12px] overflow-hidden shadow-[0_4px_24px_rgba(36,17,16,0.04)] hover:shadow-xl hover:border-bronze/50 transition-all duration-300 group flex flex-col"
                >
                  {/* TOP: Image area */}
                  <div className="relative h-[220px] bg-gradient-to-b from-card-alt to-card flex items-center justify-center p-6 overflow-hidden">
                    {/* Faint oversized brand name */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-8xl md:text-9xl font-bold text-line opacity-30 select-none whitespace-nowrap z-0">
                      {car.brand}
                    </div>
                    
                    {/* Spotlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 to-transparent z-10" />

                    <div className="absolute top-4 left-4 z-30">
                      <span className="bg-white/80 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-ink px-2.5 py-1 rounded-full border border-line shadow-sm">
                        {car.bodyType}
                      </span>
                    </div>

                    {isBestValue && (
                      <div className="absolute top-4 right-4 z-30">
                        <span className="bg-bronze text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md shadow-bronze/30">
                          Best value
                        </span>
                      </div>
                    )}

                    {img.hero ? (
                      <img 
                        src={img.hero} 
                        alt={car.name} 
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        className="relative z-20 w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="relative z-20 w-full h-full bg-ivory flex items-center justify-center border border-line/50 rounded-lg">
                        <span className="font-display font-medium text-ink/30 text-lg">{car.name}</span>
                      </div>
                    )}
                  </div>

                  {/* HEADER */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-deep mb-1">
                      {car.brand}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink mb-4 line-clamp-1">
                      {car.name}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-xs font-medium text-muted mb-6 pb-6 border-b border-line">
                      <div className="flex items-center gap-1">
                        <span className="text-ink font-bold">{car.powerPs}</span> PS
                      </div>
                      <div className="w-1 h-1 rounded-full bg-line" />
                      <div className="flex items-center gap-1">
                        <span className="text-ink font-bold">{car.zeroTo100s}s</span> 0-100
                      </div>
                      <div className="w-1 h-1 rounded-full bg-line" />
                      <div className="flex items-center gap-1">
                        <span className="text-ink font-bold">{car.topSpeedKmh}</span> km/h
                      </div>
                    </div>

                    {/* PRICE TABLE */}
                    <div className="mb-4">
                      {car.only24h ? (
                        <div className="grid grid-cols-1 rounded-lg border border-line overflow-hidden">
                          <div className={clsx(
                            "flex flex-col items-center justify-center py-4 px-2 text-center",
                            selectedDuration === '24h' ? "bg-bronze/5" : "bg-card"
                          )}>
                            <span className="text-[10px] uppercase font-bold text-muted mb-1">24h</span>
                            <span className="text-lg font-bold text-ink">{formatPrice(car.prices[rate].h24)}</span>
                            <span className="text-[10px] text-muted mt-0.5">Available for 24 hours only</span>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-4 rounded-lg border border-line overflow-hidden divide-x divide-line">
                          {(['h3', 'h6', 'h12', 'h24'] as const).map(d => {
                            const isSelected = selectedDuration === d.replace('h', '') + 'h';
                            const price = car.prices[rate][d];
                            
                            return (
                              <div key={d} className={clsx(
                                "flex flex-col items-center justify-center py-3 px-1 text-center transition-colors",
                                isSelected ? "bg-bronze/10" : "bg-card hover:bg-card-alt"
                              )}>
                                <span className={clsx(
                                  "text-[10px] uppercase font-bold mb-1",
                                  isSelected ? "text-bronze-deep" : "text-muted"
                                )}>
                                  {d.replace('h', '')}h
                                </span>
                                <span className="text-sm sm:text-base font-bold text-ink whitespace-nowrap">
                                  {price ? formatPrice(price) : '—'}
                                </span>
                                {d === 'h24' && price && (
                                  <span className="text-[9px] text-muted font-medium mt-0.5 leading-tight">
                                    {(price / 24).toFixed(0)}/h
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* WEEKEND DELTA */}
                    <div className="h-4 mb-6">
                      <AnimatePresence mode="wait">
                        {deltaText && (
                          <motion.p 
                            key={deltaText}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-[11px] font-medium text-muted italic text-right"
                          >
                            {deltaText}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* FOOTER BUTTONS */}
                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <Link 
                        to={`/fleet/${car.slug}`}
                        className="flex items-center justify-center px-4 py-3 rounded-lg border border-line text-xs font-bold uppercase tracking-widest text-ink hover:bg-card-alt transition-colors"
                      >
                        Details
                      </Link>
                      <Link 
                        to={`/booking?car=${car.slug}&rate=${rate === 'friSun' ? 'weekend' : 'weekday'}&duration=${selectedDuration}`}
                        className="flex items-center justify-center px-4 py-3 rounded-lg bg-ink text-ivory text-xs font-bold uppercase tracking-widest hover:bg-bronze hover:text-white shadow-lg transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>



      {/* 5. INCLUDED WITH EVERY RENTAL STRIP */}
      <div className="bg-ink py-10 border-y border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-ivory">
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="w-10 h-10 rounded-full border border-bronze flex items-center justify-center">
                <ShieldCheck size={18} className="text-bronze" />
              </div>
              <span>No deposit</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-line/20" />
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="w-10 h-10 rounded-full border border-bronze flex items-center justify-center">
                <Compass size={18} className="text-bronze" />
              </div>
              <span>Unlimited kilometres</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-line/20" />
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="w-10 h-10 rounded-full border border-bronze flex items-center justify-center">
                <Fuel size={18} className="text-bronze" />
              </div>
              <span>Full tank</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-line/20" />
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="w-10 h-10 rounded-full border border-bronze flex items-center justify-center">
                <Clock size={18} className="text-bronze" />
              </div>
              <span>Open 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. HELP / CTA BAND */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="bg-card border border-line shadow-soft rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md text-center md:text-left">
            <h3 className="font-display font-semibold text-2xl text-ink mb-3">Need help choosing?</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Call us and we will recommend the right car for your plans. Whether it's a wedding, weekend getaway, or special gift.
            </p>
            <a href="tel:+41763779131" className="inline-flex items-center gap-2 text-bronze-deep font-bold hover:text-bronze transition-colors">
              <Phone size={18} />
              +41 76 377 91 31
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link 
              to="/booking" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-ink text-ivory font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-bronze transition-colors shadow-xl"
            >
              Request a booking <ArrowRight size={14} />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-ink border border-line font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-card-alt transition-colors"
            >
              <Gift size={14} className="text-bronze" /> Ask about gift vouchers
            </Link>
          </div>
        </div>
        
        {/* 7. FOOTNOTE */}
        <div className="mt-8 text-center text-[10px] text-muted">
          All prices in CHF. Prices subject to confirmation.
        </div>
      </div>
      
    </div>
  );
};
