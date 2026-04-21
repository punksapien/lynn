import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { WorldMap } from './WorldMap';

const FAQS = [
  { q: 'What does it cost?', a: 'Pricing depends on scope — the number of markets, languages, and volume of outreach. A company targeting the US in English is a very different programme to one running six-language European outreach with multiple callers. Book a call and we\'ll give you a clear number based on your actual requirements.' },
  { q: 'How do you guarantee the meetings are qualified?', a: 'We define qualification criteria with you during onboarding — company size, vertical, geography, job title. Every meeting is checked against your ICP before it lands in your calendar, and you\'ll receive a brief for each one. We don\'t pad numbers with loose-fit meetings. If a prospect doesn\'t match, it doesn\'t count.' },
  { q: 'How quickly are we live?', a: 'Our GTM engineers build your target lists and email campaigns in week one. Calling goes live by week two. The first qualified meetings typically land in your calendar by week three. Most agencies take 4-8 weeks to onboard — we compress that because the research, list building, and campaign setup are what we do every day.' },
  { q: 'What happens after 90 days?', a: 'Most clients continue on a rolling basis. By day 90 your programme is fully optimised — the messaging is dialled in, the caller team knows your buyers, and the pipeline is flowing. Continuing means we keep compounding on that momentum rather than starting from scratch. There\'s no long-term lock-in — you stay because it\'s working.' },
  { q: 'Do you only work in supply chain?', a: 'Supply chain, logistics, and procurement software is our sweet spot — that\'s where our domain knowledge, team training, and contact databases are deepest. We\'ve run successful programmes outside this vertical too, but we\'re honest about where we\'re strongest. If we\'re not the right fit, we\'ll tell you.' },
  { q: 'What languages and markets do you cover?', a: 'English, French, German, Spanish, Italian, and Portuguese. Our callers are fluent speakers recruited for language proficiency and domain knowledge, and our email campaigns are written in each language by fluent copywriters — not translated from English. Primary coverage across Europe and the US, with proven results in LATAM, Asia, and other regions.' },
  { q: 'How is this different from hiring SDRs in-house?', a: 'An in-house SDR takes 4-6 months to hire, onboard, and ramp — and walks out with all that knowledge when they leave. We deploy a full GTM engine in two weeks: trained callers, personalised email campaigns, verified contact lists, and multilingual coverage. You get the output of an entire team without the recruitment risk, ramp time, or management overhead.' },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
              Questions we hear <span className="text-stone-400">every time.</span>
            </h2>
            <p className="text-stone-400 mb-12 leading-relaxed">
              If something isn't covered here, book a call - we'll give you a straight answer, not a sales pitch.
            </p>
            
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
              <p className="text-stone-400 mb-6">Book a 20-minute call. No pitch — just straight answers about whether this works for your market.</p>
              <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#1a1a1a] rounded-full text-sm font-medium hover:bg-stone-200 transition-all">
                Book a call →
              </a>
            </div>

          </div>

          {/* Right */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-stone-800 pb-4">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="font-medium text-lg group-hover:text-[#C5A059] transition-colors pr-8">{faq.q}</span>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-stone-500 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-stone-500 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-stone-400 pb-4 pr-8 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* World Map — full width below FAQ */}
        <div className="mt-16 pt-10 border-t border-stone-800">
          <div className="text-center mb-6">
            <div className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-2">Where we operate</div>
            <p className="text-stone-400 text-sm">6 languages. Global coverage. Based in the UK.</p>
          </div>
          <WorldMap />
        </div>
      </div>
    </section>
  );
};
