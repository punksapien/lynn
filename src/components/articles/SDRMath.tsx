import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Clock, ChevronLeft } from 'lucide-react';
import { INK, CREAM, GOLD, BURGUNDY, RULE, Eyebrow, SectionNum } from './shared';

interface CostRow {
  line: string;
  amount: string;
  note: string;
}

const COST_ROWS: CostRow[] = [
  { line: 'Base salary',                    amount: '$70–85K',  note: 'Mid-market EU/US SDR, 1–2 yrs experience' },
  { line: 'OTE commission',                 amount: '$15–25K',  note: 'Typical 70/30 or 80/20 split' },
  { line: 'Payroll tax + benefits (~25%)',  amount: '$21–27K',  note: 'Varies by country, EU higher than US' },
  { line: 'Tooling per seat',               amount: '$8–14K',   note: 'Apollo, Outreach/Salesloft, Gong, LinkedIn Sales Nav, dialer' },
  { line: 'Data + enrichment',              amount: '$3–6K',    note: 'ZoomInfo / Cognism / LeadIQ seat allocation' },
  { line: 'Management overhead',            amount: '$12–18K',  note: 'Pro-rata share of SDR manager, ops, training' },
  { line: 'Recruiting + ramp',              amount: '$8–15K',   note: 'Agency fees amortised + 3–6 month unproductive ramp' },
];

const MEETING_MATH = [
  { stage: 'Calls placed per SDR per day',      value: '40–60',       note: 'Mature programme, clean data' },
  { stage: 'Effective selling days per year',   value: '~200',        note: 'After holidays, training, sick, admin' },
  { stage: 'Annual dials per SDR',              value: '8–12K',       note: 'If they hold the line at all' },
  { stage: 'Connect rate (English, pan-EU)',    value: '4–7%',        note: 'Without native-language staffing' },
  { stage: 'Connect-to-meeting rate',           value: '8–12%',       note: 'Top performers; drops fast for generalists' },
  { stage: 'Qualified meetings per year',       value: '60–110',      note: 'Ramped, not first-year' },
  { stage: 'Per month after ramp',              value: '5–9',         note: 'Per SDR, once productive' },
];

export const SDRMathArticle: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const ids = ['intro', 'cost', 'output', 'ramp', 'turnover', 'alternative', 'bottom'];
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'rgba(26,26,26,0.06)' }}>
        <motion.div className="h-full origin-left" style={{ scaleX: progress, background: GOLD }} />
      </div>

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
              Guide
            </span>
            <Eyebrow>
              <Clock size={10} strokeWidth={2} className="inline -translate-y-[1px] mr-1" />
              6 min read
            </Eyebrow>
            <Eyebrow>20 April 2026</Eyebrow>
            <Eyebrow>In-house economics</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-[44px] sm:text-[58px] md:text-[72px] leading-[1.02] tracking-tight max-w-[18ch]"
          >
            The in-house SDR math for supply chain software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 max-w-[56ch] text-lg md:text-xl leading-relaxed text-stone-500"
          >
            What it actually costs to hire, tool, and retain an SDR — and how many meetings that buys you in year one.
          </motion.p>
        </div>
      </section>

      <div className="px-6 pb-24">
        <div className="container mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[180px_minmax(0,1fr)] gap-x-10">

          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <Eyebrow>Contents</Eyebrow>
              <ol className="mt-4 space-y-[10px]">
                {[
                  { id: 'intro',       n: '01', t: 'The number most founders miscalculate' },
                  { id: 'cost',        n: '02', t: 'Fully-loaded cost, line by line' },
                  { id: 'output',      n: '03', t: 'What that buys you in meetings' },
                  { id: 'ramp',        n: '04', t: 'The ramp nobody budgets for' },
                  { id: 'turnover',    n: '05', t: 'Tenure, turnover, and the replacement cycle' },
                  { id: 'alternative', n: '06', t: 'When in-house is the right call' },
                  { id: 'bottom',      n: '07', t: 'Bottom line' },
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

          <article>

            <section id="intro" className="scroll-mt-28">
              <SectionNum n="01" kicker="The Math" title="What founders quote vs what it actually costs" />

              <div className="relative">
                <span aria-hidden className="float-left font-serif text-[80px] md:text-[100px] leading-none mr-3 mt-[6px] font-light">
                  W
                </span>
                <p className="text-[17px] leading-[1.75] text-stone-700">
                  hen a supply chain software founder decides to build outbound in-house, the number they usually quote is an SDR base salary — somewhere between seventy and ninety thousand dollars depending on market. That number is not wrong. It is just about forty percent of the real one.
                </p>
              </div>

              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                A fully-loaded SDR in a supply chain or logistics software business, including tooling, management pro-rata, and the replacement cycle, runs between <span className="tabular-nums font-medium text-[#1a1a1a]">$135K</span> and <span className="tabular-nums font-medium text-[#1a1a1a]">$190K</span> per year. One SDR cannot realistically cover Europe alone — you need at least two for timezone and language coverage, and a third once you care about any US calling. So the real annual number you are underwriting is closer to <span className="tabular-nums font-medium text-[#1a1a1a]">$400–570K</span>, not $200K.
                </p>

              <div className="mt-8 pl-5 border-l-2" style={{ borderColor: GOLD }}>
                <p className="text-[15px] leading-[1.7] text-stone-700">
                  What the money buys you, ramped, after a 3–6 month dead zone, is somewhere between <strong className="tabular-nums text-[#1a1a1a]">5 and 9 qualified meetings per SDR per month</strong>. That is the right benchmark to plan against. Anything above it is a top-decile operator; anything below it means a staffing or targeting problem you have not diagnosed yet.
                </p>
              </div>
            </section>

            <section id="cost" className="scroll-mt-28 mt-20">
              <SectionNum n="02" kicker="The Cost" title="Line-by-line, per SDR, per year" />

              <div className="border rounded-[2px] overflow-hidden" style={{ borderColor: INK, background: '#FAFAF6' }}>
                <div className="grid grid-cols-[1.5fr_auto_2fr] gap-4 px-5 py-3 text-white" style={{ background: INK }}>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold">Line item</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right w-28">Annual</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold">Notes</div>
                </div>
                {COST_ROWS.map((r, i) => (
                  <motion.div
                    key={r.line}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="grid grid-cols-[1.5fr_auto_2fr] gap-4 px-5 py-[14px] items-baseline border-t"
                    style={{ borderColor: 'rgba(26,26,26,0.08)' }}
                  >
                    <div className="text-[15px] md:text-[16px]">{r.line}</div>
                    <div className="text-right text-[16px] tabular-nums font-medium w-28">{r.amount}</div>
                    <div className="text-[13px] leading-snug text-stone-500">{r.note}</div>
                  </motion.div>
                ))}
                <div className="grid grid-cols-[1.5fr_auto_2fr] gap-4 px-5 py-[16px] items-baseline border-t-2" style={{ borderColor: INK, background: 'rgba(197,160,89,0.05)' }}>
                  <div className="text-[15px] md:text-[16px] font-semibold">Fully-loaded, per SDR</div>
                  <div className="text-right text-[18px] tabular-nums font-semibold w-28">$137–190K</div>
                  <div className="text-[13px] leading-snug text-stone-500">Before you spin up a second.</div>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-stone-500 leading-relaxed max-w-[70ch]">
                <span className="text-[10px] uppercase font-semibold tracking-[0.22em] text-stone-500 mr-1">Sources.</span>
                Bridge Group <em>SaaS AE &amp; SDR Metrics Report 2024</em>; RepVue SDR compensation benchmarks; public CRO/RevOps surveys from Gong and Pavilion. Ranges reflect EU and US blended; EU payroll adds the top of the range on tax.
              </p>
            </section>

            <section id="output" className="scroll-mt-28 mt-20">
              <SectionNum n="03" kicker="The Output" title="What fully-loaded SDR spend actually produces" />

              <p className="text-[17px] leading-[1.75] text-stone-700 mb-8">
                Here is the meeting math, working top-down from activity. These are ramped numbers — not first-month output, not cold-start output. What a productive SDR looks like, steady-state, dialling pan-European supply chain software in English.
              </p>

              <div className="border rounded-[2px] overflow-hidden" style={{ borderColor: INK, background: '#FAFAF6' }}>
                {MEETING_MATH.map((r, i) => (
                  <motion.div
                    key={r.stage}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className={`grid grid-cols-[1.7fr_auto_1.6fr] gap-4 px-5 py-[14px] items-baseline ${i > 0 ? 'border-t' : ''}`}
                    style={{ borderColor: 'rgba(26,26,26,0.08)' }}
                  >
                    <div className="text-[15px] md:text-[16px]">{r.stage}</div>
                    <div className="text-right text-[16px] tabular-nums font-medium w-24">{r.value}</div>
                    <div className="text-[13px] leading-snug text-stone-500">{r.note}</div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-8 text-[17px] leading-[1.75] text-stone-700">
                Two SDRs producing 5–9 meetings each, eleven months of productive output, is between <strong className="tabular-nums text-[#1a1a1a]">110 and 200</strong> qualified meetings per year. At a $45K deal size and 15% close rate, that is $740K to $1.35M in booked ARR from a $300–400K SDR spend. The economics work. The variance does not — the ceiling is 2.5× the floor, depending on execution.
              </p>
            </section>

            <section id="ramp" className="scroll-mt-28 mt-20">
              <SectionNum n="04" kicker="The Dead Zone" title="The ramp nobody plans for honestly" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                Ramp time for a supply chain software SDR is three to six months, not the thirty days the job description implies. It is that long because supply chain software has a specific learning curve: the difference between a TMS and an OMS, what a <em>Direttore Operativo</em> actually owns versus a <em>Responsabile Logistica</em>, why Gartner's Magic Quadrant position changes how you open a call with Oracle incumbents. An SDR who can sell observability tools cannot sell S&amp;OP software by month two.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                The practical cost of that ramp is roughly thirty percent of year-one output. An SDR hired in January produces at five percent of steady-state in February, twenty percent in March, sixty percent by May, and holds the line from June onward — if they stay. Meaning the first person you hire costs you a full SDR salary for four meetings, not sixty.
              </p>

              <div className="mt-8 p-6 md:p-8 border-l-[3px]" style={{ borderColor: BURGUNDY, background: 'rgba(107,31,46,0.035)' }}>
                <Eyebrow color={BURGUNDY}>Common mistake</Eyebrow>
                <p className="mt-3 text-[15px] leading-[1.7] text-stone-700">
                  Hiring one SDR "to test outbound" and judging the channel on their first-quarter output. That quarter is structurally broken — you're measuring ramp, not the channel. The channel decision needs at least nine months of steady-state output to be honest, which means you cannot make it with one SDR.
                </p>
              </div>
            </section>

            <section id="turnover" className="scroll-mt-28 mt-20">
              <SectionNum n="05" kicker="The Attrition" title="SDR tenure is 14 months, and you pay for that" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                The other cost most in-house models underplay is the replacement cycle. The Bridge Group's longitudinal data puts median SDR tenure at around fourteen months — six ramping, eight productive, then promoted or gone. Which means if you are running a two-SDR team, you are recruiting and onboarding someone at least once every nine months on rolling average.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                Every replacement cycle costs you another ramp period and another round of recruiting spend. In steady state, one of your two seats is producing sub-ramp output about one-quarter of the year. Budget for it. It is not a failure of management; it is the structural nature of the role.
              </p>
            </section>

            <section id="alternative" className="scroll-mt-28 mt-20">
              <SectionNum n="06" kicker="The Call" title="When in-house is the right answer" />

              <p className="text-[17px] leading-[1.75] text-stone-700 mb-6">
                None of this is an argument against in-house. It is an argument against underwriting in-house without counting the real cost. In-house is the right call when:
              </p>

              <div>
                {[
                  { label: 'You have a single-market ICP.', rec: 'One SDR, one language, one product line is easier to manage internally than to outsource.' },
                  { label: 'Your sales cycle depends on deep product conversation.', rec: 'If the opening call needs technical depth the caller cannot fake, train internally. Agencies will never get there.' },
                  { label: 'You can commit to 12+ months runway.', rec: 'The ramp math does not work on a six-month test. Half that runway and the answer is always "it did not work."' },
                  { label: 'You have a senior operator to manage them.', rec: 'An unmanaged SDR is worse than no SDR. If you do not have a VP Sales or head of outbound in-house, you are not ready.' },
                ].map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-2 md:gap-8 py-5 border-t last:border-b"
                    style={{ borderColor: RULE }}
                  >
                    <h4 className="font-serif text-[17px] md:text-[18px] leading-snug">{h.label}</h4>
                    <p className="text-[15px] leading-[1.7] text-stone-700">{h.rec}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="bottom" className="scroll-mt-28 mt-20">
              <SectionNum n="07" kicker="In Closing" title="Bottom line" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                The honest comparison is not "an SDR costs $90K" versus "an agency costs $8K a month." It is "$400–570K of fully-loaded spend producing 110–200 meetings, with a 3–6 month dead zone and a 14-month tenure cycle" versus whatever an agency actually delivers on a guaranteed basis. Both models have a place. Neither is cheap. Neither is free of risk. The one thing no supply chain software business can afford is to underwrite the cheap version of the in-house number and get caught out on month nine.
              </p>
            </section>

            <aside className="mt-16 rounded-[2px] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: INK, color: '#f0ece0' }}>
              <div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-tight max-w-[28ch] text-white">
                  Run the numbers for your own pipeline
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-300 max-w-[50ch]">
                  Our pipeline calculator takes your deal size and close rate and shows what a guaranteed-demo engagement produces against your in-house baseline.
                </p>
              </div>
              <a
                href="/roi-calculator"
                className="group inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-xl text-[13px] font-medium transition-colors hover:bg-[#d9b76f]"
                style={{ background: GOLD, color: INK }}
              >
                <span>Open the pipeline calculator</span>
                <ArrowUpRight size={14} strokeWidth={2} className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform" />
              </a>
            </aside>

            <section className="mt-14 pt-8 border-t" style={{ borderColor: RULE }}>
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10">
                <Eyebrow>Sources</Eyebrow>
                <ul className="text-[13px] leading-[1.75] text-stone-600 space-y-1">
                  <li>Bridge Group — <em>SaaS AE &amp; SDR Metrics Report 2024</em></li>
                  <li>RepVue — <em>SDR compensation benchmarks, mid-market SaaS</em></li>
                  <li>Gong — <em>State of Sales Development 2024</em></li>
                  <li>Pavilion — <em>CRO Benchmarks Survey, outbound team economics</em></li>
                </ul>
              </div>
            </section>

            <section className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10">
                <Eyebrow>Related</Eyebrow>
                <ul className="text-[13px] leading-[1.75] text-stone-600 space-y-1">
                  <li><a href="/resources/cold-calling-connect-rates-by-market" className="hover:text-[#1a1a1a] underline-offset-2 hover:underline">Cold calling across Europe and the US in 2026 →</a></li>
                  <li><a href="/resources/multilingual-calling-doubles-connect-rates" className="hover:text-[#1a1a1a] underline-offset-2 hover:underline">Why calling a French VP in French doubles your connects →</a></li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
};

export default SDRMathArticle;
