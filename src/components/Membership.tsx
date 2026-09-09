import { motion } from 'motion/react';
import { Check, Sparkles, Gift, Award, Zap } from 'lucide-react';
import { MEMBERSHIPS } from '../data';

export default function Membership() {
  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Exclusive Privileges ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Membership Tiers & Loyalty Rewards
        </h1>
        <p className="text-stone-500 font-sans font-light text-sm max-w-xl mx-auto">
          Treat yourself to consistent pampering with priority scheduling, complimentary spa sessions, and up to 20% savings.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Membership Tiers Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIPS.map((plan) => (
            <div
              key={plan.tier}
              className={`rounded-3xl p-8 border ${plan.color} shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group ${
                plan.popular ? 'ring-2 ring-brand-gold shadow-md' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-xs">
                  ★ Guest Favorite Tier
                </span>
              )}

              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h3 className={`font-serif text-2xl font-semibold ${plan.accentColor}`}>{plan.tier} Club</h3>
                  <div className="flex justify-center items-baseline space-x-1">
                    <span className="font-serif text-4xl font-bold text-brand-charcoal">${plan.price}</span>
                    <span className="text-stone-400 text-xs font-light">/ {plan.period}</span>
                  </div>
                </div>

                <div className="h-px bg-black/5" />

                <ul className="space-y-3">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="text-xs flex items-start space-x-2.5 leading-relaxed">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.accentColor}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  id={`join-plan-${plan.tier.toLowerCase()}`}
                  href="https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry,%20I%20would%20like%20to%20join%20the%20Membership%20Club."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-2xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join {plan.tier} Tier</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Loyalty Points Explanation Section */}
      <section id="loyalty-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream border border-brand-blush rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xs">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Highlights Aura Rewards</span>
            <h2 className="font-serif text-3xl font-light text-brand-charcoal">How Loyalty Points Work</h2>
            <p className="text-stone-500 text-xs font-light">Earn points automatically on every dollar spent at our parlour.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-blush/80 space-y-2 text-center">
              <Gift className="w-8 h-8 text-brand-gold mx-auto" />
              <h4 className="font-serif text-base font-semibold text-brand-charcoal">1. Earn Points</h4>
              <p className="text-stone-500 text-xs font-light">Earn 1 Aura Point for every $1 spent on treatments and boutique cosmetic products.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-blush/80 space-y-2 text-center">
              <Zap className="w-8 h-8 text-brand-gold mx-auto" />
              <h4 className="font-serif text-base font-semibold text-brand-charcoal">2. Refer & Multiply</h4>
              <p className="text-stone-500 text-xs font-light">Receive 100 bonus points whenever a friend books their first appointment using your referral code.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-blush/80 space-y-2 text-center">
              <Award className="w-8 h-8 text-brand-gold mx-auto" />
              <h4 className="font-serif text-base font-semibold text-brand-charcoal">3. Redeem Luxuries</h4>
              <p className="text-stone-500 text-xs font-light">Redeem 200 points for a free blowout or 500 points for a 24K Gold Facial treatment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
