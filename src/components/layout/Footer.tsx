import { siteData } from '../../data/site';
import { siteImages } from '../../data/images';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinkClass =
  'w-12 h-12 rounded-[12px] border border-bronze/30 flex items-center justify-center transition-all hover:scale-105 hover:bg-white/5';

const navLinkClass =
  'text-muted-dark hover:text-bronze transition-colors flex items-start gap-2 justify-between w-[90%]';

export const Footer = () => {
  return (
    <footer id="site-footer" className="surface-dark bg-ink text-ivory relative border-t border-line-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-6">
        {/* ── 3-COLUMN MAIN FOOTER ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-8">
          {/* Column 1: Logo, tagline, credit */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-6 inline-block" aria-label="Classic Car Rent home">
              <img
                src={siteImages.logo.src}
                alt={siteImages.logo.alt}
                className="h-[80px] w-auto object-contain"
                width={siteImages.logo.width}
                height={siteImages.logo.height}
                loading="lazy"
              />
            </Link>

            <p className="text-sm text-muted-dark leading-relaxed max-w-sm mb-8">
              Sports and luxury car rental in Oftringen, Switzerland. Experience true performance with zero
              deposit and unlimited kilometres.
            </p>

            {/* Social icons */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-dark mb-3">
                Follow us
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialLinkClass} text-[#1877F2]`}
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialLinkClass} text-[#E1306C]`}
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={siteData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialLinkClass} text-[#FF0000]`}
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Address, hours, contact */}
          <div className="md:col-span-4 space-y-5 pt-4 md:pt-0">
            <h2 className="eyebrow mb-6">Showroom &amp; Hours</h2>

            <div className="flex items-start gap-4 text-base text-ivory/90">
              <MapPin size={18} className="text-bronze mt-1 flex-shrink-0" aria-hidden="true" />
              <span>{siteData.address}</span>
            </div>

            <div className="flex items-start gap-4 text-base text-ivory/90">
              <Clock size={18} className="text-bronze mt-1 flex-shrink-0" aria-hidden="true" />
              <span>{siteData.hours}</span>
            </div>

            <div className="pt-3 space-y-4">
              <a
                href={`tel:${siteData.phone}`}
                className="flex items-center gap-4 text-base text-ivory/90 hover:text-bronze transition-colors"
              >
                <Phone size={18} className="text-bronze flex-shrink-0" aria-hidden="true" />
                <span>{siteData.phone}</span>
              </a>

              <a
                href={`mailto:${siteData.email}`}
                className="flex items-center gap-4 text-base text-ivory/90 hover:text-bronze transition-colors"
              >
                <Mail size={18} className="text-bronze flex-shrink-0" aria-hidden="true" />
                <span>{siteData.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quick links */}
          <div className="md:col-span-3 pt-4 md:pt-0">
            <h2 className="eyebrow mb-6">Navigation</h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 text-base">
              <Link to="/fleet" className={navLinkClass}>
                <span>Our Fleet</span>
                <ArrowUpRight size={14} className="opacity-60 flex-shrink-0 mt-1" aria-hidden="true" />
              </Link>
              <Link to="/prices" className={navLinkClass}>
                <span>Rental Rates</span>
                <ArrowUpRight size={14} className="opacity-60 flex-shrink-0 mt-1" aria-hidden="true" />
              </Link>
              <Link to="/booking" className={navLinkClass}>
                <span>Booking Request</span>
                <ArrowUpRight size={14} className="opacity-60 flex-shrink-0 mt-1" aria-hidden="true" />
              </Link>
              <Link to="/terms" className={navLinkClass}>
                <span>Terms &amp; Conditions</span>
                <ArrowUpRight size={14} className="opacity-60 flex-shrink-0 mt-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── BRONZE DIVIDER, PHOTO CREDIT & COPYRIGHT ── */}
        <div className="hairline-bronze" />
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-dark">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
          <p>
            Photos &amp; Media: <span className="text-bronze">perfectframe.ch</span>
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-bronze transition-colors">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true">&bull;</span>
            <span className="text-bronze">Oftringen, Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
