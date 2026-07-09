import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Star, Sparkles, HelpCircle, Heart, Award, Gift, Send, X, ShieldCheck } from 'lucide-react';
import { MEMBERSHIPS, TESTIMONIALS } from '../data';

export default function Membership() {
  const [activeTab, setActiveTab] = useState<'benefits' | 'comparison'>('benefits');
  const [signUpPlan, setSignUpPlan] = useState<string | null>(null);
  const [monthlySpend, setMonthlySpend] = useState<number>(120);

  // Sign up form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSignUpPlan(null);
      setName('');
      setEmail('');
      setPhone('');
    }, 4000);
  };

  // Loyalty Program Math
  const pointsRate = 1.5; // 1.5 points per $1
  const calculatedPoints = Math.round(monthlySpend * pointsRate);
  
  const getRewardMilestone = (points: number) => {
    if (points >= 300) return 'Complementary 24K Gold Facial + Hot Stone Pedicure ($195 value)';
    if (points >= 200) return 'Full Signature Balayage Couture Cut & Blow Dry ($85 value)';
    if (points >= 100) return 'Complementary organic Sugar Gel Manicure & Hand Spa ($55 value)';
    return '15% Discount Voucher on all boutique retail products';
  };

  const comparisonFeatures = [
    { name: 'Monthly Signature Blow Drys', silver: '1 Included', gold: '2 Included', platinum: 'Unlimited' },
    { name: 'Aromatic Cellular Facials', silver: '1 Included', gold: '1 Included', platinum: 'Unlimited' },
    { name: 'Luxury Gel Manicures/Pedicures', silver: '10% Discount', gold: '1 Included', platinum: 'Unlimited' },
    { name: 'Himalayan Hot Stone Rituals', silver: '10% Discount', gold: '15% Discount', platinum: '1 Included' },
    { name: 'Savings on boutique products', silver: '10% Off', gold: '15% Off', platinum: '20% Off' },
    { name: 'Same-day Priority Bookings', silver: '✕', gold: 'Weekdays', platinum: 'Guaranteed 24/7' },
    { name: 'Private VIP Suite & Champagne', silver: '✕', gold: '✕', platinum: 'Included' },
  ];

  return (
    <div className="space-y-24 py-12 pb-24">
      
      {/* 1. Page Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Aura Elite Club ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Memberships Crafted for Your Well-being
        </h1>
        <p className="text-stone-500 font-sans font-light max-w-2xl mx-auto text-sm sm:text-base">
          Investing in self-care should be effortless. Experience regular restoration, VIP priorities, and premium discounts under our flexible monthly tiers.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* 2. Pricing Grid Tiers */}
      <section id="pricing-tiers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Benefits vs Comparison Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-brand-blush rounded-full p-1.5 flex space-x-1 shadow-xs">
            <button
              id="tab-benefits-btn"
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                activeTab === 'benefits'
                  ? 'bg-brand-gold text-white'
                  : 'text-stone-500 hover:text-brand-gold'
              }`}
            >
              Membership Tiers
            </button>
            <button
              id="tab-comparison-btn"
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-brand-gold text-white'
                  : 'text-stone-500 hover:text-brand-gold'
              }`}
            >
              Detailed Comparison
            </button>
          </div>
        </div>

        {activeTab === 'benefits' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {MEMBERSHIPS.map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-3xl p-8 border shadow-xs relative flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-md ${plan.color} ${
                  plan.popular ? 'lg:scale-105 ring-2 ring-brand-gold ring-offset-2' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>Highly Recommended</span>
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">{plan.tier}</h3>
                    <div className="flex items-baseline mt-2">
                      <span className="text-4xl font-bold font-serif">${plan.price}</span>
                      <span className="text-xs ml-1 opacity-70">/ {plan.period}</span>
                    </div>
                  </div>

                  <div className="h-px bg-stone-200/50" />

                  <ul className="space-y-3.5 text-xs sm:text-sm">
                    {plan.features.map((feat, index) => (
                      <li key={index} className="flex items-start space-x-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.accentColor}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  id={`sign-up-btn-${plan.tier.toLowerCase()}`}
                  onClick={() => setSignUpPlan(plan.tier)}
                  className={`w-full text-xs font-bold py-3.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer ${
                    plan.tier === 'Platinum'
                      ? 'bg-brand-rose hover:bg-brand-rose/90 text-brand-charcoal'
                      : 'bg-brand-gold hover:bg-brand-gold-dark text-white'
                  }`}
                >
                  Join the {plan.tier} Club
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-brand-blush rounded-3xl overflow-hidden shadow-xs max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-blush/40 font-serif text-brand-charcoal border-b border-brand-blush/60">
                    <th className="p-5 font-semibold text-sm">Privilege Feature</th>
                    <th className="p-5 font-semibold text-sm">Silver ($79)</th>
                    <th className="p-5 font-semibold text-sm text-brand-gold">Gold ($149)</th>
                    <th className="p-5 font-semibold text-sm">Platinum ($249)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-cream/40 transition-colors">
                      <td className="p-5 font-medium text-stone-700">{row.name}</td>
                      <td className="p-5 text-stone-500">{row.silver}</td>
                      <td className="p-5 text-brand-gold font-medium">{row.gold}</td>
                      <td className="p-5 text-stone-900 font-semibold">{row.platinum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </section>

      {/* 3. Loyalty Points Section & Calculator */}
      <section id="loyalty-section" className="bg-brand-blush/30 py-20 border-y border-brand-blush/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
                ✦ Aura Loyalty Points Program
              </span>
              <h2 className="font-serif text-3xl text-brand-charcoal font-light">
                Every Ritual Earns Exquisite Rewards
              </h2>
              <p className="text-stone-600 font-sans font-light leading-relaxed text-sm sm:text-base">
                For non-member walk-ins and active club members alike, we reward loyalty. For every $1 you spend on services or luxury boutique products, you earn **1.5 loyalty points**. 
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-blush flex items-center justify-center text-brand-gold shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal text-sm">Automated Tracking</h4>
                    <p className="text-xs text-stone-500">Points are loaded to your phone number instantly upon checkout.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-blush flex items-center justify-center text-brand-gold shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal text-sm">Flexible Redemption</h4>
                    <p className="text-xs text-stone-500">Redeem points for specialized express sessions, color glossings, or skin contour creams.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Points Calculator */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-brand-rose/60 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
                <div className="text-center pb-2 border-b border-stone-100">
                  <h3 className="font-serif text-lg font-semibold text-brand-charcoal">Estimate Your Rewards</h3>
                  <p className="text-stone-400 text-[11px] uppercase tracking-wider mt-1">Slide to your average monthly spend</p>
                </div>

                {/* Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between font-sans text-sm font-semibold">
                    <span>Monthly Spend:</span>
                    <span className="text-brand-gold text-lg">${monthlySpend}</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="500"
                    step="10"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full accent-brand-gold h-2 bg-brand-blush rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>$30</span>
                    <span>$250</span>
                    <span>$500</span>
                  </div>
                </div>

                {/* Outputs */}
                <div className="bg-brand-blush/35 p-5 rounded-2xl space-y-3.5 border border-brand-blush">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-stone-600">Points Earned / Month:</span>
                    <span className="font-mono font-bold text-brand-gold-dark text-base">{calculatedPoints} pts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-stone-600">Points Earned / Year:</span>
                    <span className="font-mono font-bold text-brand-gold-dark text-lg">{calculatedPoints * 12} pts</span>
                  </div>
                  
                  <div className="h-px bg-brand-rose/30" />

                  <div className="space-y-1">
                    <span className="block text-[10px] text-stone-400 uppercase tracking-widest">Active Reward Milestone:</span>
                    <span className="block text-xs font-semibold text-brand-charcoal leading-snug">
                      {getRewardMilestone(calculatedPoints)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Club Testimonials */}
      <section id="member-testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
            ✦ Inside the Inner Circle
          </span>
          <h2 className="font-serif text-3xl text-brand-charcoal font-light">
            Loved by Our Members
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-brand-blush/60 shadow-xs space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-brand-gold space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>
                <p className="text-stone-600 font-sans font-light text-xs sm:text-sm leading-relaxed italic">
                  "{t.feedback}"
                </p>
              </div>

              <div className="flex items-center space-x-3 border-t border-stone-50 pt-4 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-blush"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-semibold text-xs text-brand-charcoal">{t.name}</h4>
                  <span className="text-[10px] text-stone-400 block">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign Up Upgrade Overlay Modal */}
      <AnimatePresence>
        {signUpPlan && (
          <motion.div
            id="signup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-brand-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-cream border border-brand-blush rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-lg space-y-6"
            >
              <button
                id="signup-close-btn"
                onClick={() => setSignUpPlan(null)}
                className="absolute top-5 right-5 text-stone-400 hover:text-brand-charcoal"
                aria-label="Close signup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-brand-blush text-brand-gold flex items-center justify-center mx-auto">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brand-charcoal">Join the {signUpPlan} Club</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Enter your contact details below to initialize your Elite Membership. Our reception desk will verify and set up your billing profile.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-stone-900">Application Received!</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Thank you, {name}! Your Aura {signUpPlan} Membership request has been filed. A concierge agent will text you shortly with secure setup details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 block pl-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 block pl-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-600 block pl-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(310) 555-0190"
                      className="w-full bg-white border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2 mt-2"
                  >
                    <Send className="w-4 h-4 text-brand-rose" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
