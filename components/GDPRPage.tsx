import React from 'react';

export const GDPRPage = () => {
  return (
    <section className="pt-40 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4 tracking-tight">Data Processing & GDPR</h1>
        <p className="text-sm text-stone-400 mb-4">How we handle prospect data in our outbound campaigns</p>
        <p className="text-sm text-stone-400 mb-12">Last updated: April 2026</p>

        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-8">
          <div className="bg-[#F9F8F4] border border-stone-200 rounded-xl p-6">
            <p className="text-stone-700 font-medium mb-2">Why this page exists</p>
            <p className="text-sm">As a B2B lead generation agency, we process business contact data on behalf of our clients. Enterprise buyers and compliance teams regularly ask how we handle this data. This page answers those questions transparently.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Our role in data processing</h2>
            <p>When we run outbound campaigns for a client, we act in two capacities:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Data Controller</strong> — for prospect data we source independently (e.g. from public business directories, LinkedIn, company websites, and licensed B2B databases) for the purpose of legitimate B2B outreach.</li>
              <li><strong>Data Processor</strong> — when a client provides us with their own contact lists to reach on their behalf. In this case, we process data strictly according to the client's instructions.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">What data we process</h2>
            <p>The business contact data we handle typically includes:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Full name and job title</li>
              <li>Business email address</li>
              <li>Business phone number</li>
              <li>Company name, industry, and size</li>
              <li>Country and region</li>
              <li>LinkedIn profile URL</li>
            </ul>
            <p className="mt-2">We do not process personal (non-business) contact data, sensitive personal data, or data relating to individuals acting in a purely private capacity.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Legal basis for processing</h2>
            <p>Our B2B outreach activities rely on <strong>legitimate interest</strong> (Article 6(1)(f) UK GDPR) as the lawful basis. This is based on:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The data subjects are business professionals being contacted in their professional capacity</li>
              <li>The outreach is relevant to their role and industry</li>
              <li>We provide a clear and easy opt-out mechanism in every communication</li>
              <li>We maintain suppression lists and honour all opt-out requests immediately</li>
              <li>The processing is proportionate — we target specific ICPs rather than mass-mailing</li>
            </ul>
            <p className="mt-2">We conduct Legitimate Interest Assessments (LIAs) and can provide documentation upon request.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Data sources</h2>
            <p>We source B2B contact data from:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Licensed B2B data providers (e.g. Apollo, ZoomInfo)</li>
              <li>Publicly available business information (company websites, press releases, industry directories)</li>
              <li>LinkedIn (professional profiles in a business context)</li>
              <li>Client-provided lists (processed under Data Processing Agreement)</li>
            </ul>
            <p className="mt-2">We verify email addresses before sending to maintain deliverability and reduce unnecessary processing.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Data security</h2>
            <p>We implement appropriate technical and organisational measures to protect prospect data:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Data is stored in encrypted, access-controlled systems</li>
              <li>Access is limited to team members who need it for campaign execution</li>
              <li>We use enterprise-grade email platforms with security certifications</li>
              <li>Client data is logically separated — one client's data is never accessible to another</li>
              <li>We conduct regular reviews of our data handling practices</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Opt-out and suppression</h2>
            <p>Every email we send includes a clear unsubscribe mechanism. When a prospect opts out:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>They are added to a permanent suppression list within 24 hours</li>
              <li>They are removed from all active campaigns immediately</li>
              <li>Their domain may be added to a client-specific block list if requested</li>
              <li>Suppression lists are maintained indefinitely and checked before every campaign launch</li>
            </ul>
            <p className="mt-2">Prospects can also opt out by replying to any email or contacting us directly.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Data retention</h2>
            <p>We retain prospect data for the duration of the client engagement plus 12 months for reporting and suppression list maintenance. After this period, data is either deleted or anonymised unless there is a legal or contractual reason to retain it.</p>
            <p className="mt-2">Suppression lists (opt-outs and do-not-contact records) are retained indefinitely to ensure we never re-contact someone who has opted out.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">International transfers</h2>
            <p>We are a UK-based company. Where data is processed using tools or sub-processors based outside the UK, we ensure appropriate safeguards are in place (e.g. Standard Contractual Clauses, UK adequacy decisions) in compliance with UK GDPR requirements.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Data Processing Agreements</h2>
            <p>We enter into Data Processing Agreements (DPAs) with clients who require them. Our standard DPA covers:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Scope and purpose of processing</li>
              <li>Categories of data processed</li>
              <li>Security measures</li>
              <li>Sub-processor obligations</li>
              <li>Data breach notification procedures</li>
              <li>Data return and deletion upon termination</li>
            </ul>
            <p className="mt-2">If your organisation requires a DPA, contact us and we will provide one promptly.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Prospect rights</h2>
            <p>If you have been contacted as part of one of our campaigns, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Opt out</strong> — Reply to any email or click unsubscribe. We will remove you immediately.</li>
              <li><strong>Access</strong> — Request a copy of the data we hold about you.</li>
              <li><strong>Rectification</strong> — Request correction of any inaccurate data.</li>
              <li><strong>Erasure</strong> — Request deletion of your data from our systems.</li>
              <li><strong>Object</strong> — Object to processing of your data for outreach purposes.</li>
              <li><strong>Complain</strong> — Lodge a complaint with the UK Information Commissioner's Office (ICO) at <span className="text-stone-800">ico.org.uk</span>.</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, email <a href="mailto:privacy@lynnleadgen.com" className="text-[#C5A059] hover:underline">privacy@lynnleadgen.com</a>. We aim to respond within 30 days.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">For clients and prospective clients</h2>
            <p>If you are evaluating Lynn as a vendor and have questions about our data handling practices, compliance posture, or need documentation for your procurement process, we are happy to provide:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Our standard Data Processing Agreement</li>
              <li>Details of our sub-processors</li>
              <li>Our Legitimate Interest Assessment methodology</li>
              <li>Information about our technical security measures</li>
            </ul>
            <p className="mt-2">Contact <a href="mailto:privacy@lynnleadgen.com" className="text-[#C5A059] hover:underline">privacy@lynnleadgen.com</a> and we will respond within 48 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
