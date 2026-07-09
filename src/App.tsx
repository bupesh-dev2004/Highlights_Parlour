import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, X, Sparkles, CheckCircle, Info, Heart, ArrowRight } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Contact from './components/Contact';
import BookingFlow from './components/BookingFlow';

import { Service, Booking } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [preSelectedService, setPreSelectedService] = useState<Service | null>(null);
  const [localBookings, setLocalBookings] = useState<Booking[]>([]);
  const [showBookingsTray, setShowBookingsTray] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>('');

  // Local Time dynamic greeting
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good Morning');
    else if (hours < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    // Load persistent bookings
    const stored = localStorage.getItem('aura_bookings');
    if (stored) {
      setLocalBookings(JSON.parse(stored));
    }
  }, [currentPage]);

  // Handle service bookings from card selections
  const handleBookService = (service: Service) => {
    setPreSelectedService(service);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReserveClick = () => {
    setPreSelectedService(null);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadLocalBookings = () => {
    const stored = localStorage.getItem('aura_bookings');
    if (stored) {
      setLocalBookings(JSON.parse(stored));
    }
  };

  const handleBookingSuccess = () => {
    loadLocalBookings();
  };

  const deleteBooking = (id: string) => {
    const updated = localBookings.filter(b => b.id !== id);
    localStorage.setItem('aura_bookings', JSON.stringify(updated));
    setLocalBookings(updated);
  };

  return (
    <div id="app-root-container" className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-rose selection:text-brand-charcoal">
      
      {/* 1. Dynamic Soft Pastel Status Bar Greeting */}
      <div id="dynamic-status-bar" className="bg-brand-blush/60 border-b border-brand-rose/20 py-2.5 px-4 text-center text-[11px] font-sans font-medium uppercase tracking-widest flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse shrink-0" />
        <span>{greeting}, welcome to Aura Salon & Spa Beverly Hills</span>
        {localBookings.length > 0 && (
          <button
            id="open-bookings-tray-bar-btn"
            onClick={() => setShowBookingsTray(true)}
            className="ml-2.5 underline hover:text-brand-gold text-[10px] font-bold cursor-pointer"
          >
            ({localBookings.length}) Active Bookings
          </button>
        )}
      </div>

      {/* 2. Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onReserveClick={handleReserveClick} 
      />

      {/* 3. Render Router Content Area with Page Transitions */}
      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <Home 
                setCurrentPage={setCurrentPage} 
                onReserveClick={handleReserveClick} 
                onBookService={handleBookService} 
              />
            )}
            {currentPage === 'about' && <About />}
            {currentPage === 'services' && (
              <Services onBookService={handleBookService} />
            )}
            {currentPage === 'gallery' && <Gallery />}
            {currentPage === 'membership' && <Membership />}
            {currentPage === 'contact' && <Contact />}
            {currentPage === 'booking' && (
              <BookingFlow 
                preSelectedService={preSelectedService} 
                clearPreSelectedService={() => setPreSelectedService(null)} 
                onSuccess={handleBookingSuccess}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* 5. Persistent Slide-Over Drawer for "My Bookings History" */}
      <AnimatePresence>
        {showBookingsTray && (
          <motion.div
            id="tray-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBookingsTray(false)}
            className="fixed inset-0 z-100 bg-brand-charcoal/50 backdrop-blur-xs flex justify-end"
          >
            <motion.div
              id="tray-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-brand-cream border-l border-brand-blush h-full flex flex-col justify-between p-6 shadow-2xl relative"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-2xl font-light text-brand-charcoal flex items-center space-x-2">
                    <Calendar className="w-5.5 h-5.5 text-brand-gold shrink-0" />
                    <span>Your Bookings</span>
                  </h3>
                  <button
                    id="close-bookings-tray-btn"
                    onClick={() => setShowBookingsTray(false)}
                    className="w-8 h-8 rounded-full hover:bg-brand-blush flex items-center justify-center text-stone-400 hover:text-brand-charcoal transition-colors cursor-pointer"
                    aria-label="Close panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="h-px bg-brand-blush/60" />
              </div>

              {/* Booking Logs */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
                {localBookings.length > 0 ? (
                  localBookings.map((b) => (
                    <div 
                      key={b.id} 
                      className="bg-white border border-brand-blush/80 rounded-2xl p-4 space-y-3.5 relative shadow-2xs hover:shadow-xs transition-all"
                    >
                      <button
                        id={`cancel-booking-tray-btn-${b.id}`}
                        onClick={() => {
                          if (confirm('Are you sure you want to cancel this booking?')) {
                            deleteBooking(b.id);
                          }
                        }}
                        className="absolute top-4 right-4 text-xs font-semibold text-stone-300 hover:text-rose-500 cursor-pointer"
                      >
                        Cancel
                      </button>

                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold bg-brand-blush/40 px-2 py-0.5 rounded-md">
                          Code: {b.id}
                        </span>
                        <div className="flex items-center space-x-1.5 text-xs text-stone-500 font-mono mt-1">
                          <span>{b.date}</span>
                          <span>•</span>
                          <span>{b.time}</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Reserved Stylist:</span>
                        <span className="block text-xs font-bold text-stone-700">{b.stylist.name}</span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Services Selected:</span>
                        <ul className="space-y-1 pl-1 border-l border-brand-rose/25">
                          {b.services.map((s) => (
                            <li key={s.id} className="text-xs text-stone-600 flex justify-between">
                              <span>{s.name}</span>
                              <span className="font-semibold">${s.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-stone-50 flex justify-between items-center text-xs">
                        <span className="font-medium text-stone-500">Subtotal:</span>
                        <span className="font-serif font-bold text-brand-gold-dark text-sm">${b.totalPrice}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 space-y-4">
                    <Info className="w-12 h-12 text-brand-rose/40 mx-auto" />
                    <div>
                      <h4 className="font-serif text-lg font-medium text-brand-charcoal">No Active Bookings</h4>
                      <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
                        You have no upcoming appointments in this browser session. Book a service to secure your spot!
                      </p>
                    </div>
                    <button
                      id="tray-book-now-btn"
                      onClick={() => {
                        setShowBookingsTray(false);
                        setCurrentPage('booking');
                      }}
                      className="bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-widest transition-all cursor-pointer"
                    >
                      Reserve Now
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom footer bar */}
              <div className="border-t border-brand-blush/60 pt-4 space-y-3">
                <div className="flex items-start space-x-2.5 text-xs text-stone-400">
                  <Heart className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                  <p>Check-in opens 10 minutes prior to your time spot. Enjoy organic tea in our garden lobby upon arrival.</p>
                </div>
                <button
                  id="tray-close-footer-btn"
                  onClick={() => setShowBookingsTray(false)}
                  className="w-full bg-brand-charcoal hover:bg-brand-charcoal/90 text-white text-xs font-bold py-3 rounded-xl uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Close Panel
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
