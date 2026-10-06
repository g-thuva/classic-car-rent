import { siteData } from '../../data/site';
import { PhoneCall, Send, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const CtaBand = () => {
  return (
    <section
      className="surface-dark bronze-glow relative overflow-hidden section-pad !py-16 md:!py-24 border-t border-line-dark"
      aria-labelledby="cta-heading"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left text */}
        <Reveal className="lg:col-span-5 text-center lg:text-left">
          <p className="eyebrow mb-4">WE ARE AT YOUR SERVICE 24/7</p>
          <h2
            id="cta-heading"
            className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-ivory"
          >
            Any questions?
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-dark max-w-md mx-auto lg:mx-0">
            Call our team directly or send an online request. We respond promptly.
          </p>
        </Reveal>

        {/* Right: phone + two buttons */}
        <Reveal delay={0.1} className="lg:col-span-7 flex flex-col items-center lg:items-end gap-7">
          <a
            href={`tel:${siteData.phone}`}
            aria-label={`Call Classic Car Rent on ${siteData.phone}`}
            className="group flex items-center gap-4 sm:gap-5"
          >
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-bronze-gradient text-ink transition-transform duration-300 group-hover:scale-105">
              <PhoneCall size={26} aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
                Direct Hotline 24/7
              </span>
              <span className="block font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory transition-colors group-hover:text-bronze">
                {siteData.phone}
              </span>
            </span>
          </a>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button to="/booking" variant="primary" tone="dark" className="px-8 py-4">
              <span>Send a request</span>
              <Send size={14} aria-hidden="true" />
            </Button>
            <Button href={`tel:${siteData.phone}`} variant="outline" tone="dark" className="px-8 py-4">
              <Phone size={14} aria-hidden="true" />
              <span>Call now</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
