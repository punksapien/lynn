import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Plus, CalendarCheck } from 'lucide-react';

type MeetingType = 'demo' | 'discovery' | 'meeting';
type MeetingStatus = 'confirmed' | 'upcoming';

interface Meeting {
  id: string;
  day: number;
  start: number;
  duration: number;
  title: string;
  type: MeetingType;
  status: MeetingStatus;
  tooltip: string;
}

interface ToastData {
  title: string;
  detail: string;
}

const MEETINGS: Meeting[] = [
  { id: 'm1', day: 0, start: 9.0, duration: 1, title: 'Demo — VP Supply Chain', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · VP Supply Chain · Siemens · Germany · Booked via cold call in German.' },
  { id: 'm2', day: 0, start: 11.0, duration: 0.75, title: 'Discovery — CPO', type: 'discovery', status: 'upcoming', tooltip: 'Discovery call · Chief Procurement Officer · LVMH · France · Booked via cold call in French.' },
  { id: 'm3', day: 0, start: 13.5, duration: 1, title: 'Meeting — Head of Logistics', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · Head of Logistics · DHL · DACH · Booked via cold call in German.' },
  { id: 'm4', day: 0, start: 15.5, duration: 1, title: 'Demo — VP Operations', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Operations · Maersk · Denmark · Booked via cold call in English.' },
  { id: 't1', day: 1, start: 9.5, duration: 1, title: 'Discovery — Supply Chain Dir', type: 'discovery', status: 'confirmed', tooltip: 'Discovery call · Supply Chain Director · Airbus · France · Booked via cold call in French.' },
  { id: 't2', day: 1, start: 11.5, duration: 1, title: 'Demo — CPO', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · CPO · Volvo · Sweden · Booked via cold call in English.' },
  { id: 't3', day: 1, start: 14.0, duration: 1, title: 'Demo — Head of Procurement', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · Head of Procurement · BASF · Germany · Booked via cold call in German.' },
  { id: 't4', day: 1, start: 16.0, duration: 0.75, title: 'Meeting — VP Logistics', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · VP Logistics · Kuehne+Nagel · Switzerland · Booked via cold call in German.' },
  { id: 'w1', day: 2, start: 9.0, duration: 1, title: 'Demo — VP Supply Chain', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Supply Chain · Nestle · Switzerland · Booked via cold call in French.' },
  { id: 'w2', day: 2, start: 10.5, duration: 0.75, title: 'Discovery — Head of Ops', type: 'discovery', status: 'upcoming', tooltip: 'Discovery call · Head of Ops · DSV · Denmark · Booked via cold call in English.' },
  { id: 'w3', day: 2, start: 13.0, duration: 1, title: 'Demo — CPO', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · CPO · Unilever · UK · Booked via cold call in English.' },
  { id: 'w4', day: 2, start: 15.0, duration: 1, title: 'Demo — Dir. Logistics', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · Director of Logistics · DB Schenker · Germany · Booked via cold call in German.' },
  { id: 'th1', day: 3, start: 10.0, duration: 1, title: 'Demo — VP Procurement', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · VP Procurement · Novartis · Switzerland · Booked via cold call in German.' },
  { id: 'th2', day: 3, start: 11.5, duration: 0.75, title: 'Meeting — CPO', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · CPO · BMW · Germany · Booked via cold call in German.' },
  { id: 'th3', day: 3, start: 13.5, duration: 1, title: 'Discovery — Head of SC', type: 'discovery', status: 'confirmed', tooltip: 'Discovery call · Head of Supply Chain · Zara · Spain · Booked via cold call in Spanish.' },
  { id: 'th4', day: 3, start: 15.5, duration: 1, title: 'Demo — VP Operations', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Operations · Heineken · Netherlands · Booked via cold call in English.' },
  { id: 'f1', day: 4, start: 9.5, duration: 1, title: 'Demo — Head of Logistics', type: 'demo', status: 'confirmed', tooltip: 'Qualified demo · Head of Logistics · IKEA · Sweden · Booked via cold call in English.' },
  { id: 'f2', day: 4, start: 11.0, duration: 1, title: 'Demo — VP Supply Chain', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Supply Chain · Michelin · France · Booked via cold call in French.' },
  { id: 'f3', day: 4, start: 13.5, duration: 1, title: 'Meeting — CPO', type: 'meeting', status: 'confirmed', tooltip: 'Follow-up · CPO · Bosch · Germany · Booked via cold call in German.' },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const START_HOUR = 9;
const END_HOUR = 18;
const TOTAL_HOURS = END_HOUR - START_HOUR;

// Fisher-Yates shuffle (one-shot per page load).
const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Which meetings are already booked on page load.
// For each day, pick 2 random meetings — scatters the pre-fill across morning/afternoon
// as well as across all 5 days, so the grid feels "sporadically booked" on arrival.
const PRE_FILLED_IDS: Set<string> = (() => {
  const ids = new Set<string>();
  const byDay: Record<number, Meeting[]> = {};
  MEETINGS.forEach(m => { (byDay[m.day] = byDay[m.day] || []).push(m); });
  Object.values(byDay).forEach(dayMeetings => {
    shuffle(dayMeetings).slice(0, 2).forEach(m => ids.add(m.id));
  });
  return ids;
})();

// Order in which the remaining "live" bookings appear — fully randomised across the week,
// so new bookings pop in from random days/times rather than sweeping top-to-bottom.
const LIVE_QUEUE: Meeting[] = shuffle(MEETINGS.filter(m => !PRE_FILLED_IDS.has(m.id)));

// Helper: current-week Monday, formatted for the calendar header.
const getWeekLabel = () => {
  const now = new Date();
  const day = now.getDay(); // 0 Sun … 6 Sat
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diff);
  return monday.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};

// Late bookings: each toast is PAIRED with a real meeting that appears on the calendar
// right after the toast fires. Sequence: toast → dot on calendar → dot expands to card.
// This is what makes the toast feel real — it announces something that actually happens.
interface LateBooking {
  meeting: Meeting;
  toast: ToastData;
}

const LATE_BOOKINGS: LateBooking[] = [
  {
    meeting: { id: 'late-sap', day: 0, start: 12.0, duration: 1, title: 'Demo — VP Procurement', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · VP Procurement · SAP · Germany · Booked via cold call in German.' },
    toast: { title: 'New demo booked!', detail: 'VP Procurement · SAP · Germany' },
  },
  {
    meeting: { id: 'late-roche', day: 1, start: 10.5, duration: 1, title: 'Meeting — Head of Ops', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · Head of Ops · Roche · Switzerland · Booked via cold call in German.' },
    toast: { title: 'Meeting confirmed!', detail: 'Head of Ops · Roche · Switzerland' },
  },
  {
    meeting: { id: 'late-danone', day: 2, start: 11.5, duration: 1, title: 'Discovery — CPO', type: 'discovery', status: 'upcoming', tooltip: 'Discovery call · CPO · Danone · France · Booked via cold call in French.' },
    toast: { title: 'Discovery call booked!', detail: 'CPO · Danone · France' },
  },
  {
    meeting: { id: 'late-abb', day: 3, start: 9.0, duration: 0.75, title: 'Demo — Dir. Supply Chain', type: 'demo', status: 'upcoming', tooltip: 'Qualified demo · Director of Supply Chain · ABB · Sweden · Booked via cold call in English.' },
    toast: { title: 'New demo booked!', detail: 'Dir. Supply Chain · ABB · Sweden' },
  },
  {
    meeting: { id: 'late-fedex', day: 4, start: 15.0, duration: 1, title: 'Meeting — VP Logistics', type: 'meeting', status: 'upcoming', tooltip: 'Follow-up · VP Logistics · FedEx · Netherlands · Booked via cold call in English.' },
    toast: { title: 'Meeting confirmed!', detail: 'VP Logistics · FedEx · Netherlands' },
  },
];

const LATE_MEETINGS = LATE_BOOKINGS.map(lb => lb.meeting);
// Combined list used for rendering. MEETINGS is the pre/initial set; LATE_MEETINGS
// appear later tied to toasts.
const ALL_MEETINGS: Meeting[] = [...MEETINGS, ...LATE_MEETINGS];

const getCardClasses = (meeting: Meeting) => {
  if (meeting.status === 'confirmed') return { bg: 'bg-stone-700', text: 'text-stone-100', border: 'border-stone-600' };
  // Demos (what Lynn sells) get the strongest visual weight among upcoming meetings.
  if (meeting.type === 'demo') return { bg: 'bg-[#C5A059]/25', text: 'text-[#1a1a1a]', border: 'border-[#C5A059]/60' };
  if (meeting.type === 'discovery') return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200/60' };
  return { bg: 'bg-stone-50', text: 'text-stone-500', border: 'border-stone-200/60' };
};

export const CalendarUI: React.FC = () => {
  const [hoveredMeeting, setHoveredMeeting] = useState<string | null>(null);

  // Pre-filled meetings (2 per day, balanced across the week) start as cards on mount.
  // LIVE_QUEUE and LATE_BOOKINGS both start hidden — they animate in later.
  const [meetingStates, setMeetingStates] = useState<Record<string, 'hidden' | 'dot' | 'card'>>(() => {
    const state: Record<string, 'hidden' | 'dot' | 'card'> = {};
    ALL_MEETINGS.forEach((m) => {
      state[m.id] = PRE_FILLED_IDS.has(m.id) ? 'card' : 'hidden';
    });
    return state;
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<ToastData | null>(null);
  const [meetingCount, setMeetingCount] = useState(PRE_FILLED_IDS.size);
  const [showVideo, setShowVideo] = useState(false);
  const [weekLabel] = useState(getWeekLabel);
  const lateIdxRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const LIVE_START = 900;       // delay before the first initial-live booking appears
    const BOOKING_INTERVAL = 550; // gap between each successive initial-live booking
    const DOT_TO_CARD = 380;      // delay from dot → card for each booking

    // Phase 1 — initial live bookings (no toasts; too busy to pair one-to-one).
    LIVE_QUEUE.forEach((meeting, i) => {
      const base = LIVE_START + i * BOOKING_INTERVAL;
      const dotT = setTimeout(() => {
        setMeetingStates(prev => ({ ...prev, [meeting.id]: 'dot' }));
      }, base);
      const cardT = setTimeout(() => {
        setMeetingStates(prev => ({ ...prev, [meeting.id]: 'card' }));
        setMeetingCount(PRE_FILLED_IDS.size + i + 1);
      }, base + DOT_TO_CARD);
      timersRef.current.push(dotT, cardT);
    });

    const initialEndTime = LIVE_START + LIVE_QUEUE.length * BOOKING_INTERVAL + DOT_TO_CARD;
    const videoT = setTimeout(() => setShowVideo(true), initialEndTime + 400);

    // Phase 2 — late bookings, paced ~every 10–14s, each paired with a toast and a
    // real meeting that materialises on the calendar. Starts 1.8s after initial phase ends.
    const lateStart = setTimeout(() => fireLateBooking(), initialEndTime + 1800);

    timersRef.current.push(videoT, lateStart);

    return () => timersRef.current.forEach(t => clearTimeout(t));
  }, []);

  // Fires one late booking: toast first, then dot on the calendar, then dot → card.
  // This is what makes the toast feel real — it announces something that actually happens.
  const fireLateBooking = () => {
    if (lateIdxRef.current >= LATE_BOOKINGS.length) return;

    const { meeting, toast } = LATE_BOOKINGS[lateIdxRef.current];
    lateIdxRef.current++;

    // t=0: toast pops up
    setActiveToast(toast);

    // t=500ms: dot appears on the calendar at the meeting's slot (eye travels from toast → grid)
    const dotT = setTimeout(() => {
      setMeetingStates(prev => ({ ...prev, [meeting.id]: 'dot' }));
    }, 500);

    // t=950ms: dot expands to a card
    const cardT = setTimeout(() => {
      setMeetingStates(prev => ({ ...prev, [meeting.id]: 'card' }));
      setMeetingCount(prev => prev + 1);
    }, 950);

    // t=4200ms: toast fades
    const hideT = setTimeout(() => setActiveToast(null), 4200);

    // t=10–14s: next late booking
    const nextT = setTimeout(fireLateBooking, 10000 + Math.random() * 4000);

    timersRef.current.push(dotT, cardT, hideT, nextT);
  };

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
      <div className="w-full h-full bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-stone-200/80 flex flex-col overflow-visible font-sans relative">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 bg-stone-50/80 rounded-t-2xl">
          <div className="text-xs font-semibold text-stone-400 tracking-wide">
            Week of {weekLabel}
            {meetingCount > 0 && (
              <span className="ml-1.5">
                — <span className="text-[#C5A059]">{meetingCount}</span> meetings
              </span>
            )}
          </div>
          <a
            href="https://calendly.com/george-lynn-lead-gen/strategy-session-w?month=2026-04"
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
        <div className="flex flex-1 relative bg-white pt-1 rounded-b-2xl">
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

          {/* Toast Notification — floats off the calendar's bottom-right, half inside / half outside
              so it reads as a real-world alert popping out of the calendar rather than UI chrome. */}
          <AnimatePresence>
            {activeToast && (
              <motion.div
                initial={{ opacity: 0, x: 24, y: 6, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 18, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                className="absolute z-[80] bg-white border border-stone-200 rounded-xl flex items-start gap-2.5 w-60 px-4 py-3"
                style={{
                  right: '-32px',
                  bottom: '88px',
                  boxShadow: '0 18px 40px -12px rgba(26,26,26,0.22), 0 4px 12px -4px rgba(26,26,26,0.08)',
                }}
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-emerald-50">
                  <CalendarCheck size={13} className="text-emerald-600" strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold text-[#1a1a1a] leading-tight">{activeToast.title}</div>
                  <div className="text-[11px] text-stone-500 mt-1 leading-snug">{activeToast.detail}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Day Columns with Meetings */}
          <div className="flex-1 flex relative">
            {DAYS.map((_, dayIndex) => (
              <div key={dayIndex} className={`flex-1 relative ${dayIndex !== 0 ? 'border-l border-stone-100/60' : ''}`}>
                {ALL_MEETINGS.filter(m => m.day === dayIndex).map((meeting) => {
                  const topPercent = ((meeting.start - START_HOUR) / TOTAL_HOURS) * 100;
                  const heightPercent = (meeting.duration / TOTAL_HOURS) * 100;
                  const state = meetingStates[meeting.id] || 'hidden';
                  const isHovered = hoveredMeeting === meeting.id;
                  const cardClasses = getCardClasses(meeting);
                  const isDot = state === 'dot';
                  const isCard = state === 'card';
                  const isVisible = isDot || isCard;

                  // Dot color based on meeting type
                  const dotBg = meeting.status === 'confirmed' ? 'bg-stone-500'
                    : meeting.type === 'demo' ? 'bg-[#C5A059]'
                    : meeting.type === 'discovery' ? 'bg-emerald-400'
                    : 'bg-stone-400';

                  return (
                    <div
                      key={meeting.id}
                      className={`absolute left-1.5 right-1.5 ${isHovered ? 'z-[60]' : 'z-0'}`}
                      style={{
                        top: `${topPercent}%`,
                        height: `calc(${heightPercent}% - 4px)`,
                      }}
                    >
                      {/* Single element: dot → card via CSS transitions */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                          isCard
                            ? `rounded-lg border p-2 cursor-pointer ${cardClasses.bg} ${cardClasses.text} ${cardClasses.border} ${isHovered ? 'ring-2 ring-[#C5A059] ring-offset-1 shadow-md z-30' : 'z-10 hover:z-20'}`
                            : isDot
                            ? 'rounded-full'
                            : ''
                        }`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: !isVisible ? 'scale(0)' : isCard ? 'scale(1)' : 'scale(1)',
                          width: isDot ? '8px' : '100%',
                          height: isDot ? '8px' : '100%',
                          top: isDot ? '50%' : '0',
                          left: isDot ? '50%' : '0',
                          marginTop: isDot ? '-4px' : '0',
                          marginLeft: isDot ? '-4px' : '0',
                          position: 'absolute',
                        }}
                        onMouseEnter={() => isCard ? setHoveredMeeting(meeting.id) : null}
                        onMouseLeave={() => setHoveredMeeting(null)}
                      >
                        {/* Dot state — colored circle */}
                        {isDot && (
                          <div className={`w-full h-full rounded-full ${dotBg}`} />
                        )}

                        {/* Card state — meeting content */}
                        {isCard && (
                          <>
                            <div
                              className="font-semibold text-[11px] leading-tight truncate transition-opacity duration-300"
                              style={{ opacity: isCard ? 1 : 0 }}
                            >
                              {meeting.title}
                            </div>

                            {/* Tooltip */}
                            <AnimatePresence>
                              {isHovered && (
                                <motion.div
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 4 }}
                                  transition={{ duration: 0.12 }}
                                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-[#1a1a1a] text-white text-[11px] leading-relaxed p-3 rounded-lg shadow-xl border border-stone-700 z-[70] pointer-events-none"
                                >
                                  <div className="font-medium text-[#C5A059] mb-1">{meeting.title.split('—')[0].trim()}</div>
                                  <div className="text-stone-300">{meeting.tooltip.split('·').slice(1).join('·').trim()}</div>
                                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#1a1a1a]"></div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Play Video Pill */}
          <div
            className={`absolute bottom-6 right-6 z-40 transition-all duration-500 ${showVideo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
          >
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-stone-800 text-stone-100 rounded-full text-xs font-medium shadow-xl hover:bg-stone-700 hover:scale-105 transition-all group border border-stone-600"
            >
              <div className="w-5 h-5 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1a1a1a] group-hover:bg-white transition-colors">
                <Play size={10} className="ml-0.5" fill="currentColor" />
              </div>
              See how it works · 4 min
            </button>
          </div>
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
            <div className="absolute inset-0 bg-stone-900/95 backdrop-blur-sm" />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
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
                title="How Lynn guarantees results"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
