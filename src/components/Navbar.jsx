import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RavanaOSLogo from '../img/RavanaOS_Logo.png'; // Import the logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Reduced height and increased roundness
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-9/12 z-50 bg-[#131414]/50 backdrop-blur-lg rounded-[2rem] shadow-md transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-1 px-2">
          <Link to="/" className="flex items-center">
            <img src={RavanaOSLogo} alt="RavanaOS Logo" className="h-10 mr-2" /> {/* Logo */}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/ravanaos" className="nav-link text-lg font-bold text-white">Platform</Link>
            <Link to="/about" className="nav-link text-lg font-bold text-white">About</Link>
            <Link to="/team" className="nav-link text-lg font-bold text-white">Team</Link>
            <Link to="/investors" className="nav-link text-lg font-bold text-white">Investors</Link>
            <Link to="/contact" className="nav-link text-lg font-bold text-white">Contact</Link>
            <Link to="/get-started" className="btn btn-primary">Get Started</Link>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;