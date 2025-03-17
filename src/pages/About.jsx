const About = () => {
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
              Redefining Human-Computer Interaction
            </h1>
            <p className="animate-slide-up text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              We're building technology that seamlessly integrates with human behavior, creating more natural and intuitive ways to interact with computers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,60,203,0.1)_0,transparent_100%)]" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-display-small font-bold bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl text-neutral-300">
                We envision a world where technology enhances human capabilities without becoming a distraction—where computing is ambient, intuitive, and truly personal.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8 sm:mt-12">
                <div className="stat-card hover-lift hover-glow">
                  <div className="flex flex-col items-start">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">2024</p>
                    <p className="text-neutral-400 font-medium">Founded</p>
                  </div>
                </div>
                <div className="stat-card hover-lift hover-glow">
                  <div className="flex flex-col items-start">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">50+</p>
                    <p className="text-neutral-400 font-medium">Patents Filed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow-xl">
                <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-900 p-8">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-primary-purple/10 to-primary-pink/10 hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-neutral-800 text-white p-6 sm:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-neutral-700/50">
                <p className="text-lg sm:text-xl font-medium text-primary-purple">Pioneering Tomorrow</p>
                <p className="text-neutral-400">Through Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-neutral-900/50 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-display-small mb-6 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300">
              Guided by principles that put human experience first
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-12">
            {[
              {
                title: "Human-Centered",
                description: "We design for people first, technology second. Our solutions adapt to human behavior, not the other way around.",
                icon: "👤",
                gradient: "from-primary-pink to-primary-purple"
              },
              {
                title: "Innovation",
                description: "Pushing boundaries to create meaningful advances in human-computer interaction and artificial intelligence.",
                icon: "💡",
                gradient: "from-primary-purple to-primary-pink"
              },
              {
                title: "Responsibility",
                description: "Committed to ethical AI and sustainable practices. Building technology that serves humanity's best interests.",
                icon: "🌱",
                gradient: "from-[#50fa7b] to-primary-purple"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="feature-card hover-lift group"
              >
                <div className="mb-6 text-4xl sm:text-5xl bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-100 group-hover:text-primary-purple transition-colors">
                  {value.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,60,203,0.1)_0,transparent_100%)]" />
        </div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-display-small mb-6 text-white">
              About RavanaOS
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 mb-12">
              RavanaOS is redefining the future of computing with advanced AI technology and innovative user experiences. Our platform seamlessly integrates with your daily operations, making technology more intuitive and accessible than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto btn bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                Learn More About Our Technology
              </button>
              <button className="w-full sm:w-auto btn border-2 border-white/20 hover:border-white/40 text-white hover:scale-[1.02] transition-all duration-300">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;