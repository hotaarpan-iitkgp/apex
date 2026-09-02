import React, { ReactNode } from 'react';

export interface SectionRibbonProps {
  icon?: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  accentColor?: 'blue' | 'amber' | 'emerald' | 'red' | 'indigo';
  isDark?: boolean;
  className?: string;
  id?: string;
}

export default function SectionRibbon({
  icon,
  eyebrow,
  title,
  description,
  badge,
  accentColor = 'blue',
  isDark = false,
  className = '',
  id
}: SectionRibbonProps) {
  const accentStyles = {
    blue: {
      tag: isDark
        ? 'bg-blue-500/15 border-blue-500/30 text-blue-400'
        : 'bg-brand-secondary/10 dark:bg-brand-accent/15 border-brand-secondary/20 dark:border-brand-accent/30 text-brand-secondary dark:text-brand-accent',
      badge: isDark
        ? 'text-blue-300 bg-blue-500/10 border-blue-500/30'
        : 'text-brand-secondary dark:text-brand-accent bg-brand-secondary/5 dark:bg-slate-900 border-brand-secondary/20 dark:border-slate-800',
    },
    amber: {
      tag: isDark
        ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
        : 'bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/20 dark:border-amber-500/30 text-amber-600 dark:text-amber-400',
      badge: isDark
        ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
        : 'text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-slate-900 border-amber-500/20 dark:border-slate-800',
    },
    emerald: {
      tag: isDark
        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
        : 'bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
      badge: isDark
        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
        : 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 dark:bg-slate-900 border-emerald-500/20 dark:border-slate-800',
    },
    red: {
      tag: isDark
        ? 'bg-red-500/15 border-red-500/30 text-red-400'
        : 'bg-rose-500/10 dark:bg-rose-500/20 border-rose-500/20 dark:border-rose-500/30 text-rose-600 dark:text-rose-400',
      badge: isDark
        ? 'text-red-400 bg-red-500/10 border-red-500/30'
        : 'text-rose-700 dark:text-rose-400 bg-rose-500/10 dark:bg-slate-900 border-rose-500/20 dark:border-slate-800',
    },
    indigo: {
      tag: isDark
        ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400'
        : 'bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
      badge: isDark
        ? 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30'
        : 'text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 dark:bg-slate-900 border-indigo-500/20 dark:border-slate-800',
    },
  }[accentColor];

  return (
    <div 
      id={id}
      className={`w-full border-b ${isDark ? 'border-slate-800/80' : 'border-slate-200 dark:border-slate-800'} pb-8 ${className}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-3 max-w-3xl">
          {eyebrow && (
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-mono font-bold uppercase tracking-widest ${accentStyles.tag}`}>
              {icon}
              {eyebrow}
            </div>
          )}
          
          <h2 className={`text-3xl sm:text-5xl font-serif font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-brand-primary dark:text-white'}`}>
            {title}
          </h2>

          {description && (
            <p className={`font-serif italic text-sm sm:text-base leading-relaxed max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>
              {description}
            </p>
          )}
        </div>

        {badge && (
          <div className={`flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-xl flex-shrink-0 border font-semibold ${accentStyles.badge}`}>
            {typeof badge === 'string' ? (
              <>
                <span className={`h-2 w-2 rounded-full ${isDark ? 'bg-current animate-pulse' : 'bg-brand-secondary dark:bg-brand-accent'}`} />
                <span>{badge}</span>
              </>
            ) : (
              badge
            )}
          </div>
        )}
      </div>
    </div>
  );
}
