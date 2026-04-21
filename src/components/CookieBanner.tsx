import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lynn-cookie-consent');
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('lynn-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('lynn-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1a1a1a] border border-stone-700 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
              <p className="text-sm text-stone-300 flex-1">
                We use cookies to improve your experience. See our{' '}
                <a href="/privacy" className="text-[#C5A059] hover:underline">Privacy Policy</a> for details.
              </p>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={decline}
                  className="px-4 py-2 text-sm text-stone-400 hover:text-white transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="px-5 py-2 bg-white text-[#1a1a1a] text-sm font-medium rounded-full hover:bg-stone-200 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
