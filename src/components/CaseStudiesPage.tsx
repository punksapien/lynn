import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface CaseStudy {
  slug: string;
  name: string;
  tag: string;
  tagColor: 'gold' | 'green' | 'stone';
  desc: string;
  metrics: { num: string; label: string }[];
  logo?: string;
  logoClass?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'alpega',
    name: 'Alpega Group',
    tag: 'TMS / Logistics Software',
    tagColor: 'stone',
    desc: 'Enterprise logistics software company needed to scale outbound across 6 European markets with zero internal SDR capacity.',
    metrics: [
      { num: '80+', label: 'demos per month' },
      { num: '6', label: 'European markets' },
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
    metrics: [
      { num: '19', label: 'demos/month' },
    ],
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
    metrics: [
      { num: '20', label: 'qualified meetings/month' },
    ],
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
    metrics: [
      { num: '20', label: 'demos/month' },
    ],
    logo: '/assets/tendereasy.png',
    logoClass: 'max-h-14 max-w-[55%]',
  },
];

const tagStyles = {
  gold: 'bg-[#C5A059]/10 text-[#C5A059]',
  green: 'bg-emerald-50 text-emerald-700',
  stone: 'bg-stone-100 text-stone-600',
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-40 pb-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
            Case Studies
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl leading-[1.08] tracking-tight mb-6 max-w-3xl mx-auto"
          >
            Real results for supply chain{' '}
            <span className="text-[#C5A059] font-normal">software companies.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed"
          >
            Every number below is a qualified, attended demo with a named decision-maker. Click any case study to see exactly what we did.
          </motion.p>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="px-6 pb-16">
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="container mx-auto max-w-5xl bg-[#1a1a1a] rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { num: '2,298+', label: 'qualified demos booked' },
            { num: '$45M+', label: 'pipeline generated' },
            { num: '30+', label: 'supply chain software clients' },
            { num: '6', label: 'languages, fluent teams' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-3xl text-white leading-none mb-1">{stat.num}</div>
              <div className="text-xs text-stone-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Case Study Grid */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs, i) => (
              <motion.a
                key={i}
                href={`/case-study/${cs.slug}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                {/* Card Top — Logo Area */}
                <div className="relative aspect-[5/3] bg-white border-b border-stone-100 flex items-center justify-center overflow-hidden pt-6">
                  <span className={`absolute top-4 left-4 z-10 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full ${tagStyles[cs.tagColor]}`}>
                    {cs.tag}
                  </span>
                  <span className="absolute top-4 right-4 z-10 w-8 h-8 bg-stone-200/50 rounded-full flex items-center justify-center text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600 transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                  {cs.logo ? (
                    <img
                      src={cs.logo}
                      alt={cs.name}
                      className={`object-contain ${cs.logoClass || 'max-h-16 max-w-[60%]'}`}
                    />
                  ) : (
                    <span className="font-serif text-3xl text-[#1a1a1a] text-center leading-tight">{cs.name}</span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl mb-2">{cs.name}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-5">{cs.desc}</p>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-4 border-t border-stone-100 mt-auto">
                    {cs.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="font-serif text-2xl text-[#1a1a1a] leading-none mb-0.5">{m.num}</div>
                        <div className="text-[11px] text-stone-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            {...fadeUp}
            className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-serif text-2xl text-white mb-1">Want results like these?</h3>
              <p className="text-sm text-stone-400">Book a strategy call and we'll show you what we can do for your pipeline.</p>
            </div>
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] rounded-xl text-sm font-medium hover:bg-stone-100 transition-colors shadow-lg"
            >
              Book a strategy call <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
