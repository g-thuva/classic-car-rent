import { Award, Compass, Fuel, ShieldCheck } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const benefits = [
  {
    num: '01',
    icon: Award,
    title: 'Top Service',
    desc: 'Personal support from your first inquiry to the moment you return the keys.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Unlimited Mileage',
    desc: 'Take the long way home. No mileage limit on all our cars.',
  },
  {
    num: '03',
    icon: Fuel,
    title: 'Full Tank',
    desc: 'Your vehicle is fully fueled and ready to drive.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'No Deposit',
    desc: 'Enjoy the ride without a large amount blocked on your card.',
  },
];

export const Benefits = () => {
  return (
    <section className="bg-ivory section-pad" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-16">
          <SectionHeading
            align="center"
            eyebrow="THE PRIVILEGES"
            title={<span id="benefits-heading">Designed around the driver</span>}
            description="Every rental includes our complete luxury package with zero hidden charges and total peace of mind."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={idx * 0.09} className="h-full">
                <article className="group h-full flex flex-col justify-between rounded-card border border-line bg-card p-8 shadow-soft transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-bronze hover:shadow-lift">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display text-3xl font-semibold text-bronze-deep">
                        {item.num}
                      </span>
                      <div className="w-12 h-12 rounded-field border border-bronze-deep/50 flex items-center justify-center text-bronze-deep transition-colors duration-300 group-hover:bg-bronze-deep group-hover:text-ivory">
                        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-ink mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>

                  <div className="pt-6 mt-8 border-t border-line text-[11px] font-semibold uppercase tracking-wider text-bronze-deep">
                    Included in every rental
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
