import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    week: 'Week 0',
    title: 'Data & targeting',
    content: 'We map your ICP across European markets and build verified contact lists.',
    counter: '2,400 ICP-matched contacts identified across 4 European markets.',
  },
  {
    week: 'Week 1–2',
    title: 'Native-language calling',
    content: 'Our team of native speakers engages prospects in 6 European languages. 200+ dials per day.',
    counter: '200+ precision dials per day in 6 languages.',
  },
  {
    week: 'Week 3–8',
    title: 'Qualify & book',
    content: 'We rigorously qualify every lead against your criteria before booking demos into your calendar.',
    counter: '30+ qualified demos landing in your calendar.',
  },
  {
    week: 'Week 9–12',
    title: 'Your calendar is full',
    content: 'You take the meetings. We handle everything else. 30 demos delivered — guaranteed.',
    counter: '£2M+ pipeline from qualified conversations.',
  },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// Dots for step 0 (data gathering — sparse dots)
const DATA_DOTS = [2, 5, 8, 12, 17, 22, 25, 28, 31, 34];

// Phone icons for step 1 (calling — some dots become phones)
const PHONE_DOTS = [5, 12, 25, 31];

// Progressive meetings — step 2 gets first 3, step 3 gets all 7
const MEETINGS = [
  { day: 0, hour: 1, duration: 2, type: 'demo', color: 'bg-[#C5A059]/15 border-[#C5A059]/25 text-[#9c7a3d]', label: 'Demo' },
  { day: 2, hour: 0, duration: 2, type: 'demo', color: 'bg-[#C5A059]/15 border-[#C5A059]/25 text-[#9c7a3d]', label: 'Demo' },
  { day: 1, hour: 3, duration: 1, type: 'discovery', color: 'bg-emerald-50 border-emerald-200 text-emerald-700', label: 'Discovery' },
  { day: 3, hour: 2, duration: 1, type: 'followup', color: 'bg-stone-700 border-stone-600 text-stone-200', label: 'Follow-up' },
  { day: 4, hour: 4, duration: 2, type: 'demo', color: 'bg-[#C5A059]/15 border-[#C5A059]/25 text-[#9c7a3d]', label: 'Demo' },
  { day: 1, hour: 5, duration: 1, type: 'discovery', color: 'bg-emerald-50 border-emerald-200 text-emerald-700', label: 'Discovery' },
  { day: 4, hour: 1, duration: 1, type: 'followup', color: 'bg-stone-700 border-stone-600 text-stone-200', label: 'Follow-up' },
];

const STEP_DURATION = 4500;

export const Pipeline = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / STEP_DURATION) * 100, 100));
      if (elapsed >= STEP_DURATION) {
        setStep(prev => (prev + 1) % STEPS.length);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [step, isPaused]);

  const handleClick = (i: number) => {
    setStep(i);
    setProgress(0);
  };

  // How many meetings to show based on step
  const visibleMeetings = step === 2 ? MEETINGS.slice(0, 3) : step === 3 ? MEETINGS : [];

  return (
    <section id="pipeline" className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
            How your pipeline will look with Lynn
          </h2>
          <p className="text-stone-400 text-lg">Focus on closing deals while we deliver qualified demos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Accordion with week labels */}
          <div className="space-y-3">
            <div className="text-sm text-stone-500 uppercase tracking-wider font-semibold mb-6">What we handle</div>
            {STEPS.map((item, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors duration-300 relative ${step === i ? 'border-[#C5A059]/50 bg-stone-900/80' : 'border-stone-800 bg-stone-900/30'}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {step === i && (
                  <div className="absolute top-0 left-0 h-0.5 bg-[#C5A059] transition-none" style={{ width: `${progress}%` }} />
                )}
                <button
                  onClick={() => handleClick(i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${step === i ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-stone-800 text-stone-500'}`}>
                      {item.week}
                    </span>
                    <span className={`font-medium transition-colors ${step === i ? 'text-[#C5A059]' : 'text-white'}`}>{item.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${step === i ? 'rotate-180 text-[#C5A059]' : 'text-stone-500'}`} />
                </button>
                <AnimatePresence>
                  {step === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-stone-400 text-sm"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Progressive Calendar */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full bg-white rounded-2xl p-6 shadow-2xl border border-stone-200 text-stone-800 relative overflow-hidden">
              {/* Week label badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-center mb-4"
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">
                    {STEPS[step].week}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Day headers */}
              <div className="grid grid-cols-5 gap-2 mb-3">
                {DAYS.map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="relative grid grid-cols-5 gap-2 h-[320px]">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-5 gap-2 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="border-l border-stone-100 h-full w-full first:border-l-0" />
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-7 gap-0 pointer-events-none">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="border-t border-stone-100 w-full h-full first:border-t-0" />
                  ))}
                </div>

                {/* Step 0: Empty calendar with sparse data dots appearing */}
                <AnimatePresence>
                  {step === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 grid grid-cols-5 grid-rows-7 gap-2"
                    >
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-center">
                          {DATA_DOTS.includes(i) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.03, ease: [0.34, 1.56, 0.64, 1] }}
                              className="w-2 h-2 bg-stone-300 rounded-full"
                            />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 1: Dots + active phone icons */}
                <AnimatePresence>
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 grid grid-cols-5 grid-rows-7 gap-2"
                    >
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-center">
                          {DATA_DOTS.includes(i) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{
                                scale: PHONE_DOTS.includes(i) ? [1, 1.2, 1] : 1,
                                opacity: PHONE_DOTS.includes(i) ? 1 : 0.25,
                              }}
                              transition={{
                                scale: { repeat: PHONE_DOTS.includes(i) ? Infinity : 0, duration: 1.5 },
                                delay: i * 0.02,
                              }}
                              className={`flex items-center justify-center rounded-full ${PHONE_DOTS.includes(i) ? 'w-7 h-7 bg-[#C5A059]/15 text-[#C5A059]' : 'w-2 h-2 bg-stone-300'}`}
                            >
                              {PHONE_DOTS.includes(i) && <Phone size={13} />}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 2: First meetings appearing (3 meetings) */}
                {/* Step 3: Full calendar (all 7 meetings + checkmarks) */}
                <AnimatePresence>
                  {(step === 2 || step === 3) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      {visibleMeetings.map((meeting, i) => (
                        <motion.div
                          key={`${meeting.day}-${meeting.hour}-${meeting.type}`}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: i * 0.12, type: 'spring', stiffness: 200, damping: 20 }}
                          className={`absolute rounded-lg border p-2 shadow-sm flex flex-col justify-between overflow-hidden ${meeting.color}`}
                          style={{
                            left: `calc(${meeting.day * 20}% + 4px)`,
                            width: `calc(20% - 8px)`,
                            top: `calc(${(meeting.hour / 7) * 100}% + 4px)`,
                            height: `calc(${(meeting.duration / 7) * 100}% - 8px)`,
                          }}
                        >
                          <span className="text-[10px] font-semibold leading-tight">{meeting.label}</span>
                          <AnimatePresence>
                            {step === 3 && (meeting.type === 'demo' || meeting.type === 'discovery') && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                                className="absolute bottom-1 right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-sm"
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

            {/* Counter */}
            <div className="mt-6 w-full">
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-stone-300 font-medium text-sm"
                  >
                    {STEPS[step].counter}
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
