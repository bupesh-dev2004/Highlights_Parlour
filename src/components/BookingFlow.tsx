import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, MessageCircle, Phone, ArrowLeft, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { SERVICES, STYLISTS } from '../data';
import { Service, Stylist, Booking } from '../types';

interface BookingFlowProps {
  preSelectedService: Service | null;
  clearPreSelectedService: () => void;
  onSuccess: () => void;
}

export default function BookingFlow({ preSelectedService, clearPreSelectedService, onSuccess }: BookingFlowProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<Service[]>(
    preSelectedService ? [preSelectedService] : []
  );
  const [selectedStylist, setSelectedStylist] = useState<Stylist>(STYLISTS[0]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedServices([preSelectedService]);
    }
  }, [preSelectedService]);

  const toggleServiceSelection = (service: Service) => {
    if (selectedServices.find((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calculateTotal = () => {
    return selectedServices.reduce((sum, s) => sum + s.price, 0);
  };

  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!customerName.trim()) errs.name = 'Full name is required';
    if (!customerPhone.trim() || customerPhone.length < 7) errs.phone = 'Valid phone number is required';
    if (!customerEmail.trim() || !customerEmail.includes('@')) errs.email = 'Valid email address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    if (selectedServices.length === 0) {
      setErrors({ services: 'Please select at least one service to proceed' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 3) {
      setStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinalBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: Booking = {
        id: 'HL-' + Math.floor(100000 + Math.random() * 900000),
        services: selectedServices,
        stylist: selectedStylist,
        date: selectedDate,
        time: selectedTime,
        customerDetails: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
          notes: customerNotes
        },
        totalPrice: calculateTotal(),
        createdAt: new Date().toISOString()
      };

      // Store in localStorage
      const existing = localStorage.getItem('aura_bookings');
      const bookingsArr: Booking[] = existing ? JSON.parse(existing) : [];
      bookingsArr.unshift(newBooking);
      localStorage.setItem('aura_bookings', JSON.stringify(bookingsArr));

      setSubmittedBooking(newBooking);
      setIsSubmitting(false);
      onSuccess();
    }, 1200);
  };

  const whatsappMessage = submittedBooking
    ? encodeURIComponent(
        `Hello Highlights Makeoverartistry! I have booked an appointment.\n\nBooking ID: ${submittedBooking.id}\nName: ${submittedBooking.customerDetails.name}\nDate: ${submittedBooking.date} at ${submittedBooking.time}\nServices: ${submittedBooking.services.map(s => s.name).join(', ')}\nTotal: $${submittedBooking.totalPrice}`
      )
    : '';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Seamless Digital Scheduling ✦
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-brand-charcoal font-light">
          Reserve Your Beauty Sanctuary
        </h1>
        <p className="text-stone-500 font-sans font-light text-xs sm:text-sm max-w-md mx-auto">
          Complete the quick steps below to confirm your appointment time with our master artisans.
        </p>
      </div>

      {/* Animated Step Progress Bar */}
      {!submittedBooking && (
        <div className="bg-white border border-brand-blush rounded-2xl p-4 shadow-2xs">
          <div className="flex justify-between items-center text-xs font-semibold text-stone-500 pb-2">
            <span className={step >= 1 ? 'text-brand-gold font-bold' : ''}>1. Contact Info</span>
            <span className={step >= 2 ? 'text-brand-gold font-bold' : ''}>2. Services</span>
            <span className={step >= 3 ? 'text-brand-gold font-bold' : ''}>3. Date & Stylist</span>
            <span className={step >= 4 ? 'text-brand-gold font-bold' : ''}>4. Review</span>
          </div>
          <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-gold transition-all duration-500 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Submitted Booking Success Screen */}
      {submittedBooking ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-brand-blush rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <span className="bg-brand-blush text-brand-gold-dark font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest">
              Booking Confirmation #{submittedBooking.id}
            </span>
            <h2 className="font-serif text-3xl font-light text-brand-charcoal pt-2">
              Appointment Successfully Reserved!
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-brand-charcoal">{submittedBooking.customerDetails.name}</span>. We look forward to welcoming you on <span className="font-semibold">{submittedBooking.date}</span> at <span className="font-semibold">{submittedBooking.time}</span>.
            </p>
          </div>

          {/* Reserved Summary */}
          <div className="bg-brand-cream border border-brand-blush p-6 rounded-2xl text-left max-w-lg mx-auto space-y-3">

            <div className="space-y-1">
              <span className="text-xs text-stone-400 uppercase tracking-wider block">Selected Services:</span>
              {submittedBooking.services.map((s) => (
                <div key={s.id} className="flex justify-between text-xs text-stone-700">
                  <span>{s.name}</span>
                  <span className="font-semibold">${s.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-serif font-bold text-brand-gold-dark pt-2 border-t border-brand-blush/60">
              <span>Total Estimated Price:</span>
              <span>${submittedBooking.totalPrice}</span>
            </div>
          </div>

          {/* WhatsApp & Return Actions */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              id="whatsapp-confirm-link"
              href={`https://wa.me/13105550199?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm via WhatsApp</span>
            </a>
            <button
              id="book-another-btn"
              onClick={() => {
                setSubmittedBooking(null);
                setStep(1);
                clearPreSelectedService();
                setSelectedServices([]);
              }}
              className="bg-brand-charcoal text-white hover:bg-brand-charcoal/90 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>
        </motion.div>
      ) : (
        /* Multi-step Form Wizard */
        <div className="bg-white border border-brand-blush rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* STEP 1: Customer Contact Info */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-light text-brand-charcoal">1. Your Personal Information</h2>
                <p className="text-stone-500 text-xs font-light">Please enter your details so we can confirm your reservation.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-brand-charcoal mb-1">Full Name *</label>
                  <input
                    id="booking-name-input"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Charlotte Vance"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                  />
                  {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-brand-charcoal mb-1">Phone Number *</label>
                    <input
                      id="booking-phone-input"
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+1 (310) 555-0199"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                    {errors.phone && <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-charcoal mb-1">Email Address *</label>
                    <input
                      id="booking-email-input"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="charlotte@example.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                    {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Service Selection */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-light text-brand-charcoal">2. Select Your Services</h2>
                <p className="text-stone-500 text-xs font-light">Choose one or more treatments for your session.</p>
              </div>

              {errors.services && (
                <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl flex items-center space-x-2 text-rose-600 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.services}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[380px] overflow-y-auto pr-1">
                {SERVICES.map((serv) => {
                  const isSelected = selectedServices.some((s) => s.id === serv.id);
                  return (
                    <div
                      key={serv.id}
                      onClick={() => toggleServiceSelection(serv)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                        isSelected
                          ? 'border-brand-gold bg-brand-blush/40 shadow-2xs'
                          : 'border-stone-200 bg-white hover:border-brand-gold/50'
                      }`}
                    >
                      <img src={serv.image} alt={serv.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-serif text-sm font-semibold text-brand-charcoal">{serv.name}</h4>
                          <span className="text-xs font-bold text-brand-gold-dark">${serv.price}</span>
                        </div>
                        <p className="text-[11px] text-stone-500 font-light line-clamp-1">{serv.description}</p>
                        <span className="text-[10px] text-stone-400 font-mono">{serv.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl flex justify-between items-center text-sm font-serif">
                <span>Total Selected ({selectedServices.length}):</span>
                <span className="font-bold text-brand-gold-dark text-base">${calculateTotal()}</span>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Date & Time Selection */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-light text-brand-charcoal">3. Date & Time Selection</h2>
                <p className="text-stone-500 text-xs font-light">Pick your preferred appointment date and time slot.</p>
              </div>

              <div className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-brand-charcoal mb-1">Preferred Date *</label>
                    <input
                      id="booking-date-input"
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-charcoal mb-1">Preferred Time Slot *</label>
                    <select
                      id="booking-time-select"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                    >
                      {selectedStylist.availableSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-charcoal mb-1">Additional Notes / Requests (Optional)</label>
                  <textarea
                    id="booking-notes-input"
                    rows={2}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="e.g. Hair allergy details, wedding theme reference, etc."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Review & Final Confirmation */}
          {step === 4 && (
            <form onSubmit={handleFinalBookingSubmit} className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-light text-brand-charcoal">4. Review & Confirm Booking</h2>
                <p className="text-stone-500 text-xs font-light">Verify your reservation details before confirming.</p>
              </div>

              <div className="bg-brand-cream border border-brand-blush p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center text-xs border-b border-brand-blush/60 pb-3">
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Guest Name:</span>
                    <span className="font-bold text-brand-charcoal text-sm">{customerName}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Contact:</span>
                    <span className="text-stone-600 font-mono">{customerPhone}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs border-b border-brand-blush/60 pb-3">
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Date & Time:</span>
                    <span className="font-semibold text-stone-700">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Stylist:</span>
                    <span className="font-semibold text-brand-gold-dark">{selectedStylist.name}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-stone-400 uppercase tracking-wider block">Services Summary:</span>
                  {selectedServices.map((s) => (
                    <div key={s.id} className="flex justify-between text-xs text-stone-700">
                      <span>{s.name}</span>
                      <span className="font-semibold">${s.price}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-brand-blush/60 flex justify-between items-center text-base font-serif font-bold text-brand-gold-dark">
                  <span>Total Amount Due at Salon:</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <button
                id="submit-booking-final-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <span>Confirm & Complete Booking</span>
                )}
              </button>
            </form>
          )}

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-stone-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-stone-500 hover:text-brand-charcoal text-xs font-semibold uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 4 && (
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-brand-gold hover:bg-brand-gold-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-1 cursor-pointer shadow-2xs"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
