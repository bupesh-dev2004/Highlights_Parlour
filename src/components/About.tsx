import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Heart, 
  Award, 
  Smile, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Calendar, 
  Scissors, 
  Flower2, 
  Crown, 
  CheckCircle2,
  Clock,
  Sparkle,
  User
} from 'lucide-react';

interface AboutProps {
  setCurrentPage?: (page: string) => void;
  onReserveClick?: () => void;
}

export default function About({ setCurrentPage, onReserveClick }: AboutProps) {
  const navigateTo = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    } else {
      const newPath = page === 'home' ? '/' : `/${page}`;
      window.history.pushState(null, '', newPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBook = () => {
    if (onReserveClick) {
      onReserveClick();
    } else {
      navigateTo('booking');
    }
  };

  const scrollToStory = () => {
    const el = document.getElementById('our-story-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Why Highlights Cards
  const whyCards = [
    {
      num: '01',
      title: 'Personalized Care',
      desc: 'Every client receives attention based on their individual beauty needs.',
      icon: Heart,
    },
    {
      num: '02',
      title: 'Professional Expertise',
      desc: 'Our beauty professionals focus on precision, quality, and detail.',
      icon: Award,
    },
    {
      num: '03',
      title: 'Relaxing Experience',
      desc: 'A welcoming environment designed to make you feel comfortable and refreshed.',
      icon: Smile,
    },
    {
      num: '04',
      title: 'Quality First',
      desc: 'Thoughtfully selected products and professional beauty techniques.',
      icon: ShieldCheck,
    },
  ];

  // 4 Service Category Previews
  const serviceCategories = [
    {
      title: 'HAIR',
      subtitle: 'Cut • Style • Colour',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      icon: Scissors,
      tag: 'Couture Styling'
    },
    {
      title: 'SKIN',
      subtitle: 'Facials • Skin Care',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      icon: Flower2,
      tag: 'Bio-Cellular'
    },
    {
      title: 'BRIDAL',
      subtitle: 'Bridal Makeup • Styling',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      icon: Crown,
      tag: 'Royal Glam'
    },
    {
      title: 'BEAUTY',
      subtitle: 'Threading • Waxing • Grooming',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles,
      tag: 'Precision Care'
    },
  ];

  // Highlights Experience Steps (Customer Journey)
  const experienceSteps = [
    {
      step: '01',
      title: 'Step In',
      desc: 'Walk into a warm and welcoming environment.',
      image: '/step-in-reception.png',
      icon: User,
    },
    {
      step: '02',
      title: 'Feel Relaxed',
      desc: 'Take a moment for yourself.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      icon: Flower2,
    },
    {
      step: '03',
      title: 'Get Pampered',
      desc: 'Experience professional beauty care.',
      image: '/get-pampered-makeup.png',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Step Out Confident',
      desc: 'Leave feeling refreshed and confident.',
      image: '/step-out-confident.png',
      icon: Heart,
    },
  ];


  return (
    <div className="w-full min-h-screen bg-brand-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-rose selection:text-brand-charcoal">
      
      {/* ==================================================
          2. ABOUT US HERO SECTION (Warm Luxury Editorial)
          ================================================== */}
      <section className="relative w-full min-h-[75vh] lg:min-h-[84vh] flex items-center justify-center overflow-hidden bg-brand-cream border-b border-brand-blush">
        
        {/* Subtle decorative glow elements */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-rose/20 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Hero Column: Typographic Elegance */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blush border border-brand-gold/40 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold-dark" />
              <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase">
                About Highlights
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-charcoal font-normal leading-tight tracking-tight"
            >
              Where Beauty <span className="italic font-light text-brand-gold-dark">Meets Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-600 font-sans font-light text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
            >
              At Highlights Parlour, we believe beauty is more than a look — it's the confidence you carry with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center justify-start gap-3 sm:gap-4"
            >
              <button
                onClick={scrollToStory}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-brand-gold via-[#D8B467] to-brand-gold-dark hover:from-brand-gold-dark hover:to-brand-gold text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_25px_rgba(197,160,89,0.35)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.5)] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('services')}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-brand-blush/60 text-brand-charcoal border border-brand-gold/40 hover:border-brand-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-xs transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <span>Our Services</span>
              </button>
            </motion.div>

            {/* Micro Highlights Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-blush max-w-lg">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal block">12+</span>
                <span className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider font-sans">Years Legacy</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal block">18K+</span>
                <span className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider font-sans">Delighted Guests</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-dark block">4.9★</span>
                <span className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider font-sans">Verified Rating</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Editorial Warm Salon Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Backing Gold Accent Frame */}
              <div className="absolute -inset-3 rounded-4xl bg-gradient-to-tr from-brand-gold/30 via-brand-rose/30 to-brand-blush/40 blur-sm -z-1" />
              
              <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="Highlights Parlour Warm Ambience"
                  className="w-full h-[450px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-gold/30 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-gold-dark">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-bold text-brand-charcoal">Highlights Makeoverartistry</p>
                      <p className="text-[10px] text-stone-500 uppercase tracking-wider">Beverly Hills & Worldwide Artistry</p>
                    </div>
                  </div>
                  <span className="text-xs font-serif font-bold text-brand-gold-dark bg-brand-blush px-3 py-1 rounded-full border border-brand-gold/30">
                    Est. 2014
                  </span>
                </div>
              </div>

              {/* Floating Floating Decorative Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-brand-charcoal text-white px-5 py-3 rounded-2xl shadow-xl border border-brand-gold/40 hidden sm:flex items-center gap-2.5">
                <Crown className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-sans font-semibold tracking-wide uppercase">Artisan Sanctuary</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>


      {/* ==================================================
          3. OUR STORY SECTION (Refined Editorial Layout)
          ================================================== */}
      <section id="our-story-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Salon / Beauty Image with Multi-Layer Overlap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl bg-brand-blush border border-brand-gold/30 -z-1" />
              
              <div className="overflow-hidden rounded-3xl shadow-xl border border-brand-gold/30 group">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                  alt="Highlights Parlour Story"
                  className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Small accent image card overlay */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:right-6 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=500&q=80"
                  alt="Styling Detail"
                  className="w-full h-32 object-cover"
                />
                <div className="bg-white p-2.5 text-center">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-gold-dark block">
                    Tailored To You
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-brand-gold font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
                ✦ Our Story ✦
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light leading-tight">
                More Than Beauty. <br />
                <span className="font-normal italic">It's Your Moment.</span>
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold/50" />
            </div>

            <div className="space-y-4 text-stone-600 font-sans text-sm sm:text-base font-light leading-relaxed">
              <p>
                Highlights Parlour was created to provide a space where beauty, comfort, and confidence come together.
              </p>
              <p>
                From everyday grooming to special occasions, our goal is to make every visit feel personal, relaxing, and memorable.
              </p>
              <p>
                With professional care, quality products, and attention to detail, we help every client discover a look that feels uniquely theirs.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-charcoal hover:bg-brand-gold text-white font-sans font-semibold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ==================================================
          4. WHY HIGHLIGHTS SECTION (Four Cards)
          ================================================== */}
      <section className="bg-brand-blush/40 border-y border-brand-blush py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ The Highlights Distinction ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
              Why Highlights?
            </h2>
            <p className="text-stone-600 font-sans font-light text-sm sm:text-base">
              Because every visit should feel as special as the result.
            </p>
            <div className="h-0.5 w-16 bg-brand-gold/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 border border-brand-gold/30 hover:border-brand-gold shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-light text-brand-gold-dark">
                        {card.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-brand-blush flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-brand-charcoal leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-stone-600 font-sans text-xs sm:text-sm font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="w-8 h-0.5 bg-brand-blush-dark group-hover:w-16 group-hover:bg-brand-gold transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ==================================================
          5. BEAUTY PHILOSOPHY SECTION (Warm Editorial Campaign)
          ================================================== */}
      <section className="relative w-full py-28 lg:py-36 overflow-hidden flex items-center justify-center bg-brand-charcoal text-white">
        
        {/* Warm Ambient Accents */}
        <div className="absolute -top-24 left-1/4 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-brand-rose/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <span className="text-brand-gold-light font-sans font-semibold text-xs tracking-[0.3em] uppercase block">
              ✦ Our Philosophy ✦
            </span>

            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-light leading-snug tracking-tight">
              "Beauty isn't about changing who you are.<br />
              <span className="italic text-brand-gold-light">It's about highlighting what makes you, you."</span>
            </blockquote>

            <div className="pt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brand-gold/50" />
              <span className="text-brand-gold-light/90 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
                CARE • CONFIDENCE • BEAUTY • YOU
              </span>
              <span className="h-px w-12 bg-brand-gold/50" />
            </div>
          </motion.div>
        </div>
      </section>


      {/* ==================================================
          6. OUR SERVICES INTRODUCTION (4 Category Cards)
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-blush pb-8">
          <div className="space-y-3">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Tailored Experiences ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
              Our Beauty Services
            </h2>
            <p className="text-stone-600 font-sans font-light text-sm sm:text-base max-w-xl">
              From head-turning hair transformations to soothing skincare, explore our bespoke treatments.
            </p>
          </div>

          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-2 text-brand-gold-dark hover:text-brand-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest transition-colors cursor-pointer group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => navigateTo('services')}
                className="group relative bg-white rounded-3xl overflow-hidden border border-brand-gold/30 hover:border-brand-gold shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
                  
                  {/* Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal shadow-2xs">
                    {cat.tag}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                    <CatIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-brand-charcoal group-hover:text-brand-gold transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-stone-600 font-sans text-xs sm:text-sm font-light mt-1">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs text-brand-gold-dark font-sans font-semibold">
                    <span className="uppercase tracking-wider">Discover Treatments</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* ==================================================
          7. THE HIGHLIGHTS EXPERIENCE (Luxury Customer Journey)
          ================================================== */}
      <section 
        id="your-journey-section"
        className="w-full relative bg-[#FBF7F1] border-y border-[#C9A15A]/20 py-24 sm:py-28 lg:py-36 overflow-hidden select-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 15%, rgba(220, 193, 139, 0.15) 0%, rgba(251, 247, 241, 0) 70%), radial-gradient(ellipse at 85% 85%, rgba(201, 161, 90, 0.08) 0%, rgba(251, 247, 241, 0) 60%)'
        }}
      >
        {/* Subtle Botanical Line Art / Decorative SVG Accents */}
        {/* Top-Right: Thin champagne/gold botanical leaves */}
        <div className="absolute -top-6 -right-6 w-56 h-56 sm:w-72 sm:h-72 pointer-events-none opacity-30 text-[#C9A15A] z-0">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
            <path d="M190,10 Q140,40 120,110 Q105,160 70,185" strokeDasharray="3 3" />
            <path d="M165,25 Q135,20 125,50 C115,80 145,75 165,25 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M142,65 Q115,70 100,100 C90,125 120,125 142,65 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M110,115 Q80,120 75,150 C70,170 95,170 110,115 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M178,50 Q160,80 185,95 C200,75 195,55 178,50 Z" fill="currentColor" fillOpacity="0.04" />
          </svg>
        </div>

        {/* Bottom-Left: Subtle botanical / flower line art */}
        <div className="absolute -bottom-8 -left-8 w-60 h-60 sm:w-72 sm:h-72 pointer-events-none opacity-25 text-[#C9A15A] z-0">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
            <path d="M10,190 Q60,160 80,90 Q95,40 130,15" strokeDasharray="3 3" />
            <path d="M35,175 Q65,180 75,150 C85,120 55,125 35,175 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M58,135 Q85,130 100,100 C110,75 80,75 58,135 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M90,85 Q120,80 125,50 C130,30 105,30 90,85 Z" fill="currentColor" fillOpacity="0.04" />
          </svg>
        </div>

        {/* Bottom-Right: Flowing satin/fabric-like abstract shape */}
        <div className="absolute bottom-0 right-0 w-80 h-44 pointer-events-none opacity-20 text-[#DCC18B] z-0">
          <svg viewBox="0 0 300 150" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
            <path d="M0,150 C100,120 180,160 300,70" />
            <path d="M30,150 C120,110 200,140 300,90" />
            <path d="M60,150 C150,100 220,130 300,110" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* ====================================================
              SECTION HEADER
              ==================================================== */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
            {/* Small Eyebrow: text fades up, two gold lines extend outward smoothly */}
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4">
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 1 }}
                className="w-[45px] sm:w-[55px] h-[1px] bg-[#C9A15A]" 
              />
              <motion.span 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-[#C9A15A] font-sans font-semibold text-[11px] sm:text-xs tracking-[0.35em] uppercase"
              >
                YOUR JOURNEY
              </motion.span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="w-[45px] sm:w-[55px] h-[1px] bg-[#C9A15A]" 
              />
            </div>

            {/* Main Heading: 52-58px on desktop, elegant light serif */}
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#24211F] font-normal tracking-tight leading-[1.15]"
            >
              The Highlights Experience
            </motion.h2>

            {/* Subtitle: 18-20px, soft warm gray, generous spacing */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-[#77716B] font-sans font-light text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl mx-auto pt-1"
            >
              A serene 4-step ritual crafted to rejuvenate your senses from arrival to departure.
            </motion.p>
          </div>

          {/* ====================================================
              DESKTOP 4-STEP EXPERIENCE LAYOUT
              ==================================================== */}
          <div className="hidden lg:block relative mt-4">
            
            {/* Continuous Horizontal Gold Connector Line expanding from center */}
            <div className="absolute top-[280px] left-[5%] right-[5%] z-10 pointer-events-none flex items-center justify-center">
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0.5 }}
                className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A15A]/60 to-transparent" 
              />
            </div>

            {/* 3 Small Diamond / Star Separators with fade + scale */}
            <div className="absolute top-[280px] left-0 right-0 z-15 pointer-events-none flex justify-between px-[22%] -translate-y-1/2">
              {[0, 1, 2].map((idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                  className="text-[#C9A15A] text-xs transform rotate-45 select-none"
                >
                  ◆
                </motion.span>
              ))}
            </div>

            {/* 4 Items Row (Seamless vertical composition, blending into cream) */}
            <div className="grid grid-cols-4 gap-6 xl:gap-10 relative z-20">
              {experienceSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const baseDelay = idx * 0.1;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, delay: baseDelay, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Tall Rounded-Arch Image Container */}
                    <div className="relative w-full max-w-[290px] xl:max-w-[310px] h-[280px] rounded-t-[155px] rounded-b-2xl overflow-hidden shadow-[0_12px_28px_rgba(42,36,33,0.06)] ring-1 ring-[#C9A15A]/20 bg-[#F5DEC9]/20">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.03]"
                      />
                      {/* Gentle warm tint overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24211F]/30 via-transparent to-transparent opacity-40 group-hover:opacity-15 transition-opacity duration-500" />
                    </div>

                    {/* Circular White/Cream Icon Badge */}
                    <div className="relative -mt-9 z-30 mb-5 transition-transform duration-500 ease-out group-hover:-translate-y-[3px]">
                      <div className="w-[72px] h-[72px] rounded-full bg-[#FAF5EE] border border-[#C9A15A] shadow-[0_6px_20px_rgba(201,161,90,0.22)] flex items-center justify-center transition-all duration-500 ring-4 ring-[#FBF7F1] group-hover:shadow-[0_10px_26px_rgba(201,161,90,0.32)]">
                        <IconComponent className="w-7 h-7 text-[#C9A15A] stroke-[1.4]" />
                      </div>
                    </div>

                    {/* Step Number: 01, 02, 03, 04 in large elegant serif font */}
                    <div className="font-serif text-[#C9A15A] text-2xl xl:text-[28px] font-normal tracking-wide mb-2.5">
                      {step.step}
                    </div>

                    {/* Title: Elegant serif font, dark charcoal, ~28px */}
                    <h3 className="font-serif text-[#24211F] text-2xl xl:text-[27px] font-normal tracking-tight leading-snug mb-3 group-hover:text-[#C9A15A] transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Gold Accent Underline: smoothly expands on hover */}
                    <div className="w-[38px] h-[1.5px] bg-[#C9A15A] mx-auto mb-4 transition-all duration-500 ease-out group-hover:w-[52px]" />

                    {/* Description: Modern clean sans-serif, max-w-[240px] */}
                    <p className="font-sans text-[#77716B] font-light text-[15px] xl:text-base leading-[1.65] max-w-[240px] mx-auto">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ====================================================
              TABLET & MOBILE RESPONSIVE LAYOUT
              ==================================================== */}
          <div className="block lg:hidden relative mt-4">
            
            {/* Responsive Grid: 2x2 on sm/md tablet, 1 column stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10 max-w-2xl mx-auto">
              {experienceSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const mobileDelay = idx * 0.08;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: mobileDelay, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Tall Rounded-Arch Image Container */}
                    <div className="relative w-[260px] xs:w-[280px] h-[270px] rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-[0_10px_25px_rgba(42,36,33,0.06)] ring-1 ring-[#C9A15A]/20 bg-[#F5DEC9]/20">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24211F]/30 via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Circular White/Cream Icon Badge */}
                    <div className="relative -mt-9 z-20 mb-4">
                      <div className="w-[68px] h-[68px] rounded-full bg-[#FAF5EE] border border-[#C9A15A] shadow-[0_6px_18px_rgba(201,161,90,0.22)] flex items-center justify-center ring-4 ring-[#FBF7F1]">
                        <IconComponent className="w-6 h-6 text-[#C9A15A] stroke-[1.4]" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="font-serif text-[#C9A15A] text-2xl font-normal tracking-wide mb-2">
                      {step.step}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[#24211F] text-2xl font-normal leading-snug mb-2.5">
                      {step.title}
                    </h3>

                    {/* Gold Accent Underline */}
                    <div className="w-[36px] h-[1.5px] bg-[#C9A15A] mx-auto mb-3" />

                    {/* Description */}
                    <p className="font-sans text-[#77716B] font-light text-sm sm:text-[15px] leading-relaxed max-w-[240px] mx-auto">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>






      {/* ==================================================
          10. FINAL CALL TO ACTION ("Ready to Feel Your Best?")
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="relative rounded-4xl overflow-hidden bg-gradient-to-br from-brand-charcoal via-[#231E1C] to-brand-charcoal text-white p-8 sm:p-14 lg:p-20 text-center shadow-2xl border border-brand-gold/40">
          
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-rose/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-brand-gold-light font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
              ✦ Begin Your Ritual ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white">
              Ready to Feel Your Best?
            </h2>

            <p className="text-stone-300 font-sans font-light text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Your beauty moment starts here. Discover the Highlights experience today.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                id="about-cta-book-appointment"
                onClick={handleBook}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold via-[#D8B467] to-brand-gold-dark hover:from-brand-gold-dark hover:to-brand-gold text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_25px_rgba(197,160,89,0.4)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.55)] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Book an Appointment</span>
              </button>

              <button
                id="about-cta-explore-services"
                onClick={() => navigateTo('services')}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-brand-gold/40 hover:border-brand-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-gold-light" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
