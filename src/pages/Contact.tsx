import { motion } from 'motion/react';
import { profile } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Globe, 
  ExternalLink, 
  GraduationCap, 
  Building2, 
  Send
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-primary dark:text-white mb-3">
            Contact & Office Details
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-serif italic text-base sm:text-lg">
            Direct communication channels, office location, and academic inquiry guidelines.
          </p>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office & Laboratory Details */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-accent dark:to-cyan-400" />
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-brand-primary dark:text-sky-400 border border-sky-200/50 dark:border-sky-800/50">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-bold text-brand-primary dark:text-white">
                      Office & Laboratory
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      Department of Electrical Engineering
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-brand-secondary dark:text-brand-accent shadow-sm border border-slate-200/60 dark:border-slate-700 flex-shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">
                        Faculty Office & Lab Address
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mt-1 text-sm sm:text-base leading-relaxed">
                        Room N 210, APEX Laboratory<br />
                        {profile.department}<br />
                        <span className="font-semibold text-brand-primary dark:text-slate-200">{profile.institution}</span><br />
                        {profile.location}, PIN - 721302
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-950/70 p-4 border border-slate-200/70 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        Visiting the Lab:
                      </p>
                      <p className="leading-relaxed">
                        The Advanced Power Electronix (APEX) Laboratory is situated in Room N 210 within the Electrical Engineering Department building. Visitors and collaborators are requested to schedule appointments via email prior to arrival.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-brand-secondary to-brand-accent dark:from-brand-accent dark:to-emerald-400" />
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-bold text-brand-primary dark:text-white">
                      Direct Communication
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      Institutional email and scholarly networks
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Email Box */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Institutional Email
                      </div>
                      <div className="text-base font-mono font-bold text-brand-primary dark:text-brand-accent mt-0.5 select-all">
                        {profile.email}
                      </div>
                    </div>
                    <Button asChild size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-medium flex-shrink-0">
                      <a href={`mailto:${profile.email}`}>
                        <Send className="mr-1.5 h-3.5 w-3.5" /> Send Email
                      </a>
                    </Button>
                  </div>

                  {/* LinkedIn Box */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          LinkedIn Network
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          linkedin.com/in/arpanhota
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="border-slate-300 dark:border-slate-700 flex-shrink-0">
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                        Connect <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>

                  {/* Google Scholar Box */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Google Scholar
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          Citations, Publications & Patents
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="border-slate-300 dark:border-slate-700 flex-shrink-0">
                      <a href={profile.scholar} target="_blank" rel="noopener noreferrer">
                        View Citations <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>

                  {/* Academic Website Box */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Google Sites Profile
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          sites.google.com/view/arpan-hota
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="border-slate-300 dark:border-slate-700 flex-shrink-0">
                      <a href={profile.website} target="_blank" rel="noopener noreferrer">
                        Open Website <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Prospective Student & Collaboration Guidelines */}
        <div className="bg-slate-50 dark:bg-slate-900/40 rounded-2xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-brand-primary dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
            Inquiry & Application Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">
                Prospective PhD Scholars
              </h3>
              <p>
                Candidates interested in doctoral research in wide-bandgap converter topologies, EV traction motor drives, and AI-driven power electronic design are encouraged to email their CV along with a concise statement of research interests.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">
                M.Tech & B.Tech Projects
              </h3>
              <p>
                IIT Kharagpur undergraduate and postgraduate students interested in BTP, MTP, or research internships in the APEX Lab may reach out during office hours or via email to discuss available experimental hardware testbed projects.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">
                Industry & Research R&D
              </h3>
              <p>
                For sponsored research projects, technology transfer discussions, industrial consultancy, or seminar invitations, please email directly with the subject tag <span className="font-mono text-xs font-semibold text-brand-secondary dark:text-brand-accent">[Industry Collaboration]</span>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
