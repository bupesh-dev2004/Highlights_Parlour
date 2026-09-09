import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Calendar, ExternalLink, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface ReviewsProps {
  onReserveClick: () => void;
}

export default function Reviews({ onReserveClick }: ReviewsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="space-y-16 py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Real Guest Feedback ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Customer Reviews & Testimonials
        </h1>
        <p className="text-stone-500 font-sans font-light text-sm max-w-xl mx-auto">
          Read genuine feedback from guests who have experienced our biological facials, balayage color transformations, and bridal makeup artistry.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-blush shadow-xs text-center space-y-6">
          <div className="flex justify-center space-x-1 text-brand-gold">
            {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
            ))}
          </div>

          <blockquote className="text-stone-600 font-serif text-lg sm:text-xl font-light italic leading-relaxed">
            "{TESTIMONIALS[activeIdx].feedback}"
          </blockquote>

          <div className="flex flex-col items-center space-y-2 pt-2">
            <img
              src={TESTIMONIALS[activeIdx].avatar}
              alt={TESTIMONIALS[activeIdx].name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-blush"
              loading="lazy"
            />
            <div>
              <cite className="block font-sans font-semibold text-sm text-brand-charcoal not-italic">
                {TESTIMONIALS[activeIdx].name}
              </cite>
              <span className="block text-xs text-brand-gold font-medium">
                {TESTIMONIALS[activeIdx].serviceReceived} • {TESTIMONIALS[activeIdx].role}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center max-w-xs mx-auto pt-4">
            <button
              id="prev-review-btn"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  id={`review-dot-${idx}`}
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${activeIdx === idx ? 'w-6 bg-brand-gold' : 'w-2 bg-stone-300'
                    }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button
              id="next-review-btn"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-2xl font-light text-brand-charcoal">All Verified Guest Reviews</h2>
          <p className="text-stone-500 text-xs font-light">100% verified customer ratings & experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-white border-2 border-brand-blush-dark/50 hover:border-brand-gold rounded-3xl p-6 space-y-4 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-serif text-base font-semibold text-brand-charcoal">{t.name}</h3>
                    <span className="text-[11px] text-stone-400 block">{t.role}</span>
                  </div>
                </div>
                <div className="flex text-brand-gold space-x-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>
              </div>

              <blockquote className="text-stone-600 text-xs font-light leading-relaxed italic">
                "{t.feedback}"
              </blockquote>

              <div className="pt-2 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400 uppercase tracking-wider">
                <span>Service: {t.serviceReceived}</span>
                <span className="text-emerald-700 font-bold">✓ Verified Visit</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews CTA & Booking Banner */}
      <section className="bg-brand-cream border border-brand-blush rounded-3xl p-8 text-center space-y-6 shadow-2xs">
        <div className="space-y-2 max-w-xl mx-auto">
          <h3 className="font-serif text-2xl font-light text-brand-charcoal">Rated 4.9★ on Google Reviews</h3>
          <p className="text-stone-500 text-xs font-light">
            Over 18,000 satisfied guests have experienced the Highlights Makeoverartistry luxury treatment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            id="google-reviews-btn"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-stone-300 hover:border-brand-gold text-brand-charcoal px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Read 500+ Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-brand-gold" />
          </a>

          <button
            id="reviews-book-appointment-btn"
            onClick={onReserveClick}
            className="bg-brand-gold hover:bg-brand-gold-dark text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-2xs cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>
        </div>
      </section>
    </div>
  );
}
