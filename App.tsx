
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Globe, Calendar, ArrowUpRight, Menu, X } from 'lucide-react';
import { CalendarUI } from './components/CalendarUI';
import { WhoWeReach } from './components/WhoWeReach';
import { FirstMover } from './components/FirstMover';
import { Pipeline } from './components/Pipeline';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { AboutPage } from './components/AboutPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { CaseStudyDetailPage } from './components/CaseStudyDetailPage';
import { ResourcesPage } from './components/ResourcesPage';
import { CaseStudyCarousel } from './components/CaseStudyCarousel';
import { ROICalculatorPage } from './components/ROICalculatorPage';
import { MarketScannerPage } from './components/MarketScannerPage';

import { CountUp } from './components/CountUp';

const words = ["Supply Chain SaaS", "Logistics SaaS", "Procurement SaaS"];

const useHashRoute = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  useEffect(() => {
    const onHashChange = () => {
      const newRoute = window.location.hash || '#/';
      setRoute(newRoute);
      if (newRoute.startsWith('#/')) {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return route;
};

const App: React.FC = () => {
  const route = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercent(scrollPercentage);
    };
    window.addEventListener('scroll', handleScroll);
    
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#1a1a1a] selection:bg-[#C5A059] selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#/" className="flex items-center gap-2.5 cursor-pointer no-underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/light_logo.jpeg" alt="Lynn" className="h-10 w-auto" />
            <span className="font-serif font-bold text-xl tracking-tight text-[#1a1a1a]">Lynn Lead Gen</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-stone-600">
            {[
              { label: 'Case Studies', href: '#/case-studies', active: route === '#/case-studies' || route.startsWith('#/case-study/') },
              { label: 'About', href: '#/about', active: route === '#/about' },
              { label: 'Resources', href: '#/resources', active: route === '#/resources' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors cursor-pointer ${link.active ? 'text-[#C5A059]' : 'hover:text-[#C5A059]'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={scrollToSection('contact')}
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
            <a href="#/" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Home</a>
            <a href="#/case-studies" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Case Studies</a>
            <a href="#/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">About</a>
            <a href="#/resources" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Resources</a>
            <a
              href="#contact"
              onClick={scrollToSection('contact')}
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full shadow-lg cursor-pointer mt-4"
            >
              Book a call
            </a>
        </div>
      )}

      <main>
        {route === '#/about' ? (
          <AboutPage />
        ) : route === '#/case-studies' ? (
          <CaseStudiesPage />
        ) : route === '#/resources' ? (
          <ResourcesPage />
        ) : route === '#/roi-calculator' ? (
          <ROICalculatorPage />
        ) : route === '#/market-scanner' ? (
          <MarketScannerPage />
        ) : route.startsWith('#/case-study/') ? (
          <CaseStudyDetailPage key={route} slug={route.replace('#/case-study/', '')} />
        ) : (
        <>
        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
          {/* Subtle atmospheric background elements */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-stone-300/20 rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] xl:grid-cols-[1fr_1.5fr] gap-12 lg:gap-12 items-center">
              {/* Left Column: Copy */}
              <div className="flex flex-col items-start text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-2 mb-8 text-sm font-medium text-stone-500"
                >
                  <span>We help generating leads in</span>
                  <div className="relative h-6 overflow-hidden w-40">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 italic text-[#8c3b3b]"
                      >
                        {words[currentWord]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-[#1a1a1a] max-w-xl xl:max-w-2xl mb-6 tracking-tight"
                >
                  Your sales team deserves a <span className="italic text-[#C5A059] font-normal">full calendar.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8"
                >
                  Lynn is the only outbound agency built exclusively for <strong>Supply Chain, Logistics, and Procurement SaaS</strong> - with domain-trained callers who speak your buyers' language, literally and technically, across Europe.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5 flex gap-4 items-start mb-8 w-full max-w-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a1a] mb-1">30 qualified demos in 90 days - guaranteed</div>
                    <div className="text-sm text-stone-600">If we don't hit it, we keep working at no extra cost. No other agency in this space commits to a number. We do.</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-2 mb-10 text-sm text-stone-600"
                >
                  <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">✓</span> First meetings in week 3</div>
                  <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">✓</span> Human callers in 6 European languages, natively</div>
                  <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">✓</span> 200+ precision dials per day</div>
                  <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">✓</span> No long-term lock-in</div>
                  <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">✓</span> We supply all the data - no list-building on your end</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <a href="#contact" onClick={scrollToSection('contact')} className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-sm font-medium tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
                    Book a strategy call
                  </a>
                  <a href="#pipeline" onClick={scrollToSection('pipeline')} className="text-sm font-medium text-[#C5A059] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    See our process <ArrowRight size={16} />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Calendar UI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] z-20"
                style={{ perspective: '1200px' }}
              >
                <div className="w-full h-full" style={{ transform: 'rotateY(-2deg) rotateX(1deg)' }}>
                  <CalendarUI />
                </div>
              </motion.div>
            </div>

            {/* Logo Bar — infinite scroll */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-24 pt-12 border-t border-stone-200"
            >
              <div className="text-center text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-8">Trusted by supply chain SaaS companies across Europe</div>
              <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F8F4] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9F8F4] to-transparent z-10 pointer-events-none" />
                <div className="flex animate-scroll-logos">
                  {[...Array(2)].map((_, setIdx) => (
                    <div key={setIdx} className="flex shrink-0 items-center gap-16 px-8">
                      {[
                        { name: 'Alpega Group', logo: '/assets/brand_alpega.avif' },
                        { name: 'Mintec', logo: '/assets/brand_mintec.avif' },
                        { name: 'Easy4Pro', logo: null },
                        { name: 'Descartes', logo: null },
                        { name: 'WowFlow', logo: null },
                        { name: 'Teamlearn', logo: null },
                        { name: 'Tendereasy', logo: null },
                        { name: 'SmartBooking', logo: null },
                      ].map((brand, i) => (
                        <div key={i} className="shrink-0 flex items-center justify-center h-16 opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500">
                          {brand.logo ? (
                            <img src={brand.logo} alt={brand.name} className="h-14 w-auto object-contain" />
                          ) : (
                            <span className="font-serif text-xl md:text-2xl font-bold text-stone-800 whitespace-nowrap">{brand.name}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Guarantee Section */}
        <section id="guarantee" className="py-24 bg-[#1a1a1a] text-[#F9F8F4]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wider font-bold rounded-full mb-6">THE GUARANTEE</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  30 qualified demos. 90 days.<br/>
                  <span className="text-[#C5A059] italic font-normal">Or we keep going.</span>
                </h2>
                <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                  If we don't hit 30 demos in 90 days - we work at no extra cost until you get them.
                </p>
                <div className="bg-stone-900 border border-stone-800 p-6 rounded-xl mb-10">
                  <p className="text-stone-300 leading-relaxed">
                    No retainer agencies hedging with "activity reports." A specific number, a specific deadline, and a written guarantee.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  <a href="#contact" onClick={scrollToSection('contact')} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] rounded-xl text-sm font-medium tracking-wide hover:bg-stone-200 transition-all shadow-lg">
                    Book a strategy call
                  </a>
                  <a href="#pipeline" onClick={scrollToSection('pipeline')} className="text-sm font-medium text-stone-400 hover:text-white transition-colors flex items-center gap-2">
                    See how it works <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { logo: 'Alpega', stat: 280 },
                  { logo: 'Mintec', stat: 151 },
                  { logo: 'Easy4Pro', stat: 73 }
                ].map((proof, i) => (
                  <div key={i} className="bg-stone-900 border border-stone-800 p-6 rounded-2xl text-center">
                    <div className="font-serif text-xl font-bold text-stone-300 mb-4">{proof.logo}</div>
                    <div className="text-4xl font-serif text-[#C5A059] mb-2">
                      <CountUp end={proof.stat} />
                    </div>
                    <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">Demos booked</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhoWeReach />
        <FirstMover />

        {/* Pipeline Visualization Section */}
        <section className="py-24 md:py-32 bg-white relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block mb-4 text-xs font-bold tracking-widest text-stone-400 uppercase">The Process</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight mb-6">Precision <span className="italic text-stone-400 font-normal">and</span> Speed.</h2>
              <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
                We don't rely on passive email campaigns. We build highly targeted lists and hit the phones. Native speakers, high volume, relentless execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  step: 1,
                  icon: <Phone size={22} />,
                  title: '200+ Dials Per Day',
                  desc: 'Outbound calling is our primary weapon. We bypass the crowded inbox and speak directly to decision-makers.',
                  highlight: false,
                },
                {
                  step: 2,
                  icon: <Globe size={22} />,
                  title: 'Native Language',
                  desc: 'Our callers are native speakers across 6 European languages. We build rapport instantly, no matter the region.',
                  highlight: false,
                },
                {
                  step: 3,
                  icon: <Calendar size={22} />,
                  title: '30 Guaranteed Demos',
                  desc: 'Within 90 days, your calendar is full of qualified prospects ready to discuss your SaaS solution.',
                  highlight: true,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  className={`relative rounded-2xl p-8 md:p-10 border transition-all duration-500 group hover:shadow-lg ${
                    item.highlight
                      ? 'bg-[#1a1a1a] text-white border-stone-800'
                      : 'bg-[#F9F8F4] text-[#1a1a1a] border-stone-200 hover:border-[#C5A059]/30'
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
                  )}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                      item.highlight ? 'bg-white/10 text-[#C5A059]' : 'bg-white text-[#C5A059] shadow-sm border border-stone-100'
                    }`}>
                      {item.icon}
                    </div>
                    <div className={`text-xs font-bold tracking-widest uppercase ${item.highlight ? 'text-[#C5A059]' : 'text-stone-500'}`}>
                      Step {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 relative z-10">{item.title}</h3>
                  <p className={`leading-relaxed relative z-10 ${item.highlight ? 'text-stone-400' : 'text-stone-500'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Pipeline />

        {/* Case Studies Carousel */}
        <CaseStudyCarousel scrollToSection={scrollToSection} />

        <Comparison />
        <FAQ />

        {/* CTA Section */}
        <section id="contact" className="py-32 bg-white border-t border-stone-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-[#1a1a1a] mb-8 leading-tight">Your sales team deserves a full calendar.</h2>
            <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto mb-12">
              30 qualified demos in 90 days. If we don't hit it, we keep working until we do. Book a call and we'll show you exactly how it works for your market.
            </p>
            <a href="#contact" onClick={scrollToSection('contact')} className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white rounded-full text-base font-medium tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
              Book your strategy call →
            </a>
          </div>
        </section>
        </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-6">
          <div className="border border-stone-800 rounded-2xl p-10 md:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
              {/* Logo block */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src="/assets/dark_logo.png" alt="Lynn" className="h-16 w-auto" />
                  <span className="font-serif font-bold text-2xl text-white tracking-tight">Lynn Lead Gen</span>
                </div>
                <div className="border-t border-stone-700 pt-5">
                  <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
                    The only outbound lead generation agency built exclusively for supply chain, logistics, and procurement SaaS.
                  </p>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-white font-medium mb-4">Links</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><a href="#/case-studies" className="hover:text-white transition-colors">Case studies</a></li>
                  <li><a href="#/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#/resources" className="hover:text-white transition-colors">Resources</a></li>
                </ul>
              </div>

              {/* Free Tools */}
              <div>
                <h4 className="text-white font-medium mb-4">Free Tools</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><a href="#/roi-calculator" className="hover:text-white transition-colors">Free ROI Calculator</a></li>
                  <li><a href="#/market-scanner" className="hover:text-white transition-colors">Free Market Scanner Tool</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-medium mb-4">Contact</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><a href="#contact" className="hover:text-white transition-colors">Book a strategy call</a></li>
                  <li><a href="mailto:christian@lynnleadgen.com" className="hover:text-white transition-colors">christian@lynnleadgen.com</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Lynn Lead Gen. All rights reserved.</span>
            <span className="tracking-widest uppercase">EN · FR · DE · ES · IT · PT</span>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
      <AnimatePresence>
        {scrollPercent > 60 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] py-4 px-6"
          >
            <div className="container mx-auto max-w-6xl flex justify-between items-center">
              <div className="text-sm font-medium text-[#1a1a1a] hidden sm:block">30 demos in 90 days, guaranteed.</div>
              <a href="#contact" onClick={scrollToSection('contact')} className="w-full sm:w-auto text-center px-8 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
