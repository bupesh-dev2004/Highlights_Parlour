import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook, Sparkles, CheckCircle } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'gallery', label: 'Visual Gallery' },
    { id: 'membership', label: 'Membership Plans' },
    { id: 'contact', label: 'Get in Touch' },
  ];

  return (
    <footer id="app-footer" className="bg-brand-charcoal text-stone-300 border-t border-brand-charcoal/20">
      
      {/* Top Banner Style Border */}
      <div className="h-1.5 bg-gradient-to-r from-brand-blush via-brand-gold to-brand-rose"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Brand Philosophy */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-brand-rose/25 text-brand-rose">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Aura<span className="text-brand-rose font-sans font-light text-xs ml-1 uppercase tracking-widest">Spa</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              A premium, boutique beauty parlor dedicated to restoring your inner radiance and outward glow with custom, organic treatments and masterful design techniques.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:text-brand-rose hover:bg-stone-700 transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:text-brand-rose hover:bg-stone-700 transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-white tracking-wider border-b border-stone-800 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => {
                      setCurrentPage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-brand-rose transition-colors duration-200 flex items-center space-x-1 cursor-pointer"
                  >
                    <span className="text-xs text-brand-gold opacity-60">✦</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-white tracking-wider border-b border-stone-800 pb-2">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-stone-400">
                <MapPin className="w-5 h-5 text-brand-rose shrink-0 mt-0.5" />
                <span>104 Radiant Boulevard, Suite 500, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-400">
                <Phone className="w-4 h-4 text-brand-rose shrink-0" />
                <span>+1 (310) 555-0190</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-400">
                <Mail className="w-4 h-4 text-brand-rose shrink-0" />
                <span>concierge@aurasalonspa.com</span>
              </li>
              <li className="flex items-start space-x-3 text-stone-400">
                <Clock className="w-5 h-5 text-brand-rose shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-stone-300">Mon - Sat: 9:00 AM - 8:00 PM</span>
                  <span className="block text-xs text-stone-500">Sunday: 10:00 AM - 5:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-white tracking-wider border-b border-stone-800 pb-2">Newsletter</h3>
            <p className="text-sm text-stone-400">
              Subscribe to receive exclusive boutique invites, early-bird membership specials, and luxury care tips.
            </p>
            
            {subscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-900/50 rounded-xl p-4 flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Subscription Active!</h4>
                  <p className="text-xs text-stone-400 mt-1">Check your inbox soon for your 15% discount code.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-white placeholder-stone-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-10 flex items-center justify-center bg-brand-gold hover:bg-brand-gold-dark text-white rounded-lg transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-400 pl-1">{error}</p>}
              </form>
            )}
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-16 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 space-y-4 sm:space-y-0">
          <p>© 2026 Aura Salon & Spa. All rights reserved. Elegant visual design.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            <a href="#safety" className="hover:text-stone-300 transition-colors">Hygiene Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
