import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-ink flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}carvideo.mp4`} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-ink/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center justify-center text-center">
        <Reveal>
          <h2 
            className="font-display font-bold text-white mb-6 uppercase tracking-widest"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 8rem)',
              lineHeight: 1.1,
              textShadow: '0 4px 32px rgba(0,0,0,0.5)',
            }}
          >
            DREAM CAR
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[#F5F2EB] text-lg md:text-2xl tracking-[0.2em] uppercase font-semibold mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Rent your dream car today
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            to="/booking"
            className="btn bg-bronze-gradient text-ink h-14 !px-10 text-lg shadow-[0_0_24px_rgba(180,150,102,0.4)] hover:shadow-[0_0_32px_rgba(180,150,102,0.6)]"
          >
            Book Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
