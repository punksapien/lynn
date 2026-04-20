import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Target, DollarSign, BarChart3 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const stagger = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

const fmt = (n: number): string =>
  n.toLocaleString('en-US', { maximumFractionDigits: 0 });

const fmtUSD = (n: number): string => `$${fmt(n)}`;

const GUARANTEED_DEMOS = 30;

export const ROICalculatorPage: React.FC = () => {
  const [dealSize, setDealSize] = useState(45000);
  const [salesCycle, setSalesCycle] = useState(4);
  const [closeRate, setCloseRate] = useState(15);

  const results = useMemo(() => {
    const pipelineValue = GUARANTEED_DEMOS * dealSize;
    const expectedDeals = (GUARANTEED_DEMOS * closeRate) / 100;
    const projectedRevenue = expectedDeals * dealSize;
    return { pipelineValue, expectedDeals, projectedRevenue };
  }, [dealSize, closeRate]);

  // Revenue ramp: cumulative revenue by month — positive only, no investment subtraction
  const rampData = useMemo(() => {
    const months: { month: number; revenue: number }[] = [];
    const spread = Math.max(1, 12 - salesCycle);
    const monthlyRevenue = results.projectedRevenue / spread;
    let cum = 0;
    for (let m = 1; m <= 12; m++) {
      if (m > salesCycle) cum += monthlyRevenue;
      months.push({ month: m, revenue: cum });
    }
    return months;
  }, [salesCycle, results.projectedRevenue]);

  const maxRevenue = useMemo(() => {
    const max = rampData.reduce((acc, d) => Math.max(acc, d.revenue), 0);
    return max || 1;
  }, [rampData]);

  const firstRevenueMonth = salesCycle + 1;

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            Pipeline Calculator
          </motion.div>
          <motion.h1 {...stagger(0.1)} className="font-serif text-5xl md:text-6xl lg:text-[3.4rem] leading-[1.08] tracking-tight mb-6 max-w-3xl">
            Calculate your{' '}
            <span className="text-[#C5A059] font-normal">pipeline.</span>
          </motion.h1>
          <motion.p {...stagger(0.2)} className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            We guarantee qualified demos on a timeline agreed before we start. Plug in your numbers to see the pipeline and revenue we'd deliver in 90 days.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10">
            {/* Inputs — sticky on desktop */}
            <motion.div
              {...stagger(0.3)}
              className="lg:sticky lg:top-32 lg:self-start bg-white border border-stone-200 rounded-2xl p-8 space-y-7"
            >
              <div className="text-xs font-bold tracking-[0.15em] text-stone-400 uppercase mb-2">Your Numbers</div>

              {/* Deal Size */}
              <div>
                <label className="flex items-center justify-between text-sm text-stone-700 mb-2">
                  <span>Average deal size</span>
                  <span className="font-serif text-lg text-[#1a1a1a]">{fmtUSD(dealSize)}</span>
                </label>
                <input
                  type="range"
                  min={5000}
                  max={250000}
                  step={1000}
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="w-full accent-[#C5A059] h-1.5 bg-stone-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>$5k</span>
                  <span>$250k</span>
                </div>
              </div>

              {/* Sales Cycle */}
              <div>
                <label className="flex items-center justify-between text-sm text-stone-700 mb-2">
                  <span>Sales cycle length</span>
                  <span className="font-serif text-lg text-[#1a1a1a]">{salesCycle} month{salesCycle !== 1 ? 's' : ''}</span>
                </label>
                <select
                  value={salesCycle}
                  onChange={(e) => setSalesCycle(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059]"
                >
                  {Array.from({ length: 11 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>
                      {m} month{m !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Close Rate */}
              <div>
                <label className="flex items-center justify-between text-sm text-stone-700 mb-2">
                  <span>Close rate</span>
                  <span className="font-serif text-lg text-[#1a1a1a]">{closeRate}%</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full accent-[#C5A059] h-1.5 bg-stone-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2 text-[10px] text-stone-400">
                  <Target className="w-3 h-3" />
                  Based on up to {GUARANTEED_DEMOS} guaranteed qualified demos in 90 days
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-8">
              {/* Key Metrics */}
              <motion.div {...stagger(0.4)} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <ResultCard
                  label="Pipeline value"
                  value={fmtUSD(results.pipelineValue)}
                  sublabel={`Up to ${GUARANTEED_DEMOS} demos x ${fmtUSD(dealSize)} deal size`}
                  icon={<BarChart3 className="w-4 h-4" />}
                />
                <ResultCard
                  label="Expected closed deals"
                  value={results.expectedDeals.toFixed(1)}
                  sublabel={`${closeRate}% close rate on ${GUARANTEED_DEMOS} demos`}
                  icon={<Target className="w-4 h-4" />}
                />
                <ResultCard
                  label="Projected revenue"
                  value={fmtUSD(results.projectedRevenue)}
                  sublabel={`${results.expectedDeals.toFixed(1)} deals x ${fmtUSD(dealSize)}`}
                  icon={<DollarSign className="w-4 h-4" />}
                  highlight
                />
              </motion.div>

              {/* Funnel Breakdown */}
              <motion.div {...stagger(0.5)} className="bg-white border border-stone-200 rounded-2xl p-8">
                <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                  Pipeline funnel
                </div>
                <div className="space-y-4">
                  <FunnelRow
                    label="Qualified demos booked"
                    value={`Up to ${GUARANTEED_DEMOS}`}
                    sublabel="Within the 90-day engagement"
                    widthPct={100}
                  />
                  <FunnelRow
                    label="Qualified meetings held"
                    value={GUARANTEED_DEMOS.toString()}
                    sublabel="Your team takes the calls"
                    widthPct={85}
                  />
                  <FunnelRow
                    label="Expected closed deals"
                    value={results.expectedDeals.toFixed(1)}
                    sublabel={`${closeRate}% close rate`}
                    widthPct={Math.max(15, closeRate * 2)}
                  />
                  <FunnelRow
                    label="Projected revenue"
                    value={fmtUSD(results.projectedRevenue)}
                    sublabel={`${fmtUSD(dealSize)} average deal`}
                    widthPct={Math.max(15, closeRate * 2)}
                    highlight
                  />
                </div>
              </motion.div>

              {/* Revenue Ramp Chart */}
              <motion.div {...stagger(0.6)} className="bg-white border border-stone-200 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-1">Revenue ramp</div>
                    <div className="text-sm text-stone-500">
                      Cumulative revenue over 12 months &middot; first deals close month {firstRevenueMonth}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#C5A059]" /> Revenue
                  </div>
                </div>

                {/* Chart area */}
                <div className="relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-14 flex flex-col justify-between text-[10px] text-stone-400 py-1">
                    <span>{fmtUSD(maxRevenue)}</span>
                    <span>{fmtUSD(maxRevenue * 0.5)}</span>
                    <span>$0</span>
                  </div>

                  {/* Gridlines */}
                  <div className="ml-14 relative" style={{ height: 240 }}>
                    <div className="absolute left-0 right-0 top-0 border-t border-dashed border-stone-200" />
                    <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-stone-200" />
                    <div className="absolute left-0 right-0 bottom-0 border-t border-stone-200" />

                    {/* Sales-cycle shaded region */}
                    <div
                      className="absolute top-0 bottom-0 left-0 bg-stone-100/60 border-r border-dashed border-stone-300 rounded-l-sm flex items-center justify-center pointer-events-none"
                      style={{ width: `${(salesCycle / 12) * 100}%` }}
                    >
                      <div className="text-[10px] font-medium tracking-wide text-stone-400 uppercase text-center px-2 leading-tight">
                        Demos booking<br/>+ sales cycle
                      </div>
                    </div>

                    {/* Bars */}
                    <div className="absolute inset-0 flex items-end gap-1 px-0">
                      {rampData.map((d) => {
                        const heightPct = (d.revenue / maxRevenue) * 100;
                        const isFirstRevenue = d.month === firstRevenueMonth;
                        return (
                          <div key={d.month} className="flex-1 h-full relative group flex items-end">
                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-[10px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                              <div className="font-medium">Month {d.month}</div>
                              <div className="text-stone-400">Cumulative: {fmtUSD(d.revenue)}</div>
                            </div>
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${heightPct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: d.month * 0.04 }}
                              className={`w-[70%] mx-auto rounded-t-sm ${isFirstRevenue ? 'bg-[#C5A059]' : 'bg-[#C5A059]/80 group-hover:bg-[#C5A059]'} transition-colors`}
                              style={{ minHeight: d.revenue > 0 ? 2 : 0 }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* X-axis labels */}
                  <div className="ml-14 flex gap-1 mt-2">
                    {rampData.map((d) => (
                      <div
                        key={d.month}
                        className={`flex-1 text-center text-[10px] ${
                          d.month === firstRevenueMonth ? 'text-[#C5A059] font-bold' : 'text-stone-400'
                        }`}
                      >
                        {d.month}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart annotations */}
                <div className="mt-6 flex flex-wrap gap-5 text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#C5A059] rounded-full" />
                    First deals close month {firstRevenueMonth}
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    Demos booked months 1-3 &middot; Revenue realizes over months {firstRevenueMonth}-12
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a1a1a] rounded-2xl p-12 md:p-16 text-center"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-6">
              Next step
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4 max-w-xl mx-auto">
              Ready to see these numbers in{' '}
              <span className="text-[#C5A059] font-normal">your pipeline?</span>
            </h2>
            <p className="text-stone-400 text-base mb-8 max-w-md mx-auto leading-relaxed">
              Book a 30-minute call. We'll review your ICP and show you exactly
              how we'd deliver up to {GUARANTEED_DEMOS} qualified demos in 90 days.
            </p>
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A059] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#b08d47] transition-colors duration-200"
            >
              Book a call
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

/* ─── Sub-components ──────────────────────────────────────────────── */

interface ResultCardProps {
  label: string;
  value: string;
  sublabel: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value, sublabel, icon, highlight }) => (
  <div
    className={`rounded-2xl p-6 border ${
      highlight
        ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white'
        : 'bg-white border-stone-200'
    }`}
  >
    <div className={`flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase mb-3 ${
      highlight ? 'text-stone-500' : 'text-stone-400'
    }`}>
      {icon}
      {label}
    </div>
    <div className={`font-serif text-3xl md:text-4xl tracking-tight leading-none mb-2 ${
      highlight ? 'text-[#C5A059]' : 'text-[#1a1a1a]'
    }`}>
      {value}
    </div>
    <div className={`text-xs ${highlight ? 'text-stone-500' : 'text-stone-400'}`}>
      {sublabel}
    </div>
  </div>
);

interface FunnelRowProps {
  label: string;
  value: string;
  sublabel: string;
  widthPct: number;
  highlight?: boolean;
}

const FunnelRow: React.FC<FunnelRowProps> = ({ label, value, sublabel, widthPct, highlight }) => (
  <div>
    <div className="flex items-baseline justify-between mb-1.5">
      <div className="text-sm font-medium text-stone-700">{label}</div>
      <div className={`font-serif text-xl ${highlight ? 'text-[#C5A059]' : 'text-[#1a1a1a]'}`}>{value}</div>
    </div>
    <div className="relative h-2 bg-stone-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${widthPct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`h-full rounded-full ${highlight ? 'bg-[#C5A059]' : 'bg-stone-800'}`}
      />
    </div>
    <div className="text-[10px] text-stone-400 mt-1">{sublabel}</div>
  </div>
);
