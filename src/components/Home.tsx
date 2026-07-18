import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, ShieldCheck, Calendar, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, GALLERY_ITEMS } from '../data';
import { Service } from '../types';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  onReserveClick: () => void;
  onBookService: (service: Service) => void;
}

export default function Home({ setCurrentPage, onReserveClick, onBookService }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Take first 6 popular services
  const popularServices = SERVICES.slice(0, 6);

  // Take 6 gallery items for teaser
  const galleryTeaser = GALLERY_ITEMS.slice(0, 6);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const highlightItems = [
    {
      icon: Award,
      title: 'Certified Experts',
      desc: 'Formally accredited international artisans',
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      desc: '100% organic, botanical, luxury lines',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Environment',
      desc: 'Medical-grade autoclaving & sterilization',
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      desc: 'Seamless, instant digital scheduling',
    },
  ];

  return (
    <div className="space-y-24 pb-20">

      {/* 1. Hero Banner */}
      <section id="hero-banner" className="relative h-[90vh] flex items-start pt-8 sm:items-center sm:pt-0 justify-center sm:justify-start overflow-hidden bg-stone-900">

        {/* Background Video with Dark Soft Overlay */}
        <div className="absolute inset-0">
          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden sm:block w-full h-full object-cover object-center opacity-75"
          >
            <source src="/Home page BG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block sm:hidden w-full h-full object-cover object-center opacity-75"
          >
            <source src="/Home page BG for Mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/30 sm:to-transparent" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: isMobile ? 2.0 : 0.5
              }
            }
          }}
          className="relative w-full max-w-4xl mx-auto sm:ml-0 sm:mr-auto px-6 sm:px-12 md:pl-12 lg:pl-16 text-center sm:text-left space-y-4 sm:space-y-6"
        >
          {/* Tagline */}
          <div className="overflow-hidden">
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-brand-rose font-sans font-semibold text-[10px] sm:text-sm tracking-[0.25em] uppercase block"
            >
              ✦ Welcome to Highlights Makeoverartistry ✦
            </motion.span>
          </div>

          {/* Heading - Line by Line */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-serif text-2xl sm:text-6xl md:text-7xl text-white font-light tracking-tight leading-tight"
              >
                Restore Your Natural
              </motion.h1>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h1
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-serif text-2xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none"
              >
                <span className="font-serif italic text-brand-rose">Inner Radiance</span>
              </motion.h1>
            </div>
          </div>

          {/* Description */}
          <div className="overflow-hidden">
            <motion.p
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-stone-300 font-sans max-w-md mx-auto sm:max-w-2xl sm:mx-0 text-xs sm:text-lg font-light leading-relaxed"
            >
              A high-end sanctuary in Beverly Hills. Experience personalized biological facials, couture hair coloring, and relaxing hot stone rituals.
            </motion.p>
          </div>

          {/* Buttons */}
          <div className="overflow-hidden py-1">
            <motion.div
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-row justify-center sm:justify-start items-center gap-3 sm:gap-4"
            >
              <button
                id="hero-reserve-btn"
                onClick={onReserveClick}
                className="bg-brand-gold hover:bg-brand-gold-dark text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-[9px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Reserve Your Ritual
              </button>
              <button
                id="hero-services-btn"
                onClick={() => setCurrentPage('services')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-[9px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                Explore Services
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[10px] text-white tracking-widest uppercase font-light">Scroll Down</span>
          <div className="w-[1px] h-8 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-brand-rose animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Short About Us preview */}
      <motion.section
        id="about-preview"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-3xl bg-brand-blush/60 -z-1" />

            {/* Golden Gradient Shine Border Wrapper */}
            <div className="relative p-[3px] rounded-[32px] bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01] animate-gold-flow">
              <div className="bg-white rounded-[29px] p-8 flex items-center justify-center overflow-hidden">
                <img
                  src="/relaxation.png"
                  alt="The Art of Relaxation Logo"
                  className="object-contain h-[350px] w-full mix-blend-multiply transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white border border-brand-blush p-6 rounded-2xl shadow-xs hidden sm:block max-w-[200px] text-center z-10">
              <span className="block font-serif text-3xl font-semibold text-brand-gold">100%</span>
              <span className="block text-[10px] text-stone-500 uppercase tracking-widest mt-1">Satisfaction Assured</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ The Art of Relaxation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light leading-tight">
              Bespoke Beauty Treatments Designed to Elevate Your Wellness
            </h2>
            <p className="text-stone-600 font-sans font-light leading-relaxed text-sm sm:text-base">
              Founded on the belief that beauty is an integrated wellness experience, Aura offers high-performance care inside a serene, sensory oasis. Every treatment incorporates cruelty-free, biological active concentrates and masterfully calibrated hands.
            </p>
            <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
              Our experts specialize in modern hair balayage techniques, cellular skin therapies, restorative Himalayan rock-salt pedicures, and customized bridal services designed for photogenic longevity.
            </p>
            <div className="pt-2">
              <button
                id="about-read-more-btn"
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-gold-dark font-semibold text-xs tracking-widest uppercase transition-colors group cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 3. Popular Services Grid */}
      <motion.section
        id="popular-services"
        className="bg-brand-blush/30 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Guest Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light">
              Our Most Popular Rituals
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-brand-blush/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="h-64 relative overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-brand-gold">
                    ${service.price}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-brand-gold uppercase tracking-widest font-medium">
                      {service.category} • {service.duration}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-brand-charcoal">{service.name}</h3>
                    <p className="text-stone-500 text-xs font-light leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <button
                    id={`book-popular-${service.id}`}
                    onClick={() => onBookService(service)}
                    className="w-full bg-brand-cream hover:bg-brand-blush border border-brand-gold/30 text-brand-gold hover:text-brand-gold-dark text-xs font-semibold py-3 rounded-xl uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              id="all-services-btn"
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </motion.section>

      {/* 4. Gallery Teaser */}
      <motion.section
        id="gallery-teaser"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-center space-y-3">
          <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
            ✦ Visual Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light">
            An Inside Look at Aura Luxury
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryTeaser.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer group"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] text-brand-rose font-medium tracking-widest uppercase">{item.category}</span>
                <h4 className="font-serif text-base sm:text-lg font-light tracking-wide mt-1">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            id="view-full-gallery-btn"
            onClick={() => {
              setCurrentPage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-gold-dark font-semibold text-xs tracking-widest uppercase transition-colors group cursor-pointer"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.section>

      {/* 5. Client Testimonials Slider */}
      <motion.section
        id="testimonials"
        className="bg-brand-cream border-y border-brand-blush/60 py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >

        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-brand-blush/40 blur-xl" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-brand-rose/25 blur-xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative">

          <div className="space-y-2">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Customer Stories
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
              Voices of True Comfort
            </h2>
          </div>

          {/* Testimonial Active Slider Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-blush shadow-xs space-y-6">

            {/* Stars */}
            <div className="flex justify-center space-x-1 text-brand-gold">
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold" />
              ))}
            </div>

            <blockquote className="text-stone-600 font-serif text-lg sm:text-xl font-light italic leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].feedback}"
            </blockquote>

            <div className="flex flex-col items-center space-y-2 pt-4">
              <img
                src={TESTIMONIALS[activeTestimonial].avatar}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-blush"
                referrerPolicy="no-referrer"
              />
              <div>
                <cite className="block font-sans font-semibold text-sm text-brand-charcoal not-italic">
                  {TESTIMONIALS[activeTestimonial].name}
                </cite>
                <span className="block text-xs text-stone-400">
                  {TESTIMONIALS[activeTestimonial].role}
                </span>
              </div>
            </div>

          </div>

          {/* Navigation Arrows & Slider Dots */}
          <div className="flex justify-between items-center max-w-xs mx-auto">
            <button
              id="prev-testimonial-btn"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  id={`testimonial-dot-${idx}`}
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${activeTestimonial === idx ? 'w-6 bg-brand-gold' : 'bg-stone-300'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              id="next-testimonial-btn"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </motion.section>

      {/* 6. Membership Promo Banner */}
      <motion.section
        id="membership-promo"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative rounded-3xl overflow-hidden bg-brand-charcoal text-white p-8 sm:p-16 border border-brand-charcoal shadow-lg">

          {/* Delicate golden accent patterns */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-gold opacity-15 skew-x-12 translate-x-16 pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-brand-rose font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Exclusive Club Benefits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight">
              Aura Memberships: Tailored Luxuries on Repeat
            </h2>
            <p className="text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              Unlock priority bookings, complimentary spa rituals, and up to 20% savings on elite skincare products. Treat yourself to the regular restoration you deserve. Plans start at just $79/month.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                id="membership-promo-btn"
                onClick={() => {
                  setCurrentPage('membership');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-brand-rose hover:bg-brand-rose/90 text-brand-charcoal px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
              >
                Explore Member Plans
              </button>
              <button
                id="loyalty-learn-btn"
                onClick={() => {
                  setCurrentPage('membership');
                  setTimeout(() => {
                    const el = document.getElementById('loyalty-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-transparent border border-white/40 hover:border-white text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
              >
                Loyalty Point System
              </button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
