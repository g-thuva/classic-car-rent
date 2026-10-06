import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { siteImages } from '../../data/images';

export const Hero = () => {
  const { t } = useTranslation();
  
  const TRUST_ITEMS = [
    t('hero.trust.noDeposit'),
    t('hero.trust.unlimitedKm'),
    t('hero.trust.fullTank'),
  ];
  return (
    <section className="relative w-full min-h-[100svh] bg-[#241110] overflow-hidden flex flex-col justify-between" aria-label="Welcome Hero">
      
      {/* ── FULL-BLEED PHOTO ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 78%' }}
          loading="eager"
          fetchPriority="high"
          width={siteImages.hero.width}
          height={siteImages.hero.height}
        />
        
        {/* Overlays */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(36,17,16,0.92) 0%, rgba(36,17,16,0.4) 50%, transparent 80%)'
        }} />
        <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(36,17,16,0.85) 0%, transparent 100%)'
        }} />
        <div className="absolute inset-x-0 top-0 h-48 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(36,17,16,0.85) 0%, rgba(36,17,16,0.4) 45%, transparent 100%)'
        }} />
      </div>

      {/* ── CONTENT (LEFT ALIGNED) ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pt-40 pb-20 flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl lg:max-w-[800px]"
        >
          <p className="mb-6 text-[#CCAE7E] tracking-[0.25em] uppercase text-sm md:text-base font-semibold">
            {t('hero.eyebrow')}
          </p>
          <h1
            className="font-display font-semibold text-[#F5F2EB] mb-8"
            style={{
              fontSize: 'clamp(3rem, 5.8vw, 6rem)',
              lineHeight: 1.05,
              maxWidth: '13ch',
              textWrap: 'balance',
              textShadow: '0 2px 24px rgba(36,17,16,0.8)',
            }}
          >
            {t('hero.title')}
          </h1>
          
          <p 
            className="text-[rgba(245,242,235,0.9)] text-lg md:text-xl leading-[1.6] max-w-[500px] mb-10"
            style={{ textShadow: '0 2px 18px rgba(36,17,16,0.7)' }}
          >
            {t('hero.subtitle')}
          </p>

          <ul className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4 mb-10">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base font-medium text-[#F5F2EB]" style={{ textShadow: '0 1px 8px rgba(36,17,16,0.6)' }}>
                <Check size={20} strokeWidth={2.5} className="text-[#CCAE7E]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
