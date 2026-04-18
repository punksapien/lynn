import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EuropeMap } from './EuropeMap';

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

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                About Lynn
              </motion.div>
              <motion.h1 {...stagger(0.1)} className="font-serif text-5xl md:text-6xl lg:text-[3.4rem] leading-[1.08] tracking-tight mb-8">
                The only outbound agency that speaks{' '}
                <span className="text-[#C5A059] font-normal">supply chain.</span>
              </motion.h1>
              <motion.p {...stagger(0.2)} className="text-lg text-stone-600 leading-relaxed max-w-xl">
                Lynn exists because we watched brilliant supply chain software companies burn budget with generalist agencies that didn't understand their buyers. So we built the opposite: a fully in-house team that only works in supply chain, logistics, and procurement software — fluent in 8 European languages, trained on what a TMS actually does, and willing to put a results guarantee in writing.
              </motion.p>
            </div>

            {/* Animated Europe map — language hubs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[420px]"
            >
              <EuropeMap />
            </motion.div>
          </div>

          {/* Stat Bar */}
          <motion.div
            {...stagger(0.4)}
            className="mt-16 bg-[#1a1a1a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { num: '2,298+', label: 'qualified demos booked' },
              { num: '$22M+', label: 'pipeline generated for clients' },
              { num: '8', label: 'languages, fluent teams' },
              { num: '90', label: 'day guaranteed programmes' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl text-white leading-none mb-1">{stat.num}</div>
                <div className="text-xs text-stone-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Supply Chain Only */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <div>
              <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                Why Supply Chain Only
              </motion.div>
              <motion.h2 {...stagger(0.1)} className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Generalist agencies burn your budget. We{' '}
                <span className="text-[#C5A059] font-normal">refuse</span> to do that.
              </motion.h2>
              <motion.p {...stagger(0.2)} className="text-stone-600 leading-relaxed mb-4">
                Most lead gen agencies cover 50+ industries and rotate accounts between junior reps who can't tell a WMS from a TMS. Your buyers hear it in the first 10 seconds — and they hang up.
              </motion.p>
              <motion.p {...stagger(0.25)} className="text-stone-600 leading-relaxed">
                We made the opposite bet: one vertical, gone deep. Every caller, script, email sequence, and contact list compounds across campaigns. We already know which titles pick up, which pain points land, which markets respond to calling vs. email, and which objections to expect — before we even start your account.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  num: '01',
                  title: 'Single-niche focus',
                  desc: 'We only work in supply chain, logistics, and procurement software. That\'s it. Every campaign makes the next one better.',
                },
                {
                  num: '02',
                  title: 'Cross-client intelligence',
                  desc: 'Running concurrent campaigns in the same vertical means we see patterns no single-client agency can.',
                },
                {
                  num: '03',
                  title: 'Domain-trained teams',
                  desc: 'Our teams are briefed on your product, your competitive landscape, and your buyers\' day-to-day problems — whether they\'re on the phone or writing outbound email.',
                },
                {
                  num: '04',
                  title: 'Built for enterprise cycles',
                  desc: 'Supply chain deals take 130–170 days with 13+ stakeholders. We know how to start those conversations at the right level.',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#C5A059]/30 transition-colors"
                >
                  <div className="text-[#C5A059] font-serif text-2xl mb-3">{card.num}</div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm">{card.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Team visual — stat block */}
            <motion.div
              {...fadeUp}
              className="bg-[#1a1a1a] rounded-2xl h-[400px] flex flex-col items-center justify-center relative overflow-hidden p-10"
            >
              <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-[#C5A059]/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-stone-700/40 rounded-full blur-[60px]" />
              <div className="relative text-center">
                <div className="font-serif text-7xl text-white leading-none mb-3">25+</div>
                <div className="text-xs text-stone-400 tracking-[0.2em] uppercase mb-8">In-house team</div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                  <div>
                    <div className="font-serif text-2xl text-[#C5A059] leading-none mb-1">18</div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-wider">Cold callers</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-[#C5A059] leading-none mb-1">7+</div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-wider">Strategy & ops</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team content */}
            <div>
              <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                The Team
              </motion.div>
              <motion.h2 {...stagger(0.1)} className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                A team of 25+ behind every{' '}
                <span className="text-[#C5A059] font-normal">campaign.</span>
              </motion.h2>

              <motion.p {...stagger(0.2)} className="text-stone-600 leading-relaxed mb-4">
                Lynn isn't a one-person shop with a handful of contractors. We're a fully in-house team of 25+ specialists — 18 cold callers and a 7-person strategy and ops core — purpose-built for supply chain, logistics, and procurement software.
              </motion.p>
              <motion.p {...stagger(0.25)} className="text-stone-600 leading-relaxed mb-6">
                Every campaign you run with us touches every one of these disciplines. Nothing is outsourced to virtual assistants, nothing is handed to juniors who don't understand your buyers.
              </motion.p>

              <motion.div {...stagger(0.3)} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { title: 'GTM Engineers', desc: 'Build the data, targeting, and intelligence behind every campaign.' },
                  { title: 'Campaign Managers', desc: 'Run your account day-to-day, accountable to your numbers.' },
                  { title: 'Email Deliverability', desc: 'Domain managers ensuring your sequences hit the inbox, not spam.' },
                  { title: 'Cold Callers', desc: '18 dialers trained on supply chain, logistics, and procurement.' },
                  { title: 'Native-Language Experts', desc: 'Fluent in 8 European languages — EN, DE, FR, IT, ES, NL, PT, NO.' },
                  { title: 'Copywriters', desc: 'Outbound email written by people who know what a TMS does.' },
                ].map((role, i) => (
                  <div key={i} className="border-l-2 border-[#C5A059]/40 pl-3 py-1">
                    <div className="text-sm font-semibold text-[#1a1a1a]">{role.title}</div>
                    <div className="text-xs text-stone-500 leading-relaxed mt-0.5">{role.desc}</div>
                  </div>
                ))}
              </motion.div>

              {/* Team operating stats */}
              <motion.div {...stagger(0.32)} className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { num: '200+', label: 'dials per day per caller' },
                  { num: '0', label: 'AI-generated calls or emails' },
                  { num: '14 days', label: 'from kickoff to live' },
                ].map((s, i) => (
                  <div key={i} className="bg-stone-100/70 border border-stone-200 rounded-xl p-4">
                    <div className="font-serif text-xl text-[#1a1a1a] leading-none mb-1">{s.num}</div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div {...stagger(0.35)} className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/lynn-lead-gen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#C5A059] border border-[#C5A059] px-5 py-2.5 rounded-xl hover:bg-[#C5A059]/10 transition-colors"
                >
                  Follow us on LinkedIn
                </a>
                <a
                  href="https://calendly.com/george-lynn-lead-gen/strategy-session-w?month=2026-04" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-white bg-[#1a1a1a] px-5 py-2.5 rounded-xl hover:bg-stone-800 transition-colors"
                >
                  Talk to our team
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lynn — merged differentiators + values */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
            Why Lynn
          </motion.div>
          <motion.h2 {...stagger(0.1)} className="font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-2xl">
            Five things that separate Lynn from every other{' '}
            <span className="text-[#C5A059] font-normal">agency.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                title: 'Results guarantee, in writing',
                desc: 'We agree on a demo target before we start. If we don\'t hit it, we keep working at no extra cost — in writing, before you sign.',
              },
              {
                num: '02',
                title: 'Live in 14 days',
                desc: 'No 3-month onboarding. Teams trained and dialling within two weeks. First demos typically land in week 3.',
              },
              {
                num: '03',
                title: 'Calling-led outbound',
                desc: 'We lead with the phone and back it with email. A 3-minute conversation supported by a well-timed sequence outperforms either channel alone.',
              },
              {
                num: '04',
                title: 'Honest about what works',
                desc: 'If your ICP needs adjusting, we say so. If a campaign isn\'t landing, we tell you. If we\'re not the right fit, we point you to someone who is — before you sign anything.',
              },
              {
                num: '05',
                title: 'Results over activity',
                desc: 'We don\'t send reports packed with vanity metrics. We measure qualified, attended demos with named decision-makers. Everything else is noise.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-[#C5A059]/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="font-serif text-4xl text-[#C5A059]/60 mb-4 leading-none">{card.num}</div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">{card.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#1a1a1a] text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.h2 {...fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Ready to fill your{' '}
            <span className="text-[#C5A059] font-normal">pipeline?</span>
          </motion.h2>
          <motion.p {...stagger(0.1)} className="text-stone-400 text-lg leading-relaxed mb-10">
            Book a 20-minute strategy call. No obligation. We'll tell you honestly whether we're the right fit — and if we're not, we'll point you to someone who is.
          </motion.p>
          <motion.div {...stagger(0.2)} className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w?month=2026-04" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] rounded-xl text-sm font-medium tracking-wide hover:bg-stone-200 transition-colors shadow-lg"
            >
              Book a strategy call
            </a>
            <a
              href="#/"
              className="inline-flex items-center gap-2 px-8 py-4 text-stone-400 border border-stone-700 rounded-xl text-sm font-medium hover:text-white hover:border-stone-500 transition-colors"
            >
              See case studies <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
