import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { WorldMap } from './WorldMap';

const FAQS = [
  { q: 'What is the cost?', a: 'Pricing depends on scope — the number of markets you want to reach, the languages required, and the volume of outreach. We don\'t publish a standard rate because a company targeting the US in English needs something very different to one running six-language European outreach with multiple callers. Book a call and we\'ll give you a clear number based on your actual requirements.' },
  { q: 'How will I know the meetings will be qualified?', a: 'Every meeting is checked against your ICP before it\'s booked. We define qualification criteria with you during onboarding — company size, vertical, geography, title — and our team only confirms meetings that match. You\'ll receive a brief for every demo that lands in your calendar.' },
  { q: 'How quickly will I see results?', a: 'Email sequences begin in week one. Calling goes live by week two. The first qualified meetings typically land in your calendar by week three — from calls, email replies, or both. By day 90, you\'ll have 30 qualified demos or we keep working at no extra cost for up to 45 additional days.' },
  { q: 'How can you guarantee results?', a: 'We\'ve run this process across enough supply chain and logistics software companies to know what it takes to hit 30 qualified meetings in 90 days. We don\'t offer guarantees because we\'re generous — we offer them because we know we\'ll hit the number. If we don\'t, we keep going at no additional cost for up to 45 more days.' },
  { q: 'Do you work with companies outside of supply chain?', a: 'Our sweet spot is supply chain, logistics, and procurement software — that\'s where our domain knowledge, team training, and contact databases are deepest. But we\'ve run successful programmes outside this vertical too. If you\'re unsure whether we\'re the right fit, book a call and we\'ll give you an honest answer. If we\'re not the right fit, we\'ll point you to someone who is.' },
  { q: 'Do you only target large enterprise accounts?', a: 'Enterprise is where we have the strongest track record — but we work across company sizes. If your target market skews smaller, that\'s not a problem. We\'ll adjust the approach accordingly. The fundamentals are the same: the right contacts, the right message, native-language teams who understand your buyers. Book a call and we\'ll tell you honestly whether the programme makes sense for your specific market.' },
  { q: 'Can you target niche markets?', a: 'Yes — and it\'s often where we do our best work. Niche markets have smaller, more defined universes of prospects, which means precise targeting matters even more. We build exact contact lists for your ICP, train our team on your specific buyers, and go deep rather than broad. Smaller market, higher hit rate. If anything, a niche is an advantage.' },
  { q: 'What languages do you operate in?', a: 'English, French, German, Spanish, Italian, and Portuguese. All native speakers — not translations. Our callers are recruited for native fluency and our email copy is written natively in each language, not translated from English. Reaching a French VP in French — by phone or inbox — is a fundamentally different conversation to reaching them in English.' },
  { q: 'What markets do you cover?', a: 'Our primary markets are Europe and the US, but we operate globally. We\'ve delivered results across LATAM, Asia, and other regions. If your buyers are there, we can reach them. Book a call and we\'ll tell you exactly what coverage looks like for your target markets.' }
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
              <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w?month=2026-04" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#1a1a1a] rounded-full text-sm font-medium hover:bg-stone-200 transition-all">
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
