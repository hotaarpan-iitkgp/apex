import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teaching, pedagogicalApps, PedagogicalApp } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Sparkles, 
  ExternalLink, 
  Zap, 
  Compass, 
  Cpu, 
  Layers, 
  Waves,
  Eye,
  X,
  Video,
  Tv
} from 'lucide-react';
import InteractiveAppsShowcase from '@/components/InteractiveAppsShowcase';
import CourseVideoArchive from '@/components/CourseVideoArchive';

const appMeta: Record<string, { title: string; category: string; summary: string; icon: ReactNode; badgeClass: string }> = {
  'power-factor': {
    title: 'Power Factor Lab',
    category: 'AC Circuits',
    summary: 'Phasor dynamics, power triangle, and real-time reactive power compensation.',
    icon: <Zap className="h-4 w-4" />,
    badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 dark:bg-sky-500/20',
  },
  'vismmf': {
    title: 'VisMMF',
    category: 'Electrical Machines',
    summary: 'Rotating magnetic field (RMF) and spatial MMF harmonics in AC machines.',
    icon: <Compass className="h-4 w-4" />,
    badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 dark:bg-amber-500/20',
  },
  'rectifier-lab': {
    title: 'Rectifier Lab',
    category: 'Power Electronics',
    summary: 'Controlled and uncontrolled 1-phase and 3-phase AC-to-DC converters.',
    icon: <Cpu className="h-4 w-4" />,
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20',
  },
  'dc-dc-converters': {
    title: 'DC-DC Converters',
    category: 'Switched-Mode Power',
    summary: 'Buck, Boost, and Buck-Boost dynamics in CCM and DCM operating modes.',
    icon: <Layers className="h-4 w-4" />,
    badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 dark:bg-indigo-500/20',
  },
  'emanimate': {
    title: 'EMAnimate',
    category: 'Electromagnetics',
    summary: 'Plane wave propagation, polarization modes, and boundary reflections.',
    icon: <Waves className="h-4 w-4" />,
    badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 dark:bg-rose-500/20',
  },
};

const getAppIcon = (id: string) => {
  return appMeta[id]?.icon || <Sparkles className="h-4 w-4" />;
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

      {/* 3. THIRD: Recorded Course Video Lectures */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-red-500/10 dark:bg-red-500/20 rounded-lg text-red-600 dark:text-red-400">
              <Tv className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">
                <Video className="h-3 w-3" />
                Classroom Video Archives
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                Course Video Lectures
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Full module-wise classroom recordings for Multilevel Converters (EE60208) and Power Electronics (EE31011)
              </p>
            </div>
          </div>
          
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            Select any module part to stream in-browser
          </div>
        </div>

        <CourseVideoArchive />
      </section>

      {/* 4. FOURTH: Pedagogical Web Applications (Compact Tiles + Interactive Workbench) */}
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

        {/* Lean & Aesthetic Application Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {pedagogicalApps.map((app, index) => {
            const meta = appMeta[app.id] || {
              title: app.shortTitle || app.title,
              category: app.category,
              summary: app.tagline || app.description,
              icon: <Sparkles className="h-4 w-4" />,
              badgeClass: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
            };

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.25 }}
                className="flex flex-col"
              >
                <div className="h-full flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-950 p-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-200 group">
                  <div className="space-y-3">
                    {/* Top Row: App Icon & Domain Category */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`p-2 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105 duration-200 ${meta.badgeClass}`}>
                        {meta.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 truncate">
                        {meta.category}
                      </span>
                    </div>

                    {/* App Title & Lean Single-Sentence Summary */}
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-secondary dark:group-hover:text-brand-accent transition-colors leading-snug">
                        {meta.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {meta.summary}
                      </p>
                    </div>
                  </div>

                  {/* Clean Action Controls */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPreviewApp(app)}
                      className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-900 hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Eye className="h-3 w-3 text-slate-500 dark:text-slate-400" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-xs font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-slate-100 hover:bg-brand-secondary dark:hover:bg-brand-accent transition-colors shadow-xs"
                    >
                      <span>Launch</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
