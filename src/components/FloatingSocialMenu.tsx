import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

// Authentic Official Brand SVG Icons
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.11 13.67 14.89 13.59C14.66 13.51 14.5 13.47 14.33 13.72C14.16 13.97 13.69 14.52 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.64 11.71 14.3 10.48 13.2C9.52 12.35 8.87 11.3 8.68 10.98C8.5 10.66 8.66 10.49 8.79 10.36C8.9 10.25 9.04 10.07 9.17 9.92C9.3 9.77 9.34 9.66 9.42 9.5C9.5 9.33 9.46 9.19 9.4 9.06C9.34 8.94 8.84 7.72 8.64 7.21C8.43 6.72 8.23 6.79 8.07 6.78C7.92 6.78 7.76 6.77 7.59 6.77C7.42 6.77 7.15 6.84 6.92 7.08C6.69 7.33 6.04 7.94 6.04 9.18C6.04 10.42 6.95 11.61 7.07 11.78C7.2 11.95 8.85 14.5 11.38 15.59C11.98 15.85 12.45 16.01 12.82 16.12C13.42 16.31 13.97 16.29 14.41 16.22C14.89 16.15 15.9 15.61 16.11 15.02C16.32 14.43 16.32 13.93 16.26 13.82C16.2 13.72 16.03 13.66 15.78 13.53L16.57 14.39Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

export default function FloatingSocialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Exact 4 primary requested social networks + quick phone dialer
  // Spread across a wide, airy arc with visible gaps between circles
  // Angles spaced by 28° across 168° to 280°
  const socialItems = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/13105550199?text=Hello%20Highlights%20Makeoverartistry',
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      angle: 168,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: InstagramIcon,
      href: 'https://instagram.com',
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white',
      angle: 196,
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: FacebookIcon,
      href: 'https://facebook.com',
      color: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
      angle: 224,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: YoutubeIcon,
      href: 'https://youtube.com',
      color: 'bg-[#FF0000] hover:bg-[#e60000] text-white',
      angle: 252,
    },
    {
      id: 'phone',
      label: 'Call Parlour',
      icon: Phone,
      href: 'tel:+13105550199',
      color: 'bg-stone-800 hover:bg-brand-charcoal text-brand-gold-light',
      angle: 280,
    },
  ];

  // Radius for comfortable circular spacing with clean gaps between 44px circles
  const radius = 98;

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
                      stiffness: 380,
                      damping: 24,
                      delay: index * 0.04,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.18, delay: (socialItems.length - 1 - index) * 0.02 },
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  className={`absolute pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform cursor-pointer border border-white/20 ${item.color}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
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

