import { Tag, Calendar, Sparkles, Check, Gift } from 'lucide-react';
import { OFFERS } from '../data';

interface OffersProps {
  onReserveClick: () => void;
}

export default function Offers({ onReserveClick }: OffersProps) {
  return (
    <div className="space-y-16 py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Exclusive Savings ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Offers, Discounts & Deals
        </h1>
        <p className="text-stone-500 font-sans font-light text-sm max-w-xl mx-auto">
          Explore our latest salon promotions, first-visit gifts, festival combo discounts, and birthday privileges.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Offers Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {OFFERS.map((off) => (
          <div
            key={off.id}
            className={`bg-white border-2 rounded-3xl p-6 space-y-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
              off.bgColor || 'border-brand-blush-dark/50 hover:border-brand-gold'
            }`}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                  {off.discountBadge}
                </span>
                <span className="text-[10px] font-mono font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                  CODE: {off.code}
                </span>
              </div>

              <h2 className="font-serif text-xl font-semibold text-brand-charcoal pt-1">{off.title}</h2>
              <p className="text-stone-600 text-xs font-light leading-relaxed">{off.description}</p>
            </div>

            <div className="space-y-4 pt-3 border-t border-black/5">
              <div className="text-[10px] text-stone-400 space-y-1">
                <span className="font-semibold text-stone-500 uppercase tracking-wider block">Terms & Conditions:</span>
                <p>{off.terms}</p>
              </div>

              <button
                id={`claim-offer-${off.code}`}
                onClick={onReserveClick}
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-3 rounded-xl uppercase tracking-widest transition-all cursor-pointer shadow-2xs flex items-center justify-center space-x-1.5"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Claim Offer & Book</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Banner / Extra Offer Section */}
      <section className="bg-brand-cream border border-brand-blush rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xs">
        <div className="w-12 h-12 rounded-full bg-brand-blush text-brand-gold flex items-center justify-center mx-auto">
          <Gift className="w-6 h-6" />
        </div>
        <div className="space-y-2 max-w-xl mx-auto">
          <h3 className="font-serif text-2xl font-light text-brand-charcoal">Have a Customized Group or Bridal Requirement?</h3>
          <p className="text-stone-500 text-xs font-light">
            We provide custom group discounts for bridal parties, corporate pampering sessions, and private salon buyouts.
          </p>
        </div>
        <button
          id="custom-offer-inquiry-btn"
          onClick={onReserveClick}
          className="bg-brand-charcoal text-white hover:bg-brand-charcoal/90 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
        >
          Inquire For Custom Group Package
        </button>
      </section>
    </div>
  );
}
