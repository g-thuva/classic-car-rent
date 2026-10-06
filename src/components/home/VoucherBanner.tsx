import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../ui/Reveal';
import { getCarImages } from '../../data/images';

const VOUCHER_CAR = {
  slug: 'ferrari488gtb',
  name: 'Ferrari 488 GTB Spider',
};

export const VoucherBanner = () => {
  const img = getCarImages(VOUCHER_CAR.slug);

  return (
    <section className="bg-ivory section-pad overflow-hidden" aria-labelledby="voucher-heading">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal y={24} className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden shadow-2xl border border-line">
          
          {/* ── LEFT: PHOTO AREA (Light) ── */}
          <div className="w-full lg:w-[55%] bg-white relative p-8 md:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
            <div className="absolute top-8 left-8 z-10">
              <span className="rounded-[4px] bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-bronze shadow-lg">
                Official Gift Voucher
              </span>
            </div>
            
            {/* Spotlight background effect */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{ background: 'radial-gradient(circle at center, #FFFFFF 0%, #F5F2EB 100%)' }}
            />

            <div className="relative z-10 flex-1 flex items-center justify-center my-12">
              <img
                src={img.hero}
                alt={`${VOUCHER_CAR.name} – gift voucher car`}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="w-full max-w-2xl object-contain drop-shadow-[0_24px_24px_rgba(36,17,16,0.25)] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-sm font-medium border-t border-line/50 pt-6">
              <span className="text-muted tracking-wide">Classic Car Rent &bull; Oftringen</span>
              <Link
                to={`/fleet/${VOUCHER_CAR.slug}`}
                className="text-bronze-deep hover:text-bronze hover:underline underline-offset-4 transition-colors flex items-center gap-1.5"
              >
                Featured: {VOUCHER_CAR.name} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: INK TEXT PANEL ── */}
          <div className="w-full lg:w-[45%] bg-ink p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-bronze/5 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <Gift size={18} className="text-bronze" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">Gift Experiences</span>
              </div>

              <h2
                id="voucher-heading"
                className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.1] text-ivory mb-8"
              >
                Give the gift <br />
                <span className="text-bronze">of speed</span>
              </h2>

              <p className="text-lg leading-relaxed text-muted-dark mb-10">
                A sports car voucher is the perfect surprise for birthdays, anniversaries and big
                occasions. Get in touch to choose the car and value.
              </p>

              <ul className="space-y-4 mb-12 text-[15px] text-ivory/80">
                {[
                  'Custom voucher amounts or specific supercar models',
                  'Presented in a luxury gift envelope or instant digital delivery',
                  'Valid for all 9 vehicles with flexible dates',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-4">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-bronze shadow-[0_0_8px_rgba(204,174,126,0.6)]" aria-hidden="true" />
                    <span className="leading-snug">{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@classic-car-rent.com?subject=Voucher%20Enquiry%20-%20Classic%20Car%20Rent"
                className="btn bg-bronze-gradient text-ink h-[56px] !px-10 text-[15px] !font-semibold inline-flex w-fit shadow-[0_0_24px_rgba(180,150,102,0.2)] hover:shadow-[0_0_32px_rgba(180,150,102,0.4)]"
              >
                <span>Ask about vouchers</span>
                <ArrowRight size={16} aria-hidden="true" className="ml-2" />
              </a>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
};
