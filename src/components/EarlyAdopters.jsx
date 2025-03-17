import { Link } from 'react-router-dom';

const EarlyAdopters = () => {
  return (
    <section className="section bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,60,203,0.05)_0,transparent_100%)]" />
      <div className="container px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-display-small mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink">
            Join the Innovation
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300">
            Be among the first to experience the future of computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-neutral-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:scale-[1.02] transition-transform duration-300 border border-neutral-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-primary-purple to-primary-pink flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-neutral-300 mb-4">
                    "RavanaOS represents a paradigm shift in how we interact with technology. It's not just an improvement—it's a reimagining of what's possible."
                  </p>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Sarah Chen</p>
                    <p className="text-xs sm:text-sm text-neutral-500">Tech Innovator</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:scale-[1.02] transition-transform duration-300 border border-neutral-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-primary-pink to-primary-purple flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-neutral-300 mb-4">
                    "The natural interaction model sets a new standard for human-computer interfaces. It's incredibly intuitive."
                  </p>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Michael Rodriguez</p>
                    <p className="text-xs sm:text-sm text-neutral-500">UX Researcher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-700/50">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(142,60,203,0.1)_0,transparent_100%)]" />
            </div>
            
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-neutral-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 border border-neutral-700/50">
              <p className="font-display text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">2,500+</p>
              <p className="text-sm sm:text-base text-neutral-400">Early adopters already registered</p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <Link to="/get-started" className="btn bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;