import React from 'react';

const CookiePolicy = () => {
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
              Cookie Policy
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Learn how we use cookies on the Ravana OS Website and how you can manage them.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm border border-neutral-700">
              <h2 className="text-3xl font-bold mb-6">Cookie Policy for Ravana OS Website</h2>
              <p className="text-xl text-neutral-300 mb-6">Last Updated: March 25, 2025</p>

              <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
              <p className="text-lg text-neutral-300 mb-6">
                This Cookie Policy explains how Ravana OS Project ("we", "us", or "our") uses cookies on the Ravana OS website ("Website"). This Cookie Policy should be read together with our Privacy Policy.
              </p>

              <h3 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h3>
              <p className="text-lg text-neutral-300 mb-6">
                Cookies are small text files placed on your device when visiting websites. They help improve functionality and user experience.
              </p>

              <h3 className="text-2xl font-semibold mb-4">3. How We Use Cookies?</h3>
              <p className="text-lg text-neutral-300 mb-6">
                We use cookies for: <br />
                - <strong>Essential Functions</strong>: To ensure proper operation. <br />
                - <strong>Performance</strong>: To analyze traffic. <br />
                - <strong>Personalization</strong>: To remember preferences. <br />
                - <strong>Targeting</strong>: For advertising purposes.
              </p>

              <h3 className="text-2xl font-semibold mb-4">4. Types of Cookies We Use</h3>

              <h4 className="text-xl font-semibold mb-2">Essential Cookies (Always Active)</h4>
              <table className="min-w-full table-auto mb-6 border-collapse border border-neutral-700">
  <thead>
    <tr className="bg-neutral-800">
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Cookie Name</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Purpose</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-neutral-700">
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">session_id</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Authentication</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Session</td>
    </tr>
    <tr className="bg-neutral-800">
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">csrf_token</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Security</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Session</td>
    </tr>
  </tbody>
</table>

<h4 className="text-xl font-semibold mb-2">Analytics Cookies (Non-Essential)</h4>
<table className="min-w-full table-auto mb-6 border-collapse border border-neutral-700">
  <thead>
    <tr className="bg-neutral-800">
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Cookie Name</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Purpose</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-neutral-700">
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">_ga</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Google Analytics</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">2 years</td>
    </tr>
  </tbody>
</table>

<h4 className="text-xl font-semibold mb-2">Functionality Cookies (Non-Essential)</h4>
<table className="min-w-full table-auto mb-6 border-collapse border border-neutral-700">
  <thead>
    <tr className="bg-neutral-800">
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Cookie Name</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Purpose</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-neutral-700">
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">language</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Remembers language preference</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">1 year</td>
    </tr>
  </tbody>
</table>

<h4 className="text-xl font-semibold mb-2">Advertising Cookies (Non-Essential)</h4>
<table className="min-w-full table-auto mb-6 border-collapse border border-neutral-700">
  <thead>
    <tr className="bg-neutral-800">
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Cookie Name</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Purpose</th>
      <th className="text-neutral text-lg text-neutral-400 px-4 py-2 border-b border-neutral-600">Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-neutral-700">
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">_fbp</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">Facebook targeting</td>
      <td className="text-neutral-300 px-4 py-2 border-b border-neutral-600">3 months</td>
    </tr>
  </tbody>
</table>


              <h3 className="text-2xl font-semibold mb-4">5. Managing Cookies</h3>
              <p className="text-lg text-neutral-300 mb-6">
                You can manage cookies via browser settings or our cookie preference tool.
              </p>

              <h3 className="text-2xl font-semibold mb-4">6. Contact Us</h3>
              <p className="text-lg text-neutral-300 mb-6">
                For questions about cookies, please contact us at: <br />
                <strong>Email</strong>: privacy@ravanaos.com
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

export default CookiePolicy;
