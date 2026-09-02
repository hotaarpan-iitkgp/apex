import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { students } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Mail, Calendar, BookOpen, MapPin, History } from 'lucide-react';

export default function Students() {
  const [filter, setFilter] = useState<'all' | 'active' | 'alumni'>('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div id="students-page" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl"
          >
            <History className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-500 dark:text-slate-400 font-medium">No students found matching the selected filter.</p>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {/* PhD Scholars Section */}
          {filteredPhd.length > 0 && (
            <motion.div 
              key="phd-section"
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-secondary/15 rounded-xl text-brand-secondary shadow-sm">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                  PhD Scholars
                </h2>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
              >
                {filteredPhd.map((student: any) => (
                  <motion.div key={student.name} variants={itemVariants} layout>
                    <Card className="hover:shadow-md hover:border-brand-secondary/40 transition-all duration-200 border-l-4 border-l-brand-secondary bg-white dark:bg-slate-950 h-full flex flex-col justify-between">
                      <CardContent className="p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 h-full">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h3 className="text-base font-serif font-bold text-brand-primary dark:text-white leading-snug">
                                {student.name}
                              </h3>
                              <p className="text-xs font-semibold text-brand-secondary dark:text-brand-accent mt-0.5">
                                {student.role}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 whitespace-nowrap">
                              <Calendar className="h-2.5 w-2.5" />
                              {student.year}
                            </span>
                          </div>
                          
                          <div className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800/80 leading-relaxed">
                            <span className="font-bold text-brand-primary dark:text-white block text-[10px] uppercase tracking-wider mb-0.5">
                              Thesis Focus
                            </span>
                            "{student.topic}"
                          </div>

                          {student.placement && (
                            <div className="text-xs text-slate-800 dark:text-slate-200 font-medium bg-brand-accent-light/40 dark:bg-slate-900/80 p-2 rounded-lg border border-brand-accent/20 dark:border-brand-accent/10 leading-relaxed">
                              <span className="font-bold text-brand-accent block text-[10px] uppercase tracking-wider mb-0.5">
                                Current Placement
                              </span>
                              {student.placement}
                            </div>
                          )}
                        </div>

                        {student.email && (
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-900 flex items-center gap-1.5">
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
            </motion.div>
          )}

          {/* Master's Students Section */}
          {filteredMasters.length > 0 && (
            <motion.div 
              key="masters-section"
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-accent/15 rounded-xl text-brand-accent shadow-sm">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-primary dark:text-white">
                  Master's Students
                </h2>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredMasters.map((student: any) => (
                  <motion.div key={student.name} variants={itemVariants} layout>
                    <Card className="hover:shadow-md hover:border-brand-accent/40 transition-all duration-200 border-l-4 border-l-brand-accent bg-white dark:bg-slate-950 h-full flex flex-col justify-between">
                      <CardContent className="p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 h-full">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h3 className="text-base font-serif font-bold text-brand-primary dark:text-white leading-snug">
                                {student.name}
                              </h3>
                              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                                {student.role}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 whitespace-nowrap">
                              <Calendar className="h-2.5 w-2.5" />
                              {student.year}
                            </span>
                          </div>
                          
                          <div className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800/80 leading-relaxed">
                            <span className="font-bold text-brand-primary dark:text-white block text-[10px] uppercase tracking-wider mb-0.5">
                              Project Focus
                            </span>
                            "{student.topic}"
                          </div>

                          {student.placement && (
                            <div className="text-xs text-slate-800 dark:text-slate-200 font-medium bg-brand-accent-light/40 dark:bg-slate-900/80 p-2 rounded-lg border border-brand-accent/20 dark:border-brand-accent/10 leading-relaxed">
                              <span className="font-bold text-brand-accent block text-[10px] uppercase tracking-wider mb-0.5">
                                Current Placement
                              </span>
                              {student.placement}
                            </div>
                          )}
                        </div>

                        {student.email && (
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-900 flex items-center gap-1.5">
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
