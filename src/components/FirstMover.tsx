import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { CountUp } from './CountUp';

export const FirstMover = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="first-mover" className="py-16 bg-white border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="lg:sticky lg:top-40 lg:h-fit">
            <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">First Mover Advantage</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6 tracking-tight leading-tight">
              The first vendor in the room <span className="text-[#C5A059]">almost always wins.</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Enterprise supply chain deals run anywhere from <strong>130 days to over a year</strong>, and involve more than a dozen internal stakeholders. Once a competitor is sitting in that evaluation, displacing them is extraordinarily difficult. The company that gets there first shapes the criteria, the shortlist, and ultimately the decision.
            </p>
            
            <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
              <p className="text-lg font-medium mb-4">Lynn reaches 90% of your addressable market before your competitors do.</p>
              <p className="text-stone-400 leading-relaxed">We're reaching out to your target accounts right now — the only question is whether they hear from you first, or someone else.</p>
            </div>
          </div>
          
          <div className="pt-10 pb-8">
            <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">A Typical Enterprise Deal - Who Gets There First</div>
            <div className="inline-block bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-12">130–170 day cycle</div>
            
            <div className="relative border-l border-stone-200 ml-4 space-y-16 pb-4">
              {/* Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                className="relative pl-8"
              >
                <motion.div
                  onViewportEnter={() => setActiveStep(1)}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute -left-4 top-0"
                >
                  <motion.div 
                    animate={{ 
                      backgroundColor: activeStep === 1 ? '#C5A059' : '#1a1a1a',
                      scale: activeStep === 1 ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-sm"
                  >
                    1
                  </motion.div>
                </motion.div>
                <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Day 1 - Lynn Books The Meeting</div>
                <div className="font-semibold text-[#1a1a1a] text-lg mb-2">You're first in the room</div>
                <div className="text-sm text-stone-600 leading-relaxed mb-3">Your AE runs discovery with the VP Supply Chain before any competitor has made contact. You set the agenda, uncover the real pain, and start building trust.</div>
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">First mover advantage secured</span>
              </motion.div>
              
              {/* Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                className="relative pl-8"
              >
                <motion.div
                  onViewportEnter={() => setActiveStep(2)}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute -left-4 top-0"
                >
                  <motion.div 
                    animate={{ 
                      backgroundColor: activeStep === 2 ? '#C5A059' : '#1a1a1a',
                      scale: activeStep === 2 ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-sm"
                  >
                    2
                  </motion.div>
                </motion.div>
                <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Weeks 4–8 - Evaluation Begins</div>
                <div className="font-semibold text-[#1a1a1a] text-lg mb-2">You shape the shortlist</div>
                <div className="text-sm text-stone-600 leading-relaxed">Because you were first, you've already influenced how they think about the problem - and what they look for in a solution. Competitors enter the evaluation on your terms.</div>
              </motion.div>
              
              {/* Item 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                className="relative pl-8"
              >
                <motion.div
                  onViewportEnter={() => setActiveStep(3)}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute -left-4 top-0"
                >
                  <motion.div 
                    animate={{ 
                      backgroundColor: activeStep === 3 ? '#C5A059' : '#1a1a1a',
                      scale: activeStep === 3 ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-sm"
                  >
                    3
                  </motion.div>
                </motion.div>
                <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Weeks 8–20 - Late-Stage</div>
                <div className="font-semibold text-[#1a1a1a] text-lg mb-2">Competitors arrive - too late</div>
                <div className="text-sm text-stone-600 leading-relaxed">Other vendors finally reach out. Stakeholders are already deep in your evaluation. Displacing an incumbent mid-process is rare - the switching cost in time and political capital is too high.</div>
              </motion.div>
              
              {/* Item 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                className="relative pl-8"
              >
                <motion.div
                  onViewportEnter={() => setActiveStep(4)}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute -left-4 top-0"
                >
                  <motion.div 
                    animate={{ 
                      backgroundColor: activeStep === 4 ? '#059669' : '#1a1a1a',
                      scale: activeStep === 4 ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-sm"
                  >
                    <Check size={16} />
                  </motion.div>
                </motion.div>
                <div className="text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1">Close</div>
                <div className="font-semibold text-[#1a1a1a] text-lg mb-1">Deal closed - before the room got crowded</div>
                <div className="text-sm font-medium text-red-600">The vendor who arrived last never had a chance.</div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
            <div className="text-xs font-bold text-red-600 uppercase mb-4">The cost of being second</div>
            <div className="font-serif text-5xl text-[#1a1a1a] mb-2">
              <CountUp end={90} suffix="%" />
            </div>
            <div className="font-semibold text-[#1a1a1a] mb-4">of your market is unreached right now</div>
            <div className="text-sm text-stone-600 leading-relaxed">Every day without an outbound engine running is a day a competitor is getting into those accounts ahead of you. The market doesn't wait.</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <div className="text-xs font-bold text-blue-600 uppercase mb-4">The Lynn advantage</div>
            <div className="font-serif text-5xl text-[#1a1a1a] mb-2">
              <CountUp end={200} suffix="+" />
            </div>
            <div className="font-semibold text-[#1a1a1a] mb-4">precision dials and targeted email sequences into your market, every day</div>
            <div className="text-sm text-stone-600 leading-relaxed">While your team focuses on deals in motion, Lynn is reaching your full addressable market by phone and email — ensuring you're consistently first to the table.</div>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-2xl p-8 text-white">
            <div className="text-xs font-bold text-stone-400 uppercase mb-4">The guarantee</div>
            <div className="font-serif text-5xl mb-2">15-30 demos</div>
            <div className="font-semibold mb-4">in 90 days — or we keep working</div>
            <div className="text-sm text-stone-400 leading-relaxed">Between fifteen and thirty first conversations with decision-makers who fit your ICP. At your average deal size, it takes one closed deal to pay for the programme many times over. Guaranteed.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
