import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Leading the vision for next-generation human-computer interaction"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Pioneering AI-driven interfaces and natural computing"
    },
    {
      name: "Dr. Emma Thompson",
      role: "Head of Research",
      bio: "Advancing the boundaries of ambient computing"
    }
  ];

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
              Our Team
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Meet the innovators and visionaries shaping the future of human-computer interaction
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-neutral-800 transition-all duration-300 border border-neutral-700">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 to-neutral-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Join Our Team
            </h2>
            <p className="text-xl text-neutral-300 mb-12">
              Help us build the future of computing. We're always looking for exceptional talent to join our mission.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Pathurjan Wijeyasekara</h3>
              <p className="text-purple-400 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-neutral-300">
                A filmmaker, tech-savvy founder, and visionary who has built multiple startups to fuel this ambitious journey.
              </p>
            </div>
            <div className="p-8 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Joel Jerushan</h3>
              <p className="text-purple-400 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-neutral-300">
                A TechCrunch-featured software engineer and one of Sri Lanka's top technical minds, partnering with Pathurjan for over 8 years.
              </p>
            </div>
            <div className="p-8 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Shopeha Pashkaran</h3>
              <p className="text-purple-400 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-neutral-300">
                A corporate HR expert managing operations and ensuring the funding and structure behind our innovation.
              </p>
            </div>
            <div className="p-8 bg-neutral-800/50 rounded-xl backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Vathsan Sharma</h3>
              <p className="text-purple-400 font-medium mb-4">Head of Marketing</p>
              <p className="text-neutral-300">
                A robotics engineer turned branding specialist, trained at Miami Ad School, driving our global outreach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;