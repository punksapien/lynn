import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, CheckCircle2 } from 'lucide-react';

const ACCORDION_DATA = [
  { title: 'Data & targeting', content: 'We map your ICP across European markets and build verified contact lists.' },
  { title: 'Native-language calling', content: 'Our team of native speakers engages prospects in 6 European languages.' },
  { title: 'Qualify & book', content: 'We rigorously qualify every lead against your criteria before booking.' },
  { title: 'Your part in the process: Show up and close', content: 'You take the meetings. We handle everything else.' }
];

const COUNTERS = [
  "2,400 ICP-matched contacts identified across 4 European markets.",
  "200+ precision dials per day in 6 languages.",
  "30+ qualified demos landing in your calendar.",
  "£2M+ pipeline from qualified conversations."
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS = ['9 AM', '10 AM', '11 AM', '1 PM', '2 PM', '3 PM', '4 PM'];

// Pre-generated data for deterministic rendering
const DOTS = Array.from({ length: 35 }).map((_, i) => ({
  day: i % 5,
  hour: Math.floor(i / 5),
  active: [2, 5, 8, 12, 17, 22, 25, 28, 31, 34].includes(i),
  phone: [5, 12, 25, 31].includes(i)
}));

const MEETINGS = [
  { day: 0, hour: 1, duration: 2, type: 'demo', color: 'bg-orange-100 border-orange-200 text-orange-800', label: 'Demo' },
  { day: 1, hour: 3, duration: 1, type: 'discovery', color: 'bg-blue-100 border-blue-200 text-blue-800', label: 'Discovery' },
  { day: 2, hour: 0, duration: 2, type: 'demo', color: 'bg-orange-100 border-orange-200 text-orange-800', label: 'Demo' },
  { day: 3, hour: 2, duration: 1, type: 'followup', color: 'bg-stone-800 border-stone-700 text-stone-200', label: 'Follow-up' },
  { day: 4, hour: 4, duration: 2, type: 'demo', color: 'bg-orange-100 border-orange-200 text-orange-800', label: 'Demo' },
  { day: 1, hour: 5, duration: 1, type: 'discovery', color: 'bg-blue-100 border-blue-200 text-blue-800', label: 'Discovery' },
  { day: 4, hour: 1, duration: 1, type: 'followup', color: 'bg-stone-800 border-stone-700 text-stone-200', label: 'Follow-up' }
];

export const Pipeline = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="pipeline" className="py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
            How your pipeline will look with Lynn
          </h2>
          <p className="text-stone-400 text-lg">Focus on closing deals while we deliver qualified demos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Accordion */}
          <div className="space-y-4">
            <div className="text-sm text-stone-500 uppercase tracking-wider font-semibold mb-6">What we handle</div>
            {ACCORDION_DATA.map((item, i) => (
              <div key={i} className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === i ? 'border-[#C5A059]/50 bg-stone-900/80' : 'border-stone-800 bg-stone-900/30'}`}>
                <button 
                  onClick={() => setOpenIndex(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-medium text-lg transition-colors ${openIndex === i ? 'text-[#C5A059]' : 'text-white'}`}>{item.title}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#C5A059]' : 'text-stone-500'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-stone-400"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Interactive Calendar */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full bg-white rounded-2xl p-6 shadow-2xl border border-stone-200 text-stone-800 relative overflow-hidden">
              
              {/* Calendar Header */}
              <div className="grid grid-cols-5 gap-2 mb-4">
                {DAYS.map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="relative grid grid-cols-5 gap-2 h-[350px]">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 grid grid-cols-5 gap-2 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="border-l border-stone-100 h-full w-full first:border-l-0"></div>
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-7 gap-0 pointer-events-none">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="border-t border-stone-100 w-full h-full first:border-t-0"></div>
                  ))}
                </div>

                {/* Step 0 & 1: Dots and Phones */}
                <AnimatePresence>
                  {(openIndex === 0 || openIndex === 1) && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 grid grid-cols-5 grid-rows-7 gap-2"
                    >
                      {DOTS.map((dot, i) => (
                        <div key={i} className="flex items-center justify-center w-full h-full">
                          {dot.active && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ 
                                scale: openIndex === 1 && dot.phone ? [1, 1.2, 1] : 1,
                                opacity: openIndex === 1 && !dot.phone ? 0.2 : 1
                              }}
                              transition={{ 
                                scale: { repeat: openIndex === 1 && dot.phone ? Infinity : 0, duration: 1.5 },
                                delay: i * 0.02 
                              }}
                              className={`flex items-center justify-center rounded-full ${openIndex === 1 && dot.phone ? 'w-6 h-6 bg-blue-100 text-blue-600' : 'w-2 h-2 bg-stone-300'}`}
                            >
                              {openIndex === 1 && dot.phone && <Phone size={12} />}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 2 & 3: Meeting Blocks */}
                <AnimatePresence>
                  {(openIndex === 2 || openIndex === 3) && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      {MEETINGS.map((meeting, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                          className={`absolute rounded-md border p-2 shadow-sm flex flex-col justify-between overflow-hidden ${meeting.color}`}
                          style={{
                            left: `calc(${meeting.day * 20}% + 4px)`,
                            width: `calc(20% - 8px)`,
                            top: `calc(${(meeting.hour / 7) * 100}% + 4px)`,
                            height: `calc(${((meeting.duration) / 7) * 100}% - 8px)`,
                          }}
                        >
                          <span className="text-[10px] font-semibold leading-tight">{meeting.label}</span>
                          
                          {/* Step 3: Checkmarks */}
                          <AnimatePresence>
                            {openIndex === 3 && (meeting.type === 'demo' || meeting.type === 'discovery') && (
                              <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 + (i * 0.1), type: 'spring' }}
                                className="absolute bottom-1 right-1 bg-green-500 text-white rounded-full p-0.5 shadow-sm"
                              >
                                <CheckCircle2 size={12} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Dynamic Counter */}
            <div className="mt-8 w-full">
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]"></div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={openIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-stone-300 font-medium"
                  >
                    {COUNTERS[openIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
