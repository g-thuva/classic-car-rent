import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { extraImages } from '../data/images';

export const NotFound = () => (
  <div className="min-h-[75vh] flex items-center justify-center bg-ivory py-20 px-6 text-center">
    <Helmet>
      <title>Page Not Found | Classic Car Rent</title>
    </Helmet>
    <Reveal className="max-w-md">
      <div className="spotlight mx-auto mb-8 aspect-[16/9] w-full max-w-xs overflow-hidden rounded-card border border-line shadow-soft">
        <img
          src={extraImages.performante.src}
          alt={extraImages.performante.alt}
          width={extraImages.performante.width}
          height={extraImages.performante.height}
          className="h-full w-full object-contain p-4 drop-shadow-[0_12px_12px_rgba(33,18,17,0.25)]"
        />
      </div>
      <div className="font-display font-semibold text-7xl sm:text-8xl text-bronze-deep mb-4">404</div>
      <h1 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-3">Vehicle Not Found</h1>
      <p className="text-muted text-sm mb-8 leading-relaxed">
        The page or supercar route you are searching for does not exist or has been relocated.
      </p>
      <Button to="/" variant="primary" className="px-8 py-3.5">
        Return to Showroom
      </Button>
    </Reveal>
  </div>
);
