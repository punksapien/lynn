import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const verticals = ["supply chain", "logistics", "procurement"];

interface CarouselStudy {
  slug: string;
  name: string;
  tag: string;
  gradient: string;
  desc: string;
  metrics: { num: string; label: string }[];
}

const STUDIES: CarouselStudy[] = [
  {
    slug: 'alpega',
    name: 'Alpega Group',
    tag: 'TMS / Logistics SaaS',
    gradient: 'from-stone-800 to-stone-600',
    desc: 'Enterprise logistics SaaS needed to scale outbound across 6 European markets with zero internal SDR capacity.',
    metrics: [
      { num: '280', label: 'demos in year one' },
      { num: '£10M+', label: 'pipeline generated' },
      { num: '60-80', label: 'per month ongoing' },
    ],
  },
  {
    slug: 'mintec',
    name: 'Mintec / Expana',
    tag: 'Procurement Intelligence',
    gradient: 'from-[#6b5630] to-[#C5A059]',
    desc: 'Commodity data platform needed enterprise demos with procurement leaders at £250M+ manufacturers.',
    metrics: [
      { num: '151', label: 'demos in 180 days' },
      { num: '£4.5M', label: 'pipeline generated' },
    ],
  },
  {
    slug: 'easy4pro',
    name: 'Easy4Pro',
    tag: 'Supply Chain Platform',
    gradient: 'from-emerald-900 to-emerald-700',
    desc: 'Logistics platform needed qualified meetings with enterprise distributors across Europe and LATAM.',
    metrics: [
      { num: '73', label: 'meetings in 90 days' },
      { num: '20-30', label: 'per month ongoing' },
    ],
  },
  {
    slug: 'trayport',
    name: 'Trayport',
    tag: 'Energy Trading / Procurement',
    gradient: 'from-[#5a4418] to-[#9a7a38]',
    desc: 'Procurement platform for metals markets needed consistent qualified pipeline with senior decision-makers.',
    metrics: [{ num: '20', label: 'qualified meetings/month' }],
  },
  {
    slug: 'descartes',
    name: 'Descartes Systems',
    tag: 'Compliance / Export Control',
    gradient: 'from-stone-900 to-stone-700',
    desc: 'Global logistics tech leader needed outbound for their compliance division targeting aerospace and defence.',
    metrics: [
      { num: 'EMEA', label: 'wide outbound' },
      { num: 'A&D', label: 'aerospace & defence' },
    ],
  },
  {
    slug: 'wowflow',
    name: 'WowFlow',
    tag: 'Operations / Facilities SaaS',
    gradient: 'from-emerald-900 to-emerald-600',
    desc: 'Needed to expand across multiple EU countries simultaneously from a standing start.',
    metrics: [{ num: '300', label: 'qualified leads in 100 days' }],
  },
  {
    slug: 'teamlearn',
    name: 'Teamlearn',
    tag: 'Enterprise SaaS / L&D',
    gradient: 'from-[#4a3a18] to-[#8a7a38]',
    desc: 'Had 1-2 demos per month with no structured outbound — needed to scale pipeline fast.',
    metrics: [
      { num: '20-30', label: 'demos/month (from 1-2)' },
      { num: '£1.2M', label: 'pipeline generated' },
    ],
  },
  {
    slug: 'tendereasy',
    name: 'Tendereasy',
    tag: 'Procurement / Tendering',
    gradient: 'from-[#3a2a10] to-[#7a6030]',
    desc: 'Procurement tendering platform needed a steady flow of qualified demos with enterprise buyers.',
    metrics: [{ num: '20', label: 'demos/month' }],
  },
  {
    slug: 'smartbooking',
    name: 'SmartBooking',
    tag: 'Logistics / Booking Platform',
    gradient: 'from-stone-800 to-stone-500',
    desc: 'Logistics booking platform needed qualified meetings with operations and supply chain decision-makers.',
    metrics: [{ num: '20', label: 'demos/month' }],
  },
];

interface Props {
  scrollToSection: (id: string) => (e: React.MouseEvent) => void;
}

export const CaseStudyCarousel: React.FC<Props> = ({ scrollToSection }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentVertical, setCurrentVertical] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVertical(prev => (prev + 1) % verticals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const total = STUDIES.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + total) % total);
  }, [total]);

  // Auto-advance every 5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, go]);

  // Visible cards: current + next two
  const visibleIndices = [0, 1, 2].map(offset => (current + offset) % total);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="case-studies" className="py-16 md:py-20 bg-[#F9F8F4] border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block mb-4 text-xs font-bold tracking-widest text-stone-400 uppercase">Case Studies</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
              Real results for{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentVertical}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  {verticals[currentVertical]}
                </motion.span>
              </AnimatePresence>
              {' '}<span className="text-[#C5A059]">SaaS.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Nav arrows */}
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <a
              href="#/case-studies"
              className="ml-4 text-sm font-medium text-[#C5A059] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5"
            >
              View all <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {visibleIndices.map((idx) => {
                const cs = STUDIES[idx];
                return (
                  <a
                    key={cs.slug}
                    href={`#/case-study/${cs.slug}`}
                    className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
                  >
                    {/* Gradient Header */}
                    <div className={`relative aspect-[5/3] bg-gradient-to-br ${cs.gradient} flex items-center justify-center p-8`}>
                      <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-white/20 text-white">
                        {cs.tag}
                      </span>
                      <span className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 group-hover:bg-white/20 transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                      <span className="font-serif text-3xl text-white text-center leading-tight">{cs.name}</span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-sm text-stone-500 leading-relaxed mb-5">{cs.desc}</p>
                      <div className="flex gap-6 pt-4 border-t border-stone-100 mt-auto">
                        {cs.metrics.map((m, j) => (
                          <div key={j}>
                            <div className="font-serif text-2xl text-[#1a1a1a] leading-none mb-0.5">{m.num}</div>
                            <div className="text-[11px] text-stone-400">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          {STUDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2 bg-[#C5A059]'
                  : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-stone-500 mb-6">Your competitors are already booking meetings like these.</p>
          <a href="#contact" onClick={scrollToSection('contact')} className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-sm font-medium tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
            Book a strategy call
          </a>
        </div>
      </div>
    </section>
  );
};
