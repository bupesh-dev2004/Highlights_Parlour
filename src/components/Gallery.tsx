import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, BEFORE_AFTER, REELS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [playingReel, setPlayingReel] = useState<string | null>(null);

  const filters = ['All', 'Hair', 'Skin', 'Nails', 'Spa', 'Bridal', 'Makeup'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const isDragging = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Before/after slider interaction handlers
  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="space-y-24 py-12 pb-24">
      
      {/* Page Header */}
      <section className="max-w-4xl mx-auto text-center px-4 space-y-4">
        <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
          ✦ Visual Portfolios ✦
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-light leading-tight">
          A Symphony of Transformations
        </h1>
        <p className="text-stone-500 font-sans font-light max-w-2xl mx-auto text-sm sm:text-base">
          Explore actual results of our couture coloring, bridal makeovers, and rejuvenating aesthetic treatments.
        </p>
        <div className="h-0.5 w-20 bg-brand-gold/40 mx-auto" />
      </section>

      {/* 1. Interactive Before/After Slider Section */}
      <section id="transformation-slider" className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-blush shadow-xs space-y-6">
          <div className="text-center space-y-2">
            <span className="text-brand-gold uppercase tracking-widest text-[10px] font-bold">Featured Transformation</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal">{BEFORE_AFTER.title}</h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
              {BEFORE_AFTER.description}
            </p>
          </div>

          {/* Interactive Split Viewport */}
          <div
            ref={sliderRef}
            className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize"
            onMouseDown={(e) => {
              isDragging.current = true;
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              isDragging.current = true;
              handleMove(e.touches[0].clientX);
            }}
            onMouseMove={(e) => {
              if (isDragging.current) handleMove(e.clientX);
            }}
            onTouchMove={(e) => {
              if (isDragging.current) handleMove(e.touches[0].clientX);
            }}
          >
            {/* "After" Image (Background) */}
            <img
              src={BEFORE_AFTER.afterUrl}
              alt="After styled look"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3.5 py-1.5 rounded-full font-bold tracking-widest uppercase select-none z-10">
              AFTER
            </span>

            {/* "Before" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={BEFORE_AFTER.beforeUrl}
                alt="Before style"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: sliderRef.current?.getBoundingClientRect().width || 800 }}
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3.5 py-1.5 rounded-full font-bold tracking-widest uppercase select-none z-10">
              BEFORE
            </span>

            {/* Divider bar handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white border border-brand-gold text-brand-gold shadow-md flex items-center justify-center shrink-0">
                <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
                <ChevronRight className="w-3.5 h-3.5 shrink-0 -ml-1" />
              </div>
            </div>

            {/* Drag helper tooltip overlay */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/95 text-brand-gold text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full shadow-md uppercase select-none pointer-events-none">
              Drag Center Handle
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filterable Image Grid */}
      <section id="gallery-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
          {filters.map((f) => (
            <button
              id={`gallery-filter-${f.toLowerCase()}`}
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-brand-gold text-white shadow-xs'
                  : 'bg-white border border-brand-blush/60 text-stone-500 hover:text-brand-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="bg-white rounded-3xl overflow-hidden border border-brand-blush/50 shadow-xs hover:shadow-md cursor-pointer group relative"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-brand-gold shadow-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <span className="text-[10px] text-brand-gold font-medium uppercase tracking-widest block">{item.category}</span>
                <h3 className="font-serif text-base sm:text-lg font-light text-brand-charcoal mt-1 leading-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. Video/Reels section */}
      <section id="gallery-reels-section" className="bg-brand-blush/30 py-20 border-y border-brand-blush/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
              ✦ Cinematic Moments
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-light">
              Atmospheric Video & Reels
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {REELS.map((reel) => {
              const isPlaying = playingReel === reel.id;
              return (
                <div
                  key={reel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-brand-rose/30 shadow-xs group"
                >
                  <div className="aspect-video relative bg-black flex items-center justify-center">
                    {isPlaying ? (
                      <video
                        src={reel.videoPlaceholderUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={reel.thumbnail}
                          alt={reel.title}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          id={`play-reel-${reel.id}`}
                          onClick={() => setPlayingReel(reel.id)}
                          className="absolute w-16 h-16 rounded-full bg-brand-gold/90 text-white shadow-lg hover:bg-brand-gold flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                          aria-label="Play video"
                        >
                          <Play className="w-6 h-6 fill-white ml-1" />
                        </button>
                        <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                          {reel.duration}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-base sm:text-lg text-brand-charcoal font-medium leading-snug">{reel.title}</h3>
                    <p className="text-stone-400 text-xs mt-1">Cinematic walk-through • Verified Aura Experience</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox Popup Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-100 bg-brand-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              id="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              id="lightbox-prev-btn"
              onClick={prevLightbox}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full flex flex-col space-y-4"
            >
              <div className="aspect-square sm:aspect-video rounded-2xl overflow-hidden bg-stone-900 border border-white/10 flex items-center justify-center max-h-[70vh]">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center text-white space-y-1">
                <span className="text-[10px] text-brand-rose font-medium tracking-widest uppercase">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-light">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-stone-400">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>

            <button
              id="lightbox-next-btn"
              onClick={nextLightbox}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
