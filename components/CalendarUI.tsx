import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Plus } from 'lucide-react';

type MeetingType = 'demo' | 'discovery' | 'meeting';
type MeetingStatus = 'confirmed' | 'upcoming';

interface Meeting {
  id: string;
  day: number; // 0 = Mon, 4 = Fri
  start: number; // 9.0 to 17.0 (9 AM to 5 PM)
  duration: number; // in hours
  title: string;
  type: MeetingType;
  status: MeetingStatus;
  tooltip: string;
}

const MEETINGS: Meeting[] = [
  // Monday
  { id: 'm1', day: 0, start: 9.0, duration: 1, title: 'Demo — VP Supply Chain', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · VP Supply Chain · Siemens · Germany · Booked via cold call in German.' },
  { id: 'm2', day: 0, start: 11.0, duration: 0.75, title: 'Discovery — CPO', type: 'discovery', status: 'upcoming', tooltip: 'Discovery call · Chief Procurement Officer · LVMH · France · Booked via cold call in French.' },
  { id: 'm3', day: 0, start: 13.5, duration: 1, title: 'Meeting — Head of Logistics', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · Head of Logistics · DHL · DACH · Booked via cold call in German.' },
  { id: 'm4', day: 0, start: 15.5, duration: 1, title: 'Demo — VP Operations', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Operations · Maersk · Denmark · Booked via cold call in English.' },
  
  // Tuesday
  { id: 't1', day: 1, start: 9.5, duration: 1, title: 'Discovery — Supply Chain Dir', type: 'discovery', status: 'confirmed', tooltip: 'Discovery call · Supply Chain Director · Airbus · France · Booked via cold call in French.' },
  { id: 't2', day: 1, start: 11.5, duration: 1, title: 'Demo — CPO', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · CPO · Volvo · Sweden · Booked via cold call in English.' },
  { id: 't3', day: 1, start: 14.0, duration: 1, title: 'Demo — Head of Procurement', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · Head of Procurement · BASF · Germany · Booked via cold call in German.' },
  { id: 't4', day: 1, start: 16.0, duration: 0.75, title: 'Meeting — VP Logistics', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · VP Logistics · Kuehne+Nagel · Switzerland · Booked via cold call in German.' },

  // Wednesday
  { id: 'w1', day: 2, start: 9.0, duration: 1, title: 'Demo — VP Supply Chain', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Supply Chain · Nestle · Switzerland · Booked via cold call in French.' },
  { id: 'w2', day: 2, start: 10.5, duration: 0.75, title: 'Discovery — Head of Ops', type: 'discovery', status: 'upcoming', tooltip: 'Discovery call · Head of Ops · DSV · Denmark · Booked via cold call in English.' },
  { id: 'w3', day: 2, start: 13.0, duration: 1, title: 'Demo — CPO', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · CPO · Unilever · UK · Booked via cold call in English.' },
  { id: 'w4', day: 2, start: 15.0, duration: 1, title: 'Demo — Dir. Logistics', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · Director of Logistics · DB Schenker · Germany · Booked via cold call in German.' },

  // Thursday
  { id: 'th1', day: 3, start: 10.0, duration: 1, title: 'Demo — VP Procurement', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · VP Procurement · Novartis · Switzerland · Booked via cold call in German.' },
  { id: 'th2', day: 3, start: 11.5, duration: 0.75, title: 'Meeting — CPO', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · CPO · BMW · Germany · Booked via cold call in German.' },
  { id: 'th3', day: 3, start: 13.5, duration: 1, title: 'Discovery — Head of SC', type: 'discovery', status: 'confirmed', tooltip: 'Discovery call · Head of Supply Chain · Zara · Spain · Booked via cold call in Spanish.' },
  { id: 'th4', day: 3, start: 15.5, duration: 1, title: 'Demo — VP Operations', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Operations · Heineken · Netherlands · Booked via cold call in English.' },

  // Friday
  { id: 'f1', day: 4, start: 9.5, duration: 1, title: 'Demo — Head of Logistics', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · Head of Logistics · IKEA · Sweden · Booked via cold call in English.' },
  { id: 'f2', day: 4, start: 11.0, duration: 1, title: 'Demo — VP Supply Chain', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Supply Chain · Michelin · France · Booked via cold call in French.' },
  { id: 'f3', day: 4, start: 13.5, duration: 1, title: 'Meeting — CPO', type: 'meeting', status: 'confirmed', tooltip: 'Follow-up · CPO · Bosch · Germany · Booked via cold call in German.' },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const START_HOUR = 9;
const END_HOUR = 19;
const TOTAL_HOURS = END_HOUR - START_HOUR;

export const CalendarUI: React.FC = () => {
  const [hoveredMeeting, setHoveredMeeting] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Escape key to close video
  useEffect(() => {
    if (!isVideoOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isVideoOpen]);

  return (
    <>
      <div className="w-full h-full bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-stone-200/80 flex flex-col overflow-hidden font-sans relative">
        {/* Header with Book button */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 bg-stone-50/80">
        <div className="text-xs font-semibold text-stone-400 tracking-wide">This week</div>
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] text-white rounded-lg text-[11px] font-medium hover:bg-stone-800 transition-colors"
        >
          <Plus size={12} strokeWidth={2.5} />
          Book a meeting
        </a>
      </div>

      {/* Day Headers */}
      <div className="flex border-b border-stone-100 bg-stone-50/40">
        <div className="w-14 shrink-0 border-r border-stone-100"></div>
        {DAYS.map((day, i) => (
          <div key={day} className={`flex-1 py-2.5 text-center text-[11px] font-semibold text-stone-500 uppercase tracking-wider ${i !== 0 ? 'border-l border-stone-100' : ''}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="flex flex-1 relative bg-white pt-1">
        {/* Time Labels */}
        <div className="w-14 shrink-0 border-r border-stone-100 flex flex-col relative z-10 bg-white">
          {Array.from({ length: TOTAL_HOURS + 1 }).map((_, i) => (
            <div key={i} className="flex-1 relative">
              <span className="absolute -top-2.5 right-3 text-[10px] font-medium text-stone-400">
                {START_HOUR + i}:00
              </span>
            </div>
          ))}
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 left-14 flex flex-col pointer-events-none">
          {Array.from({ length: TOTAL_HOURS }).map((_, i) => (
            <div key={i} className="flex-1 border-b border-stone-100/60 w-full"></div>
          ))}
        </div>

        {/* Day Columns */}
        <div className="flex-1 flex relative">
          {DAYS.map((_, dayIndex) => (
            <div key={dayIndex} className={`flex-1 relative ${dayIndex !== 0 ? 'border-l border-stone-100/60' : ''}`}>
              {mounted && MEETINGS.filter(m => m.day === dayIndex).map((meeting, i) => {
                const topPercent = ((meeting.start - START_HOUR) / TOTAL_HOURS) * 100;
                const heightPercent = (meeting.duration / TOTAL_HOURS) * 100;
                
                // Stagger animation over ~4 seconds total
                // 19 meetings total, so 4s / 19 ≈ 0.2s delay per meeting
                const globalIndex = MEETINGS.findIndex(m => m.id === meeting.id);
                const delay = globalIndex * 0.2;

                const isHovered = hoveredMeeting === meeting.id;

                let bgClass = '';
                let textClass = '';
                let borderClass = '';

                if (meeting.status === 'confirmed') {
                  // Warm dark stone instead of pure black
                  bgClass = 'bg-stone-700';
                  textClass = 'text-stone-100';
                  borderClass = 'border-stone-600';
                } else if (meeting.type === 'demo') {
                  bgClass = 'bg-[#C5A059]/12';
                  textClass = 'text-[#9c7a3d]';
                  borderClass = 'border-[#C5A059]/20';
                } else if (meeting.type === 'discovery') {
                  bgClass = 'bg-emerald-50';
                  textClass = 'text-emerald-700';
                  borderClass = 'border-emerald-200/60';
                } else {
                  bgClass = 'bg-stone-50';
                  textClass = 'text-stone-500';
                  borderClass = 'border-stone-200/60';
                }

                return (
                  <motion.div
                    key={meeting.id}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute left-1.5 right-1.5 rounded-lg border p-2 cursor-pointer transition-all duration-200 backdrop-blur-sm ${bgClass} ${textClass} ${borderClass} ${isHovered ? 'ring-2 ring-[#C5A059] ring-offset-1 z-30 shadow-md scale-[1.02]' : 'z-10 hover:z-20'}`}
                    style={{
                      top: `${topPercent}%`,
                      height: `calc(${heightPercent}% - 4px)`,
                    }}
                    onMouseEnter={() => setHoveredMeeting(meeting.id)}
                    onMouseLeave={() => setHoveredMeeting(null)}
                  >
                    <div className="font-semibold text-[11px] leading-tight truncate">{meeting.title}</div>
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-[#1a1a1a] text-white text-[11px] leading-relaxed p-3 rounded-lg shadow-xl border border-stone-700 z-50 pointer-events-none"
                        >
                          <div className="font-medium text-[#C5A059] mb-1">{meeting.title.split('—')[0].trim()}</div>
                          <div className="text-stone-300">{meeting.tooltip.split('·').slice(1).join('·').trim()}</div>
                          
                          {/* Triangle pointer */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#1a1a1a]"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Play Video Pill */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={() => setIsVideoOpen(true)}
          className="absolute bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-stone-800 text-stone-100 rounded-full text-xs font-medium shadow-xl hover:bg-stone-700 hover:scale-105 transition-all group border border-stone-600"
        >
          <div className="w-5 h-5 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1a1a1a] group-hover:bg-white transition-colors">
            <Play size={10} className="ml-0.5" fill="currentColor" />
          </div>
          See how it works · 4 min
        </motion.button>
      </div>
      </div>

      {/* Video Lightbox */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-stone-900/95 backdrop-blur-sm" />

            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Video container — stop click propagation so clicking the video doesn't close */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-stone-800 relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://player.vimeo.com/video/989546197?h=d7ed03a0cb"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="How Lynn guarantees 30 demos in 90 days"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
