import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { students } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Mail, Calendar, BookOpen, History } from 'lucide-react';
import SectionRibbon from '@/components/SectionRibbon';

export default function Students() {
  const [filter, setFilter] = useState<'all' | 'active' | 'alumni'>('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const filteredPhd = students.phd.filter(s => 
    filter === 'all' ? true : s.status === filter
  );
  
  const filteredMasters = students.masters.filter(s => 
    filter === 'all' ? true : s.status === filter
  );

  const totalActive = 
    students.phd.filter(s => s.status === 'active').length + 
    students.masters.filter(s => s.status === 'active').length;

  const totalAlumni = 
    students.phd.filter(s => s.status === 'alumni').length + 
    students.masters.filter(s => s.status === 'alumni').length;

  const totalAll = students.phd.length + students.masters.length;

  return (
    <div id="students-page" className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 space-y-16">
        {/* Page Header and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-primary dark:text-white">
                Research Group & Students
              </h1>
              <p className="text-slate-600 dark:text-slate-400 font-serif italic max-w-2xl text-base sm:text-lg">
                Guiding and collaborating with bright minds in the fields of power electronics, multilevel inverters, and battery management systems.
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
                variant={filter === 'active' ? 'default' : 'ghost'} 
                onClick={() => setFilter('active')}
                size="sm"
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === 'active' 
                    ? 'bg-brand-secondary text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Active ({totalActive})
              </Button>
              <Button 
                variant={filter === 'alumni' ? 'default' : 'ghost'} 
                onClick={() => setFilter('alumni')}
                size="sm"
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === 'alumni' 
                    ? 'bg-brand-accent text-slate-950 font-extrabold shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Alumni ({totalAlumni})
              </Button>
            </div>
          </div>

          {/* Empty State */}
          {filteredPhd.length === 0 && filteredMasters.length === 0 && (
            <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <History className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-500 dark:text-slate-400 font-medium">No students found matching the selected filter.</p>
            </div>
          )}
        </motion.div>

        {/* 1. PhD Research Scholars Section */}
        {filteredPhd.length > 0 && (
          <section className="space-y-8">
            <SectionRibbon
              icon={<GraduationCap className="h-4 w-4" />}
              eyebrow="DOCTORAL RESEARCH"
              title="PhD Research Scholars"
              description="Doctoral researchers advancing multilevel converter topologies, modulation, and energy storage"
              badge={`${filteredPhd.length} Scholars`}
              accentColor="blue"
            />
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-5 sm:grid-cols-2"
            >
              {filteredPhd.map((student: any) => (
                <motion.div key={student.name} variants={itemVariants} layout>
                  <Card className="hover:shadow-md hover:border-brand-secondary/40 transition-all duration-200 border-l-4 border-l-brand-secondary bg-white dark:bg-slate-950 h-full flex flex-col justify-between">
                    <CardContent className="p-5 flex flex-col justify-between space-y-3.5 h-full">
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-serif font-bold text-brand-primary dark:text-white leading-snug">
                              {student.name}
                            </h3>
                            <p className="text-xs font-semibold text-brand-secondary dark:text-brand-accent mt-0.5">
                              {student.role}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded text-slate-600 dark:text-slate-400 whitespace-nowrap">
                            <Calendar className="h-2.5 w-2.5" />
                            {student.year}
                          </span>
                        </div>
                        
                        <div className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 leading-relaxed">
                          <span className="font-bold text-brand-primary dark:text-white block text-[10px] uppercase tracking-wider mb-0.5">
                            Thesis Focus
                          </span>
                          "{student.topic}"
                        </div>

                        {student.placement && (
                          <div className="text-xs text-slate-800 dark:text-slate-200 font-medium bg-brand-accent-light/40 dark:bg-slate-900/80 p-3 rounded-xl border border-brand-accent/20 dark:border-brand-accent/10 leading-relaxed">
                            <span className="font-bold text-brand-accent block text-[10px] uppercase tracking-wider mb-0.5">
                              Current Placement
                            </span>
                            {student.placement}
                          </div>
                        )}
                      </div>

                      {student.email && (
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-slate-400" />
                          <a 
                            href={`mailto:${student.email}`} 
                            className="text-xs text-brand-secondary dark:text-brand-accent hover:underline font-semibold font-mono truncate"
                          >
                            {student.email}
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* 2. Master's Thesis Students Section (Reverted back from dark, light/default theme) */}
        {filteredMasters.length > 0 && (
          <section className="space-y-8">
            <SectionRibbon
              icon={<BookOpen className="h-4 w-4" />}
              eyebrow="POSTGRADUATE RESEARCH & ALUMNI"
              title="Master's Thesis Students"
              description="M.Tech and dual-degree scholars focusing on power electronics, advanced motor drives, and battery energy management."
              badge={`${filteredMasters.length} Scholars & Alumni`}
              accentColor="indigo"
            />
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredMasters.map((student: any) => (
                <motion.div key={student.name} variants={itemVariants} layout>
                  <Card className="hover:shadow-md hover:border-indigo-500/40 transition-all duration-200 border-l-4 border-l-indigo-500 bg-white dark:bg-slate-950 h-full flex flex-col justify-between">
                    <CardContent className="p-5 flex flex-col justify-between space-y-3.5 h-full">
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h3 className="text-base font-serif font-bold text-brand-primary dark:text-white leading-snug">
                              {student.name}
                            </h3>
                            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                              {student.role}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded text-slate-600 dark:text-slate-400 whitespace-nowrap">
                            <Calendar className="h-2.5 w-2.5" />
                            {student.year}
                          </span>
                        </div>
                        
                        <div className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 leading-relaxed">
                          <span className="font-bold text-indigo-700 dark:text-indigo-400 block text-[10px] uppercase tracking-wider mb-0.5">
                            Project Focus
                          </span>
                          "{student.topic}"
                        </div>

                        {student.placement && (
                          <div className="text-xs text-slate-800 dark:text-slate-200 font-medium bg-indigo-50/70 dark:bg-slate-900/80 p-3 rounded-xl border border-indigo-100 dark:border-indigo-900/30 leading-relaxed">
                            <span className="font-bold text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase tracking-wider mb-0.5">
                              Current Placement
                            </span>
                            {student.placement}
                          </div>
                        )}
                      </div>

                      {student.email && (
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-slate-400" />
                          <a 
                            href={`mailto:${student.email}`} 
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold font-mono truncate"
                          >
                            {student.email}
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}
