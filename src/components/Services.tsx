import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Scissors,
  Waves,
  Flame,
  Flower2,
  HandMetal,
  Phone,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Star,
  Info,
  ChevronDown,
  Sparkle,
  Leaf
} from 'lucide-react';
import {
  SALON_PRICE_CATEGORIES,
  SALON_PHONE_NUMBER,
  SALON_PHONE_TEL,
  SALON_PRICE_DISCLAIMER,
  FAQS
} from '../data';
import { SalonServiceCategory, SalonServiceItem, Service } from '../types';

interface ServicesProps {
  onBookService: (service: Service) => void;
  onReserveClick?: () => void;
  setCurrentPage?: (page: string) => void;
}

// Icon mapping for categories
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Flower2,
  HandMetal,
  Scissors,
  Waves,
  Flame,
};

export default function Services({ onBookService, onReserveClick, setCurrentPage }: ServicesProps) {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  // Convert SalonServiceItem to full Service format for booking flow when user books
  const handleSelectService = (item: SalonServiceItem, category: SalonServiceCategory) => {
    const fullService: Service = {
      id: `salon-${item.id}`,
      name: item.name,
      category: category.name as Service['category'],
      description: item.description || `${item.name} treatment under ${category.name}.`,
      duration: item.duration || '30 mins',
      price: item.price,
      image: category.image,
      features: [
        `Category: ${category.name}`,
        'Sterilized equipment & organic skin-friendly formulations',
        'Certified beauty artisan care'
      ]
    };

    onBookService(fullService);
  };

  // Filtered categories
  const displayedCategories = activeCategoryTab === 'all'
    ? SALON_PRICE_CATEGORIES
    : SALON_PRICE_CATEGORIES.filter(c => c.id === activeCategoryTab);

  const scrollToMenu = () => {
    const el = document.getElementById('warm-editorial-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#2A2421] selection:bg-[#E29578] selection:text-white overflow-x-hidden">

      {/* ========================================================================= */}
      {/* 1. WELCOMING HERO AREA (WARM IVORY / CORAL / ASYMMETRICAL ORGANIC IMAGE)   */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-8 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#FAF4ED] via-[#FDFBF7] to-[#FDFBF7] overflow-hidden border-b border-[#E8DACB]/60">

        {/* Subtle warm watercolor blurs */}
        <div className="absolute -top-24 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#F5DBCB]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#E5EBE3]/45 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading, Welcoming Narrative & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            {/* Delicate Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FAF0ED] border border-[#E8BAB0]/70 text-[#C96850]">
              <Sparkle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C96850] shrink-0" />
              <span className="font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em]">
                Highlights Makeoverartistry • Salon Menu
              </span>
            </div>

            {/* Editorial Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2421] font-light leading-[1.18] sm:leading-[1.15] tracking-tight">
              A Gentle Sanctuary for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C96850]">
                Everyday Radiance
              </span>
            </h1>

            {/* Welcoming Introduction */}
            <p className="text-[#6B5E55] font-sans font-light text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to our bespoke salon service menu. From artisan threading and clarifying organic facials to precision shears, restorative hair spas, and delicate waxing—explore treatments crafted to nurture your glow with gentle touch and transparent rates.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <button
                id="hero-explore-menu-btn"
                onClick={scrollToMenu}
                className="w-full xs:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#C96850] hover:bg-[#B3563F] text-white font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(201,104,80,0.25)] hover:shadow-[0_8px_25px_rgba(201,104,80,0.35)] cursor-pointer flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-call-now-btn"
                href={SALON_PHONE_TEL}
                className="w-full xs:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#FAF4ED] text-[#2A2421] border border-[#D5C2B1] font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer flex items-center justify-center gap-2"
                aria-label={`Call salon directly at ${SALON_PHONE_NUMBER}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#6B8E76] shrink-0" />
                <span>Call {SALON_PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Delicate Botanical Pillars */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-[11px] sm:text-xs text-[#7A6D63] font-sans">
              <span className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#6B8E76] shrink-0" />
                <span>Sanitized Single-Use Linen</span>
              </span>
              <span className="text-[#D5C2B1]">•</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#C96850] shrink-0" />
                <span>Certified Makeover Artisans</span>
              </span>
              <span className="text-[#D5C2B1] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6B8E76] shrink-0" />
                <span>Transparent Rupee Tariffs</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Salon Image in an Asymmetrical/Organic Rounded Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center w-full px-2 sm:px-0"
          >
            {/* Background offset organic backdrop */}
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#F5DBCB] to-[#E5EBE3] rounded-[2rem] sm:rounded-[3rem] rotate-2 -z-10 opacity-70" />
            <div className="absolute -inset-1 border border-[#D5C2B1]/60 rounded-[1.9rem] sm:rounded-[2.8rem] -rotate-1 -z-10" />

            {/* Featured Salon Photo in responsive soft silhouette */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] sm:aspect-auto sm:h-[420px] rounded-[1.8rem] sm:rounded-[2.6rem] overflow-hidden shadow-[0_15px_35px_rgba(74,58,49,0.08)] border-2 border-white">
              <img
                src="/step-out-confident.png"
                alt="Highlights Makeoverartistry Salon Experience"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#E8DACB] shadow-sm flex items-center justify-between">
                <div>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-[#2A2421] block">Highlights Artistry</span>
                  <span className="text-[10px] sm:text-[11px] text-[#7A6D63] font-sans">Crafted with care in our tranquil studio</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF0ED] flex items-center justify-center text-[#C96850] shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SLIM DECORATIVE BANNER / SEPARATOR                                     */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#F3ECE3] border-y border-[#E5DACD] py-3 px-3 sm:px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-[10px] sm:text-xs text-[#6B5E55] font-sans tracking-wider sm:tracking-widest uppercase">
          <div className="flex items-center justify-center gap-3 sm:gap-8 flex-wrap text-center">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C96850]" />
              <span>Threading</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E76]" />
              <span>Facials</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C96850]" />
              <span>Pedicure &amp; Manicure</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E76]" />
              <span>Hair Cut</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C96850]" />
              <span>Hair Spa</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E76]" />
              <span>Waxing</span>
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. WARM EDITORIAL SERVICE MENU WITH DISTINCT CATEGORY TREATMENTS          */}
      {/* ========================================================================= */}
      <section
        id="warm-editorial-menu"
        className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 space-y-10 sm:space-y-16"
      >

        {/* Section Header & Category Filter Buttons */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-[#E8DACB]">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[#C96850] font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
                ✦ Tariff &amp; Menu ✦
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A2421] font-light">
                Complete Salon Services &amp; Price List
              </h2>
              <p className="text-[#6B5E55] font-sans text-xs sm:text-sm font-light max-w-xl mx-auto md:mx-0">
                Browse our complete rate card below. Every service is priced transparently in Indian Rupees (₹).
              </p>
            </div>

            {/* Category Quick Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-1 scrollbar-none w-full md:w-auto -mx-3.5 px-3.5 md:mx-0 md:px-0">
              <button
                id="filter-all-services"
                onClick={() => setActiveCategoryTab('all')}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${activeCategoryTab === 'all'
                    ? 'bg-[#2A2421] text-white shadow-xs'
                    : 'bg-[#F2ECE4] text-[#6B5E55] hover:bg-[#EBE2D8]'
                  }`}
              >
                All (6 Categories)
              </button>
              {SALON_PRICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-pill-${cat.id}`}
                  onClick={() => setActiveCategoryTab(cat.id)}
                  className={`px-3 sm:px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${activeCategoryTab === cat.id
                      ? 'bg-[#C96850] text-white shadow-xs'
                      : 'bg-[#F2ECE4] text-[#6B5E55] hover:bg-[#EBE2D8]'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Presentation - Varied Editorial Layouts (Fully responsive 1-col on mobile) */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {displayedCategories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.iconName] || Sparkles;

            // VARIATION 1: THREADING & WAXING (Clean Responsive Menu with Delicate Borders)
            if (cat.id === 'threading' || cat.id === 'waxing') {
              return (
                <div
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className="bg-white rounded-2xl sm:rounded-4xl p-4 sm:p-8 lg:p-10 border border-[#E8DACB] shadow-[0_8px_25px_rgba(100,80,70,0.04)] space-y-4 sm:space-y-6"
                >
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#F0E6DC] gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#FAF0ED] text-[#C96850] flex items-center justify-center border border-[#E8BAB0]/50 shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#6B8E76] font-semibold bg-[#EAF0EB] px-3 py-1 rounded-full border border-[#D0DFD3] self-start sm:self-auto">
                      {cat.services.length} Items Available
                    </span>
                  </div>

                  {/* 1-Col on mobile, 2-Col on md+ screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 sm:gap-y-3 pt-1">
                    {cat.services.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectService(item, cat)}
                        className="py-2.5 sm:py-3 px-3 -mx-1 sm:-mx-2 rounded-xl sm:rounded-2xl hover:bg-[#FAF6F2] transition-colors flex items-center justify-between gap-3 sm:gap-4 group cursor-pointer"
                        title="Click to schedule this treatment"
                      >
                        <div className="space-y-0.5 flex-1 min-w-0 pr-2">
                          <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2A2421] group-hover:text-[#C96850] transition-colors font-medium block leading-snug">
                            {item.name}
                          </span>
                          {item.description && (
                            <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light line-clamp-1">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Price formatted in Indian Rupees (₹) */}
                        <div className="text-right shrink-0">
                          <span className="font-serif text-base sm:text-lg font-bold text-[#2A2421] group-hover:text-[#C96850] transition-colors whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[10px] sm:text-[11px] text-[#8C7D73] font-sans flex flex-col xs:flex-row items-start xs:items-center justify-between border-t border-[#F0E6DC]/80 gap-1">
                    <span>Precision cotton thread &amp; gentle hygienic waxing care</span>
                    <span className="text-[#6B8E76] font-medium">Click any item to select for reservation</span>
                  </div>
                </div>
              );
            }

            // VARIATION 2: FACIALS (Responsive 1-Col on Mobile, 2-Col on sm, 3-Col on lg)
            if (cat.id === 'facials') {
              return (
                <div
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className="bg-gradient-to-br from-[#FCFBF8] to-[#F8F5EE] rounded-2xl sm:rounded-4xl p-4 sm:p-8 lg:p-10 border border-[#DFD3C4] shadow-[0_10px_30px_rgba(100,80,70,0.05)] space-y-4 sm:space-y-6"
                >
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#E8DEC0]/80 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#EAF0EB] text-[#4E755A] flex items-center justify-center border border-[#CFDFD2] shrink-0">
                        <Flower2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#C96850] font-semibold bg-[#FAF0ED] px-3.5 py-1 rounded-full border border-[#E8BAB0] self-start sm:self-auto">
                      11 Glow Formulations
                    </span>
                  </div>

                  {/* Responsive Facial Cards: 1 col on mobile, 2 on tablet, 3 on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                    {cat.services.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectService(item, cat)}
                        className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE0D4] hover:border-[#C96850]/60 hover:shadow-sm transition-all duration-300 flex flex-col justify-between space-y-2.5 sm:space-y-3 group cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-base sm:text-lg text-[#2A2421] group-hover:text-[#C96850] transition-colors font-medium leading-snug">
                              {item.name}
                            </h4>
                            <span className="font-serif text-base sm:text-lg font-bold text-[#C96850] shrink-0 whitespace-nowrap">
                              ₹{item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-[#6B5E55] font-sans font-light leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-2 border-t border-[#F5EFE8] flex items-center justify-between text-[11px] text-[#7A6D63]">
                          <span>Active glow therapy</span>
                          <span className="text-[#C96850] font-medium opacity-80 group-hover:opacity-100 flex items-center gap-0.5">
                            Select <span>→</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[10px] sm:text-[11px] text-[#8C7D73] font-sans flex flex-col xs:flex-row items-start xs:items-center justify-between border-t border-[#E8DEC0]/80 gap-1">
                    <span>Formulated with herbal botanicals, diamond dust &amp; O3+ concentrates</span>
                    <span className="text-[#4E755A] font-medium">Suitable for all skin tones</span>
                  </div>
                </div>
              );
            }

            // VARIATION 3: HAIR CUT & HAIR SPA (Editorial Split Cards with Clean Rows)
            if (cat.id === 'hair-cut' || cat.id === 'hair-spa') {
              return (
                <div
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className="bg-white rounded-2xl sm:rounded-4xl p-4 sm:p-8 lg:p-10 border border-[#E8DACB] shadow-[0_8px_25px_rgba(100,80,70,0.04)] space-y-4 sm:space-y-6"
                >
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#F0E6DC] gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#F6F0EA] text-[#6B5E55] flex items-center justify-center border border-[#E0D4C6] shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#7A6D63] font-semibold bg-[#F4EDE5] px-3 py-1 rounded-full border border-[#E5DACD] self-start sm:self-auto">
                      {cat.tagline}
                    </span>
                  </div>

                  {/* Clean List Items with generous whitespace */}
                  <div className="divide-y divide-[#F2E8DC]/80">
                    {cat.services.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectService(item, cat)}
                        className="py-3 sm:py-4 px-2 sm:px-3 -mx-1 sm:-mx-2 rounded-xl sm:rounded-2xl hover:bg-[#FAF6F2] transition-colors flex items-center justify-between gap-3 sm:gap-6 group cursor-pointer"
                      >
                        <div className="space-y-0.5 flex-1 min-w-0 pr-2">
                          <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2A2421] group-hover:text-[#C96850] transition-colors font-medium block leading-snug">
                            {item.name}
                          </span>
                          {item.description && (
                            <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                          <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#2A2421] group-hover:text-[#C96850] transition-colors whitespace-nowrap">
                            ₹{item.price}
                          </span>
                          <span className="text-xs text-[#C96850] font-medium hidden sm:inline">
                            Select
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[10px] sm:text-[11px] text-[#8C7D73] font-sans flex flex-col xs:flex-row items-start xs:items-center justify-between border-t border-[#F0E6DC]/80 gap-1">
                    <span>Includes customized hair wash consultation &amp; blow-dry finish</span>
                    <span className="text-[#6B8E76] font-medium">Professional L'Oréal &amp; Schwarzkopf products</span>
                  </div>
                </div>
              );
            }

            // VARIATION 4: PEDICURE & MANICURE (Soft Sage Accent Panel - 1 col mobile, 2 col md+)
            return (
              <div
                key={cat.id}
                id={`section-${cat.id}`}
                className="bg-[#F7F9F6] rounded-2xl sm:rounded-4xl p-4 sm:p-8 lg:p-10 border border-[#D5E0D7] shadow-[0_8px_25px_rgba(80,100,85,0.04)] space-y-4 sm:space-y-6"
              >
                {/* Category Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#DDE7DF] gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#E5EFE7] text-[#4E755A] flex items-center justify-center border border-[#CCDDCF] shrink-0">
                      <HandMetal className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#6B7E70] font-sans font-light mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#4E755A] font-semibold bg-[#E5EFE7] px-3 py-1 rounded-full border border-[#CCDDCF] self-start sm:self-auto">
                    Restorative Care
                  </span>
                </div>

                {/* 1-Col on mobile, 2-Col on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
                  {cat.services.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectService(item, cat)}
                      className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D8E4DA] hover:border-[#4E755A] transition-all flex flex-col justify-between space-y-3 sm:space-y-4 group cursor-pointer shadow-2xs"
                    >
                      <div className="space-y-1 sm:space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-serif text-base sm:text-lg lg:text-xl text-[#2A2421] group-hover:text-[#4E755A] transition-colors font-medium leading-snug">
                            {item.name}
                          </h4>
                          <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#4E755A] whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-[#6B5E55] font-sans font-light leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 sm:pt-3 border-t border-[#F0F5F1] flex items-center justify-between text-[11px] text-[#6B7E70]">
                        <span>Botanical salt soak &amp; massage</span>
                        <span className="text-[#4E755A] font-medium flex items-center gap-1">
                          Select for booking →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] sm:text-[11px] text-[#6B7E70] font-sans flex flex-col xs:flex-row items-start xs:items-center justify-between border-t border-[#DDE7DF] gap-1">
                  <span>Hygienic foot tubs, sterile clippers &amp; nourishing foot scrub</span>
                  <span className="font-medium text-[#4E755A]">Instant nail relief</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 4. PRICE DISCLAIMER NOTICE                                                */}
        {/* ========================================================================= */}
        <div
          id="warm-price-disclaimer"
          className="bg-[#FAF4ED] border border-[#E5DACD] rounded-2xl p-4 sm:p-5 max-w-3xl mx-auto flex items-center justify-center gap-3 text-center sm:text-left shadow-2xs"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-[#E0D2C2] flex items-center justify-center text-[#C96850] shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm font-sans text-[#5E5249]">
            <span className="font-semibold text-[#C96850] uppercase tracking-wider mr-1.5">Notice:</span>
            <span>"{SALON_PRICE_DISCLAIMER}"</span>
            <span className="block sm:inline sm:ml-2 text-[#7A6D63] text-xs">All prices listed in Indian Rupees (₹).</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. SOFT SAGE APPOINTMENT CALLOUT (NEAR BOTTOM OF PAGE)                    */}
        {/* ========================================================================= */}
        <section
          id="soft-sage-appointment-callout"
          className="relative bg-gradient-to-br from-[#EAF0EB] via-[#F2F7F3] to-[#E5EFE7] rounded-2xl sm:rounded-4xl border border-[#C5D7C9] p-6 sm:p-12 lg:p-14 shadow-[0_12px_35px_rgba(78,117,90,0.08)] overflow-hidden"
        >
          {/* Delicate botanical watermarks */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#DCE8DE]/60 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#D8E6DA]/50 rounded-full blur-2xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

          <div className="relative max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#BDD2C1] text-[#42664D] shadow-2xs">
              <Leaf className="w-3.5 h-3.5 text-[#4E755A] shrink-0" />
              <span className="font-sans font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
                Direct Parlour Desk
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#243528] font-normal leading-tight">
              Book Your Appointment
            </h2>

            <p className="text-[#4E5F52] font-sans font-light text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
              We look forward to welcoming you into our parlour. Connect directly via our telephone line or reserve through our digital schedule.
            </p>

            {/* Prominent Phone Number Display */}
            <div className="pt-1 sm:pt-2">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-widest text-[#5C7061] block mb-1">
                Concierge Contact Line
              </span>
              <a
                id="sage-callout-phone-display"
                href={SALON_PHONE_TEL}
                className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2A4030] hover:text-[#C96850] transition-colors tracking-wider font-mono inline-block break-all"
              >
                {SALON_PHONE_NUMBER}
              </a>
            </div>

            {/* Clickable Call and Reservation Buttons */}
            <div className="pt-2 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              {/* Clickable Call Button */}
              <a
                id="sage-callout-call-button"
                href={SALON_PHONE_TEL}
                className="w-full xs:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-[#4E755A] hover:bg-[#3D5F47] text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_6px_20px_rgba(78,117,90,0.3)] hover:shadow-[0_8px_25px_rgba(78,117,90,0.4)] cursor-pointer flex items-center justify-center gap-2"
                aria-label={`Call ${SALON_PHONE_NUMBER}`}
              >
                <Phone className="w-4 h-4 text-white fill-current shrink-0" />
                <span>Call {SALON_PHONE_NUMBER}</span>
              </a>

              {/* Digital Scheduling Button */}
              {onReserveClick && (
                <button
                  id="sage-callout-reserve-online-btn"
                  onClick={onReserveClick}
                  className="w-full xs:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF4ED] text-[#243528] border border-[#BDD2C1] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#4E755A] shrink-0" />
                  <span>Reserve Online</span>
                </button>
              )}
            </div>

            {/* Subtle Guarantees */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#526656] font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4E755A] shrink-0" />
                <span>Hygienic Sanitized Stations</span>
              </span>
              <span className="hidden sm:inline text-[#B5C9B9]">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#4E755A] shrink-0" />
                <span>Personalized Consultation</span>
              </span>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. COMMON QUERIES (SOFT WARM ACCORDION)                                    */}
        {/* ========================================================================= */}
        <section id="warm-faq-section" className="pt-2 sm:pt-6 max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[#C96850] font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
              ✦ Guidance ✦
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-light">
              Frequently Asked Questions
            </h3>
            <p className="text-[#6B5E55] font-sans text-xs font-light">
              Answers regarding our salon services, prep tips, and bookings.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl sm:rounded-2xl border border-[#E8DACB] overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    id={`faq-warm-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4.5 flex justify-between items-center text-left text-[#2A2421] hover:text-[#C96850] cursor-pointer gap-2"
                  >
                    <span className="font-serif text-sm sm:text-base font-normal pr-2">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#7A6D63] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C96850]' : ''}`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#6B5E55] font-light leading-relaxed border-t border-[#F2ECE4] pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </section>

    </div>
  );
}
