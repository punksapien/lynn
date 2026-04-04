import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'What is the cost?', a: 'Pricing depends on scope - the number of markets you want to reach, the languages required, and the volume of outreach. We don\'t publish a standard rate because a company targeting two countries in English needs something very different to one running six-language European outreach with four callers. Book a call and we\'ll give you a clear number based on your actual requirements.' },
  { q: 'How will I know the calls will be qualified?', a: 'Every meeting is checked against your ICP before it\'s booked. We define qualification criteria with you during onboarding - company size, vertical, geography, title - and our callers only confirm meetings that match. You\'ll receive a brief for every demo that lands in your calendar.' },
  { q: 'How quickly will I see results?', a: 'Calling goes live in week three. The first qualified meetings typically land in your calendar that same week. By day 90, you\'ll have 30 qualified demos or we keep working at no extra cost.' },
  { q: 'How can you guarantee results?', a: 'We\'ve run this process across enough supply chain and logistics SaaS companies to know what it takes to hit 30 qualified meetings in 90 days. We don\'t offer guarantees because we\'re generous - we offer them because we know we\'ll hit the number. If we don\'t, we keep going at no additional cost until we do.' },
  { q: 'Do you work with companies outside of supply chain?', a: 'Our sweet spot is Supply Chain, Logistics, and Procurement SaaS - that\'s where our domain knowledge, caller training, and contact databases are deepest. But we\'ve run successful programmes outside this vertical too. If you\'re unsure whether we\'re the right fit, book a call and we\'ll give you an honest answer. If we\'re not the right fit, we\'ll point you to someone who is.' },
  { q: 'Do you only target large enterprise accounts?', a: 'Enterprise is where we have the strongest track record - but we work across company sizes. If your target market skews smaller, that\'s not a problem. We\'ll adjust the approach accordingly. The fundamentals are the same: the right contacts, the right message, native-language callers who understand your buyers. Book a call and we\'ll tell you honestly whether the programme makes sense for your specific market.' },
  { q: 'Can you target niche markets?', a: 'Yes - and it\'s often where we do our best work. Niche markets have smaller, more defined universes of prospects, which means precise targeting matters even more. We build exact contact lists for your ICP, train callers on your specific buyers, and go deep rather than broad. Smaller market, higher hit rate. If anything, a niche is an advantage.' },
  { q: 'What languages do you operate in?', a: 'English, French, German, Spanish, Italian, and Portuguese. All native speakers - not translations. Our callers are recruited for native fluency in their language and trained specifically in supply chain and procurement SaaS. Calling a French VP in French is a fundamentally different conversation to calling them in English.' }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
              Questions we hear <span className="italic text-stone-400">every time.</span>
            </h2>
            <p className="text-stone-400 mb-12 leading-relaxed">
              If something isn't covered here, book a call - we'll give you a straight answer, not a sales pitch.
            </p>
            
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
              <p className="text-stone-400 mb-6">Book a 20-minute call. No pitch — just straight answers about whether this works for your market.</p>
              <a href="#contact" className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#1a1a1a] rounded-full text-sm font-medium hover:bg-stone-200 transition-all">
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
      </div>
    </section>
  );
};
