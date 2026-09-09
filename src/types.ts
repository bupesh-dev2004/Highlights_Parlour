export interface Service {
  id: string;
  name: string;
  category: 'Haircut & Hairstyling' | 'Hair Color & Highlights' | 'Facial & Cleanup' | 'Hair Spa' | 'Bridal Makeup' | 'Party Makeup' | 'Manicure & Pedicure' | 'Waxing' | 'Threading' | 'Nail Art' | 'Skin Treatments' | 'Men’s Grooming';
  description: string;
  duration: string; // e.g., "60 mins"
  price: number; // in USD or INR
  image: string;
  features?: string[];
}

export interface PackageItem {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  duration: string;
  includedServices: string[];
  image: string;
  popular?: boolean;
}

export interface OfferItem {
  id: string;
  title: string;
  code: string;
  description: string;
  discountBadge: string;
  expiryDate?: string;
  terms: string;
  bgColor?: string;
}

export interface BrandItem {
  id: string;
  name: string;
  category: 'Hair Care' | 'Skincare' | 'Makeup' | 'Nail Care';
  description: string;
  logo: string;
  featuredProduct: string;
}

export interface BeautyTip {
  id: string;
  title: string;
  category: 'Hair Care' | 'Skincare' | 'Bridal Prep' | 'Nail Care' | 'Seasonal Beauty';
  readTime: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export interface BridalShowcaseItem {
  id: string;
  title: string;
  category: 'Bridal Makeup' | 'Engagement' | 'Reception' | 'Party Makeup' | 'HD Makeup' | 'Hairstyling' | 'Saree Draping';
  image: string;
  description: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialization: string;
  photo: string;
  bio: string;
  rating: number;
  experienceYears: number;
  availableDays: string[];
  availableSlots: string[];
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export interface Booking {
  id: string;
  services: Service[];
  stylist: Stylist;
  date: string;
  time: string;
  customerDetails: CustomerDetails;
  totalPrice: number;
  createdAt: string;
}

export interface MembershipPlan {
  tier: 'Silver' | 'Gold' | 'Platinum';
  price: number;
  period: string;
  features: string[];
  popular: boolean;
  color: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  avatar: string;
  serviceReceived: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Salon Interior' | 'Hair Transformations' | 'Bridal Makeup' | 'Party Makeup' | 'Nail Art' | 'Skincare' | 'Before & After' | 'Team';
  imageUrl: string;
  caption?: string;
  isBeforeAfter?: boolean;
  beforeUrl?: string;
  afterUrl?: string;
}

