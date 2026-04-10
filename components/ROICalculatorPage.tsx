import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, TrendingUp, Target, PoundSterling, BarChart3 } from 'lucide-react';

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
  n.toLocaleString('en-GB', { maximumFractionDigits: 0 });

const fmtGBP = (n: number): string => `£${fmt(n)}`;

const GUARANTEED_DEMOS = 30;

export const ROICalculatorPage: React.FC = () => {
  const [dealSize, setDealSize] = useState(45000);
  const [salesCycle, setSalesCycle] = useState(4);
  const [closeRate, setCloseRate] = useState(15);
  const [markets, setMarkets] = useState(3);
  const [monthlyInvestment, setMonthlyInvestment] = useState(9000);

  const results = useMemo(() => {
    const pipelineValue = GUARANTEED_DEMOS * dealSize;
    const expectedDeals = (GUARANTEED_DEMOS * closeRate) / 100;
    const projectedRevenue = expectedDeals * dealSize;
    const totalInvestment = monthlyInvestment * 3;
    const roi = ((projectedRevenue - totalInvestment) / totalInvestment) * 100;
    const breakEvenProb = (1 - Math.pow(1 - closeRate / 100, GUARANTEED_DEMOS)) * 100;

    return { pipelineValue, expectedDeals, projectedRevenue, totalInvestment, roi, breakEvenProb };
  }, [dealSize, closeRate, monthlyInvestment]);

  // Build 12-month timeline data
  const timelineData = useMemo(() => {
    const months: { month: number; cumulativeInvestment: number; cumulativeRevenue: number; net: number }[] = [];
    const monthlyRevenue = results.projectedRevenue / (12 - salesCycle); // spread revenue across post-cycle months
    let cumInv = 0;
    let cumRev = 0;

    for (let m = 1; m <= 12; m++) {
      // Investment accumulates for first 3 months (the 90-day engagement)
      if (m <= 3) {
        cumInv += monthlyInvestment;
      }
      // Revenue starts after the sales cycle completes (demos booked in months 1-3 close after salesCycle months)
      if (m > salesCycle) {
        cumRev += monthlyRevenue;
      }
      months.push({
        month: m,
        cumulativeInvestment: cumInv,
        cumulativeRevenue: cumRev,
        net: cumRev - cumInv,
      });
    }
    return months;
  }, [monthlyInvestment, salesCycle, results.projectedRevenue]);

  const maxAbsValue = useMemo(() => {
    let max = 0;
    timelineData.forEach((d) => {
      max = Math.max(max, Math.abs(d.net), d.cumulativeInvestment, d.cumulativeRevenue);
    });
    return max || 1;
  }, [timelineData]);

  const breakEvenMonth = useMemo(() => {
    const found = timelineData.find((d) => d.net >= 0 && d.month > salesCycle);
    return found?.month ?? null;
  }, [timelineData, salesCycle]);

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            ROI Calculator
          </motion.div>
          <motion.h1 {...stagger(0.1)} className="font-serif text-5xl md:text-6xl lg:text-[3.4rem] leading-[1.08] tracking-tight mb-6 max-w-3xl">
            Calculate your return on{' '}
            <span className="text-[#C5A059] font-normal">outbound.</span>
          </motion.h1>
          <motion.p {...stagger(0.2)} className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            We guarantee qualified demos on a timeline agreed before we start. Plug in your numbers to see what that means for your pipeline, revenue, and payback period.
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
                  <span className="font-serif text-lg text-[#1a1a1a]">{fmtGBP(dealSize)}</span>
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
                  <span>£5k</span>
                  <span>£250k</span>
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
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
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

              {/* European Markets */}
              <div>
                <label className="flex items-center justify-between text-sm text-stone-700 mb-2">
                  <span>Target European markets</span>
                  <span className="font-serif text-lg text-[#1a1a1a]">{markets}</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button
                      key={n}
                      onClick={() => setMarkets(n)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        markets === n
                          ? 'bg-[#1a1a1a] text-white'
                          : 'bg-stone-50 text-stone-500 border border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Investment */}
              <div>
                <label className="flex items-center justify-between text-sm text-stone-700 mb-2">
                  <span>Monthly investment</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm">£</span>
                  <input
                    type="text"
                    value={fmt(monthlyInvestment)}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9]/g, '');
                      if (raw) setMonthlyInvestment(Number(raw));
                    }}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-8 pr-4 py-2.5 text-sm text-stone-700 font-serif text-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059]"
                  />
                </div>
                <div className="text-[10px] text-stone-400 mt-1">
                  Total 90-day investment: {fmtGBP(monthlyInvestment * 3)}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <div className="flex items-center gap-2 text-[10px] text-stone-400">
                  <Target className="w-3 h-3" />
                  Based on {GUARANTEED_DEMOS} guaranteed qualified demos across {markets} market{markets !== 1 ? 's' : ''}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <div className="space-y-8">
              {/* Key Metrics */}
              <motion.div {...stagger(0.4)} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <ResultCard
                  label="Pipeline value"
                  value={fmtGBP(results.pipelineValue)}
                  sublabel={`${GUARANTEED_DEMOS} demos x ${fmtGBP(dealSize)} deal size`}
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
                  value={fmtGBP(results.projectedRevenue)}
                  sublabel={`${results.expectedDeals.toFixed(1)} deals x ${fmtGBP(dealSize)}`}
                  icon={<PoundSterling className="w-4 h-4" />}
                  highlight
                />
                <ResultCard
                  label="Return on investment"
                  value={`${fmt(Math.round(results.roi))}%`}
                  sublabel={`On ${fmtGBP(results.totalInvestment)} total investment`}
                  icon={<TrendingUp className="w-4 h-4" />}
                  highlight={results.roi > 0}
                />
              </motion.div>

              {/* Break-even Probability */}
              <motion.div {...stagger(0.5)} className="bg-[#1a1a1a] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
                {/* Percentage ring */}
                <div className="relative w-36 h-36 flex-shrink-0">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#2a2a2a"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#C5A059"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(results.breakEvenProb / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                      initial={{ strokeDasharray: `0 ${2 * Math.PI * 52}` }}
                      animate={{ strokeDasharray: `${(results.breakEvenProb / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-serif text-3xl text-white leading-none">
                      {results.breakEvenProb >= 99.9 ? '99.9' : results.breakEvenProb.toFixed(1)}
                    </span>
                    <span className="text-white/50 text-xs mt-0.5">%</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-2">Break-even probability</div>
                  <p className="text-stone-400 text-sm leading-relaxed max-w-md">
                    The probability that at least one of your {GUARANTEED_DEMOS} demos converts to a closed deal
                    — which at {fmtGBP(dealSize)} per deal would exceed your {fmtGBP(results.totalInvestment)} total investment.
                  </p>
                  {results.breakEvenProb >= 99 && (
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Near-certain payback
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Revenue Timeline Chart */}
              <motion.div {...stagger(0.6)} className="bg-white border border-stone-200 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-1">Revenue Timeline</div>
                    <div className="text-sm text-stone-500">
                      12-month projection with {salesCycle}-month sales cycle delay
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/80" /> Investment
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Revenue
                    </span>
                  </div>
                </div>

                {/* Chart area */}
                <div className="relative">
                  {/* Zero line */}
                  <div className="absolute left-12 right-0 top-1/2 border-t border-dashed border-stone-200 z-10" />

                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-[10px] text-stone-400 py-1">
                    <span>{fmtGBP(maxAbsValue)}</span>
                    <span>£0</span>
                    <span>-{fmtGBP(maxAbsValue)}</span>
                  </div>

                  {/* Bars */}
                  <div className="ml-12 flex items-center gap-1" style={{ height: 240 }}>
                    {timelineData.map((d) => {
                      const netPct = (d.net / maxAbsValue) * 50;
                      const isPositive = d.net >= 0;
                      const barHeight = Math.max(Math.abs(netPct), 1);

                      return (
                        <div key={d.month} className="flex-1 relative h-full flex flex-col items-center group">
                          {/* Tooltip */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-[10px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <div className="font-medium">Month {d.month}</div>
                            <div className="text-stone-400">Net: {fmtGBP(d.net)}</div>
                          </div>

                          {/* Top half (positive) */}
                          <div className="flex-1 w-full flex items-end justify-center">
                            {isPositive && (
                              <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${barHeight}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: d.month * 0.05 }}
                                className="w-[70%] rounded-t-sm bg-emerald-500"
                                style={{ maxHeight: '100%' }}
                              />
                            )}
                          </div>

                          {/* Bottom half (negative) */}
                          <div className="flex-1 w-full flex items-start justify-center">
                            {!isPositive && (
                              <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${barHeight}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: d.month * 0.05 }}
                                className="w-[70%] rounded-b-sm bg-amber-500/80"
                                style={{ maxHeight: '100%' }}
                              />
                            )}
                          </div>

                          {/* Break-even marker */}
                          {breakEvenMonth === d.month && (
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                              <div className="w-5 h-5 rounded-full border-2 border-[#C5A059] bg-[#F9F8F4] flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#C5A059] rounded-full" />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* X-axis labels */}
                  <div className="ml-12 flex gap-1 mt-2">
                    {timelineData.map((d) => (
                      <div
                        key={d.month}
                        className={`flex-1 text-center text-[10px] ${
                          breakEvenMonth === d.month ? 'text-[#C5A059] font-bold' : 'text-stone-400'
                        }`}
                      >
                        {d.month}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart annotations */}
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 border-t-2 border-dashed border-stone-300" />
                    Break-even line
                  </div>
                  {breakEvenMonth && (
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full border-2 border-[#C5A059] flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#C5A059] rounded-full" />
                      </div>
                      Break-even at month {breakEvenMonth}
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-stone-400">
                    Demos booked months 1-3 &middot; Revenue starts month {salesCycle + 1}
                  </div>
                </div>
              </motion.div>

              {/* Multi-market note */}
              {markets > 1 && (
                <motion.div {...stagger(0.7)} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-stone-700 mb-1">
                      Targeting {markets} European markets
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Lynn deploys native-speaking callers in each market. More markets means broader pipeline
                      coverage, faster saturation, and reduced single-market risk. Your {GUARANTEED_DEMOS} guaranteed
                      demos are spread across all {markets} markets.
                    </p>
                  </div>
                </motion.div>
              )}
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
              Book a 30-minute call. We'll review your ICP, target markets, and show you exactly
              how we'd deliver {GUARANTEED_DEMOS} qualified demos in 90 days.
            </p>
            <a
              href="#book"
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
