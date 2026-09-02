import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white border-t border-brand-accent/20 py-16 relative overflow-hidden">
      {/* Decorative gradient flare to match the ribbon feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(0,102,204,0.12),transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-base font-serif font-extrabold text-brand-accent tracking-wide uppercase">
              {profile.name}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
              {profile.title}<br />
              <span className="text-slate-400">{profile.department}</span><br />
              <span className="text-white/90 font-bold">{profile.institution}</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-serif font-extrabold text-brand-accent tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-sans font-medium">
              <li>
                <a href="/publications" className="text-slate-300 hover:text-brand-accent transition-colors duration-200 flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-accent/60"></span>
                  Publications & Patents
                </a>
              </li>
              <li>
                <a href="/teaching" className="text-slate-300 hover:text-brand-accent transition-colors duration-200 flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-accent/60"></span>
                  Teaching
                </a>
              </li>
              <li>
                <a href="/students" className="text-slate-300 hover:text-brand-accent transition-colors duration-200 flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-accent/60"></span>
                  Research Group & Students
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-serif font-extrabold text-brand-accent tracking-wide uppercase">
              Contact Info
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
              Department of Electrical Engineering, Indian Institute of Technology Kharagpur, West Bengal, India.
            </p>
            <div className="pt-2">
              <a 
                href={`mailto:${profile.email}`} 
                className="inline-flex items-center gap-2 text-sm text-white hover:text-brand-accent font-semibold font-mono bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                {profile.email}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-slate-400 font-sans font-medium flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="text-slate-500 text-[11px] font-mono">
            IIT Kharagpur &bull; Department of Electrical Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
