
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Globe, Calendar, ArrowUpRight, Menu, X, ChevronDown, Calculator, BarChart3, Target, Mail } from 'lucide-react';
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
import ArticleDetailPage from './components/ArticleDetailPage';
import { CaseStudyCarousel } from './components/CaseStudyCarousel';
import { ROICalculatorPage } from './components/ROICalculatorPage';
import { MarketScannerPage } from './components/MarketScannerPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { GDPRPage } from './components/GDPRPage';
import { CookieBanner } from './components/CookieBanner';

import { CountUp } from './components/CountUp';

const words = ["Supply Chain Software", "Logistics Software", "Procurement Software"];

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
  const [toolsOpen, setToolsOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [logoStripVisible, setLogoStripVisible] = useState(false);
  const logoStripRef = useRef<HTMLDivElement | null>(null);

  // Pause the logo strip animation until it scrolls into view (keeps Alpega visible on first sight)
  useEffect(() => {
    const el = logoStripRef.current;
    if (!el || logoStripVisible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLogoStripVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [logoStripVisible]);

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
            <span className="font-serif font-normal text-xl tracking-tight text-[#1a1a1a]">Lynn Lead Gen</span>
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

            {/* Tools dropdown */}
            <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
              <button
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  route === '#/roi-calculator' || route === '#/market-scanner' ? 'text-[#C5A059]' : 'hover:text-[#C5A059]'
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
                      href="#/roi-calculator"
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
                      href="#/market-scanner"
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
            <a href="#/" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Home</a>
            <a href="#/case-studies" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Case Studies</a>
            <a href="#/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">About</a>
            <a href="#/resources" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer">Resources</a>
            <a href="#/roi-calculator" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer text-base text-stone-400">ROI Calculator</a>
            <a href="#/market-scanner" onClick={() => setMenuOpen(false)} className="hover:text-[#C5A059] transition-colors cursor-pointer text-base text-stone-400">Market Scanner</a>
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer"
             
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
        ) : route.startsWith('#/resources/') ? (
          <ArticleDetailPage key={route} />
        ) : route === '#/roi-calculator' ? (
          <ROICalculatorPage />
        ) : route === '#/market-scanner' ? (
          <MarketScannerPage />
        ) : route === '#/privacy' ? (
          <PrivacyPage />
        ) : route === '#/terms' ? (
          <TermsPage />
        ) : route === '#/gdpr' ? (
          <GDPRPage />
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
                  <span>We generate leads in</span>
                  <div className="relative h-6 overflow-hidden w-40">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 text-[#8c3b3b]"
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
                  className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#1a1a1a] max-w-xl xl:max-w-2xl mb-6 tracking-tight"
                >
                  Your sales team deserves a <span className="text-[#C5A059]">full calendar.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8"
                >
                  Lynn is the only outbound agency built exclusively for <strong>supply chain, logistics, and procurement software</strong> — with domain-trained teams who speak your buyers' language, literally and technically, wherever they are in the world.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-sm font-medium tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
                    Book a strategy call
                  </a>
                  <a href="#pipeline" onClick={scrollToSection('pipeline')} className="text-sm font-medium text-[#C5A059] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    See our process <ArrowRight size={16} />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Calendar + Guarantee + Languages */}
              <div className="flex flex-col gap-5">
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

                {/* Guarantee bar + Languages — subtle, secondary to calendar */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-1"
                >
                  <div className="flex items-center gap-2.5 text-sm text-stone-600">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span><strong className="text-[#1a1a1a]">Qualified demos, guaranteed</strong></span>
                  </div>
                  <div className="h-4 w-px bg-stone-300 hidden sm:block" />
                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    {['EN', 'FR', 'DE', 'ES', 'IT', 'PT'].map((code, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-stone-100 text-stone-500 font-medium">{code}</span>
                    ))}
                    <span className="pl-1 text-[11px]">fluent speakers</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Logo Bar — infinite scroll */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-24 pt-12 border-t border-stone-200"
            >
              <div className="text-center text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-8">Trusted by supply chain, logistics, and procurement software companies across Europe</div>
              <div ref={logoStripRef} className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F8F4] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9F8F4] to-transparent z-10 pointer-events-none" />
                <div className={`flex w-max ${logoStripVisible ? 'animate-scroll-logos' : ''}`}>
                  {[...Array(2)].map((_, setIdx) => (
                    <div key={setIdx} className="flex shrink-0 items-center gap-16 px-8">
                      {[
                        { name: 'Meight', logo: '/assets/meight.png', h: 'h-8' },
                        { name: 'Sutherland', logo: '/assets/sutherland.svg', h: 'h-8' },
                        { name: 'Hyperplan', logo: '/assets/Hyperplan.png', h: 'h-16' },
                        { name: 'Alpega Group', logo: '/assets/brand_alpega.avif', h: 'h-12' },
                        { name: 'Descartes', logo: '/assets/descartes.png', h: 'h-6' },
                        { name: 'Kpler', logo: '/assets/kpler.svg', h: 'h-32' },
                        { name: 'Trayport', logo: '/assets/tmx_trayport.png', h: 'h-40' },
                        { name: 'Mintec', logo: '/assets/mintec.jpg', h: 'h-8' },
                        { name: 'Volue', logo: '/assets/volue.svg', h: 'h-8' },
                        { name: 'FreightGate', logo: '/assets/freightgate.png', h: 'h-10' },
                        { name: 'BuyCo', logo: '/assets/buyco.png', h: 'h-8' },
                        { name: 'Easy4Pro', logo: '/assets/easypro.avif', h: 'h-14' },
                        { name: 'Vesper', logo: '/assets/vesper.svg', h: 'h-8' },
                        { name: 'Matium', logo: '/assets/matium.svg', h: 'h-9' },
                        { name: 'Tendereasy', logo: '/assets/tendereasy.png', h: 'h-8' },
                        { name: 'WowFlow', logo: '/assets/wowflow.svg', h: 'h-7' },
                        { name: 'Optimix', logo: '/assets/Optimix.svg', h: 'h-8' },
                        { name: 'ShipmentX', logo: '/assets/shipmentx.png', h: 'h-8' },
                      ].map((brand, i) => (
                        <div key={i} className="shrink-0 flex items-center justify-center h-16 opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500">
                          <img src={brand.logo} alt={brand.name} className={`${brand.h} w-auto object-contain`} style={{ mixBlendMode: 'multiply' }} />
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
        <section id="guarantee" className="py-16 bg-[#1a1a1a] text-[#F9F8F4]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wider font-bold rounded-full mb-6">THE GUARANTEE</div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Guaranteed results.<br/>
                  <span className="text-[#C5A059] font-normal">Or we keep going.</span>
                </h2>
                <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                  We agree on a target number of qualified demos before we start. If we don't hit it, we keep working at no extra cost.
                </p>
                <div className="bg-stone-900 border border-stone-800 p-6 rounded-xl mb-10">
                  <p className="text-stone-300 leading-relaxed">
                    No retainer agencies hedging with "activity reports." A specific target, a specific deadline, and a written guarantee tailored to your market.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] rounded-xl text-sm font-medium tracking-wide hover:bg-stone-200 transition-all shadow-lg">
                    Book a strategy call
                  </a>
                  <a href="#pipeline" onClick={scrollToSection('pipeline')} className="text-sm font-medium text-stone-400 hover:text-white transition-colors flex items-center gap-2">
                    See how it works <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { logo: 'Alpega', stat: '80+' },
                  { logo: 'Mintec', stat: '30+' },
                  { logo: 'Easy4Pro', stat: '28+' }
                ].map((proof, i) => (
                  <div key={i} className="bg-stone-900 border border-stone-800 p-6 rounded-2xl text-center">
                    <div className="font-serif text-xl font-bold text-stone-300 mb-4">{proof.logo}</div>
                    <div className="text-4xl font-serif text-[#C5A059] mb-2">
                      {proof.stat}
                    </div>
                    <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase">demos per month</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Carousel */}
        <CaseStudyCarousel scrollToSection={scrollToSection} />

        <WhoWeReach />
        <FirstMover />

        {/* Pipeline Visualization Section */}
        <section className="py-16 md:py-20 bg-white relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block mb-4 text-xs font-bold tracking-widest text-stone-400 uppercase">The Process</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight mb-6">Precision <span className="text-stone-400 font-normal">and</span> Speed.</h2>
              <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
                We build highly targeted lists and run coordinated outbound — calling and email, working together. Fluent in 6 languages, high volume, relentless execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                {
                  step: 1,
                  icon: <Target size={22} />,
                  title: 'GTM Strategy & List Build',
                  desc: 'Our GTM engineers research your market, map every decision-maker that fits your ICP, and build segmented lists by region, role, and pain point. You launch with a precise target set — not a generic database pull.',
                  highlight: false,
                },
                {
                  step: 2,
                  icon: <Mail size={22} />,
                  title: 'Personalised Email Sequences',
                  desc: "We write multi-step email campaigns tailored to each segment — referencing their industry, tech stack, and specific challenges. Every sequence is written in the prospect's language by fluent copywriters, crafted to feel like a one-to-one message, not a mass blast.",
                  highlight: false,
                },
                {
                  step: 3,
                  icon: <Phone size={22} />,
                  title: '200+ Dials Per Day',
                  desc: 'Fluent speakers across 6 European languages, with full English coverage for the US and global markets. While email sequences warm accounts, our callers get decision-makers on the phone and book directly into your calendar.',
                  highlight: false,
                },
                {
                  step: 4,
                  icon: <Calendar size={22} />,
                  title: 'Qualified Demos, Guaranteed',
                  desc: 'Within 90 days, your calendar is full of qualified prospects — booked through calls, email replies, or both — ready to discuss your solution. Minimum floor written into the contract; no cap on the upside.',
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

        <Comparison />
        <FAQ />

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-white border-t border-stone-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-[#1a1a1a] mb-8 leading-tight">Your sales team deserves a full calendar.</h2>
            <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto mb-12">
              We build your GTM engine, fill your pipeline with qualified demos, and guarantee results. Book a call and we'll show you exactly how it works for your market.
            </p>
            <a href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white rounded-full text-base font-medium tracking-wide hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
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
              <a href="#/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="#/gdpr" className="hover:text-white transition-colors">GDPR</a>
              <span className="tracking-widest uppercase">EN · DE · FR · IT · ES · PT</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar */}
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

      <CookieBanner />
    </div>
  );
};

export default App;
