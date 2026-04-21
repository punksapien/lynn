import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Clock, ChevronLeft } from 'lucide-react';

/* ──────────────────────────────────────────────
   Article detail — lean variant.
   Lexend Deca throughout. Sparse. Typographic.
   ──────────────────────────────────────────────*/

const INK = '#1a1a1a';
const CREAM = '#F9F8F4';
const GOLD = '#C5A059';
const BURGUNDY = '#6B1F2E';
const RULE = 'rgba(26,26,26,0.14)';

interface MarketRow {
  market: string;
  lynn: string;
  industry: string;
  uplift: string;
  warn?: boolean;
}

const MARKETS: MarketRow[] = [
  { market: 'United Kingdom',     lynn: '15–22%', industry: '7–11%',   uplift: '2.1×' },
  { market: 'Pan-European mixed', lynn: '8–14%',  industry: '5–8%',    uplift: '1.7×' },
  { market: 'DACH',               lynn: '8–13%',  industry: '5–8%',    uplift: '1.6×' },
  { market: 'Italy',              lynn: '7–11%',  industry: '5–7%',    uplift: '1.6×' },
  { market: 'Portugal',           lynn: '6–10%',  industry: '—',       uplift: '—'    },
  { market: 'France',             lynn: '5–9%',   industry: '5–7%',    uplift: '1.2×' },
  { market: 'Spain',              lynn: '5–8%',   industry: '5–7%',    uplift: '1.1×' },
  { market: 'United States',      lynn: '5–10%',  industry: '4–7%',    uplift: '1.4×' },
  { market: 'Nordics',            lynn: '3–6%',   industry: 'see §04', uplift: '—', warn: true },
];

const MARKET_NOTES = [
  { title: 'United Kingdom',
    body: <>Fifteen to twenty-two percent connect rates. The UK is the single most responsive European market on the phone, and it is not close. Mature direct-dial data, cultural willingness to pick up, and native-English targeting. If you only serve the UK, cold calling is almost certainly your most efficient channel. Most of our UK clients run phone-first with email as a support layer, not the other way around.</> },
  { title: 'DACH',
    body: <>Eight to thirteen percent connect rates. DACH punches above its weight on three conditions: the caller speaks native German, the data is clean, and seniority mapping is right. German C-level almost never engages in English on a cold call. In German, the same person will give you three minutes if the opener lands. This is the most common failure pattern we see when US vendors run their own outbound into Europe — dial in English, get 2 to 3 percent connects, conclude "cold calling doesn't work in Germany." It does. Not in English.</> },
  { title: 'Italy',
    body: <>Seven to eleven percent connect rates. Italian buyers are more open than their reputation suggests, but only in Italian. English-language Italian campaigns we have audited run at half the rate of native-speaker campaigns. Seniority language matters as much as spoken language — a <em>Direttore Operativo</em> is a decision-maker, a <em>Responsabile Logistica</em> is usually further down.</> },
  { title: 'France',
    body: <>Five to nine percent connect rates. French buyers expect French. Call a <em>Directeur de la Supply Chain</em> in English and you'll get a polite <em>non merci</em> or a pass to a junior, and you've burned one of your best-matched leads. Respect seniority conventions too — <em>Directeurs</em> are senior; <em>Responsables</em> mid-level; <em>Chefs</em> line managers.</> },
  { title: 'Spain',
    body: <>Five to eight percent connect rates. Works within a narrow window, 15:30 to 17:30 local time, and in Spanish. Morning calling into Spain is the most common schedule mistake we see.</> },
  { title: 'Portugal',
    body: <>Six to ten percent connect rates. Underserved market — most international SaaS vendors don't staff for Portuguese. If Portugal is a real segment in your ICP, the phone is still viable. It won't be forever.</> },
  { title: 'United States',
    body: <>Five to ten percent connect rates. Structurally lower than European benchmarks now, and declining. Hiya, RoboKiller, and Nomorobo filter unknowns aggressively. Cold calling still works in the US — by volume, and for teams that invest in local-presence dialling and clean data. But connect rate is the wrong benchmark to obsess over. Dials-per-meeting-booked is the right one, and it still holds up.</> },
  { title: 'Pan-European mixed',
    body: <>Eight to fourteen percent. When a single lead list spans multiple countries, we route each contact to a native speaker before the dial. Staffing for language is a lever that works even when the list can't be cleanly segmented by market.</> },
];

const HYBRID = [
  { label: 'Nordics', rec: 'LinkedIn and email primary. Phone as a second-touch channel once a prospect has engaged.' },
  { label: 'Enterprise mobile-only accounts', rec: 'Email plus LinkedIn. Mobile spam filtering is a structural headwind; do not fight it.' },
  { label: 'Heavy-compliance verticals', rec: 'LinkedIn, events, analyst-led content. Cold calls typically do not clear the gatekeeper.' },
  { label: 'Developer / technical-buyer motions', rec: 'Community, product-led signals, and targeted LinkedIn. Cold calling a VP of Engineering gets you nowhere.' },
  { label: 'Everywhere else in Europe', rec: 'Phone-first, with email and LinkedIn as reinforcement.' },
];

const Eyebrow: React.FC<{ children: React.ReactNode; color?: string; className?: string }> = ({ children, color = '#8a8580', className = '' }) => (
  <span
    className={`text-[10px] font-bold tracking-[0.22em] uppercase ${className}`}
    style={{ color }}
  >
    {children}
  </span>
);

const SectionNum: React.FC<{ n: string; kicker: string; title: string; accent?: string }> = ({ n, kicker, title, accent = INK }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="text-[13px] font-medium tabular-nums" style={{ color: accent }}>§{n}</span>
      <span className="h-px w-6" style={{ background: accent }} />
      <Eyebrow color={accent === INK ? '#8a8580' : accent}>{kicker}</Eyebrow>
    </div>
    <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.12] tracking-tight max-w-[30ch]" style={{ color: accent }}>
      {title}
    </h2>
  </motion.div>
);

export const ConnectRatesArticle: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const ids = ['intro', 'benchmarks', 'markets', 'nordics', 'language', 'hybrid', 'bottom'];
    const handler = () => {
      const y = window.scrollY + 200;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) { setActiveSection(ids[i]); return; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: INK }}>
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'rgba(26,26,26,0.06)' }}>
        <motion.div
          className="h-full origin-left"
          style={{ scaleX: progress, background: GOLD }}
        />
      </div>

      {/* Hero / title */}
      <section className="pt-40 pb-10 px-6">
        <div className="container mx-auto max-w-[1100px]">
          <motion.a
            href="/resources"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-500 hover:text-[#C5A059] transition-colors mb-10"
          >
            <ChevronLeft size={14} strokeWidth={1.5} />
            <span>All Resources</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-[5px] rounded-full border text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ borderColor: INK, color: INK }}
            >
              <span className="w-[4px] h-[4px] rounded-full" style={{ background: GOLD }} />
              Report
            </span>
            <Eyebrow>
              <Clock size={10} strokeWidth={2} className="inline -translate-y-[1px] mr-1" />
              9 min read
            </Eyebrow>
            <Eyebrow>19 April 2026</Eyebrow>
            <Eyebrow>Based on 1.1M+ dials</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-[44px] sm:text-[58px] md:text-[72px] leading-[1.02] tracking-tight max-w-[18ch]"
          >
            Cold calling across Europe and the US in 2026.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 max-w-[56ch] text-lg md:text-xl leading-relaxed text-stone-500"
          >
            Market-by-market connect rates, industry benchmarks, and where cold calling stops being the right channel.
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <div className="px-6 pb-24">
        <div className="container mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)] gap-x-10">

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <Eyebrow>Contents</Eyebrow>
              <ol className="mt-4 space-y-[10px]">
                {[
                  { id: 'intro',      n: '01', t: 'The metric that matters' },
                  { id: 'benchmarks', n: '02', t: 'Benchmarks by market' },
                  { id: 'markets',    n: '03', t: 'Notes on each market' },
                  { id: 'nordics',    n: '04', t: 'The Nordics exception' },
                  { id: 'language',   n: '05', t: 'Why language multiplies' },
                  { id: 'hybrid',     n: '06', t: 'Where calling is not enough' },
                  { id: 'bottom',     n: '07', t: 'Bottom line' },
                ].map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="group flex gap-3 items-baseline">
                      <span className={`text-[12px] tabular-nums transition-colors ${activeSection === item.id ? 'text-[#C5A059]' : 'text-stone-400'}`}>
                        {item.n}
                      </span>
                      <span className={`text-[13px] leading-snug transition-colors ${activeSection === item.id ? 'text-[#1a1a1a] font-medium' : 'text-stone-500 group-hover:text-[#1a1a1a]'}`}>
                        {item.t}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Article */}
          <article>

            {/* §01 Intro */}
            <section id="intro" className="scroll-mt-28">
              <SectionNum n="01" kicker="The Metric" title="What connect rate means, and why it's the number to watch" />

              {/* Drop cap intro */}
              <div className="relative">
                <span
                  aria-hidden
                  className="float-left font-serif text-[80px] md:text-[100px] leading-none mr-3 mt-[6px] font-light"
                >
                  M
                </span>
                <p className="text-[17px] leading-[1.75] text-stone-700">
                  ost supply chain software companies we speak to treat outbound as a single workflow. They buy one list, run one script, measure one reply rate, and assume what works in Boston works in Berlin. It does not.
                </p>
              </div>

              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                Across the last eighteen months we have placed more than <span className="tabular-nums font-medium text-[#1a1a1a]">1.1 million</span> cold dials on behalf of logistics, procurement, and supply chain software vendors, in eight markets, in six languages. The connect rates vary by a factor of five.
              </p>

              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                If you are running one playbook across all of Europe, you are either burning dials in markets where the phone is the wrong channel, or leaving material pipeline on the table in markets where it is still the fastest route to a meeting. This piece walks through what connect rates actually look like in each market, why they differ, and where we recommend clients blend channels rather than dial harder.
              </p>

              <div className="mt-8 pl-5 border-l-2" style={{ borderColor: GOLD }}>
                <p className="text-[15px] leading-[1.7] text-stone-700">
                  <strong className="font-semibold text-[#1a1a1a]">Connect rate</strong> is the percentage of dials that reach a live human, any human, at the target company. It sits above conversation rate (getting the right person on the phone) and well above meeting booked. It is the first chokepoint in every outbound motion, and the metric most sensitive to market, language, and dataset quality.
                </p>
              </div>

              <p className="mt-7 text-[17px] leading-[1.75] text-stone-700">
                Industry benchmarks published in the last year by ZoomInfo, Cognism, and Orum put the global B2B connect rate somewhere between three and ten percent, with top performers clearing five. SaaS specifically sits at the low end, with dial-to-meeting conversion under one percent by ZoomInfo's data.
              </p>
              <p className="mt-4 text-[17px] leading-[1.75] text-stone-700">
                The reality on the ground is that those global averages mask enormous regional spread.
              </p>
            </section>

            {/* §02 Table */}
            <section id="benchmarks" className="scroll-mt-28 mt-20">
              <SectionNum n="02" kicker="Benchmarks" title="Connect rates by market" />

              <div
                className="border rounded-[2px] overflow-hidden"
                style={{ borderColor: INK, background: '#FAFAF6' }}
              >
                <div
                  className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-4 px-5 py-3 text-white"
                  style={{ background: INK }}
                >
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold">Market</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right">Lynn</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right">Industry avg.</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right w-16">Uplift</div>
                </div>

                {MARKETS.map((m, i) => (
                  <motion.div
                    key={m.market}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-4 px-5 py-[14px] items-baseline border-t"
                    style={{ borderColor: 'rgba(26,26,26,0.08)' }}
                  >
                    <div className="text-[15px] md:text-[16px]">
                      {m.warn && <span className="mr-2 inline-block align-middle w-[6px] h-[6px] rounded-full" style={{ background: BURGUNDY }} />}
                      {m.market}
                    </div>
                    <div className="text-right text-[16px] tabular-nums font-medium">{m.lynn}</div>
                    <div className="text-right text-[15px] tabular-nums text-stone-500">{m.industry}</div>
                    <div className="text-right w-16">
                      <span className="text-[12px] font-semibold tabular-nums" style={{ color: m.warn ? BURGUNDY : INK }}>
                        {m.uplift}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-3 text-[12px] text-stone-500 leading-relaxed max-w-[70ch]">
                <span className="text-[10px] uppercase font-semibold tracking-[0.22em] text-stone-500 mr-1">Note.</span>
                Lynn ranges reflect dial-weighted averages across campaigns of ≥200 dials. Industry benchmarks compiled from Cognism's 2025 dataset (196,000 prospects), SalesHive's 2025 report, and ZoomInfo's 2026 Cold Calling Statistics.
              </p>
            </section>

            {/* §03 Per-market notes */}
            <section id="markets" className="scroll-mt-28 mt-20">
              <SectionNum n="03" kicker="Field Notes" title="Notes on each market" />

              <div className="space-y-10">
                {MARKET_NOTES.map((m) => (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45 }}
                  >
                    <h3 className="font-serif text-[22px] md:text-[24px] leading-tight tracking-tight mb-3">{m.title}</h3>
                    <div className="text-[16px] leading-[1.72] text-stone-700">{m.body}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* §04 Nordics */}
            <section id="nordics" className="scroll-mt-28 mt-20">
              <SectionNum n="04" kicker="An Exception" title="The Nordics: where the phone is the wrong channel" accent={BURGUNDY} />

              <div className="p-7 md:p-9 border-l-[3px]" style={{ borderColor: BURGUNDY, background: 'rgba(107,31,46,0.035)' }}>
                <Eyebrow color={BURGUNDY}>Recommendation: do not lead with dials</Eyebrow>
                <p className="mt-3 text-[17px] leading-[1.72] text-stone-700">
                  Three to six percent. This is the one market where we actively advise clients not to lead with cold calling. The reasons are structural, not tactical.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="font-serif text-[17px] font-medium mb-2">Network-level call filtering</h4>
                    <p className="text-[15px] leading-[1.7] text-stone-700">
                      Telia — which operates across Sweden, Denmark, Finland, and Norway — runs automated fraud and spam filtering at the carrier level. In a single month (January 2022), Telia blocked <strong className="tabular-nums">4 million</strong> calls in Norway, <strong className="tabular-nums">2.6 million</strong> in Sweden, and <strong className="tabular-nums">2.2 million</strong> in Denmark. Sweden also blocks spoofed inbound international calls at the network layer. A meaningful share of your outbound dials never connect, and you have no visibility into which ones.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-[17px] font-medium mb-2">Regulatory opt-out registers</h4>
                    <p className="text-[15px] leading-[1.7] text-stone-700">
                      Sweden's NIX register and Denmark's asterisk system in the public directory mean a significant slice of consumer and SOHO numbers cannot be legally called without prior consent. B2B is less restricted, but practical compliance narrows the universe further.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-[17px] font-medium mb-2">Cultural skepticism</h4>
                    <p className="text-[15px] leading-[1.7] text-stone-700">
                      Nordic B2B buyers are digitally mature, research-led, and culturally resistant to unsolicited calling. Independent case studies put Nordic cold outreach response rates at roughly a quarter of other European markets.
                    </p>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t" style={{ borderColor: 'rgba(107,31,46,0.2)' }}>
                  <Eyebrow color={BURGUNDY}>Our approach</Eyebrow>
                  <p className="mt-3 text-[15px] leading-[1.7] text-stone-700">
                    For Nordic outbound, we run LinkedIn warm outreach and cold email as the primary channels, with phone as a follow-up layer only once there is some signal of interest. Community-based GTM (industry events, niche conferences, analyst-led content) produces more pipeline per dollar than a dialler there.
                  </p>
                </div>
              </div>
            </section>

            {/* §05 Language */}
            <section id="language" className="scroll-mt-28 mt-20">
              <SectionNum n="05" kicker="The Multiplier" title="Why language is the single biggest lever" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                Across every continental European market, in-language calling roughly doubles connect rates versus the same list dialled in English. We see this consistently enough across clients that it is effectively a law: calling a French VP in French, a German <em>Leiter</em> in German, an Italian <em>Direttore</em> in Italian is not a nice-to-have. It is the difference between a campaign that produces pipeline and one that produces invoices.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                The operational cost of multilingual outbound is real. You need native-fluent SDRs, not translated scripts. You need multilingual job title scraping, not Anglo-only filters on Apollo. You need market-specific calling windows and local-presence dial numbers. Most agencies that claim "pan-European" coverage do not actually staff for this. It is the thing to audit most carefully when you are picking an outbound partner.
              </p>
            </section>

            {/* §06 Hybrid */}
            <section id="hybrid" className="scroll-mt-28 mt-20">
              <SectionNum n="06" kicker="Recommendations" title="Where cold calling is not enough" />

              <p className="text-[17px] leading-[1.75] text-stone-700 mb-8">
                For a CRO or CMO planning outbound across multiple European markets, no single channel delivers end-to-end coverage. We recommend clients think in blends:
              </p>

              <div>
                {HYBRID.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-5 border-t last:border-b"
                    style={{ borderColor: RULE }}
                  >
                    <h4 className="font-serif text-[17px] md:text-[18px] leading-snug">{h.label}</h4>
                    <p className="text-[15px] leading-[1.7] text-stone-700">{h.rec}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* §07 Bottom line */}
            <section id="bottom" className="scroll-mt-28 mt-20">
              <SectionNum n="07" kicker="In Closing" title="Bottom line" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                The phone still works across most of Europe, but only if you staff for language, map seniority correctly, and know when to step off the dialler. Our own data says the gap between a well-run market-specific programme and a generic pan-European sequence is roughly <strong className="tabular-nums font-semibold">3×</strong> on connects, and much larger on meetings booked.
              </p>
            </section>

            {/* CTA */}
            <aside className="mt-16 rounded-[2px] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: INK, color: '#f0ece0' }}>
              <div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-tight max-w-[28ch] text-white">
                  Want the sub-market benchmarks for your ICP?
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-300 max-w-[50ch]">
                  Thirty-minute strategy session. We share the connect rates we see for roles closest to yours, and the channel blends working right now.
                </p>
              </div>
              <a
                href="https://calendly.com/george-lynn-lead-gen/strategy-session-w"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-xl text-[13px] font-medium transition-colors hover:bg-[#d9b76f]"
                style={{ background: GOLD, color: INK }}
              >
                <span>Book a strategy session</span>
                <ArrowUpRight size={14} strokeWidth={2} className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
              </a>
            </aside>

            {/* Sources */}
            <section className="mt-14 pt-8 border-t" style={{ borderColor: RULE }}>
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10">
                <Eyebrow>Sources</Eyebrow>
                <ul className="text-[13px] leading-[1.75] text-stone-600 space-y-1">
                  <li>ZoomInfo — <em>Cold Calling Statistics 2026</em></li>
                  <li>Cognism — <em>B2B Cold Calling Statistics</em> (196,000-prospect dataset, 2025)</li>
                  <li>SalesHive — <em>Cold Calling Benchmarks for B2B Sales Teams in 2025</em></li>
                  <li>Orum — <em>Boost Connect benchmark report</em></li>
                  <li>Commsrisk — <em>Sweden blocks spoofed inbound international calls</em></li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
};

export default ConnectRatesArticle;
