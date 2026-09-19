import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  ChevronDown, 
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
  Activity,
  Gamepad2,
  Search,
  Folder,
  FolderOpen,
  X,
  BookOpen,
  PanelLeftClose,
  PanelLeft,
  ChevronsUpDown,
  Laptop
} from 'lucide-react';
import { pedagogicalApps, PedagogicalApp } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
  defaultAppId?: string;
}

const getAppIcon = (id: string, className = "h-4 w-4") => {
  switch (id) {
    case 'power-factor':
      return <Zap className={className} />;
    case 'vismmf':
      return <Compass className={className} />;
    case 'rectifier-lab':
      return <Cpu className={className} />;
    case 'dc-dc-converters':
      return <Layers className={className} />;
    case 'emanimate':
      return <Waves className={className} />;
    case 'inverter-lab':
      return <Activity className={className} />;
    case 'current-racer':
      return <Gamepad2 className={className} />;
    case 'traction-inverter':
      return <Cpu className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

const getCategoryBadgeStyle = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('power electronics')) {
    return {
      badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      activeText: 'text-emerald-400',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
    };
  }
  if (cat.includes('machine') || cat.includes('field')) {
    return {
      badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      activeText: 'text-amber-400',
      iconBg: 'bg-amber-500/20 text-amber-400',
    };
  }
  if (cat.includes('circuit') || cat.includes('power system') || cat.includes('ac')) {
    return {
      badge: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
      activeText: 'text-sky-400',
      iconBg: 'bg-sky-500/20 text-sky-400',
    };
  }
  return {
    badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    activeText: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
  };
};

export default function InteractiveAppsShowcase({ className = '', defaultAppId }: Props) {
  // Active selected application state
  const [activeAppId, setActiveAppId] = useState<string>(() => {
    if (defaultAppId && pedagogicalApps.some(a => a.id === defaultAppId)) {
      return defaultAppId;
    }
    return pedagogicalApps[0]?.id || '';
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Derive unique categories from dataset in preferred curricular order
  const categories = useMemo(() => {
    const preferredOrder = [
      "Power Electronics",
      "Electrical Machines & Fields",
      "AC Circuits & Power Systems"
    ];
    const presentCats = Array.from(new Set(pedagogicalApps.map(app => app.category)));
    return presentCats.sort((a, b) => {
      const idxA = preferredOrder.indexOf(a);
      const idxB = preferredOrder.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.localeCompare(b);
    });
  }, []);

  // Track expanded state for categories in the accordion
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    categories.forEach(cat => {
      initial[cat] = true; // all expanded by default
    });
    return initial;
  });

  // Current active app
  const activeApp: PedagogicalApp = useMemo(() => {
    return pedagogicalApps.find(a => a.id === activeAppId) || pedagogicalApps[0];
  }, [activeAppId]);

  // Expand the category containing the active app when active app changes
  useEffect(() => {
    if (activeApp?.category) {
      setExpandedCategories(prev => ({
        ...prev,
        [activeApp.category]: true
      }));
    }
  }, [activeAppId, activeApp?.category]);

  // Filter apps based on search query and category filter
  const filteredApps = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return pedagogicalApps.filter(app => {
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!q) return true;
      const matchTitle = app.title.toLowerCase().includes(q) || app.shortTitle.toLowerCase().includes(q);
      const matchDesc = app.description.toLowerCase().includes(q) || app.tagline.toLowerCase().includes(q);
      const matchCategory = app.category.toLowerCase().includes(q);
      const matchConcepts = app.concepts.some(c => c.toLowerCase().includes(q));
      const matchCourses = app.suggestedCourses.some(c => c.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchCategory || matchConcepts || matchCourses;
    });
  }, [searchQuery, selectedCategory]);

  // Group filtered apps by category
  const groupedApps = useMemo(() => {
    const map = new Map<string, PedagogicalApp[]>();
    
    // Maintain category ordering
    categories.forEach(cat => {
      map.set(cat, []);
    });

    filteredApps.forEach(app => {
      if (!map.has(app.category)) {
        map.set(app.category, []);
      }
      map.get(app.category)!.push(app);
    });

    // Remove categories with 0 filtered items
    const result: { category: string; apps: PedagogicalApp[] }[] = [];
    map.forEach((apps, category) => {
      if (apps.length > 0) {
        result.push({ category, apps });
      }
    });

    return result;
  }, [categories, filteredApps]);

  // Auto-expand all matching categories when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const allOpen: Record<string, boolean> = {};
      groupedApps.forEach(g => {
        allOpen[g.category] = true;
      });
      setExpandedCategories(prev => ({ ...prev, ...allOpen }));
    }
  }, [searchQuery, groupedApps]);

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    categories.forEach(cat => {
      allOpen[cat] = true;
    });
    setExpandedCategories(allOpen);
  };

  const collapseAll = () => {
    const allClosed: Record<string, boolean> = {};
    categories.forEach(cat => {
      allClosed[cat] = false;
    });
    setExpandedCategories(allClosed);
  };

  const handleSelectApp = (appId: string) => {
    if (appId === activeAppId) return;
    setIsLoading(true);
    setActiveAppId(appId);
    setIframeKey(prev => prev + 1);
  };

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 ${className}`}>
      
      {/* Top Header & Search Bar Suite */}
      <div className="bg-slate-900/90 dark:bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Section Summary */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-100">
                Interactive Virtual Laboratories & Pedagogical Suite
              </h3>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                {pedagogicalApps.length} Live Sandboxes
              </span>
            </div>
            <p className="text-xs text-slate-400 font-serif italic">
              Select any simulator from the categorized library on the left to launch immediately in the high-fidelity workbench.
            </p>
          </div>

          {/* Quick Search & Filter Toolbar */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topic, course, circuit..."
                className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-950/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 rounded-full"
                  title="Clear search"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Mobile Sidebar Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden h-9 px-3 rounded-xl border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-xs gap-1.5"
            >
              {isSidebarOpen ? <PanelLeftClose className="h-3.5 w-3.5" /> : <PanelLeft className="h-3.5 w-3.5" />}
              <span>{isSidebarOpen ? 'Hide Library' : 'Browse Labs'}</span>
            </Button>
          </div>

        </div>

        {/* Category Filter Chips Bar - Horizontal Scrolling */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex-shrink-0 mr-1 flex items-center gap-1.5">
            <Laptop className="h-3 w-3 text-emerald-400" /> Filter:
          </span>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              selectedCategory === 'All'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
            }`}
          >
            All Disciplines ({pedagogicalApps.length})
          </button>
          {categories.map(cat => {
            const count = pedagogicalApps.filter(a => a.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Master-Detail Layout: Left Categorized Sidebar + Right Interactive Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Categorized Collapsible Labs Playlist (4 cols on lg, 3.5 on xl) */}
        <div className={`space-y-4 transition-all duration-300 ${
          isSidebarOpen ? 'lg:col-span-4 xl:col-span-4 block' : 'hidden'
        }`}>
          
          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 shadow-2xl overflow-hidden flex flex-col max-h-[820px]">
            
            {/* Sidebar Header */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-400" />
                <h4 className="font-serif font-bold text-sm text-white">
                  Curriculum Simulators
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {filteredApps.length}
                </span>
              </div>

              {/* Expand / Collapse All */}
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  onClick={expandAll}
                  className="px-2 py-0.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Expand All Categories"
                >
                  Expand
                </button>
                <span className="text-slate-600">/</span>
                <button
                  onClick={collapseAll}
                  className="px-2 py-0.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Collapse All Categories"
                >
                  Collapse
                </button>
              </div>
            </div>

            {/* Scrollable Playlist of Categories */}
            <div className="overflow-y-auto divide-y divide-slate-800/60 p-2 space-y-2.5 custom-scrollbar">
              {groupedApps.length === 0 ? (
                <div className="p-8 text-center space-y-2">
                  <Search className="h-8 w-8 text-slate-600 mx-auto" />
                  <p className="text-xs font-semibold text-slate-400">No matching simulators found</p>
                  <p className="text-[11px] text-slate-400">Try adjusting your search query or reset the category filter.</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="mt-2 text-xs border-slate-700 text-slate-300"
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                groupedApps.map(({ category, apps }) => {
                  const isExpanded = !!expandedCategories[category];
                  const style = getCategoryBadgeStyle(category);
                  const activeInCat = apps.some(a => a.id === activeAppId);

                  return (
                    <div 
                      key={category} 
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        activeInCat 
                          ? 'border-slate-700/90 bg-slate-900/60' 
                          : 'border-slate-800/70 bg-slate-900/30 hover:border-slate-700/60'
                      }`}
                    >
                      {/* Accordion Category Header */}
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-800/50 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {isExpanded ? (
                            <FolderOpen className={`h-4 w-4 ${style.activeText} flex-shrink-0`} />
                          ) : (
                            <Folder className="h-4 w-4 text-slate-400 group-hover:text-slate-300 flex-shrink-0" />
                          )}
                          <span className="font-serif font-bold text-xs sm:text-[13px] text-slate-200 group-hover:text-white truncate">
                            {category}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${style.badge}`}>
                            {apps.length}
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-transform" />
                          ) : (
                            <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-transform" />
                          )}
                        </div>
                      </button>

                      {/* Accordion App Items */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="divide-y divide-slate-800/40 border-t border-slate-800/60 bg-slate-950/40"
                          >
                            {apps.map((app) => {
                              const isCurrent = app.id === activeAppId;
                              return (
                                <div
                                  key={app.id}
                                  onClick={() => handleSelectApp(app.id)}
                                  className={`p-3 sm:p-3.5 flex items-start gap-3 transition-all cursor-pointer group relative ${
                                    isCurrent
                                      ? 'bg-emerald-500/10 text-white border-l-4 border-l-emerald-400'
                                      : 'hover:bg-slate-800/50 text-slate-300'
                                  }`}
                                >
                                  {/* Icon Thumbnail */}
                                  <div className={`p-2 rounded-xl flex-shrink-0 mt-0.5 transition-colors ${
                                    isCurrent
                                      ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                                      : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700 group-hover:text-white'
                                  }`}>
                                    {getAppIcon(app.id, "h-4 w-4")}
                                  </div>

                                  {/* Text Meta */}
                                  <div className="flex-1 min-w-0 space-y-1">
                                    <div className="flex items-center justify-between gap-1.5">
                                      <h5 className={`font-serif font-bold text-xs sm:text-[13px] leading-snug truncate ${
                                        isCurrent ? 'text-white' : 'text-slate-200 group-hover:text-emerald-300'
                                      }`}>
                                        {app.shortTitle || app.title}
                                      </h5>

                                      {isCurrent ? (
                                        <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold flex-shrink-0">
                                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                          Active
                                        </span>
                                      ) : (
                                        <Play className="h-3 w-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                      )}
                                    </div>

                                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-sans">
                                      {app.tagline || app.description}
                                    </p>

                                    <div className="flex items-center gap-2 pt-1">
                                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                                        {app.badge}
                                      </span>
                                      {app.suggestedCourses[0] && (
                                        <span className="text-[9px] font-mono text-slate-400 truncate">
                                          {app.suggestedCourses[0]}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Quick Open in Tab external link */}
                                  <a
                                    href={app.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-1 rounded text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors flex-shrink-0"
                                    title="Open directly in new tab"
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              )}
            </div>

            {/* Sidebar Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 text-[10px] font-mono text-slate-400 text-center">
              Scalable for 50+ Web Applications & Course Labs
            </div>

          </div>

        </div>

        {/* Right Column: Live Interactive Simulation Workbench (8 cols on lg, 8 on xl) */}
        <div className={`space-y-4 ${
          isSidebarOpen ? 'lg:col-span-8 xl:col-span-8' : 'lg:col-span-12'
        }`}>
          
          <div className={`relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl transition-all duration-300 ${
            isFullscreen ? 'fixed inset-4 z-50 rounded-2xl flex flex-col' : 'w-full'
          }`}>
            
            {/* Browser Chrome Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md text-white text-xs z-20">
              
              {/* Window dots & App Identity */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>

                <div className="h-4 w-px bg-slate-800 mx-1"></div>

                <div className="flex items-center gap-2 min-w-0">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                    {getAppIcon(activeApp.id, "h-4 w-4")}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-white text-xs sm:text-sm truncate max-w-[180px] sm:max-w-md">
                        {activeApp.title}
                      </span>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30">
                        {activeApp.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* URL bar indicator & Actions */}
              <div className="flex items-center gap-2">
                {/* Live active URL indicator */}
                <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 font-mono text-[11px] max-w-xs truncate">
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
                    showInfo ? 'bg-emerald-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white hover:bg-slate-800'
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
                  className="h-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs px-3 shadow-xs gap-1.5"
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
              isFullscreen ? 'flex-1 h-full' : 'h-[640px] sm:h-[720px] lg:h-[780px]'
            }`}>
              
              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 z-10 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 text-white">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-emerald-400 animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-emerald-400">
                      {getAppIcon(activeApp.id, "h-5 w-5")}
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-serif font-bold text-base text-white">Loading {activeApp.shortTitle}...</p>
                    <p className="text-xs text-slate-400 font-mono">Connecting to live simulator</p>
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
                      <div className="flex items-center gap-2 text-emerald-400">
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
                        <h5 className="font-mono uppercase tracking-wider text-[10px] text-emerald-400 font-bold mb-1.5">
                          Pedagogical Objective
                        </h5>
                        <p className="leading-relaxed text-slate-300 font-sans">
                          {activeApp.description}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-mono uppercase tracking-wider text-[10px] text-emerald-400 font-bold mb-2">
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
                        <h5 className="font-mono uppercase tracking-wider text-[10px] text-emerald-400 font-bold mb-2">
                          Interactive Capabilities
                        </h5>
                        <ul className="space-y-1.5">
                          {activeApp.keyFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400">
                              <span className="text-emerald-400">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-mono uppercase tracking-wider text-[10px] text-emerald-400 font-bold mb-2">
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
            <div className="px-4 sm:px-6 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">Workbench Mode:</span>
                <span>Direct real-time simulation with live parameter adjustment.</span>
              </div>
              <div className="text-slate-300">
                Created by <strong className="text-white">Dr. Arpan Hota</strong> · IIT Kharagpur
              </div>
            </div>

          </div>

          {/* Quick Context Card below workbench */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {activeApp.category}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeApp.badge}
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                {activeApp.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                {activeApp.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowInfo(true)}
                className="text-xs border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                <Info className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                View Theory
              </Button>
              <Button
                asChild
                size="sm"
                className="text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
              >
                <a href={activeApp.url} target="_blank" rel="noopener noreferrer">
                  Full Window
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
