import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ShieldCheck, Instagram, Facebook, Compass } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [whatsappActive, setWhatsappActive] = useState(false);
  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [chatLogs, setChatLogs] = useState<{ sender: 'user' | 'bot'; text: string; time: string }[]>([
    { sender: 'bot', text: 'Hello! Welcome to Aura Sanctuary. How can we help you pamper yourself today?', time: 'Just now' }
  ]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 5000);
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappMsg.trim()) return;
    
    const userMsg = whatsappMsg;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChatLogs(prev => [...prev, { sender: 'user', text: userMsg, time: timeStr }]);
    setWhatsappMsg('');

    setTimeout(() => {
      setChatLogs(prev => [
        ...prev,
        { 
          sender: 'bot', 
          text: "Thank you for reaching out! A concierge styling agent is checking your message and will reply in a couple of minutes.", 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
      ]);
    }, 1500);
  };

  return (
    <div className="space-y-24 py-12 pb-24 relative">
      
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Connect with Concierge ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Begin Your Journey to Calm
        </h1>
        <p className="text-stone-500 font-sans font-light max-w-2xl mx-auto text-sm sm:text-base">
          Have a question about our couture formulas or specialized packages? Get in touch with our Beverly Hills reservation desk.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Main Grid: Form vs Info & Map */}
      <section id="contact-split-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Cards */}
            <div className="bg-white border border-brand-blush rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-medium text-brand-charcoal border-b border-stone-100 pb-3">The Beverly Hills Oasis</h3>
              
              <ul className="space-y-5 text-xs sm:text-sm">
                <li className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-brand-charcoal">Location Address</span>
                    <span className="block text-stone-500 font-light mt-0.5 leading-relaxed">
                      104 Radiant Boulevard, Suite 500, <br />
                      Beverly Hills, CA 90210
                    </span>
                    <span className="block text-[11px] text-brand-gold font-medium mt-1">✦ Complimentary Valet Parking Available</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-brand-charcoal">Concierge Hotlines</span>
                    <span className="block text-stone-500 font-light mt-0.5">+1 (310) 555-0190 (Booking)</span>
                    <span className="block text-stone-500 font-light">+1 (310) 555-0195 (Boutique Support)</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-brand-charcoal">Electronic Inquiries</span>
                    <span className="block text-stone-500 font-light mt-0.5">concierge@aurasalonspa.com</span>
                    <span className="block text-stone-500 font-light">partnerships@aurasalonspa.com</span>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-brand-charcoal">Working Hours</span>
                    <span className="block text-stone-500 font-light mt-0.5">Monday - Saturday: 9:00 AM - 8:00 PM</span>
                    <span className="block text-stone-500 font-light">Sunday: 10:00 AM - 5:00 PM</span>
                    <span className="block text-[11px] text-stone-400 mt-1 italic">Reschedules require 24 hours prior notice</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps embed - customized layout */}
            <div className="rounded-3xl overflow-hidden border border-brand-blush shadow-xs relative aspect-video bg-stone-100">
              {/* Custom High Quality Maps IFrame */}
              <iframe
                title="Aura Beverly Hills Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4502570044955!2d-118.4026859!3d34.0702582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc050e687d85%3A0xb3535cf0e5ee081d!2sRodeo%20Dr%2C%20Beverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1689123456789!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-[10px] font-bold text-brand-gold shadow-sm tracking-wider uppercase flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5" />
                <span>Rodeo Drive District</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-blush rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-light text-brand-charcoal">Send an Instant Message</h3>
                <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                  Fill in your requirements below. Our reservations coordinator usually replies via email or text within 60 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-stone-900">Message Delivered Successfully!</h4>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
                    Thank you, {name}! Your consultation request has been routed to our Lead Aesthetician. We have also emailed a confirmation slip to <strong>{email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {error && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-xs sm:text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-600 pl-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elizabeth Bennett"
                        className="w-full bg-brand-cream/50 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-600 pl-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elizabeth@gmail.com"
                        className="w-full bg-brand-cream/50 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600 pl-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(310) 555-0190"
                      className="w-full bg-brand-cream/50 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-600 pl-1">Your Message or Consultation Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="I would like to inquire about the organic coloring lines Vivienne uses for blonde highlights, and request booking details for late-August..."
                      className="w-full bg-brand-cream/50 border border-brand-blush rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-stone-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4 text-brand-rose" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* WhatsApp / Live Chat Floating Button Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <AnimatePresence>
          {whatsappActive && (
            <motion.div
              id="whatsapp-chat-box"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="bg-white border border-brand-blush rounded-2xl shadow-xl w-80 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center space-x-2.5">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold">A</div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">Aura Concierge Chat</h4>
                    <span className="text-[9px] opacity-80 block">Typically replies in 1 minute</span>
                  </div>
                </div>
                <button
                  id="close-chat-btn"
                  onClick={() => setWhatsappActive(false)}
                  className="text-white/80 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Message Logs */}
              <div className="p-4 h-60 overflow-y-auto bg-slate-50 space-y-3.5 flex flex-col text-xs">
                {chatLogs.map((log, idx) => {
                  const isBot = log.sender === 'bot';
                  return (
                    <div
                      key={idx}
                      className={`max-w-[80%] rounded-xl p-3 space-y-1 ${
                        isBot 
                          ? 'bg-white border border-stone-100 self-start text-stone-700' 
                          : 'bg-emerald-50 border border-emerald-100 self-end text-stone-800'
                      }`}
                    >
                      <p className="leading-relaxed">{log.text}</p>
                      <span className="block text-[8px] text-stone-400 text-right">{log.time}</span>
                    </div>
                  );
                })}
              </div>

              {/* Chat Form Input */}
              <form onSubmit={handleSendWhatsapp} className="p-2 bg-white border-t border-stone-100 flex items-center space-x-1">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={whatsappMsg}
                  onChange={(e) => setWhatsappMsg(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  id="send-chat-btn"
                  type="submit"
                  className="w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 cursor-pointer"
                  aria-label="Send"
                >
                  <Send className="w-3.5 h-3.5 fill-white" />
                </button>
              </form>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating trigger button */}
        <button
          id="whatsapp-floating-trigger"
          onClick={() => setWhatsappActive(!whatsappActive)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
          aria-label="Open live chat"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white" />
        </button>
      </div>

    </div>
  );
}

// X inline declaration
const X = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
