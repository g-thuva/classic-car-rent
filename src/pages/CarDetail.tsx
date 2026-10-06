import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cars } from '../data/cars';
import { getCarImages, brandLogos } from '../data/images';

import { CarCard } from '../components/cars/CarCard';
import { formatPrice } from '../lib/format';
import {
  Zap,
  Timer,
  Gauge,
  Activity,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Fuel,
  Compass,
  ArrowRight,
  ThumbsUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';

export const CarDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const idx = cars.findIndex((c) => c.slug === slug);
  if (idx === -1) return <Navigate to="/404" replace />;

  const car = cars[idx];
  const { hero, gallery } = getCarImages(car.slug);
  const logo = brandLogos[car.brand];
  
  const prevCar = cars[(idx - 1 + cars.length) % cars.length];
  const nextCar = cars[(idx + 1) % cars.length];
  const otherCars = cars.filter((c) => c.slug !== car.slug).slice(0, 3);

  const price24h = car.prices.monThu.h24;

  const keyFacts = [
    { label: 'Top speed', value: `${car.topSpeedKmh}`, unit: 'km/h', icon: Gauge },
    { label: 'Power', value: `${car.powerPs}`, unit: 'PS', icon: Zap },
    { label: 'Engine size', value: `${car.displacementCc}`, unit: 'cm³', icon: Activity },
    { label: '0-100 km/h', value: `${car.zeroTo100s}`, unit: 's', icon: Timer },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Helmet>
        <title>{car.name} Rental | Classic Car Rent</title>
        <meta name="description" content={`${car.name} - ${car.tagline}. ${car.description}`} />
      </Helmet>

      {/* ── BREADCRUMB BAR ── */}
      <div className="bg-ivory border-b border-line py-3">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between text-xs font-medium text-muted">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link to="/fleet" className="hover:text-ink transition-colors">Fleet</Link>
            <span>/</span>
            <span className="text-ink font-semibold">{car.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={`/fleet/${prevCar.slug}`}
              className="flex items-center gap-1 hover:text-ink transition-colors"
              title={`Previous: ${prevCar.name}`}
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:inline">Prev</span>
            </Link>
            <span className="text-line">|</span>
            <Link
              to={`/fleet/${nextCar.slug}`}
              className="flex items-center gap-1 hover:text-ink transition-colors"
              title={`Next: ${nextCar.name}`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* a) HERO */}
      <section className="bg-ivory py-12 md:py-20 border-b border-line overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start"
            >
              {logo && (
                <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain mb-6" />
              )}
              
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-bronze-deep mb-3">
                {car.brand} . {car.bodyType}
              </span>

              <h1 className="font-display font-semibold text-[#241110] leading-[1.1] mb-3" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}>
                {car.name}
              </h1>

              <p className="text-xl md:text-2xl text-bronze-deep font-display italic mb-6">
                {car.tagline}
              </p>

              <p className="text-[#3B2B29] text-[16px] md:text-[18px] leading-[1.7] max-w-[52ch] mb-8 font-light">
                {car.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link
                  to={`/booking?car=${car.slug}`}
                  className="px-8 py-4 rounded-lg bg-ink text-ivory font-bold text-sm hover:bg-bronze transition-colors flex items-center justify-center"
                >
                  Book this car
                </Link>
                <Link
                  to={`/prices?brand=${car.brand}`}
                  className="px-8 py-4 rounded-lg border border-ink text-ink font-bold text-sm hover:bg-ink hover:text-ivory transition-colors flex items-center justify-center"
                >
                  View rates
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-ink">
                <span className="flex items-center gap-1.5"><Check size={14} className="text-bronze" /> No deposit</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-bronze" /> Unlimited kilometres</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-bronze" /> Full tank</span>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] w-full"
              style={{ background: 'radial-gradient(circle at center, #FFFFFF 0%, #F5F2EB 100%)' }}
            >
              {logo ? (
                <img src={logo.src} alt="" aria-hidden="true" className="absolute w-[80%] h-auto opacity-[0.06] object-contain pointer-events-none" />
              ) : (
                <span className="absolute select-none font-display font-black text-7xl uppercase tracking-widest text-ink/[0.06] pointer-events-none">
                  {car.brand}
                </span>
              )}
              
              <img
                src={hero}
                alt={car.name}
                className="relative z-10 w-[90%] max-w-[700px] h-auto object-contain drop-shadow-xl hover:scale-[1.03] transition-transform duration-700"
                loading="eager"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* b) KEY FACTS */}
      <section className="bg-ivory py-16 border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {keyFacts.map((fact) => (
                <div key={fact.label} className="bg-white border border-line rounded-xl p-6 flex flex-col items-center text-center">
                  <fact.icon size={24} strokeWidth={1.5} className="text-bronze-deep mb-4" aria-hidden="true" />
                  <div className="font-display text-4xl text-ink font-semibold mb-1">
                    {fact.value}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* c) GALLERY */}
      {gallery && gallery.length >= 2 && (
        <section className="bg-ivory py-16 border-b border-line">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <Reveal>
              <h2 className="font-display font-semibold text-3xl text-ink mb-8">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-card border border-line">
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* d) INCLUDED BAND */}
      <section className="bg-ink py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-ivory">
            <div className="flex items-center gap-3 text-sm font-medium">
              <ShieldCheck size={20} className="text-bronze" /> No deposit
            </div>
            <div className="hidden md:block w-px h-6 bg-line/20" />
            <div className="flex items-center gap-3 text-sm font-medium">
              <Compass size={20} className="text-bronze" /> Unlimited kilometres
            </div>
            <div className="hidden md:block w-px h-6 bg-line/20" />
            <div className="flex items-center gap-3 text-sm font-medium">
              <Fuel size={20} className="text-bronze" /> Full tank
            </div>
            <div className="hidden md:block w-px h-6 bg-line/20" />
            <div className="flex items-center gap-3 text-sm font-medium">
              <ThumbsUp size={20} className="text-bronze" /> Top service
            </div>
          </div>
        </div>
      </section>

      {/* e) PRICE TEASER */}
      <section className="bg-ivory py-20 border-b border-line">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <div className="bg-white rounded-2xl border border-line p-10 md:p-14 shadow-sm flex flex-col items-center">
              <p className="text-sm font-bold uppercase tracking-widest text-muted mb-2">24h Weekday Rate</p>
              <p className="font-display text-4xl md:text-5xl font-semibold text-ink mb-8">
                <span className="text-2xl text-muted font-sans font-medium mr-2">From</span> 
                {formatPrice(price24h)} 
                <span className="text-2xl text-muted font-sans font-medium ml-2">/ 24h</span>
              </p>
              <Link
                to={`/prices?brand=${car.brand}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-bronze text-white font-bold text-sm hover:bg-bronze-deep transition-colors"
              >
                See all rates <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* f) YOU MAY ALSO LIKE */}
      <section className="bg-ivory py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl text-ink mb-10">You may also like</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {otherCars.map((c, i) => (
              <CarCard key={c.slug} car={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* g) CTA BAND */}
      <section className="bg-ink py-16 text-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ivory mb-6">Ready to drive?</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to={`/booking?car=${car.slug}`}
                className="px-8 py-4 rounded-lg bg-bronze text-white font-bold text-sm hover:bg-bronze-deep transition-colors"
              >
                Request a booking
              </Link>
              <a
                href="tel:+41627885020"
                className="px-8 py-4 rounded-lg border border-bronze text-bronze font-bold text-sm hover:bg-bronze hover:text-white transition-colors"
              >
                +41 62 788 50 20
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
