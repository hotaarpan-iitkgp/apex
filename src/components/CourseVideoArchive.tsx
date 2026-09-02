import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Video, 
  ExternalLink, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Tv, 
  ChevronRight, 
  Search,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { courseVideoSeries, VideoLecture, CourseVideoSeries, LectureModule } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CourseVideoArchive() {
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>("EE60208");
  
  const currentCourse: CourseVideoSeries = courseVideoSeries.find(
    c => c.courseCode === selectedCourseCode
  ) || courseVideoSeries[0];

  const firstVideo = currentCourse.modules[0]?.videos[0] || null;
  const [activeVideo, setActiveVideo] = useState<VideoLecture | null>(firstVideo);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCourseChange = (courseCode: string) => {
    setSelectedCourseCode(courseCode);
    const course = courseVideoSeries.find(c => c.courseCode === courseCode);
    if (course && course.modules.length > 0 && course.modules[0].videos.length > 0) {
      setActiveVideo(course.modules[0].videos[0]);
    }
  };

  const totalVideos = currentCourse.modules.reduce((acc, m) => acc + m.videos.length, 0);

  return (
    <div className="space-y-6">
      
      {/* Course Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-100 dark:bg-slate-900/90 p-2 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          {courseVideoSeries.map((course) => {
            const isSelected = course.courseCode === selectedCourseCode;
            const courseVideoCount = course.modules.reduce((acc, m) => acc + m.videos.length, 0);
            return (
              <button
                key={course.courseCode}
                onClick={() => handleCourseChange(course.courseCode)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-brand-primary dark:bg-brand-accent text-white dark:text-slate-950 shadow-md font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800"
                }`}
              >
                <Tv className={`h-4 w-4 ${isSelected ? 'text-brand-accent dark:text-slate-950' : 'text-slate-400'}`} />
                <span>{course.courseCode} — {course.courseTitle}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                  isSelected
                    ? "bg-white/20 dark:bg-slate-950/20 text-white dark:text-slate-950"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}>
                  {courseVideoCount} Lectures
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Filter Search */}
        <div className="relative min-w-[200px] sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search lecture topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
          />
        </div>
      </div>

      {/* Main Theatre & Playlist Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Active Video Player Theatre (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-xl">
            
            {/* Top Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-pulse"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-brand-accent">
                  {currentCourse.courseCode} Lecture Stream
                </span>
              </div>
              
              {activeVideo && (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs text-slate-300 hover:text-white hover:bg-slate-800 gap-1.5 px-2"
                >
                  <a href={activeVideo.url} target="_blank" rel="noopener noreferrer">
                    <span>Watch on YouTube</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>

            {/* Video IFrame Container */}
            <div className="relative aspect-video w-full bg-black">
              {activeVideo ? (
                <iframe
                  key={activeVideo.videoId}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center space-y-2">
                  <Video className="h-10 w-10 text-slate-600" />
                  <p className="text-sm">Select a lecture from the playlist to begin playback.</p>
                </div>
              )}
            </div>

            {/* Current Playing Details */}
            {activeVideo && (
              <div className="p-4 sm:p-5 bg-slate-950 text-white space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-brand-accent/15 text-brand-accent font-mono text-[11px] font-bold">
                    Now Playing
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Course: {currentCourse.courseCode}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recorded classroom/lab instruction by Dr. Arpan Hota at the Department of Electrical Engineering, IIT Kharagpur.
                </p>
              </div>
            )}

          </div>

          {/* Course Overview Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-secondary dark:text-brand-accent">
                {currentCourse.level}
              </span>
            </div>
            <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              {currentCourse.courseTitle} ({currentCourse.courseCode})
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentCourse.description}
            </p>
          </div>
        </div>

        {/* Right Column: Module & Video Lecture Playlist (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-brand-secondary dark:text-brand-accent" />
              <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Course Syllabus & Video Playlist
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {totalVideos} Total Lectures
            </span>
          </div>

          {/* Playlist Container */}
          <div className="space-y-4 max-h-[640px] overflow-y-auto pr-1">
            {currentCourse.modules.map((module) => {
              const filteredVideos = module.videos.filter(v => 
                v.title.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (searchQuery && filteredVideos.length === 0) {
                return null;
              }

              return (
                <div 
                  key={module.moduleNumber} 
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-sm"
                >
                  {/* Module Header */}
                  <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-brand-secondary/10 dark:bg-brand-accent/15 text-brand-secondary dark:text-brand-accent text-[10px] font-mono font-bold uppercase">
                        Module {module.moduleNumber}
                      </span>
                      <h5 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {module.moduleTitle}
                      </h5>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {module.videos.length} videos
                    </span>
                  </div>

                  {/* Video Items List */}
                  <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {filteredVideos.map((video, vIdx) => {
                      const isPlaying = activeVideo?.id === video.id || activeVideo?.videoId === video.videoId;
                      return (
                        <button
                          key={video.id}
                          onClick={() => setActiveVideo(video)}
                          className={`w-full text-left p-3 sm:p-3.5 flex items-start gap-3 transition-colors ${
                            isPlaying
                              ? "bg-brand-secondary/10 dark:bg-brand-accent/15 text-brand-primary dark:text-white border-l-4 border-l-brand-secondary dark:border-l-brand-accent"
                              : "hover:bg-slate-50 dark:hover:bg-slate-900/50 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <div className={`p-2 rounded-lg flex-shrink-0 mt-0.5 transition-colors ${
                            isPlaying
                              ? "bg-brand-secondary dark:bg-brand-accent text-white dark:text-slate-950 shadow-sm"
                              : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:text-brand-secondary"
                          }`}>
                            <Play className="h-3.5 w-3.5 fill-current" />
                          </div>

                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-mono text-slate-400">
                                Part {vIdx + 1}
                              </span>
                              {isPlaying && (
                                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                                  Playing
                                </span>
                              )}
                            </div>
                            <p className={`text-xs font-medium leading-snug line-clamp-2 ${
                              isPlaying ? "font-bold text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
                            }`}>
                              {video.title}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
