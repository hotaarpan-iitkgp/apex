import { useState, useRef, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Zap, 
  Waves, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Info,
  GraduationCap,
  Play,
  ArrowRight,
  MoveHorizontal,
  Activity,
  Gamepad2
} from 'lucide-react';
import { pedagogicalApps, PedagogicalApp } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
  defaultAppId?: string;
}

const getAppIcon = (id: string) => {
  switch (id) {
    case 'power-factor':
      return <Zap className="h-5 w-5" />;
    case 'vismmf':
      return <Compass className="h-5 w-5" />;
    case 'rectifier-lab':
      return <Cpu className="h-5 w-5" />;
    case 'dc-dc-converters':
      return <Layers className="h-5 w-5" />;
    case 'emanimate':
      return <Waves className="h-5 w-5" />;
    case 'inverter-lab':
      return <Activity className="h-5 w-5" />;
    case 'current-racer':
      return <Gamepad2 className="h-5 w-5" />;
    default:
      return <Sparkles className="h-5 w-5" />;
  }
};

const getAccentColor = (id: string) => {
  switch (id) {
    case 'power-factor':
      return {
        badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
        glow: 'from-amber-500/20 to-transparent',
        dot: 'bg-amber-400',
      };
    case 'vismmf':
      return {
        badge: 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30',
        glow: 'from-sky-500/20 to-transparent',
        dot: 'bg-sky-400',
      };
    case 'rectifier-lab':
      return {
        badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
        glow: 'from-emerald-500/20 to-transparent',
        dot: 'bg-emerald-400',
      };
    case 'dc-dc-converters':
      return {
        badge: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
        glow: 'from-indigo-500/20 to-transparent',
        dot: 'bg-indigo-400',
      };
    case 'emanimate':
      return {
        badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
        glow: 'from-rose-500/20 to-transparent',
        dot: 'bg-rose-400',
      };
    case 'inverter-lab':
      return {
        badge: 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30',
        glow: 'from-violet-500/20 to-transparent',
        dot: 'bg-violet-400',
      };
    case 'current-racer':
      return {
        badge: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30',
        glow: 'from-teal-500/20 to-transparent',
        dot: 'bg-teal-400',
      };
    default:
      return {
        badge: 'bg-brand-accent/15 text-brand-accent border-brand-accent/30',
        glow: 'from-brand-accent/20 to-transparent',
        dot: 'bg-brand-accent',
      };
  }
};

export default function InteractiveAppsShowcase({ className = '', defaultAppId }: Props) {
  const [activeAppIndex, setActiveAppIndex] = useState(() => {
    if (defaultAppId) {
      const idx = pedagogicalApps.findIndex(a => a.id === defaultAppId);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const activeApp: PedagogicalApp = pedagogicalApps[activeAppIndex];

  // Center selected card smoothly in the ribbon viewport
  const centerCard = (index: number) => {
    const container = tabsContainerRef.current;
    const card = cardRefs.current[index];
    if (container && card) {
      const containerWidth = container.offsetWidth;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const targetScrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth'
      });
    }
  };

  const handleSelectApp = (index: number) => {
    if (index === activeAppIndex) {
      centerCard(index);
      return;
    }
    setIsLoading(true);
    setActiveAppIndex(index);
    setIframeKey(prev => prev + 1);
    setTimeout(() => {
      centerCard(index);
    }, 40);
  };

  const scrollRibbon = (direction: 'left' | 'right') => {
    const container = tabsContainerRef.current;
    if (!container) return;
    const scrollDelta = container.offsetWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollDelta : scrollDelta,
      behavior: 'smooth'
    });
  };

  // Mouse drag-to-scroll listeners
  const handleMouseDown = (e: MouseEvent) => {
    const container = tabsContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = tabsContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 6) {
      hasMovedRef.current = true;
    }
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  // Center initial active card on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      centerCard(activeAppIndex);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full space-y-8 ${className}`}>
      
      {/* 1. Full Horizontal Screen Width Ribbon Card Bar */}
      <div className="w-full bg-slate-50/80 dark:bg-slate-900/60 border-y border-slate-200/90 dark:border-slate-800/90 py-5 sm:py-6 shadow-xs space-y-4 relative overflow-hidden">
        
        {/* Ribbon Header: Spanning across the full screen width with side padding */}
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200/70 dark:border-slate-800/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                Interactive Pedagogical Tool Scroller
              </h3>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                Active: {activeApp.shortTitle || activeApp.title} ({activeAppIndex + 1} of {pedagogicalApps.length})
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-serif italic">
              <MoveHorizontal className="h-3.5 w-3.5 text-slate-400 inline" />
              Scroll or drag horizontally. Click any tool tile to bring it into center focus and launch in the workbench below.
            </p>
          </div>

          {/* Left / Right Ribbon Glide Controls */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider hidden md:inline">
              Slide Scroller:
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollRibbon('left')}
              className="h-9 w-9 p-0 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs transition-all duration-200 active:scale-95"
              title="Slide Scroller Left"
            >
              <ChevronLeft className="h-4 w-4 text-slate-700 dark:text-slate-300" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollRibbon('right')}
              className="h-9 w-9 p-0 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs transition-all duration-200 active:scale-95"
              title="Slide Scroller Right"
            >
              <ChevronRight className="h-4 w-4 text-slate-700 dark:text-slate-300" />
            </Button>
          </div>
        </div>

        {/* Edge-to-Edge Horizontally Scrolling Tiles Track */}
        <div className="relative w-full">
          
          {/* Visual gradient edge fades to indicate horizontal depth */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50/95 dark:from-slate-900/95 to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50/95 dark:from-slate-900/95 to-transparent z-10 hidden sm:block" />

          {/* Horizontal Track with drag-to-scroll and full horizontal space occupancy */}
          <div 
            ref={tabsContainerRef}
            tabIndex={0}
            aria-label="Pedagogical Applications Horizontal Scroller"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto py-3 px-4 sm:px-8 lg:px-12 xl:px-16 no-scrollbar scroll-smooth snap-x snap-mandatory focus:outline-none cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pedagogicalApps.map((app, idx) => {
              const isSelected = idx === activeAppIndex;
              const accent = getAccentColor(app.id);

              return (
                <button
                  key={app.id}
                  ref={el => (cardRefs.current[idx] = el)}
                  type="button"
                  onClick={() => {
                    if (!hasMovedRef.current) {
                      handleSelectApp(idx);
                    }
                  }}
                  className={`flex-shrink-0 text-left snap-center transition-all duration-300 rounded-2xl p-5 border flex flex-col justify-between gap-4 relative overflow-hidden group cursor-pointer w-[270px] sm:w-[300px] md:w-[320px] lg:w-[340px] ${
                    isSelected 
                      ? 'bg-slate-950 text-white border-2 border-brand-accent shadow-xl shadow-brand-accent/20 ring-4 ring-brand-accent/25 scale-[1.02] z-10' 
                      : 'bg-white/95 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-slate-800 hover:border-brand-secondary/50 dark:hover:border-brand-accent/50 hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-850 shadow-xs'
                  }`}
                >
                  {/* Top Row: Icon, Category Badge & Sequence Index */}
                  <div className="flex items-start justify-between gap-2.5 w-full">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105 duration-200 ${
                        isSelected 
                          ? 'bg-brand-accent text-slate-950 shadow-md font-bold' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-secondary/15 group-hover:text-brand-secondary dark:group-hover:text-brand-accent'
                      }`}>
                        {getAppIcon(app.id)}
                      </div>

                      <div className="min-w-0">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border inline-block max-w-full truncate ${
                          isSelected 
                            ? 'bg-white/10 text-brand-accent border-brand-accent/40' 
                            : accent.badge
                        }`}>
                          {app.category}
                        </span>
                      </div>
                    </div>

                    <span className={`text-xs font-mono font-bold flex-shrink-0 ${
                      isSelected ? 'text-brand-accent' : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Middle Content: Title and Generous Description */}
                  <div className="space-y-1.5 w-full">
                    <h4 className={`font-serif font-bold text-base sm:text-lg leading-snug ${
                      isSelected ? 'text-white' : 'text-slate-900 dark:text-white group-hover:text-brand-secondary dark:group-hover:text-brand-accent'
                    }`}>
                      {app.shortTitle || app.title}
                    </h4>
                    <p className={`text-xs sm:text-[13px] leading-relaxed line-clamp-2 ${
                      isSelected ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {app.tagline || app.description}
                    </p>
                  </div>

                  {/* Bottom Footer: Active Indicator or Action Prompt */}
                  <div className={`pt-3 border-t flex items-center justify-between text-xs font-mono transition-colors ${
                    isSelected 
                      ? 'border-slate-800 text-brand-accent' 
                      : 'border-slate-100 dark:border-slate-800/80 text-slate-500 group-hover:text-brand-secondary dark:group-hover:text-brand-accent'
                  }`}>
                    <div className="flex items-center gap-1.5 font-semibold">
                      {isSelected ? (
                        <>
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>ACTIVE IN WORKBENCH</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 fill-current opacity-70" />
                          <span>Click to Center</span>
                        </>
                      )}
                    </div>

                    <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isSelected ? 'translate-x-0.5 text-brand-accent' : 'group-hover:translate-x-1 opacity-60 group-hover:opacity-100'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Indicator Progress Dots for Quick Navigation */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {pedagogicalApps.map((app, idx) => (
            <button
              key={`dot-${app.id}`}
              type="button"
              onClick={() => handleSelectApp(idx)}
              aria-label={`Jump to ${app.shortTitle}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeAppIndex 
                  ? 'w-8 bg-brand-accent shadow-xs' 
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Embedded Workbench Viewport - Kept in the middle like previous case */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl transition-all duration-300 ${
          isFullscreen ? 'fixed inset-4 z-50 rounded-2xl flex flex-col' : 'w-full'
        }`}>
        
        {/* Browser Chrome Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md text-white text-xs z-20">
          
          {/* Window dots & App Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>

            <div className="h-4 w-px bg-slate-800 mx-1"></div>

            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-brand-accent/20 text-brand-accent">
                {getAppIcon(activeApp.id)}
              </div>
              <span className="font-serif font-bold text-white text-xs sm:text-sm truncate max-w-[200px] sm:max-w-md">
                {activeApp.title}
              </span>
              <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-brand-accent/15 text-brand-accent text-[10px] font-mono font-bold border border-brand-accent/30">
                {activeApp.badge}
              </span>
            </div>
          </div>

          {/* URL bar indicator & Actions */}
          <div className="flex items-center gap-2">
            {/* Live active URL indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono text-[11px] max-w-sm truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="truncate">{activeApp.url}</span>
            </div>

            {/* Action buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={reloadIframe}
              className="h-8 px-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs gap-1.5"
              title="Reload Simulation"
            >
              <RotateCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowInfo(!showInfo)}
              className={`h-8 px-2.5 rounded-lg text-xs gap-1.5 ${
                showInfo ? 'bg-brand-accent text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              title="Concept & Learning Information"
            >
              <Info className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Theory</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-8 px-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs gap-1.5"
              title={isFullscreen ? "Exit Fullscreen" : "Expand Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Expand'}</span>
            </Button>

            <Button
              asChild
              size="sm"
              className="h-8 bg-brand-accent hover:bg-brand-accent/90 text-slate-950 font-bold rounded-lg text-xs px-3 shadow-xs gap-1.5"
            >
              <a href={activeApp.url} target="_blank" rel="noopener noreferrer">
                <span>Open in Tab</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

        </div>

        {/* Live Simulation IFrame Viewport */}
        <div className={`relative w-full bg-slate-900 ${
          isFullscreen ? 'flex-1 h-full' : 'h-[600px] sm:h-[680px] lg:h-[740px]'
        }`}>
          
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 text-white">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-brand-accent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-brand-accent">
                  {getAppIcon(activeApp.id)}
                </div>
              </div>
              <div className="text-center space-y-1">
                <p className="font-serif font-bold text-base text-white">Loading {activeApp.shortTitle}...</p>
                <p className="text-xs text-slate-400 font-mono">Connecting to live simulation</p>
              </div>
            </div>
          )}

          <iframe
            key={`${activeApp.id}-${iframeKey}`}
            src={activeApp.url}
            title={activeApp.title}
            className="w-full h-full border-0 bg-white"
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />

          {/* Collapsible Info/Theory Slide-Over Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute right-0 top-0 bottom-0 w-full sm:w-96 bg-slate-950/95 border-l border-slate-800 text-white p-6 overflow-y-auto z-20 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <GraduationCap className="h-5 w-5" />
                    <h4 className="font-serif font-bold text-lg text-white">Curriculum & Theory</h4>
                  </div>
                  <button
                    onClick={() => setShowInfo(false)}
                    className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 text-sm"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6 text-xs text-slate-300">
                  <div>
                    <h5 className="font-mono uppercase tracking-wider text-[10px] text-brand-accent font-bold mb-1.5">
                      Pedagogical Objective
                    </h5>
                    <p className="leading-relaxed text-slate-300 font-sans">
                      {activeApp.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-mono uppercase tracking-wider text-[10px] text-brand-accent font-bold mb-2">
                      Core Academic Concepts
                    </h5>
                    <ul className="space-y-2">
                      {activeApp.concepts.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-mono uppercase tracking-wider text-[10px] text-brand-accent font-bold mb-2">
                      Interactive Capabilities
                    </h5>
                    <ul className="space-y-1.5">
                      {activeApp.keyFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
                          <span className="text-brand-accent">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-mono uppercase tracking-wider text-[10px] text-brand-accent font-bold mb-2">
                      Suggested IIT KGP Courses
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeApp.suggestedCourses.map((c, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono text-[10px]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-bold">Interactive Controls:</span>
            <span>Use sliders, parameter dials, and circuit selections directly inside the live viewport above.</span>
          </div>
          <div className="text-slate-300">
            Developed by <strong className="text-white">Dr. Arpan Hota</strong> for pedagogical coursework
          </div>
        </div>

      </div>
    </div>

    </div>
  );
}
