import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/#products', text: 'Products' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  const getLinkClass = (path: string, isMobile: boolean = false) => {
    const baseClass = isMobile 
      ? "block px-4 py-3 text-lg" 
      : "px-3 py-2 rounded-md text-sm font-medium";
    const activeClass = isMobile 
      ? "bg-accent-hover text-white" 
      : "bg-primary text-white shadow-sm"; // A slightly different active style for desktop
    const inactiveClass = isMobile 
      ? "text-light-text hover:bg-primary hover:text-white" 
      : "text-light-text hover:bg-accent-hover hover:text-white";
    
    // Special handling for /#products link to match with homepage
    const isActive = (path === '/' && location.pathname === '/') || 
                     (path !== '/' && location.pathname === path) ||
                     (path === '/#products' && location.pathname === '/' && location.hash === '#products');

    return `${baseClass} ${isActive ? activeClass : inactiveClass} transition-colors duration-150 ease-in-out`;
  };


  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-2">
        {navLinks.map((link) => (
          <Link key={link.text} to={link.to} className={getLinkClass(link.to)}>
            {link.text}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-light-text hover:text-white focus:outline-none p-2"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" // Changed to three lines for hamburger
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-12 right-0 bg-dark-bg w-56 mt-2 py-2 rounded-lg shadow-xl z-20 ring-1 ring-black ring-opacity-5">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.to}
              className={getLinkClass(link.to, true)}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
