import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-stone-400 py-16 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="border border-stone-800 rounded-2xl p-10 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
            {/* Logo block */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/dark_logo.png" alt="Lynn" className="h-16 w-auto" />
                <span className="font-serif font-normal text-xl text-stone-400 tracking-tight">Lynn Lead Gen</span>
              </div>
              <div className="border-t border-stone-700 pt-5">
                <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                  The only outbound agency built exclusively for supply chain, logistics, and procurement software. UK-based, operating globally.
                </p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/case-studies" className="hover:text-white transition-colors">Case studies</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="text-white font-medium mb-4">Free Tools</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/roi-calculator" className="hover:text-white transition-colors">Free ROI Calculator</a></li>
                <li><a href="/market-scanner" className="hover:text-white transition-colors">Free Market Scanner Tool</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a strategy call</a></li>
                <li><a href="mailto:info@lynnleadgen.com" className="hover:text-white transition-colors">info@lynnleadgen.com</a></li>
                <li><a href="https://www.linkedin.com/company/lynn-lead-gen/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Lynn Lead Generation Ltd. Company No. 15427579 | Registered in England & Wales.</span>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/gdpr" className="hover:text-white transition-colors">GDPR</a>
            <span className="tracking-widest uppercase">EN · DE · FR · IT · ES · PT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
