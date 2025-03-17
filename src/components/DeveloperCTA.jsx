const DeveloperCTA = () => {
  return (
    <section className="section bg-neutral-900 text-white">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-display-small bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
              Build the Future
            </h2>
            <p className="text-base sm:text-xl text-neutral-300">
              Build and deploy in hours on the ecosystem that has no limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
                Access Developer Tools
              </button>
              <button className="btn border-2 border-neutral-700 hover:border-primary-purple/40 text-white hover:bg-neutral-800 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
                View Documentation
              </button>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-0">
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-800 p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-700/50">
              <pre className="text-xs sm:text-sm font-mono text-neutral-300 overflow-hidden">
                <code>{`// Example RavanaOS Integration
import { RavanaOS } from '@ravanaos/sdk';

const ai = new RavanaOS({
  mode: 'ambient',
  features: ['voice', 'gesture'],
});

ai.on('interaction', (data) => {
  // Handle natural interactions
  console.log('User intent:', data);
});

// Start the ambient experience
ai.start();`}</code>
              </pre>
            </div>
            
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-neutral-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-neutral-700/50">
              <p className="text-sm font-medium text-primary-purple">Simple Integration</p>
              <p className="text-neutral-400 text-xs sm:text-sm">Get started in minutes</p>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] border border-neutral-700/50">
            <div className="w-12 h-12 rounded-full bg-neutral-700/50 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 text-primary-purple" viewBox="0 0 24 24" fill="none">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary-purple">API Access</h3>
            <p className="text-sm sm:text-base text-neutral-300">
              Comprehensive API documentation and development tools.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] border border-neutral-700/50">
            <div className="w-12 h-12 rounded-full bg-neutral-700/50 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 text-primary-purple" viewBox="0 0 24 24" fill="none">
                <path d="M17 8l-8 8m0-8l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary-purple">SDK Support</h3>
            <p className="text-sm sm:text-base text-neutral-300">
              Native SDKs for major platforms and frameworks.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] border border-neutral-700/50">
            <div className="w-12 h-12 rounded-full bg-neutral-700/50 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 text-primary-purple" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary-purple">Developer Support</h3>
            <p className="text-sm sm:text-base text-neutral-300">
              Active community and dedicated support channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCTA;