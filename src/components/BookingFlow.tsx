import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, STYLISTS } from '../data';
import { Service, Stylist, Booking } from '../types';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  CheckCircle, 
  DollarSign, 
  Printer, 
  Plus, 
  X,
  CalendarDays
} from 'lucide-react';

interface BookingFlowProps {
  preSelectedService: Service | null;
  clearPreSelectedService: () => void;
  onSuccess: () => void;
}

export default function BookingFlow({ preSelectedService, clearPreSelectedService, onSuccess }: BookingFlowProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Customer details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Generated Booking confirmation
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  // Pre-load service if clicked from another page
  useEffect(() => {
    if (preSelectedService) {
      // Avoid duplicate addition
      if (!selectedServices.some(s => s.id === preSelectedService.id)) {
        setSelectedServices([preSelectedService]);
      }
      setStep(1); // Ensure we start at step 1
    }
  }, [preSelectedService]);

  // Calculate Subtotal
  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0);

  // Calendar dates setup (Next 10 days)
  const getNextTenDays = () => {
    const dates = [];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 1; i <= 10; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dayName = weekdays[d.getDay()];
      const monthName = months[d.getMonth()];
      const dateNum = d.getDate();
      const dateString = d.toISOString().split('T')[0]; // YYYY-MM-DD
      
      dates.push({
        dateString,
        dayName,
        monthName,
        dateNum
      });
    }
    return dates;
  };

  const availableDates = getNextTenDays();

  // Handle service check/uncheck
  const toggleService = (service: Service) => {
    if (selectedServices.some(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && selectedServices.length === 0) return;
    if (step === 2 && !selectedStylist) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    if (step === 4) {
      if (!name || !email || !phone) return;
      handleConfirmBooking();
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    if (step === 1) return;
    setStep(prev => prev - 1);
  };

  const handleConfirmBooking = () => {
    if (!selectedStylist || !selectedTime) return;

    const newBooking: Booking = {
      id: `AUR-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      services: selectedServices,
      stylist: selectedStylist,
      date: selectedDate,
      time: selectedTime,
      customerDetails: {
        name,
        email,
        phone,
        notes
      },
      totalPrice: subtotal,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage for client history
    const existingBookingsRaw = localStorage.getItem('aura_bookings');
    const existingBookings = existingBookingsRaw ? JSON.parse(existingBookingsRaw) : [];
    existingBookings.push(newBooking);
    localStorage.setItem('aura_bookings', JSON.stringify(existingBookings));

    setConfirmedBooking(newBooking);
    setStep(5);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSelectedServices([]);
    setSelectedStylist(null);
    setSelectedDate('');
    setSelectedTime(null);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setConfirmedBooking(null);
    setStep(1);
    clearPreSelectedService();
    onSuccess();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 pb-24 space-y-12">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Live Reservation Engine ✦
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light">
          Book Your Aura Sanctuary Experience
        </h1>
        <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
      </div>

      {/* Step Progress Line */}
      <div id="booking-progress-line" className="max-w-3xl mx-auto flex justify-between items-center relative px-2 sm:px-6">
        {/* Horizontal bar */}
        <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-stone-200 -translate-y-1/2 -z-1" />
        <div 
          className="absolute top-1/2 left-6 h-0.5 bg-brand-gold -translate-y-1/2 -z-1 transition-all duration-300"
          style={{ width: `${((step - 1) / 4) * 100}%` }}
        />

        {[1, 2, 3, 4, 5].map((num) => {
          const isActive = step === num;
          const isDone = step > num;
          return (
            <div key={num} className="flex flex-col items-center space-y-2">
              <div 
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${
                  isDone 
                    ? 'bg-brand-gold border-brand-gold text-white' 
                    : isActive 
                      ? 'bg-brand-blush border-brand-gold text-brand-gold ring-4 ring-brand-blush/40 font-bold scale-110' 
                      : 'bg-white border-stone-200 text-stone-400'
                }`}
              >
                {isDone ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : num}
              </div>
              <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider hidden sm:block ${
                isActive ? 'text-brand-gold font-bold' : 'text-stone-400'
              }`}>
                {num === 1 && 'Services'}
                {num === 2 && 'Stylist'}
                {num === 3 && 'Date & Time'}
                {num === 4 && 'Contact'}
                {num === 5 && 'Confirmation'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Multi-step Container Card */}
      <div className="bg-white border border-brand-blush rounded-3xl p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Step Contents - Left Columns (Col Span 8) */}
        <div className="lg:col-span-8 space-y-6">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SELECT SERVICES */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">Step 1: Select Your Services</h3>
                  <p className="text-xs text-stone-500">Choose multiple services to craft your customized pampering pack.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                  {SERVICES.map((srv) => {
                    const isChecked = selectedServices.some(s => s.id === srv.id);
                    return (
                      <div
                        key={srv.id}
                        onClick={() => toggleService(srv)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start space-x-3.5 select-none ${
                          isChecked 
                            ? 'border-brand-gold bg-brand-blush/35' 
                            : 'border-stone-100 hover:border-brand-blush/80'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? 'bg-brand-gold border-brand-gold text-white' : 'border-stone-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-semibold text-xs sm:text-sm text-brand-charcoal leading-tight">{srv.name}</h4>
                          <span className="block text-[10px] text-brand-gold font-medium uppercase tracking-wider">
                            {srv.category} • {srv.duration}
                          </span>
                          <span className="block text-xs font-bold text-stone-700">${srv.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: CHOOSE STYLIST */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">Step 2: Choose Stylist/Therapist</h3>
                  <p className="text-xs text-stone-500">Our highly accredited experts specialize in bespoke treatments.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {STYLISTS.map((stylist) => {
                    const isSelected = selectedStylist?.id === stylist.id;
                    return (
                      <div
                        key={stylist.id}
                        onClick={() => setSelectedStylist(stylist)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center space-x-4 select-none ${
                          isSelected 
                            ? 'border-brand-gold bg-brand-blush/35' 
                            : 'border-stone-100 hover:border-brand-blush/80'
                        }`}
                      >
                        <img
                          src={stylist.photo}
                          alt={stylist.name}
                          className="w-16 h-16 rounded-full object-cover shrink-0 ring-2 ring-brand-blush"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 space-y-1">
                          <h4 className="font-semibold text-xs sm:text-sm text-brand-charcoal leading-tight">{stylist.name}</h4>
                          <span className="block text-[10px] text-brand-gold font-medium tracking-wider uppercase">{stylist.role}</span>
                          <span className="block text-[11px] text-stone-400 font-light leading-tight line-clamp-1">{stylist.specialization}</span>
                          <div className="flex items-center space-x-1 text-[11px] text-brand-gold">
                            <span>★</span>
                            <span className="font-semibold">{stylist.rating} rating</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: PICK DATE & TIME */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">Step 3: Select Date & Slot</h3>
                  <p className="text-xs text-stone-500">Pick an upcoming date and time slot with {selectedStylist?.name}.</p>
                </div>

                {/* Date Picker Ribbon */}
                <div className="space-y-3">
                  <span className="block text-xs font-semibold text-stone-600 pl-1 uppercase tracking-wider flex items-center space-x-1">
                    <CalendarDays className="w-4 h-4 text-brand-rose" />
                    <span>Available Dates (Next 10 Days)</span>
                  </span>
                  
                  <div className="flex overflow-x-auto space-x-3 pb-3 scrollbar-none">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateString;
                      return (
                        <button
                          key={item.dateString}
                          onClick={() => {
                            setSelectedDate(item.dateString);
                            setSelectedTime(null); // Reset time when date changes
                          }}
                          className={`flex flex-col items-center p-3 rounded-2xl min-w-[75px] border-2 transition-all cursor-pointer ${
                            isSelected 
                              ? 'border-brand-gold bg-brand-gold text-white font-bold scale-102' 
                              : 'border-stone-100 bg-stone-50 text-stone-700 hover:border-brand-blush'
                          }`}
                        >
                          <span className={`text-[10px] uppercase font-light ${isSelected ? 'text-white/80' : 'text-stone-400'}`}>
                            {item.dayName.substring(0, 3)}
                          </span>
                          <span className="text-lg font-serif font-semibold leading-tight my-0.5">
                            {item.dateNum}
                          </span>
                          <span className={`text-[9px] font-medium tracking-wider uppercase ${isSelected ? 'text-white' : 'text-stone-500'}`}>
                            {item.monthName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots Picker */}
                {selectedDate && selectedStylist && (
                  <div className="space-y-3">
                    <span className="block text-xs font-semibold text-stone-600 pl-1 uppercase tracking-wider flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-brand-rose" />
                      <span>Available Time Slots</span>
                    </span>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {selectedStylist.availableSlots.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`py-3 rounded-xl border text-xs font-medium tracking-wider transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-brand-gold border-brand-gold text-white font-semibold'
                                : 'bg-white border-stone-200 text-stone-600 hover:border-brand-gold/60'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 4: CUSTOMER DETAILS */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal">Step 4: Contact & Customization</h3>
                  <p className="text-xs text-stone-500 font-light">Provide your contact info to secure the reservation.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 pl-1 flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-brand-rose" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Audrey Hepburn"
                      className="w-full bg-brand-cream/40 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-600 pl-1 flex items-center space-x-1">
                        <Mail className="w-3.5 h-3.5 text-brand-rose" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="audrey@gala.com"
                        className="w-full bg-brand-cream/40 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-stone-600 pl-1 flex items-center space-x-1">
                        <Phone className="w-3.5 h-3.5 text-brand-rose" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(310) 555-0190"
                        className="w-full bg-brand-cream/40 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 pl-1">Special Requests or Medical Contraindications</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Allergic to lavender essence, prefer soft pressure during facial massage..."
                      className="w-full bg-brand-cream/40 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: CONFIRMATION SUMMARY */}
            {step === 5 && confirmedBooking && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                
                {/* Micro animation heading */}
                <div className="text-center space-y-2 py-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-brand-charcoal">Ritual Secured!</h3>
                  <p className="text-xs text-stone-500">Your reservation code is: <strong className="text-brand-gold">{confirmedBooking.id}</strong></p>
                </div>

                {/* Receipt Card */}
                <div id="booking-receipt" className="border border-brand-rose/60 rounded-3xl p-6 sm:p-8 space-y-6 bg-brand-cream/30 relative print:border-0 print:bg-white">
                  
                  <div className="flex justify-between items-start border-b border-stone-200/60 pb-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-brand-charcoal">Aura Beverly Hills</h4>
                      <span className="text-[10px] text-stone-400 uppercase tracking-widest block mt-0.5">Sanctuary Reservation</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-stone-500 font-mono">Date: {confirmedBooking.date}</span>
                      <span className="block text-xs text-stone-500 font-mono">Time: {confirmedBooking.time}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Customer Details:</span>
                      <span className="block font-semibold text-xs sm:text-sm text-brand-charcoal mt-1">{confirmedBooking.customerDetails.name}</span>
                      <span className="block text-xs text-stone-500">{confirmedBooking.customerDetails.phone} • {confirmedBooking.customerDetails.email}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Reserved Stylist:</span>
                      <div className="flex items-center space-x-2 mt-1.5">
                        <img
                          src={confirmedBooking.stylist.photo}
                          alt={confirmedBooking.stylist.name}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-brand-blush"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-xs font-semibold text-stone-700">{confirmedBooking.stylist.name} ({confirmedBooking.stylist.role})</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-stone-400 uppercase tracking-wider block mb-1.5">Services Block:</span>
                      <ul className="space-y-2">
                        {confirmedBooking.services.map((s) => (
                          <li key={s.id} className="flex justify-between text-xs text-stone-600">
                            <span>{s.name} ({s.duration})</span>
                            <span className="font-semibold">${s.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-stone-200/60 pt-4 flex justify-between items-center">
                    <span className="text-xs font-bold text-stone-700">Total Charged:</span>
                    <span className="font-serif text-xl font-bold text-brand-gold-dark">${confirmedBooking.totalPrice}</span>
                  </div>

                  {confirmedBooking.customerDetails.notes && (
                    <div className="bg-white rounded-xl p-3 text-[11px] text-stone-500 border border-stone-100">
                      <strong>Client Note:</strong> "{confirmedBooking.customerDetails.notes}"
                    </div>
                  )}

                  {/* Policies */}
                  <div className="text-[10px] text-stone-400 leading-relaxed border-t border-stone-200/40 pt-4 space-y-1">
                    <p className="font-bold text-stone-500">Cancellation & Rescheduling Guidelines:</p>
                    <p>Standard clients must reschedule at least 24 hours prior to prevent a late-reschedule assessment. Please keep this invoice reference code secure.</p>
                  </div>

                </div>

                {/* Receipt Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    id="print-receipt-btn"
                    onClick={handlePrint}
                    className="flex-1 border border-brand-gold text-brand-gold hover:bg-brand-blush/40 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Reservation</span>
                  </button>
                  <button
                    id="reset-booking-btn"
                    onClick={handleReset}
                    className="flex-1 bg-brand-gold hover:bg-brand-gold-dark text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Book Another Service
                  </button>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Wizard Sidebar / Cart - Right Column (Col Span 4) */}
        {step < 5 && (
          <div className="lg:col-span-4 bg-brand-blush/20 border border-brand-blush rounded-2xl p-6 h-fit space-y-6">
            <h4 className="font-serif text-lg font-semibold text-brand-charcoal border-b border-brand-blush/60 pb-2">Booking Summary</h4>
            
            {/* Services Added */}
            <div className="space-y-4">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-medium">Added Services</span>
              
              {selectedServices.length > 0 ? (
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {selectedServices.map((srv) => (
                    <div key={srv.id} className="flex justify-between items-start text-xs text-stone-700 bg-white p-2 rounded-lg border border-stone-100">
                      <div className="flex-1">
                        <span className="block font-semibold">{srv.name}</span>
                        <span className="block text-[10px] text-stone-400">{srv.duration} • ${srv.price}</span>
                      </div>
                      <button
                        id={`remove-service-summary-${srv.id}`}
                        onClick={() => toggleService(srv)}
                        className="text-stone-300 hover:text-rose-500 p-0.5 cursor-pointer"
                        aria-label="Remove"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-xs text-stone-400 italic">No services added yet.</div>
              )}
            </div>

            {/* Stylist Selected */}
            {selectedStylist && (
              <div className="space-y-2 border-t border-stone-100 pt-4">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-medium">Stylist / Therapist</span>
                <div className="flex items-center space-x-2 text-xs text-stone-700 bg-white p-2.5 rounded-lg border border-stone-100">
                  <img
                    src={selectedStylist.photo}
                    alt={selectedStylist.name}
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-brand-blush"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block font-semibold">{selectedStylist.name}</span>
                    <span className="block text-[9px] text-stone-400">{selectedStylist.role}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Date & Time Picker */}
            {(selectedDate || selectedTime) && (
              <div className="space-y-2 border-t border-stone-100 pt-4">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-medium">Schedule Spot</span>
                <div className="space-y-1 text-xs text-stone-700 bg-white p-2.5 rounded-lg border border-stone-100">
                  {selectedDate && <span className="block font-semibold">Date: {selectedDate}</span>}
                  {selectedTime && <span className="block font-semibold">Time Slot: {selectedTime}</span>}
                </div>
              </div>
            )}

            {/* Totals Box */}
            <div className="border-t border-brand-rose/30 pt-4 space-y-2">
              <div className="flex justify-between text-xs text-stone-500">
                <span>Subtotal ({selectedServices.length} srv):</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-stone-500">
                <span>Estimated Tax:</span>
                <span className="font-light italic">Included</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-stone-800 border-t border-stone-100 pt-2">
                <span>Est. Total:</span>
                <span className="text-brand-gold-dark text-lg font-serif font-bold">${subtotal}</span>
              </div>
            </div>

            {/* Nav controls inside block */}
            <div className="flex justify-between items-center pt-2 gap-3">
              {step > 1 && (
                <button
                  id="wizard-back-btn"
                  onClick={handlePrevStep}
                  className="flex items-center space-x-1.5 text-xs font-bold text-stone-500 hover:text-brand-gold uppercase tracking-wider py-2.5 px-4 bg-white border border-stone-200 rounded-xl cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              )}
              
              <button
                id="wizard-next-btn"
                onClick={handleNextStep}
                disabled={
                  (step === 1 && selectedServices.length === 0) ||
                  (step === 2 && !selectedStylist) ||
                  (step === 3 && (!selectedDate || !selectedTime)) ||
                  (step === 4 && (!name || !email || !phone))
                }
                className={`flex-1 flex items-center justify-center space-x-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                  ((step === 1 && selectedServices.length === 0) ||
                  (step === 2 && !selectedStylist) ||
                  (step === 3 && (!selectedDate || !selectedTime)) ||
                  (step === 4 && (!name || !email || !phone)))
                    ? 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
                    : 'bg-brand-gold hover:bg-brand-gold-dark text-white'
                }`}
              >
                <span>{step === 4 ? 'Confirm Reservation' : 'Continue'}</span>
                {step < 4 && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
