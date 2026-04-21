import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type ResourceType = 'blog' | 'guide' | 'report' | 'tool';
type ThumbnailKey =
  | 'blog-multilingual'
  | 'guide-sdr-math'
  | 'tool-pipeline-calc'
  | 'report-case-index'
  | 'report-alpega'
  | 'report-mintec';

interface Resource {
  type: ResourceType;
  title: string;
  desc: string;
  readTime: string;
  date: string;
  href: string;
  thumbnailKey: ThumbnailKey;
}

const FEATURED = {
  eyebrow: 'Featured Report',
  title: 'Cold Calling Across Europe and the US in 2026',
  desc: 'Market-by-market connect rates, industry benchmarks, and where cold calling stops being the right channel. Based on 1.1M+ dials across eight markets.',
  meta: '9 min read · April 2026',
  href: '/resources/cold-calling-connect-rates-by-market',
};

const RESOURCES: Resource[] = [
  {
    type: 'blog',
    title: 'Why calling a French VP in French doubles your connects',
    desc: 'The single variable most pan-European campaigns underspend on. Data for France, DACH, Italy, Spain, Portugal — and where language stops mattering.',
    readTime: '4 min read',
    date: 'April 2026',
    href: '/resources/multilingual-calling-doubles-connect-rates',
    thumbnailKey: 'blog-multilingual',
  },
  {
    type: 'guide',
    title: 'The in-house SDR math for supply chain software',
    desc: 'Fully-loaded costs line by line, ramp time, tenure, and what $400–570K of SDR spend actually produces in qualified meetings.',
    readTime: '6 min read',
    date: 'April 2026',
    href: '/resources/in-house-sdr-math-supply-chain',
    thumbnailKey: 'guide-sdr-math',
  },
  {
    type: 'tool',
    title: 'Pipeline Calculator',
    desc: 'Plug in your deal size, sales cycle, and close rate. See the pipeline and revenue we guarantee to deliver in 90 days.',
    readTime: 'Interactive',
    date: 'Live',
    href: '/roi-calculator',
    thumbnailKey: 'tool-pipeline-calc',
  },
  {
    type: 'report',
    title: 'Case Studies: supply chain software outbound at scale',
    desc: 'Alpega, Mintec, Volue, Descartes, Trayport, Meight, BuyCo — how we built their outbound engines, segment by segment.',
    readTime: '10 min browse',
    date: '2026',
    href: '/case-studies',
    thumbnailKey: 'report-case-index',
  },
  {
    type: 'report',
    title: 'Alpega: 80+ qualified demos per month across 6 languages',
    desc: 'Inside the largest outbound programme we run — how we structure a pan-European TMS motion, staff for language, and ship meetings weekly.',
    readTime: '5 min read',
    date: '2026',
    href: '/case-study/alpega',
    thumbnailKey: 'report-alpega',
  },
  {
    type: 'report',
    title: 'Mintec by Expana: 30+ demos per month for commodity price intelligence',
    desc: 'Procurement and FP&A buyers in consumer goods. A narrow ICP, a technical product, and what multilingual calling did for connect density.',
    readTime: '4 min read',
    date: '2026',
    href: '/case-study/mintec',
    thumbnailKey: 'report-mintec',
  },
];

const FILTERS = ['All', 'Blog', 'Guides', 'Reports', 'Tools'] as const;

const filterMap: Record<string, ResourceType | null> = {
  All: null,
  Blog: 'blog',
  Guides: 'guide',
  Reports: 'report',
  Tools: 'tool',
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

/* ──────────────────────────────────────────────────────────
   Specimen thumbnails — one bespoke block per resource.
   Each is a data preview of the content inside.
   ────────────────────────────────────────────────────────── */

const FeaturedThumbnail: React.FC = () => (
  <div className="relative min-h-[260px] overflow-hidden" style={{ background: '#1a1a1a' }}>
    <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(197,160,89,0.12)' }} />
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 120%, rgba(197,160,89,0.08), transparent 60%)' }} />

    <div className="relative h-full flex flex-col justify-between p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-[5px] h-[5px] rounded-full" style={{ background: '#C5A059' }} />
          <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-stone-400">Benchmark · 2026</span>
        </div>
        <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-stone-600">Fig. 01</span>
      </div>

      <div className="space-y-[7px] mt-4">
        {[
          { m: 'UK',     v: 22, l: '22%' },
          { m: 'DACH',   v: 13, l: '13%' },
          { m: 'IT',     v: 11, l: '11%' },
          { m: 'EU-MIX', v: 14, l: '14%' },
          { m: 'PT',     v: 10, l: '10%' },
          { m: 'FR',     v: 9,  l: '9%'  },
          { m: 'ES',     v: 8,  l: '8%'  },
          { m: 'US',     v: 10, l: '10%' },
          { m: 'NORDIC', v: 6,  l: '6%', dim: true },
        ].map((r) => (
          <div key={r.m} className="grid grid-cols-[56px_1fr_36px] items-center gap-3">
            <span className={`text-[9px] font-semibold tracking-[0.18em] uppercase ${r.dim ? 'text-stone-600' : 'text-stone-500'}`}>{r.m}</span>
            <div className="h-[3px] bg-white/[0.06] relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${(r.v / 22) * 100}%`,
                  background: r.dim ? 'rgba(107,31,46,0.55)' : '#C5A059',
                }}
              />
            </div>
            <span className={`text-[10px] tabular-nums font-medium text-right ${r.dim ? 'text-stone-500' : 'text-stone-300'}`}>{r.l}</span>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between pt-5 border-t border-white/10">
        <div>
          <div className="text-[28px] font-medium tabular-nums text-white leading-none">1.1M<span style={{ color: '#C5A059' }}>+</span></div>
          <div className="text-[9px] font-semibold tracking-[0.22em] uppercase text-stone-500 mt-1">Dials sampled</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.18em] uppercase text-stone-500">8 markets · 6 languages</div>
          <div className="text-[9px] tracking-[0.18em] uppercase text-stone-600 mt-1">Ranges Lynn vs industry</div>
        </div>
      </div>
    </div>
  </div>
);

const BlogMultilingualThumbnail: React.FC = () => (
  <div className="h-44 relative overflow-hidden p-6" style={{ background: '#F9F8F4' }}>
    <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-stone-300/60 text-stone-700">
      BLOG
    </span>

    <div className="relative h-full grid grid-cols-[1fr_auto] gap-5 items-center pt-4">
      {/* Left: 5-bar uplift chart */}
      <div className="space-y-[7px]">
        <div className="text-[9px] font-semibold tracking-[0.22em] uppercase text-stone-400 mb-2 whitespace-nowrap">
          In-language uplift
        </div>
        {[
          { k: 'DE', v: 2.4 },
          { k: 'FR', v: 2.2 },
          { k: 'PT', v: 2.2 },
          { k: 'IT', v: 2.1 },
          { k: 'ES', v: 1.9 },
        ].map((r) => (
          <div key={r.k} className="grid grid-cols-[22px_1fr_30px] items-center gap-2">
            <span className="text-[9px] font-semibold tracking-[0.14em] uppercase text-stone-500">{r.k}</span>
            <div className="h-[3px] bg-stone-200 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0"
                style={{ width: `${(r.v / 2.5) * 100}%`, background: '#C5A059' }}
              />
            </div>
            <span className="text-[10px] tabular-nums font-medium text-stone-600 text-right">{r.v}×</span>
          </div>
        ))}
      </div>

      {/* Right: hero stat */}
      <div className="flex flex-col items-end text-right pl-3 border-l border-stone-200 h-full justify-center">
        <div className="text-[9px] font-semibold tracking-[0.24em] uppercase text-stone-400 mb-1">midpoint</div>
        <div className="font-serif text-[68px] leading-none font-light tabular-nums" style={{ color: '#C5A059' }}>
          2<span className="text-[40px] align-top relative top-[6px] ml-[2px]">×</span>
        </div>
        <div className="mt-2 text-[9px] font-semibold tracking-[0.22em] uppercase text-stone-500">
          Connects
        </div>
      </div>
    </div>
  </div>
);

const GuideSdrMathThumbnail: React.FC = () => (
  <div className="h-44 relative overflow-hidden p-6" style={{ background: '#F9F8F4' }}>
    <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-emerald-200/60 text-emerald-800">
      GUIDE
    </span>

    <div className="relative h-full flex flex-col justify-center items-center text-center">
      {/* eyebrow */}
      <div className="text-[9px] font-semibold tracking-[0.24em] uppercase text-stone-400 mb-2">
        Fully loaded · Per SDR / year
      </div>

      {/* hero stat */}
      <div className="font-serif font-medium leading-none tabular-nums text-[#1a1a1a] text-[48px]">
        $137<span className="text-stone-300">–</span>190<span className="text-[28px] text-stone-400 ml-[2px]">K</span>
      </div>

      {/* gold underline */}
      <div className="mt-3 mb-3 h-[2px] w-14" style={{ background: '#C5A059' }} />

      {/* whispers */}
      <div className="flex items-center gap-4 text-[9px] font-semibold tracking-[0.2em] uppercase text-stone-500 whitespace-nowrap">
        <span>5–9 mtgs/mo</span>
        <span className="w-[3px] h-[3px] rounded-full bg-stone-300" />
        <span>14-mo tenure</span>
        <span className="w-[3px] h-[3px] rounded-full bg-stone-300" />
        <span>3–6 mo ramp</span>
      </div>
    </div>
  </div>
);

const ToolPipelineCalcThumbnail: React.FC = () => (
  <div className="h-44 relative overflow-hidden p-6" style={{ background: '#1a1a1a' }}>
    <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-white/15 text-white">
      TOOL
    </span>

    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    />

    <div className="relative h-full flex flex-col justify-between pt-3">
      <div className="text-[9px] font-semibold tracking-[0.24em] uppercase text-stone-500 text-right">Interactive</div>

      <div className="space-y-[9px] my-2">
        {[
          { l: 'DEAL SIZE',   v: 62, d: '$45K' },
          { l: 'SALES CYCLE', v: 34, d: '4 mo' },
          { l: 'CLOSE RATE',  v: 48, d: '15%'  },
        ].map((r) => (
          <div key={r.l} className="grid grid-cols-[90px_1fr_50px] items-center gap-3">
            <span className="text-[9px] font-semibold tracking-[0.16em] uppercase text-stone-500">{r.l}</span>
            <div className="relative h-[8px] bg-white/[0.08] rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0" style={{ width: `${r.v}%`, background: '#C5A059' }} />
              <div className="absolute top-1/2 -translate-y-1/2 w-[2px] h-[14px] rounded-sm" style={{ left: `calc(${r.v}% - 1px)`, background: '#fff' }} />
            </div>
            <span className="text-[10px] tabular-nums text-stone-300 text-right">{r.d}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <span className="text-[9px] font-semibold tracking-[0.24em] uppercase" style={{ color: '#C5A059' }}>→ Guaranteed</span>
        <div className="flex items-baseline gap-1 tabular-nums">
          <span className="font-serif text-[26px] leading-none font-medium text-white">30</span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-stone-500">demos / mo</span>
        </div>
      </div>
    </div>
  </div>
);

const ReportCaseIndexThumbnail: React.FC = () => (
  <div className="h-44 relative overflow-hidden p-5" style={{ background: '#F9F8F4' }}>
    <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#8a6a28]">
      REPORT
    </span>

    <div className="h-full flex flex-col justify-between pt-6">
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]" style={{ background: 'rgba(26,26,26,0.08)' }}>
        {[
          { src: '/assets/brand_alpega.avif', name: 'Alpega',    sizeClass: 'max-h-10 max-w-[82%]', highlight: true },
          { src: '/assets/mintec.jpg',        name: 'Mintec by Expana', sizeClass: 'max-h-9 max-w-[82%]'  },
          { src: '/assets/volue.svg',         name: 'Volue',     sizeClass: 'max-h-8 max-w-[75%]'  },
          { src: '/assets/descartes.png',     name: 'Descartes', sizeClass: 'max-h-6 max-w-[88%]'  },
          { src: '/assets/trayport.png',      name: 'Trayport',  sizeClass: 'max-h-4 max-w-[80%]'  },
          { src: '/assets/buyco.png',         name: 'BuyCo',     sizeClass: 'max-h-7 max-w-[80%]'  },
        ].map((c) => (
          <div key={c.name} className="relative bg-white flex items-center justify-center h-[52px] px-3">
            <img
              src={c.src}
              alt={c.name}
              className={`${c.sizeClass} object-contain opacity-85`}
              style={{ filter: 'saturate(0.6)' }}
            />
            {c.highlight && (
              <span className="absolute top-1 right-1 w-[5px] h-[5px] rounded-full" style={{ background: '#C5A059' }} />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-baseline justify-between">
        <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-stone-500">7 engagements</span>
        <span className="text-[9px] tracking-[0.18em] uppercase text-stone-400">TMS · SC · Procurement · Energy</span>
      </div>
    </div>
  </div>
);

const ReportAlpegaThumbnail: React.FC = () => (
  <div className="h-44 relative overflow-hidden" style={{ background: '#F9F8F4' }}>
    <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#8a6a28]">
      REPORT
    </span>

    <div
      className="absolute top-0 right-0 w-20 h-20"
      style={{ background: 'linear-gradient(225deg, rgba(197,160,89,0.18) 0%, transparent 70%)' }}
    />

    <div className="relative h-full flex flex-col justify-between p-6">
      <div className="flex items-start justify-between pt-4">
        <img src="/assets/brand_alpega.avif" alt="Alpega" className="h-5 opacity-90" />
        <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-stone-400">Case · 001</span>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="font-serif text-[52px] leading-none font-medium tabular-nums text-[#1a1a1a]">
            80<span style={{ color: '#C5A059' }}>+</span>
          </div>
          <div className="mt-1 text-[9px] font-semibold tracking-[0.22em] uppercase text-stone-500">
            Demos / month
          </div>
        </div>
        <div className="text-right pb-1">
          <div className="text-[9px] tracking-[0.18em] uppercase text-stone-400">TMS / logistics</div>
          <div className="text-[9px] tracking-[0.18em] uppercase text-stone-400">6 languages</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-6 right-6 h-[2px] flex">
        <div className="w-1/3" style={{ background: '#C5A059' }} />
        <div className="flex-1" style={{ background: 'rgba(26,26,26,0.08)' }} />
      </div>
    </div>
  </div>
);

const ReportMintecThumbnail: React.FC = () => (
  <div className="h-44 relative overflow-hidden" style={{ background: '#F9F8F4' }}>
    <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#8a6a28]">
      REPORT
    </span>

    <div
      className="absolute top-0 right-0 w-20 h-20"
      style={{ background: 'linear-gradient(225deg, rgba(107,31,46,0.14) 0%, transparent 70%)' }}
    />

    <div className="relative h-full flex flex-col justify-between p-6">
      <div className="flex items-start justify-between pt-4">
        <img src="/assets/mintec.jpg" alt="Mintec by Expana" className="h-5 opacity-90" style={{ mixBlendMode: 'multiply' }} />
        <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-stone-400">Case · 002</span>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <div className="font-serif text-[52px] leading-none font-medium tabular-nums text-[#1a1a1a]">
            30<span style={{ color: '#6B1F2E' }}>+</span>
          </div>
          <div className="mt-1 text-[9px] font-semibold tracking-[0.22em] uppercase text-stone-500">
            Demos / month
          </div>
        </div>
        <div className="text-right pb-1">
          <div className="text-[9px] tracking-[0.18em] uppercase text-stone-400">Procurement intel</div>
          <div className="text-[9px] tracking-[0.18em] uppercase text-stone-400">CPG / food</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-6 right-6 h-[2px] flex">
        <div className="w-1/3" style={{ background: '#6B1F2E' }} />
        <div className="flex-1" style={{ background: 'rgba(26,26,26,0.08)' }} />
      </div>
    </div>
  </div>
);

const renderThumbnail = (key: ThumbnailKey): React.ReactNode => {
  switch (key) {
    case 'blog-multilingual':  return <BlogMultilingualThumbnail />;
    case 'guide-sdr-math':     return <GuideSdrMathThumbnail />;
    case 'tool-pipeline-calc': return <ToolPipelineCalcThumbnail />;
    case 'report-case-index':  return <ReportCaseIndexThumbnail />;
    case 'report-alpega':      return <ReportAlpegaThumbnail />;
    case 'report-mintec':      return <ReportMintecThumbnail />;
  }
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
            <span className="text-[#C5A059] font-normal">software.</span>
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
            href={FEATURED.href}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="group grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] rounded-2xl overflow-hidden mb-12 hover:shadow-2xl transition-shadow"
          >
            {/* Left — specimen thumbnail */}
            <FeaturedThumbnail />
            {/* Right — content */}
            <div className="p-10 flex flex-col justify-center">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-3">{FEATURED.eyebrow}</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-3">
                {FEATURED.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed mb-3">
                {FEATURED.desc}
              </p>
              <div className="text-[11px] text-stone-500 tracking-wide mb-5">{FEATURED.meta}</div>
              <span className="text-sm font-medium text-[#C5A059] group-hover:underline flex items-center gap-1">
                Read the report <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource, i) => (
              <motion.a
                key={`${resource.title}-${i}`}
                href={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                {/* Specimen thumbnail */}
                {renderThumbnail(resource.thumbnailKey)}

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
            ))}
          </div>

          {/* CTA Strip */}
          <motion.div
            {...fadeUp}
            className="mt-16 bg-[#1a1a1a] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-serif text-xl text-white mb-1">Ready to put this into practice?</h3>
              <p className="text-sm text-stone-400">Book a strategy call and we'll build your outbound plan.</p>
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
