const About = () => {
  return (
    <div className="page-transition bg-neutral-900">
      {/* Hero Section */}
      <section className="min-h-[60vh] sm:min-h-[100vh] relative flex items-center justify-center bg-black text-white overflow-hidden">
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
              <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-900 p-8 flex items-center justify-center">
                <img
                  src="src/img/Business Concept Team Close Up.jpg" // Update the path as needed
                  alt="Your Image"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
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
                icon: (
                  <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M10.5077 6V9.5M10.5077 6C10.5077 5.17157 9.83669 4.5 9.00897 4.5C8.18125 4.5 7.51025 5.17157 7.51025 6V14L4.78483 10.5903C4.13315 9.77501 3.00841 9.77501 2.35673 10.5903C1.92184 11.1344 1.88076 11.895 2.25451 12.4828L5.01239 17C6.51073 20 9.0086 22 12.0064 22M10.5077 6V3.5C10.5077 2.67157 11.1787 2 12.0064 2C12.8341 2 13.5051 2.67157 13.5051 3.5V5.5M13.5051 5.5V9.5M13.5051 5.5C13.5051 4.67157 14.1761 4 15.0038 4C15.8316 4 16.5026 4.67157 16.5026 5.5V8M16.5026 8V9.5M16.5026 8C16.5026 7.17157 17.1736 6.5 18.0013 6.5C18.829 6.5 19.5 7.17157 19.5 8V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 17L17 18L19 16M13 14C14.5 13.5 16 13 17.5 12C19 13 20.5 13.5 22 14C22 17 22 20.5 17.5 22C13 20.5 13 17 13 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ),
                
                gradient: "from-primary-pink to-primary-purple"
              },
              {
                title: "Innovation",
                description: "Pushing boundaries to create meaningful advances in human-computer interaction and artificial intelligence.",
                icon: (
                  <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                      <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.5 16H7L7.50786 17.6038C7.77111 18.4351 8.54258 19 9.41455 19L14.0855 19C14.9574 19 15.7289 18.4351 15.9921 17.6038L16.5 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15 19L14.4558 20.6325C14.1836 21.4491 13.4193 22 12.5585 22H11.4415C10.5807 22 9.81638 21.4491 9.54415 20.6325L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8 10L10 12.5L10 16M9 10C9 10.5523 8.55228 11 8 11C7.44771 11 7 10.5523 7 10C7 9.44772 7.44771 9 8 9C8.55228 9 9 9.44772 9 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16 10L14 12.5L14 16M15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                ),
                
                gradient: "from-primary-purple to-primary-pink"
              },
              {
                title: "Responsibility",
                description: "Committed to ethical AI and sustainable practices. Building technology that serves humanity's best interests.",
                icon: (
                  <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.49994 19.5001L6.06034 18.5194C6.95055 16.9616 8.60727 16.0001 10.4016 16.0001H13.5983C15.3926 16.0001 17.0493 16.9616 17.9395 18.5194L18.4999 19.5001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.9737 2.02148C18.9795 1.99284 19.0205 1.99284 19.0263 2.02148C19.3302 3.50808 20.4919 4.66984 21.9785 4.97368C22.0072 4.97954 22.0072 5.02046 21.9785 5.02632C20.4919 5.33016 19.3302 6.49192 19.0263 7.97852C19.0205 8.00716 18.9795 8.00716 18.9737 7.97852C18.6698 6.49192 17.5081 5.33016 16.0215 5.02632C15.9928 5.02046 15.9928 4.97954 16.0215 4.97368C17.5081 4.66984 18.6698 3.50808 18.9737 2.02148Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                ),
                
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
              {/* <button className="w-full sm:w-auto btn bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                Learn More About Our Technology
              </button> */}
              <a
                href="https://discord.gg/mKHCUeEax9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-48 sm:w-auto btn bg-primary-purple border-2 border-white/20 hover:border-white/40 text-white hover:scale-[1.02] transition-all duration-300">
                  Join Our Community
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;