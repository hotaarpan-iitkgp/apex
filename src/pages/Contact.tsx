import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Linkedin, Globe, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-brand-primary dark:text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-serif italic text-base sm:text-lg">
            Please reach out with academic inquiries, research collaboration proposals, or student advising requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-accent-light dark:bg-slate-900/50 border border-brand-accent/20 p-8 sm:p-10 rounded-2xl space-y-8">
              <h2 className="text-2xl font-serif font-bold text-brand-primary dark:text-white border-b border-brand-accent/20 pb-4">
                Office Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-brand-secondary dark:text-brand-accent shadow-sm border border-slate-100 dark:border-slate-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">Office Address</h3>
                    <p className="text-slate-700 dark:text-slate-300 mt-1.5 text-sm sm:text-base leading-relaxed">
                      {profile.department}<br />
                      <span className="font-bold text-brand-primary dark:text-slate-200">{profile.institution}</span><br />
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-brand-secondary dark:text-brand-accent shadow-sm border border-slate-100 dark:border-slate-700">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">Email</h3>
                    <a href={`mailto:${profile.email}`} className="text-brand-secondary dark:text-brand-accent mt-1.5 hover:underline font-semibold block text-sm sm:text-base">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-brand-secondary dark:text-brand-accent shadow-sm border border-slate-100 dark:border-slate-700">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">LinkedIn</h3>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-secondary dark:text-brand-accent mt-1.5 hover:underline font-semibold block text-sm sm:text-base">
                      linkedin.com/in/arpanhota
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl text-brand-secondary dark:text-brand-accent shadow-sm border border-slate-100 dark:border-slate-700">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-brand-primary dark:text-white text-base">Website</h3>
                    <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-brand-secondary dark:text-brand-accent mt-1.5 hover:underline font-semibold block text-sm sm:text-base">
                      sites.google.com/view/arpan-hota
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-secondary bg-white dark:bg-slate-950">
              <CardContent className="p-8 sm:p-10">
                <h2 className="text-2xl font-serif font-bold text-brand-primary dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                  Send a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 p-6 rounded-xl text-center border border-emerald-200/50">
                    <p className="font-serif font-bold text-lg mb-2">Message sent successfully!</p>
                    <p className="text-sm leading-relaxed mb-6">Thank you for reaching out. I will review and get back to you as soon as possible.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-slate-300 dark:border-slate-700"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Message Content</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition-all resize-none"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand-secondary hover:bg-brand-secondary/95 dark:bg-brand-accent dark:hover:bg-brand-accent/95 dark:text-slate-950 text-white font-bold tracking-wider uppercase py-4 rounded-xl transition-all shadow-md" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
