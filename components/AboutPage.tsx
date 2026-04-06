import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
              <motion.p {...stagger(0.2)} className="text-lg text-stone-600 leading-relaxed mb-4 max-w-xl">
                Lynn exists because we watched brilliant supply chain SaaS companies pour money into agencies that didn't understand their buyers, their market, or their language. And we thought: someone should fix that.
              </motion.p>
              <motion.p {...stagger(0.3)} className="text-lg text-stone-600 leading-relaxed max-w-xl">
                So we built the agency we wished existed when we were on the other side of the table — one that only works in supply chain, logistics, and procurement SaaS. One that hires native-speaking callers who actually understand what a TMS does. One that guarantees results because it knows it will hit the number.
              </motion.p>
            </div>

            {/* Abstract visual block instead of image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[420px] bg-[#1a1a1a] rounded-2xl overflow-hidden"
            >
              {/* Atmospheric gradient orbs */}
              <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#C5A059]/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-stone-600/30 rounded-full blur-[60px]" />
              {/* Centered typography treatment */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
                <div className="font-serif text-7xl text-white/10 mb-4 tracking-tight">Lynn.</div>
                <div className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">Built for supply chain</div>
              </div>
            </motion.div>
          </div>

          {/* Stat Bar */}
          <motion.div
            {...stagger(0.4)}
            className="mt-16 bg-[#1a1a1a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { num: '2,298+', label: 'qualified demos booked' },
              { num: '£18M+', label: 'pipeline generated for clients' },
              { num: '6', label: 'languages, native speakers' },
              { num: '30', label: 'demos in 90 days, guaranteed' },
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
                Most lead gen agencies work across 50+ industries. They rotate your account between junior reps who can't tell a WMS from a TMS. Your buyers hear it instantly — and they hang up.
              </motion.p>
              <motion.p {...stagger(0.25)} className="text-stone-600 leading-relaxed mb-4">
                We made a different bet. We chose one vertical and went deep. Every caller, every script, every contact list, every piece of intelligence we've gathered across years of campaigns in this space — it all compounds. When our caller picks up the phone, they can hold a real conversation about freight management, procurement workflows, or supply chain visibility.
              </motion.p>
              <motion.p {...stagger(0.3)} className="text-stone-600 leading-relaxed">
                The result: we know what works before we start. We know which titles pick up, which pain points land, which markets respond to calling vs. email, and which objections to expect. That's not something a generalist agency can offer you.
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
                  desc: 'We only work in supply chain, logistics, and procurement SaaS. That\'s it. Every campaign makes the next one better.',
                },
                {
                  num: '02',
                  title: 'Cross-client intelligence',
                  desc: 'Running concurrent campaigns in the same vertical means we see patterns no single-client agency can.',
                },
                {
                  num: '03',
                  title: 'Domain-trained callers',
                  desc: 'Our callers are briefed on your product, your competitive landscape, and your buyers\' day-to-day problems.',
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

      {/* Founder Section */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Founder visual */}
            <motion.div
              {...fadeUp}
              className="bg-stone-200/60 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-300/50" />
              <div className="relative text-center">
                <div className="font-serif text-5xl text-stone-400/50 mb-2">C</div>
                <div className="text-xs text-stone-400 tracking-widest uppercase">Founder photo</div>
              </div>
            </motion.div>

            {/* Founder content */}
            <div>
              <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                Founder
              </motion.div>
              <motion.div {...stagger(0.1)} className="font-serif text-3xl mb-1">Christian</motion.div>
              <motion.div {...stagger(0.15)} className="text-sm text-stone-400 mb-6">Founder, Lynn Lead Generation</motion.div>

              <motion.p {...stagger(0.2)} className="text-stone-600 leading-relaxed mb-4">
                [This is where your story goes. Why did you start Lynn? What were you doing before? What made you realise that supply chain SaaS companies were being underserved by generalist agencies? What's the moment that made you decide to go all-in on one niche?]
              </motion.p>
              <motion.p {...stagger(0.25)} className="text-stone-600 leading-relaxed mb-4">
                [Talk about what drives you — the obsession with results, the decision to put a guarantee on it, the choice to stay founder-led on every account instead of handing clients off to junior AMs. This is the section where enterprise buyers decide whether they trust you.]
              </motion.p>
              <motion.p {...stagger(0.3)} className="text-stone-600 leading-relaxed mb-8">
                [Keep it honest and direct. No corporate fluff. The people reading this are senior leaders who can spot inauthenticity immediately.]
              </motion.p>

              <motion.div {...stagger(0.35)} className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/lynn-lead-gen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#C5A059] border border-[#C5A059] px-5 py-2.5 rounded-xl hover:bg-[#C5A059]/10 transition-colors"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://calendly.com/george-lynn-lead-gen/strategy-session-w?month=2026-04" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-white bg-[#1a1a1a] px-5 py-2.5 rounded-xl hover:bg-stone-800 transition-colors"
                >
                  Book a call with me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
            How We're Different
          </motion.div>
          <motion.h2 {...stagger(0.1)} className="font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-2xl">
            Six things that separate Lynn from every other{' '}
            <span className="text-[#C5A059] font-normal">agency.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                title: 'Founder on every account',
                desc: 'No junior account managers. No layers. You work directly with the person who built this agency and understands your business.',
              },
              {
                num: '02',
                title: 'Human callers, not AI',
                desc: 'Every call is made by a real person. 200+ dials per day, per caller. Your buyers can tell the difference — and so can your conversion rates.',
              },
              {
                num: '03',
                title: '30-meeting guarantee',
                desc: '30 qualified, attended demos in 90 days. If we don\'t hit it, we keep working at no extra cost for up to 45 more days. In writing.',
              },
              {
                num: '04',
                title: 'Multilingual from day one',
                desc: 'English, French, German, Spanish, Italian, Portuguese. Native speakers, not translators. Reach markets your competitors can\'t.',
              },
              {
                num: '05',
                title: 'Live in 2 weeks',
                desc: 'No 3-month onboarding. Callers are trained and on the phones within 14 days. First meetings typically land in week 3.',
              },
              {
                num: '06',
                title: 'Calling-first approach',
                desc: 'Most agencies lead with email. We lead with the phone — because a 3-minute conversation beats a 2% reply rate every time.',
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

      {/* Caller Bench — Dark Section */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-6">
                Our Caller Bench
              </motion.div>
              <motion.h2 {...stagger(0.1)} className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Native speakers who understand your{' '}
                <span className="text-[#C5A059] font-normal">buyers.</span>
              </motion.h2>
              <motion.p {...stagger(0.2)} className="text-stone-400 leading-relaxed mb-4">
                We don't hire generalist SDRs and hand them a script. Every caller is recruited for native fluency in their language and trained specifically on supply chain, logistics, and procurement SaaS.
              </motion.p>
              <motion.p {...stagger(0.25)} className="text-stone-400 leading-relaxed mb-8">
                When a French VP of Supply Chain picks up the phone, they hear someone who speaks their language — literally and technically. That changes the conversation entirely.
              </motion.p>

              {/* Stats */}
              <motion.div {...stagger(0.3)} className="grid grid-cols-2 gap-3">
                {[
                  { num: '200+', label: 'dials per day per caller' },
                  { num: 'Ready', label: 'callers available from day one' },
                  { num: '0', label: 'AI-generated calls — ever' },
                  { num: 'Scales', label: 'up the moment you need more' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="font-serif text-2xl text-white leading-none mb-1">{s.num}</div>
                    <div className="text-[11px] text-stone-500">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Language Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {[
                { code: 'EN', name: 'English', detail: 'UK, US, Global' },
                { code: 'FR', name: 'French', detail: 'France, Benelux' },
                { code: 'DE', name: 'German', detail: 'DACH region' },
                { code: 'ES', name: 'Spanish', detail: 'Spain, LATAM' },
                { code: 'IT', name: 'Italian', detail: 'Italy' },
                { code: 'PT', name: 'Portuguese', detail: 'Portugal, Brazil' },
              ].map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#C5A059]/30 transition-colors"
                >
                  <div className="font-serif text-3xl text-[#C5A059]/70 mb-2">{lang.code}</div>
                  <div className="font-semibold text-sm text-white mb-0.5">{lang.name}</div>
                  <div className="text-[11px] text-stone-500">{lang.detail}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work / Values */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
            How We Work
          </motion.div>
          <motion.h2 {...stagger(0.1)} className="font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-2xl">
            What it's actually like to work{' '}
            <span className="text-[#C5A059] font-normal">with us.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: '01',
                title: 'Direct communication, always',
                desc: 'No ticket systems, no account managers relaying messages. You talk directly to the founder and the people running your campaign. Decisions happen in hours, not days.',
              },
              {
                num: '02',
                title: 'Honest about what works',
                desc: 'If something isn\'t working, we tell you. If your ICP needs adjusting, we say so. If we\'re not the right fit, we tell you that too — before you sign anything.',
              },
              {
                num: '03',
                title: 'We adapt quickly',
                desc: 'Market not responding? We shift. Script not landing? We rewrite it. New target vertical? We build the list. No fighting through layers of process.',
              },
              {
                num: '04',
                title: 'Results over activity',
                desc: 'We don\'t send you reports packed with vanity metrics. We measure qualified, attended demos with named decision-makers. Everything else is noise.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 flex gap-5 items-start hover:border-[#C5A059]/30 transition-colors"
              >
                <div className="font-serif text-2xl text-stone-200 shrink-0 leading-none">{value.num}</div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">{value.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{value.desc}</p>
                </div>
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
