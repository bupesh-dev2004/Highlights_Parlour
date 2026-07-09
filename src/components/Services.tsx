import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, CheckCircle2, ChevronDown, ChevronUp, Gift } from 'lucide-react';
import { SERVICES, FAQS } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onBookService: (service: Service) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'Hair' | 'Skin' | 'Nails' | 'Bridal' | 'Spa' | 'Makeup'>('Hair');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories: ('Hair' | 'Skin' | 'Nails' | 'Bridal' | 'Spa' | 'Makeup')[] = [
    'Hair',
    'Skin',
    'Nails',
    'Bridal',
    'Spa',
    'Makeup'
  ];

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  const comboDeals = [
    {
      title: 'Aura Radiance Duet',
      subtitle: 'The Ultimate Glow & Hair Lift',
      price: 220,
      value: 265,
      duration: '135 mins',
      includes: [
        'Radiance Glow Gold Facial (75m)',
        'Signature Cut & Blow Dry (60m)',
        'Complimentary Organic Honey Mask upgrade',
      ],
      description: 'Our signature glow facial combined with Vivienne Vance’s iconic hair restoration cut. The perfect pre-gala preparation.',
      badge: 'Most Popular'
    },
    {
      title: 'Therapeutic Zen Harmony',
      subtitle: 'Full Body Deep Release',
      price: 240,
      value: 285,
      duration: '150 mins',
      includes: [
        'Deep Tissue Zen Massage (75m)',
        'Aura Signature Pedicure (60m)',
        'Complimentary Warm Lavender Scrub & Oil Pack',
      ],
      description: 'Melt deep physical exhaustion with full body aromatherapy manipulation followed by our famous milk-and-sugarcane pedicure.',
      badge: 'Best Value'
    },
  ];

  const handleComboBook = (combo: typeof comboDeals[0]) => {
    // We can translate a combo book into a special service payload to initialize the booking flow
    const virtualService: Service = {
      id: `combo-${combo.title.toLowerCase().replace(/\s+/g, '-')}`,
      name: `[COMBO] ${combo.title} (${combo.subtitle})`,
      category: 'Spa',
      description: combo.description,
      duration: combo.duration,
      price: combo.price,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80'
    };
    onBookService(virtualService);
  };

  return (
    <div className="space-y-24 py-12 pb-24">
      
      {/* 1. Page Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Premium Ritual Menu ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Exquisite Care, Exceptional Results
        </h1>
        <p className="text-stone-500 font-sans font-light max-w-2xl mx-auto text-sm sm:text-base">
          Every selection on our menu is personalized to your distinct genetic profile and styled with organic botanical concentrates.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* 2. Category Tabs & Service Grid */}
      <section id="menu-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Horizontal Category Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-brand-blush/60 pb-1 max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                id={`cat-tab-${cat.toLowerCase()}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-brand-gold text-white shadow-xs'
                    : 'text-stone-500 hover:text-brand-gold hover:bg-brand-blush/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid with Tab Switch Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            id="services-grid-container"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-5 border border-brand-blush/60 shadow-xs flex flex-col sm:flex-row gap-6 group hover:shadow-md transition-all duration-300"
                >
                  
                  {/* Service Image */}
                  <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden shrink-0 relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider text-brand-gold">
                      ${service.price}
                    </span>
                  </div>

                  {/* Service Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{service.name}</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-stone-400 text-xs">
                        <Clock className="w-3.5 h-3.5 text-brand-rose" />
                        <span>Duration: {service.duration}</span>
                      </div>
                      <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <button
                      id={`book-service-card-${service.id}`}
                      onClick={() => onBookService(service)}
                      className="inline-flex items-center justify-center space-x-2 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white text-[11px] font-bold uppercase tracking-widest py-3 px-5 rounded-xl transition-all cursor-pointer"
                    >
                      <span>Book Service</span>
                    </button>
                  </div>

                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 text-stone-400">
                No active services in this category at this moment.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </section>

      {/* 3. Combo Packages deals section */}
      <section id="combo-packages" className="bg-brand-blush/30 py-20 border-y border-brand-blush/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Tailored Packages
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
              Bespoke Combos & Luxury Packages
            </h2>
            <p className="text-stone-500 font-sans font-light max-w-xl mx-auto text-xs sm:text-sm">
              Combine our highly rated services into structured, curated blocks of pure pampering and receive up to 18% bundled discount.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {comboDeals.map((combo, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-brand-rose/60 shadow-xs relative flex flex-col justify-between space-y-6 group hover:shadow-md transition-shadow"
              >
                {/* Ribbon Tag */}
                <span className="absolute -top-3 left-6 bg-brand-gold text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                  {combo.badge}
                </span>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-charcoal">{combo.title}</h3>
                      <p className="text-xs text-brand-gold font-medium mt-0.5">{combo.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold text-brand-charcoal">${combo.price}</span>
                      <span className="block text-[10px] text-stone-400 line-through">Value: ${combo.value}</span>
                    </div>
                  </div>

                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {combo.description}
                  </p>

                  <div className="h-px bg-stone-100" />

                  <div className="space-y-2.5">
                    <span className="block text-[10px] uppercase text-stone-400 tracking-wider">Ritual includes:</span>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                      {combo.includes.map((incl, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                          <span>{incl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-1.5 text-stone-400 text-xs">
                    <Clock className="w-4 h-4 text-brand-rose" />
                    <span>Est: {combo.duration}</span>
                  </div>
                  <button
                    id={`book-combo-${index}`}
                    onClick={() => handleComboBook(combo)}
                    className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center space-x-2"
                  >
                    <Gift className="w-4 h-4 text-brand-rose" />
                    <span>Book Combo</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQ Accordion Section */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
            ✦ Answered Queries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-light">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-brand-blush/60 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-brand-charcoal hover:text-brand-gold focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-medium text-base sm:text-lg pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-gold shrink-0" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-stone-500 font-light leading-relaxed border-t border-stone-50/50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
