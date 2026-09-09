import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="space-y-16 py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Get In Touch ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          We Would Love to Hear From You
        </h1>
        <p className="text-stone-500 font-sans font-light text-sm max-w-xl mx-auto">
          Have questions about our bridal packages, custom hair treatments, or appointments? Reach out directly.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info & Hours */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-brand-blush rounded-3xl p-8 space-y-6 shadow-xs">
            <h3 className="font-serif text-2xl font-light text-brand-charcoal">Salon Details</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Location Address</h4>
                  <p className="text-stone-600 text-xs font-light leading-relaxed">
                    742 Rodeo Luxury Boulevard, Suite 400<br />Beverly Hills, CA 90210
                  </p>
                  <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider block mt-1">
                    ✓ Valet & Dedicated Parking Available
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Phone Line</h4>
                  <a href="tel:+13105550199" className="text-stone-600 text-xs hover:text-brand-gold font-mono block">
                    +1 (310) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <MessageCircle className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">WhatsApp Line</h4>
                  <a
                    href="https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 text-xs font-semibold hover:underline block"
                  >
                    +1 (310) 555-0199 (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Email Address</h4>
                  <a href="mailto:concierge@highlightsmakeover.com" className="text-stone-600 text-xs hover:text-brand-gold font-light block">
                    concierge@highlightsmakeover.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Opening Hours</h4>
                  <p className="text-stone-600 text-xs font-light">Monday - Saturday: 09:00 AM - 08:00 PM</p>
                  <p className="text-stone-600 text-xs font-light">Sunday: 10:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Map */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-brand-blush rounded-3xl p-8 shadow-xs">
            <h3 className="font-serif text-2xl font-light text-brand-charcoal mb-6">Send Us a Direct Message</h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-semibold">Message Sent Successfully!</h4>
                <p className="text-xs text-stone-600">Thank you for reaching out. Our receptionist will get back to you within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-brand-charcoal mb-1">Your Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Charlotte Vance"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-brand-charcoal mb-1">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (310) 555-0199"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-brand-charcoal mb-1">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="charlotte@example.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-charcoal mb-1">Your Message or Inquiry</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <button
                  id="submit-contact-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-3.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer shadow-2xs flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Embedded Google Map */}
          <div className="h-64 rounded-3xl overflow-hidden border border-brand-blush shadow-xs">
            <iframe
              title="Contact Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.79322485641!2d-118.4137267!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
