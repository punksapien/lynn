import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface CaseStudy {
  slug: string;
  name: string;
  tag: string;
  tagColor: 'gold' | 'green' | 'stone';
  gradient: string;
  desc: string;
  metrics: { num: string; label: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'alpega',
    name: 'Alpega Group',
    tag: 'TMS / Logistics SaaS',
    tagColor: 'stone',
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
    tagColor: 'gold',
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
    tagColor: 'green',
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
    tagColor: 'gold',
    gradient: 'from-[#5a4418] to-[#9a7a38]',
    desc: 'Procurement platform for metals markets needed consistent qualified pipeline with senior decision-makers.',
    metrics: [
      { num: '20', label: 'qualified meetings/month' },
    ],
  },
  {
    slug: 'descartes',
    name: 'Descartes Systems',
    tag: 'Compliance / Export Control',
    tagColor: 'stone',
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
    tagColor: 'green',
    gradient: 'from-emerald-900 to-emerald-600',
    desc: 'Needed to expand across multiple EU countries simultaneously from a standing start.',
    metrics: [
      { num: '300', label: 'qualified leads in 100 days' },
    ],
  },
  {
    slug: 'teamlearn',
    name: 'Teamlearn',
    tag: 'Enterprise SaaS / L&D',
    tagColor: 'gold',
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
    tagColor: 'gold',
    gradient: 'from-[#3a2a10] to-[#7a6030]',
    desc: 'Procurement tendering platform needed a steady flow of qualified demos with enterprise buyers.',
    metrics: [
      { num: '20', label: 'demos/month' },
    ],
  },
  {
    slug: 'smartbooking',
    name: 'SmartBooking',
    tag: 'Logistics / Booking Platform',
    tagColor: 'stone',
    gradient: 'from-stone-800 to-stone-500',
    desc: 'Logistics booking platform needed qualified meetings with operations and supply chain decision-makers.',
    metrics: [
      { num: '20', label: 'demos/month' },
    ],
  },
];

const tagStyles = {
  gold: 'bg-white/20 text-white',
  green: 'bg-white/20 text-white',
  stone: 'bg-white/20 text-white',
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
            <span className="italic text-[#C5A059] font-normal">SaaS companies.</span>
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
            { num: '£18M+', label: 'pipeline generated' },
            { num: '9', label: 'supply chain SaaS clients' },
            { num: '6', label: 'languages, native speakers' },
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
                href={`#/case-study/${cs.slug}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                {/* Card Top — Gradient with Logo */}
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${cs.gradient} flex items-center justify-center p-8`}>
                  <span className={`absolute top-4 left-4 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full ${tagStyles[cs.tagColor]}`}>
                    {cs.tag}
                  </span>
                  <span className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 group-hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                  <span className="font-serif text-3xl text-white text-center leading-tight">{cs.name}</span>
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
              href="#contact"
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
