import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  GraduationCap, 
  Cpu, 
  Zap, 
  Layers, 
  Sparkles, 
  Activity, 
  Compass, 
  CheckCircle2, 
  Microscope,
  Database,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { profile, researchAreas, apexLab } from '@/data/portfolio';
import { Link } from 'react-router-dom';
import FlagshipCarousel from '@/components/FlagshipCarousel';
import SineWaveBackground from '@/components/SineWaveBackground';
import InteractiveAppsShowcase from '@/components/InteractiveAppsShowcase';

export default function Home() {
  return (
    <div className="flex flex-col space-y-0">
      
      {/* 1. Primary Faculty & APEX Lab Hero Section with IIT Kharagpur Background & Moving Sine Wave */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        
        {/* Full-width IIT Kharagpur Main Building Hero Background Image with Light Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={profile.iitkgpHeroImage}
            alt="IIT Kharagpur Main Building"
            className="w-full h-full object-cover object-center scale-105 filter brightness-105 contrast-100 opacity-15 dark:opacity-10 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Glassmorphic White Layer Overlays for Maximum Lightness & Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/90 to-white/80 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950/80"></div>
          
          {/* Animated 3-Phase Sinusoidal Waveforms & Precision Engineering Grid */}
          <SineWaveBackground />

          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 dark:bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-slate-900 dark:text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Prestigious Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-brand-accent/40 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary dark:bg-brand-accent animate-pulse"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary dark:text-brand-accent">
                    IIT Kharagpur · EE Department
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50/90 dark:bg-amber-500/20 backdrop-blur-md text-amber-900 dark:text-amber-300 border border-amber-200/90 dark:border-amber-500/40 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  {apexLab.name}
                </div>
              </div>

              {/* Name & Title */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-brand-primary dark:text-white tracking-tight leading-none">
                  Dr. {profile.name}
                </h1>
                
                <h2 className="text-xl sm:text-2xl text-brand-secondary dark:text-brand-accent font-semibold font-serif">
                  {profile.title}
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-snug flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand-secondary dark:text-brand-accent flex-shrink-0" />
                  <span>{profile.department} · <strong className="text-slate-900 dark:text-white font-bold">{profile.institution}</strong></span>
                </p>
              </div>

              {/* Short Bio */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                Pioneering high-frequency power conversion topologies, wide-bandgap (SiC/GaN) semiconductor applications, and <strong className="text-brand-primary dark:text-brand-accent font-bold">AI-driven automated power electronics design & simulation</strong> at Indian Institute of Technology Kharagpur.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-7 shadow-lg transition-all rounded-xl">
                  <a href="#apex-lab">
                    Explore APEX Lab <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-xl shadow-sm">
                  <a href={profile.cvLink} target="_blank" rel="noopener noreferrer">
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Social Quick Links */}
              <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80 dark:border-white/10 max-w-md">
                <a href={`mailto:${profile.email}`} className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-accent hover:border-brand-primary border border-slate-200/90 dark:border-white/10 hover:scale-105 transition-all shadow-sm" title="Email Address">
                  <Mail className="h-5 w-5" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-accent hover:border-brand-primary border border-slate-200/90 dark:border-white/10 hover:scale-105 transition-all shadow-sm" title="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-accent hover:border-brand-primary border border-slate-200/90 dark:border-white/10 hover:scale-105 transition-all shadow-sm" title="Google Scholar Citations">
                  <GraduationCap className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* Dr. Arpan Hota Faculty Profile Photo Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 via-blue-500/20 to-amber-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105 opacity-80"></div>
                
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border-4 border-white dark:border-slate-800 ring-2 ring-slate-200 dark:ring-slate-700 group">
                  <img 
                    src={profile.profileImage || "/Arpan_hota.png"} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.triedSecond) {
                        target.dataset.triedSecond = "true";
                        target.src = "/arpan_hota.jpg";
                      } else {
                        target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                      }
                    }}
                    alt={`Dr. ${profile.name}`} 
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 filter brightness-95 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="py-12 bg-brand-primary dark:bg-slate-950 border-y border-brand-accent/30 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,204,0.15),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-accent mb-1 group-hover:scale-105 transition-transform duration-200">
                {profile.stats.journalPapers}+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 uppercase font-semibold tracking-widest">IEEE Journal Papers</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-accent mb-1 group-hover:scale-105 transition-transform duration-200">
                {profile.stats.confPapers}+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 uppercase font-semibold tracking-widest">Conference Papers</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-accent mb-1 group-hover:scale-105 transition-transform duration-200">
                {profile.stats.patents}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 uppercase font-semibold tracking-widest">Patents Filed/Granted</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-accent mb-1 group-hover:scale-105 transition-transform duration-200">
                100 kW
              </div>
              <div className="text-xs sm:text-sm text-slate-300 uppercase font-semibold tracking-widest">Lab Traction Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated APEX Lab Showcase Section */}
      <section id="apex-lab" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background circuit glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,rgba(0,102,204,0.25),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
                <Building2 className="h-4 w-4" />
                Featured Research Group
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white">
                The {apexLab.name}
              </h2>
              <p className="text-slate-400 font-serif italic text-base sm:text-lg max-w-2xl">
                {apexLab.fullName} — {apexLab.institution}
              </p>
            </div>

            <Button asChild className="bg-brand-accent text-slate-950 hover:bg-brand-accent/90 font-bold px-6 rounded-xl">
              <Link to="/students">
                View Scholars & Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* APEX Lab Overview Card with Background Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 bg-slate-950/80 p-8 sm:p-10 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  Mission & Hardware Infrastructure
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {apexLab.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                {apexLab.capabilities.map((cap, i) => (
                  <div key={i} className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800/80 space-y-1">
                    <div className="text-xs font-bold text-brand-accent flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" />
                      {cap.title}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Testbed Gallery Column */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl min-h-[340px]">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" 
                alt="APEX Lab Power Electronics Hardware Bench" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block">
                  Hardware Testbed Capabilities
                </span>
                <div className="text-sm font-semibold text-slate-200">
                  Typhoon HIL Real-Time Emulator & 100kW Wide-Bandgap Power Conversion Bench
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Flagship Research Frontiers Section - Sleek & Modern Showcase */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 rounded-full blur-[140px] pointer-events-none opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Sleek, Unboxed Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-brand-accent">
              Primary Academic Directions
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
              Flagship Research Frontiers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Pioneering high-frequency power conversion, wide-bandgap (SiC/GaN) topologies, zero-CMV motor drives, and AI-driven automated design at APEX Lab.
            </p>
          </div>

          {/* Animated Carousel Component */}
          <FlagshipCarousel />

        </div>
      </section>

      {/* 5. Core Research Program Areas */}
      <section className="py-24 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary dark:text-brand-accent">
              Broad Academic Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary dark:text-white">
              Core Research Program Areas
            </h2>
            <div className="w-16 h-1 bg-brand-accent rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-brand-secondary hover:border-t-brand-accent dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 overflow-hidden group flex flex-col justify-between">
                  <div>
                    {/* Header Image */}
                    {area.image && (
                      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                        <img 
                          src={area.image} 
                          alt={area.title} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-4 p-2 bg-slate-950/80 backdrop-blur-md rounded-xl text-brand-accent border border-brand-accent/30 shadow-md">
                          <area.icon className="h-5 w-5" />
                        </div>
                      </div>
                    )}

                    <CardContent className="pt-6 px-6 pb-6 space-y-3">
                      <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-brand-secondary dark:group-hover:text-brand-accent transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {area.description}
                      </p>

                      <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {area.contributions.map((c, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary dark:bg-brand-accent mt-1 flex-shrink-0" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button asChild variant="outline" className="group border-brand-secondary hover:bg-brand-secondary/10 text-brand-secondary dark:text-brand-accent dark:border-brand-accent dark:hover:bg-brand-accent/10 px-8 py-6 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-sm">
              <Link to="/projects">
                Explore Sponsored Projects & Grants <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* 6. Embedded Interactive Pedagogical Web Apps & Virtual Demonstrators (Horizontal Embed Area) */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        
        {/* Ambient background glow & grid */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-brand-secondary/15 dark:bg-brand-accent/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                Pedagogical Virtual Laboratories
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
                Interactive Concept Demonstrators
              </h2>
              <p className="text-slate-400 font-serif italic text-base sm:text-lg leading-relaxed">
                Live, browser-based simulation sandboxes developed by Dr. Arpan Hota to elucidate complex concepts in power electronics, electrical machines, electromagnetics, and circuit analysis.
              </p>
            </div>

            <Button asChild className="bg-brand-accent text-slate-950 hover:bg-brand-accent/90 font-bold px-6 py-6 rounded-xl shadow-lg transition-all flex-shrink-0">
              <Link to="/teaching">
                Explore Full Teaching Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Big Horizontal Embedded Area with Live IFrame Viewport */}
          <InteractiveAppsShowcase />

        </div>
      </section>

    </div>
  );
}
