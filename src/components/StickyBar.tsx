import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      setScrollPercent((scrollTop / (documentHeight - windowHeight)) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrollPercent > 60 && scrollPercent < 92 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] py-4 px-6"
        >
          <div className="container mx-auto max-w-6xl flex justify-between items-center">
            <div className="text-sm font-medium text-[#1a1a1a] hidden sm:block">Qualified demos, guaranteed.</div>
            <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-8 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
              Book a call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
