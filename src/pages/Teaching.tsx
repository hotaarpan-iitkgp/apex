import { motion } from 'framer-motion';
import { teaching } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  Sparkles, 
  Video,
  Tv,
  Cpu
} from 'lucide-react';
import InteractiveAppsShowcase from '@/components/InteractiveAppsShowcase';
import CourseVideoArchive from '@/components/CourseVideoArchive';
import SectionRibbon from '@/components/SectionRibbon';

export default function Teaching() {
  return (
    <div className="w-full">
      
      {/* 1. TOP SECTION: Header, Teaching Philosophy & Curriculum */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-16 space-y-14">
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

        {/* Teaching Philosophy & Pedagogical Mission */}
        <div>
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
        </div>

        {/* Curriculum & Courses */}
        <div className="space-y-6">
          <SectionRibbon
            icon={<BookOpen className="h-5 w-5" />}
            eyebrow="ACADEMIC CURRICULUM · IIT KHARAGPUR"
            title="Curriculum & Course Instruction"
            description="Undergraduate and postgraduate courses taught at IIT Kharagpur and instructional assistantships"
            badge="Autumn & Spring Semesters"
            accentColor="blue"
          />

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
        </div>
      </section>

      {/* 2. FULL HORIZONTAL HERO SECTION: Recorded Course Video Lectures */}
      <section className="w-full bg-slate-950 text-white relative overflow-hidden py-16 sm:py-20 lg:py-24 border-y border-slate-800 shadow-2xl">
        {/* Background glow and subtle circuit grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.18),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Edge-to-Edge Hero Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800/80 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Tv className="h-4 w-4" />
                Digital Classroom Archive
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
                Recorded Course Video Lectures
              </h2>
              <p className="text-slate-400 font-serif italic text-sm sm:text-base leading-relaxed max-w-2xl">
                Complete module-wise classroom recordings for Multilevel Converters (EE60208) and Power Electronics (EE31011) recorded at IIT Kharagpur.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold">29 Streaming Lectures</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                <Video className="h-3.5 w-3.5 text-red-400" />
                <span>In-Browser Player</span>
              </div>
            </div>
          </div>

          {/* Full Course Video Archive Component */}
          <CourseVideoArchive />
        </div>
      </section>

      {/* 3. THIRD SECTION: Pedagogical Web Applications (Full Horizontal Screen Width) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 space-y-10 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/30">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <SectionRibbon
            icon={<Cpu className="h-5 w-5" />}
            eyebrow="VIRTUAL SIMULATION & OPEN PEDAGOGY"
            title="Pedagogical Web Applications"
            description="In-browser interactive sandboxes developed by Dr. Arpan Hota to elucidate core physical and circuit principles"
            badge={
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold">5 Live Simulators</span>
              </div>
            }
            accentColor="emerald"
          />
        </div>

        {/* Live Embedded Workbench Area - Full Horizontal Span */}
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <InteractiveAppsShowcase />
        </div>
      </section>

    </div>
  );
}
