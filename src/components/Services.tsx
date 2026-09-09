import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, Calendar, Sparkles, ArrowRight, Gift, ChevronUp, ChevronDown } from 'lucide-react';
import { SERVICES, FAQS } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onBookService: (service: Service) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);

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
      description: 'Our signature glow facial combined with couture hair restoration cut. The perfect pre-gala preparation.',
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
      description: 'Melt deep physical exhaustion with full body aromatherapy manipulation followed by our signature milk-and-sugarcane pedicure.',
      badge: 'Best Value'
    },
  ];

  const handleComboBook = (combo: typeof comboDeals[0]) => {
    const virtualService: Service = {
      id: `combo-${combo.title.toLowerCase().replace(/\s+/g, '-')}`,
      name: `[COMBO] ${combo.title} (${combo.subtitle})`,
      category: 'Hair Spa',
      description: combo.description,
      duration: combo.duration,
      price: combo.price,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80'
    };
    onBookService(virtualService);
  };

  return (
    <div className="w-full min-h-screen bg-brand-cream pb-24 overflow-x-hidden">
      
      {/* 1. SERVICES HERO / INTRO */}
      <section className="w-full pt-10 pb-12 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blush/60 border border-brand-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase">
              Artisan Beauty Menu
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-light leading-tight tracking-tight">
            Services Tailored to Your Radiance
          </h1>

          <p className="text-stone-600 font-sans font-normal max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our complete collection of biological facials, couture hair coloring, bridal packages, and hand-crafted spa rituals designed exclusively for you.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-brand-gold/40" />
            <span className="w-2 h-2 rotate-45 border border-brand-gold/60 bg-brand-gold/20" />
            <span className="h-px w-12 bg-brand-gold/40" />
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH STACKING SERVICE CARDS */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-6">
        <div className="w-full max-w-[1500px] mx-auto space-y-12">
          {SERVICES.map((service, index) => {
            // Sticky top position with slight cascade offset so cards stack gracefully
            const topOffset = 96 + Math.min(index * 12, 60);

            return (
              <div
                key={service.id}
                className="sticky transition-all duration-300 w-full"
                style={{
                  top: `${topOffset}px`,
                  zIndex: 10 + index,
                }}
              >
                <div className="w-[96%] sm:w-[92%] lg:w-[88%] mx-auto bg-white rounded-3xl sm:rounded-4xl border border-brand-gold/35 shadow-[0_20px_50px_rgba(42,36,33,0.10)] hover:shadow-[0_25px_60px_rgba(197,160,89,0.20)] transition-all duration-500 overflow-hidden backdrop-blur-md">
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
                    
                    {/* LEFT COLUMN: Service Info & Details (7 cols on lg) */}
                    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white via-brand-cream/30 to-brand-blush/20">
                      <div className="space-y-4">
                        
                        {/* Category & Badge */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3.5 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase bg-brand-blush text-brand-gold-dark border border-brand-gold/30 shadow-2xs">
                            {service.category}
                          </span>
                          <span className="text-teal-700 text-xs font-medium flex items-center gap-1.5 bg-teal-50/80 px-2.5 py-0.5 rounded-full border border-teal-200/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                            Highlights Signature
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-charcoal font-normal leading-snug">
                          {service.name}
                        </h2>

                        {/* Description */}
                        <p className="text-stone-600 font-sans text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                          {service.description}
                        </p>

                        {/* Key Features Pill List */}
                        {service.features && service.features.length > 0 && (
                          <div className="pt-3">
                            <span className="text-[11px] uppercase tracking-wider text-brand-charcoal/60 font-semibold block mb-2.5">
                              Included Amenities & Treatment Highlights:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-stone-700 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-brand-blush-dark/40">
                                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                  <span className="font-sans font-medium">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info bar */}
                      <div className="pt-4 border-t border-brand-blush flex items-center justify-between text-xs text-stone-500 font-sans">
                        <span>Complimentary organic consultation included</span>
                        <span className="hidden sm:inline-block text-brand-gold-dark font-medium">Verified Salon Quality</span>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Large Prominent Image & Action Bar (5 cols on lg) */}
                    <div className="lg:col-span-5 relative flex flex-col justify-between p-6 sm:p-8 bg-brand-cream/50 border-t lg:border-t-0 lg:border-l border-brand-blush-dark/40">
                      
                      {/* Service Image */}
                      <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner group">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-black/10 pointer-events-none" />

                        {/* Floating Price Pill */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-gold/40 shadow-lg flex items-center space-x-1.5">
                          <span className="text-xs text-stone-500 font-sans">From</span>
                          <span className="text-lg font-serif font-bold text-brand-charcoal">${service.price}</span>
                        </div>

                        {/* Duration Pill */}
                        <div className="absolute bottom-4 left-4 bg-brand-charcoal/85 backdrop-blur-xs text-white text-xs px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 border border-white/10 shadow-md">
                          <Clock className="w-3.5 h-3.5 text-brand-gold" />
                          <span className="font-sans">{service.duration}</span>
                        </div>
                      </div>

                      {/* Booking Action Button */}
                      <div className="pt-6">
                        <button
                          id={`book-service-${service.id}`}
                          onClick={() => onBookService(service)}
                          className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-brand-gold via-[#D8B467] to-brand-gold-dark hover:from-brand-gold-dark hover:to-brand-gold text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_25px_rgba(197,160,89,0.4)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.55)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group transform active:scale-[0.99]"
                        >
                          <Calendar className="w-4 h-4 text-white transition-transform group-hover:rotate-12" />
                          <span>Book This Service</span>
                          <ArrowRight className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BESPOKE COMBOS & LUXURY PACKAGES */}
      <section className="w-full px-4 sm:px-6 lg:px-12 pt-24">
        <div className="w-[96%] sm:w-[92%] lg:w-[88%] mx-auto bg-brand-blush/40 rounded-4xl p-8 sm:p-12 lg:p-16 border border-brand-gold/30 shadow-sm space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Tailored Packages ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light">
              Bespoke Combos & Luxury Packages
            </h2>
            <p className="text-stone-600 font-sans font-light max-w-xl mx-auto text-xs sm:text-sm">
              Combine our highly rated services into structured, curated blocks of pure pampering and receive bundled savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {comboDeals.map((combo, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-brand-gold/30 hover:border-brand-gold shadow-sm relative flex flex-col justify-between space-y-6 group hover:shadow-md transition-all"
              >
                <span className="absolute -top-3 left-8 bg-brand-gold text-white text-[9px] uppercase tracking-widest px-3.5 py-1 rounded-full font-bold shadow-sm">
                  {combo.badge}
                </span>

                <div className="space-y-4 pt-1">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-brand-charcoal">{combo.title}</h3>
                      <p className="text-xs text-brand-gold-dark font-medium mt-0.5">{combo.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-serif font-bold text-brand-charcoal">${combo.price}</span>
                      <span className="block text-[11px] text-stone-400 line-through">Value: ${combo.value}</span>
                    </div>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {combo.description}
                  </p>

                  <div className="h-px bg-brand-blush" />

                  <div className="space-y-2.5">
                    <span className="block text-[10px] uppercase text-stone-400 tracking-wider font-semibold">Ritual includes:</span>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                      {combo.includes.map((incl, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                          <span>{incl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-1.5 text-stone-500 text-xs">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>Est: {combo.duration}</span>
                  </div>
                  <button
                    id={`book-combo-${index}`}
                    onClick={() => handleComboBook(combo)}
                    className="bg-brand-charcoal hover:bg-brand-gold text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all cursor-pointer flex items-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Book Combo</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq-section" className="w-full px-4 sm:px-6 lg:px-12 pt-20">
        <div className="w-[96%] sm:w-[92%] lg:w-[88%] max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Answered Queries ✦
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
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
                  className="bg-white rounded-2xl border border-brand-gold/30 hover:border-brand-gold shadow-2xs overflow-hidden transition-all duration-300"
                >
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left text-brand-charcoal hover:text-brand-gold-dark focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif font-normal text-base sm:text-lg pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-gold shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-brand-blush pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
