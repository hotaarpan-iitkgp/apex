import { useState, useRef } from 'react';
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
  GraduationCap
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
    default:
      return <Sparkles className="h-5 w-5" />;
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
  const activeApp: PedagogicalApp = pedagogicalApps[activeAppIndex];

  const handleSelectApp = (index: number) => {
    if (index === activeAppIndex) return;
    setIsLoading(true);
    setActiveAppIndex(index);
    setIframeKey(prev => prev + 1);
  };

  const handlePrev = () => {
    const nextIdx = (activeAppIndex - 1 + pedagogicalApps.length) % pedagogicalApps.length;
    handleSelectApp(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeAppIndex + 1) % pedagogicalApps.length;
    handleSelectApp(nextIdx);
  };

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      
      {/* 1. Horizontal App Selection Strip (Horizontal Moving / Clickable Cards) */}
      <div className="relative">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-secondary dark:text-brand-accent">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Select Interactive Pedagogical Tool ({activeAppIndex + 1} / {pedagogicalApps.length})</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              className="h-8 w-8 p-0 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
              title="Previous Application"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="h-8 w-8 p-0 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
              title="Next Application"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Scrollable Horizontal Pill Strip */}
        <div 
          ref={tabsContainerRef}
          className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pedagogicalApps.map((app, idx) => {
            const isSelected = idx === activeAppIndex;
            return (
              <button
                key={app.id}
                onClick={() => handleSelectApp(idx)}
                className={`flex-shrink-0 text-left snap-start transition-all duration-300 rounded-2xl p-3.5 sm:p-4 border min-w-[220px] sm:min-w-[250px] max-w-[280px] relative overflow-hidden group ${
                  isSelected 
                    ? 'bg-slate-950 text-white border-brand-accent shadow-lg shadow-brand-accent/10 ring-2 ring-brand-accent/30' 
                    : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 shadow-sm'
                }`}
              >
                {/* Active gradient accent top line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary via-brand-accent to-blue-400"></div>
                )}

                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl flex-shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-brand-accent text-slate-950 shadow-sm' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-brand-secondary group-hover:bg-brand-secondary/10'
                  }`}>
                    {getAppIcon(app.id)}
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block truncate ${
                      isSelected ? 'text-brand-accent' : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {app.category}
                    </span>
                    <h4 className={`font-serif font-bold text-sm leading-snug line-clamp-1 ${
                      isSelected ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {app.shortTitle}
                    </h4>
                  </div>
                </div>

                <p className={`text-[11px] mt-2 line-clamp-2 leading-relaxed ${
                  isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {app.tagline}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Embedded Big Area with Browser-Style Frame Header */}
      <div className={`relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'fixed inset-4 z-50 rounded-2xl flex flex-col' : 'w-full'
      }`}>
        
        {/* Browser Chrome Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md text-white text-xs z-20">
          
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
              <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-brand-accent/15 text-brand-accent text-[10px] font-mono font-bold">
                {activeApp.badge}
              </span>
            </div>
          </div>

          {/* URL bar indicator & Actions */}
          <div className="flex items-center gap-2">
            {/* Live active indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono text-[11px] max-w-xs truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="truncate">{activeApp.url}</span>
            </div>

            {/* Action buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={reloadIframe}
              className="h-8 px-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs gap-1.5"
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
              className="h-8 px-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-xs gap-1.5"
              title={isFullscreen ? "Exit Fullscreen" : "Expand Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Expand'}</span>
            </Button>

            <Button
              asChild
              size="sm"
              className="h-8 bg-brand-accent hover:bg-brand-accent/90 text-slate-950 font-bold rounded-lg text-xs px-3 shadow-sm gap-1.5"
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
          isFullscreen ? 'flex-1 h-full' : 'h-[580px] sm:h-[660px] lg:h-[720px]'
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
                <p className="text-xs text-slate-400 font-mono">Connecting to GitHub Pages live sandbox</p>
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
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-slate-950/95 backdrop-blur-xl border-l border-slate-800 p-6 z-20 text-white overflow-y-auto space-y-6 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-brand-accent" />
                    <h4 className="font-serif font-bold text-base text-white">Pedagogical Overview</h4>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowInfo(false)}
                    className="h-7 w-7 p-0 text-slate-400 hover:text-white rounded-full"
                  >
                    ✕
                  </Button>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                    {activeApp.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-white">
                    {activeApp.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {activeApp.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Physical Concepts
                  </h5>
                  <ul className="space-y-2">
                    {activeApp.concepts.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Features in This App
                  </h5>
                  <ul className="space-y-2">
                    {activeApp.keyFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary dark:bg-brand-accent mt-1.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Integrated Courses at IIT Kharagpur
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeApp.suggestedCourses.map((crs, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-md text-[11px] font-mono text-brand-accent">
                        {crs}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <Button asChild className="w-full bg-brand-accent hover:bg-brand-accent/90 text-slate-950 font-bold rounded-xl text-xs py-5">
                    <a href={activeApp.url} target="_blank" rel="noopener noreferrer">
                      Open Dedicated Full View <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Bottom bar summary & quick controls */}
        <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">Interactive Controls:</span>
            <span>Use sliders, parameter dials, and circuit selectors directly inside the live viewport above.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-slate-400">
              Developed by <strong className="text-white">Dr. Arpan Hota</strong> for pedagogical coursework
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
