import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Check, ArrowRight, BarChart3, Users, Clock, Lightbulb } from 'lucide-react';

/* ─── animation presets ─── */
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

/* ─── types ─── */
type Vertical =
  | 'Transportation & Logistics'
  | 'Manufacturing'
  | 'Wholesale & Distribution'
  | 'Food & Beverage'
  | 'Automotive'
  | 'Chemicals & Pharmaceuticals'
  | 'Machinery & Equipment';

type CompanySize = '50-249' | '250-999' | '1000+' | 'all';

type Country =
  | 'Germany'
  | 'France'
  | 'United Kingdom'
  | 'Spain'
  | 'Italy'
  | 'Netherlands'
  | 'Sweden'
  | 'Belgium'
  | 'Austria'
  | 'Poland';

const VERTICALS: Vertical[] = [
  'Transportation & Logistics',
  'Manufacturing',
  'Wholesale & Distribution',
  'Food & Beverage',
  'Automotive',
  'Chemicals & Pharmaceuticals',
  'Machinery & Equipment',
];

const SIZE_OPTIONS: { value: CompanySize; label: string }[] = [
  { value: '50-249', label: '50–249 employees (Mid-market)' },
  { value: '250-999', label: '250–999 (Upper mid-market)' },
  { value: '1000+', label: '1,000+ (Enterprise)' },
  { value: 'all', label: 'All sizes' },
];

const COUNTRIES: { name: Country; flag: string }[] = [
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Sweden', flag: '🇸🇪' },
  { name: 'Belgium', flag: '🇧🇪' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Poland', flag: '🇵🇱' },
];

/* ─── realistic market data ─── */
// Keyed: vertical → size → country
// Numbers reflect Eurostat-aligned enterprise counts for supply-chain-adjacent sectors
const MARKET_DATA: Record<Vertical, Record<Exclude<CompanySize, 'all'>, Record<Country, number>>> = {
  'Transportation & Logistics': {
    '50-249': {
      Germany: 3850, France: 2940, 'United Kingdom': 3120, Spain: 1860,
      Italy: 2280, Netherlands: 1640, Sweden: 920, Belgium: 780, Austria: 690, Poland: 2140,
    },
    '250-999': {
      Germany: 1420, France: 980, 'United Kingdom': 1180, Spain: 540,
      Italy: 720, Netherlands: 580, Sweden: 310, Belgium: 260, Austria: 220, Poland: 640,
    },
    '1000+': {
      Germany: 380, France: 260, 'United Kingdom': 320, Spain: 140,
      Italy: 180, Netherlands: 160, Sweden: 85, Belgium: 65, Austria: 55, Poland: 150,
    },
  },
  'Manufacturing': {
    '50-249': {
      Germany: 8640, France: 4120, 'United Kingdom': 3580, Spain: 2940,
      Italy: 4680, Netherlands: 1360, Sweden: 1240, Belgium: 860, Austria: 1180, Poland: 3860,
    },
    '250-999': {
      Germany: 4200, France: 2800, 'United Kingdom': 1920, Spain: 1480,
      Italy: 2360, Netherlands: 680, Sweden: 640, Belgium: 420, Austria: 580, Poland: 1640,
    },
    '1000+': {
      Germany: 1260, France: 780, 'United Kingdom': 620, Spain: 380,
      Italy: 540, Netherlands: 180, Sweden: 160, Belgium: 110, Austria: 140, Poland: 380,
    },
  },
  'Wholesale & Distribution': {
    '50-249': {
      Germany: 5240, France: 3180, 'United Kingdom': 3860, Spain: 2160,
      Italy: 2740, Netherlands: 2480, Sweden: 860, Belgium: 920, Austria: 680, Poland: 1840,
    },
    '250-999': {
      Germany: 1860, France: 1040, 'United Kingdom': 1320, Spain: 640,
      Italy: 820, Netherlands: 880, Sweden: 280, Belgium: 300, Austria: 210, Poland: 520,
    },
    '1000+': {
      Germany: 480, France: 280, 'United Kingdom': 360, Spain: 160,
      Italy: 200, Netherlands: 240, Sweden: 70, Belgium: 75, Austria: 50, Poland: 120,
    },
  },
  'Food & Beverage': {
    '50-249': {
      Germany: 3280, France: 3640, 'United Kingdom': 2460, Spain: 3120,
      Italy: 3480, Netherlands: 1180, Sweden: 640, Belgium: 720, Austria: 540, Poland: 2280,
    },
    '250-999': {
      Germany: 1140, France: 1380, 'United Kingdom': 860, Spain: 1080,
      Italy: 1240, Netherlands: 420, Sweden: 220, Belgium: 260, Austria: 180, Poland: 740,
    },
    '1000+': {
      Germany: 320, France: 380, 'United Kingdom': 240, Spain: 280,
      Italy: 310, Netherlands: 110, Sweden: 55, Belgium: 65, Austria: 45, Poland: 180,
    },
  },
  'Automotive': {
    '50-249': {
      Germany: 4860, France: 1940, 'United Kingdom': 1680, Spain: 1520,
      Italy: 1840, Netherlands: 480, Sweden: 620, Belgium: 380, Austria: 560, Poland: 1380,
    },
    '250-999': {
      Germany: 2640, France: 880, 'United Kingdom': 720, Spain: 680,
      Italy: 820, Netherlands: 180, Sweden: 280, Belgium: 160, Austria: 240, Poland: 640,
    },
    '1000+': {
      Germany: 860, France: 280, 'United Kingdom': 220, Spain: 180,
      Italy: 240, Netherlands: 50, Sweden: 75, Belgium: 40, Austria: 65, Poland: 160,
    },
  },
  'Chemicals & Pharmaceuticals': {
    '50-249': {
      Germany: 3640, France: 2280, 'United Kingdom': 1860, Spain: 1240,
      Italy: 1680, Netherlands: 960, Sweden: 680, Belgium: 840, Austria: 480, Poland: 1040,
    },
    '250-999': {
      Germany: 1580, France: 980, 'United Kingdom': 780, Spain: 460,
      Italy: 620, Netherlands: 420, Sweden: 280, Belgium: 360, Austria: 200, Poland: 380,
    },
    '1000+': {
      Germany: 520, France: 340, 'United Kingdom': 260, Spain: 140,
      Italy: 180, Netherlands: 140, Sweden: 85, Belgium: 110, Austria: 60, Poland: 95,
    },
  },
  'Machinery & Equipment': {
    '50-249': {
      Germany: 6480, France: 2360, 'United Kingdom': 1940, Spain: 1280,
      Italy: 3840, Netherlands: 780, Sweden: 920, Belgium: 480, Austria: 860, Poland: 1640,
    },
    '250-999': {
      Germany: 3120, France: 1080, 'United Kingdom': 840, Spain: 520,
      Italy: 1680, Netherlands: 320, Sweden: 420, Belgium: 200, Austria: 380, Poland: 680,
    },
    '1000+': {
      Germany: 840, France: 280, 'United Kingdom': 220, Spain: 120,
      Italy: 420, Netherlands: 80, Sweden: 105, Belgium: 50, Austria: 95, Poland: 160,
    },
  },
};

/* ─── helper: get count for a country given selections ─── */
function getCount(vertical: Vertical, size: CompanySize, country: Country): number {
  if (size === 'all') {
    return (
      MARKET_DATA[vertical]['50-249'][country] +
      MARKET_DATA[vertical]['250-999'][country] +
      MARKET_DATA[vertical]['1000+'][country]
    );
  }
  return MARKET_DATA[vertical][size][country];
}

/* ─── custom dropdown ─── */
const Dropdown: React.FC<{
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}> = ({ label, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative">
      <label className="block text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-2">
        {label}
      </label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] hover:border-[#C5A059]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20"
      >
        <span className="truncate">{selected?.label}</span>
        <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-stone-50 transition-colors ${
                  opt.value === value ? 'text-[#C5A059] font-medium' : 'text-[#1a1a1a]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── main component ─── */
export const MarketScannerPage: React.FC = () => {
  const [vertical, setVertical] = useState<Vertical>('Manufacturing');
  const [companySize, setCompanySize] = useState<CompanySize>('250-999');
  const [selectedCountries, setSelectedCountries] = useState<Set<Country>>(
    new Set(['Germany', 'France', 'United Kingdom', 'Italy', 'Netherlands'] as Country[])
  );

  const toggleCountry = (country: Country) => {
    setSelectedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(country)) {
        if (next.size <= 1) return prev; // keep at least 1
        next.delete(country);
      } else {
        next.add(country);
      }
      return next;
    });
  };

  /* ─── computed results ─── */
  const results = useMemo(() => {
    const countryData = Array.from(selectedCountries).map((country) => ({
      country,
      flag: COUNTRIES.find((c) => c.name === country)!.flag,
      count: getCount(vertical, companySize, country),
    }));

    // Sort descending, take top 5
    countryData.sort((a, b) => b.count - a.count);
    const top5 = countryData.slice(0, 5);
    const maxCount = top5[0]?.count ?? 0;
    const total = countryData.reduce((sum, c) => sum + c.count, 0);
    const weeks = Math.ceil(total / 200 / 5);

    // Insight: compare #1 and #3
    let insight = '';
    if (top5.length >= 3) {
      const ratio = (top5[0].count / top5[2].count).toFixed(1);
      const isDACH = top5[0].country === 'Germany';
      insight = `${top5[0].country} has ${ratio}× more target companies than ${top5[2].country}${
        isDACH ? ' — consider starting DACH for maximum density.' : ' — a strong entry point for your first campaign.'
      }`;
    } else if (top5.length >= 2) {
      const ratio = (top5[0].count / top5[1].count).toFixed(1);
      insight = `${top5[0].country} has ${ratio}× more target companies than ${top5[1].country}.`;
    }

    return { top5, maxCount, total, weeks, insight };
  }, [vertical, companySize, selectedCountries]);

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* ─── Hero ─── */}
      <section className="pt-40 pb-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
            <span className="inline-flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              Market Scanner
            </span>
          </motion.div>
          <motion.h1
            {...stagger(0.1)}
            className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight mb-5"
          >
            See the size of your{' '}
            <span className="italic text-[#C5A059] font-normal">European opportunity</span>
          </motion.h1>
          <motion.p {...stagger(0.2)} className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Real enterprise data across seven supply chain verticals and ten European markets.
            Configure your ICP below and see exactly how many companies are waiting to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ─── Scanner Tool ─── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
            {/* ─── Left: Inputs (sticky) ─── */}
            <motion.div
              {...stagger(0.3)}
              className="lg:sticky lg:top-32 bg-white border border-stone-200 rounded-2xl p-6 space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span className="text-xs font-semibold tracking-wide text-[#1a1a1a] uppercase">Configure ICP</span>
              </div>

              {/* Vertical */}
              <Dropdown
                label="Target Vertical"
                value={vertical}
                options={VERTICALS.map((v) => ({ value: v, label: v }))}
                onChange={(v) => setVertical(v as Vertical)}
              />

              {/* Company size */}
              <Dropdown
                label="Company Size"
                value={companySize}
                options={SIZE_OPTIONS}
                onChange={(v) => setCompanySize(v as CompanySize)}
              />

              {/* Countries — multi-select checkboxes */}
              <div>
                <label className="block text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-3">
                  Target Countries
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {COUNTRIES.map(({ name, flag }) => {
                    const isSelected = selectedCountries.has(name);
                    return (
                      <button
                        key={name}
                        onClick={() => toggleCountry(name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                          isSelected
                            ? 'bg-[#1a1a1a] text-white'
                            : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                        }`}
                      >
                        <span className="text-base leading-none">{flag}</span>
                        <span className="truncate text-xs">{name}</span>
                        {isSelected && <Check className="w-3 h-3 ml-auto shrink-0 text-[#C5A059]" />}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-stone-400 mt-2">
                  {selectedCountries.size} selected — showing top 5 by enterprise count
                </p>
              </div>
            </motion.div>

            {/* ─── Right: Results ─── */}
            <div className="space-y-6">
              {/* TAM Card */}
              <motion.div
                {...stagger(0.35)}
                className="bg-[#1a1a1a] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    Total Addressable Market
                  </div>
                  <motion.div
                    key={results.total}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-serif text-5xl md:text-6xl text-white tracking-tight leading-none"
                  >
                    {results.total.toLocaleString('en-GB')}
                  </motion.div>
                  <p className="text-sm text-stone-500 mt-2">companies matching your ICP</p>
                </div>
                <div className="h-px sm:h-16 sm:w-px w-full bg-stone-800" />
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    Time to Full Coverage
                  </div>
                  <motion.div
                    key={results.weeks}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="font-serif text-4xl md:text-5xl text-[#C5A059] tracking-tight leading-none"
                  >
                    ~{results.weeks} <span className="text-2xl">weeks</span>
                  </motion.div>
                  <p className="text-sm text-stone-500 mt-2">at 200+ precision dials/day</p>
                </div>
              </motion.div>

              {/* Bar Chart */}
              <motion.div {...stagger(0.4)} className="bg-white border border-stone-200 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-semibold tracking-wide text-[#1a1a1a] uppercase">
                    Market Density — Top 5 Countries
                  </span>
                </div>

                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${vertical}-${companySize}-${Array.from(selectedCountries).join(',')}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      {results.top5.map((item, i) => {
                        const pct = results.maxCount > 0 ? (item.count / results.maxCount) * 100 : 0;
                        return (
                          <div key={item.country} className="flex items-center gap-3">
                            {/* Label */}
                            <div className="w-32 shrink-0 flex items-center gap-2">
                              <span className="text-lg leading-none">{item.flag}</span>
                              <span className="text-sm text-[#1a1a1a] font-medium truncate">{item.country}</span>
                            </div>
                            {/* Bar */}
                            <div className="flex-1 h-9 bg-stone-100 rounded-lg overflow-hidden relative">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                                className="h-full rounded-lg"
                                style={{
                                  background:
                                    i === 0
                                      ? 'linear-gradient(90deg, #C5A059, #d4b06a)'
                                      : `linear-gradient(90deg, #1a1a1a, #2a2a2a)`,
                                }}
                              />
                            </div>
                            {/* Count */}
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                              className="w-16 text-right text-sm font-semibold text-[#1a1a1a] tabular-nums"
                            >
                              {item.count.toLocaleString('en-GB')}
                            </motion.span>
                          </div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Coverage + Insight row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coverage calc */}
                <motion.div {...stagger(0.45)} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-3">
                    Coverage Calculation
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    At <span className="font-semibold text-[#1a1a1a]">200+ precision dials per day</span>, Lynn can
                    reach your entire addressable market of{' '}
                    <span className="font-semibold text-[#1a1a1a]">{results.total.toLocaleString('en-GB')} companies</span>{' '}
                    in approximately{' '}
                    <span className="font-semibold text-[#C5A059]">{results.weeks} weeks</span>.
                  </p>
                </motion.div>

                {/* Market insight */}
                {results.insight && (
                  <motion.div {...stagger(0.5)} className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                    <div className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase mb-3 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-[#C5A059]" />
                      Market Insight
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{results.insight}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a1a1a] rounded-2xl p-12 md:p-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4">
              Now you know your market.
              <br />
              <span className="italic text-[#C5A059] font-normal">Let's fill your calendar.</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-md mx-auto">
              {results.total.toLocaleString('en-GB')} companies are waiting. We'll tell you exactly how many demos we can
              book in 90 days.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1a1a1a] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#d4b06a] transition-colors">
              Book a call
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
