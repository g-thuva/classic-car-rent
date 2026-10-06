import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cars } from '../data/cars';
import { Button } from '../components/ui/Button';
import { getCarImages } from '../data/images';
import { formatPrice } from '../lib/format';
import { CheckCircle2, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';
import { Reveal } from '../components/ui/Reveal';

export const Booking = () => {
  const [searchParams] = useSearchParams();
  const carParam = searchParams.get('car') || '';
  const durationParam = searchParams.get('duration') || '';
  const dateParam = searchParams.get('date') || '';

  const todayStr = new Date().toISOString().split('T')[0];

  const parsedDuration =
    durationParam === 'h3'
      ? '3h'
      : durationParam === 'h6'
      ? '6h'
      : durationParam === 'h12'
      ? '12h'
      : durationParam === 'h24'
      ? '24h'
      : durationParam;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    car: carParam,
    duration: parsedDuration,
    date: dateParam || todayStr,
    time: '10:00',
    notes: '',
    acceptedTerms: false,
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const nextStep = () => {
    // Validate current step before proceeding
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.car) errs.car = 'Please select a vehicle';
      if (!formData.duration) errs.duration = 'Please select a duration';
      if (!formData.date) errs.date = 'Please select a pickup date';
    } else if (step === 2) {
      if (!formData.firstName.trim()) errs.firstName = 'First name is required';
      if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStep((s) => Math.min(3, s + 1) as 1 | 2 | 3);
  };

  const prevStep = () => {
    setStep((s) => Math.max(1, s - 1) as 1 | 2 | 3);
  };

  const selectedCar = cars.find((c) => c.slug === formData.car);
  const selectedCarImage = selectedCar ? getCarImages(selectedCar.slug).hero : null;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

    const extra: Record<string, string> = {};
    if (name === 'car') {
      const chosen = cars.find((c) => c.slug === value);
      if (chosen?.only24h) {
        extra.duration = '24h';
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...extra,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.car) errs.car = 'Please select a vehicle';
    if (!formData.duration) errs.duration = 'Please select a duration';
    if (!formData.date) errs.date = 'Please select a pickup date';
    if (!formData.acceptedTerms) errs.acceptedTerms = 'You must accept the Terms and Conditions';

    if (formData.date) {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.date = 'Date cannot be in the past';
      }
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSuccess(true);
  };

  const inputClass =
    'w-full rounded-lg px-4 py-3 text-sm bg-card border border-line text-ink focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-all placeholder:text-ink/30';

  if (success) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center py-20 px-6">
        <Helmet>
          <title>Reservation Request Received | Classic Car Rent</title>
        </Helmet>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full p-8 md:p-12 rounded-2xl bg-card border border-line text-center shadow-2xl"
        >
          <div className="w-20 h-20 rounded-full bg-card-alt border border-line flex items-center justify-center mx-auto mb-6 text-bronze-deep">
            <CheckCircle2 size={42} />
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
            Thank you!
          </h1>

          <p className="text-lg text-ink/80 mb-6 leading-relaxed">
            We have received your request and will contact you shortly.
          </p>

          {selectedCar && (
            <div className="p-4 rounded-xl bg-card-alt border border-line text-left mb-8 flex items-center gap-4">
              {selectedCarImage && (
                <img
                  src={selectedCarImage}
                  alt={selectedCar.name}
                  className="w-24 h-auto object-contain drop-shadow-sm"
                />
              )}
              <div>
                <p className="text-xs text-bronze-deep font-bold uppercase">{selectedCar.brand}</p>
                <p className="font-display font-bold text-ink text-base">{selectedCar.name}</p>
                <p className="text-xs text-ink/50">
                  {formData.duration} rental on {formData.date} at {formData.time}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <Button to="/" variant="primary" className="w-full py-4 text-xs font-bold shadow-lg shadow-bronze/20">
              Return to Home
            </Button>
            <Button to="/fleet" variant="outline" className="w-full py-3.5 text-xs font-bold border-line text-ink/70 hover:bg-card-alt">
              Browse More Fleet
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Helmet>
        <title>Booking Request | Classic Car Rent Oftringen</title>
        <meta
          name="description"
          content="Send us the details below and we will check your reservation and contact you as soon as possible. Sports car rental in Oftringen."
        />
      </Helmet>

      {/* Header */}
      <PageHero
        eyebrow="Direct Reservation"
        icon={Calendar}
        title={
          <>
            Booking <span className="text-bronze">Request</span>
          </>
        }
        description="Send us the details below and we will check your reservation and contact you as soon as possible."
      />

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-20 mt-[-60px] relative z-10">
        <Reveal>
          <div className="p-8 md:p-12 rounded-[16px] bg-card border border-line shadow-2xl relative overflow-hidden">
            {/* Stepper Header */}
            <div className="flex items-center justify-between mb-10 relative">
              <div className="absolute left-0 top-1/2 w-full h-[1px] bg-line -z-10 -translate-y-1/2" />
              {[
                { num: 1, label: 'Vehicle' },
                { num: 2, label: 'Details' },
                { num: 3, label: 'Confirm' }
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center gap-2 bg-card px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= s.num ? 'bg-bronze text-white shadow-md shadow-bronze/20' : 'bg-card-alt border border-line text-ink/40'}`}>
                    {step > s.num ? <CheckCircle2 size={16} /> : s.num}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s.num ? 'text-bronze-deep' : 'text-ink/40'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: VEHICLE & SCHEDULE */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-display font-bold text-ink">Choose your vehicle & schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Select Vehicle <span className="text-bronze">*</span>
                      </label>
                      <select name="car" value={formData.car} onChange={handleChange} className={inputClass}>
                        <option value="">— Select an exotic vehicle —</option>
                        {cars.map((car) => (
                          <option key={car.slug} value={car.slug}>{car.name} ({car.brand})</option>
                        ))}
                      </select>
                      {errors.car && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.car}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Rental Duration <span className="text-bronze">*</span>
                      </label>
                      <select name="duration" value={formData.duration} onChange={handleChange} disabled={selectedCar?.only24h} className={inputClass}>
                        <option value="">— Select duration —</option>
                        {!selectedCar?.only24h && <option value="3h">3 Hours</option>}
                        {!selectedCar?.only24h && <option value="6h">6 Hours</option>}
                        {!selectedCar?.only24h && <option value="12h">12 Hours</option>}
                        <option value="24h">24 Hours (Full Day)</option>
                      </select>
                      {errors.duration && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.duration}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Pickup Date <span className="text-bronze">*</span>
                      </label>
                      <input type="date" name="date" min={todayStr} value={formData.date} onChange={handleChange} className={inputClass} />
                      {errors.date && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Estimated Pickup Time
                      </label>
                      <input type="time" name="time" value={formData.time} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <button type="button" onClick={nextStep} className="btn bg-ink text-ivory px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-bronze transition-colors flex items-center gap-2">
                      Continue <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: PERSONAL DETAILS */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-display font-bold text-ink">Your personal details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        First Name <span className="text-bronze">*</span>
                      </label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="e.g. Alexander" className={inputClass} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Last Name <span className="text-bronze">*</span>
                      </label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="e.g. Weber" className={inputClass} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.lastName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Email Address <span className="text-bronze">*</span>
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className={inputClass} />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Phone Number <span className="text-bronze">*</span>
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+41 79 123 45 67" className={inputClass} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.phone}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                        Address / City (Optional)
                      </label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street, Postcode, City" className={inputClass} />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button type="button" onClick={prevStep} className="text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors">
                      &larr; Back
                    </button>
                    <button type="button" onClick={nextStep} className="btn bg-ink text-ivory px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-bronze transition-colors flex items-center gap-2">
                      Continue <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: REVIEW & CONFIRM */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h3 className="text-xl font-display font-bold text-ink">Review & Confirm</h3>
                  
                  {selectedCar && (
                    <div className="p-5 rounded-[12px] bg-card-alt border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {selectedCarImage && (
                          <img src={selectedCarImage} alt={selectedCar.name} className="w-24 h-auto object-contain drop-shadow-md" />
                        )}
                        <div>
                          <h4 className="font-display font-bold text-lg text-ink">{selectedCar.name}</h4>
                          <p className="text-xs text-ink/60 mt-1">
                            {formData.duration} rental on {formData.date} at {formData.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right sm:border-l sm:border-line sm:pl-6 w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end">
                        <span className="text-[10px] uppercase font-bold text-ink/40">Starts from</span>
                        <span className="font-display font-bold text-xl text-bronze-deep">
                          {formatPrice(selectedCar.prices.monThu.h3 ?? selectedCar.prices.monThu.h24)}
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2 pl-1">
                      Special Requests or Notes (Optional)
                    </label>
                    <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} placeholder="Tell us about special occasions..." className={inputClass} />
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer p-4 rounded-[12px] border border-line bg-card hover:bg-card-alt transition-colors">
                      <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded text-bronze bg-white border-line focus:ring-bronze" />
                      <span className="text-sm text-ink/80 leading-snug">
                        I have read and agree to the <Link to="/terms" target="_blank" className="text-bronze-deep font-semibold underline hover:text-bronze">Terms and Conditions</Link> of Classic Car Rent GmbH.
                      </span>
                    </label>
                    {errors.acceptedTerms && <p className="text-red-500 text-xs mt-2 pl-1">{errors.acceptedTerms}</p>}
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button type="button" onClick={prevStep} className="order-2 sm:order-1 text-xs font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors">
                      &larr; Back
                    </button>
                    <button type="submit" className="order-1 sm:order-2 w-full sm:w-auto py-4 px-10 rounded-lg font-bold uppercase tracking-widest text-xs btn-primary shadow-xl flex items-center justify-center gap-2">
                      <span>Submit Request</span>
                      <Send size={14} />
                    </button>
                  </div>
                  <p className="text-center sm:text-right text-[11px] text-ink/40 font-medium px-2">
                    No payment is taken at this stage. Our team will verify car availability.
                  </p>
                </motion.div>
              )}

            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
