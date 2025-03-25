import React from 'react';

const TermsAndConditions = () => {
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
              Terms and Conditions
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Please read our Terms and Conditions carefully before using Ravana OS.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm border border-neutral-700">
              <h2 className="text-3xl font-bold mb-6">Terms and Conditions for Ravana OS Website</h2>
              <p className="text-xl text-neutral-300 mb-6">Last Updated: March 25, 2025</p>

              <h3 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h3>
              <p className="text-lg text-neutral-300 mb-6">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Ravana OS Project ("we," "us" or "our"), concerning your access to and use of the Ravana OS website and software ("Ravana OS"). <br />
                By accessing or using Ravana OS, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access Ravana OS.
              </p>

              <h3 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h3>
              <h4 className="text-xl font-semibold mb-2">2.1 Our Intellectual Property</h4>
              <p className="text-lg text-neutral-300 mb-6">
                Ravana OS and its original content, features, and functionality are owned by Ravana OS Project and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <h4 className="text-xl font-semibold mb-2">2.2 Open Source Licensing</h4>
              <p className="text-lg text-neutral-300 mb-6">
                Ravana OS is distributed under the GNU General Public License v3.0. You are permitted to use, modify, and distribute Ravana OS in accordance with this license. For details, please refer to the license text included with the software or available at our GitHub repository.
              </p>
              <h4 className="text-xl font-semibold mb-2">2.3 Contribution License</h4>
              <p className="text-lg text-neutral-300 mb-6">
                By submitting content or code to Ravana OS (including but not limited to bug reports, feature requests, documentation, and code patches), you grant us a worldwide, non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such contributions.
              </p>

              <h3 className="text-2xl font-semibold mb-4">3. User Representations</h3>
              <p className="text-lg text-neutral-300 mb-6">
                By using Ravana OS, you represent and warrant that: <br />
                - You have the legal capacity and agree to comply with these Terms <br />
                - You are not a minor in the jurisdiction in which you reside <br />
                - You will not access Ravana OS through automated or non-human means <br />
                - You will not use Ravana OS for any illegal or unauthorized purpose <br />
                - Your use of Ravana OS will not violate any applicable law or regulation
              </p>

              <h3 className="text-2xl font-semibold mb-4">4. User Registration</h3>
              <p className="text-lg text-neutral-300 mb-6">
                You may be required to register to use certain features of Ravana OS. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.
              </p>

              <h3 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h3>
              <p className="text-lg text-neutral-300 mb-6">
                You agree not to: <br />
                - Use Ravana OS in any manner that could disable, overburden, damage, or impair the system <br />
                - Use any robot, spider, or other automatic device to access Ravana OS <br />
                - Introduce any viruses, trojan horses, worms, or other malicious or technologically harmful material <br />
                - Attempt to gain unauthorized access to any parts of Ravana OS <br />
                - Interfere with the proper working of Ravana OS <br />
                - Make any unauthorized use of Ravana OS, including collecting usernames and/or email addresses by electronic means
              </p>

              <h3 className="text-2xl font-semibold mb-4">6. Software Updates</h3>
              <p className="text-lg text-neutral-300 mb-6">
                Ravana OS may automatically download and install updates. These updates are designed to improve, enhance, and further develop Ravana OS and may take the form of bug fixes, enhanced functions, new software modules, and completely new versions. You agree to receive such updates as part of your use of Ravana OS.
              </p>

              <h3 className="text-2xl font-semibold mb-4">7. Third-Party Websites and Content</h3>
              <p className="text-lg text-neutral-300 mb-6">
                Ravana OS may contain links to third-party websites that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h3 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h3>
              <h4 className="text-xl font-semibold mb-2">8.1 "As Is" and "As Available" Basis</h4>
              <p className="text-lg text-neutral-300 mb-6">
                Ravana OS is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied.
              </p>
              <h4 className="text-xl font-semibold mb-2">8.2 Limitation of Liability</h4>
              <p className="text-lg text-neutral-300 mb-6">
                In no event shall we be liable for any indirect damages resulting from: <br />
                - Your access to or inability to access Ravana OS <br />
                - Any conduct or content of third parties on Ravana OS <br />
                - Unauthorized access or alteration of your transmissions/content
              </p>
              <h4 className="text-xl font-semibold mb-2">8.3 Indemnification</h4>
              <p className="text-lg text-neutral-300 mb-6">
                You agree to defend us against claims arising from your violation of these Terms.
              </p>

              <h3 className="text-2xl font-semibold mb-4">9. Governing Law</h3>
              <p className="text-lg text-neutral-300 mb-6">
                These Terms shall be governed by EU laws.
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

export default TermsAndConditions;
