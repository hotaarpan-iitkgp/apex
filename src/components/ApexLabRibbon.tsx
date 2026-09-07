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
      <div className="relative w-full min-h-[340px] sm:min-h-[360px] md:h-[380px] flex items-center">
        
        {/* Background Rotating Images - Much lighter overlay so images are clearly visible */}
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
              className="w-full h-full object-cover object-center filter brightness-100 contrast-100"
              referrerPolicy="no-referrer"
            />

            {/* Light, refined overlays - NOT pitch black. The right half is left completely open for clear photo visibility */}
            {/* Soft left-to-right gradient to ensure text readability on the left without obscuring the photo */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent lg:w-2/3 w-full" />
            
            {/* Subtle top & bottom edges to seamlessly blend with the dark page layout */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Fixed Content Layer: Describes the APEX Lab, its mission and cutting-edge research */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-8">
          <div className="max-w-2xl space-y-4">
            
            {/* Fixed Eyebrow Badges: Lab Title and Department Location */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider border border-sky-500/40 bg-sky-950/70 text-sky-300 backdrop-blur-md shadow-sm">
                <Building2 className="h-3.5 w-3.5 text-sky-400" />
                ADVANCED POWER ELECTRONIX (APEX) LAB
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-700/60 backdrop-blur-md">
                <MapPin className="h-3 w-3 text-brand-accent flex-shrink-0" />
                <span>Room N 210 · EE Dept, IIT Kharagpur</span>
              </span>
            </div>

            {/* Fixed Heading */}
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                Cutting-Edge Power Electronics & Drives Research
              </h3>
              <p className="text-xs sm:text-sm font-sans font-medium text-brand-accent tracking-wide drop-shadow">
                Pioneering Next-Generation Wide-Bandgap Converters & Electrification Systems
              </p>
            </div>

            {/* Fixed Description describing the APEX Lab */}
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-xl font-normal drop-shadow">
              At the APEX Laboratory, cutting-edge research in advanced power electronics and electric motor drives happens daily. Our team develops ultra-dense wide-bandgap (SiC & GaN) converter architectures, high-frequency planar magnetics, real-time hardware-in-the-loop (HIL) testbeds, and AI-accelerated digital twins for electric mobility, heavy traction, and clean renewable energy systems.
            </p>

            {/* Fixed Technical Pillars */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 bg-slate-900/85 border border-slate-700/80 backdrop-blur-sm shadow-sm">
                <Zap className="h-3 w-3 text-amber-400 flex-shrink-0" />
                Wide-Bandgap (SiC / GaN)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 bg-slate-900/85 border border-slate-700/80 backdrop-blur-sm shadow-sm">
                <Cpu className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                EV Traction & Motor Drives
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 bg-slate-900/85 border border-slate-700/80 backdrop-blur-sm shadow-sm">
                <Activity className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                100 kW Dynamic Testbeds
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 bg-slate-900/85 border border-slate-700/80 backdrop-blur-sm shadow-sm">
                <Layers className="h-3 w-3 text-purple-400 flex-shrink-0" />
                HIL Real-Time Emulation
              </span>
            </div>

          </div>
        </div>

        {/* Minimal Navigation & Slide Controls (Bottom-Right, discrete) */}
        <div className="absolute bottom-4 right-4 sm:right-8 z-30 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 shadow-xl">
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
