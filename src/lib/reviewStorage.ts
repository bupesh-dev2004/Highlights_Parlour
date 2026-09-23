import { Testimonial } from '../types';
import { TESTIMONIALS as DEFAULT_TESTIMONIALS } from '../data';

const STORAGE_KEY = 'highlights_customer_reviews';

/**
 * Get all reviews combining default verified testimonials and customer submissions
 */
export function getStoredReviews(): Testimonial[] {
  if (typeof window === 'undefined') return DEFAULT_TESTIMONIALS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_TESTIMONIALS;
    const userReviews: Testimonial[] = JSON.parse(raw);
    // User-submitted reviews first, followed by default verified reviews
    return [...userReviews, ...DEFAULT_TESTIMONIALS];
  } catch (e) {
    console.error('Failed to load reviews from localStorage', e);
    return DEFAULT_TESTIMONIALS;
  }
}

/**
 * Save a newly submitted customer review to the persistent store
 */
export function saveCustomerReview(review: Omit<Testimonial, 'id'>): Testimonial {
  const newReview: Testimonial = {
    ...review,
    id: `rev-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const existing: Testimonial[] = raw ? JSON.parse(raw) : [];
    existing.unshift(newReview);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    
    // Dispatch custom event so all active components (Home, Reviews, etc.) sync in real-time
    window.dispatchEvent(new CustomEvent('highlights_reviews_updated'));
  } catch (e) {
    console.error('Failed to save review to localStorage', e);
  }

  return newReview;
}
