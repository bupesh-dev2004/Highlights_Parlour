import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onReserveClick: () => void;
  localBookingsCount?: number;
  onBookingsClick?: () => void;
}

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  onReserveClick,
  localBookingsCount = 0,
  onBookingsClick
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean navigation links for header
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'offers', label: 'Offers' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <header id="app-header" className="fixed top-0 inset-x-0 z-50 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-blush/80 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 1. Brand / Logo Section */}
          <button
            id="logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 shrink-0 group cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-full py-1 pr-2"
            aria-label="Highlights Makeoverartistry Home"
          >
            <img 
              src="/logo.jpg" 
              alt="Highlights Logo" 
              className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover shrink-0 border border-brand-gold/40 shadow-2xs group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="text-left hidden sm:flex flex-col justify-center">
              <span className="font-serif text-base sm:text-lg font-light tracking-[0.14em] text-brand-charcoal leading-none">
                HIGHLIGHTS
              </span>
              <span className="text-[8px] sm:text-[9px] text-brand-gold font-sans font-semibold tracking-[0.25em] uppercase block mt-1 leading-none">
                ✦ Makeoverartistry ✦
              </span>
            </div>
          </button>

          {/* 2. Desktop Navigation Links Section */}
          <nav 
            id="desktop-nav" 
            className="hidden xl:flex items-center gap-5 xl:gap-7"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-md px-1 ${
                    isActive 
                      ? 'text-brand-gold font-bold' 
                      : 'text-brand-charcoal hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Action CTAs Section */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
            {localBookingsCount > 0 && (
              <button
                id="header-bookings-btn"
                onClick={onBookingsClick}
                className="relative flex items-center justify-center w-10 h-10 rounded-full border border-brand-rose/40 hover:border-brand-gold text-brand-gold hover:bg-brand-blush/30 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                title="View your active bookings"
                aria-label="Active bookings"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span className="absolute -top-1 -right-1 bg-brand-rose text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  {localBookingsCount}
                </span>
              </button>
            )}

            <button
              id="reserve-now-nav-btn"
              onClick={onReserveClick}
              className="flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold-dark text-white px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shrink-0 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Book Appointment</span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-brand-charcoal hover:text-brand-gold p-2 focus:outline-none cursor-pointer rounded-xl hover:bg-brand-blush/40 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="xl:hidden bg-brand-cream border-t border-brand-blush/80 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 max-w-7xl mx-auto">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    id={`mobile-nav-link-${item.id}`}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                      isActive
                        ? 'bg-brand-blush text-brand-gold font-bold shadow-2xs'
                        : 'text-brand-charcoal hover:bg-brand-blush/40 hover:text-brand-gold'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
