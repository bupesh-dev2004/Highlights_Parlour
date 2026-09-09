import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

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

            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors text-white" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors text-white" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
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
