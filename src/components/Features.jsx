import React from 'react';

const Features = () => {
  return (
    <section className="section bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,60,203,0.05),transparent_50%)]" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-display-small mb-4 sm:mb-6 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
            Platform Enabled Features
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 px-4 sm:px-0">
            In a turely connected world, The possibilities are endless. RavanaOS is designed to be the central hub of that world.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
          <div className="feature-card group">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-primary-purple transition-colors">
              Marketplace For 3rd Party Add-Ons
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
            Open for developers to build solutions on top of our platform, published via the marketplace that deeply integrates with the RavanaOS.
            </p>
          </div>
          <div className="feature-card group">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-primary-purple transition-colors">
              Support For Multiple AI Models
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
              RavanaOS supports multiple AI models, enabling businesses to leverage the power of AI with their favorite.
            </p>
          </div>
          <div className="feature-card group">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-primary-purple transition-colors">
              Outsource Your Tech
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
              Using the power of single platform, businesses can outsource their tech needs to RavanaOS or other certified tech support providers.
            </p>
          </div>
          <div className="feature-card group">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-primary-purple transition-colors">
              B2B Commerce And Supplier Matching
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">
              Trade anything from raw materials to finished goods, and find the right supplier for your business needs right in the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;