import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, Heart, Users, CalendarDays, Compass } from 'lucide-react';
import { STYLISTS } from '../data';

export default function About() {
  const milestones = [
    { value: '12+', label: 'Years in Business', icon: CalendarDays },
    { value: '18K+', label: 'Happy Guests Served', icon: Users },
    { value: '4.9★', label: 'Average Guest Rating', icon: Sparkles },
    { value: '3', label: 'Boutique Branches', icon: Compass },
  ];

  const coreValues = [
    {
      title: 'Ethical Luxury',
      description: 'We strictly collaborate with cruelty-free, organic, biodynamic, and vegan-friendly cosmetic producers who prioritize sustainable chemical practices.',
      icon: Heart,
    },
    {
      title: 'Elevated Sanitization',
      description: 'Medical-grade autoclaves are utilized for all metal implements, and our air filtration systems cycles fresh sterile atmosphere every 12 minutes.',
      icon: ShieldCheck,
    },
    {
      title: 'Bespoke Artistry',
      description: 'Every hair cut, facial micro-treatment, and nail canvas is custom-matched to your individual cellular profile, bone geometry, and personal style.',
      icon: Award,
    },
  ];

  return (
    <div className="space-y-24 py-12 pb-24">
      
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Behind The Aura Sanctuary ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Where Wellness Meets Exquisite Luxury
        </h1>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* 1. Our Story / Philosophy */}
      <section id="our-philosophy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
              Crafting Safe, Elevated Sanctuary Spaces Since 2014
            </h2>
            <p className="text-stone-600 font-sans font-light leading-relaxed text-sm sm:text-base">
              Aura was born out of a desire to combine biological dermal research with high-fashion salon techniques. Founded in Beverly Hills by master cosmetic stylist Vivienne Vance, we designed a space that is free from toxic fumes, harsh chemical odors, and artificial noise.
            </p>
            <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
              We look at beauty through a holistic lens. Our custom hair formulations nourish your follicles while delivering rich, multidimensional color. Our facials target cellular hydration without stripping defensive skin barriers. Inside Aura, beauty is a relaxing ritual, not a chore.
            </p>
            <blockquote className="border-l-4 border-brand-gold pl-4 py-2 italic font-serif text-brand-gold-dark text-base bg-brand-blush/40 rounded-r-xl pr-4">
              "True beauty is an outward expression of a peaceful, well-cared-for soul. We create the space where both can coexist perfectly."
            </blockquote>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-11/12 h-full rounded-3xl bg-brand-blush/60 -z-1" />
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Salon Interior"
                className="rounded-3xl shadow-sm object-cover h-[480px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Owner Message */}
      <section id="founder-message" className="bg-brand-blush/25 py-20 border-y border-brand-blush/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-4 max-w-sm mx-auto md:max-w-none">
              <div className="relative">
                <div className="absolute inset-0 border border-brand-gold rounded-3xl translate-x-3 translate-y-3 -z-1" />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                  alt="Vivienne Vance, Founder"
                  className="rounded-3xl shadow-xs object-cover aspect-3/4 w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
                ✦ A Message From Our Founder
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-light">
                "Welcome to a standard of beauty that treats your wellness with the utmost devotion."
              </h3>
              <p className="text-stone-600 font-sans font-light text-sm sm:text-base leading-relaxed">
                When I started Aura twelve years ago, salon environments were loud, heavily chemical, and transactional. I wanted to design a peaceful escape — a soft pastel oasis where you could sip organic lavender tea, hear the gentle trickle of water, and trust that every product touching your body is clean, premium, and ethical.
              </p>
              <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
                We view our craft as an art form. Our team is hand-selected not just for their technical accolades, but for their ability to connect, understand, and restore. Thank you for welcoming us into your beauty rituals. We look forward to pampering you.
              </p>
              <div>
                <span className="block font-serif text-lg font-medium text-brand-charcoal">Vivienne Vance</span>
                <span className="block text-xs text-brand-gold font-sans uppercase tracking-widest mt-0.5">Founder & Artistic Director</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section id="team-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
            ✦ Meet Our Elite Artisans
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-light">
            Crafting Beauty with Expert Hands
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STYLISTS.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-blush/60 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="aspect-3/4 relative overflow-hidden">
                <img
                  src={stylist.photo}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-center">
                  <p className="text-xs font-light text-stone-200 italic">"{stylist.bio}"</p>
                </div>
              </div>
              <div className="p-6 text-center space-y-2">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-brand-charcoal">{stylist.name}</h4>
                  <p className="text-xs text-brand-gold font-medium mt-0.5">{stylist.role}</p>
                </div>
                <div className="h-px bg-stone-100" />
                <p className="text-stone-500 text-[11px] uppercase tracking-wider">{stylist.specialization}</p>
                <div className="flex justify-center items-center space-x-1 text-xs text-brand-gold">
                  <span>★</span>
                  <span className="font-semibold">{stylist.rating} Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream border border-brand-blush rounded-3xl p-8 sm:p-16 space-y-12 shadow-xs">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Aura Excellence Standards
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
              We Set the Benchmarks for Luxury Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-blush text-brand-gold flex items-center justify-center mx-auto">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-brand-charcoal">{val.title}</h4>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Stats / Milestones */}
      <section id="milestones-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((ms, index) => {
            const Icon = ms.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-brand-blush/60 text-center space-y-2 group hover:shadow-xs transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blush/40 flex items-center justify-center text-brand-gold mx-auto group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold-dark">
                  {ms.value}
                </div>
                <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                  {ms.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
