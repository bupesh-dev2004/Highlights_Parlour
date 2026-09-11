import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, ShieldCheck, Calendar, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, GALLERY_ITEMS } from '../data';
import { Service } from '../types';
import SocialCards from './ui/card-fan-carousel';

interface HomeProps {
  setCurrentPage?: (page: string) => void;
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

  // Take gallery items for teaser carousel
  const fanCarouselCards = GALLERY_ITEMS.map((item) => ({
    imgUrl: item.imageUrl,
    alt: item.title,
  }));

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
      <section id="hero-banner" className="relative h-[90vh] flex items-start pt-16 sm:items-start sm:pt-[13vh] justify-center sm:justify-start overflow-hidden bg-brand-cream">

        {/* Background Video with Dark Soft Overlay */}
        <div className="absolute inset-0">
          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden sm:block w-full h-full object-cover object-center"
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
            className="block sm:hidden w-full h-full object-cover object-center"
          >
            <source src="/Home page BG for Mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
                delayChildren: 2.0
              }
            }
          }}
          className="relative w-full max-w-4xl mx-auto sm:ml-0 sm:mr-auto px-6 sm:pl-4 sm:pr-0 md:pl-6 lg:pl-8 text-center sm:text-left space-y-4 sm:space-y-6"
        >
          {/* Tagline */}
          <div className="overflow-hidden">
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-brand-rose sm:text-brand-gold-dark font-sans font-semibold text-[10px] sm:text-sm tracking-[0.25em] uppercase block"
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
                className="font-serif text-2xl sm:text-5xl md:text-6xl text-white sm:text-brand-charcoal font-light tracking-tight leading-tight"
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
                className="font-serif text-2xl sm:text-5xl md:text-6xl font-light tracking-tight leading-none"
              >
                <span className="font-serif italic text-brand-rose sm:text-brand-gold-dark">Inner Radiance</span>
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
              className="text-stone-300 sm:text-stone-700 font-sans max-w-[500px] mx-auto sm:ml-0 sm:mr-auto text-xs sm:text-lg font-medium leading-relaxed"
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
              className="flex flex-row justify-center sm:justify-start items-center gap-3 sm:gap-4 pt-1"
            >
              <motion.button
                id="hero-reserve-btn"
                onClick={onReserveClick}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-gold-dark hover:bg-brand-gold text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                Reserve Your Ritual
              </motion.button>
              <motion.button
                id="hero-services-btn"
                onClick={() => setCurrentPage('services')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 sm:bg-brand-charcoal/10 hover:bg-white/20 sm:hover:bg-brand-charcoal/20 text-white sm:text-brand-charcoal border border-white/30 sm:border-brand-charcoal/30 backdrop-blur-xs px-5 py-3 sm:px-8 sm:py-4 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                Explore Services
              </motion.button>
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

      {/* 2. Brand Introduction (Post-Hero Transition) */}
      <motion.section
        id="about-preview"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Editorial Artwork Frame */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-stone-100 to-brand-blush/40 border border-brand-gold/25 shadow-xs transition-all duration-500 group-hover:shadow-md">
              <div className="bg-white rounded-xl p-6 sm:p-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/relaxation.png"
                  alt="The Art of Relaxation - Highlights Makeoverartistry"
                  className="object-contain h-[280px] sm:h-[340px] w-full mix-blend-multiply transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white border border-brand-gold/30 px-5 py-4 rounded-xl shadow-xs hidden sm:block max-w-[190px] text-center z-10">
              <span className="block font-serif text-2xl sm:text-3xl font-light text-brand-gold-dark">100%</span>
              <span className="block text-[9px] text-stone-500 uppercase tracking-[0.2em] mt-1 font-medium">Satisfaction Assured</span>
            </div>
          </div>

          {/* Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
                ✦ The Art of Refinement ✦
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light leading-tight">
                Bespoke Beauty Crafted to Elevate Your Radiance
              </h2>
            </div>

            <p className="text-stone-600 font-sans font-light leading-relaxed text-sm sm:text-base">
              At Highlights Makeoverartistry, beauty is an integrated wellness experience. Every bespoke treatment unites biological active concentrates, cruelty-free formulas, and masterfully calibrated hands inside an elegant, sensory sanctuary.
            </p>

            <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
              Our master artisans specialize in precision balayage, cellular skin therapies, couture bridal looks, and soothing rituals designed for timeless grace and confidence.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                id="about-read-more-btn"
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer hover:shadow-md"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="about-explore-services-btn"
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 border border-brand-gold/40 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold-dark px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                <span>View Full Menu</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Verified Pillars (Why Highlights) */}
      <motion.section
        id="why-highlights"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="bg-white/80 border border-brand-blush rounded-3xl p-6 sm:p-12 shadow-2xs">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
              ✦ Certified Excellence ✦
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-charcoal font-light">
              The Highlights Difference
            </h2>
            <div className="h-[1px] w-14 bg-brand-gold/40 mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlightItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-brand-cream/60 border border-brand-blush/80 hover:border-brand-gold/30 hover:bg-white transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-gold-dark">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 font-sans text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 4. Signature Services Menu Preview */}
      <motion.section
        id="popular-services"
        className="bg-brand-blush/20 py-20 border-y border-brand-blush/50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
              ✦ Curated Beauty Menu ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
              Guest Favorite Rituals
            </h2>
            <div className="h-[1px] w-16 bg-brand-gold/40 mx-auto" />
            <p className="text-stone-500 font-sans font-light text-xs sm:text-sm max-w-lg mx-auto">
              Precision styling, biological skin concentrates, and couture makeup tailored to your personal aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-brand-blush/80 hover:border-brand-gold/40 shadow-2xs hover:shadow-md transition-all duration-400 flex flex-col group"
              >
                <div className="h-60 relative overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-brand-gold-dark shadow-2xs border border-brand-blush">
                    ${service.price}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-brand-charcoal/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-white tracking-widest uppercase font-medium">
                    {service.duration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-brand-gold-dark uppercase tracking-[0.2em] font-semibold block">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-brand-charcoal group-hover:text-brand-gold-dark transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-stone-500 text-xs font-light leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <button
                    id={`book-popular-${service.id}`}
                    onClick={() => onBookService(service)}
                    className="w-full bg-brand-cream hover:bg-brand-charcoal text-brand-charcoal hover:text-white border border-brand-gold/30 hover:border-brand-charcoal text-xs font-semibold py-3 rounded-xl uppercase tracking-widest transition-all duration-300 cursor-pointer text-center"
                  >
                    Reserve Service
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
              className="inline-flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
            >
              <span>Explore Complete Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* 5. Authentic Gallery Teaser (Moments of Transformation with Card Fan Carousel) */}
      <motion.section
        id="gallery-teaser"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 overflow-visible"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-center space-y-3">
          <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
            ✦ Artistry Portfolio ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
            Moments of Transformation
          </h2>
          <p className="text-stone-600 font-sans font-light text-sm sm:text-base max-w-xl mx-auto">
            Explore authentic reflections of our craft — from bespoke balayage to radiant bridal transformations.
          </p>
          <div className="h-[1px] w-16 bg-brand-gold/40 mx-auto" />
        </div>

        {/* Interactive 3D Card Fan Carousel */}
        <div className="w-full overflow-visible py-2">
          <SocialCards
            cards={fanCarouselCards}
            onCardClick={() => {
              if (setCurrentPage) {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />
        </div>

        <div className="text-center pt-2">
          <button
            id="view-full-gallery-btn"
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center space-x-2 text-brand-charcoal hover:text-brand-gold-dark font-semibold text-xs tracking-widest uppercase transition-colors group cursor-pointer border-b border-brand-gold/40 pb-1"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.section>

      {/* 6. Client Testimonials (Verified Customer Feedback) */}
      <motion.section
        id="testimonials"
        className="bg-brand-cream border-y border-brand-blush py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative">
          <div className="space-y-2">
            <span className="text-brand-gold-dark font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
              ✦ Verified Experiences ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light">
              Words From Our Valued Guests
            </h2>
            <div className="h-[1px] w-14 bg-brand-gold/40 mx-auto" />
          </div>

          {/* Testimonial Active Slider Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-blush/80 shadow-2xs space-y-6">
            <div className="flex justify-center space-x-1 text-brand-gold">
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>

            <blockquote className="text-stone-700 font-serif text-lg sm:text-xl font-light italic leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].feedback}"
            </blockquote>

            <div className="flex flex-col items-center space-y-2 pt-2">
              <img
                src={TESTIMONIALS[activeTestimonial].avatar}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="w-13 h-13 rounded-full object-cover ring-2 ring-brand-blush"
                referrerPolicy="no-referrer"
              />
              <div>
                <cite className="block font-sans font-semibold text-sm text-brand-charcoal not-italic">
                  {TESTIMONIALS[activeTestimonial].name}
                </cite>
                <span className="block text-xs text-stone-500 font-light">
                  {TESTIMONIALS[activeTestimonial].role} • {TESTIMONIALS[activeTestimonial].serviceReceived}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center max-w-xs mx-auto">
            <button
              id="prev-testimonial-btn"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold-dark hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-colors cursor-pointer"
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
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? 'w-6 bg-brand-gold-dark' : 'w-2 bg-stone-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              id="next-testimonial-btn"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold-dark hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* 7. Editorial Appointment Booking CTA */}
      <motion.section
        id="reservation-banner"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative rounded-3xl overflow-hidden bg-brand-charcoal text-white p-8 sm:p-14 border border-stone-800 shadow-md">
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="text-brand-gold-light font-sans font-semibold text-xs tracking-[0.25em] uppercase block">
              ✦ Seamless Digital Concierge ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Ready to Experience Your Transformation?
            </h2>
            <p className="text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              Reserve your personalized session online in seconds or connect with our reception concierge on WhatsApp for tailored recommendations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="cta-reserve-ritual-btn"
                onClick={onReserveClick}
                className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
              >
                Book Appointment
              </button>
              <a
                id="cta-whatsapp-concierge-btn"
                href="https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
