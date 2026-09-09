import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, Heart, Users, CalendarDays, Compass, Star } from 'lucide-react';

export default function About() {
  const milestones = [
    { value: '12+', label: 'Years in Business', icon: CalendarDays },
    { value: '18K+', label: 'Happy Guests Served', icon: Users },
    { value: '4.9★', label: 'Average Guest Rating', icon: Sparkles },
    { value: '3', label: 'Boutique Branches', icon: Compass },
  ];

  const coreValues = [
    {
      title: 'Ethical & Biological Care',
      description: 'We strictly collaborate with cruelty-free, organic, biodynamic, and vegan cosmetic producers who prioritize sustainable chemical practices.',
      icon: Heart,
    },
    {
      title: 'Elevated Hospital Hygiene',
      description: 'Medical-grade autoclaves sterilize metal implements, and our air filtration systems cycle sterile atmosphere every 12 minutes.',
      icon: ShieldCheck,
    },
    {
      title: 'Bespoke Artistry',
      description: 'Every haircut, facial micro-treatment, and nail design is custom-matched to your individual skin profile and bone geometry.',
      icon: Award,
    },
  ];

  return (
    <div className="space-y-24 py-12 pb-24">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Behind The Sanctuary ✦
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
              Highlights Makeoverartistry was born out of a desire to combine biological dermal research with high-fashion salon techniques. Founded in Beverly Hills, we designed a space that is free from toxic fumes, harsh chemical odors, and artificial noise.
            </p>
            <p className="text-stone-500 font-sans font-light text-sm leading-relaxed">
              We look at beauty through a holistic lens. Our custom hair formulations nourish your follicles while delivering rich, multidimensional color. Our facials target cellular hydration without stripping defensive skin barriers. Inside Highlights, beauty is a relaxing ritual.
            </p>
            <blockquote className="border-l-4 border-brand-gold pl-4 py-2 italic font-serif text-brand-gold-dark text-base bg-brand-blush/40 rounded-r-xl pr-4">
              "True beauty is an outward expression of a peaceful, well-cared-for soul. We create the space where both coexist."
            </blockquote>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-11/12 h-full rounded-3xl bg-brand-blush/60 -z-1" />
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Salon Interior"
                className="rounded-3xl shadow-sm object-cover h-[480px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>



      {/* 3. Why Choose Us / Excellence Standards */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream border border-brand-blush rounded-3xl p-8 sm:p-16 space-y-12 shadow-xs">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Highlights Excellence Standards
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
              We Set Benchmarks for Luxury Care
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
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal">{val.title}</h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Stats / Milestones */}
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
