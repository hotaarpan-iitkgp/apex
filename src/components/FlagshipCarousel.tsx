import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  ArrowUpRight,
  Check
} from 'lucide-react';
import { flagshipFrontiers } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

export default function FlagshipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto scroll effect
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flagshipFrontiers.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + flagshipFrontiers.length) % flagshipFrontiers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flagshipFrontiers.length);
  };

  const currentItem = flagshipFrontiers[currentIndex];

  return (
    <div className="space-y-10">
      
      {/* 1. Sleek Minimalist Tab Navigation Bar */}
      <div className="border-b border-slate-800 pb-2">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-2 sm:gap-6 min-w-max">
            {flagshipFrontiers.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`group relative pb-3 px-1 text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold transition-colors ${
                    isActive ? 'text-brand-accent' : 'text-slate-500 group-hover:text-slate-400'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
                  
                  {/* Active Golden Line Indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeFrontierTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimal Play Controls */}
          <div className="flex items-center gap-2 pl-4 border-l border-slate-800 flex-shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-md"
              title={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Sleek Showcase Content (Unboxed, Pure Typography & Photography) */}
      <div className="relative min-h-[460px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            
            {/* Left Column: Pure Typography & Insights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                {/* Category Badge & Stats */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                    {currentItem.badge}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                    ⚡ {currentItem.stats}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
                  {currentItem.title}
                </h3>

                {/* Subtitle */}
                <p className="text-brand-accent font-serif italic text-base sm:text-lg">
                  {currentItem.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {currentItem.summary}
              </p>

              {/* Key Research Innovations List (Unboxed, Minimal Dots) */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
                  Key Research Innovations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Validation Indicator */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400 border-l-2 border-brand-accent/60 pl-3">
                <span>Validated via Typhoon HIL & Hardware Testbeds at APEX Lab, IIT Kharagpur</span>
              </div>

            </div>

            {/* Right Column: Clean Photography Frame */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-800">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Photo Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-serif font-bold text-slate-200 truncate pr-2">
                    {currentItem.title}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-accent bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 flex-shrink-0">
                    APEX Lab
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Bottom Controls & Progress Bar */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-6">
        
        {/* Progress Dots / Numbers */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-white">
            0{currentIndex + 1}
          </span>
          <div className="w-24 sm:w-36 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / flagshipFrontiers.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="text-xs font-mono text-slate-500">
            0{flagshipFrontiers.length}
          </span>
        </div>

        {/* Next / Previous Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrev}
            className="text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/80 rounded-lg text-xs gap-1 h-9 px-3"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleNext}
            className="text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/80 rounded-lg text-xs gap-1 h-9 px-3"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

      </div>

    </div>
  );
}
