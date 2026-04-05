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
  duration: string;
  retainer: string;
  heroStats: { num: string; label: string }[];
  featuredStat?: { num: string; label: string };
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
    tag: 'TMS / Logistics SaaS',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn helped Europe\'s leading transport management platform scale from zero outbound to 60-80 qualified demos per month across 6 languages.',
    markets: 'DACH, France, Spain, Italy, Benelux, Nordics',
    duration: '12+ months (ongoing)',
    retainer: '£14,000/month',
    heroStats: [
      { num: '280', label: 'demos booked in year one' },
      { num: '£10M+', label: 'pipeline generated' },
      { num: '6', label: 'languages covered' },
      { num: '60-80', label: 'meetings/month ongoing' },
    ],
    featuredStat: { num: 'Largest client engagement', label: 'Multi-language, multi-market, scaled outbound' },
    challenge: {
      title: 'Zero internal SDR capacity across six European markets',
      paragraphs: [
        'Alpega is a leading European transport management software (TMS) provider serving enterprise logistics operations. Their platform handles billions in freight spend annually — but their outbound sales engine didn\'t match the scale of their product.',
        'They had no internal SDR team, no structured outbound process, and no way to reach decision-makers across the DACH, French, Spanish, Italian, Benelux, and Nordic markets in their native languages.',
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
      title: 'Built a multilingual outbound engine from scratch',
      intro: 'We designed and deployed a full outbound calling programme covering all six language markets. Native-speaking callers were briefed on Alpega\'s platform, competitive landscape, and buyer personas — then put on the phones within two weeks.',
      timeline: [
        { title: 'ICP definition and list building', body: 'Mapped Alpega\'s ideal customers across each market — enterprise logistics operations, 3PLs, manufacturers with complex supply chains. Built targeted contact lists of VP/Director-level decision-makers.' },
        { title: 'Caller recruitment and training', body: 'Recruited native speakers for each market (EN, FR, DE, ES, IT, and Nordics). Trained every caller on Alpega\'s product, competitive positioning, and enterprise logistics buyer pain points.' },
        { title: 'Script development and testing', body: 'Created market-specific call scripts that addressed local buying patterns and objections. Tested and iterated within the first two weeks of live calling.' },
        { title: 'High-volume live calling', body: '200+ dials per day per caller across all six markets. Every conversation handled by a human — no AI, no automation on the phone.' },
        { title: 'Continuous optimisation', body: 'Weekly performance reviews, script adjustments, and market prioritisation based on conversion data. Scaled up callers in high-performing markets.' },
      ],
    },
    quote: {
      text: '[Client testimonial quote goes here — replace with actual quote from Alpega contact about the quality of meetings, the multilingual capability, or the scale of results delivered.]',
      name: '[Contact Name]',
      title: '[Title], Alpega Group',
    },
    results: {
      title: '280 qualified demos in year one — and still growing',
      paragraph: 'Within the first month, Alpega was receiving a steady stream of qualified demos with senior decision-makers across their target markets. By month three, we had scaled to a consistent 60-80 meetings per month.',
      cards: [
        { num: '280', label: 'qualified demos in year one', highlight: true },
        { num: '£10M+', label: 'pipeline generated' },
        { num: '60-80', label: 'meetings per month (ongoing)' },
        { num: '6', label: 'languages covered natively' },
        { num: '£14K', label: 'monthly retainer' },
        { num: '0 to 80', label: 'meetings/month from standing start', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Native-language callers in every market</strong> — French VPs got called in French, German directors in German. This changed the quality of conversations entirely.',
        '<strong>Domain expertise</strong> — Our callers understood TMS, freight management, and supply chain operations. They could hold a real conversation, not just read a script.',
        '<strong>Speed to market</strong> — Hiring 6 native-speaking SDRs internally would have taken 12+ months and cost over £600K in year one. We were live in 2 weeks.',
        '<strong>Scale without overhead</strong> — Alpega got the output of a 6-person multilingual SDR team without the management burden or attrition risk.',
        '<strong>Cross-market intelligence</strong> — Running all six markets simultaneously let us share patterns across territories.',
      ],
    },
    more: [
      { slug: 'mintec', name: 'Mintec / Expana', tag: 'Procurement Intelligence', stat: '151', statLabel: 'demos in 180 days' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '73', statLabel: 'meetings in 90 days' },
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
    ],
  },
  {
    slug: 'mintec',
    name: 'Mintec / Expana',
    tag: 'Procurement Intelligence',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn helped a commodity data platform book 151 enterprise demos with procurement leaders at £250M+ manufacturers in just 180 days.',
    markets: 'UK, DACH, France, Benelux',
    duration: '6 months (ongoing)',
    retainer: '£9,500/month',
    heroStats: [
      { num: '151', label: 'demos in 180 days' },
      { num: '£4.5M', label: 'pipeline generated' },
      { num: '4', label: 'markets covered' },
      { num: '25+', label: 'demos per month avg' },
    ],
    challenge: {
      title: 'Needed enterprise demos with procurement leaders at major manufacturers',
      paragraphs: [
        'Mintec (now Expana) is a leading commodity price data and procurement intelligence platform. Their buyers are senior procurement leaders at £250M+ manufacturers — a notoriously hard-to-reach audience.',
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
        { title: 'Native-language calling teams deployed', body: 'English, French, and German callers trained on procurement workflows, commodity markets, and Mintec\'s competitive advantages.' },
        { title: 'Qualification framework', body: 'Every meeting qualified against strict criteria — company size, active procurement challenges, decision-making authority, and timeline.' },
        { title: 'Pipeline reporting and optimisation', body: 'Weekly syncs with Mintec\'s sales team to review meeting quality, adjust targeting, and double down on what worked.' },
      ],
    },
    results: {
      title: '151 qualified demos in 180 days',
      paragraph: 'Mintec went from sporadic outbound to a consistent, predictable pipeline of 25+ qualified demos per month with exactly the right buyers at exactly the right companies.',
      cards: [
        { num: '151', label: 'qualified demos in 180 days', highlight: true },
        { num: '£4.5M', label: 'pipeline generated' },
        { num: '25+', label: 'demos per month average' },
        { num: '£250M+', label: 'average target company revenue' },
        { num: '4', label: 'markets covered' },
        { num: '0 to 25+', label: 'demos/month from standing start', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Procurement domain expertise</strong> — Our callers could discuss commodity price volatility, category management, and procurement transformation with credibility.',
        '<strong>Strict qualification</strong> — Every demo was with a named decision-maker at a company matching the ICP. No padding the numbers.',
        '<strong>Multi-market coverage</strong> — Reached procurement leaders across UK, DACH, France, and Benelux with native speakers.',
        '<strong>Speed</strong> — First meetings booked within 10 days of campaign launch.',
      ],
    },
    more: [
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics SaaS', stat: '280', statLabel: 'demos in year one' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '73', statLabel: 'meetings in 90 days' },
      { slug: 'descartes', name: 'Descartes Systems', tag: 'Compliance / Export Control', stat: 'EMEA', statLabel: 'wide outbound' },
    ],
  },
  {
    slug: 'easy4pro',
    name: 'Easy4Pro',
    tag: 'Supply Chain Platform',
    tagColor: 'bg-emerald-100 text-emerald-800',
    summary: 'How Lynn helped a logistics platform book 73 qualified meetings in 90 days with enterprise distributors across Europe and LATAM.',
    markets: 'DACH, France, Spain, LATAM',
    duration: '3 months initial, extended ongoing',
    retainer: '£8,500/month',
    heroStats: [
      { num: '73', label: 'meetings in 90 days' },
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
      title: '73 qualified meetings in 90 days',
      paragraph: 'Easy4Pro hit their 90-day target and extended the engagement. They now receive a consistent 20-30 qualified demos per month.',
      cards: [
        { num: '73', label: 'meetings in 90 days', highlight: true },
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
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics SaaS', stat: '280', statLabel: 'demos in year one' },
      { slug: 'mintec', name: 'Mintec / Expana', tag: 'Procurement Intelligence', stat: '151', statLabel: 'demos in 180 days' },
      { slug: 'wowflow', name: 'WowFlow', tag: 'Operations / Facilities SaaS', stat: '300', statLabel: 'qualified leads in 100 days' },
    ],
  },
  {
    slug: 'trayport',
    name: 'Trayport',
    tag: 'Energy Trading / Procurement',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn built a consistent pipeline of 20 qualified meetings per month with senior procurement decision-makers in metals and energy markets.',
    markets: 'UK, DACH, Nordics',
    duration: '6+ months (ongoing)',
    retainer: '£7,500/month',
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
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics SaaS', stat: '280', statLabel: 'demos in year one' },
      { slug: 'descartes', name: 'Descartes Systems', tag: 'Compliance / Export Control', stat: 'EMEA', statLabel: 'wide outbound' },
      { slug: 'mintec', name: 'Mintec / Expana', tag: 'Procurement Intelligence', stat: '151', statLabel: 'demos in 180 days' },
    ],
  },
  {
    slug: 'descartes',
    name: 'Descartes Systems',
    tag: 'Compliance / Export Control',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn helped a global logistics technology leader build outbound pipeline for their compliance division targeting aerospace and defence.',
    markets: 'UK, DACH, France, Benelux, Nordics',
    duration: '8+ months (ongoing)',
    retainer: '£11,000/month',
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
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics SaaS', stat: '280', statLabel: 'demos in year one' },
      { slug: 'trayport', name: 'Trayport', tag: 'Energy Trading / Procurement', stat: '20', statLabel: 'qualified meetings/month' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '73', statLabel: 'meetings in 90 days' },
    ],
  },
  {
    slug: 'wowflow',
    name: 'WowFlow',
    tag: 'Operations / Facilities SaaS',
    tagColor: 'bg-emerald-100 text-emerald-800',
    summary: 'How Lynn helped an operations platform generate 300 qualified leads in 100 days while expanding across multiple EU countries simultaneously.',
    markets: 'DACH, France, Benelux',
    duration: '100 days initial, extended ongoing',
    retainer: '£7,000/month',
    heroStats: [
      { num: '300', label: 'qualified leads in 100 days' },
      { num: '3', label: 'markets launched simultaneously' },
      { num: '100 days', label: 'initial campaign' },
      { num: 'Ongoing', label: 'extended engagement' },
    ],
    challenge: {
      title: 'Needed to expand across multiple EU countries from a standing start',
      paragraphs: [
        'WowFlow offers an operations and facilities management platform for enterprises. They had strong product-market fit in their home market but no presence across broader Europe.',
        'They needed to test and validate multiple markets simultaneously without building internal teams in each country.',
      ],
      bullets: [
        'No brand awareness outside home market',
        'Needed to test DACH, France, and Benelux simultaneously',
        'Limited internal sales capacity',
        'Needed fast market validation, not a 6-month experiment',
      ],
    },
    solution: {
      title: 'Simultaneous multi-market launch via calling',
      intro: 'We deployed native-speaking callers across three markets simultaneously, testing messaging, verticals, and buyer personas in parallel.',
      timeline: [
        { title: 'Market selection and ICP design', body: 'Identified the most promising segments in each market based on WowFlow\'s existing customer profile.' },
        { title: 'Parallel market deployment', body: 'German, French, and Dutch/English callers launched within the same two-week window.' },
        { title: 'Rapid testing and iteration', body: 'Tested different verticals, company sizes, and messaging in each market. Doubled down on what converted.' },
        { title: 'Scale and extend', body: 'After proving ROI in 100 days, expanded the engagement with increased caller capacity.' },
      ],
    },
    results: {
      title: '300 qualified leads in 100 days',
      paragraph: 'WowFlow validated three new markets in just over three months and extended the engagement to continue building pipeline across Europe.',
      cards: [
        { num: '300', label: 'qualified leads in 100 days', highlight: true },
        { num: '3', label: 'markets launched simultaneously' },
        { num: '14 days', label: 'from start to first leads' },
        { num: 'Extended', label: 'engagement ongoing', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Parallel market testing</strong> — Three markets at once gave WowFlow comparative data to make smart expansion decisions.',
        '<strong>Speed</strong> — 100-day sprint delivered results that would have taken 12+ months with internal hiring.',
        '<strong>Native speakers</strong> — Callers who could have real conversations in German, French, and Dutch.',
      ],
    },
    more: [
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '73', statLabel: 'meetings in 90 days' },
      { slug: 'teamlearn', name: 'Teamlearn', tag: 'Enterprise SaaS / L&D', stat: '20-30', statLabel: 'demos/month' },
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics SaaS', stat: '280', statLabel: 'demos in year one' },
    ],
  },
  {
    slug: 'teamlearn',
    name: 'Teamlearn',
    tag: 'Enterprise SaaS / L&D',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn took Teamlearn from 1-2 demos per month to 20-30 per month, generating £1.2M in pipeline with no structured outbound in place.',
    markets: 'UK, DACH',
    duration: '6+ months (ongoing)',
    retainer: '£6,500/month',
    heroStats: [
      { num: '20-30', label: 'demos/month (from 1-2)' },
      { num: '£1.2M', label: 'pipeline generated' },
      { num: '2', label: 'markets covered' },
      { num: '15x', label: 'increase in demo volume' },
    ],
    challenge: {
      title: 'Had 1-2 demos per month with no structured outbound',
      paragraphs: [
        'Teamlearn offers an enterprise L&D and training platform. They had a strong product but almost no pipeline — just 1-2 demos per month from sporadic inbound and founder networking.',
        'They needed a step-change in demo volume to hit their growth targets, but didn\'t have the budget or time to build an internal SDR team.',
      ],
      bullets: [
        'Only 1-2 demos per month before Lynn',
        'No outbound process, tools, or dedicated prospecting',
        'Needed to reach L&D and HR decision-makers at enterprises',
        'Small team — couldn\'t afford to distract sellers with prospecting',
      ],
    },
    solution: {
      title: 'From zero outbound to 20-30 demos per month',
      intro: 'We built Teamlearn\'s entire outbound engine from scratch — ICP definition, data sourcing, caller training, and live calling — within two weeks.',
      timeline: [
        { title: 'ICP and persona mapping', body: 'Identified the key buyers — Heads of L&D, HR Directors, Chief People Officers — at enterprise companies in UK and DACH.' },
        { title: 'Data build and enrichment', body: 'Built targeted contact lists with verified direct dials for decision-makers at target companies.' },
        { title: 'Caller deployment', body: 'English and German callers trained on Teamlearn\'s platform, competitive landscape, and L&D buyer pain points.' },
        { title: 'Rapid scaling', body: 'Went from first dials to 20+ demos per month within 6 weeks. Hit 30/month run rate by month 3.' },
      ],
    },
    results: {
      title: 'From 1-2 to 20-30 demos per month',
      paragraph: 'Teamlearn went from near-zero pipeline to a predictable, consistent flow of qualified demos with enterprise L&D buyers — generating £1.2M in pipeline within six months.',
      cards: [
        { num: '20-30', label: 'demos per month', highlight: true },
        { num: '£1.2M', label: 'pipeline generated' },
        { num: '15x', label: 'increase in demo volume' },
        { num: '1-2 → 30', label: 'monthly demo transformation', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Massive uplift from a low base</strong> — Going from 1-2 to 20-30 demos/month transformed Teamlearn\'s growth trajectory.',
        '<strong>Speed to impact</strong> — First demos within two weeks. 20+/month within six weeks.',
        '<strong>Enterprise-grade conversations</strong> — Callers could discuss L&D strategy, training ROI, and workforce development at a senior level.',
      ],
    },
    more: [
      { slug: 'wowflow', name: 'WowFlow', tag: 'Operations / Facilities SaaS', stat: '300', statLabel: 'qualified leads in 100 days' },
      { slug: 'tendereasy', name: 'Tendereasy', tag: 'Procurement / Tendering', stat: '20', statLabel: 'demos/month' },
      { slug: 'mintec', name: 'Mintec / Expana', tag: 'Procurement Intelligence', stat: '151', statLabel: 'demos in 180 days' },
    ],
  },
  {
    slug: 'tendereasy',
    name: 'Tendereasy',
    tag: 'Procurement / Tendering',
    tagColor: 'bg-[#C5A059]/15 text-[#8a6a28]',
    summary: 'How Lynn built a consistent pipeline of 20 qualified demos per month for a procurement tendering platform targeting enterprise buyers.',
    markets: 'Benelux, DACH, France',
    duration: '6+ months (ongoing)',
    retainer: '£7,000/month',
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
        { title: 'Native-language deployment', body: 'Dutch, German, and French callers trained on procurement processes and tendering workflows.' },
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
      { slug: 'mintec', name: 'Mintec / Expana', tag: 'Procurement Intelligence', stat: '151', statLabel: 'demos in 180 days' },
      { slug: 'smartbooking', name: 'SmartBooking', tag: 'Logistics / Booking Platform', stat: '20', statLabel: 'demos/month' },
      { slug: 'alpega', name: 'Alpega Group', tag: 'TMS / Logistics SaaS', stat: '280', statLabel: 'demos in year one' },
    ],
  },
  {
    slug: 'smartbooking',
    name: 'SmartBooking',
    tag: 'Logistics / Booking Platform',
    tagColor: 'bg-stone-200/80 text-stone-700',
    summary: 'How Lynn helped a logistics booking platform generate 20 qualified demos per month with operations and supply chain decision-makers.',
    markets: 'UK, DACH, Benelux',
    duration: '4+ months (ongoing)',
    retainer: '£6,500/month',
    heroStats: [
      { num: '20', label: 'demos per month' },
      { num: '3', label: 'markets covered' },
      { num: 'Ops', label: 'and SC decision-makers' },
      { num: 'Ongoing', label: 'engagement' },
    ],
    challenge: {
      title: 'Needed qualified meetings with operations and supply chain leaders',
      paragraphs: [
        'SmartBooking offers a logistics booking and coordination platform. They needed to systematically reach operations and supply chain decision-makers at companies managing complex logistics.',
        'Their previous outbound efforts had been founder-led and inconsistent — they needed a scalable, repeatable process.',
      ],
      bullets: [
        'Founder-led sales with no dedicated prospecting',
        'Inconsistent pipeline — feast or famine',
        'Needed to reach operations and logistics leaders across multiple markets',
        'Growing competition required faster pipeline build',
      ],
    },
    solution: {
      title: 'Structured outbound targeting logistics operations',
      intro: 'We built a calling programme targeting operations directors, logistics managers, and supply chain VPs at companies with complex booking and coordination needs.',
      timeline: [
        { title: 'ICP refinement and targeting', body: 'Identified the industries and company profiles with the most complex logistics coordination needs.' },
        { title: 'Caller deployment', body: 'English, German, and Dutch callers trained on logistics booking workflows and SmartBooking\'s platform.' },
        { title: 'Consistent outbound execution', body: 'Daily calling with focus on quality conversations and strict meeting qualification.' },
        { title: 'Growth and optimisation', body: 'Expanded into additional verticals as initial markets proved out.' },
      ],
    },
    results: {
      title: '20 qualified demos per month',
      paragraph: 'SmartBooking now has a consistent, reliable pipeline of qualified meetings — freeing the founder to focus on closing instead of prospecting.',
      cards: [
        { num: '20', label: 'demos per month', highlight: true },
        { num: '3', label: 'markets covered' },
        { num: 'Director+', label: 'average seniority' },
        { num: 'Ongoing', label: 'engagement continues', highlight: true },
      ],
    },
    whyItWorked: {
      title: 'What made this engagement successful',
      bullets: [
        '<strong>Freed the founder</strong> — SmartBooking\'s founder went from spending 50% of time prospecting to 100% on closing.',
        '<strong>Predictable pipeline</strong> — 20 meetings per month replaced the feast-or-famine cycle.',
        '<strong>Multi-market from day one</strong> — UK, DACH, and Benelux covered simultaneously with native speakers.',
      ],
    },
    more: [
      { slug: 'tendereasy', name: 'Tendereasy', tag: 'Procurement / Tendering', stat: '20', statLabel: 'demos/month' },
      { slug: 'easy4pro', name: 'Easy4Pro', tag: 'Supply Chain Platform', stat: '73', statLabel: 'meetings in 90 days' },
      { slug: 'wowflow', name: 'WowFlow', tag: 'Operations / Facilities SaaS', stat: '300', statLabel: 'qualified leads in 100 days' },
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
          <a href="#/case-studies" className="text-[#C5A059] font-medium hover:underline">Back to all case studies</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Back Link */}
      <div className="pt-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <a href="#/case-studies" className="inline-flex items-center gap-2 text-sm text-[#C5A059] font-medium hover:underline">
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
                <p className="text-stone-400"><strong className="text-[#1a1a1a]">Campaign duration:</strong> {study.duration}</p>
                <p className="text-stone-400"><strong className="text-[#1a1a1a]">Retainer:</strong> {study.retainer}</p>
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
              href="#contact"
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
                href={`#/case-study/${m.slug}`}
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
