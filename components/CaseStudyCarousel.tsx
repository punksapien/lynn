import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const verticals = ["supply chain", "logistics", "procurement"];

interface CarouselStudy {
  slug: string;
  name: string;
  tag: string;
  tagColor: 'gold' | 'green' | 'stone';
  desc: string;
  metrics: { num: string; label: string }[];
  logo: string;
  logoClass: string;
}

const tagStyles = {
  gold: 'bg-[#C5A059]/10 text-[#C5A059]',
  green: 'bg-emerald-50 text-emerald-700',
  stone: 'bg-stone-100 text-stone-600',
};

const STUDIES: CarouselStudy[] = [
  {
    slug: 'alpega',
    name: 'Alpega Group',
    tag: 'TMS / Logistics Software',
    tagColor: 'stone',
    desc: 'Enterprise logistics software company needed to scale outbound across 6 European markets with zero internal SDR capacity.',
    metrics: [
      { num: '80+', label: 'demos per month' },
      { num: '6', label: 'European markets' },
      { num: '12+', label: 'months ongoing' },
    ],
    logo: '/assets/brand_alpega.avif',
    logoClass: 'max-h-20 max-w-[50%] mt-4',
  },
  {
    slug: 'descartes',
    name: 'Descartes Systems',
    tag: 'Compliance / Export Control',
    tagColor: 'stone',
    desc: 'Global logistics tech leader needed outbound for their compliance division targeting aerospace and defence.',
    metrics: [
      { num: 'EMEA', label: 'wide outbound' },
      { num: 'A&D', label: 'aerospace & defence' },
    ],
    logo: '/assets/descartes-dark.png',
    logoClass: 'max-h-10 max-w-[55%]',
  },
  {
    slug: 'kpler',
    name: 'Kpler',
    tag: 'Maritime Intelligence',
    tagColor: 'stone',
    desc: 'Kpler needed enterprise demos for their MarineTraffic container tracking solution with global manufacturers.',
    metrics: [{ num: '19', label: 'demos/month' }],
    logo: '/assets/kpler.svg',
    logoClass: 'max-h-36 max-w-[80%]',
  },
  {
    slug: 'buyco',
    name: 'BuyCo',
    tag: 'Ocean Shipping Software',
    tagColor: 'gold',
    desc: 'Ocean container shipping platform needed enterprise demos with senior logistics leaders across 7 European markets.',
    metrics: [
      { num: '67', label: 'demos booked' },
      { num: '7', label: 'European markets' },
    ],
    logo: '/assets/buyco.png',
    logoClass: 'max-h-16 max-w-[50%]',
  },
  {
    slug: 'freightgate',
    name: 'Freightgate',
    tag: 'Freight Rate Management',
    tagColor: 'stone',
    desc: 'Freight rate management platform needed enterprise demos with retail and F&B shippers — booking Chanel, Heineken, Danone, and Stellantis across Europe.',
    metrics: [
      { num: '20+', label: 'demos per month' },
      { num: '160+', label: 'enterprise leads engaged' },
    ],
    logo: '/assets/freightgate.png',
    logoClass: 'max-h-12 max-w-[60%]',
  },
  {
    slug: 'mintec',
    name: 'Mintec by Expana',
    tag: 'Procurement Intelligence',
    tagColor: 'gold',
    desc: 'Commodity data platform needed enterprise demos with procurement leaders at $300M+ manufacturers.',
    metrics: [
      { num: '30+', label: 'demos per month' },
      { num: '$5.5M', label: 'pipeline generated' },
    ],
    logo: '/assets/brand_mintec.avif',
    logoClass: 'max-h-24 max-w-[50%]',
  },
  {
    slug: 'trayport',
    name: 'Trayport',
    tag: 'Energy Trading / Procurement',
    tagColor: 'gold',
    desc: 'Procurement platform for metals markets needed consistent qualified pipeline with senior decision-makers.',
    metrics: [{ num: '20', label: 'qualified meetings/month' }],
    logo: '/assets/trayport.jpeg',
    logoClass: 'max-h-12 max-w-[55%]',
  },
  {
    slug: 'easy4pro',
    name: 'Easy4Pro',
    tag: 'Supply Chain Platform',
    tagColor: 'green',
    desc: 'Logistics platform needed qualified meetings with enterprise distributors across Europe and LATAM.',
    metrics: [
      { num: '28+', label: 'demos per month' },
      { num: '4', label: 'markets covered' },
    ],
    logo: '/assets/easypro.avif',
    logoClass: 'max-h-16 max-w-[55%]',
  },
  {
    slug: 'matium',
    name: 'Matium',
    tag: 'Plastics Trading Platform',
    tagColor: 'green',
    desc: 'Plastics trading platform needed to break into a relationship-driven industry with demos at DuPont, ExxonMobil, and Jabil.',
    metrics: [
      { num: '42', label: 'demos booked' },
      { num: '14', label: 'demos/month' },
    ],
    logo: '/assets/matium.svg',
    logoClass: 'max-h-14 max-w-[50%]',
  },
  {
    slug: 'volue',
    name: 'Volue',
    tag: 'Energy & Trading Software',
    tagColor: 'stone',
    desc: 'Energy and commodity trading software booking demos with Tier 1 European energy houses including TotalEnergies, EDF Trading, Mercuria, and Ørsted.',
    metrics: [
      { num: '13+', label: 'demos per month' },
      { num: '70', label: 'enterprise leads engaged' },
    ],
    logo: '/assets/volue.svg',
    logoClass: 'max-h-10 max-w-[55%]',
  },
  {
    slug: 'vesper',
    name: 'Vesper',
    tag: 'Procurement Intelligence',
    tagColor: 'gold',
    desc: 'Commodity intelligence platform booking demos with European F&B leaders — Pret a Manger, Twinings, Compass Group, Fever-Tree, and more.',
    metrics: [
      { num: '30+', label: 'enterprise leads/month' },
      { num: '150', label: 'leads engaged in 6 months' },
    ],
    logo: '/assets/vesper.svg',
    logoClass: 'max-h-12 max-w-[50%]',
  },
  {
    slug: 'tendereasy',
    name: 'Tendereasy',
    tag: 'Procurement / Tendering',
    tagColor: 'gold',
    desc: 'Procurement tendering platform needed a steady flow of qualified demos with enterprise buyers.',
    metrics: [{ num: '20', label: 'demos/month' }],
    logo: '/assets/tendereasy.png',
    logoClass: 'max-h-14 max-w-[55%]',
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
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Start animations only once the section has scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasEntered) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered) return;
    const interval = setInterval(() => {
      setCurrentVertical(prev => (prev + 1) % verticals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [hasEntered]);

  const total = STUDIES.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + total) % total);
  }, [total]);

  // Auto-advance every 5s — only after section enters view
  useEffect(() => {
    if (isPaused || !hasEntered) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, hasEntered, go]);

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
    <section ref={sectionRef} id="case-studies" className="py-16 md:py-20 bg-[#F9F8F4] border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6 mb-12">
          <div>
            <div className="inline-block mb-4 text-xs font-bold tracking-widest text-stone-400 uppercase">Case Studies</div>
            <h2 className="font-serif text-4xl md:text-[2.7rem] text-[#1a1a1a] leading-tight">
              Proven results in{' '}
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
              {' '}<span className="text-[#C5A059]">software.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
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
              className="ml-2 text-sm font-medium text-[#C5A059] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5 whitespace-nowrap"
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
                    {/* Logo Header */}
                    <div className="relative aspect-[5/3] bg-white border-b border-stone-100 flex items-center justify-center overflow-hidden pt-6">
                      <span className={`absolute top-4 left-4 z-10 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full ${tagStyles[cs.tagColor]}`}>
                        {cs.tag}
                      </span>
                      <span className="absolute top-4 right-4 z-10 w-8 h-8 bg-stone-200/50 rounded-full flex items-center justify-center text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600 transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                      <img
                        src={cs.logo}
                        alt={cs.name}
                        className={`object-contain ${cs.logoClass}`}
                      />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl mb-2">{cs.name}</h3>
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
          <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-sm font-medium tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
            Book a strategy call
          </a>
        </div>
      </div>
    </section>
  );
};
