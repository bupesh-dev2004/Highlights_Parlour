import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onBookClick: () => void;
}

export default function StickyMobileBar({ onBookClick }: StickyMobileBarProps) {
  return (
    <div 
      id="sticky-mobile-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-cream/95 backdrop-blur-md border-t border-brand-blush/80 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2"
    >
      <a
        id="mobile-call-btn"
        href="tel:+13105550199"
        className="flex-1 min-h-[44px] bg-stone-100 hover:bg-stone-200 text-brand-charcoal text-xs font-semibold py-2.5 px-2 rounded-full flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
        aria-label="Call parlour"
      >
        <Phone className="w-3.5 h-3.5 text-brand-gold-dark" />
        <span>Call</span>
      </a>

      <a
        id="mobile-whatsapp-btn"
        href="https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-2 rounded-full flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
        aria-label="WhatsApp parlour"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        id="mobile-reserve-bar-btn"
        onClick={onBookClick}
        className="flex-1 min-h-[44px] bg-brand-charcoal hover:bg-brand-gold-dark text-white text-xs font-semibold py-2.5 px-2 rounded-full flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
      >
        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
        <span>Book</span>
      </button>
    </div>
  );
}
