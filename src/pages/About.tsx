import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { education, experience, profile, awards, service } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  FileText, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ExternalLink,
  Mail,
  Building2,
  MapPin
} from 'lucide-react';

export default function About() {
  const [activeSection, setActiveSection] = useState<'all' | 'bio' | 'experience' | 'awards' | 'service'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
      
      {/* Top Banner & Profile Overview */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
              IIT Kharagpur Faculty
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-mono">
              APEX Lab
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-brand-primary dark:text-white mb-3">
            About, Awards & Service
          </h1>
          
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-serif italic max-w-3xl">
            {profile.bio}
          </p>

          {/* Quick Info Grid */}
          <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-brand-secondary dark:text-brand-accent flex-shrink-0" />
              <span className="truncate">{profile.title}, {profile.department}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-secondary dark:text-brand-accent flex-shrink-0" />
              <span className="truncate">{profile.institution}, {profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-secondary dark:text-brand-accent flex-shrink-0" />
              <a href={`mailto:${profile.email}`} className="hover:text-brand-secondary dark:hover:text-brand-accent transition-colors font-mono truncate">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Quick-Navigation Filter Bar */}
        <div className="sticky top-16 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-2 border-b border-slate-200/80 dark:border-slate-800/80 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:inline">
              Jump to Section:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('section-bio')}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-brand-secondary/10 hover:text-brand-secondary dark:hover:text-brand-accent transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <Briefcase className="h-3.5 w-3.5" />
                Experience
              </button>
              <button
                onClick={() => scrollToSection('section-education')}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-brand-secondary/10 hover:text-brand-secondary dark:hover:text-brand-accent transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <GraduationCap className="h-3.5 w-3.5" />
                Education
              </button>
              <button
                onClick={() => scrollToSection('section-awards')}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-brand-secondary/10 hover:text-brand-secondary dark:hover:text-brand-accent transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                Awards & Honors
              </button>
              <button
                onClick={() => scrollToSection('section-service')}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-brand-secondary/10 hover:text-brand-secondary dark:hover:text-brand-accent transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <FileText className="h-3.5 w-3.5 text-blue-500" />
                Professional Service
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 1. PROFESSIONAL EXPERIENCE SECTION */}
      <section id="section-bio" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-brand-secondary/10 dark:bg-brand-accent/10 rounded-lg text-brand-secondary dark:text-brand-accent">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                Professional Experience
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Academic appointments, industrial design roles, and research career track
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3.5 border-l-2 border-brand-secondary/30 dark:border-brand-secondary/20 ml-3 sm:ml-4 pl-4 sm:pl-6 relative">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <span className="absolute -left-[23px] sm:-left-[31px] top-3 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-950 bg-brand-secondary shadow-sm"></span>
              
              <Card className="hover:shadow-md transition-all duration-200 border-l-4 border-l-brand-secondary bg-white dark:bg-slate-950">
                <div className="p-3.5 sm:p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-brand-primary dark:text-white">
                        {job.role}
                      </h3>
                      <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm">
                        {job.institution}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="text-[11px] font-bold text-brand-secondary dark:text-brand-accent font-mono uppercase tracking-wider bg-brand-secondary/10 dark:bg-brand-accent/10 px-2 py-0.5 rounded">
                        {job.year}
                      </span>
                    </div>
                  </div>

                  {job.details && (
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/60 font-medium">
                      {job.details}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. EDUCATION SECTION */}
      <section id="section-education" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-brand-accent/15 rounded-lg text-brand-accent">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                Education & Qualifications
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Academic degrees, doctoral research, and graduate training
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3.5 border-l-2 border-brand-accent/30 dark:border-brand-accent/20 ml-3 sm:ml-4 pl-4 sm:pl-6 relative">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <span className="absolute -left-[23px] sm:-left-[31px] top-3 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-950 bg-brand-accent shadow-sm"></span>
              
              <Card className="hover:shadow-md transition-all duration-200 border-l-4 border-l-brand-accent bg-white dark:bg-slate-950">
                <div className="p-3.5 sm:p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-brand-primary dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm">
                        {edu.institution}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                      <span className="text-[11px] font-bold text-brand-accent font-mono uppercase tracking-wider bg-brand-accent/10 px-2 py-0.5 rounded">
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {edu.details && (
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/60 font-medium">
                      {edu.details}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. AWARDS & HONORS SECTION */}
      <section id="section-awards" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-500/10 dark:bg-amber-400/10 rounded-lg text-amber-500 dark:text-amber-400">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                Awards & Honors
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Distinguished fellowships, paper awards, and nationwide engineering recognitions
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-200 border-l-4 border-l-amber-500 dark:border-l-amber-400 bg-white dark:bg-slate-950 flex flex-col justify-between group">
                <div className="p-3.5 sm:p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-amber-500/10 dark:bg-amber-400/10 rounded-md text-amber-600 dark:text-amber-400 flex-shrink-0">
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 dark:text-white leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {award.title}
                        </h3>
                        <div className="text-[11px] font-bold text-brand-secondary dark:text-brand-accent uppercase tracking-wider">
                          {award.organization}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded bg-amber-500/15 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300 px-2 py-0.5 text-[11px] font-bold font-mono flex-shrink-0">
                      {award.year}
                    </span>
                  </div>

                  {award.description && (
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pt-1.5 border-t border-slate-100 dark:border-slate-800/60">
                      {award.description}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PROFESSIONAL SERVICE SECTION */}
      <section id="section-service" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg text-blue-600 dark:text-blue-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                Professional Service
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Editorial contributions, peer review activities for IEEE transactions, and conference committees
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          
          {/* Peer Review Services */}
          <Card className="h-full hover:shadow-md transition-all duration-200 border-l-4 border-l-brand-secondary bg-white dark:bg-slate-950">
            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-secondary/10 rounded-lg text-brand-secondary">
                  <FileText className="h-4 w-4" />
                </div>
                <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base sm:text-lg">
                  Journal Peer Reviewer
                </h3>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Active reviewer for leading IEEE & Springer journals:
              </p>
              <ul className="space-y-1.5">
                {service.peerReview.map((journal, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-secondary dark:text-brand-accent flex-shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium">{journal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Conference Committees & Technical Leadership */}
          <Card className="h-full hover:shadow-md transition-all duration-200 border-l-4 border-l-brand-accent bg-white dark:bg-slate-950">
            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-accent/15 rounded-lg text-brand-accent">
                  <Users className="h-4 w-4" />
                </div>
                <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base sm:text-lg">
                  Conference Committees
                </h3>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Technical program committee & chair roles:
              </p>
              <ul className="space-y-2">
                {service.conferenceRoles.map((role, index) => (
                  <li key={index} className="p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800 space-y-0.5">
                    <div className="font-bold font-serif text-slate-900 dark:text-slate-200 text-xs sm:text-sm">{role.role}</div>
                    <div className="text-brand-secondary dark:text-brand-accent text-xs font-semibold font-mono">{role.conference}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

        </div>
      </section>

    </div>
  );
}
