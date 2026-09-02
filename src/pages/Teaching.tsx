import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teaching, pedagogicalApps, PedagogicalApp } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Compass, 
  Cpu, 
  Layers, 
  Waves,
  Eye,
  X
} from 'lucide-react';
import InteractiveAppsShowcase from '@/components/InteractiveAppsShowcase';

const getAppIcon = (id: string) => {
  switch (id) {
    case 'power-factor':
      return <Zap className="h-4 w-4" />;
    case 'vismmf':
      return <Compass className="h-4 w-4" />;
    case 'rectifier-lab':
      return <Cpu className="h-4 w-4" />;
    case 'dc-dc-converters':
      return <Layers className="h-4 w-4" />;
    case 'emanimate':
      return <Waves className="h-4 w-4" />;
    default:
      return <Sparkles className="h-4 w-4" />;
  }
};

export default function Teaching() {
  const [selectedPreviewApp, setSelectedPreviewApp] = useState<PedagogicalApp | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Top Header & Intro */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 dark:bg-brand-accent/15 text-brand-secondary dark:text-brand-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <BookOpen className="h-3.5 w-3.5" />
            Pedagogy & Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-primary dark:text-white mb-2">
            Teaching & Mentorship
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-serif italic max-w-3xl text-sm sm:text-base">
            Educating electrical engineers at IIT Kharagpur through mathematical rigor, experimental prototyping, and custom-engineered virtual laboratories.
          </p>
        </div>
      </motion.div>

      {/* 1. FIRST: Teaching Philosophy & Pedagogical Mission */}
      <section>
        <div className="bg-gradient-to-br from-brand-accent-light/80 via-white to-brand-secondary/5 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-950 border border-brand-accent/25 dark:border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 text-brand-accent/10 pointer-events-none">
            <BookOpen className="h-36 w-36" />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-secondary dark:text-brand-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Teaching Philosophy & Mission
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
              Bridging Rigorous Theory and Physical Prototyping
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-serif italic text-sm sm:text-base max-w-4xl">
              "My teaching philosophy centers on bridging the gap between theoretical concepts and practical applications. 
              In power electronics and electrical machines, I believe in a hands-on approach where students not only derive 
              equations but also build, simulate, and physically validate circuits. I encourage critical thinking through 
              design-oriented course projects, real-time visualization software, and open-ended laboratory experiments."
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECOND: Curriculum & Courses (Courses Taught + Teaching Assistantships) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-brand-secondary/10 dark:bg-brand-accent/10 rounded-lg text-brand-secondary dark:text-brand-accent">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                Curriculum & Courses
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Undergraduate and postgraduate courses taught at IIT Kharagpur and prior instructional roles
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Courses Taught at IIT Kharagpur */}
          <Card className="h-full hover:shadow-md transition-all duration-200 border-l-4 border-l-brand-secondary bg-white dark:bg-slate-950">
            <CardHeader className="p-4 sm:p-5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-secondary/10 rounded-lg text-brand-secondary">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="font-serif font-bold text-brand-primary dark:text-white text-base sm:text-lg">
                    Courses Taught at IIT Kharagpur
                  </CardTitle>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Undergraduate & Postgraduate Instruction</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-5 pt-0">
              <ul className="space-y-2.5">
                {teaching.courses.map((course, index) => (
                  <li key={index} className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 last:border-0 pb-2.5 last:pb-0">
                    <span className="font-bold font-serif text-xs sm:text-sm text-slate-900 dark:text-slate-200">{course.name}</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-brand-secondary dark:text-brand-accent font-mono font-bold bg-brand-secondary/5 dark:bg-slate-900 border border-brand-secondary/20 dark:border-slate-800 px-2 py-0.5 rounded text-[11px]">
                        {course.code}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 font-medium text-xs hidden sm:inline">
                        {course.role}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Teaching Assistantships at IIT Bombay */}
          <Card className="h-full hover:shadow-md transition-all duration-200 border-l-4 border-l-brand-accent bg-white dark:bg-slate-950">
            <CardHeader className="p-4 sm:p-5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-accent/15 rounded-lg text-brand-accent">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="font-serif font-bold text-brand-primary dark:text-white text-base sm:text-lg">
                    Teaching Assistantships
                  </CardTitle>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">IIT Bombay (2016 – 2020)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-5 pt-0">
              <ul className="space-y-2">
                {teaching.assistantship.map((course, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0"></span>
                    <span className="leading-snug font-medium">{course}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. THIRD: Pedagogical Web Applications (Compact Tiles + Interactive Workbench) */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              Interactive Simulation Tools
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-extrabold text-brand-primary dark:text-white">
              Pedagogical Web Applications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Custom in-browser interactive sandboxes developed by Dr. Arpan Hota to elucidate core physical and mathematical principles.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex-shrink-0">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>5 Live Simulators</span>
          </div>
        </div>

        {/* Compact Application Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pedagogicalApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex flex-col"
            >
              <Card className="h-full flex flex-col justify-between border-t-2 border-t-brand-secondary hover:border-t-brand-accent dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-lg transition-all duration-200 group overflow-hidden">
                <div className="p-4 pb-2 space-y-3">
                  
                  {/* Top Header Line: Icon + Category + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-brand-secondary dark:text-brand-accent group-hover:bg-brand-secondary group-hover:text-white transition-colors flex-shrink-0">
                        {getAppIcon(app.id)}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-secondary dark:text-brand-accent truncate">
                        {app.category}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-semibold border border-slate-200 dark:border-slate-800 flex-shrink-0">
                      {app.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-secondary dark:group-hover:text-brand-accent transition-colors leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs line-clamp-2 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  {/* Key Concepts (Compact 2-item list) */}
                  <div className="space-y-1 pt-1.5 border-t border-slate-100 dark:border-slate-800/60">
                    <ul className="space-y-1">
                      {app.concepts.slice(0, 2).map((concept, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                          <CheckCircle2 className="h-3 w-3 text-brand-secondary dark:text-brand-accent flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {app.suggestedCourses.map((course, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-[9px] font-mono text-slate-600 dark:text-slate-400">
                        {course}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Compact Footer Action Buttons */}
                <div className="px-4 py-2.5 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedPreviewApp(app)}
                    className="flex-1 h-7 border-slate-300 dark:border-slate-700 text-[11px] font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 gap-1 px-2"
                  >
                    <Eye className="h-3 w-3 text-brand-secondary dark:text-brand-accent" />
                    <span>Preview</span>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    className="flex-1 h-7 bg-brand-primary dark:bg-brand-accent text-white dark:text-slate-950 font-bold text-[11px] rounded-lg shadow-sm hover:opacity-90 gap-1 px-2"
                  >
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      <span>Launch</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Live Embedded Workbench Area */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-primary dark:text-white">
              Live In-Browser Simulation Workbench
            </h3>
            <span className="text-[11px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
              Interactive Execution
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            Directly test the simulations below without leaving the page. Select any app from the strip to switch circuits.
          </p>

          <InteractiveAppsShowcase />
        </div>
      </section>

      {/* Quick Preview Modal for Individual Apps */}
      <AnimatePresence>
        {selectedPreviewApp && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-brand-accent/20 text-brand-accent">
                    {getAppIcon(selectedPreviewApp.id)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-white">
                      {selectedPreviewApp.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {selectedPreviewApp.category} · {selectedPreviewApp.url}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button asChild size="sm" className="bg-brand-accent hover:bg-brand-accent/90 text-slate-950 font-bold rounded-xl text-xs">
                    <a href={selectedPreviewApp.url} target="_blank" rel="noopener noreferrer">
                      Open in New Tab <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPreviewApp(null)}
                    className="h-9 w-9 p-0 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Modal Iframe */}
              <div className="flex-1 w-full bg-slate-900 relative">
                <iframe
                  src={selectedPreviewApp.url}
                  title={selectedPreviewApp.title}
                  className="w-full h-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
