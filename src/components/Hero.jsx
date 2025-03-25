import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="min-h-[100vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
      

      {/* Content */}
      <div className="container relative pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h1 className="animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-display-large mb-4 sm:mb-6 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
            AI-Powered Business & Community Operating System
          </h1>
          
          <p className="animate-slide-up text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Experience the future of business & community intelligence—where data flows seamlessly, and AI truly shines on collective, connected insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up [animation-delay:200ms]">
            <Link to="/get-started" className="w-full sm:w-auto px-6 py-3 sm:py-4 btn bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              Join Early – Only $10/month
            </Link>
            <p className="mt-2 sm:mt-0 text-sm sm:text-base text-neutral-400">(For organizations under 50 users)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
