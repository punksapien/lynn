import React from 'react';

export const PrivacyPage = () => {
  return (
    <section className="pt-40 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-stone-400 mb-12">Last updated: April 2026</p>

        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-8">
          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Who we are</h2>
            <p>Lynn Lead Generation Ltd is a UK-registered company (Company Number 15427579). We provide B2B outbound lead generation services for supply chain, logistics, and procurement software companies. Our registered address is in England.</p>
            <p className="mt-2">For any privacy-related queries, contact us at <a href="mailto:privacy@lynnleadgen.com" className="text-[#C5A059] hover:underline">privacy@lynnleadgen.com</a>.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">What data we collect</h2>
            <p><strong>Website visitors:</strong> We collect standard analytics data (pages visited, referral source, device type) through cookies and similar technologies. We do not collect personally identifiable information unless you voluntarily provide it.</p>
            <p className="mt-2"><strong>When you book a call or contact us:</strong> We collect your name, email address, company name, and any other information you provide via our booking form or email.</p>
            <p className="mt-2"><strong>Clients:</strong> When you engage our services, we process business contact data (names, job titles, email addresses, phone numbers) of prospective leads as part of our outbound campaigns. This data is processed on your behalf as a data processor.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">How we use your data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your enquiries and schedule calls</li>
              <li>To deliver our lead generation services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-2">We do not sell your personal data to third parties.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Legal basis for processing</h2>
            <p>We process personal data under the following lawful bases (UK GDPR):</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Legitimate interest:</strong> B2B outbound outreach to relevant business contacts on behalf of our clients</li>
              <li><strong>Contract:</strong> Processing necessary to deliver our services to clients</li>
              <li><strong>Consent:</strong> Where you have opted in to receive communications from us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Data sharing</h2>
            <p>We may share data with trusted third-party service providers who assist in delivering our services (e.g. email platforms, CRM tools, analytics providers). All third parties are contractually bound to protect your data and process it only as instructed.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Data retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Client campaign data is retained for the duration of the engagement and a reasonable period afterwards for reporting purposes.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, email <a href="mailto:privacy@lynnleadgen.com" className="text-[#C5A059] hover:underline">privacy@lynnleadgen.com</a>.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Cookies</h2>
            <p>This website uses essential cookies to ensure basic functionality. We may also use analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">Changes to this policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
