import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Briefcase, History } from 'lucide-react';
import SectionRibbon from '@/components/SectionRibbon';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed'>('all');

  const allSponsored = projects.sponsored;
  const allConsultancy = projects.consultancy;

  const isOngoing = (status: string) => status.toLowerCase() !== 'completed';

  const filteredSponsored = allSponsored.filter(p => 
    filter === 'all' ? true : (filter === 'ongoing' ? isOngoing(p.status) : !isOngoing(p.status))
  );

  const filteredConsultancy = allConsultancy.filter(p => 
    filter === 'all' ? true : (filter === 'ongoing' ? isOngoing(p.status) : !isOngoing(p.status))
  );

  const totalOngoing = 
    allSponsored.filter(p => isOngoing(p.status)).length + 
    allConsultancy.filter(p => isOngoing(p.status)).length;

  const totalCompleted = 
    allSponsored.filter(p => !isOngoing(p.status)).length + 
    allConsultancy.filter(p => !isOngoing(p.status)).length;

  const totalAll = allSponsored.length + allConsultancy.length;

  return (
    <div className="w-full">
      {/* 1. TOP SECTION: Header, Filters, and Sponsored Research Projects */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 space-y-12">
        {/* Header and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-primary dark:text-white">
                Research & Consultancy Projects
              </h1>
              <p className="text-slate-800 dark:text-slate-300 font-serif italic max-w-2xl text-base sm:text-lg font-medium leading-relaxed">
                An overview of government-sponsored research grants, corporate sponsorships, and industry consultancy agreements.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 bg-slate-50 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80">
              <Button 
                variant={filter === 'all' ? 'default' : 'ghost'} 
                onClick={() => setFilter('all')}
                size="sm"
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === 'all' 
                    ? 'bg-brand-primary text-white shadow-md dark:bg-slate-950' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                All ({totalAll})
              </Button>
              <Button 
                variant={filter === 'ongoing' ? 'default' : 'ghost'} 
                onClick={() => setFilter('ongoing')}
                size="sm"
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === 'ongoing' 
                    ? 'bg-brand-secondary text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Ongoing ({totalOngoing})
              </Button>
              <Button 
                variant={filter === 'completed' ? 'default' : 'ghost'} 
                onClick={() => setFilter('completed')}
                size="sm"
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === 'completed' 
                    ? 'bg-brand-accent text-slate-950 font-extrabold shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Completed ({totalCompleted})
              </Button>
            </div>
          </div>

          {/* Empty State */}
          {filteredSponsored.length === 0 && filteredConsultancy.length === 0 && (
            <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <History className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-500 dark:text-slate-400 font-medium">No projects found for the selected filter.</p>
            </div>
          )}

          {/* Sponsored Projects */}
          {filteredSponsored.length > 0 && (
            <div className="space-y-8">
              <SectionRibbon
                icon={<BadgeCheck className="h-5 w-5" />}
                eyebrow="EXTRAMURAL RESEARCH & GRANTS"
                title="Sponsored Research Projects"
                description="Government and national funding agencies supporting fundamental & translational research"
                badge={`${filteredSponsored.length} Projects`}
                accentColor="blue"
              />
              
              <div className="grid gap-8 md:grid-cols-2">
                {filteredSponsored.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-secondary bg-white dark:bg-slate-950 flex flex-col justify-between">
                      <CardHeader className="p-6 pb-4">
                        <CardTitle className="text-lg sm:text-xl font-serif font-bold text-brand-primary dark:text-white leading-snug">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 space-y-4">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Funding Agency</span>
                            <span className="font-bold text-slate-900 dark:text-slate-200">{project.agency}</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                            <span className="text-slate-500 dark:text-slate-400 font-medium">My Role</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-300">{project.role}</span>
                          </div>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Project Status</span>
                            <span className={`font-bold px-3 py-1 rounded-full text-xs ${
                              project.status.toLowerCase().includes('completed') 
                                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/30'
                                : 'bg-brand-secondary/10 text-brand-secondary dark:bg-brand-secondary/20 dark:text-brand-accent border border-brand-secondary/20'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* 2. FULL HORIZONTAL COVERED SECTION: Industrial Consultancy Projects */}
      {filteredConsultancy.length > 0 && (
        <section className="w-full bg-slate-950 text-white relative overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-slate-800 shadow-2xl">
          {/* Ambient Glows & Grid */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
            {/* Edge-to-Edge Hero Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800/80 pb-8">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
                  <Briefcase className="h-4 w-4" />
                  Industry Translation & Collaboration
                </div>
                <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
                  Industrial Consultancy Projects
                </h2>
                <p className="text-slate-400 font-serif italic text-sm sm:text-base leading-relaxed max-w-2xl">
                  Targeted technical advisory, converter topology validation, hardware failure analysis, and industrial design consultancy for engineering corporations.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-xl flex-shrink-0">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-semibold">{filteredConsultancy.length} Active Engagements</span>
              </div>
            </div>

            {/* Dark styled consultancy cards */}
            <div className="grid gap-8 md:grid-cols-2">
              {filteredConsultancy.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/90 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
                    <div className="p-6 pb-4">
                      <div className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider font-bold mb-2">
                        Industrial Advisory
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2.5">
                          <span className="text-slate-400 font-medium">Partner/Client</span>
                          <span className="font-bold text-slate-100">{project.agency}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2.5">
                          <span className="text-slate-400 font-medium">Lead Role</span>
                          <span className="font-semibold text-slate-200">{project.role}</span>
                        </div>
                        <div className="flex justify-between items-center pt-1">
                          <span className="text-slate-400 font-medium">Project Status</span>
                          <span className={`font-bold px-3 py-1 rounded-full text-xs ${
                            project.status.toLowerCase().includes('completed') 
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
