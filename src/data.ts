import { Service, Stylist, MembershipPlan, Testimonial, FAQItem, GalleryItem } from './types';

export const SERVICES: Service[] = [
  // Hair Category
  {
    id: 'h1',
    name: 'Balayage & Couture Colour',
    category: 'Hair',
    description: 'Bespoke hand-painted highlights tailored to your skin tone, finished with a signature luxury gloss.',
    duration: '150 mins',
    price: 180,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'h2',
    name: 'Signature Cut & Blow Dry',
    category: 'Hair',
    description: 'Precision cut designed to enhance natural movement, followed by our iconic high-volume blow-dry.',
    duration: '60 mins',
    price: 85,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80'
  },
  
  // Skin Category
  {
    id: 's1',
    name: 'Radiance Glow Gold Facial',
    category: 'Skin',
    description: '24K gold-infused luxury treatment that hydrates, firms, and promotes a youthful, glowing complexion.',
    duration: '75 mins',
    price: 130,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    name: 'Hydra-Firm Lift Therapy',
    category: 'Skin',
    description: 'Advanced non-invasive deep exfoliation and peptide infusion to instantly plump and contour the face.',
    duration: '60 mins',
    price: 145,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80'
  },

  // Nails Category
  {
    id: 'n1',
    name: 'Luxury Gel Manicure & Hand Spa',
    category: 'Nails',
    description: 'Precision shaping, cuticle therapy, organic salt scrub, hot stone massage, and long-lasting premium gel color.',
    duration: '45 mins',
    price: 55,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'n2',
    name: 'Aura Signature Pedicure',
    category: 'Nails',
    description: 'Relaxing botanical milk soak, sugarcane scrub, deep skin hydration mask, and flawless finish polish.',
    duration: '60 mins',
    price: 65,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80'
  },

  // Bridal Category
  {
    id: 'b1',
    name: 'The Royal Bridal Package',
    category: 'Bridal',
    description: 'The ultimate wedding day experience. Includes trial, bridal hair couture, HD airbrush makeup, and hand embellishments.',
    duration: '240 mins',
    price: 450,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
  },

  // Spa Category
  {
    id: 'sp1',
    name: 'Deep Tissue Zen Massage',
    category: 'Spa',
    description: 'Therapeutic pressure massage infused with warm lavender and eucalyptus oils to dissolve muscle knots.',
    duration: '75 mins',
    price: 120,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sp2',
    name: 'Himalayan Hot Stone Ritual',
    category: 'Spa',
    description: 'Soothing ritual utilizing mineral-rich heated salt stones to restore balance and calm the nervous system.',
    duration: '90 mins',
    price: 150,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80'
  },

  // Makeup Category
  {
    id: 'm1',
    name: 'Red Carpet HD Makeup',
    category: 'Makeup',
    description: 'Sleek, red-carpet-worthy contour and highlighting using ultra-high-definition, long-wear cosmetic formulations.',
    duration: '75 mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'st1',
    name: 'Elena Rostova',
    role: 'Creative Director & Hair Artist',
    specialization: 'Balayage, Precision Cuts, Couture Styling',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'With over 12 years of experience in London and Paris, Elena crafts tailored styles that look effortless and modern.',
    rating: 4.9,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    availableSlots: ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM']
  },
  {
    id: 'st2',
    name: 'Marcus Vane',
    role: 'Senior Hair Artisan',
    specialization: 'Edgy Crops, Men’s Grooming, Texturized Styles',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Marcus has styled for international fashion weeks and is passionate about structured cuts that turn heads.',
    rating: 4.8,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableSlots: ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '05:00 PM']
  },
  {
    id: 'st3',
    name: 'Dr. Sarah Lin',
    role: 'Lead Aesthetician & Skin Expert',
    specialization: 'Hydra-facials, Anti-aging, Micro-dermabrasion',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Sarah holds a degree in dermatology aesthetics and creates personalized skincare regimens for radiant cellular health.',
    rating: 5.0,
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    availableSlots: ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM']
  },
  {
    id: 'st4',
    name: 'Amara Watson',
    role: 'Master Nail Artist & Makeup Stylist',
    specialization: 'Nail Artistry, Bridal Cosmetics, HD Airbrush',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Amara specializes in delicate hand designs and flawless bridal glows. Her work is featured in leading bridal logs.',
    rating: 4.9,
    availableDays: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableSlots: ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '04:30 PM']
  }
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    tier: 'Silver',
    price: 79,
    period: 'month',
    features: [
      '1 Signature Haircut or Blow-dry per month',
      '1 Express Glowing Facial per month',
      '10% Off on all additional services',
      'Priority bookings on weekdays',
      'Complimentary organic green tea & espresso'
    ],
    popular: false,
    color: 'bg-stone-100 border-stone-300',
    accentColor: 'text-stone-600'
  },
  {
    tier: 'Gold',
    price: 149,
    period: 'month',
    features: [
      'Unlimited Cut, Color & Styling (Max 2/month)',
      '1 Radiance Gold Facial or Spa session',
      '1 Complimentary Luxury Manicure',
      '15% Off on all additional services & products',
      'Free rescheduling up to 4 hours prior',
      'Exclusive member-only event invitations'
    ],
    popular: true,
    color: 'bg-brand-blush/40 border-brand-rose',
    accentColor: 'text-brand-gold'
  },
  {
    tier: 'Platinum',
    price: 249,
    period: 'month',
    features: [
      'Unlimited Hair & Skincare Services',
      '1 Premium 90-min Himalayan Hot Stone Spa',
      'Unlimited Luxury Manicures & Pedicures',
      '20% Off on all boutique products',
      'Guaranteed same-day priority booking',
      'Dedicated private suite & complimentary champagne',
      '1 Free guest pass per month'
    ],
    popular: false,
    color: 'bg-brand-charcoal text-white border-brand-charcoal',
    accentColor: 'text-brand-rose'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Charlotte Vance',
    role: 'Loyal Gold Member',
    feedback: 'Aura is an absolute sanctuary! From the blush pink decor to the soothing aromatherapy, every visit is pure bliss. Elena transformed my flat locks into a rich, hand-painted balayage masterpiece. The hospitality is unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Isabella Mercer',
    role: 'Bridal Client',
    feedback: 'For my wedding, I booked the Royal Bridal Package. Amara and Dr. Sarah made me feel like royalty. My skin had an incredible dewiness that lasted all night, and my hair stayed flawless through six hours of dancing!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Sophia Sterling',
    role: 'Weekly Spa Client',
    feedback: 'The Himalayan Hot Stone Ritual is deeply therapeutic. The therapist has magic hands, and the ambiance makes you instantly forget about all your stress. Highly recommend getting a monthly membership.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Golden Balayage Blend',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    title: 'Dewy Cellular Facials',
    category: 'Skin',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    title: 'Blush & Gold Foil Gel Nails',
    category: 'Nails',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g4',
    title: 'Himalayan Healing Suite',
    category: 'Spa',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    title: 'Ethereal Bridal Styling',
    category: 'Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    title: 'Hollywood Smokey Glamour',
    category: 'Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How far in advance should I book my appointment?',
    answer: 'We recommend booking 1-2 weeks in advance for regular services and at least 2-3 months in advance for complex bridal packages or group spa days to secure your preferred stylist and time.',
    category: 'Booking'
  },
  {
    id: 'faq2',
    question: 'What is your cancellation or rescheduling policy?',
    answer: 'We require a minimum of 24 hours notice for any cancellations or reschedules. Gold and Platinum members enjoy a relaxed 4-hour window, while standard bookings cancelled under 24 hours may incur a small fee.',
    category: 'Booking'
  },
  {
    id: 'faq3',
    question: 'What premium product lines do you use?',
    answer: 'We exclusively stock and style with luxury, organic, and cruelty-free lines including Oribe and Kérastase for hair, Biologique Recherche and Tata Harper for skincare, and Smith & Cult for nails.',
    category: 'Products'
  },
  {
    id: 'faq4',
    question: 'Can I purchase a membership plan as a gift card?',
    answer: 'Absolutely! Our Silver, Gold, and Platinum memberships make beautiful gifts. You can customize a beautiful physical gift card envelope at our reception desk or send a luxurious digital gift certificate instantly.',
    category: 'Membership'
  },
  {
    id: 'faq5',
    question: 'Do you offer custom trial sessions for brides?',
    answer: 'Yes! All our bridal and high-glam makeup packages include a comprehensive 2-hour consultation and trial session with your lead stylist, where we customize skin tones, veil draping, and try multiple hair styling forms.',
    category: 'Bridal'
  }
];

export const BEFORE_AFTER = {
  title: 'Luxury Hair Volumizing & Couture Colour',
  description: 'A 4-hour masterclass in restoration. Our client received an advanced hair cuticle treatment, subtle warm-gold balayage, and a signature textured layers blowdry.',
  beforeUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  afterUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
};

export const REELS = [
  {
    id: 'r1',
    title: 'A Day of Pampering in the Aura Oasis',
    duration: '0:45',
    thumbnail: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80',
    videoPlaceholderUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'r2',
    title: 'Couture Balayage Hand-Painting Techniques',
    duration: '1:12',
    thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80',
    videoPlaceholderUrl: 'https://www.w3schools.com/html/movie.mp4'
  }
];
