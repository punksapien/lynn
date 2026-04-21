import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface TimelineStep {
  title: string;
  body: string;
}

interface ResultCard {
  num: string;
  label: string;
  highlight?: boolean;
}

interface MoreStudy {
  slug: string;
  name: string;
  tag: string;
  stat: string;
  statLabel: string;
}

interface CaseStudyData {
  slug: string;
  name: string;
  tag: string;
  tagColor: string;
  summary: string;
  markets: string;
  heroStats: { num: string; label: string }[];
  featuredStat?: { num: string; label: string };
  enterpriseLogos?: { src: string; alt: string }[];
  challenge: {
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  solution: {
    title: string;
    intro: string;
    timeline: TimelineStep[];
  };
  quote?: {
    text: string;
    name: string;
    title: string;
  };
  results: {
    title: string;
    paragraph: string;
    cards: ResultCard[];
  };
  whyItWorked: {
    title: string;
    bullets: string[];
  };
  more: MoreStudy[];
}

const STUDIES: CaseStudyData[] = [
  {
    slug: 'alpega',
    name: 'Alpega Group',
    tag: 'TMS / Logistics Software',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn helped Europe\'s leading transport management platform scale from zero outbound to 80+ qualified demos per month across 6 languages.',
    markets: 'DACH, France, Spain, Italy, Benelux, Nordics',
    heroStats: [
      { num: '80+', label: 'demos per month' },
      { num: '6', label: 'languages covered' },
      { num: '6', label: 'European markets' },
      { num: '0 to 80+', label: 'from standing start' },
    ],
    featuredStat: { num: 'Largest client engagement', label: 'Multi-language, multi-market, scaled outbound' },
    challenge: {
      title: 'Zero internal SDR capacity across six European markets',
      paragraphs: [
        'Alpega is a leading European transport management software (TMS) provider serving enterprise logistics operations. Their platform handles billions in freight spend annually — but their outbound sales engine didn\'t match the scale of their product.',
        'They had no internal SDR team, no structured outbound process, and no way to reach decision-makers across the DACH, French, Spanish, Italian, Benelux, and Nordic markets in their local languages.',
      ],
      bullets: [
        'No SDR team or outbound infrastructure',
        'Target buyers spread across 6+ European language markets',
        'Enterprise sales cycle requiring senior-level conversations',
        'Competitors actively calling into the same accounts',
        'Internal hiring would take 6+ months per market just to ramp one rep',
      ],
    },
    solution: {
      title: 'Built a full outbound engine from scratch',
      intro: 'We designed and deployed a coordinated outbound programme — calling and email — covering all six language markets. Fluent speakers were briefed on Alpega\'s platform, competitive landscape, and buyer personas, then live within two weeks.',
      timeline: [
        { title: 'ICP definition and list building', body: 'Mapped Alpega\'s ideal customers across each market — enterprise logistics operations, 3PLs, manufacturers with complex supply chains. Built targeted contact lists of VP/Director-level decision-makers.' },
        { title: 'Team recruitment and training', body: 'Recruited fluent native speakers across EN, DE, FR, IT, ES, and PT. Trained every caller on Alpega\'s product, competitive positioning, and enterprise logistics buyer pain points.' },
        { title: 'Script and email sequence development', body: 'Created market-specific call scripts that addressed local buying patterns and objections. Tested and iterated within the first two weeks of live calling.' },
        { title: 'High-volume calling (200+ dials/day) + email sequences', body: '200+ dials per day across all six markets plus targeted email sequences. Every conversation handled by a human — no AI, no automation.' },
        { title: 'Continuous optimisation', body: 'Weekly performance reviews, script adjustments, and market prioritisation based on conversion data. Scaled up callers in high-performing markets.' },
      ],
    },
    quote: {
      text: 'Before you came along, we had very few positive leads in each country to work with. Now, thanks to your services, we have dozens of leads and over 30 demos in just a few weeks. It\'s incredible and a great return for us.',
      name: 'Giorgio Rossi',
      title: 'Business Development Director, Alpega',
    },
    results: {
      title: '80+ qualified demos per month — and still growing',
      paragraph: 'Within the first month, Alpega was receiving a steady stream of qualified demos with senior decision-makers across their target markets. By month three, we had scaled to a consistent 80+ meetings per month.',
      cards: [
        { num: '80+', label: 'qualified demos per month', highlight: true },
        { num: '6', label: 'languages covered natively' },
        { num: '6', label: 'European markets' },
        { num: '0 to 80+', label: 'meetings/month from standing start', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Fluent teams in every market — on the phone and in the inbox</strong>',
        '<strong>Domain expertise</strong> (TMS, freight management, supply chain operations)',
        '<strong>Speed to market</strong> (live in 2 weeks vs 12+ months hiring internally)',
        '<strong>Scale without overhead</strong> (output of a 6-person multilingual SDR team)',
        '<strong>Cross-market intelligence</strong>',
      ],
    },
    more: [
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '28+', statLabel: 'demos per month' },
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
    ],
  },
  {
    slug: 'mintec',
    name: 'Mintec by Expana',
    tag: 'Procurement Intelligence',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn helped a commodity data platform book 30+ enterprise demos per month with procurement leaders at $300M+ manufacturers.',
    markets: 'UK, DACH, France, Benelux',
    heroStats: [
      { num: '30+', label: 'demos per month' },
      { num: '$5.5M', label: 'pipeline generated' },
      { num: '4', label: 'markets covered' },
      { num: '25+', label: 'demos per month avg' },
    ],
    challenge: {
      title: 'Needed enterprise demos with procurement leaders at major manufacturers',
      paragraphs: [
        'Mintec (now Expana) is a leading commodity price data and procurement intelligence platform. Their buyers are senior procurement leaders at $300M+ manufacturers — a notoriously hard-to-reach audience.',
        'They had some inbound traction but no structured outbound programme to systematically reach their ideal customer profile across European markets.',
      ],
      bullets: [
        'Target buyers are senior procurement leaders — highly gatekeepered',
        'Complex product requiring domain knowledge to pitch effectively',
        'Needed to reach across UK, DACH, France, and Benelux simultaneously',
        'Previous agency attempts had delivered low-quality meetings',
        'Sales team was spending too much time prospecting instead of closing',
      ],
    },
    solution: {
      title: 'Precision outbound targeting procurement decision-makers',
      intro: 'We built a targeted calling campaign focused exclusively on procurement and supply chain leaders at manufacturers matching Mintec\'s ideal profile.',
      timeline: [
        { title: 'Buyer persona mapping', body: 'Identified the specific titles, industries, and company sizes that convert best for commodity intelligence platforms.' },
        { title: 'Data sourcing and enrichment', body: 'Built custom contact lists of procurement VPs, CPOs, and category managers at target manufacturers across four markets.' },
        { title: 'Multilingual calling teams deployed', body: 'English, French, and German callers trained on procurement workflows, commodity markets, and Mintec\'s competitive advantages.' },
        { title: 'Qualification framework', body: 'Every meeting qualified against strict criteria — company size, active procurement challenges, decision-making authority, and timeline.' },
        { title: 'Pipeline reporting and optimisation', body: 'Weekly syncs with Mintec\'s sales team to review meeting quality, adjust targeting, and double down on what worked.' },
      ],
    },
    quote: {
      text: 'Mintec has been partnered with Lynn Lead Gen for some time now, and we consistently receive a strong number of targeted leads in our key sectors. Their team is focused and dedicated, consistently delivering on our requests.',
      name: 'David Bateman',
      title: 'Head of Global Marketing, Mintec',
    },
    results: {
      title: '30+ qualified demos per month',
      paragraph: 'Mintec went from sporadic outbound to a consistent, predictable pipeline of 25+ qualified demos per month with exactly the right buyers at exactly the right companies.',
      cards: [
        { num: '30+', label: 'qualified demos per month', highlight: true },
        { num: '$5.5M', label: 'pipeline generated' },
        { num: '25+', label: 'demos per month average' },
        { num: '$300M+', label: 'average target company revenue' },
        { num: '4', label: 'markets covered' },
        { num: '0 to 25+', label: 'demos/month from standing start', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Procurement domain expertise</strong> — Our callers could discuss commodity price volatility, category management, and procurement transformation with credibility.',
        '<strong>Strict qualification</strong> — Every demo was with a named decision-maker at a company matching the ICP. No padding the numbers.',
        '<strong>Multi-market coverage</strong> — Reached procurement leaders across UK, DACH, France, and Benelux with fluent speakers and multilingual email sequences.',
        '<strong>Speed</strong> — First meetings booked within 10 days of campaign launch.',
      ],
    },
    more: [
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '28+', statLabel: 'demos per month' },
      { slug: 'descartes', name: 'Descartes Systems', tag: 'Compliance / Export Control', stat: 'EMEA', statLabel: 'wide outbound' },
    ],
  },
  {
    slug: 'easy4pro',
    name: 'Easy4Pro',
    tag: 'Supply Chain Platform',
    tagColor: 'bg-emerald-100 text-emerald-800',
    summary: 'How Lynn helped a logistics platform book 28+ qualified meetings per month with enterprise distributors across Europe and LATAM.',
    markets: 'DACH, France, Spain, LATAM',
    heroStats: [
      { num: '28+', label: 'demos per month' },
      { num: '20-30', label: 'per month ongoing' },
      { num: '4', label: 'markets covered' },
      { num: '2 weeks', label: 'to first meeting' },
    ],
    challenge: {
      title: 'Needed qualified meetings with enterprise distributors at scale',
      paragraphs: [
        'Easy4Pro offers a logistics coordination platform for enterprises managing complex distribution networks. They needed to rapidly build pipeline across European and Latin American markets.',
        'Their sales team was small and stretched thin — they couldn\'t prospect and close at the same time.',
      ],
      bullets: [
        'Small sales team with no dedicated prospecting capacity',
        'Target buyers in logistics operations and distribution management',
        'Needed coverage across both European and LATAM markets',
        'Tight 90-day timeline to prove outbound ROI',
        'Complex product requiring informed conversations with prospects',
      ],
    },
    solution: {
      title: 'Rapid deployment across European and LATAM markets',
      intro: 'We launched a focused calling campaign targeting logistics and distribution decision-makers, with native-speaking callers covering DACH, France, Spain, and LATAM.',
      timeline: [
        { title: 'Market analysis and ICP refinement', body: 'Identified the highest-converting verticals and company profiles within logistics and distribution.' },
        { title: 'Multi-market caller deployment', body: 'German, French, Spanish, and English callers trained and dialling within 14 days.' },
        { title: 'High-intensity calling programme', body: '200+ dials per day targeting VP and Director-level logistics decision-makers.' },
        { title: 'Meeting qualification and handoff', body: 'Strict qualification criteria ensuring every meeting was with a genuine decision-maker with an active need.' },
      ],
    },
    results: {
      title: '28+ qualified meetings per month',
      paragraph: 'Easy4Pro hit their 90-day target and extended the engagement. They now receive a consistent 20-30 qualified demos per month.',
      cards: [
        { num: '28+', label: 'demos per month', highlight: true },
        { num: '20-30', label: 'per month ongoing' },
        { num: '14 days', label: 'to first booked meeting' },
        { num: '4', label: 'markets covered' },
        { num: '200+', label: 'dials per day' },
        { num: 'Extended', label: 'ongoing after initial 90 days', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Speed of deployment</strong> — First meetings landed within 2 weeks. No 3-month ramp period.',
        '<strong>LATAM expansion</strong> — Native Spanish speakers opened up Latin American markets that Easy4Pro hadn\'t been able to reach.',
        '<strong>Consistent volume</strong> — 20-30 meetings per month, every month, without Easy4Pro lifting a finger on prospecting.',
        '<strong>Quality over quantity</strong> — Every meeting was with a qualified decision-maker, not just a warm body.',
      ],
    },
    more: [
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
      { slug: 'volue', name: 'Volue', tag: 'Energy & Trading Software', stat: '13+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'trayport',
    name: 'Trayport',
    tag: 'Energy Trading / Procurement',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn built a consistent pipeline of 20 qualified meetings per month with senior procurement decision-makers in metals and energy markets.',
    markets: 'UK, DACH, Nordics',
    heroStats: [
      { num: '20', label: 'qualified meetings/month' },
      { num: '3', label: 'markets covered' },
      { num: 'Senior', label: 'decision-maker level' },
      { num: 'Metals', label: 'and energy focus' },
    ],
    challenge: {
      title: 'Needed consistent pipeline with senior decision-makers in metals markets',
      paragraphs: [
        'Trayport operates a procurement platform specialising in metals and energy trading. Their target buyers are senior procurement leaders at major industrial companies — a small, hard-to-reach audience.',
        'They needed a reliable, repeatable way to generate qualified meetings without over-relying on events and conferences.',
      ],
      bullets: [
        'Very niche target market — metals and energy procurement',
        'Small addressable market requiring precision targeting',
        'Senior buyers who rarely respond to cold email',
        'Needed consistent monthly pipeline, not sporadic bursts',
      ],
    },
    solution: {
      title: 'Precision calling into a niche market',
      intro: 'We built a highly targeted calling campaign focused on the metals and energy procurement space across UK, DACH, and Nordic markets.',
      timeline: [
        { title: 'Niche market mapping', body: 'Identified every company and decision-maker in Trayport\'s addressable market across three regions.' },
        { title: 'Specialist caller training', body: 'Callers briefed on metals markets, energy trading, and procurement processes specific to this vertical.' },
        { title: 'Targeted calling programme', body: 'Precision outbound into a finite market — quality over volume, with deep account research before every call.' },
        { title: 'Ongoing pipeline management', body: 'Consistent 20 meetings per month with ongoing list refresh and market expansion.' },
      ],
    },
    results: {
      title: 'Consistent 20 qualified meetings per month',
      paragraph: 'Trayport now receives a predictable, steady pipeline of qualified meetings with exactly the right buyers — month after month.',
      cards: [
        { num: '20', label: 'qualified meetings/month', highlight: true },
        { num: '3', label: 'markets covered' },
        { num: 'VP+', label: 'average seniority level' },
        { num: 'Ongoing', label: 'engagement continues', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Niche expertise</strong> — We understood metals markets and energy trading procurement well enough to have credible conversations.',
        '<strong>Precision over volume</strong> — In a small addressable market, every call had to count. Deep account research made the difference.',
        '<strong>Consistency</strong> — 20 meetings per month, every month. No peaks and troughs.',
      ],
    },
    more: [
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'descartes', name: 'Descartes Systems', tag: 'Compliance / Export Control', stat: 'EMEA', statLabel: 'wide outbound' },
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'descartes',
    name: 'Descartes Systems',
    tag: 'Compliance / Export Control',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn helped a global logistics technology leader build outbound pipeline for their compliance division targeting aerospace and defence.',
    markets: 'UK, DACH, France, Benelux, Nordics',
    heroStats: [
      { num: 'EMEA', label: 'wide outbound coverage' },
      { num: 'A&D', label: 'aerospace & defence focus' },
      { num: '5', label: 'markets covered' },
      { num: 'Enterprise', label: 'level conversations' },
    ],
    challenge: {
      title: 'Global logistics leader needed outbound for a specialist compliance division',
      paragraphs: [
        'Descartes Systems is a global leader in logistics technology. They needed to build outbound pipeline specifically for their compliance and export control division — targeting aerospace and defence companies across EMEA.',
        'This is an extremely specialised market with complex regulations, long sales cycles, and buyers who need to trust you before they\'ll take a meeting.',
      ],
      bullets: [
        'Highly regulated industry — aerospace and defence compliance',
        'Buyers need domain credibility before they\'ll engage',
        'Multi-market EMEA coverage required',
        'Complex product requiring nuanced positioning',
        'Previous outbound attempts had failed to generate quality pipeline',
      ],
    },
    solution: {
      title: 'Specialist outbound for compliance and export control',
      intro: 'We built a calling team specifically trained on export control regulations, compliance requirements, and the aerospace & defence procurement landscape.',
      timeline: [
        { title: 'Regulatory landscape research', body: 'Deep dive into export control regulations, sanctions compliance, and the specific pain points of A&D companies.' },
        { title: 'Specialist caller training', body: 'Callers trained on ITAR, EAR, and EU export control frameworks. They could discuss compliance challenges at a technical level.' },
        { title: 'EMEA-wide deployment', body: 'Native-speaking callers across UK, DACH, France, Benelux, and Nordics — all with compliance domain training.' },
        { title: 'Enterprise account strategy', body: 'Multi-threaded approach into target accounts — identifying and engaging multiple stakeholders per organisation.' },
      ],
    },
    results: {
      title: 'EMEA-wide pipeline for a specialist compliance division',
      paragraph: 'Descartes now has a consistent, predictable outbound channel for their compliance division — reaching exactly the right buyers in aerospace and defence across five European markets.',
      cards: [
        { num: 'EMEA', label: 'wide outbound coverage', highlight: true },
        { num: '5', label: 'markets covered natively' },
        { num: 'A&D', label: 'aerospace & defence focus' },
        { num: 'Enterprise', label: 'level conversations' },
        { num: 'Multi-thread', label: 'account penetration' },
        { num: 'Ongoing', label: 'engagement continues', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Compliance domain expertise</strong> — Our callers could discuss ITAR, EAR, and sanctions compliance credibly. This was non-negotiable for A&D buyers.',
        '<strong>Multi-market native coverage</strong> — EMEA-wide reach with callers who speak the language and understand local regulatory nuances.',
        '<strong>Enterprise multi-threading</strong> — Engaging multiple stakeholders per account to build consensus before the first demo.',
        '<strong>Trust-first approach</strong> — In regulated industries, credibility comes before everything else. Our callers earned it.',
      ],
    },
    more: [
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '28+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'volue',
    name: 'Volue',
    tag: 'Energy & Trading Software',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn booked enterprise demos for Volue with Tier 1 European energy and commodity trading houses — including TotalEnergies, EDF Trading, Mercuria, Siemens Energy, Ørsted, INEOS, National Grid, Crédit Agricole CIB, and Alpiq.',
    markets: 'Europe (Nordics, DACH, France, UK, Iberia, BeNeLux)',
    heroStats: [
      { num: '13+', label: 'demos per month' },
      { num: '70', label: 'enterprise leads engaged' },
      { num: 'Tier 1', label: 'energy & trading houses' },
      { num: 'VP/Director', label: 'average seniority' },
    ],
    featuredStat: { num: 'Enterprise logos', label: 'TotalEnergies, EDF Trading, Mercuria, Siemens Energy, Ørsted, INEOS, National Grid, Crédit Agricole CIB, Alpiq' },
    enterpriseLogos: [
      { src: '/assets/logos/volue/totalenergies.png', alt: 'TotalEnergies' },
      { src: '/assets/logos/volue/edftrading.png', alt: 'EDF Trading' },
      { src: '/assets/logos/volue/mercuria.svg', alt: 'Mercuria' },
      { src: '/assets/logos/volue/siemensenergy.png', alt: 'Siemens Energy' },
      { src: '/assets/logos/volue/orsted.png', alt: 'Ørsted' },
      { src: '/assets/logos/volue/ineos.png', alt: 'INEOS' },
      { src: '/assets/logos/volue/nationalgrid.png', alt: 'National Grid' },
      { src: '/assets/logos/volue/creditagricole.png', alt: 'Crédit Agricole' },
      { src: '/assets/logos/volue/alpiq.png', alt: 'Alpiq' },
    ],
    challenge: {
      title: 'Reaching senior decision-makers across European energy and commodity trading',
      paragraphs: [
        'Volue is a Norwegian energy software company providing trading, forecasting, and grid technology to Europe\'s largest power producers, traders, utilities, and grid operators. Their buyers — Heads of Trading, VP Energy Markets, Chief Power Traders — are notoriously hard to reach: small in number, deeply technical, and inundated with vendor pitches.',
        'They needed enterprise demos with Tier 1 European energy houses without building an in-house multilingual SDR team across Nordics, DACH, France, UK, and Iberia.',
      ],
      bullets: [
        'Small, hard-to-reach pool of senior energy trading buyers',
        'Multilingual coverage required across Nordics, DACH, France, UK, Iberia',
        'Needed to differentiate Volue against established energy software competitors',
        'Highly technical buyers expecting domain-fluent conversations',
      ],
    },
    solution: {
      title: 'Multilingual outbound into European energy and trading houses',
      intro: 'We launched a coordinated calling and email programme targeting senior energy trading, power markets, and renewable operations leaders at Tier 1 European energy houses, banks, and grid operators.',
      timeline: [
        { title: 'Energy-house targeting', body: 'Built focused account lists across power producers, commodity traders, banks with energy desks, renewable operators, BRPs, and TSOs across Europe.' },
        { title: 'Domain-fluent callers', body: 'Callers trained on energy trading workflows — power markets, gas trading, balancing, forecasting, and renewables — to hold credible conversations with senior buyers.' },
        { title: 'Multilingual reach', body: 'Native-speaking outbound in English, German, French, and Spanish to engage decision-makers across European energy markets in their primary language.' },
        { title: 'Targeted scaling', body: 'Constant list refresh and persona refinement based on what was converting — from major utilities to commodity trading houses to banks running energy desks.' },
      ],
    },
    results: {
      title: '13+ enterprise demos per month with Tier 1 energy houses',
      paragraph: 'Volue engaged 70 enterprise leads in the first two months — including booked demos with TotalEnergies, EDF Trading, Mercuria, Siemens Energy, Ørsted, INEOS, National Grid, Crédit Agricole CIB, and Alpiq.',
      cards: [
        { num: '13+', label: 'demos per month', highlight: true },
        { num: '70', label: 'enterprise leads engaged' },
        { num: 'Tier 1', label: 'European energy houses', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Domain expertise</strong> — Callers spoke the language of energy trading: power markets, balancing, forecasting, and renewables.',
        '<strong>Tier 1 access</strong> — Booked Heads of Trading and VP Energy Markets at TotalEnergies, EDF, Mercuria, Ørsted, and others.',
        '<strong>Multilingual coverage</strong> — Native-speaking outbound across Nordics, DACH, France, UK, and Iberia.',
        '<strong>Acceleration</strong> — Demo volume increased month over month as the playbook locked in.',
      ],
    },
    more: [
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
      { slug: 'matium', name: 'Matium', tag: 'Plastics Trading Platform', stat: '42', statLabel: 'demos booked' },
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'freightgate',
    name: 'Freightgate',
    tag: 'Freight Rate Management',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn delivered ~20 enterprise demos per month for Freightgate across Europe — booking meetings with retail and F&B giants like Chanel, Primark, Heineken, Danone, Dr. Oetker, and Coca-Cola HBC.',
    markets: 'Europe',
    heroStats: [
      { num: '20+', label: 'demos per month' },
      { num: '160+', label: 'enterprise leads engaged' },
      { num: 'EU-wide', label: 'market reach' },
      { num: 'VP/Director', label: 'average seniority' },
    ],
    featuredStat: { num: 'Enterprise logos', label: 'Chanel, Primark, Heineken, Danone, Dr. Oetker, Coca-Cola HBC, Stellantis, Philips, Reckitt' },
    enterpriseLogos: [
      { src: '/assets/logos/freightgate/chanel.png', alt: 'Chanel' },
      { src: '/assets/logos/freightgate/primark.png', alt: 'Primark' },
      { src: '/assets/logos/freightgate/heineken.png', alt: 'Heineken' },
      { src: '/assets/logos/freightgate/danone.png', alt: 'Danone' },
      { src: '/assets/logos/freightgate/droetker.png', alt: 'Dr. Oetker' },
      { src: '/assets/logos/freightgate/cocacolahbc.png', alt: 'Coca-Cola HBC' },
      { src: '/assets/logos/freightgate/stellantis.png', alt: 'Stellantis' },
      { src: '/assets/logos/freightgate/philips.png', alt: 'Philips' },
      { src: '/assets/logos/freightgate/reckitt.png', alt: 'Reckitt' },
    ],
    challenge: {
      title: 'Reaching enterprise shippers in a saturated freight tech market',
      paragraphs: [
        'Freightgate offers a freight rate management platform for ocean and air shipping procurement. They needed enterprise demos with shippers managing high freight volumes across Europe — buyers who are already drowning in pitches from established TMS competitors.',
        'Their target audience — VP Supply Chain, Heads of Logistics, Procurement Directors at retailers, F&B brands, and industrial manufacturers — is notoriously hard to reach through email alone, and Freightgate didn\'t have the in-house SDR capacity to run a multilingual European outbound programme.',
      ],
      bullets: [
        'Crowded freight tech market with established TMS competitors',
        'Hard-to-reach enterprise supply chain and procurement buyers',
        'Multiple European geographies and languages to cover',
        'Enterprise sales cycles requiring senior decision-maker engagement',
      ],
    },
    solution: {
      title: 'European outbound focused on enterprise shippers at scale',
      intro: 'We launched a multilingual outbound programme targeting senior supply chain and procurement leaders at large European shippers, with calling and email designed around freight rate management pain points.',
      timeline: [
        { title: 'Enterprise shipper targeting', body: 'Focused on retailers, F&B brands, and industrial manufacturers with high ocean and air freight volumes across Europe.' },
        { title: 'Multilingual coverage', body: 'Callers operating in English, German, French, Italian, and Spanish to engage decision-makers in their native language.' },
        { title: 'Calling + email coordination', body: 'Email sequences warmed up accounts; callers converted engagement into booked demos with VP/Director-level supply chain leaders.' },
        { title: 'Continuous list refresh', body: 'Constant additions of new accounts and personas based on what was converting — from automotive Tier 1s to F&B retailers.' },
      ],
    },
    results: {
      title: '~20 enterprise demos per month across Europe',
      paragraph: 'Freightgate engaged 160+ enterprise leads in the first two months of activity — including booked demos with Chanel, Primark, Heineken, Danone, Dr. Oetker, Coca-Cola HBC, Stellantis, Philips, and Reckitt.',
      cards: [
        { num: '20+', label: 'demos per month', highlight: true },
        { num: '160+', label: 'enterprise leads engaged' },
        { num: 'EU-wide', label: 'market reach', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Enterprise focus</strong> — every demo a senior buyer at a household-name retailer, F&B brand, or industrial manufacturer.',
        '<strong>Multilingual coverage</strong> — fluent calling in English, German, French, Italian, and Spanish across European markets.',
        '<strong>Freight tech expertise</strong> — callers spoke the language of rate management, freight procurement, and ocean/air spend.',
        '<strong>Speed</strong> — 16 booked demos in the first full month from a standing start.',
      ],
    },
    more: [
      { slug: 'buyco', name: 'BuyCo', tag: 'Ocean Shipping Software', stat: '67', statLabel: 'demos booked' },
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '28+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'tendereasy',
    name: 'Tendereasy',
    tag: 'Procurement / Tendering',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn built a consistent pipeline of 20 qualified demos per month for a procurement tendering platform targeting enterprise buyers.',
    markets: 'Benelux, DACH, France',
    heroStats: [
      { num: '20', label: 'demos per month' },
      { num: '3', label: 'markets covered' },
      { num: 'Enterprise', label: 'buyer level' },
      { num: 'Ongoing', label: 'extended engagement' },
    ],
    challenge: {
      title: 'Needed steady flow of qualified demos with enterprise procurement buyers',
      paragraphs: [
        'Tendereasy offers a procurement tendering platform that streamlines RFx processes for enterprise organisations. They needed consistent, qualified pipeline with procurement decision-makers.',
        'Their target buyers — Heads of Procurement, CPOs, and category managers — are notoriously difficult to reach through email alone.',
      ],
      bullets: [
        'Hard-to-reach procurement buyers',
        'Cold email alone wasn\'t generating enough pipeline',
        'Needed coverage across Benelux, DACH, and France',
        'Enterprise sales cycle requiring senior-level engagement',
      ],
    },
    solution: {
      title: 'Targeted calling into procurement decision-makers',
      intro: 'We built a calling programme focused on procurement leaders at enterprises running complex tendering processes.',
      timeline: [
        { title: 'Procurement buyer mapping', body: 'Identified organisations with active or upcoming tendering challenges — the right moment to engage.' },
        { title: 'Multilingual deployment', body: 'Native English, German, and French callers trained on procurement processes and tendering workflows.' },
        { title: 'Consistent calling programme', body: 'Daily high-volume calling with strict qualification criteria for every meeting booked.' },
        { title: 'Pipeline optimisation', body: 'Ongoing script refinement and market prioritisation based on conversion data.' },
      ],
    },
    results: {
      title: '20 qualified demos per month, consistently',
      paragraph: 'Tendereasy now receives a reliable flow of qualified meetings with enterprise procurement decision-makers across three European markets.',
      cards: [
        { num: '20', label: 'demos per month', highlight: true },
        { num: '3', label: 'markets covered' },
        { num: 'CPO+', label: 'average seniority level' },
        { num: 'Ongoing', label: 'engagement continues', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Procurement domain expertise</strong> — Callers who understand tendering processes, RFx workflows, and procurement pain points.',
        '<strong>Phone over email</strong> — Procurement leaders rarely respond to cold email. A phone call in their language gets through.',
        '<strong>Consistency</strong> — 20 meetings per month, every month, giving Tendereasy a predictable pipeline they can plan around.',
      ],
    },
    more: [
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
      { slug: 'vesper', name: 'Vesper', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'enterprise leads/month' },
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'vesper',
    name: 'Vesper',
    tag: 'Procurement Intelligence',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn delivered 30+ enterprise leads per month for Vesper — booking demos and positive responses with Pret a Manger, Twinings, Compass Group, Fever-Tree, JOE & THE JUICE, Duvel Moortgat, Fentimans, Hero, and Wahaca.',
    markets: 'Europe (UK, DACH, Benelux, Iberia, Nordics)',
    heroStats: [
      { num: '30+', label: 'enterprise leads per month' },
      { num: '150', label: 'leads engaged in 6 months' },
      { num: '46', label: 'enterprise demos booked' },
      { num: 'Procurement', label: 'and category buyers' },
    ],
    featuredStat: { num: 'Enterprise logos', label: 'Pret a Manger, Twinings, Compass Group, Fever-Tree, Duvel Moortgat, Fentimans, Hero, Maldon Salt, Wahaca' },
    enterpriseLogos: [
      { src: '/assets/logos/vesper/pretamanger.png', alt: 'Pret a Manger' },
      { src: '/assets/logos/vesper/twinings.png', alt: 'Twinings' },
      { src: '/assets/logos/vesper/compassgroup.jpeg', alt: 'Compass Group' },
      { src: '/assets/logos/vesper/fevertree.png', alt: 'Fever-Tree' },
      { src: '/assets/logos/vesper/duvelmoortgat.svg', alt: 'Duvel Moortgat' },
      { src: '/assets/logos/vesper/fentimans.svg', alt: 'Fentimans' },
      { src: '/assets/logos/vesper/hero.png', alt: 'Hero' },
      { src: '/assets/logos/vesper/maldonsalt.svg', alt: 'Maldon Salt' },
      { src: '/assets/logos/vesper/wahaca.png', alt: 'Wahaca' },
    ],
    challenge: {
      title: 'Reaching procurement and category buyers across European F&B',
      paragraphs: [
        'Vesper provides commodity and ingredient intelligence to F&B procurement teams — pricing benchmarks, supply forecasts, and market signals across hundreds of categories. Their buyers — Heads of Procurement, Category Managers, Sales Directors at suppliers — sit deep inside complex food and beverage organisations and are very hard to reach through any single channel.',
        'They needed consistent, qualified pipeline across the European F&B landscape: branded food, beverages, ingredients, hospitality, and grocery — without building an internal multilingual SDR team.',
      ],
      bullets: [
        'Highly specialised buyer personas across procurement and category management',
        'Multi-vertical: branded food, drinks, ingredients, hospitality, grocery',
        'Multilingual coverage across UK, DACH, Benelux, Iberia, Nordics',
        'Crowded procurement-tech market with established competitors',
      ],
    },
    solution: {
      title: 'Multi-channel outbound targeting F&B procurement leaders',
      intro: 'We built a coordinated calling and email programme targeting procurement, category, and senior commercial buyers at branded F&B, hospitality groups, and ingredient suppliers across Europe.',
      timeline: [
        { title: 'F&B account targeting', body: 'Built lists of branded F&B, hospitality, and ingredient companies with measurable commodity exposure — the buyers most likely to value market intelligence.' },
        { title: 'Persona-specific messaging', body: 'Separate sequences for procurement managers (cost/risk angle) and sales/category directors (margin/forecasting angle).' },
        { title: 'Multilingual outreach', body: 'Callers and email sequences in English, German, French, Italian, and Spanish to engage decision-makers in their native language.' },
        { title: 'Constant iteration', body: 'Refined ICP, scripts, and category focus based on what converted — from premium drinks to large hospitality groups.' },
      ],
    },
    results: {
      title: '150 enterprise leads engaged in 6 months',
      paragraph: 'Vesper engaged 150 enterprise procurement and commercial leaders across European F&B — including booked demos with JOE & THE JUICE, Duvel Moortgat, Fentimans, Hero, Wahaca, and Baxters, plus positive responses from Pret a Manger, Twinings, Compass Group, Fever-Tree, Maldon Salt, and Läderach.',
      cards: [
        { num: '30+', label: 'enterprise leads per month', highlight: true },
        { num: '150', label: 'leads engaged in 6 months' },
        { num: '46', label: 'enterprise demos booked', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Domain-fluent calling</strong> — Callers held credible conversations about commodity pricing, sourcing risk, and category management.',
        '<strong>Dual-persona messaging</strong> — Separate angles for procurement (cost/risk) and commercial/category leaders (margin/forecasting).',
        '<strong>Multilingual reach</strong> — Native-speaking coverage across UK, DACH, Benelux, Iberia, and Nordics.',
        '<strong>Recognisable F&B logos</strong> — Pret a Manger, Twinings, Compass Group, Fever-Tree, Duvel, Fentimans, and others all engaged inside the first 6 months.',
      ],
    },
    more: [
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
      { slug: 'tendereasy', name: 'Tendereasy', tag: 'Procurement / Tendering', stat: '20', statLabel: 'demos/month' },
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
    ],
  },
  {
    slug: 'buyco',
    name: 'BuyCo',
    tag: 'Ocean Shipping Software',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn helped an ocean container shipping platform book 67 qualified demos with senior logistics leaders at companies like Siemens, Ferrero, and thyssenkrupp.',
    markets: 'DACH, France, Spain, Benelux, UK, Italy, Turkey',
    heroStats: [
      { num: '67', label: 'demos booked' },
      { num: '13+', label: 'demos per month' },
      { num: '7', label: 'European markets' },
      { num: 'VP/Director', label: 'average seniority' },
    ],
    featuredStat: { num: 'Enterprise pipeline', label: 'Siemens, Ferrero, thyssenkrupp, Stellantis, Evonik, EssilorLuxottica' },
    challenge: {
      title: 'Enterprise buyers spread across seven European markets',
      paragraphs: [
        'BuyCo is an ocean container shipping platform that centralises execution, visibility, and collaboration for large shippers. Their ideal customers are EUR 250M+ manufacturers and consumer goods companies shipping thousands of containers per year.',
        'Reaching VP- and Director-level logistics leaders across DACH, France, Spain, Benelux, UK, Italy, and Turkey required fluent speakers who understood container shipping operations \u2014 not generic SDRs reading a script.',
      ],
      bullets: [
        'Target buyers are senior logistics leaders at EUR 250M+ enterprises',
        'Seven European language markets to cover simultaneously',
        'Highly technical conversations around container shipping workflows',
        'Needed to position alongside existing ERP, TMS, and freight forwarders \u2014 not as a replacement',
        'Long enterprise sales cycles requiring qualified, senior-level conversations',
      ],
    },
    solution: {
      title: 'Fluent callers trained on container shipping operations',
      intro: 'We deployed native-speaking callers across all seven markets, each trained on BuyCo\'s platform, competitive positioning against visibility-only tools (Project44, FourKites), and the specific pain points of large-scale container shipping.',
      timeline: [
        { title: 'ICP mapping across seven markets', body: 'Identified enterprise manufacturers, consumer goods, and chemical companies with high container volumes and dedicated logistics teams across DACH, France, Spain, Italy, Benelux, UK, and Turkey.' },
        { title: 'Caller training on ocean shipping', body: 'Every caller briefed on container shipping workflows: bookings, vessel selection, SI/VGM documentation, D&D costs, and ETA reliability. Positioned BuyCo as complementary to existing ERP and TMS.' },
        { title: 'Multi-channel outbound launch', body: 'High-volume calling plus targeted email sequences across all markets. Conversations focused on diagnosing current shipping management \u2014 not pitching.' },
        { title: 'Continuous qualification refinement', body: 'Tightened qualification criteria based on container volume thresholds and decision-maker seniority. Weekly reviews to prioritise highest-converting markets and verticals.' },
      ],
    },
    results: {
      title: '67 qualified demos with enterprise logistics leaders',
      paragraph: 'Within five months, BuyCo had a consistent stream of qualified demos with VP- and Director-level logistics leaders at major European enterprises \u2014 including multiple Fortune 500 companies.',
      cards: [
        { num: '67', label: 'qualified demos booked', highlight: true },
        { num: '13+', label: 'demos per month average' },
        { num: '7', label: 'European markets covered' },
        { num: 'VP/Director', label: 'average seniority level', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Domain expertise in container shipping</strong> \u2014 callers understood bookings, D&D costs, rollovers, and carrier management',
        '<strong>Complementary positioning</strong> \u2014 never pitched BuyCo as a TMS replacement, always as a shipping-specific layer alongside existing systems',
        '<strong>Enterprise-grade conversations</strong> \u2014 qualified on container volume, logistics team structure, and decision-making authority',
        '<strong>Seven markets, one coordinated engine</strong> \u2014 fluent speakers in EN, DE, FR, ES, IT, NL, and TR',
      ],
    },
    more: [
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'kpler', name: 'Kpler', tag: 'Maritime Intelligence', stat: '19', statLabel: 'demos per month' },
      { slug: 'descartes', name: 'Descartes Systems', tag: 'Compliance / Export Control', stat: 'EMEA', statLabel: 'wide outbound' },
    ],
  },
  {
    slug: 'matium',
    name: 'Matium',
    tag: 'Plastics Trading Platform',
    tagColor: 'bg-emerald-100/60 text-emerald-700',
    summary: 'How Lynn helped a plastics trading infrastructure platform book 42 demos with procurement and sales leaders at companies like DuPont, ExxonMobil, and Jabil.',
    markets: 'North America (US & Canada)',
    heroStats: [
      { num: '42', label: 'demos booked' },
      { num: '14', label: 'demos per month' },
      { num: '5', label: 'campaign segments' },
      { num: 'VP/Director', label: 'average seniority' },
    ],
    featuredStat: { num: 'Enterprise plastics pipeline', label: 'DuPont, ExxonMobil, Jabil, Saint-Gobain, NOVA Chemicals, Huntsman' },
    challenge: {
      title: 'Breaking into a fragmented industry that runs on relationships and spreadsheets',
      paragraphs: [
        'Matium is the operating system for the plastics market \u2014 connecting buyers and sellers with real-time data, auctions, and transaction infrastructure. But the plastics industry is notoriously relationship-driven, and most companies still manage pricing, sourcing, and deals through emails, phone calls, and personal networks.',
        'Matium needed to reach procurement managers, sales directors, and CEOs at compounders, converters, traders, and resin producers across North America \u2014 and convince them that a platform could improve outcomes without replacing their existing relationships.',
      ],
      bullets: [
        'Highly fragmented industry with deep resistance to new platforms',
        'Buyers and sellers operate on personal relationships and trust',
        'Most prospects had never heard of a "plastics trading platform"',
        'Needed to reach both buy-side (procurement) and sell-side (sales/commercial) personas',
        'North American market with wide company size range ($50M to multi-billion)',
      ],
    },
    solution: {
      title: 'Consultative outbound positioning Matium as infrastructure, not a marketplace',
      intro: 'We trained callers to lead with curiosity \u2014 asking how prospects currently buy and sell plastics, where they see friction, and what visibility they have into market pricing. The pitch was never "replace your network" but "see the market clearly."',
      timeline: [
        { title: 'Persona-specific campaigns', body: 'Built separate campaigns for compounders (procurement/sourcing), compounders (sales/marketing), and converters. Each had tailored messaging for buy-side vs. sell-side pain points.' },
        { title: 'Caller training on plastics industry', body: 'Callers briefed on resin types, compounding vs. converting, margin dynamics, and common objections ("we already know everyone," "sounds like a marketplace"). Positioned Matium as infrastructure, not a marketplace.' },
        { title: 'High-volume consultative calling', body: 'Daily calling focused on diagnostic conversations: "How do you currently find new buyers?" / "Do you have real-time visibility into market pricing?" Every call aimed to qualify, not pitch.' },
        { title: 'Rapid iteration on messaging', body: 'Refined scripts weekly based on what resonated. "Real-time pricing visibility" and "verified buyer/seller network" consistently outperformed generic value props.' },
      ],
    },
    results: {
      title: '42 qualified demos in three months \u2014 including Fortune 500 names',
      paragraph: 'Matium went from cold-starting outbound in North America to a consistent pipeline of 14 demos per month with decision-makers at companies ranging from mid-market compounders to Fortune 500 chemical and manufacturing giants.',
      cards: [
        { num: '42', label: 'qualified demos booked', highlight: true },
        { num: '14', label: 'demos per month average' },
        { num: '5', label: 'campaign segments' },
        { num: 'VP/Director', label: 'average seniority level', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Industry-specific training</strong> \u2014 callers understood compounding, converting, resin grades, and margin dynamics',
        '<strong>"Infrastructure, not marketplace" positioning</strong> \u2014 neutralised the #1 objection before it came up',
        '<strong>Dual-persona campaigns</strong> \u2014 separate messaging for procurement (cost savings, supplier discovery) and sales (market visibility, new buyer access)',
        '<strong>Consultative approach</strong> \u2014 led with questions about their current process, never a hard pitch',
      ],
    },
    more: [
      { slug: 'mintec', name: 'Mintec by Expana', tag: 'Procurement Intelligence', stat: '30+', statLabel: 'demos per month' },
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
      { slug: 'freightgate', name: 'Freightgate', tag: 'Freight Rate Management', stat: '20+', statLabel: 'demos per month' },
    ],
  },
  {
    slug: 'kpler',
    name: 'Kpler',
    tag: 'Maritime Intelligence',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn helped Kpler\'s MarineTraffic solution book 19 qualified demos per month with logistics leaders at companies like Nestl\u00e9, Ford, and Stellantis.',
    markets: 'Europe, North America, Middle East, Asia',
    heroStats: [
      { num: '19', label: 'demos per month' },
      { num: 'Global', label: 'market reach' },
      { num: 'Fortune 500', label: 'enterprise logos' },
      { num: 'VP/Director', label: 'average seniority' },
    ],
    featuredStat: { num: 'Enterprise logos', label: 'Nestl\u00e9, Ford, Stellantis, Merck, GAP Inc, Flex, Sappi' },
    challenge: {
      title: 'Scaling outbound for a container tracking solution across global markets',
      paragraphs: [
        'Kpler is a leading commodity and energy data intelligence company. Following their acquisition of MarineTraffic, they needed to drive adoption of their container tracking solution among large manufacturers and shippers worldwide.',
        'The challenge was reaching senior logistics and supply chain decision-makers at enterprises that ship thousands of containers per year \u2014 across Europe, North America, the Middle East, and Asia \u2014 and positioning container tracking as a must-have operational tool, not a nice-to-have.',
      ],
      bullets: [
        'Global target market spanning multiple continents and time zones',
        'Needed to reach VP/Director-level logistics and supply chain leaders',
        'Highly competitive space with established visibility providers',
        'Enterprise buyers with long evaluation cycles',
        'Had to differentiate container tracking from generic supply chain visibility',
      ],
    },
    solution: {
      title: 'High-volume global outbound combining calling and email',
      intro: 'We launched a coordinated calling and email programme targeting manufacturers and large shippers globally. Callers were trained on container tracking use cases, competitive differentiation, and the specific pain points of managing ocean freight visibility.',
      timeline: [
        { title: 'Global list building', body: 'Built targeted lists of 69,000+ contacts at manufacturers and large shippers across Europe, North America, Middle East, and Asia \u2014 filtered by container volume and logistics team structure.' },
        { title: 'Multi-market email campaigns', body: 'Launched region-specific email sequences for manufacturers in North America and Europe, tailored to local supply chain challenges and container shipping patterns.' },
        { title: 'Calling programme deployment', body: 'Dedicated callers focused on converting email engagement into booked demos. Every conversation centred on current container tracking pain points and visibility gaps.' },
        { title: 'Enterprise qualification', body: 'Strict qualification on container volume, existing tracking solutions, and decision-making authority to ensure every demo was worth Kpler\'s time.' },
      ],
    },
    results: {
      title: '19 qualified demos per month with global enterprises',
      paragraph: 'Kpler achieved a consistent flow of 19 qualified demos per month with senior logistics and supply chain leaders, including meetings with some of the world\'s largest manufacturers and consumer goods companies.',
      cards: [
        { num: '19', label: 'demos per month', highlight: true },
        { num: 'Global', label: 'market reach' },
        { num: 'Fortune 500', label: 'enterprise logos booked', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Global scale</strong> \u2014 coordinated outbound across Europe, North America, Middle East, and Asia',
        '<strong>Container tracking expertise</strong> \u2014 callers understood ETA reliability, demurrage, and ocean freight operations',
        '<strong>Enterprise-calibre pipeline</strong> \u2014 Nestl\u00e9, Ford, Stellantis, Merck, and other Fortune 500 companies booked within weeks',
        '<strong>Speed to results</strong> \u2014 19 demos in the first month from a standing start',
      ],
    },
    more: [
      { slug: 'buyco', name: 'BuyCo', tag: 'Ocean Shipping Software', stat: '67', statLabel: 'demos booked' },
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics Software', stat: '80+', statLabel: 'demos per month' },
      { slug: 'descartes', name: 'Descartes Systems', tag: 'Compliance / Export Control', stat: 'EMEA', statLabel: 'wide outbound' },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-40px" } as const,
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export const CaseStudyDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const study = STUDIES.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-[#F9F8F4] flex items-center justify-center pt-40">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Case study not found</h1>
          <a href="/case-studies" className="text-[#C5A059] font-medium hover:underline">Back to all case studies</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Back Link */}
      <div className="pt-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <a href="/case-studies" className="inline-flex items-center gap-2 text-sm text-[#C5A059] font-medium hover:underline">
            <ArrowLeft size={16} /> Back to all case studies
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Info */}
            <motion.div {...fadeUp}>
              <span className={`inline-block text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full mb-4 ${study.tagColor}`}>
                {study.tag}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight mb-5">{study.name}</h1>
              <p className="text-stone-500 leading-relaxed mb-6">{study.summary}</p>
              <div className="space-y-1.5 text-sm">
                <p className="text-stone-400"><strong className="text-[#1a1a1a]">Markets:</strong> {study.markets}</p>
              </div>
            </motion.div>

            {/* Right — Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {study.heroStats.map((s, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <div className="font-serif text-3xl text-[#1a1a1a] leading-none mb-1">{s.num}</div>
                  <div className="text-xs text-stone-400">{s.label}</div>
                </div>
              ))}
              {study.featuredStat && (
                <div className="col-span-2 bg-[#1a1a1a] border border-stone-800 rounded-xl p-5">
                  <div className="font-serif text-2xl text-white leading-tight mb-1">{study.featuredStat.num}</div>
                  <div className="text-xs text-stone-500">{study.featuredStat.label}</div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise logos strip */}
      {study.enterpriseLogos && study.enterpriseLogos.length > 0 && (
        <section className="px-6 pb-16">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              {...fadeUp}
              className="bg-white border border-stone-200 rounded-2xl px-6 py-8 md:px-10 md:py-10"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6 text-center">
                Enterprise demos booked with
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-x-6 gap-y-8 items-center justify-items-center">
                {study.enterpriseLogos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 md:h-12 max-w-[100px] object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <div className="px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          {/* The Challenge */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">The Challenge</div>
            <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">{study.challenge.title}</h2>
            {study.challenge.paragraphs.map((p, i) => (
              <p key={i} className="text-stone-500 leading-relaxed mb-3">{p}</p>
            ))}
            <ul className="mt-6 space-y-3">
              {study.challenge.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-500">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What We Did */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">What We Did</div>
            <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-4">{study.solution.title}</h2>
            <p className="text-stone-500 leading-relaxed mb-8">{study.solution.intro}</p>

            {/* Timeline */}
            <div className="space-y-0">
              {study.solution.timeline.map((step, i) => (
                <div key={i} className="flex gap-5 pb-8 relative">
                  {/* Connector line */}
                  {i < study.solution.timeline.length - 1 && (
                    <div className="absolute left-[14px] top-9 bottom-0 w-px bg-stone-200" />
                  )}
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-xs font-semibold shrink-0 relative z-10">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1a1a1a] mb-1">{step.title}</div>
                    <div className="text-sm text-stone-500 leading-relaxed">{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          {study.quote && (
            <motion.div {...fadeUp} className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 mb-16 relative">
              <div className="font-serif text-6xl text-stone-700 leading-none absolute top-5 left-7">"</div>
              <p className="text-stone-300 text-lg leading-relaxed pt-8 mb-6">{study.quote.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-700" />
                <div>
                  <div className="text-white text-sm font-semibold">{study.quote.name}</div>
                  <div className="text-stone-500 text-xs">{study.quote.title}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">The Results</div>
            <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-4">{study.results.title}</h2>
            <p className="text-stone-500 leading-relaxed mb-8">{study.results.paragraph}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {study.results.cards.map((card, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-5 text-center ${
                    card.highlight
                      ? 'bg-[#1a1a1a] border border-stone-800'
                      : 'bg-white border border-stone-200'
                  }`}
                >
                  <div className={`font-serif text-3xl leading-none mb-2 ${card.highlight ? 'text-emerald-400' : 'text-[#1a1a1a]'}`}>
                    {card.num}
                  </div>
                  <div className={`text-xs ${card.highlight ? 'text-stone-500' : 'text-stone-400'}`}>{card.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why It Worked */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">Why It Worked</div>
            <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">{study.whyItWorked.title}</h2>
            <ul className="space-y-4">
              {study.whyItWorked.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-500 leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            {...fadeUp}
            className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-serif text-2xl text-white mb-1">Want results like {study.name}?</h3>
              <p className="text-sm text-stone-400">Book a strategy call and we'll show you what we can do for your pipeline.</p>
            </div>
            <a
              href="https://calendly.com/george-lynn-lead-gen/strategy-session-w" target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] rounded-xl text-sm font-medium hover:bg-stone-100 transition-colors shadow-lg"
            >
              Book a strategy call <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* More Case Studies */}
      <section className="px-6 pb-24 border-t border-stone-200 pt-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl md:text-3xl mb-8">More case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {study.more.map((m, i) => (
              <a
                key={i}
                href={`/case-study/${m.slug}`}
                className="group bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-serif text-xl mb-1">{m.name}</div>
                <div className="text-xs text-stone-400 mb-4">{m.tag}</div>
                <div className="font-serif text-2xl text-[#C5A059]">{m.stat}</div>
                <div className="text-[11px] text-stone-400">{m.statLabel}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getCaseStudySlugs = () => STUDIES.map(s => s.slug);
