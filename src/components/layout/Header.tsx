import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteData } from '../../data/site';
import { siteImages } from '../../data/images';
import { Menu, X, Phone } from 'lucide-react';

const NAV_KEYS = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.fleet', to: '/fleet' },
  { key: 'nav.prices', to: '/prices' },
  { key: 'nav.terms', to: '/terms' },
  { key: 'nav.contact', to: '/contact' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const current = i18n.resolvedLanguage || 'de';
    i18n.changeLanguage(current === 'en' ? 'de' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page has a dark hero section at the top.
  // If it doesn't (like CarDetails, Terms, Contact, NotFound), the header needs a solid background immediately.
  const hasDarkHero = ['/', '/fleet', '/prices', '/booking'].includes(location.pathname);
  const forceSolid = !hasDarkHero;
  const isSolid = scrolled || forceSolid;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isSolid ? 'rgba(36, 17, 16, 0.95)' : 'transparent',
        backdropFilter: isSolid ? 'blur(12px)' : 'none',
        borderBottom: isSolid ? '1px solid rgba(180,150,102,0.15)' : '1px solid transparent',
      }}
    >
      <div
        className="max-w-[1600px] w-full mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300"
        style={{
          height: scrolled ? '80px' : '110px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 flex-shrink-0"
          aria-label="Classic Car Rent Home"
        >
          <img
            src={siteImages.logo.src}
            alt={siteImages.logo.alt}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-[52px]' : 'h-[84px]'
            }`}
            width={siteImages.logo.width}
            height={siteImages.logo.height}
          />
        </Link>

        {/* Centred navigation */}
        <nav className="hidden xl:flex items-center gap-10 mx-auto" aria-label="Main navigation">
          {NAV_KEYS.map(({ key, to }) => {
            const className = "relative py-2 font-sans text-lg font-medium tracking-wide text-[#F5F2EB] hover:text-[#CCAE7E] transition-colors [&.active]:text-[#CCAE7E] [&:hover::after]:scale-x-100 [&.active::after]:scale-x-100 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#CCAE7E] after:scale-x-0 after:origin-center after:transition-transform drop-shadow-md";
            if (to.startsWith('/#')) {
              return (
                <Link key={to} to={to} className={className}>
                  {t(key)}
                </Link>
              );
            }
            return (
              <NavLink key={to} to={to} end={to === '/'} className={className}>
                {t(key)}
              </NavLink>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 drop-shadow-md">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="w-[44px] h-[44px] rounded-lg border border-[rgba(204,174,126,0.5)] text-[#CCAE7E] flex items-center justify-center hover:bg-[#CCAE7E]/20 transition-colors bg-[#241110]/40 backdrop-blur-sm font-bold text-sm"
          >
            {i18n.resolvedLanguage?.toUpperCase() || 'DE'}
          </button>
          
          <a
            href={`tel:${siteData.phone}`}
            aria-label={`Call ${siteData.phone}`}
            className="w-[44px] h-[44px] rounded-lg border border-[rgba(204,174,126,0.5)] text-[#CCAE7E] flex items-center justify-center hover:bg-[#CCAE7E]/20 transition-colors bg-[#241110]/40 backdrop-blur-sm"
          >
            <Phone size={18} />
          </a>
          
          <Link to="/booking" className="btn bg-bronze-gradient text-ink h-[44px] !px-8 !text-[15px] !font-medium !normal-case !tracking-normal shadow-lg shadow-bronze/10 hover:brightness-110">
            {t('nav.bookNow')}
          </Link>

          <div className="flex items-center gap-1.5 ml-2 border-l border-[rgba(245,242,235,0.2)] pl-4">
            <a
              href={siteData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full text-[#CCAE7E] flex items-center justify-center hover:bg-[rgba(204,174,126,0.15)] transition-colors bg-[#241110]/40 backdrop-blur-sm"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={siteData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full text-[#CCAE7E] flex items-center justify-center hover:bg-[rgba(204,174,126,0.15)] transition-colors bg-[#241110]/40 backdrop-blur-sm"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={siteData.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full text-[#CCAE7E] flex items-center justify-center hover:bg-[rgba(204,174,126,0.15)] transition-colors bg-[#241110]/40 backdrop-blur-sm"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-[#CCAE7E] hover:text-ivory transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[rgba(180,150,102,0.25)] bg-[#241110]">
          <nav className="flex flex-col px-6 py-6 gap-1" aria-label="Mobile navigation">
            <div className="flex justify-end mb-4">
              <button
                type="button"
                onClick={toggleLanguage}
                className="w-12 h-10 rounded-lg border border-[rgba(204,174,126,0.5)] text-[#CCAE7E] flex items-center justify-center hover:bg-[#CCAE7E]/20 transition-colors font-bold text-sm"
              >
                {i18n.resolvedLanguage?.toUpperCase() || 'DE'}
              </button>
            </div>
            {NAV_KEYS.map(({ key, to }) => {
              const className = "text-[#F5F2EB] py-3 text-base active:text-[#CCAE7E]";
              if (to.startsWith('/#')) {
                return (
                  <Link key={to} to={to} onClick={() => setMobileMenuOpen(false)} className={className}>
                    {t(key)}
                  </Link>
                );
              }
              return (
                <NavLink key={to} to={to} end={to === '/'} onClick={() => setMobileMenuOpen(false)} className={className}>
                  {t(key)}
                </NavLink>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[rgba(180,150,102,0.25)]">
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="btn bg-bronze-gradient text-ink w-full h-12 flex justify-center items-center !text-sm !normal-case !tracking-normal"
              >
                {t('nav.bookNow')}
              </Link>
            </div>

            <div className="pt-4 text-xs text-[#F5F2EB]/70 space-y-1">
              <p>{siteData.address}</p>
              <a href={`tel:${siteData.phone}`} className="text-[#CCAE7E]">
                {siteData.phone}
              </a>
            </div>

            <div className="pt-6 pb-2 flex items-center justify-center gap-6">
              <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#1877F2]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E1306C]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href={siteData.social.youtube} target="_blank" rel="noopener noreferrer" className="text-[#FF0000]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
