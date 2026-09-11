import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Instagram, Facebook, Youtube, Phone } from 'lucide-react';

export default function FloatingSocialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const socialItems = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry',
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      angle: 180, // left
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white',
      angle: 215, // top-left diagonal
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com',
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      angle: 250, // top steep
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com',
      color: 'bg-red-600 hover:bg-red-700 text-white',
      angle: 285, // top right-ish
    },
    {
      id: 'phone',
      label: 'Call',
      icon: Phone,
      href: 'tel:+13105550199',
      color: 'bg-stone-800 hover:bg-brand-charcoal text-brand-gold-light',
      angle: 320, // upper right
    },
  ];

  // Radius for circle dispersion (in pixels)
  const radius = 78;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center justify-center">
      {/* Backdrop overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-30"
          />
        )}
      </AnimatePresence>

      {/* Radial Social Media Icons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
            {socialItems.map((item, index) => {
              const Icon = item.icon;
              // Convert angle in degrees to radians
              const rad = (item.angle * Math.PI) / 180;
              const x = Math.round(Math.cos(rad) * radius);
              const y = Math.round(Math.sin(rad) * radius);

              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith('tel') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x,
                    y,
                    transition: {
                      type: 'spring',
                      stiffness: 350,
                      damping: 22,
                      delay: index * 0.05,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.2, delay: (socialItems.length - 1 - index) * 0.03 },
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`absolute pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform cursor-pointer border border-white/20 ${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button (Menu icon that turns to X when open) */}
      <motion.button
        id="floating-menu-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative z-50 w-14 h-14 rounded-full bg-brand-charcoal text-brand-gold border border-brand-gold/40 shadow-xl flex items-center justify-center cursor-pointer focus:outline-none"
        aria-label={isOpen ? 'Close social menu' : 'Open social menu'}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {isOpen ? <X className="w-6 h-6 text-brand-rose" /> : <Menu className="w-6 h-6 text-brand-gold" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
