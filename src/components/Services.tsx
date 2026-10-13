import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  HeartHandshake,
  Tag,
  Eye
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

// Curated high quality gallery images per category from existing project / category assets
const CATEGORY_GALLERY_IMAGES: Record<string, string[]> = {
  threading: [
    '/threading-eyebrow.jpg',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80'
  ],
  facials: [
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80'
  ],
  'pedicure-manicure': [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80'
  ],
  'hair-cut': [
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80'
  ],
  'hair-spa': [
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80'
  ],
  waxing: [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80'
  ]
};

export default function Services({ onBookService, onReserveClick, setCurrentPage }: ServicesProps) {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceSort, setPriceSort] = useState<'all' | 'under500' | '500to1000' | 'above1000'>('all');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [bookedFeedbackId, setBookedFeedbackId] = useState<string | null>(null);

  // Service details view state
  const [activeServiceDetail, setActiveServiceDetail] = useState<{
    item: SalonServiceItem;
    category: SalonServiceCategory;
  } | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Close modal handler
  const handleCloseModal = () => {
    setActiveServiceDetail(null);
    setSelectedImageIndex(0);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  // Open modal handler
  const handleOpenDetail = (
    item: SalonServiceItem,
    category: SalonServiceCategory,
    e?: React.MouseEvent<HTMLElement>
  ) => {
    if (e) {
      triggerRef.current = e.currentTarget;
    }
    setActiveServiceDetail({ item, category });
    setSelectedImageIndex(0);
  };

  // Handle ESC key and focus trapping / lock body scroll
  useEffect(() => {
    if (!activeServiceDetail) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus primary interactive element in modal
    const timer = setTimeout(() => {
      const closeBtn = document.getElementById('close-service-modal-btn');
      if (closeBtn) {
        closeBtn.focus();
      }
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      clearTimeout(timer);
    };
  }, [activeServiceDetail]);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  // Convert SalonServiceItem to full Service format for booking flow when user books
  const handleSelectService = (item: SalonServiceItem, category: SalonServiceCategory) => {
    const serviceImage = item.image || category.image;
    const fullService: Service = {
      id: `salon-${item.id}`,
      name: item.name,
      category: category.name as Service['category'],
      description: item.description || `${item.name} treatment under ${category.name}.`,
      duration: item.duration || '30 mins',
      price: item.price,
      image: serviceImage,
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

            {/* Featured Salon Art Silhouette with Refined Decorative Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] sm:aspect-auto sm:h-[420px] rounded-[1.8rem] sm:rounded-[2.6rem] overflow-hidden shadow-[0_15px_35px_rgba(74,58,49,0.08)] border border-[#C96850]/30 ring-1 ring-[#E8DACB] bg-gradient-to-b from-[#FAF4ED] via-[#FDFBF7] to-[#F3ECE3] flex items-center justify-center p-6 group">
              {/* Refined delicate inner decorative inset border */}
              <div className="absolute inset-2 sm:inset-3 rounded-[1.4rem] sm:rounded-[2.2rem] border border-[#C96850]/20 pointer-events-none transition-colors duration-500 group-hover:border-[#C96850]/35" />

              {/* Soft luminous halo behind the emblem */}
              <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#E8BA9B]/40 to-[#D4AF37]/20 blur-2xl pointer-events-none" />

              <img
                src="/service-hero-art-transparent.png"
                alt="Highlights Makeoverartistry Luxury Royal Glow"
                className="relative z-10 w-full max-w-[270px] sm:max-w-[310px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(180,120,40,0.18)] hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#E8DACB] shadow-sm flex items-center justify-between z-20">
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

          {/* Intuitive Guest Guidance Banner: Click/Tap Service to View Photos & Details */}
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#FAF3EC] border border-[#E8DACB] text-[#5E5249] shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-6 h-6 rounded-full bg-[#C96850]/15 text-[#C96850] flex items-center justify-center shrink-0">
                <Sparkle className="w-3.5 h-3.5" />
              </span>
              <p className="text-xs sm:text-[13px] font-sans font-light leading-snug">
                <strong className="font-semibold text-[#2A2421]">Tip:</strong> Click or tap any service name to explore treatment photos, inclusions, and full details.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans uppercase tracking-wider text-[#C96850] font-semibold shrink-0">
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </span>
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
                          className="py-3 px-3.5 -mx-1 sm:-mx-2 rounded-xl sm:rounded-2xl hover:bg-[#FAF6F2] hover:shadow-2xs transition-all flex items-center justify-between gap-3 sm:gap-4 group border border-transparent hover:border-[#E8DACB]/80"
                        >
                          <div
                            onClick={(e) => handleOpenDetail(item, cat, e)}
                            className="space-y-0.5 flex-1 min-w-0 pr-2 cursor-pointer group/clickable"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleOpenDetail(item, cat);
                              }
                            }}
                            aria-label={`View photos and details for ${item.name}`}
                          >
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2A2421] group-hover/clickable:text-[#C96850] transition-colors font-medium text-left leading-snug inline-flex items-center gap-1.5">
                                <span>{item.name}</span>
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-sans font-normal text-[#C96850] opacity-0 group-hover/clickable:opacity-100 sm:opacity-70 transition-opacity bg-[#FAF0ED] px-1.5 py-0.5 rounded-full border border-[#E8BAB0]/60">
                                  <span>Details</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </span>
                              </span>
                              {item.duration && (
                                <span className="text-[10px] text-[#8C7D73] font-sans font-light flex items-center gap-0.5 whitespace-nowrap">
                                  <Clock className="w-2.5 h-2.5 text-[#8C7D73]" />
                                  <span>{item.duration}</span>
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-[11px] sm:text-xs text-[#7A6D63] font-sans font-light line-clamp-1 group-hover/clickable:text-[#5E5249]">
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
                                <button
                                  type="button"
                                  onClick={(e) => handleOpenDetail(item, cat, e)}
                                  className="font-serif text-base sm:text-lg text-[#2A2421] hover:text-[#C96850] focus-visible:text-[#C96850] focus-visible:outline-2 focus-visible:outline-[#C96850] focus-visible:outline-offset-2 rounded-xs transition-colors font-medium text-left leading-snug cursor-pointer group/title inline-flex items-center gap-1.5"
                                  title={`View details for ${item.name}`}
                                  aria-haspopup="dialog"
                                >
                                  <span>{item.name}</span>
                                  <span className="inline-flex items-center gap-0.5 text-[9px] font-sans font-normal text-[#C96850] opacity-0 group-hover:opacity-100 sm:opacity-75 transition-opacity bg-[#FAF0ED] px-1.5 py-0.5 rounded-full border border-[#E8BAB0]/60">
                                    <span>Details</span>
                                    <ArrowRight className="w-2.5 h-2.5" />
                                  </span>
                                </button>
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
                          className="py-3 sm:py-4 px-2 sm:px-3.5 -mx-1 sm:-mx-2 rounded-xl sm:rounded-2xl hover:bg-[#FAF6F2] hover:shadow-2xs transition-all flex items-center justify-between gap-3 sm:gap-6 group border border-transparent hover:border-[#E8DACB]/70"
                        >
                          <div
                            onClick={(e) => handleOpenDetail(item, cat, e)}
                            className="space-y-0.5 flex-1 min-w-0 pr-2 cursor-pointer group/clickable"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleOpenDetail(item, cat);
                              }
                            }}
                            aria-label={`View photos and details for ${item.name}`}
                          >
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-serif text-sm sm:text-base lg:text-lg text-[#2A2421] group-hover/clickable:text-[#C96850] transition-colors font-medium text-left leading-snug inline-flex items-center gap-1.5">
                                <span>{item.name}</span>
                                <span className="inline-flex items-center gap-0.5 text-[10px] font-sans font-normal text-[#C96850] opacity-0 group-hover/clickable:opacity-100 sm:opacity-70 transition-opacity bg-[#FAF0ED] px-1.5 py-0.5 rounded-full border border-[#E8BAB0]/60">
                                  <span>Details</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </span>
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
                            <button
                              type="button"
                              onClick={(e) => handleOpenDetail(item, cat, e)}
                              className="font-serif text-base sm:text-lg lg:text-xl text-[#2A2421] hover:text-[#4E755A] focus-visible:text-[#4E755A] focus-visible:outline-2 focus-visible:outline-[#4E755A] focus-visible:outline-offset-2 rounded-xs transition-colors font-medium text-left leading-snug cursor-pointer group/title inline-flex items-center gap-1.5"
                              title={`View details for ${item.name}`}
                              aria-haspopup="dialog"
                            >
                              <span>{item.name}</span>
                              <span className="inline-flex items-center gap-0.5 text-[9px] font-sans font-normal text-[#4E755A] opacity-0 group-hover:opacity-100 sm:opacity-75 transition-opacity bg-[#E5EFE7] px-1.5 py-0.5 rounded-full border border-[#CCDDCF]">
                                <span>Details</span>
                                <ArrowRight className="w-2.5 h-2.5" />
                              </span>
                            </button>
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

      {/* ========================================================================= */}
      {/* 7. ACCESSIBLE SERVICE DETAILS MODAL / DIALOG                               */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeServiceDetail && (() => {
          const { item, category } = activeServiceDetail;
          const isJustBooked = bookedFeedbackId === item.id;
          const CategoryIcon = CATEGORY_ICONS[category.iconName] || Sparkles;

          // Resolve image gallery for this service: item gallery, item image, or category image gallery
          const galleryImages =
            item.gallery && item.gallery.length > 0
              ? item.gallery
              : item.image
              ? [item.image, ...(CATEGORY_GALLERY_IMAGES[category.id] || [])]
              : CATEGORY_GALLERY_IMAGES[category.id] || [category.image];
          const activeImage = galleryImages[selectedImageIndex] || item.image || category.image;

          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              aria-describedby="service-modal-description"
            >
              {/* Backdrop with smooth blur and warm tint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-[#1F1916]/60 backdrop-blur-sm cursor-pointer"
                aria-hidden="true"
              />

              {/* Modal Container */}
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl bg-[#FCFBF9] rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-[0_25px_70px_rgba(30,20,15,0.4)] border border-[#E8DACB] overflow-hidden my-auto z-10 flex flex-col max-h-[92vh] sm:max-h-[90vh]"
              >
                {/* Modal Header Bar with Close Button */}
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-7 py-3.5 sm:py-4.5 border-b border-[#EFE5DB] bg-white/90 backdrop-blur-md sticky top-0 z-20">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF0ED] text-[#C96850] flex items-center justify-center border border-[#E8BAB0]/70 shrink-0">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-semibold text-[#C96850] block leading-none truncate">
                        {category.name}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#8C7D73] font-sans font-light truncate block mt-0.5">
                        {category.tagline}
                      </span>
                    </div>
                  </div>

                  <button
                    id="close-service-modal-btn"
                    type="button"
                    onClick={handleCloseModal}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF6F2] hover:bg-[#EFE5DC] text-[#4A3E37] hover:text-[#1F1916] flex items-center justify-center transition-colors cursor-pointer border border-[#E5DACD] focus-visible:outline-2 focus-visible:outline-[#C96850] shrink-0 ml-2"
                    aria-label="Close service details"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="overflow-y-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-5 sm:space-y-6">
                  {/* Image & Gallery Carousel Preview */}
                  <div className="space-y-3">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] max-h-[50vh] rounded-2xl overflow-hidden border border-[#E8DACB] shadow-sm bg-[#221C19] flex items-center justify-center">
                      {/* Blurred Ambient Background Layer to give seamless edge fill */}
                      <img
                        src={activeImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none select-none"
                      />

                      {/* Foreground Subject Image - Perfectly Centered, Unstretched & Natural Aspect Ratio */}
                      <img
                        src={activeImage}
                        alt={`${item.name} - ${category.name}`}
                        className="relative z-10 w-full h-full object-contain object-center transition-all duration-300 drop-shadow-md"
                      />

                      {/* Subtle Vignette Gradient for Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/50 via-transparent to-transparent pointer-events-none z-10" />

                      {/* Image Category Badge */}
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/70 text-[#2A2421] text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                        <Sparkle className="w-3 h-3 text-[#C96850]" />
                        <span>Highlights Studio Ritual</span>
                      </div>
                    </div>

                    {/* Gallery Thumbnails (Cleanly Aligned Below Main Image) */}
                    {galleryImages.length > 1 && (
                      <div className="flex items-center gap-2.5 pt-1 overflow-x-auto pb-1 scrollbar-none">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-sans text-[#8C7D73] font-semibold shrink-0 mr-0.5">
                          Photos ({galleryImages.length}):
                        </span>
                        {galleryImages.map((img, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 bg-[#221C19] flex items-center justify-center ${
                              selectedImageIndex === idx
                                ? 'border-[#C96850] ring-2 ring-[#C96850]/30 scale-105 shadow-md'
                                : 'border-[#E8DACB] opacity-75 hover:opacity-100 hover:border-[#C96850]/60'
                            }`}
                            aria-label={`View photo ${idx + 1} for ${item.name}`}
                          >
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Title & Core Price / Duration Metrics */}
                  <div className="space-y-3 pb-4 border-b border-[#EFE5DB]">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h3
                        id="service-modal-title"
                        className="font-serif text-2xl sm:text-3xl text-[#2A2421] font-normal leading-tight"
                      >
                        {item.name}
                      </h3>
                      <div className="flex items-baseline gap-1.5 shrink-0">
                        <span className="text-xs uppercase tracking-wider font-sans text-[#8C7D73]">Tariff:</span>
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C96850]">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A6D63] font-sans">
                      {item.duration && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F2] border border-[#E5DACD] text-[#5E5249] font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#C96850]" />
                          <span>Duration: {item.duration}</span>
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0EB] border border-[#CFDFD2] text-[#4E755A] font-medium">
                        <Tag className="w-3.5 h-3.5 text-[#4E755A]" />
                        <span>Category: {category.name}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-[#8C7D73] block">
                      Treatment Description &amp; Details
                    </span>
                    <p
                      id="service-modal-description"
                      className="text-xs sm:text-sm text-[#5E5249] font-sans font-light leading-relaxed bg-[#FAF6F2] p-4 rounded-2xl border border-[#EAE0D4]"
                    >
                      {item.description || `${item.name} treatment under ${category.name}.`}
                    </p>
                    <p className="text-[11px] text-[#7A6D63] font-sans font-light italic">
                      "{category.subtitle}"
                    </p>
                  </div>

                  {/* Verified Service Guarantees (Present in Project) */}
                  <div className="space-y-2 pt-2 border-t border-[#EFE5DB]">
                    <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-[#8C7D73] block">
                      Highlights Studio Inclusions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B5E55] font-sans">
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#EAE0D4]">
                        <ShieldCheck className="w-4 h-4 text-[#6B8E76] shrink-0" />
                        <span>Sterilized single-use linen &amp; tools</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#EAE0D4]">
                        <Sparkles className="w-4 h-4 text-[#C96850] shrink-0" />
                        <span>Certified beauty artisan care</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Controls */}
                <div className="px-5 sm:px-8 py-4 sm:py-5 border-t border-[#EFE5DB] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] uppercase tracking-wider text-[#8C7D73] block font-sans">
                      Total Payable Rate
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#2A2421]">
                      ₹{item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-[#D5C2B1] text-[#4A3E37] hover:bg-[#FAF6F2] text-xs uppercase tracking-wider font-semibold font-sans transition-colors cursor-pointer"
                    >
                      Back to Menu
                    </button>

                    <button
                      id="modal-book-this-service-btn"
                      type="button"
                      onClick={() => {
                        handleCloseModal();
                        handleSelectService(item, category);
                      }}
                      className={`flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold font-sans transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center gap-2 ${
                        isJustBooked
                          ? 'bg-[#4E755A] text-white'
                          : 'bg-[#C96850] hover:bg-[#B3563F] text-white hover:shadow-[0_4px_15px_rgba(201,104,80,0.3)]'
                      }`}
                    >
                      {isJustBooked ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Schedule</span>
                        </>
                      ) : (
                        <>
                          <span>Book this service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
}
