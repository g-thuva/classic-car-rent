import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CtaBand } from '../components/home/CtaBand';
import { siteImages } from '../data/images';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Helmet>
        <title>Terms & Conditions | Classic Car Rent Oftringen</title>
        <meta
          name="description"
          content="Terms and Conditions of Classic Car Rent GmbH in Oftringen."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pb-24 text-ink/85 leading-relaxed">
        <div className="bg-card rounded-card p-8 md:p-12 lg:p-16 border border-line shadow-soft space-y-12">
          
          <div className="flex flex-col items-center justify-center mb-8 border-b border-line pb-12">
            <img 
              src={siteImages.logo.src} 
              alt="Classic Car Rent Logo" 
              className="h-16 md:h-20 w-auto object-contain brightness-0 mb-8"
            />
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-ink">
              Terms & Conditions
            </h1>
          </div>
          
          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Requirements</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Minimum age: 18 years</li>
              <li>Driving license category: B or higher</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Reservations</h2>
            <p>
              Reservations can be made in writing, by phone or by email. You will receive a reservation confirmation by email, WhatsApp or SMS. Reservations that are not kept must be cancelled at least 48 hours before the start of the rental period. Otherwise, an invoice for 50% of the amount will be charged.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Accidents</h2>
            <p>
              In the event of an accident, the renter is obliged to inform Classic Car Rent GmbH immediately. The renter is also obliged to notify the police immediately and have a report drawn up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Reservations / Exclusions</h2>
            <p>
              Classic Car Rent GmbH reserves the right not to hand over the vehicles in bad weather. New dates can be agreed upon for existing rental agreements. No follow-up costs will be incurred by either side.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Driving Abroad</h2>
            <p>
              The vehicle may only be driven in Switzerland. Any exceptions can be decided by Classic Car Rent GmbH and must be obtained in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Handover / Return</h2>
            <p>
              Handover and return take place at the Classic Car Rent GmbH office. A report will be filled out upon handover/return and any damage must be recorded in writing and with photos. The vehicle must be fully refueled before return. If the car is not returned after the agreed time, the customer must pay a surcharge of CHF 100 for each hour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Driving by a Third Party</h2>
            <p>
              The renter may only transfer the right of use under the rental agreement to another person with the consent of the lessor. Third-party drivers must be named by the renter when the contract is concluded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">GPS / Tracking</h2>
            <p>Every vehicle is monitored by GPS/Tracking.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Supplementary Provisions</h2>
            <p>In addition to these provisions, the Swiss Code of Obligations applies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Use of the Vehicle</h2>
            <p className="mb-2">The renter is obliged to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>drive and handle the vehicle carefully and comply with the operating instructions specified by the manufacturer or lessor,</li>
              <li>lock the vehicle when not in use, especially windows, roof openings, and the hood;</li>
              <li>use the vehicle only in Switzerland,</li>
              <li>not smoke in the vehicle,</li>
              <li>use the vehicle only for legally permissible purposes, and</li>
              <li>interrupt the journey if a defect occurs on the vehicle as soon as this is safely possible, immediately notifying the lessor.</li>
            </ul>

            <p className="mb-2">It is prohibited to use the vehicle:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>for races, skid courses, driving courses or similar, and as a driving school car;</li>
              <li>as a tow truck, towing vehicle, or for pushing;</li>
              <li>providing false personal details such as age, name, address, etc.;</li>
              <li>under the influence of alcohol, drugs, medications, and stimulants (zero tolerance);</li>
              <li>in an overloaded or unroadworthy condition;</li>
              <li>for driving through riverbeds or similar (especially in cases of vehicles with 4x4 drive);</li>
              <li>for commercial use, especially for the paid transport of persons or goods and for subletting;</li>
              <li>for the transport of flammable, explosive, toxic, or dangerous substances.</li>
            </ul>
            <p>Furthermore, the renter is prohibited from handing over the vehicle to third parties for use without the permission of the lessor.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Limited Liability of the Lessor</h2>
            <p>
              Any liability of the lessor for itself and the auxiliary persons employed by it towards the renter and any additional drivers for any kind of contractual and/or non-contractual personal injury and/or property damage is expressly excluded to the extent permitted by law, including liability for indirect and/or consequential damages, loss of profit, consequential damages caused by defects, damages caused by delay, inability to use the vehicle, missed connections, and missed business opportunities, etc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Duty of Care and Reporting Obligations of the Renter</h2>
            <p className="mb-4">
              In the event of an accident, theft, fire, damage caused by game or other damage to the vehicle, the renter must notify the lessor immediately and do everything necessary and conducive to clarifying the facts and mitigating the damage. In particular, in the event of any accident, they must notify and call in the police immediately. This also applies to minor damage and self-inflicted accidents without the involvement of third parties. If the police refuse to record the accident, the renter must immediately notify the lessor of this and provide evidence. The renter is prohibited from recognizing or satisfying a claim in whole or in part, unless the renter's refusal to recognize or satisfy would be obviously grossly inequitable under the circumstances.
            </p>
            <p>
              If these obligations are violated, the renter becomes fully liable for any damage associated with the aforementioned circumstances, whereby any concluded limitation of liability or insurance shall cease to apply. The renter hereby authorizes the lessor to inspect police and/or official records in the event of a claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Traffic Violations</h2>
            <p className="mb-4">The renter is obliged to observe all traffic rules.</p>
            <p className="mb-4">
              Until the vehicle is returned, the renter is exclusively responsible for all violations of the law caused with the rented vehicle, in particular the Road Traffic Act (even if committed e.g. by an additional driver). If the lessor is held liable for this due to owner's liability or for other reasons, Classic Car Rent GmbH is entitled to pass on any incurred fines, fees, and costs, etc. to the renter in an appropriate manner.
            </p>
            <p className="mb-4">
              As the owner of the rented vehicle, the lessor is legally obliged to report the personal data of the vehicle driver or renter to the authorities in the event of traffic violations. In this case, the renter undertakes to pay the lessor a fee of CHF 35 for their administrative effort.
            </p>
            <p>
              If a vehicle is impounded by the police or public prosecutor due to traffic violations, the rental period for the renter remains valid until the vehicle arrives back at the Classic Car Rent GmbH office. In this case, the standard hourly rental rate applies and will be claimed by Classic Car Rent GmbH in any case.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Liability, Limitation of Liability and Protection Options</h2>
            
            <h3 className="text-lg font-bold text-ink mt-6 mb-2">Renter's Liability to the Lessor</h3>
            <p className="mb-4">
              The renter is liable regardless of fault for any damage incurred by the lessor due to damage to the rental vehicle, its destruction, and its loss (e.g. through theft) up to the previously indicated deductible. The renter is particularly liable for the behavior of an additional driver or auxiliary persons brought in by them. The renter must count their behavior as their own and becomes fully liable to the lessor for any resulting damage. Multiple renters of a vehicle are jointly and severally liable for any damage incurred.
            </p>

            <h3 className="text-lg font-bold text-ink mt-6 mb-2">Extent of Liability</h3>
            <p className="mb-4">
              The renter's obligation to pay compensation includes, in addition to the actual damage (e.g. reduced value of the vehicle or repair costs, both taking into account an appropriate reduction in value, transport, liability deductible, and loss of bonus), the costs of an expert opinion and a processing fee of CHF 150 per claim. The lessor is entitled to have the cause, extent, and quantification of the damage determined in the event of a claim by an independent expert appointed by them at the renter's expense. The renter agrees that the findings and the damage quantification of such an expert report shall form the basis of the claims settlement with binding effect for them within the meaning of Art. 189 of the Swiss Civil Procedure Code (ZPO). If the vehicle cannot be used by the lessor as a result of a claim, they can charge for the loss of use for the duration of the repair at the rates agreed with the renter for the actual rental. In the event of a total loss, a flat rate of one week's loss of use will be charged. Classic Car Rent GmbH will invoice the renter for damage for which they are responsible, which is payable within 14 days. If the compensation payment is not made on time, a dunning fee of CHF 18 will be charged from the first reminder onwards. All other costs incurred in connection with the collection of the claim for damages are also borne by the renter.
            </p>

            <h3 className="text-lg font-bold text-ink mt-6 mb-2">Third-Party Liability Insurance</h3>
            <p className="mb-4">
              The renter and every authorized driver is insured under a motor vehicle liability insurance policy. This liability insurance covers personal injury and property damage to third parties up to a maximum coverage amount of CHF 100,000,000 and is restricted to Europe.
            </p>

            <h3 className="text-lg font-bold text-ink mt-6 mb-2">Deductible</h3>
            <p className="mb-4">Third-party liability and comprehensive insurance are included in the rental price. The deductible is:</p>
            <ul className="list-none space-y-4 mb-6">
              <li>
                <strong className="text-ink block mb-1">Lamborghini Huracan Evo:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 3,000, Comprehensive CHF 5,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 3,000, Comprehensive CHF 5,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Lamborghini Urus:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 3,000, Comprehensive CHF 6,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 2,000, Comprehensive CHF 5,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Ferrari 488 Spyder:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 2,000, Comprehensive CHF 3,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 2,000, Comprehensive CHF 3,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Mercedes S-500:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 2,000, Comprehensive CHF 3,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 1,000, Comprehensive CHF 2,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Mercedes G63:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 2,000, Comprehensive CHF 5,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 2,000, Comprehensive CHF 2,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Mercedes GT63s:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 2,000, Comprehensive CHF 3,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 0, Comprehensive CHF 1,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Range Rover Sport:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 2,000, Comprehensive CHF 4,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 4,000, Comprehensive CHF 4,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Audi RS6:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 2,000, Comprehensive CHF 5,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 1,000, Comprehensive CHF 3,000</span>
              </li>
              <li>
                <strong className="text-ink block mb-1">Porsche GT3RS:</strong>
                <span className="block text-sm">Driver under 25 years &rarr; Liability CHF 3,000, Comprehensive CHF 5,000</span>
                <span className="block text-sm">Driver 25 years and older &rarr; Liability CHF 3,000, Comprehensive CHF 5,000</span>
              </li>
            </ul>
            <p>
              Damage up to this amount is always borne by the renter. Cases of liability exclusion according to the following list remain reserved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Exclusion or Lapsing of the Limitation of Liability or Insurance Coverage</h2>
            <p className="mb-4">
              Intentional or grossly negligent causation of damage will, regardless of the nature of the damage caused, always result in the lapsing of any concluded limitation of liability and insurance coverage, and thus in the unlimited liability of the renter to the lessor and third parties for all damages in connection with the rental agreement.
            </p>
            <p className="mb-4">
              Furthermore, regardless of fault, any concluded limitation of liability or insurance coverage does NOT apply in the following cases, and the renter is fully and unrestrictedly liable to the lessor and third parties for the entire damage:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>in the event of misfueling, improper use of snow chains, careless handling of the interior of the vehicle (cigarette burns, tears and stains on upholstery or other interior fittings), consequences of driving off-road, incorrect manipulation of 4x4 vehicles (mechanical damage to clutch, gearbox, suspension, etc., which are not covered under warranty by the authorized garages), incorrect handling of convertible roofs, failure to close the roof in rain, wind, etc.;</li>
              <li>in the event of roof damage and other damage resulting from failure to observe the maximum height and width of the vehicle when passing through gates, entrances, tunnels, bridges, etc.;</li>
              <li>in the event of transport of prohibited or dangerous goods (hazardous materials);</li>
              <li>in the event of transport of passengers or goods for remuneration;</li>
              <li>in the event of non-compliance with the renter's obligations stated in the rental agreement and the general rental terms (GTC), as well as handing over the vehicle to an unauthorized third party or one who does not have a valid driver's license;</li>
              <li>In the event of non-compliance with statutory regulations regarding reporting obligations when crossing borders as well as customs and import regulations;</li>
              <li>For damage to tires and rims as well as the windows of the vehicle, unless the renter has taken out special tire and window protection beyond the general limitation of liability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Gross Negligence</h2>
            <p className="mb-4">
              As grossly negligent behavior, which, even if a limitation of liability or insurance has been concluded, establishes the full and unlimited liability of the renter to the lessor or third parties, the parties define in particular, but not exclusively:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>any gross traffic violation within the meaning of Art. 90 Para. 2 SVG (Road Traffic Act);</li>
              <li>any driving style in which the driver is aware of the general danger of their unlawful driving style or has negligently failed to consider it;</li>
              <li>any driving style in which the driver acts in violation of essential precautionary requirements and thereby ignores what should have been obvious to any reasonable person in the same situation and under the same circumstances in order to avoid damage foreseeable according to the usual course of events;</li>
              <li>any driving while intoxicated, under the influence of narcotics, or medication that impairs driving ability;</li>
              <li>any driving in an overtired state, during microsleep, or falling asleep events;</li>
              <li>the following traffic violations, provided they led to or contributed to an accident: excessive speed or speed not adapted to the conditions, loss of control of the vehicle, insufficient distance when driving behind another vehicle, ignoring overtaking bans and stop streets as well as ignoring traffic lights, ignoring the permitted direction of travel, inattentiveness and distraction at the wheel e.g. due to operating mobile phones, radio or navigation devices, etc., switching off safety-relevant vehicle equipment such as ABS and ESP and other driving stability systems, driving the vehicle in a non-compliant and unsafe condition (e.g. insufficiently secured load, insufficient cleaning of the vehicle windows from snow, ice or dirt, etc.); Insufficient vehicle securing (e.g. missing handbrake when parking the vehicle on slopes, failure to lock the vehicle, leaving the key in the ignition);</li>
              <li>Leaving valuables in the vehicle.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-semibold text-ink mb-4">Applicable Law and Jurisdiction</h2>
            <p className="mb-2">The rental agreement is exclusively subject to Swiss law, excluding private international law.</p>
            <p>
              The place of jurisdiction for all disputes between the renter and additional driver on the one hand and the lessor on the other hand in connection with the rental agreement is the District Court of Zofingen. However, the lessor remains entitled to invoke any other competent court.
            </p>
          </section>

          <div className="pt-8 border-t border-line flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-deep hover:underline"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      <CtaBand />
    </div>
  );
};
