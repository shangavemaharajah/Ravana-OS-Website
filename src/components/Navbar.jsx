import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RavanaOSLogo from '../img/RavanaOS_Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className={`fixed top-2 left-1/2 transform -translate-x-1/2 w-9/12 z-50 bg-[#131414]/50 backdrop-blur-lg rounded-[2rem] shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-1 px-2">
          <Link to="/" className="flex items-center">
            <img src={RavanaOSLogo} alt="RavanaOS Logo" className="h-10 mr-2" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/ravanaos" className="nav-link text-lg font-bold text-white">Platform</Link>
            <Link to="/about" className="nav-link text-lg font-bold text-white">About</Link>
            <Link to="/team" className="nav-link text-lg font-bold text-white">Team</Link>
            <Link to="/investors" className="nav-link text-lg font-bold text-white">Investors</Link>
            <Link to="/contact" className="nav-link text-lg font-bold text-white">Contact</Link>
            <Link to="/get-started" className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl">Get Started</Link>
          </div>

          {/* Hamburger Button */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start bg-[#131414]/80 backdrop-blur-lg rounded-b-[2rem] px-4 pt-4 pb-6 space-y-4">
            <Link to="/ravanaos" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold">Platform</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold">About</Link>
            <Link to="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold">Team</Link>
            <Link to="/investors" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold">Investors</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold">Contact</Link>
            <Link to="/get-started" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
