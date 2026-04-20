import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Clock, ChevronLeft } from 'lucide-react';
import { INK, CREAM, GOLD, RULE, Eyebrow, SectionNum } from './shared';

interface LangRow {
  market: string;
  inLanguage: string;
  english: string;
  uplift: string;
}

const LANG_ROWS: LangRow[] = [
  { market: 'France',   inLanguage: '5–9%',  english: '2–4%', uplift: '~2.2×' },
  { market: 'DACH',     inLanguage: '8–13%', english: '3–5%', uplift: '~2.4×' },
  { market: 'Italy',    inLanguage: '7–11%', english: '3–5%', uplift: '~2.1×' },
  { market: 'Spain',    inLanguage: '5–8%',  english: '2–4%', uplift: '~1.9×' },
  { market: 'Portugal', inLanguage: '6–10%', english: '2–4%', uplift: '~2.2×' },
];

export const MultilingualUpliftArticle: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const ids = ['intro', 'data', 'france', 'dach', 'nordics', 'operational', 'bottom'];
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
            href="#/resources"
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
              Blog
            </span>
            <Eyebrow>
              <Clock size={10} strokeWidth={2} className="inline -translate-y-[1px] mr-1" />
              4 min read
            </Eyebrow>
            <Eyebrow>20 April 2026</Eyebrow>
            <Eyebrow>Language × connect rate</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-[44px] sm:text-[58px] md:text-[72px] leading-[1.02] tracking-tight max-w-[18ch]"
          >
            Why calling a French VP in French doubles your connects.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 max-w-[56ch] text-lg md:text-xl leading-relaxed text-stone-500"
          >
            Translated scripts and bilingual SDRs are not the same thing. The number that proves it.
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
                  { id: 'intro',       n: '01', t: 'The one lever most pan-EU campaigns miss' },
                  { id: 'data',        n: '02', t: 'Language uplift, by market' },
                  { id: 'france',      n: '03', t: 'France: the seniority trap' },
                  { id: 'dach',        n: '04', t: 'DACH: German C-level won\'t engage in English' },
                  { id: 'nordics',     n: '05', t: 'Where language doesn\'t matter' },
                  { id: 'operational', n: '06', t: 'What it costs to staff for it' },
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
              <SectionNum n="01" kicker="The Lever" title="The one variable most pan-EU campaigns underspend on" />

              <div className="relative">
                <span aria-hidden className="float-left font-serif text-[80px] md:text-[100px] leading-none mr-3 mt-[6px] font-light">
                  I
                </span>
                <p className="text-[17px] leading-[1.75] text-stone-700">
                  f you run one outbound motion across France, Germany, Italy and Spain in English, you are losing roughly half your connects before anyone on your team even picks up the phone. Not because the list is bad, or the script is bad. Because the language is wrong.
                </p>
              </div>

              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                Across the last eighteen months we have dialled more than 1.1 million cold contacts on behalf of supply chain and logistics software vendors. When the same company's list gets split — half called in the local language by a native, half called in English — the in-language side clears roughly twice the connect rate. Consistently. In every continental European market we have tested.
              </p>

              <div className="mt-8 pl-5 border-l-2" style={{ borderColor: GOLD }}>
                <p className="text-[15px] leading-[1.7] text-stone-700">
                  The uplift is real at connect, and larger at conversation. An English opener to a German Einkaufsleiter usually ends the call. The same opener in German gets you three minutes. The same three minutes, booked across five markets, is your pipeline.
                </p>
              </div>
            </section>

            <section id="data" className="scroll-mt-28 mt-20">
              <SectionNum n="02" kicker="The Data" title="In-language vs English, side by side" />

              <div className="border rounded-[2px] overflow-hidden" style={{ borderColor: INK, background: '#FAFAF6' }}>
                <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-4 px-5 py-3 text-white" style={{ background: INK }}>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold">Market</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right">In language</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right">In English</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-right w-16">Uplift</div>
                </div>
                {LANG_ROWS.map((r, i) => (
                  <motion.div
                    key={r.market}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-4 px-5 py-[14px] items-baseline border-t"
                    style={{ borderColor: 'rgba(26,26,26,0.08)' }}
                  >
                    <div className="text-[15px] md:text-[16px]">{r.market}</div>
                    <div className="text-right text-[16px] tabular-nums font-medium">{r.inLanguage}</div>
                    <div className="text-right text-[15px] tabular-nums text-stone-500">{r.english}</div>
                    <div className="text-right w-16">
                      <span className="text-[12px] font-semibold tabular-nums">{r.uplift}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-3 text-[12px] text-stone-500 leading-relaxed max-w-[70ch]">
                <span className="text-[10px] uppercase font-semibold tracking-[0.22em] text-stone-500 mr-1">Note.</span>
                Ranges reflect dial-weighted averages across campaigns of ≥200 dials, same companies, same titles, two caller cohorts (native speakers vs English-only). Uplift is midpoint in-language / midpoint English.
              </p>
            </section>

            <section id="france" className="scroll-mt-28 mt-20">
              <SectionNum n="03" kicker="Case in Point" title="France: where language and seniority compound" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                France is the market where the English penalty is most visible, because French buyers tend to signal the handoff politely — a quick <em>non merci</em>, a transfer to a junior — rather than hanging up. That looks like a low but non-zero result on the English-only side, so teams conclude "French prospects are just harder," and miss that they burned their best-matched leads in the first twenty seconds.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                Respect the seniority conventions too. A <em>Directeur</em> is a decision-maker. A <em>Responsable</em> is mid-level. A <em>Chef</em> is a line manager. English job titles translated with Apollo's default filters flatten these distinctions — a VP filter catches <em>Chef</em> as often as it catches <em>Directeur</em>. If your list is built in English, you are also targeting the wrong tier of seniority before the call even starts.
              </p>
            </section>

            <section id="dach" className="scroll-mt-28 mt-20">
              <SectionNum n="04" kicker="Case in Point" title="DACH: German C-level almost never engages in English" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                DACH is where the uplift is largest, and where the failure mode of US vendors running their own outbound is most predictable. Dial a German <em>Leiter Einkauf</em> in English, hit a 2 to 3 percent connect rate, and conclude "cold calling doesn't work in Germany." It does. A native-speaker dial into the same list runs 8 to 13 percent.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                The cultural signal matters more than the literal communication. Switching to German in the first sentence tells the prospect you take the market seriously enough to staff for it. That cues a different posture for the rest of the call. Every German-native SDR we've worked with describes the same dynamic — English is the tell that you didn't actually invest in the market.
              </p>
            </section>

            <section id="nordics" className="scroll-mt-28 mt-20">
              <SectionNum n="05" kicker="The Exception" title="Where language doesn't move the needle" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                The Nordics are the one market where language is not the issue — the entire channel is. Telia's carrier-level call filtering, NIX and asterisk registers, and a strongly research-led buying culture mean cold calling as a whole underperforms there. English or Swedish, you are working against structural headwinds. LinkedIn and email win in those markets; the phone is a second touch once there is already signal.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                If you only have SDR budget for one language, do not let it be a Scandinavian one. Pick German or French. The uplift compounds across more dials.
              </p>
            </section>

            <section id="operational" className="scroll-mt-28 mt-20">
              <SectionNum n="06" kicker="The Real Cost" title="Staffing for language is not a translation problem" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                Most agencies that advertise "pan-European" coverage are actually staffed for English. A bilingual SDR reading a translated script is not the same as a native speaker working from a script written in that language. The difference shows up in the first ninety seconds of every call — in idiom, in the response to an objection, in the pickup of a cultural cue from the prospect. Translated scripts die in the objection handling.
              </p>
              <p className="mt-5 text-[17px] leading-[1.75] text-stone-700">
                Operationally, this means three things. Native-fluent callers, not bilingual. Scripts written in-market, not translated. Job-title scraping in the local language, so your list knows the difference between a <em>Directeur</em> and a <em>Chef</em>, between a <em>Leiter</em> and a <em>Sachbearbeiter</em>. All three cost more than the English-only baseline. All three double your connects.
              </p>
            </section>

            <section id="bottom" className="scroll-mt-28 mt-20">
              <SectionNum n="07" kicker="In Closing" title="Bottom line" />

              <p className="text-[17px] leading-[1.75] text-stone-700">
                In-language dialling is the highest-leverage, least-discussed variable in continental European outbound. Roughly <strong className="tabular-nums font-semibold">2×</strong> on connects. More on conversation quality. Compounds across markets. If you are pricing an outbound partner in Europe, the single question that separates the working ones from the marketing ones is: <em>how many native speakers do you actually staff per market, and can I meet them?</em>
              </p>
            </section>

            <aside className="mt-16 rounded-[2px] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: INK, color: '#f0ece0' }}>
              <div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-tight max-w-[28ch] text-white">
                  Want the connect-rate breakdown for your markets?
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-300 max-w-[50ch]">
                  Thirty-minute strategy session. We share the market-by-market data for the specific titles and countries in your ICP.
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

            <section className="mt-14 pt-8 border-t" style={{ borderColor: RULE }}>
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10">
                <Eyebrow>Related</Eyebrow>
                <ul className="text-[13px] leading-[1.75] text-stone-600 space-y-1">
                  <li><a href="#/resources/cold-calling-connect-rates-by-market" className="hover:text-[#1a1a1a] underline-offset-2 hover:underline">Cold calling across Europe and the US in 2026 →</a></li>
                  <li><a href="#/resources/in-house-sdr-math-supply-chain" className="hover:text-[#1a1a1a] underline-offset-2 hover:underline">The in-house SDR math for supply chain software →</a></li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
};

export default MultilingualUpliftArticle;
