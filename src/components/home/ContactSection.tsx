import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { siteData } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.address)}`;

const details = [
  { icon: MapPin, label: 'Address', value: siteData.address, href: mapsUrl },
  { icon: Clock, label: 'Opening hours', value: siteData.hours },
  { icon: Phone, label: 'Phone', value: siteData.phone, href: `tel:${siteData.phone}` },
  { icon: Mail, label: 'Email', value: siteData.email, href: `mailto:${siteData.email}` },
];

/** Contact section: details card + illustrated map panel. */
export const ContactSection = ({ standalone = false }: { standalone?: boolean }) => (
  <section id="contact" className={`bg-ivory scroll-mt-16 ${standalone ? 'py-8 md:py-10 min-h-[calc(100svh-84px)] flex flex-col justify-center' : 'section-pad'}`} aria-labelledby="contact-heading">
    <div className="max-w-7xl w-full mx-auto px-5 md:px-8">
      <Reveal className="mb-12 md:mb-14">
        <SectionHeading
          eyebrow="Showroom & Hours"
          title={<span id="contact-heading">Visit our Oftringen showroom</span>}
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Details card */}
        <Reveal className="lg:col-span-5">
          <div className="h-full rounded-card border border-line bg-card p-8 md:p-10 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-ink">{siteData.name}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-bronze-deep font-semibold">
              {siteData.tagline}
            </p>

            <ul className="mt-8 divide-y divide-line">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 py-4 first:pt-0">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-field border border-bronze-deep/50 text-bronze-deep">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="break-words text-base font-medium text-ink hover:text-bronze-deep hover:underline underline-offset-4"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              <Button to="/booking" variant="primary" className="w-full sm:w-auto px-8 py-4">
                Send a request
              </Button>
              <div className="flex items-center gap-4 text-bronze">
                <a href="https://www.facebook.com/ClassicCarRentGmbH" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-bronze-deep transition-colors">
                  <FacebookIcon size={24} />
                </a>
                <a href="https://www.youtube.com/watch?v=0uGXBKYkOcI" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-bronze-deep transition-colors">
                  <YoutubeIcon size={24} />
                </a>
                <a href="https://www.instagram.com/classic_car_rent/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-bronze-deep transition-colors">
                  <InstagramIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Map panel */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative h-full min-h-[320px] lg:min-h-[500px] overflow-hidden rounded-card border border-line bg-card-alt shadow-soft">
            <iframe
              title={`Map showing ${siteData.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteData.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] opacity-90 sepia-[20%]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
