import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calculator, BarChart3 } from 'lucide-react';

export const Nav: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2.5 cursor-pointer no-underline">
            <img src="/assets/light_logo.jpeg" alt="Lynn" className="h-10 w-auto" />
            <span className="font-serif font-normal text-xl tracking-tight text-[#1a1a1a]">Lynn Lead Gen</span>
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-stone-600">
            {[
              { label: 'Case Studies', href: '/case-studies', active: currentPath === '/case-studies' || currentPath.startsWith('/case-study/') },
              { label: 'About', href: '/about', active: currentPath === '/about' },
              { label: 'Resources', href: '/resources', active: currentPath === '/resources' || currentPath.startsWith('/resources/') },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors cursor-pointer ${link.active ? 'text-[#C5A059]' : 'hover:text-[#C5A059]'}`}
              >
                {link.label}
              </a>
            ))}

            {/* Tools dropdown */}
            <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
              <button
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  currentPath === '/roi-calculator' || currentPath === '/market-scanner' ? 'text-[#C5A059]' : 'hover:text-[#C5A059]'
                }`}
              >
                Tools <ChevronDown size={14} className={`transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl border border-stone-200 shadow-xl overflow-hidden"
                  >
                    <a
                      href="/roi-calculator"
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-stone-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C5A059]/20 transition-colors">
                        <Calculator size={16} className="text-[#C5A059]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#1a1a1a] text-sm">ROI Calculator</div>
                        <div className="text-xs text-stone-400 mt-0.5">Calculate your return on outbound</div>
                      </div>
                    </a>
                    <div className="border-t border-stone-100" />
                    <a
                      href="/market-scanner"
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-stone-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C5A059]/20 transition-colors">
                        <BarChart3 size={16} className="text-[#C5A059]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#1a1a1a] text-sm">Market Scanner</div>
                        <div className="text-xs text-stone-400 mt-0.5">Size your addressable market</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Book a call
            </a>
          </div>

          <button className="md:hidden text-[#1a1a1a] p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Home</a>
            <a href="/case-studies" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Case Studies</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">About</a>
            <a href="/resources" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Resources</a>
            <a href="/roi-calculator" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer text-base text-stone-400">ROI Calculator</a>
            <a href="/market-scanner" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer text-base text-stone-400">Market Scanner</a>
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full shadow-lg cursor-pointer mt-4"
            >
              Book a call
            </a>
        </div>
      )}
    </>
  );
};

export default Nav;
