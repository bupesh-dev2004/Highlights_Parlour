import { Service, Stylist, MembershipPlan, Testimonial, FAQItem, GalleryItem, PackageItem, OfferItem, BrandItem, BeautyTip, BridalShowcaseItem } from './types';

export const SERVICES: Service[] = [
  // 1. Haircut and Hairstyling
  {
    id: 'h1',
    name: 'Signature Cut & Luxury Blow-Dry',
    category: 'Haircut & Hairstyling',
    description: 'Precision face-framing haircut customized for your hair texture, finished with high-volume couture styling.',
    duration: '60 mins',
    price: 85,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
    features: ['Custom consultation', 'Scalp detox wash', 'Thermal protection styling']
  },
  {
    id: 'h2',
    name: 'Couture Glam Waves & Updo',
    category: 'Haircut & Hairstyling',
    description: 'Red-carpet Hollywood waves, intricate braids, or elegant chignons crafted for special occasions.',
    duration: '75 mins',
    price: 95,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    features: ['Long-lasting setting spray', 'Volumizing texture mist']
  },

  // 2. Hair Color and Highlights
  {
    id: 'hc1',
    name: 'Balayage & Couture Glossing',
    category: 'Hair Color & Highlights',
    description: 'Bespoke hand-painted dimensional highlights tailored to your skin tone, finished with a signature shine glaze.',
    duration: '150 mins',
    price: 180,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    features: ['Bond builder treatment', 'Custom toner glaze', 'Color lock seal']
  },
  {
    id: 'hc2',
    name: 'Root Touch-Up & Radiant Shine',
    category: 'Hair Color & Highlights',
    description: '100% gray coverage or root refresh using organic ammonia-free pigment formulations.',
    duration: '90 mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    features: ['Organic pigment formulation', 'Scalp barrier protection']
  },

  // 3. Facial and Cleanup
  {
    id: 'f1',
    name: 'Radiance Glow 24K Gold Facial',
    category: 'Facial & Cleanup',
    description: '24K pure gold-infused luxury facial that deeply hydrates, firms, and revives tired skin.',
    duration: '75 mins',
    price: 130,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    features: ['24K gold foil infusion', 'Lymphatic face drainage massage']
  },
  {
    id: 'f2',
    name: 'Deep Pore Clarifying Cleanup',
    category: 'Facial & Cleanup',
    description: 'Ultrasonic blackhead extraction, botanical steam detox, and soothing algae mask.',
    duration: '45 mins',
    price: 70,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    features: ['Ultrasonic extraction', 'Tea tree soothing mist']
  },

  // 4. Hair Spa
  {
    id: 'hs1',
    name: 'Olaplex Molecular Hair Spa',
    category: 'Hair Spa',
    description: 'Deep structural hair repair therapy targeting chemical, thermal, and mechanical damage.',
    duration: '60 mins',
    price: 105,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    features: ['Olaplex No.1 & No.2 intense treatment', 'Hot towel aromatherapy wrap']
  },

  // 5. Bridal Makeup
  {
    id: 'bm1',
    name: 'The Royal Maharani Bridal HD Makeup',
    category: 'Bridal Makeup',
    description: 'HD airbrush makeup, mink lash application, contouring, and 16-hour sweatproof setting.',
    duration: '180 mins',
    price: 350,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80',
    features: ['Includes pre-bridal trial', 'Lash extensions included', 'Lip touchup kit']
  },

  // 6. Party Makeup
  {
    id: 'pm1',
    name: 'Glamour Party HD Makeup',
    category: 'Party Makeup',
    description: 'Sleek red-carpet contouring, smokey eye or subtle dewy glow for cocktail parties & weddings.',
    duration: '75 mins',
    price: 110,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    features: ['Custom lash accent', 'Waterproof finish']
  },

  // 7. Manicure and Pedicure
  {
    id: 'mp1',
    name: 'Luxury Gel Manicure & Hand Spa',
    category: 'Manicure & Pedicure',
    description: 'Nail shaping, cuticle restoration, organic exfoliation, hot stone massage, and long-lasting gel polish.',
    duration: '50 mins',
    price: 55,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
    features: ['Organic sugarcane scrub', 'Gel LED cure']
  },
  {
    id: 'mp2',
    name: 'Himalayan Salt Pedicure Ritual',
    category: 'Manicure & Pedicure',
    description: 'Botanical milk foot bath, Himalayan rock salt scrub, deep moisturizing paraffin wrap.',
    duration: '60 mins',
    price: 65,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80',
    features: ['Warm stone foot massage', 'Callus smoothing']
  },

  // 8. Waxing
  {
    id: 'w1',
    name: 'Rica Liposoluble Full Body Waxing',
    category: 'Waxing',
    description: 'Ultra-gentle Italian Rica strip & stripless wax infused with argan oil for painless, silky smooth skin.',
    duration: '75 mins',
    price: 90,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    features: ['After-wax calming lotion', 'For sensitive skin types']
  },

  // 9. Threading
  {
    id: 't1',
    name: 'Precision Eyebrow & Facial Threading',
    category: 'Threading',
    description: 'Artisan eyebrow shaping and facial threading using 100% antibacterial cotton thread.',
    duration: '20 mins',
    price: 25,
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=600&q=80',
    features: ['Aloe vera soothing massage', 'Precision symmetry mapping']
  },

  // 10. Nail Art
  {
    id: 'na1',
    name: '3D Couture Gel Nail Artistry',
    category: 'Nail Art',
    description: 'Custom hand-painted designs, chrome foils, Swarovski crystal accents, and acrylic extension sculpting.',
    duration: '75 mins',
    price: 75,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80',
    features: ['Custom design palette', 'Chip-resistant topcoat']
  },

  // 11. Skin Treatments
  {
    id: 'st1',
    name: 'Hydra-Firm Bio-Peptide Lift Therapy',
    category: 'Skin Treatments',
    description: 'Micro-dermabrasion exfoliation coupled with hyaluronic acid micro-infusion for instant plumpness.',
    duration: '60 mins',
    price: 145,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    features: ['Micro-current muscle stimulation', 'Peptide serum infuser']
  },

  // 12. Men’s Grooming
  {
    id: 'mg1',
    name: 'Executive Beard Sculpt & Charcoal Detox',
    category: 'Men’s Grooming',
    description: 'Hot towel straight-razor shave or beard trim accompanied by a purifying activated charcoal face mask.',
    duration: '45 mins',
    price: 65,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    features: ['Hot towel eucalyptus steam', 'Precision blade finish']
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'p-bridal',
    title: 'The Royal Maharani Bridal Package',
    category: 'Bridal',
    description: 'Comprehensive wedding day transformation. Includes makeup trial, HD airbrush makeup, couture hairstyle, saree/dupatta draping, and body glow polish.',
    price: 499,
    originalPrice: 650,
    discountPercentage: 23,
    duration: '300 mins',
    includedServices: [
      'HD Airbrush Bridal Makeup & Lashes',
      'Couture Wedding Updo & Hair Accessories',
      'Full Body Gold Radiance Polish',
      'Bridal Nail Art & Deluxe Gel Manicure',
      'Precision Saree / Dupatta Draping'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'p-prebridal',
    title: 'Pre-Bridal Glow Ritual (3-Day Series)',
    category: 'Pre-Bridal',
    description: 'Complete skin & body prep scheduled in the weeks leading up to your wedding day for an unmatched wedding aura.',
    price: 380,
    originalPrice: 480,
    discountPercentage: 20,
    duration: '3 Sessions',
    includedServices: [
      '24K Gold Radiance Facial',
      'Full Body Rica Liposoluble Waxing',
      'Himalayan Hot Stone Pedicure & Spa',
      'Olaplex Hair Nourishing Treatment',
      'Full Body Organic Detox Scrub'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p-haircare',
    title: 'Couture Hair Care & Color Package',
    category: 'Hair Care',
    description: 'Revive damaged hair while adding multidimensional shine with our master colorist combo package.',
    price: 220,
    originalPrice: 285,
    discountPercentage: 22,
    duration: '180 mins',
    includedServices: [
      'Full Head Balayage or Ombré Highlights',
      'Signature Precision Cut & Style',
      'Olaplex Deep Molecular Bond Repair',
      'Custom Gloss & Color Lock Glaze'
    ],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p-skincare',
    title: 'Cellular Skin Renewal Package',
    category: 'Skin Care',
    description: 'Double therapy combining micro-exfoliation and deep LED bio-peptide infusion for age-defying skin contouring.',
    price: 195,
    originalPrice: 250,
    discountPercentage: 22,
    duration: '120 mins',
    includedServices: [
      'Hydra-Firm Bio-Peptide Lift Therapy',
      'Deep Pore Clarifying Steam & Extraction',
      '24K Gold Collagen Hydramask',
      'Relaxing Lymphatic Facial Drainage'
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p-monthly',
    title: 'Monthly Sanctuary Pamper Package',
    category: 'Monthly',
    description: 'Your monthly maintenance ritual designed to keep your skin glowing, hair silky, and hands pristine.',
    price: 140,
    originalPrice: 190,
    discountPercentage: 26,
    duration: '150 mins',
    includedServices: [
      'Signature Haircut & Blow-Dry',
      'Express Radiance Glow Cleanup',
      'Luxury Gel Manicure & Paraffin Hand Spa',
      'Precision Eyebrow & Upper Lip Threading'
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p-festive',
    title: 'Festival & Party Glam Package',
    category: 'Festival / Wedding',
    description: 'Look radiant for celebrations, festivals, or family weddings with an all-in-one express glam transformation.',
    price: 165,
    originalPrice: 215,
    discountPercentage: 23,
    duration: '120 mins',
    includedServices: [
      'Glamour Party HD Makeup & Lashes',
      'Couture Blowout or Soft Waves',
      'Quick Radiance Face Prep Mask',
      'Nail Polish Color Change'
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  }
];

export const OFFERS: OfferItem[] = [
  {
    id: 'off-1',
    title: 'First-Visit Welcome Gift',
    code: 'WELCOME20',
    discountBadge: '20% OFF',
    description: 'Enjoy 20% off on your very first service or package booking with us. Experience the Highlights luxury difference.',
    terms: 'Valid for new guests only. Applies to services over $50.',
    bgColor: 'from-amber-500/10 to-rose-500/10 border-amber-300'
  },
  {
    id: 'off-2',
    title: 'Festive & Celebration Offer',
    code: 'GLOWFEST',
    discountBadge: '25% OFF',
    description: 'Book any 2 services or packages together and unlock a 25% discount on the total bill.',
    terms: 'Valid on combo bookings during festival season.',
    bgColor: 'from-rose-500/10 to-pink-500/10 border-rose-300'
  },
  {
    id: 'off-3',
    title: 'Birthday Pampering Special',
    code: 'BDAYGLAM',
    discountBadge: 'FREE SPA',
    description: 'Receive a complimentary Olaplex Hair Spa or Himalayan Foot Scrub on any service booked during your birthday month.',
    terms: 'Photo ID required at check-in.',
    bgColor: 'from-purple-500/10 to-pink-500/10 border-purple-300'
  },
  {
    id: 'off-4',
    title: 'Weekend Combo Saver',
    code: 'WEEKENDSPA',
    discountBadge: '$30 OFF',
    description: 'Flat $30 discount on Hair Color + Facial combined bookings made for Friday, Saturday, or Sunday.',
    terms: 'Valid on minimum order value of $150.',
    bgColor: 'from-amber-600/10 to-yellow-500/10 border-amber-400'
  }
];

export const BRANDS: BrandItem[] = [
  {
    id: 'b-1',
    name: 'L’Oréal Professionnel',
    category: 'Hair Care',
    description: 'Parisian luxury hair coloring and structural care formulations engineered for vibrant color retention.',
    logo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'Majirel & Dia Richesse Ammonia-Free Colors'
  },
  {
    id: 'b-2',
    name: 'Olaplex Hair Science',
    category: 'Hair Care',
    description: 'Patented single-ingredient technology that re-links broken disulfide bonds in damaged hair.',
    logo: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'No.1 Bond Multiplier & No.2 Bond Perfector'
  },
  {
    id: 'b-3',
    name: 'MAC Cosmetics',
    category: 'Makeup',
    description: 'Iconic professional artistry cosmetics delivering high pigment intensity and 24-hour red carpet wear.',
    logo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'Studio Fix Fluid & Prep + Prime Fix+'
  },
  {
    id: 'b-4',
    name: 'Dermalogica',
    category: 'Skincare',
    description: 'Medical-grade professional skincare free of artificial fragrances, SD alcohol, and microplastics.',
    logo: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'Daily Microfoliant & Biolumin-C Serum'
  },
  {
    id: 'b-5',
    name: 'O.P.I Nails',
    category: 'Nail Care',
    description: 'The world leader in professional nail care known for chip-resistant, highly pigmented long-wear polishes.',
    logo: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'GelColor Soak-Off Gel Lacquer System'
  },
  {
    id: 'b-6',
    name: 'Kryolan Professional',
    category: 'Makeup',
    description: 'High-definition camouflage and airbrush cosmetics preferred by global film and television makeup artists.',
    logo: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=200&q=80',
    featuredProduct: 'DermaColor Camouflage & Digital Complexion'
  }
];

export const BRIDAL_SHOWCASE: BridalShowcaseItem[] = [
  {
    id: 'bs-1',
    title: 'Traditional Royal Crimson Bride',
    category: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Classic matte HD makeup paired with gold glitter eyes, traditional kundan jewelry setting, and regal red lips.'
  },
  {
    id: 'bs-2',
    title: 'Contemporary Pastels Engagement Glam',
    category: 'Engagement',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    description: 'Soft pink monochrome palette with dewy skin, glass highlight, and voluminous romantic curls.'
  },
  {
    id: 'bs-3',
    title: 'Red Carpet Reception Smokey Elegance',
    category: 'Reception',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Deep bronze smokey eyes, sculpted contour, nude satin lips, and sleek high bun with floral ring accents.'
  },
  {
    id: 'bs-4',
    title: 'Ultra HD Airbrush Glow',
    category: 'HD Makeup',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight airbrush base that provides seamless 16-hour camera-ready coverage without cakeiness.'
  },
  {
    id: 'bs-5',
    title: 'Couture Braided Crown Hairstyling',
    category: 'Hairstyling',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    description: 'Intricate Dutch crown braid decorated with fresh baby breath flowers and subtle crystal pins.'
  },
  {
    id: 'bs-6',
    title: 'Royal Silk Saree & Dupatta Draping',
    category: 'Saree Draping',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    description: 'Precision pleating and secure pin arrangement for Kanjeevaram sarees and heavy bridal dupattas.'
  }
];

export const BEAUTY_TIPS: BeautyTip[] = [
  {
    id: 'tip-1',
    title: '5 Golden Rules for Maintaining Colored & Balayage Hair',
    category: 'Hair Care',
    readTime: '4 min read',
    summary: 'Discover how to protect your expensive hair color from fading, brassiness, and sun damage using color-safe techniques.',
    content: '1. Always use sulfate-free shampoo. 2. Wash with lukewarm or cool water. 3. Apply heat protectant before blow drying. 4. Deep condition weekly with Olaplex or keratin masks. 5. Protect your hair from chlorine and direct sunlight.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    author: 'Elena Rostova',
    date: 'Sep 02, 2026'
  },
  {
    id: 'tip-2',
    title: 'The Ultimate 3-Month Pre-Bridal Skincare Timeline',
    category: 'Bridal Prep',
    readTime: '6 min read',
    summary: 'A step-by-step aesthetician blueprint to achieve healthy, radiant, porcelain skin for your wedding day.',
    content: 'Month 3: Start monthly deep-pore cleanups and hydration facials. Month 2: Incorporate peptide micro-infusions and gentle peels. Month 1: Stick strictly to tested products, avoid new chemical experiments, and schedule your trial makeup.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Sarah Lin',
    date: 'Aug 28, 2026'
  },
  {
    id: 'tip-3',
    title: 'How to Prevent Gel Nail Lifting and Chipping',
    category: 'Nail Care',
    readTime: '3 min read',
    summary: 'Keep your manicures looking fresh for up to 4 weeks with these simple daily cuticle care habits.',
    content: 'Apply cuticle oil daily, wear gloves while washing dishes or handling harsh cleaning liquids, never use your nails as tools to pick objects, and always moisturize your hands overnight.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
    author: 'Amara Watson',
    date: 'Aug 20, 2026'
  },
  {
    id: 'tip-4',
    title: 'Seasonal Skin Care Transition: Autumn Hydration Secrets',
    category: 'Seasonal Beauty',
    readTime: '5 min read',
    summary: 'As the weather cools down, adjust your moisturizers and serums to prevent seasonal dryness.',
    content: 'Switch from light gel moisturizers to rich hyaluronic serums and botanical oils. Incorporate nighttime sleep masks and gently exfoliate twice a week to remove dead skin cells.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Sarah Lin',
    date: 'Aug 15, 2026'
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'st1',
    name: 'Elena Rostova',
    role: 'Creative Director & Master Hair Artist',
    specialization: 'Balayage, Precision Cuts, Couture Hair Color',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'With over 12 years of luxury salon experience in Paris and Mumbai, Elena specializes in effortless, natural dimension.',
    rating: 4.9,
    experienceYears: 12,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    availableSlots: ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM']
  },
  {
    id: 'st2',
    name: 'Marcus Vane',
    role: 'Senior Hair Artisan & Styling Specialist',
    specialization: 'Edgy Crops, Men’s Grooming, Texturized Styles',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Marcus has styled for international fashion weeks and is passionate about structured cuts that turn heads.',
    rating: 4.8,
    experienceYears: 9,
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableSlots: ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '05:00 PM']
  },
  {
    id: 'st3',
    name: 'Dr. Sarah Lin',
    role: 'Lead Aesthetician & Skincare Specialist',
    specialization: '24K Gold Facials, Anti-Aging, Bio-Peptide Lift',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Sarah holds an advanced degree in aesthetic dermatology, crafting custom non-invasive cellular skin therapies.',
    rating: 5.0,
    experienceYears: 10,
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    availableSlots: ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM']
  },
  {
    id: 'st4',
    name: 'Amara Watson',
    role: 'Master Bridal Makeup & Nail Artist',
    specialization: 'HD Airbrush Makeup, 3D Nail Art, Bridal Glow',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Amara is renowned for creating flawless, long-lasting bridal looks and intricate hand-sculpted gel nail art.',
    rating: 4.9,
    experienceYears: 8,
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
      '1 Signature Haircut or Luxury Blow-Dry / month',
      '1 Express Radiance Glow Cleanup / month',
      '10% Off on all additional services & add-ons',
      'Priority booking queue on weekdays',
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
      'Unlimited Cut, Blowout & Styling (Max 2/mo)',
      '1 Radiance 24K Gold Facial or Olaplex Spa',
      '1 Complimentary Deluxe Gel Manicure',
      '15% Off on all additional services & retail products',
      'Free rescheduling up to 4 hours prior',
      'Exclusive member-only event invitations'
    ],
    popular: true,
    color: 'bg-brand-blush/60 border-brand-rose',
    accentColor: 'text-brand-gold-dark'
  },
  {
    tier: 'Platinum',
    price: 249,
    period: 'month',
    features: [
      'Unlimited Haircuts, Styling & Skincare',
      '1 Himalayan Salt Pedicure Ritual / month',
      'Unlimited Deluxe Manicures',
      '20% Off on all boutique cosmetic brands',
      'Guaranteed same-day priority VIP booking',
      'Dedicated private VIP suite & complimentary drinks',
      '1 Free guest pass every month'
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
    role: 'Gold Member',
    serviceReceived: 'Balayage & Hair Spa',
    feedback: 'Highlights Makeoverartistry is an absolute sanctuary! From the blush pink decor to the soothing aromatherapy, every visit is pure bliss. Elena transformed my flat hair into a dimensional balayage masterpiece.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Isabella Mercer',
    role: 'Bridal Client',
    serviceReceived: 'Royal Bridal Package',
    feedback: 'For my wedding day, I booked the Royal Maharani package. Amara and Dr. Sarah made me feel like absolute royalty. My skin had an incredible dewy glow that lasted through 8 hours of dancing!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Sophia Sterling',
    role: 'Regular Client',
    serviceReceived: '24K Gold Facial',
    feedback: 'The 24K Gold Facial is deeply therapeutic. My skin felt plump, hydrated, and radiant for weeks. The salon is pristine, hygienic, and extremely professional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't4',
    name: 'Ananya Sharma',
    role: 'Party Glam Guest',
    serviceReceived: 'HD Party Makeup',
    feedback: 'I had my makeup and hair styled for my sister’s reception. Everyone complimented my HD makeup! It looked natural in person and stunning in high-definition photographs.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Golden Balayage Blend',
    category: 'Hair Transformations',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    caption: 'Hand-painted warm honey balayage with signature gloss finish.'
  },
  {
    id: 'g2',
    title: '24K Gold Cellular Facial',
    category: 'Skincare',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    caption: 'Deep skin hydration and 24K gold foil infusion treatment.'
  },
  {
    id: 'g3',
    title: 'Blush & Gold Foil Gel Art',
    category: 'Nail Art',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    caption: 'Custom 3D nail art with metallic foil accents.'
  },
  {
    id: 'g4',
    title: 'Sanctuary Reception Lounge',
    category: 'Salon Interior',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    caption: 'Our peaceful blush-and-cream aesthetic reception area.'
  },
  {
    id: 'g5',
    title: 'Royal Bridal HD Transformation',
    category: 'Bridal Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    caption: 'Complete bridal HD airbrush makeup with traditional headpiece.'
  },
  {
    id: 'g6',
    title: 'Red Carpet Smokey Glamour',
    category: 'Party Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    caption: 'Dramatic bronze smokey eye with contoured blush tones.'
  },
  {
    id: 'g7',
    title: 'Master Artisans in Action',
    category: 'Team',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    caption: 'Our lead aesthetician preparing bio-active serum blends.'
  },
  {
    id: 'g8',
    title: 'Balayage Color Restoration',
    category: 'Before & After',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    isBeforeAfter: true,
    beforeUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    afterUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    caption: 'Dull brassy hair restored into vibrant golden dimensional curls.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How far in advance should I book my appointment?',
    answer: 'We recommend booking 1-2 weeks in advance for regular services and at least 2-3 months in advance for bridal packages or group pampering days to secure your preferred date and senior stylist.',
    category: 'Booking'
  },
  {
    id: 'faq2',
    question: 'What is your cancellation or rescheduling policy?',
    answer: 'We request a minimum 24-hour notice for cancellations or reschedules. Gold and Platinum members enjoy a flexible 4-hour window without fees.',
    category: 'Booking'
  },
  {
    id: 'faq3',
    question: 'What premium cosmetic product lines do you use?',
    answer: 'We exclusively style with luxury, organic, and cruelty-free lines including L’Oréal Professionnel, Olaplex, Dermalogica, MAC Cosmetics, Kryolan, and O.P.I.',
    category: 'Products'
  },
  {
    id: 'faq4',
    question: 'Do you offer custom trial sessions for brides?',
    answer: 'Yes! All our bridal makeup and hair packages include a comprehensive consultation and trial session with your lead artist where we test makeup shades, veil draping, and hair forms.',
    category: 'Bridal'
  },
  {
    id: 'faq5',
    question: 'How do I redeem special offer discount codes?',
    answer: 'You can mention or input your offer code (e.g. WELCOME20) during online booking step 4 or show the offer code at the reception desk during check-in.',
    category: 'Offers'
  }
];

export const BEFORE_AFTER = {
  title: 'Luxury Hair Volumizing & Balayage Restoration',
  description: 'A 4-hour restoration session. Our client received a deep bond repair treatment, subtle warm-gold balayage, and signature layered blowout.',
  beforeUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
  afterUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
};
