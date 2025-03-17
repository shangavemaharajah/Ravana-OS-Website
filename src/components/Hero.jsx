import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoId = 'n4IhCSMkADc';

  return (
    <section className="min-h-[90vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
      </div>
      
      <div className="container relative pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
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

        <div className="mt-12 sm:mt-24 max-w-5xl mx-auto relative px-4 sm:px-6">
          <div className="aspect-video rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-800 animate-fade-in [animation-delay:400ms] shadow-xl border border-neutral-700/50">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&modestbranding=1&controls=0`}
              title="RavanaOS Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          
          <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-neutral-800 rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300 border border-neutral-700/50">
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;