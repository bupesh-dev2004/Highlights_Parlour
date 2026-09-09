import { CheckCircle2, Clock, Calendar } from 'lucide-react';
import { PACKAGES } from '../data';
import { Service } from '../types';

interface PackagesProps {
  onReserveClick: () => void;
  onBookService?: (service: Service) => void;
}

export default function Packages({ onReserveClick }: PackagesProps) {
  return (
    <div className="space-y-16 py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Curated Beauty Bundles ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Special Salon & Bridal Packages
        </h1>
        <p className="text-stone-500 font-sans font-light text-sm max-w-xl mx-auto">
          Combine your favorite pampering treatments into our exclusive luxury packages and save up to 26% on total service prices.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Package Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-3xl overflow-hidden border-2 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group ${
              pkg.popular ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-brand-blush-dark/50 hover:border-brand-gold'
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-4 left-4 z-10 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                ★ Most Popular Bundle
              </span>
            )}

            <div>
              <div className="h-56 relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-3 bg-brand-rose text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-2xs">
                  SAVE {pkg.discountPercentage}%
                </span>
                <span className="absolute bottom-3 left-3 bg-brand-charcoal/80 text-white text-[10px] px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{pkg.duration}</span>
                </span>
              </div>

              <div className="p-6 space-y-4">
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest block">
                  {pkg.category} Package
                </span>
                <h2 className="font-serif text-xl font-medium text-brand-charcoal">{pkg.title}</h2>
                
                <div className="flex items-baseline space-x-2">
                  <span className="font-serif text-3xl font-bold text-brand-gold-dark">${pkg.price}</span>
                  <span className="text-stone-400 text-sm line-through">${pkg.originalPrice}</span>
                  <span className="text-[10px] text-stone-400">({pkg.duration})</span>
                </div>

                <p className="text-stone-500 text-xs font-light leading-relaxed">{pkg.description}</p>

                <div className="space-y-2 pt-2 border-t border-brand-blush/60">
                  <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block">
                    What’s Included:
                  </span>
                  <ul className="space-y-1.5">
                    {pkg.includedServices.map((inc, i) => (
                      <li key={i} className="text-xs text-stone-600 flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                id={`book-package-btn-${pkg.id}`}
                onClick={onReserveClick}
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer shadow-2xs flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Package Now</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
