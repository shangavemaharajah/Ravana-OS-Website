import React from 'react';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-transition bg-neutral-900">
      {/* Hero Section */}
      <section className="min-h-[50vh] sm:min-h-[80vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        </div>
        <div className="container relative py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-display-large mb-6 sm:mb-8 text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Your privacy is important to us. Read our Privacy Policy for details on how we handle your data.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm border border-neutral-700">
              <h2 className="text-3xl font-bold mb-6">Privacy Policy for Ravana OS Website</h2>
              <p className="text-xl text-neutral-300 mb-6">Last Updated: March 25, 2025</p>

              <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
              <p className="text-lg text-neutral-300 mb-6">
                Welcome to the Ravana OS website ("Website"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website. Please read this Privacy Policy carefully. By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>

              <h3 className="text-2xl font-semibold mb-4">2. Data Controller Information</h3>
              <p className="text-lg text-neutral-300 mb-6">
                <strong>Data Controller</strong>: Ravana OS Project <br />
                <strong>Email</strong>: privacy@ravanaos.com <br />
                <strong>Contact Person</strong>: Data Protection Officer
              </p>

              <h3 className="text-2xl font-semibold mb-4">3. Information We Collect</h3>
              <h4 className="text-xl font-semibold mb-2">3.1 Personal Data</h4>
              <p className="text-lg text-neutral-300 mb-6">
                We may collect personal data that you voluntarily provide to us when you: <br />
                - Register for an account <br />
                - Subscribe to our newsletter <br />
                - Contact us through our contact forms <br />
                - Participate in forums or communities <br />
                - Download Ravana OS software
              </p>
              <h4 className="text-xl font-semibold mb-2">3.2 Automatically Collected Data</h4>
              <p className="text-lg text-neutral-300 mb-6">
                When you visit our Website, we may automatically collect certain information about your device, including: <br />
                - IP address <br />
                - Browser type and version <br />
                - Operating system <br />
                - Time and date of your visit <br />
                - Pages you view <br />
                - Time spent on pages <br />
                - Referral source
              </p>
              <h4 className="text-xl font-semibold mb-2">3.3 Cookies</h4>
              <p className="text-lg text-neutral-300 mb-6">
                We use cookies and similar tracking technologies to track activity on our Website and hold certain information. For detailed information about our use of cookies, please see our Cookie Policy.
              </p>

              {/* Repeat similar structure for the rest of the Privacy Policy sections */}
              <h3 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h3>
              <p className="text-lg text-neutral-300 mb-6">
                We process your personal data based on the following legal grounds: <br />
                - Consent <br />
                - Contractual Necessity <br />
                - Legitimate Interests <br />
                - Legal Obligation
              </p>

              {/* Continue with more sections for: How We Use Your Information, Data Retention, Data Transfer, etc. */}

              <h3 className="text-2xl font-semibold mb-4">13. Contact Us</h3>
              <p className="text-lg text-neutral-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at: <br />
                <strong>Email</strong>: privacy@ravanaos.com <br />
                <strong>Data Protection Officer</strong>: dpo@ravanaos.com
              </p>

              <h3 className="text-2xl font-semibold mb-4">14. Complaints</h3>
              <p className="text-lg text-neutral-300 mb-6">
                You have the right to lodge a complaint with a data protection authority about our collection and use of your personal data. For more information, please contact your local data protection authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 border-t border-neutral-800">
        <div className="container mx-auto px-4">
          <p className="text-sm text-neutral-500 text-center">© {currentYear} RavanaOS. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
