import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Layers } from 'lucide-react';
import { GALLERY_ITEMS, BEFORE_AFTER } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  
  // Before/After comparison slider state
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const comparisonRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Salon Interior',
    'Hair Transformations',
    'Bridal Makeup',
    'Party Makeup',
    'Nail Art',
    'Skincare',
    'Before & After',
    'Team'
  ];

  const filteredGallery = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleSliderMove = (clientX: number) => {
    if (!comparisonRef.current) return;
    const rect = comparisonRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const nextLightboxItem = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
  };

  const prevLightboxItem = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  // Keyboard accessibility for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        nextLightboxItem();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxItem();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Visual Inspiration ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          Portfolio & Transformations
        </h1>
        <p className="text-stone-500 font-sans font-light text-sm max-w-xl mx-auto">
          Explore our real guest hair transformations, bridal glow portraits, hand-sculpted nail art, and serene salon interior spaces.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* Draggable Before & After Comparison Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-blush p-6 sm:p-10 rounded-3xl shadow-sm space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Interactive Transformation</span>
            <h2 className="font-serif text-2xl font-light text-brand-charcoal">{BEFORE_AFTER.title}</h2>
            <p className="text-stone-500 text-xs font-light">{BEFORE_AFTER.description}</p>
          </div>

          <div 
            ref={comparisonRef}
            className="relative w-full max-w-3xl h-[320px] sm:h-[450px] mx-auto rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-md touch-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => isDragging && handleSliderMove(e.clientX)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={(e) => isDragging && handleSliderMove(e.touches[0].clientX)}
          >
            {/* After Image */}
            <img 
              src={BEFORE_AFTER.afterUrl} 
              alt="After Balayage & Styling" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-xs text-white text-xs px-3.5 py-1 rounded-full uppercase tracking-wider z-10 font-medium">
              After Transformation
            </span>

            {/* Before Image */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={BEFORE_AFTER.beforeUrl} 
                alt="Before Restoration" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: comparisonRef.current ? `${comparisonRef.current.clientWidth}px` : '100%' }}
              />
              <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-xs px-3.5 py-1 rounded-full uppercase tracking-wider z-10 font-medium">
                Before
              </span>
            </div>

            {/* Handle Bar */}
            <div 
              className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-brand-gold text-white flex items-center justify-center shadow-lg border-2 border-white">
                <Layers className="w-4 h-4" />
              </div>
            </div>
          </div>
          <p className="text-center text-[11px] text-stone-400 uppercase tracking-widest">
            Drag or swipe across the image to compare results
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                id={`gallery-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-brand-gold text-white shadow-md scale-105'
                    : 'bg-white border border-brand-blush text-brand-charcoal hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="bg-white rounded-3xl overflow-hidden border-2 border-brand-blush-dark/50 hover:border-brand-gold shadow-2xs hover:shadow-md cursor-pointer group relative aspect-square"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] text-brand-rose font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-light tracking-wide mt-1">{item.title}</h3>
                  <div className="mt-2 flex items-center space-x-1 text-xs text-brand-gold-light">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">Tap to Enlarge</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            id="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              id="prev-lightbox-btn"
              onClick={(e) => { e.stopPropagation(); prevLightboxItem(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image & Caption Display */}
            <div 
              className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-4 z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredGallery[activeLightboxIndex].imageUrl}
                alt={filteredGallery[activeLightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center text-white space-y-1">
                <span className="text-xs font-bold text-brand-rose uppercase tracking-widest block">
                  {filteredGallery[activeLightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl font-light">{filteredGallery[activeLightboxIndex].title}</h3>
                {filteredGallery[activeLightboxIndex].caption && (
                  <p className="text-xs text-stone-300 font-light max-w-md mx-auto">
                    {filteredGallery[activeLightboxIndex].caption}
                  </p>
                )}
              </div>
            </div>

            {/* Next Button */}
            <button
              id="next-lightbox-btn"
              onClick={(e) => { e.stopPropagation(); nextLightboxItem(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
