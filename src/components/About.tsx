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
  Sparkle
} from 'lucide-react';
import { TESTIMONIALS, GALLERY_ITEMS } from '../data';

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

  // Highlights Experience Steps
  const experienceSteps = [
    {
      step: '01',
      title: 'Step In',
      desc: 'Walk into a warm and welcoming environment.',
    },
    {
      step: '02',
      title: 'Feel Relaxed',
      desc: 'Take a moment for yourself.',
    },
    {
      step: '03',
      title: 'Get Pampered',
      desc: 'Experience professional beauty care.',
    },
    {
      step: '04',
      title: 'Step Out Confident',
      desc: 'Leave feeling refreshed and confident.',
    },
  ];

  const galleryPreview = GALLERY_ITEMS.slice(0, 6);
  const testimonialsPreview = TESTIMONIALS.slice(0, 3);

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
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
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
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-brand-charcoal font-normal leading-[1.12] tracking-tight"
            >
              Where Beauty <br />
              <span className="italic font-light text-brand-gold-dark">Meets Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-600 font-sans font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              At Highlights Parlour, we believe beauty is more than a look — it's the confidence you carry with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5"
            >
              <button
                onClick={scrollToStory}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold via-[#D8B467] to-brand-gold-dark hover:from-brand-gold-dark hover:to-brand-gold text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_25px_rgba(197,160,89,0.35)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.5)] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('services')}
                className="px-7 py-4 rounded-full bg-white hover:bg-brand-blush/60 text-brand-charcoal border border-brand-gold/40 hover:border-brand-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-xs transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <span>Our Services</span>
              </button>
            </motion.div>

            {/* Micro Highlights Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-blush max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal block">12+</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-sans">Years Legacy</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal block">18K+</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-sans">Delighted Guests</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-dark block">4.9★</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-sans">Verified Rating</span>
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
          7. THE HIGHLIGHTS EXPERIENCE (Interactive Steps)
          ================================================== */}
      <section className="bg-brand-blush/40 border-y border-brand-blush py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Your Journey ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
              The Highlights Experience
            </h2>
            <p className="text-stone-600 font-sans font-light text-sm sm:text-base">
              A serene 4-step ritual crafted to rejuvenate your senses from arrival to departure.
            </p>
            <div className="h-0.5 w-16 bg-brand-gold/50 mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-brand-gold/30 -translate-y-6 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {experienceSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white rounded-3xl p-8 border border-brand-gold/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-blush border-2 border-brand-gold/40 flex items-center justify-center font-serif text-xl font-bold text-brand-gold-dark group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 shadow-2xs">
                    {step.step}
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-brand-charcoal">
                    {step.title}
                  </h3>

                  <p className="text-stone-600 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==================================================
          8. SALON GALLERY ("Inside Highlights")
          ================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-blush pb-8">
          <div className="space-y-3">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Visual Sanctuary ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
              Inside Highlights
            </h2>
            <p className="text-stone-600 font-sans font-light text-sm sm:text-base max-w-xl">
              Glimpse into our serene salon spaces, master styling moments, and authentic customer transformations.
            </p>
          </div>

          <button
            onClick={() => navigateTo('gallery')}
            className="inline-flex items-center gap-2 text-brand-gold-dark hover:text-brand-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest transition-colors cursor-pointer group"
          >
            <span>View Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPreview.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => navigateTo('gallery')}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-sm border border-brand-gold/30 hover:border-brand-gold hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-6 space-y-1 text-white transform transition-transform duration-300">
                <span className="text-[10px] text-brand-gold-light uppercase tracking-widest font-sans font-semibold block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 font-sans font-light line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ==================================================
          9. TESTIMONIALS ("Loved by Our Clients")
          ================================================== */}
      <section className="bg-brand-blush/40 border-y border-brand-blush py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Guest Impressions ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
              Loved by Our Clients
            </h2>
            <p className="text-stone-600 font-sans font-light text-sm sm:text-base">
              Real reflections from guests who trusted us with their hair, skin, and milestone memories.
            </p>
            <div className="h-0.5 w-16 bg-brand-gold/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsPreview.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 border border-brand-gold/30 hover:border-brand-gold shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed italic">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-brand-blush">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-brand-gold/40 shadow-2xs"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-brand-charcoal leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-brand-gold-dark font-sans">
                      {item.role || item.serviceReceived}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
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
