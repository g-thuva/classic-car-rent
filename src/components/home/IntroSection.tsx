import { useTranslation } from 'react-i18next';
import { siteImages } from '../../data/images';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-ivory section-pad overflow-hidden" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        {/* Left: heading + copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              eyebrow={t('intro.eyebrow')}
              title={
                <span id="intro-heading">
                  {t('intro.titlePart1')}{' '}
                  <em className="not-italic text-bronze-deep">{t('intro.titlePart2')}</em>
                </span>
              }
              className="max-w-none"
            />
          </Reveal>

          <div className="mt-8 space-y-5">
            <Reveal delay={0.1} y={16}>
              <p className="text-base md:text-[1.0625rem] leading-[1.8] text-ink/85">{t('intro.p1')}</p>
            </Reveal>
            <Reveal delay={0.2} y={16}>
              <p className="text-base md:text-[1.0625rem] leading-[1.8] text-ink/85">{t('intro.p2')}</p>
            </Reveal>
          </div>
        </div>

        {/* Right: large photo with offset bronze outline frame */}
        <Reveal className="lg:col-span-6" x={24} y={0}>
          <div className="relative mx-auto max-w-md lg:max-w-none lg:ml-auto lg:w-[88%] mt-6 lg:mt-0">
            <div
              className="absolute -inset-3 md:-inset-4 rounded-[1.25rem] border border-[#CCAE7E]/40 pointer-events-none"
              aria-hidden="true"
            />
            <img
              src={siteImages.hero.src}
              alt="Red Ferrari sports car on an alpine road at dusk"
              width={siteImages.hero.width}
              height={siteImages.hero.height}
              loading="lazy"
              decoding="async"
              className="relative w-full aspect-[4/5] object-cover object-[86%_center] rounded-card shadow-lift"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
