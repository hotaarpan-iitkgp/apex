import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play,
  Zap,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';
import { apexLabImages } from '@/data/portfolio';

interface Props {
  className?: string;
  autoPlayInterval?: number;
}

export default function ApexLabRibbon({ className = '', autoPlayInterval = 5500 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play slideshow for the background photos
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % apexLabImages.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, autoPlayInterval]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + apexLabImages.length) % apexLabImages.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % apexLabImages.length);
  }, []);

  const activeImage = apexLabImages[currentIndex];

  return (
    <div 
      id="apex-lab-ribbon"
      className={`w-full relative overflow-hidden bg-slate-950 border-y border-slate-800/80 shadow-2xl transition-all select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container: Full-width low-height panoramic banner */}
      <div className="relative w-full min-h-[420px] sm:min-h-[460px] md:h-[480px] flex items-center justify-center">
        
        {/* Background Rotating Images */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeImage.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <img
              src={activeImage.src}
              alt={activeImage.label}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-100"
              referrerPolicy="no-referrer"
            />

            {/* Refined overlays for legibility of centered text */}
            <div className="absolute inset-0 bg-slate-950/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
          </motion.div>
        </AnimatePresence>

        {/* Centered Content Layer */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Beautiful centered badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-[0.15em] border border-sky-500/30 bg-sky-950/70 text-sky-300 backdrop-blur-md shadow-sm">
              <Building2 className="h-3.5 w-3.5 text-sky-400" />
              ADVANCED POWER ELECTRONIX (APEX) LAB · IIT KHARAGPUR
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight drop-shadow-md max-w-3xl mx-auto">
              Pioneering the Future of Power Conversion
            </h2>

            {/* Sub-line */}
            <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-medium drop-shadow-md">
              Bridging frontier power electronics research with real-world industrial scale.
            </p>
          </motion.div>
        </div>

        {/* Minimal Navigation & Slide Controls (Bottom, Centered) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 shadow-xl">
          <button
            id="apex-ribbon-prev-btn"
            onClick={handlePrev}
            aria-label="Previous lab photo"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all active:scale-95"
            title="Previous lab photo"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Indicator Dots for the 4 uploaded lab photos */}
          <div className="flex items-center gap-1.5 px-1">
            {apexLabImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View photo ${idx + 1}`}
                title={img.label}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-6 bg-brand-accent shadow-[0_0_8px_rgba(0,210,255,0.7)]' 
                    : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            id="apex-ribbon-next-btn"
            onClick={handleNext}
            aria-label="Next lab photo"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all active:scale-95"
            title="Next lab photo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="w-[1px] h-3 bg-slate-700 mx-0.5" />

          <button
            id="apex-ribbon-play-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause photo transition' : 'Play photo transition'}
            className="p-1 rounded-full text-slate-300 hover:text-brand-accent hover:bg-slate-800/80 transition-all active:scale-95"
            title={isPlaying ? 'Pause photo transition' : 'Play photo transition'}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
        </div>

      </div>

      {/* Decorative hairline accent border on bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent pointer-events-none" />
    </div>
  );
}
