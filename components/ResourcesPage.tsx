import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type ResourceType = 'blog' | 'guide' | 'report' | 'video';

interface Resource {
  type: ResourceType;
  title: string;
  desc: string;
  readTime: string;
  date: string;
}

const RESOURCES: Resource[] = [
  {
    type: 'blog',
    title: 'Why Cold Email Reply Rates Are Under 2% in Supply Chain SaaS (And What to Do Instead)',
    desc: 'The data behind why email-first outbound is failing for supply chain SaaS, and why human cold calling is producing 5-10x more qualified demos.',
    readTime: '5 min read',
    date: 'March 2025',
  },
  {
    type: 'guide',
    title: 'The True Cost of an In-House SDR vs. Outsourced Outbound',
    desc: 'A breakdown of what it actually costs to hire, train, and retain an SDR for supply chain SaaS — compared to outsourcing to a specialist agency.',
    readTime: '8 min read',
    date: 'February 2025',
  },
  {
    type: 'blog',
    title: 'Multilingual Outbound: Why Calling a French VP in French Changes Everything',
    desc: 'The conversion data behind native-language calling across European markets, and why translation isn\'t the same as fluency.',
    readTime: '4 min read',
    date: 'January 2025',
  },
  {
    type: 'report',
    title: 'Supply Chain SaaS Outbound Benchmark Report 2025',
    desc: 'Aggregated data from our campaigns — dial-to-connect ratios, connect-to-meeting conversion, best times to call, and which titles pick up across markets.',
    readTime: '12 min read',
    date: 'January 2025',
  },
  {
    type: 'blog',
    title: 'AI SDRs vs. Human Callers: The Data Supply Chain SaaS Companies Need to See',
    desc: 'Why AI-generated outreach is producing zero pipeline for supply chain SaaS companies, and what\'s actually working in 2025.',
    readTime: '6 min read',
    date: 'December 2024',
  },
  {
    type: 'video',
    title: 'How We Booked 280 Demos for Alpega in 12 Months',
    desc: 'A walkthrough of the campaign structure, multilingual strategy, and scaling process behind our largest client engagement.',
    readTime: '14 min watch',
    date: 'November 2024',
  },
];

const FILTERS = ['All', 'Blog', 'Guides', 'Reports', 'Videos'] as const;

const typeConfig: Record<ResourceType, { bg: string; tagBg: string; tagText: string; label: string }> = {
  blog: {
    bg: 'bg-gradient-to-br from-stone-100 to-stone-200/60',
    tagBg: 'bg-stone-300/60',
    tagText: 'text-stone-700',
    label: 'BLOG',
  },
  guide: {
    bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100/60',
    tagBg: 'bg-emerald-200/60',
    tagText: 'text-emerald-800',
    label: 'GUIDE',
  },
  report: {
    bg: 'bg-gradient-to-br from-[#C5A059]/10 to-[#C5A059]/20',
    tagBg: 'bg-[#C5A059]/20',
    tagText: 'text-[#8a6a28]',
    label: 'REPORT',
  },
  video: {
    bg: 'bg-gradient-to-br from-[#1a1a1a] to-stone-800',
    tagBg: 'bg-white/15',
    tagText: 'text-white',
    label: 'VIDEO',
  },
};

const filterMap: Record<string, ResourceType | null> = {
  All: null,
  Blog: 'blog',
  Guides: 'guide',
  Reports: 'report',
  Videos: 'video',
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const ResourcesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered = activeFilter === 'All'
    ? RESOURCES
    : RESOURCES.filter(r => r.type === filterMap[activeFilter]);

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-40 pb-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
            Resources
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl leading-[1.08] tracking-tight mb-5"
          >
            Outbound playbooks for supply chain{' '}
            <span className="text-[#C5A059] font-normal">SaaS.</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-lg text-stone-500 leading-relaxed"
          >
            Everything we've learned from running thousands of outbound campaigns in supply chain, logistics, and procurement — shared openly.
          </motion.p>
        </div>
      </section>

      {/* Filters + Content */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-5xl">
          {/* Filter Tabs */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${
                  activeFilter === f
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-[#C5A059] hover:text-[#C5A059]'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Featured Resource */}
          <motion.a
            href="#"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="group grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] rounded-2xl overflow-hidden mb-12 hover:shadow-2xl transition-shadow"
          >
            {/* Left — gradient visual */}
            <div className="bg-gradient-to-br from-stone-800 to-[#C5A059]/30 min-h-[260px] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#C5A059]/5" />
              <div className="font-serif text-6xl text-white/10 relative z-10">Lynn.</div>
            </div>
            {/* Right — content */}
            <div className="p-10 flex flex-col justify-center">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-3">Featured Guide</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-3">
                The Supply Chain SaaS Outbound Playbook: Cold Calling in 2025
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed mb-5">
                Everything we know about booking qualified enterprise demos in supply chain, logistics, and procurement SaaS — from ICP definition to multilingual calling at scale.
              </p>
              <span className="text-sm font-medium text-[#C5A059] group-hover:underline flex items-center gap-1">
                Read the guide <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource, i) => {
              const config = typeConfig[resource.type];
              return (
                <motion.a
                  key={`${resource.title}-${i}`}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  {/* Thumbnail Area */}
                  <div className={`h-44 relative flex items-center justify-center ${config.bg}`}>
                    <span className={`absolute top-3 left-3 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full ${config.tagBg} ${config.tagText}`}>
                      {config.label}
                    </span>
                    {/* Abstract placeholder */}
                    <div className={`font-serif text-4xl ${resource.type === 'video' ? 'text-white/10' : 'text-stone-300/50'}`}>
                      {resource.type === 'video' ? '▶' : '✦'}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-lg leading-snug mb-2">{resource.title}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed mb-4">{resource.desc}</p>
                    <div className="mt-auto pt-3 border-t border-stone-100 flex justify-between text-[11px] text-stone-400">
                      <span>{resource.readTime}</span>
                      <span>{resource.date}</span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Newsletter Strip */}
          <motion.div
            {...fadeUp}
            className="mt-16 bg-white border border-stone-200 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center"
          >
            <div>
              <h3 className="font-serif text-2xl mb-1">Get outbound insights for supply chain SaaS</h3>
              <p className="text-sm text-stone-500">No spam. One email when we publish something worth reading. Unsubscribe any time.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 border border-stone-200 rounded-xl bg-[#F9F8F4] text-sm text-[#1a1a1a] placeholder-stone-400 w-60 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* CTA Strip */}
          <motion.div
            {...fadeUp}
            className="mt-8 bg-[#1a1a1a] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-serif text-xl text-white mb-1">Ready to put this into practice?</h3>
              <p className="text-sm text-stone-400">Book a strategy call and we'll build your outbound plan.</p>
            </div>
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w?month=2026-04" target="_blank" rel="noopener noreferrer"
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
