import React from 'react';

export const TermsPage = () => {
  return (
    <section className="pt-40 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-stone-400 mb-12">Last updated: April 2026</p>

        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-8">
          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">1. About these terms</h2>
            <p>These terms govern your use of the Lynn Lead Generation Ltd website (lynnleadgen.com). By accessing this website, you agree to be bound by these terms. If you do not agree, please do not use the website.</p>
            <p className="mt-2">Lynn Lead Generation Ltd ("Lynn", "we", "us") is a company registered in England and Wales (Company Number 15427579).</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">2. Our services</h2>
            <p>Lynn provides B2B outbound lead generation services for supply chain, logistics, and procurement software companies. The information on this website is provided for general informational purposes and does not constitute a contractual offer.</p>
            <p className="mt-2">All service engagements are governed by a separate client agreement. The terms on this page apply only to your use of this website.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">3. Intellectual property</h2>
            <p>All content on this website — including text, graphics, logos, case studies, and tools — is the property of Lynn Lead Generation Ltd and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our written permission.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">4. Free tools</h2>
            <p>Our website may offer free tools such as the ROI Calculator and Market Scanner. These tools are provided "as is" for informational purposes only. The outputs are estimates and should not be relied upon as financial or business advice.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">5. Third-party links</h2>
            <p>This website may contain links to third-party websites (e.g. Calendly for booking calls, LinkedIn). We are not responsible for the content or privacy practices of these external sites.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">6. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, Lynn Lead Generation Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. We make no warranties regarding the accuracy, completeness, or reliability of the information provided.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">7. Governing law</h2>
            <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">8. Changes to these terms</h2>
            <p>We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#1a1a1a] mb-3">9. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:privacy@lynnleadgen.com" className="text-[#C5A059] hover:underline">privacy@lynnleadgen.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
