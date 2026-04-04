import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">How We Compare</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6 tracking-tight">
            Why clients choose Lynn over <span className="italic text-[#C5A059]">everyone else.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            There are plenty of outbound agencies. Most are generalists running the same playbook for any SaaS company that will have them. Lynn is built for one market, and one market only - and that specificity shows up in every part of how we operate.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-stone-200 text-stone-500 font-semibold text-xs tracking-widest uppercase w-1/4">Category</th>
                <th className="p-4 border-b-2 border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold text-sm tracking-widest uppercase w-1/4 rounded-t-xl">▪ Lynn</th>
                <th className="p-4 border-b-2 border-stone-200 text-stone-700 font-semibold text-xs tracking-widest uppercase w-1/4">Generic SDR Agencies</th>
                <th className="p-4 border-b-2 border-stone-200 text-stone-700 font-semibold text-xs tracking-widest uppercase w-1/4">In-house SDR Team</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr><td colSpan={4} className="px-4 py-3 bg-[#F9F8F4] text-[10px] font-bold tracking-[0.12em] text-stone-400 uppercase">Specialisation</td></tr>
              <tr>
                <td className="p-4 border-b border-stone-100 font-semibold text-stone-800">Vertical focus</td>
                <td className="p-4 border-b border-stone-200 bg-emerald-50/30">
                  <div className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">Supply chain, logistics & procurement workflows - exclusively</div>
                      <div className="text-xs text-stone-600 leading-relaxed">Every caller, script, and sequence is built for this vertical and nothing else.</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Generalist - rotates callers across any SaaS vertical</div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <Minus className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Depends on who you hire - domain expertise rare and expensive</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-stone-100 font-semibold text-stone-800">Buyer knowledge</td>
                <td className="p-4 border-b border-stone-200 bg-emerald-50/30">
                  <div className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">Callers understand TMS, WMS, S&OP, and procurement workflows</div>
                      <div className="text-xs text-stone-600 leading-relaxed">Built through hundreds of thousands of dials in this exact buyer universe.</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Brief trained only - buyers see through it within 30 seconds</div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <Minus className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Possible - but takes 6+ months to hire and walks out with every leaver</div>
                  </div>
                </td>
              </tr>

              <tr><td colSpan={4} className="px-4 py-3 bg-[#F9F8F4] text-[10px] font-bold tracking-[0.12em] text-stone-400 uppercase">Coverage</td></tr>
              <tr>
                <td className="p-4 border-b border-stone-100 font-semibold text-stone-800">European languages</td>
                <td className="p-4 border-b border-stone-200 bg-emerald-50/30">
                  <div className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">English, French, German, Spanish, Italian, Portuguese - natively</div>
                      <div className="text-xs text-stone-600 leading-relaxed">Not translated scripts - trained native speakers in each market.</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">English only, or language capacity at extra cost</div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <Minus className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Expensive to hire multilingual SDRs locally across multiple markets</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-stone-100 font-semibold text-stone-800">Daily call volume</td>
                <td className="p-4 border-b border-stone-200 bg-emerald-50/30">
                  <div className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">200+ precision dials per caller, per day</div>
                      <div className="text-xs text-stone-600 leading-relaxed">Into your named ICP accounts - not spray-and-pray volumes.</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Variable - volume often prioritised over ICP targeting accuracy</div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <Minus className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">40–60 dials per day per rep - capacity limited by headcount</div>
                  </div>
                </td>
              </tr>

              <tr><td colSpan={4} className="px-4 py-3 bg-[#F9F8F4] text-[10px] font-bold tracking-[0.12em] text-stone-400 uppercase">Commitment & Risk</td></tr>
              <tr>
                <td className="p-4 border-b border-stone-100 font-semibold text-stone-800">Results guarantee</td>
                <td className="p-4 border-b border-stone-200 bg-emerald-50/30">
                  <div className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">30 qualified demos in 90 days - we keep working</div>
                      <div className="text-xs text-stone-600 leading-relaxed">A specific number, a specific deadline, no wiggle room.</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">Effort guaranteed, outcomes not - activity reports, not results</div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <Minus className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">No guarantee - and costs continue regardless of output</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-stone-100 font-semibold text-stone-800 rounded-bl-xl">Time to first meeting</td>
                <td className="p-4 border-b border-stone-200 bg-emerald-50/30 rounded-br-xl">
                  <div className="flex gap-2 items-start">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-800 mb-1">Week 3 - no ramp, no recruitment delay</div>
                      <div className="text-xs text-stone-600 leading-relaxed">Calling begins in week one, first bookings typically arrive by week three.</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">4–8 weeks typical onboarding before results begin</div>
                  </div>
                </td>
                <td className="p-4 border-b border-stone-100">
                  <div className="flex gap-2 items-start">
                    <Minus className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-600 leading-relaxed mt-0.5">4–6 month ramp before a new SDR operates at full productivity</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif text-[#1a1a1a] mb-2">Still evaluating your options?</h3>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">Book a 20-minute call. We'll tell you honestly whether we're the right fit — and if we're not, we'll point you to someone who is.</p>
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-stone-200 text-[#1a1a1a] rounded-xl text-sm font-medium tracking-wide hover:bg-stone-50 transition-all shadow-sm">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};
