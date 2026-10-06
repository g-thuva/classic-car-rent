import { brandLogos } from '../../data/images';

const brands = [
  { name: 'Ferrari', logo: 'Ferrari' },
  { name: 'Lamborghini', logo: 'Lamborghini' },
  { name: 'Porsche', logo: 'Porsche' },
  { name: 'Audi', logo: 'Audi' },
  { name: 'BMW', logo: undefined },
  { name: 'Mercedes-AMG', logo: 'Mercedes' },
];

export const BrandStrip = () => {
  return (
    <div className="bg-ivory pb-4 md:pb-6">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="hairline" />
        <ul
          aria-label="Brands in our fleet"
          className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-5 py-8"
        >
          {brands.map(({ name, logo }) => {
            const asset = logo ? brandLogos[logo] : undefined;
            return (
              <li key={name} className="flex items-center gap-3">
                {asset && (
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-auto object-contain grayscale opacity-80"
                  />
                )}
                <span className="font-display tracking-[0.2em] text-xs md:text-sm font-semibold uppercase text-ink">
                  {name}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="hairline" />
      </div>
    </div>
  );
};
