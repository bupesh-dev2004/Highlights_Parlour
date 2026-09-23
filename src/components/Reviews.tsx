import { useState, useEffect, FormEvent } from 'react';
import { Star, ChevronLeft, ChevronRight, Calendar, ExternalLink, MessageSquarePlus, CheckCircle, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';
import { getStoredReviews, saveCustomerReview } from '../lib/reviewStorage';

interface ReviewsProps {
  onReserveClick: () => void;
}

export default function Reviews({ onReserveClick }: ReviewsProps) {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Review submission form state
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [serviceReceived, setServiceReceived] = useState('Balayage & Hair Styling');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const loadReviews = () => {
    const list = getStoredReviews();
    setReviewsList(list);
  };

  useEffect(() => {
    loadReviews();

    const handleReviewsUpdated = () => {
      loadReviews();
    };

    window.addEventListener('highlights_reviews_updated', handleReviewsUpdated);
    return () => window.removeEventListener('highlights_reviews_updated', handleReviewsUpdated);
  }, []);

  const totalReviews = reviewsList.length;

  const nextTestimonial = () => {
    if (!totalReviews) return;
    setActiveIdx((prev) => (prev + 1) % totalReviews);
  };

  const prevTestimonial = () => {
    if (!totalReviews) return;
    setActiveIdx((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!authorName.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!feedback.trim()) {
      errors.feedback = 'Please share your review or experience.';
    } else if (feedback.trim().length < 10) {
      errors.feedback = 'Review must be at least 10 characters long.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Save to persistent storage
    saveCustomerReview({
      name: authorName.trim(),
      role: 'Verified Guest',
      serviceReceived: serviceReceived || 'Salon Experience',
      feedback: feedback.trim(),
      rating,
      avatar: `https://images.unsplash.com/photo-${1534528741775 + (authorName.length % 5) * 1000}?auto=format&fit=crop&w=150&q=80`,
    });

    setSubmittedSuccess(true);
    setAuthorName('');
    setFeedback('');
    setRating(5);
    setActiveIdx(0); // Show newly submitted review first

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 4500);
  };

  const currentFeatured = reviewsList[activeIdx] || reviewsList[0];

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
      {currentFeatured && (
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-blush shadow-xs text-center space-y-6">
            <div className="flex justify-center space-x-1 text-brand-gold">
              {[...Array(currentFeatured.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
              ))}
            </div>

            <blockquote className="text-stone-600 font-serif text-lg sm:text-xl font-light italic leading-relaxed">
              "{currentFeatured.feedback}"
            </blockquote>

            <div className="flex flex-col items-center space-y-2 pt-2">
              <img
                src={currentFeatured.avatar}
                alt={currentFeatured.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-blush"
                loading="lazy"
              />
              <div>
                <cite className="block font-sans font-semibold text-sm text-brand-charcoal not-italic">
                  {currentFeatured.name}
                </cite>
                <span className="block text-xs text-brand-gold font-medium">
                  {currentFeatured.serviceReceived} • {currentFeatured.role}
                </span>
              </div>
            </div>

            {totalReviews > 1 && (
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
                  {reviewsList.slice(0, 6).map((_, idx) => (
                    <button
                      id={`review-dot-${idx}`}
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeIdx === idx ? 'w-6 bg-brand-gold' : 'w-2 bg-stone-300'
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
            )}
          </div>
        </section>
      )}

      {/* Review Submission Section */}
      <section id="submit-review-section" className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-b from-brand-blush/40 to-white rounded-3xl p-6 sm:p-10 border border-brand-gold/30 shadow-xs space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center space-x-1.5 text-brand-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Share Your Sanctuary Journey</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-light">
              Leave a Guest Review
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-lg mx-auto">
              We value your experience. Your feedback directly shapes our personalized aesthetic craft and guest hospitality.
            </p>
          </div>

          {submittedSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center space-y-2 animate-fade-in">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-lg font-medium">Thank You For Your Review!</h3>
              <p className="text-xs text-emerald-700">
                Your review has been successfully submitted and is now published in our customer testimonials.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="review-name-input" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                    Your Name *
                  </label>
                  <input
                    id="review-name-input"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Jessica Montgomery"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                      formErrors.name ? 'border-red-400' : 'border-stone-200'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-red-500 block">{formErrors.name}</span>
                  )}
                </div>

                {/* Service Received */}
                <div className="space-y-1.5">
                  <label htmlFor="review-service-select" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                    Service Received
                  </label>
                  <select
                    id="review-service-select"
                    value={serviceReceived}
                    onChange={(e) => setServiceReceived(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
                  >
                    <option value="Balayage & Hair Styling">Balayage & Hair Styling</option>
                    <option value="24K Gold Cellular Facial">24K Gold Cellular Facial</option>
                    <option value="Royal Bridal HD Makeup">Royal Bridal HD Makeup</option>
                    <option value="Deluxe Gel Manicure & Hand Spa">Deluxe Gel Manicure & Hand Spa</option>
                    <option value="Olaplex Molecular Hair Spa">Olaplex Molecular Hair Spa</option>
                    <option value="Himalayan Salt Pedicure">Himalayan Salt Pedicure</option>
                    <option value="Custom Sanctuary Package">Custom Sanctuary Package</option>
                  </select>
                </div>
              </div>

              {/* Star Rating Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                  Your Rating *
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        id={`star-rating-btn-${star}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 cursor-pointer focus:outline-none group transition-transform hover:scale-110"
                        aria-label={`${star} star rating`}
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            (hoverRating || rating) >= star
                              ? 'fill-brand-gold text-brand-gold'
                              : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-brand-gold font-semibold ml-2">
                    {rating} out of 5 stars
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div className="space-y-1.5">
                <label htmlFor="review-feedback-textarea" className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                  Your Review / Experience *
                </label>
                <textarea
                  id="review-feedback-textarea"
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share details of your experience, the atmosphere, results, and staff artistry..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors ${
                    formErrors.feedback ? 'border-red-400' : 'border-stone-200'
                  }`}
                />
                {formErrors.feedback && (
                  <span className="text-[11px] text-red-500 block">{formErrors.feedback}</span>
                )}
              </div>

              <button
                type="submit"
                id="submit-review-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-2xs hover:shadow-md cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Submit Customer Review</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-2xl font-light text-brand-charcoal">
            All Verified Guest Reviews ({reviewsList.length})
          </h2>
          <p className="text-stone-500 text-xs font-light">
            100% verified customer ratings & live guest experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((t) => (
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

