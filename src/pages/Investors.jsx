import React from 'react';

const Investors = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-transition bg-neutral-900">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        </div>
        <div className="container relative py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-display-large mb-6 sm:mb-8 text-white leading-tight">
              Investor Relations
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Join us in revolutionizing the future of computing and digital business ecosystems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm border border-neutral-700">
              <h2 className="text-3xl font-bold mb-6 text-white">Investment Opportunity</h2>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                RavanaOS is set to disrupt traditional, siloed business solutions by unifying disparate systems into one intelligent ecosystem. With proven traction in our home market and a scalable vision for global expansion, we invite investors to join us in revolutionizing digital business.
              </p>
              <a
                href="https://app.reclaim.ai/m/patu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Book a call
              </a>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700">
                <h3 className="text-2xl font-bold mb-2 text-white">Market Size</h3>
                <p className="text-purple-400 text-4xl font-bold mb-2">$500B+</p>
                <p className="text-neutral-400">Total Addressable Market</p>
              </div>
              <div className="p-6 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700">
                <h3 className="text-2xl font-bold mb-2 text-white">Growth</h3>
                <p className="text-purple-400 text-4xl font-bold mb-2">300%</p>
                <p className="text-neutral-400">Year over Year</p>
              </div>
              <div className="p-6 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700">
                <h3 className="text-2xl font-bold mb-2 text-white">Partners</h3>
                <p className="text-purple-400 text-4xl font-bold mb-2">50+</p>
                <p className="text-neutral-400">Global Partners</p>
              </div>
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

export default Investors;