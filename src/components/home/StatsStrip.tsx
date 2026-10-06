import { Reveal } from '../ui/Reveal';

const stats = [
  { number: '9', label: 'Exotic Supercars', sub: 'In Showroom Fleet' },
  { number: '24/7', label: 'Always Open', sub: 'Round the Clock' },
  { number: '0', label: 'Deposit Required', sub: 'Zero Blocked Funds' },
  { number: '∞', label: 'Kilometres', sub: 'Unlimited Freedom' },
];

export const StatsStrip = () => {
  return (
    // Top padding clears the 40px overlap of the hero booking bar.
    <section className="bg-ivory pt-24 md:pt-28 pb-12 md:pb-16" aria-label="Classic Car Rent in numbers">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <Reveal
              key={stat.label}
              delay={idx * 0.08}
              className={[
                'flex flex-col items-center text-center px-4 py-6 lg:py-2',
                idx % 2 === 1 ? 'border-l border-line' : '',
                idx > 0 ? 'lg:border-l lg:border-line' : '',
                idx >= 2 ? 'border-t border-line lg:border-t-0' : '',
              ].join(' ')}
            >
              <dt className="order-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-bronze-deep mb-1">
                {stat.label}
              </dt>
              <dd className="order-1 font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-2 leading-none">
                {stat.number}
              </dd>
              <dd className="order-3 text-xs sm:text-sm text-muted">{stat.sub}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};
