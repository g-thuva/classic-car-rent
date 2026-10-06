import { KeyRound, SendHorizontal, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    step: '1',
    icon: KeyRound,
    title: 'Choose your car',
    desc: 'Browse our nine showroom-condition exotics and select the sports car of your dreams.',
  },
  {
    step: '2',
    icon: SendHorizontal,
    title: 'Send your request',
    desc: 'Select your preferred dates and duration. We review your details and confirm immediately.',
  },
  {
    step: '3',
    icon: CheckCircle2,
    title: 'Collect and drive away',
    desc: 'Arrive at our Oftringen showroom, receive your keys with a full tank and no deposit, and hit the road.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-card-alt section-pad border-y border-line" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-20">
          <SectionHeading
            align="center"
            eyebrow="SEAMLESS PROCESS"
            title={<span id="how-heading">How it works</span>}
            description="Three simple steps between you and the open road."
          />
        </Reveal>

        {/* 3 steps joined by a thin bronze line */}
        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Desktop: horizontal line through the circles */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-bronze"
          />
          {/* Mobile: vertical line through the circles */}
          <span
            aria-hidden="true"
            className="md:hidden absolute left-10 top-10 bottom-10 w-px -translate-x-1/2 bg-bronze"
          />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={item.step} className="relative">
                <Reveal delay={idx * 0.12}>
                  <div className="grid grid-cols-[5rem_1fr] gap-6 md:block md:text-center">
                    <div className="relative z-10 md:mx-auto w-20 h-20">
                      <div className="w-20 h-20 rounded-full bg-card border border-bronze shadow-soft flex items-center justify-center text-bronze-deep">
                        <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-ink text-ivory flex items-center justify-center text-xs font-semibold">
                        <span className="sr-only">Step </span>
                        {item.step}
                      </span>
                    </div>

                    <div className="md:mt-7">
                      <h3 className="font-display text-2xl font-semibold text-ink mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-muted max-w-sm md:mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-14 md:mt-16 text-center" delay={0.1}>
          <Button to="/booking" variant="primary" className="px-10 py-4">
            Start your booking request
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
