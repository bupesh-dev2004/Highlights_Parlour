import React, { useState, useMemo } from 'react';
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
  Leaf,
  Search,
  X,
  Check,
  Clock,
  HeartHandshake
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceSort, setPriceSort] = useState<'all' | 'under500' | '500to1000' | 'above1000'>('all');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [bookedFeedbackId, setBookedFeedbackId] = useState<string | null>(null);

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

    setBookedFeedbackId(item.id);
    setTimeout(() => {
      onBookService(fullService);
    }, 300);
  };

  // Filtered categories based on active tab, search query, and price range
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return SALON_PRICE_CATEGORIES
      .filter(category => activeCategoryTab === 'all' || category.id === activeCategoryTab)
      .map(category => {
        const matchingServices = category.services.filter(item => {
          // Search query check
          const matchesQuery = !query || 
            item.name.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query) ||
            (item.description && item.description.toLowerCase().includes(query));

          // Price filter check
          let matchesPrice = true;
          if (priceSort === 'under500') matchesPrice = item.price < 500;
          else if (priceSort === '500to1000') matchesPrice = item.price >= 500 && item.price <= 1000;
          else if (priceSort === 'above1000') matchesPrice = item.price > 1000;

          return matchesQuery && matchesPrice;
        });

        return {
          ...category,
          services: matchingServices
        };
      })
      .filter(category => category.services.length > 0);
  }, [activeCategoryTab, searchQuery, priceSort]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.services.length, 0);
  }, [filteredCategories]);

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

        {/* Section Header & Interactive Filter / Search Bar */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-[#E8DACB]">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[#C96850] font-sans font-semibold text-xs tracking-[0.25em] uppercase flex items-center justify-center md:justify-start gap-1.5">
                <Sparkle className="w-3.5 h-3.5 text-[#C96850]" />
                <span>Editorial Rate Card &amp; Menu</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A2421] font-light">
                Salon Services &amp; Price List
              </h2>
              <p className="text-[#6B5E55] font-sans text-xs sm:text-sm font-light max-w-xl mx-auto md:mx-0">
                Browse our transparent menu in Indian Rupees (₹). Tap <strong className="font-semibold text-[#2A2421]">Book</strong> on any service to immediately add it to your appointment.
              </p>
            </div>

            {/* Total Results Counter */}
            <div className="text-center md:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF0ED] text-[#C96850] border border-[#E8BAB0]/70 text-xs font-semibold font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#C96850]" />
                <span>{totalFilteredCount} Available Treatments</span>
              </span>
            </div>
          </div>

          {/* Interactive Search & Filter Controls Panel */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#E8DACB] shadow-[0_6px_20px_rgba(74,58,49,0.04)] space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-3 w-full">
              {/* Real-time Search Bar */}
              <div className="relative w-full md:flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7D73] pointer-events-none" />
                <input
                  id="service-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search treatments (e.g. Eyebrow, O3+, Hair Spa, Waxing...)"
                  className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#FAF6F2] border border-[#E5DACD] text-xs sm:text-sm text-[#2A2421] placeholder-[#8C7D73] focus:outline-none focus:border-[#C96850] focus:ring-1 focus:ring-[#C96850] transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7D73] hover:text-[#2A2421] p-1 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Price Range Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
                <span className="text-[11px] text-[#7A6D63] font-sans font-medium uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                  Price:
                </span>
                <button
                  onClick={() => setPriceSort('all')}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    priceSort === 'all'
                      ? 'bg-[#2A2421] text-white shadow-xs'
                      : 'bg-[#F2ECE4] text-[#6B5E55] hover:bg-[#EBE2D8]'
                  }`}
                >
                  All Prices
                </button>
                <button
                  onClick={() => setPriceSort('under500')}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    priceSort === 'under500'
                      ? 'bg-[#C96850] text-white shadow-xs'
                      : 'bg-[#F2ECE4] text-[#6B5E55] hover:bg-[#EBE2D8]'
                  }`}
                >
                  Under ₹500
                </button>
                <button
                  onClick={() => setPriceSort('500to1000')}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    priceSort === '500to1000'
                      ? 'bg-[#C96850] text-white shadow-xs'
                      : 'bg-[#F2ECE4] text-[#6B5E55] hover:bg-[#EBE2D8]'
                  }`}
                >
                  ₹500 – ₹1000
                </button>
                <button
                  onClick={() => setPriceSort('above1000')}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    priceSort === 'above1000'
                      ? 'bg-[#C96850] text-white shadow-xs'
                      : 'bg-[#F2ECE4] text-[#6B5E55] hover:bg-[#EBE2D8]'
                  }`}
                >
                  ₹1000+
                </button>
              </div>
            </div>

            {/* Category Quick Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none w-full -mx-1 px-1 border-t border-[#F2ECE4]">
              <button
                id="filter-all-services"
                onClick={() => setActiveCategoryTab('all')}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  activeCategoryTab === 'all'
                    ? 'bg-[#C96850] text-white shadow-xs'
                    : 'bg-[#FAF4ED] text-[#6B5E55] hover:bg-[#F2E8DC]'
                }`}
              >
                All Categories (6)
              </button>
              {SALON_PRICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-pill-${cat.id}`}
                  onClick={() => setActiveCategoryTab(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    activeCategoryTab === cat.id
                      ? 'bg-[#C96850] text-white shadow-xs'
                      : 'bg-[#FAF4ED] text-[#6B5E55] hover:bg-[#F2E8DC]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty Search Fallback */}
        {filteredCategories.length === 0 && (
          <div className="bg-white rounded-3xl p-10 border border-[#E8DACB] text-center space-y-4 max-w-md mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-[#FAF0ED] text-[#C96850] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#2A2421]">No treatments found</h3>
            <p className="text-xs text-[#7A6D63] font-sans font-light">
              No services match "{searchQuery}". Try searching for another name or clearing your price filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setPriceSort('all');
                setActiveCategoryTab('all');
              }}
              className="px-5 py-2 rounded-full bg-[#2A2421] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#C96850] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Categories Presentation - Varied Editorial Layouts with Direct Bookings & Rich Header Art */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {filteredCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.iconName] || Sparkles;

            // VARIATION 1: THREADING & WAXING (Clean Responsive Menu with Delicate Borders)
            if (cat.id === 'threading' || cat.id === 'waxing') {
              return (
                <div
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className="bg-white rounded-2xl sm:rounded-4xl p-4 sm:p-8 lg:p-10 border border-[#E8DACB] shadow-[0_8px_25px_rgba(100,80,70,0.04)] space-y-4 sm:space-y-6"
                >
                  {/* Category Title Header with Rich Banner Image Thumbnail */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#F0E6DC] gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#E8BAB0]/70 shrink-0 shadow-2xs">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2A2421]/20" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                            {cat.name}
                          </h3>
                          <span className="text-[10px] font-sans uppercase tracking-wider text-[#C96850] bg-[#FAF0ED] px-2 py-0.5 rounded-md font-semibold border border-[#E8BAB0]/60 hidden xs:inline">
                            {cat.tagline}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#6B8E76] font-semibold bg-[#EAF0EB] px-3 py-1 rounded-full border border-[#D0DFD3] self-start sm:self-auto shrink-0">
                      {cat.services.length} Items Available
                    </span>
                  </div>

                  {/* 1-Col on mobile, 2-Col on md+ screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 sm:gap-y-3 pt-1">
                    {cat.services.map((item) => {
                      const isJustBooked = bookedFeedbackId === item.id;
                      return (
                        <div
                          key={item.id}
                          className="py-3 px-3.5 -mx-1 sm:-mx-2 rounded-xl sm:rounded-2xl hover:bg-[#FAF6F2] transition-colors flex items-center justify-between gap-3 sm:gap-4 group border border-transparent hover:border-[#E8DACB]/60"
                        >
                          <div className="space-y-0.5 flex-1 min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2A2421] group-hover:text-[#C96850] transition-colors font-medium block leading-snug">
                                {item.name}
                              </span>
                              {item.duration && (
                                <span className="text-[10px] text-[#8C7D73] font-sans font-light flex items-center gap-0.5 whitespace-nowrap">
                                  <Clock className="w-2.5 h-2.5 text-[#8C7D73]" />
                                  <span>{item.duration}</span>
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light line-clamp-1">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Price formatted in Indian Rupees (₹) + Direct Book Action */}
                          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <span className="font-serif text-base sm:text-lg font-bold text-[#2A2421] group-hover:text-[#C96850] transition-colors whitespace-nowrap">
                              ₹{item.price}
                            </span>
                            <button
                              id={`book-service-${item.id}`}
                              onClick={() => handleSelectService(item, cat)}
                              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1 shrink-0 ${
                                isJustBooked
                                  ? 'bg-[#6B8E76] text-white shadow-xs'
                                  : 'bg-[#FAF0ED] text-[#C96850] hover:bg-[#C96850] hover:text-white border border-[#E8BAB0]/70'
                              }`}
                              title={`Add ${item.name} to booking`}
                            >
                              {isJustBooked ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <span>Book</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 text-[10px] sm:text-[11px] text-[#8C7D73] font-sans flex flex-col xs:flex-row items-start xs:items-center justify-between border-t border-[#F0E6DC]/80 gap-1">
                    <span>Precision cotton thread &amp; gentle hygienic waxing care</span>
                    <span className="text-[#6B8E76] font-medium">Click Book to schedule this treatment</span>
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
                  {/* Category Title Header with Rich Banner Image Thumbnail */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#E8DEC0]/80 gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#CFDFD2] shrink-0 shadow-2xs">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2A2421]/20" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                            {cat.name}
                          </h3>
                          <span className="text-[10px] font-sans uppercase tracking-wider text-[#4E755A] bg-[#EAF0EB] px-2 py-0.5 rounded-md font-semibold border border-[#CFDFD2] hidden xs:inline">
                            {cat.tagline}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#C96850] font-semibold bg-[#FAF0ED] px-3.5 py-1 rounded-full border border-[#E8BAB0] self-start sm:self-auto shrink-0">
                      {cat.services.length} Glow Formulations
                    </span>
                  </div>

                  {/* Responsive Facial Cards: 1 col on mobile, 2 on tablet, 3 on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                    {cat.services.map((item) => {
                      const isJustBooked = bookedFeedbackId === item.id;
                      const isSignature = item.price >= 850;
                      return (
                        <div
                          key={item.id}
                          className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE0D4] hover:border-[#C96850]/60 hover:shadow-sm transition-all duration-300 flex flex-col justify-between space-y-3 group"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-start justify-between gap-2">
                              <div className="space-y-0.5">
                                {isSignature && (
                                  <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold uppercase tracking-wider text-[#C96850] bg-[#FAF0ED] px-1.5 py-0.5 rounded">
                                    <Star className="w-2.5 h-2.5 fill-current" />
                                    <span>Signature Ritual</span>
                                  </span>
                                )}
                                <h4 className="font-serif text-base sm:text-lg text-[#2A2421] group-hover:text-[#C96850] transition-colors font-medium leading-snug">
                                  {item.name}
                                </h4>
                              </div>
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
                            <span className="flex items-center gap-1 font-sans text-[10px] text-[#8C7D73]">
                              <Clock className="w-3 h-3 text-[#8C7D73]" />
                              <span>{item.duration || '45 mins'}</span>
                            </span>
                            <button
                              id={`book-facial-${item.id}`}
                              onClick={() => handleSelectService(item, cat)}
                              className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                                isJustBooked
                                  ? 'bg-[#4E755A] text-white shadow-xs'
                                  : 'bg-[#C96850] text-white hover:bg-[#B3563F] shadow-2xs'
                              }`}
                            >
                              {isJustBooked ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Reserved</span>
                                </>
                              ) : (
                                <>
                                  <span>Book</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
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
                  {/* Category Title Header with Rich Banner Image Thumbnail */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#F0E6DC] gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#E0D4C6] shrink-0 shadow-2xs">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2A2421]/20" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                            {cat.name}
                          </h3>
                          <span className="text-[10px] font-sans uppercase tracking-wider text-[#7A6D63] bg-[#F4EDE5] px-2 py-0.5 rounded-md font-semibold border border-[#E5DACD] hidden xs:inline">
                            {cat.tagline}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#7A6D63] font-semibold bg-[#F4EDE5] px-3 py-1 rounded-full border border-[#E5DACD] self-start sm:self-auto shrink-0">
                      {cat.services.length} Specialized Cuts
                    </span>
                  </div>

                  {/* Clean List Items with generous whitespace & Direct Book Button */}
                  <div className="divide-y divide-[#F2E8DC]/80">
                    {cat.services.map((item) => {
                      const isJustBooked = bookedFeedbackId === item.id;
                      return (
                        <div
                          key={item.id}
                          className="py-3 sm:py-4 px-2 sm:px-3 -mx-1 sm:-mx-2 rounded-xl sm:rounded-2xl hover:bg-[#FAF6F2] transition-colors flex items-center justify-between gap-3 sm:gap-6 group"
                        >
                          <div className="space-y-0.5 flex-1 min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2A2421] group-hover:text-[#C96850] transition-colors font-medium block leading-snug">
                                {item.name}
                              </span>
                              {item.duration && (
                                <span className="text-[10px] text-[#8C7D73] font-sans font-light flex items-center gap-0.5 whitespace-nowrap">
                                  <Clock className="w-2.5 h-2.5 text-[#8C7D73]" />
                                  <span>{item.duration}</span>
                                </span>
                              )}
                            </div>
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
                            <button
                              id={`book-hair-${item.id}`}
                              onClick={() => handleSelectService(item, cat)}
                              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1 shrink-0 ${
                                isJustBooked
                                  ? 'bg-[#6B8E76] text-white shadow-xs'
                                  : 'bg-[#FAF0ED] text-[#C96850] hover:bg-[#C96850] hover:text-white border border-[#E8BAB0]/70'
                              }`}
                            >
                              {isJustBooked ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Added</span>
                                </>
                              ) : (
                                <>
                                  <span>Book</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
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
                {/* Category Title Header with Rich Banner Image Thumbnail */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-[#DDE7DF] gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#CCDDCF] shrink-0 shadow-2xs">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#2A2421]/20" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2A2421] font-normal leading-tight">
                          {cat.name}
                        </h3>
                        <span className="text-[10px] font-sans uppercase tracking-wider text-[#4E755A] bg-[#E5EFE7] px-2 py-0.5 rounded-md font-semibold border border-[#CCDDCF] hidden xs:inline">
                          {cat.tagline}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#6B7E70] font-sans font-light mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider sm:tracking-widest text-[#4E755A] font-semibold bg-[#E5EFE7] px-3 py-1 rounded-full border border-[#CCDDCF] self-start sm:self-auto shrink-0">
                    Restorative Care
                  </span>
                </div>

                {/* 1-Col on mobile, 2-Col on md+ screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
                  {cat.services.map((item) => {
                    const isJustBooked = bookedFeedbackId === item.id;
                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-4 sm:p-6 border border-[#D8E4DA] hover:border-[#4E755A] transition-all flex flex-col justify-between space-y-3 sm:space-y-4 group shadow-2xs"
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
                          <span className="flex items-center gap-1 font-sans text-[10px]">
                            <Clock className="w-3 h-3 text-[#6B7E70]" />
                            <span>{item.duration || '45 mins'}</span>
                          </span>
                          <button
                            id={`book-pedi-${item.id}`}
                            onClick={() => handleSelectService(item, cat)}
                            className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                              isJustBooked
                                ? 'bg-[#4E755A] text-white shadow-xs'
                                : 'bg-[#E5EFE7] text-[#4E755A] hover:bg-[#4E755A] hover:text-white border border-[#CCDDCF]'
                            }`}
                          >
                            {isJustBooked ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>Reserved</span>
                              </>
                            ) : (
                              <>
                                <span>Book Now</span>
                                <ArrowRight className="w-2.5 h-2.5" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
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
