import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { siteImages } from '../../data/images';

interface PageHeroProps {
  eyebrow: string;
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Tailwind max-width class for the inner container */
  width?: string;
}

/**
 * Shared dark page header: full-bleed photo that fades into ink.
 * It slides up behind the fixed header so every page shares the home hero's look.
 */
export const PageHero = ({
  eyebrow,
  icon: Icon,
  title,
  description,
  children,
  width = 'max-w-7xl',
}: PageHeroProps) => (
  <section className="surface-dark relative -mt-[68px] md:-mt-[84px] overflow-hidden bg-ink">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <img
        src={siteImages.pageHero.src}
        alt=""
        className="w-full h-full object-cover object-[65%_center] opacity-60"
        loading="eager"
        width={siteImages.pageHero.width}
        height={siteImages.pageHero.height}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative z-10 ${width} mx-auto px-5 md:px-8 pt-[calc(68px+2rem)] md:pt-[calc(84px+3rem)] pb-8 md:pb-12`}
    >
      <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-field border border-bronze/50 bg-ink/50">
        {Icon ? (
          <Icon size={13} className="text-bronze" aria-hidden="true" />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h1
        className="font-display font-semibold text-ivory"
        style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4rem)', lineHeight: 1.08 }}
      >
        {title}
      </h1>

      {description && (
        <p
          className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed text-ivory/90"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}
        >
          {description}
        </p>
      )}

      {children && <div className="mt-8">{children}</div>}
    </motion.div>
    <div className="hairline-bronze" aria-hidden="true" />
  </section>
);
