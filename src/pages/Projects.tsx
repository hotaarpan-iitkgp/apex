import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Briefcase, Calendar, FolderOpen, History } from 'lucide-react';

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header and Filter */}
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl"
          >
            <History className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-500 dark:text-slate-400 font-medium">No projects found for the selected filter.</p>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {/* Sponsored Projects */}
          {filteredSponsored.length > 0 && (
            <motion.div
              key="sponsored-section"
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center">
                <div className="p-2.5 bg-brand-secondary/10 rounded-xl text-brand-secondary mr-4 shadow-sm border border-brand-secondary/5">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-primary dark:text-white">
                  Sponsored Research Projects
                </h2>
              </div>
              
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
                                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/30'
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
            </motion.div>
          )}

          {/* Consultancy Projects */}
          {filteredConsultancy.length > 0 && (
            <motion.div
              key="consultancy-section"
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 pt-6"
            >
              <div className="flex items-center">
                <div className="p-2.5 bg-brand-accent/15 rounded-xl text-brand-accent mr-4 shadow-sm border border-brand-accent/5">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-primary dark:text-white">
                  Industrial Consultancy Projects
                </h2>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                {filteredConsultancy.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-accent bg-white dark:bg-slate-950 flex flex-col justify-between">
                      <CardHeader className="p-6 pb-4">
                        <CardTitle className="text-lg sm:text-xl font-serif font-bold text-brand-primary dark:text-white leading-snug">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 space-y-4">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Partner/Client</span>
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
                                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/30'
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
