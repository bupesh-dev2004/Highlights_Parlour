import { Phone, Mail, MapPin } from 'lucide-react';

// Authentic Official Brand SVG Icons
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.11 13.67 14.89 13.59C14.66 13.51 14.5 13.47 14.33 13.72C14.16 13.97 13.69 14.52 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.64 11.71 14.3 10.48 13.2C9.52 12.35 8.87 11.3 8.68 10.98C8.5 10.66 8.66 10.49 8.79 10.36C8.9 10.25 9.04 10.07 9.17 9.92C9.3 9.77 9.34 9.66 9.42 9.5C9.5 9.33 9.46 9.19 9.4 9.06C9.34 8.94 8.84 7.72 8.64 7.21C8.43 6.72 8.23 6.79 8.07 6.78C7.92 6.78 7.76 6.77 7.59 6.77C7.42 6.77 7.15 6.84 6.92 7.08C6.69 7.33 6.04 7.94 6.04 9.18C6.04 10.42 6.95 11.61 7.07 11.78C7.2 11.95 8.85 14.5 11.38 15.59C11.98 15.85 12.45 16.01 12.82 16.12C13.42 16.31 13.97 16.29 14.41 16.22C14.89 16.15 15.9 15.61 16.11 15.02C16.32 14.43 16.32 13.93 16.26 13.82C16.2 13.72 16.03 13.66 15.78 13.53L16.57 14.39Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer id="app-footer" className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Highlights Makeoverartistry Logo" className="h-12 w-auto object-contain rounded-full border border-brand-gold/30" />
              <div>
                <span className="font-serif text-lg font-light tracking-[0.12em] text-white block leading-none">
                  HIGHLIGHTS
                </span>
                <span className="text-[9px] text-brand-rose font-sans font-semibold tracking-[0.25em] uppercase block mt-0.5">
                  ✦ Makeoverartistry ✦
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs font-light leading-relaxed max-w-sm">
              Beverly Hills’ premier beauty sanctuary. Delivering bespoke biological facials, couture hair coloring, HD bridal makeup, and restorative spa rituals inside a peaceful pastel oasis.
            </p>

            {/* Social Media Links with Original Brand Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-xs cursor-pointer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-xs cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-xs cursor-pointer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center transition-all duration-300 text-white hover:scale-110 shadow-xs cursor-pointer"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-gold uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs font-light text-stone-300">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-brand-rose cursor-pointer">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-brand-rose cursor-pointer">About Us</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-brand-rose cursor-pointer">Services Menu</button></li>
              <li><button onClick={() => handleNavClick('packages')} className="hover:text-brand-rose cursor-pointer">Special Packages</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="hover:text-brand-rose cursor-pointer">Gallery</button></li>
              <li><button onClick={() => handleNavClick('offers')} className="hover:text-brand-rose cursor-pointer">Offers & Deals</button></li>
              <li><button onClick={() => handleNavClick('reviews')} className="hover:text-brand-rose cursor-pointer">Customer Reviews</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-brand-rose cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-gold uppercase">Popular Services</h4>
            <ul className="space-y-2 text-xs font-light text-stone-300">
              <li>Balayage & Couture Glossing</li>
              <li>24K Gold Cellular Facial</li>
              <li>The Royal Maharani Bridal HD Makeup</li>
              <li>Luxury Gel Manicure & Hand Spa</li>
              <li>Olaplex Molecular Hair Spa</li>
              <li>Himalayan Hot Stone Pedicure</li>
            </ul>
          </div>

          {/* Column 4: Salon Contact & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs font-light text-stone-300">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-gold uppercase">Opening Hours & Address</h4>
            <p className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>742 Rodeo Luxury Blvd, Beverly Hills, CA 90210</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <span>+1 (310) 555-0199</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <span>concierge@highlightsmakeover.com</span>
            </p>
            <div className="pt-2 border-t border-white/10 text-[11px] text-stone-400">
              <p>Mon - Sat: 09:00 AM - 08:00 PM</p>
              <p>Sunday: 10:00 AM - 06:00 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & policies */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Highlights Makeoverartistry. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: All customer data is kept strictly confidential."); }} className="hover:text-white">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms & Conditions: Appointments can be rescheduled up to 24h prior."); }} className="hover:text-white">Terms & Conditions</a>
            <a href="#cancellation" onClick={(e) => { e.preventDefault(); alert("Cancellation Policy: Minimum 24h cancellation notice required."); }} className="hover:text-white">Cancellation Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
