import { useState } from 'react';
import { motion } from 'framer-motion';
import { publications, patents } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Landmark, BookOpen, Lightbulb } from 'lucide-react';

export default function Publications() {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference' | 'patent'>('all');

  const allPublications = [
    ...publications.journals.map(p => ({ ...p, type: 'journal' })),
    ...publications.conferences.map(p => ({ ...p, type: 'conference' })),
    ...patents.map(p => ({ ...p, type: 'patent', authors: p.inventors }))
  ].sort((a, b) => {
    const yearA = typeof a.year === 'string' && isNaN(Number(a.year)) ? 2026 : Number(a.year);
    const yearB = typeof b.year === 'string' && isNaN(Number(b.year)) ? 2026 : Number(b.year);
    return yearB - yearA;
  });

  const filteredPublications = allPublications.filter(p => 
    filter === 'all' ? true : p.type === filter
  );

  const highlightAuthor = (authorsList: string) => {
    // Regex matches Arpan Hota or Hota, Arpan with optional punctuation/spaces
    const parts = authorsList.split(/(Arpan\s+Hota|Hota,\s+Arpan)/g);
    return (
      <span>
        {parts.map((part, i) => 
          /^(Arpan\s+Hota|Hota,\s+Arpan)$/.test(part) ? (
            <strong key={i} className="text-brand-secondary dark:text-brand-accent font-bold underline decoration-brand-accent/60 decoration-2">
              {part}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-primary dark:text-white mb-3">
              Publications & Patents
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-serif italic max-w-2xl">
              Chronological listing of peer-reviewed journal articles, international conference proceedings, and active filings.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              size="sm"
              className={filter === 'all' ? 'bg-brand-primary hover:bg-brand-primary/95 text-white' : 'border-slate-300 dark:border-slate-700'}
            >
              All Research ({allPublications.length})
            </Button>
            <Button 
              variant={filter === 'journal' ? 'default' : 'outline'} 
              onClick={() => setFilter('journal')}
              size="sm"
              className={filter === 'journal' ? 'bg-brand-secondary hover:bg-brand-secondary/95 text-white' : 'border-slate-300 dark:border-slate-700'}
            >
              Journals ({publications.journals.length})
            </Button>
            <Button 
              variant={filter === 'conference' ? 'default' : 'outline'} 
              onClick={() => setFilter('conference')}
              size="sm"
              className={filter === 'conference' ? 'bg-brand-accent hover:bg-brand-accent/95 text-slate-950 font-bold' : 'border-slate-300 dark:border-slate-700'}
            >
              Conferences ({publications.conferences.length})
            </Button>
            <Button 
              variant={filter === 'patent' ? 'default' : 'outline'} 
              onClick={() => setFilter('patent')}
              size="sm"
              className={filter === 'patent' ? 'bg-brand-accent hover:bg-brand-accent/95 text-slate-950 font-bold' : 'border-slate-300 dark:border-slate-700'}
            >
              Patents ({patents.length})
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredPublications.map((pub, index) => {
            const isJournal = pub.type === 'journal';
            const isPatent = pub.type === 'patent';

            if (isPatent) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-accent bg-white dark:bg-slate-950">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-5">
                        <div className="mt-1 p-3 bg-brand-accent/15 rounded-xl text-brand-accent hidden sm:block shadow-sm">
                          <Lightbulb className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div className="space-y-2">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-brand-accent/15 text-brand-accent dark:text-brand-accent">
                                <Lightbulb className="h-3.5 w-3.5" />
                                Patent File / Grant
                              </span>
                              <h3 className="text-xl font-serif font-bold text-brand-primary dark:text-white leading-snug pt-1">
                                {pub.title}
                              </h3>
                            </div>
                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-start ${
                              (pub as any).status.toLowerCase() === 'granted'
                                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/50'
                                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200/50'
                            }`}>
                              {(pub as any).status}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-sm">
                            <div className="space-y-1">
                              <span className="block text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">Patent Number / ID</span>
                              <span className="font-mono font-bold text-slate-900 dark:text-slate-200">{(pub as any).number}</span>
                            </div>
                            <div className="space-y-1">
                              <span className="block text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">Year</span>
                              <span className="font-bold text-slate-900 dark:text-slate-200">{pub.year}</span>
                            </div>
                            <div className="space-y-1">
                              <span className="block text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">Inventors</span>
                              <span className="font-medium text-slate-800 dark:text-slate-300">
                                {highlightAuthor((pub as any).inventors || '')}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-950 border-l-4 ${isJournal ? 'border-l-brand-secondary' : 'border-l-brand-accent'}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                            isJournal 
                              ? 'bg-brand-secondary/10 text-brand-secondary' 
                              : 'bg-brand-accent/15 text-brand-accent dark:text-brand-accent'
                          }`}>
                            {isJournal ? <BookOpen className="h-3.5 w-3.5" /> : <Landmark className="h-3.5 w-3.5" />}
                            {isJournal ? 'Journal Paper' : 'Conference Proceeding'}
                          </span>
                          
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            {pub.year}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-primary dark:text-white leading-snug">
                          {pub.title}
                        </h3>
                        
                        <div className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                          {highlightAuthor(pub.authors)}
                        </div>

                        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic font-serif flex items-center gap-1 pt-1">
                          <span className="text-brand-secondary font-bold">•</span>
                          {isJournal ? (pub as any).journal : (pub as any).conference}
                        </div>
                      </div>

                      {(pub as any).doi && (
                        <div className="sm:text-right mt-2 sm:mt-0">
                          <span className="inline-block text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded text-slate-500 dark:text-slate-400">
                            {(pub as any).doi}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
