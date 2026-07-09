export interface Service {
  id: string;
  name: string;
  category: 'Hair' | 'Skin' | 'Nails' | 'Bridal' | 'Spa' | 'Makeup';
  description: string;
  duration: string; // e.g., "60 mins"
  price: number; // in USD
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialization: string;
  photo: string;
  bio: string;
  rating: number;
  availableDays: string[]; // e.g. ["Monday", "Tuesday", ...] or specific dates
  availableSlots: string[]; // e.g. ["09:00 AM", "10:30 AM", ...]
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
  date: string; // YYYY-MM-DD
  time: string; // HH:MM AM/PM
  customerDetails: CustomerDetails;
  totalPrice: number;
  createdAt: string;
}

export interface MembershipPlan {
  tier: 'Silver' | 'Gold' | 'Platinum';
  price: number; // e.g. 99, 199, 299
  period: string; // e.g., "month"
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
  category: 'Hair' | 'Skin' | 'Nails' | 'Spa' | 'Bridal' | 'Makeup';
  imageUrl: string;
  isBeforeAfter?: boolean;
  beforeUrl?: string;
  afterUrl?: string;
  isVideo?: boolean;
  videoUrl?: string;
}
