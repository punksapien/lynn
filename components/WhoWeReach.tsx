import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from './CountUp';

export const WhoWeReach = () => {
  return (
    <section id="who-we-reach" className="py-16 bg-[#F9F8F4]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Who We Reach</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6 tracking-tight max-w-3xl">
            Enterprise accounts. <span className="text-[#C5A059]">Senior</span> decision-makers.
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl leading-relaxed">
            We book meetings into the world's largest freight operators, manufacturers, and procurement organisations - and we get straight to the people with the budget and authority to buy your software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] uppercase tracking-wider font-bold rounded-full mb-6">FREIGHT & LOGISTICS</div>
            <h3 className="text-xl font-serif font-medium text-[#1a1a1a] mb-3">Global 3PLs, freight forwarders & carriers</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">Enterprise operators managing complex transport networks across road, air, and sea</p>
            
            <div className="text-[10px] font-bold tracking-[0.1em] text-stone-400 uppercase mb-3">Examples</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Kuehne+Nagel', 'DB Schenker', 'DSV', 'XPO Logistics', 'DHL Supply Chain', 'Geodis'].map(c => (
                <span key={c} className="text-xs px-2.5 py-1 border border-stone-200 rounded-md text-stone-600 bg-[#F9F8F4]">{c}</span>
              ))}
            </div>
            
            <div className="text-[10px] font-bold tracking-[0.1em] text-stone-400 uppercase mb-3">Titles We Book</div>
            <ul className="space-y-0">
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Chief Operations Officer</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium tracking-wide">C-suite</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Chief Logistics Officer</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium tracking-wide">C-suite</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>VP Freight & Transport</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium tracking-wide">VP</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>VP Supply Chain</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium tracking-wide">VP</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Director of Logistics</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium tracking-wide">Director</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Head of Operations</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium tracking-wide">Head of</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-[10px] uppercase tracking-wider font-bold rounded-full mb-6">MANUFACTURING & INDUSTRIAL</div>
            <h3 className="text-xl font-serif font-medium text-[#1a1a1a] mb-3">Large-scale manufacturers with complex supply chains</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">Industrials running multi-site production, global sourcing, and distribution at scale</p>
            
            <div className="text-[10px] font-bold tracking-[0.1em] text-stone-400 uppercase mb-3">Examples</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Siemens', 'ABB', 'Volvo Group', 'Caterpillar', 'Saint-Gobain', 'Schneider Electric'].map(c => (
                <span key={c} className="text-xs px-2.5 py-1 border border-stone-200 rounded-md text-stone-600 bg-[#F9F8F4]">{c}</span>
              ))}
            </div>
            
            <div className="text-[10px] font-bold tracking-[0.1em] text-stone-400 uppercase mb-3">Titles We Book</div>
            <ul className="space-y-0">
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Chief Supply Chain Officer</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium tracking-wide">C-suite</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Chief Procurement Officer</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium tracking-wide">C-suite</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>VP Global Sourcing</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium tracking-wide">VP</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>VP Operations</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium tracking-wide">VP</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Director of Procurement</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium tracking-wide">Director</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Head of Indirect Spend</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium tracking-wide">Head of</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }} 
            className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] uppercase tracking-wider font-bold rounded-full mb-6">RETAIL & CONSUMER GOODS</div>
            <h3 className="text-xl font-serif font-medium text-[#1a1a1a] mb-3">Retailers & FMCG companies managing high-volume supply chains</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">Operators under constant pressure on demand planning, inventory, and supplier management</p>
            
            <div className="text-[10px] font-bold tracking-[0.1em] text-stone-400 uppercase mb-3">Examples</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Unilever', 'Nestlé', 'Carrefour', 'Tesco', 'Henkel', 'Danone'].map(c => (
                <span key={c} className="text-xs px-2.5 py-1 border border-stone-200 rounded-md text-stone-600 bg-[#F9F8F4]">{c}</span>
              ))}
            </div>
            
            <div className="text-[10px] font-bold tracking-[0.1em] text-stone-400 uppercase mb-3">Titles We Book</div>
            <ul className="space-y-0">
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Chief Supply Chain Officer</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium tracking-wide">C-suite</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Chief Operations Officer</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium tracking-wide">C-suite</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>VP Demand Planning</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium tracking-wide">VP</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>VP Inventory Management</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium tracking-wide">VP</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Director of Supply Chain</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium tracking-wide">Director</span>
              </li>
              <li className="flex justify-between items-center py-2 border-t border-stone-100 text-sm text-stone-700">
                <span>Head of S&OP</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium tracking-wide">Head of</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 text-white grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: 2298, prefix: '', suffix: '+', label: 'qualified demos booked for clients' },
            { stat: 18, prefix: '£', suffix: 'M+', label: 'new pipeline generated' },
            { stat: 'C-suite to Head of', isText: true, label: 'seniority verified before every booking' },
            { stat: 'ICP-matched', isText: true, label: 'every contact checked against your ideal profile' }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-3xl font-serif text-[#C5A059] mb-2">
                {item.isText ? item.stat : `${item.prefix}${item.stat.toLocaleString()}${item.suffix}`}
              </div>
              <div className="text-xs text-stone-400 leading-relaxed">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
