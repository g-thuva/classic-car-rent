/**
 * Central image map – every file that exists in /public/images is mapped here.
 *
 * public/images
 * ├── hero.jpg                      → home hero + page heroes + intro photo (different crop)
 * ├── logo.png                      → header + footer
 * ├── cars/*.png                    → print-resolution masters (7000px, 17–25 MB) – NOT loaded by the site
 * ├── cars/bmwm5cs-web.png          → web copy of the BMW master (no AVIF exists for the BMW)
 * ├── cars/*.pdf                    → documents, not images (ignored)
 * ├── cars/placeholder.svg          → intentionally unused
 * ├── placeholders/*.svg            → intentionally unused
 * └── brand-logos/*.avif            → web-optimised cut-outs + brand logos
 */

/** Encode each path segment so folders/files containing spaces resolve correctly. */
const asset = (path: string) =>
  import.meta.env.BASE_URL +
  path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');

const HOME = 'images/brand-logos'; // renamed folder

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/* ── Site-wide ─────────────────────────────────────────────── */
export const siteImages = {
  hero: {
    src: asset('images/hero.jpg'),
    width: 1376,
    height: 768,
    alt: 'Classic Car Rent Fleet',
  },
  pageHero: {
    src: asset('images/hero.jpg'),
    width: 1376,
    height: 768,
    alt: 'Classic Car Rent Fleet',
  },
  logo: {
    src: asset('images/logo.png'),
    width: 1800,
    height: 800,
    alt: 'Classic Car Rent',
  },
} satisfies Record<string, ImageAsset>;

/* ── Brand logos ─────────────────────── */
export const brandLogos: Record<string, ImageAsset> = {
  Ferrari: {
    src: asset(`${HOME}/4cabf11ca2754891d4d9d20326eca835.avif`),
    width: 212,
    height: 282,
    alt: 'Ferrari logo',
  },
  Lamborghini: {
    src: asset(`${HOME}/Lamborghini-Logo.avif`),
    width: 450,
    height: 254,
    alt: 'Lamborghini logo',
  },
  Porsche: {
    src: asset(`${HOME}/1200px-Porsche_Wappen_svg.avif`),
    width: 212,
    height: 282,
    alt: 'Porsche logo',
  },
  Audi: {
    src: asset(`${HOME}/audi-logo.avif`),
    width: 480,
    height: 192,
    alt: 'Audi logo',
  },
  Mercedes: {
    src: asset(`${HOME}/1200px-Mercedes-Logo_svg.avif`),
    width: 264,
    height: 264,
    alt: 'Mercedes-Benz logo',
  },
  BMW: {
    src: asset(`${HOME}/bmw.jpeg`),
    width: 300,
    height: 300,
    alt: 'BMW logo',
  },
};

/* ── Car cut-outs (transparent, 16:9 / 3:2) ────────────────── */
interface CarImageEntry extends ImageAsset {
  /** print-resolution master – kept for reference, never loaded on the site */
  full: string;
}

const car = (
  file: string,
  master: string,
  alt: string,
  width = 612,
  height = 344,
  folder = HOME,
): CarImageEntry => ({
  src: asset(`${folder}/${file}`),
  full: asset(`images/cars/${master}`),
  width,
  height,
  alt,
});

const carImages: Record<string, CarImageEntry> = {
  ferrari488gtb: car('Ferrari Spider.avif', 'ferrari488gtb.png', 'Grey Ferrari 488 GTB Spider'),
  'porsche-gt3': car('GT3RS .avif', 'porsche-gt3.png', 'Porsche 911 GT3 in chalk grey'),
  'lamborghini-urus': car('Urus_Black.avif', 'lamborghini-urus.png', 'Black Lamborghini Urus'),
  lamborghinihuracan: car('Huracan EVO.avif', 'lamborghinihuracan.png', 'Lamborghini Huracán EVO'),
  audirs6performance: car('Audi RS6 New_V2.avif', 'audirs6performance.png', 'Audi RS6 Performance estate'),
  bmwm5cs: car('bmwm5cs-web.png', 'bmwm5cs.png', 'BMW M5 CS saloon', 1000, 666, 'images/cars'),
  mercedesgt63: car('Mercedes GT63 NEW.avif', 'mercedesgt63.png', 'Mercedes-AMG GT 63'),
  mercedesg63: car('Mercedes G 63S_Black.avif', 'mercedesg63.png', 'Black Mercedes-AMG G 63'),
  mercedess500: car('Mercedes S500.avif', 'mercedess500.png', 'Mercedes-Benz S 500 saloon'),
};

/** Extra studio shot that is not part of the rental fleet data (used on the 404 page). */
export const extraImages = {
  performante: {
    src: asset(`${HOME}/Performante.avif`),
    width: 612,
    height: 344,
    alt: 'Blue Lamborghini Huracán Performante',
  },
} satisfies Record<string, ImageAsset>;

/** Per-car image set. Cut-outs are transparent, so show them with object-contain. */
export const getCarImages = (slug: string) => {
  const entry = carImages[slug];
  const fallbackSrc = asset(`images/cars/${slug}.png`);
  return {
    hero: entry?.src ?? fallbackSrc,
    width: entry?.width ?? 612,
    height: entry?.height ?? 344,
    alt: entry?.alt ?? slug,
    full: entry?.full ?? fallbackSrc,
    gallery: [entry?.src ?? fallbackSrc],
  };
};
