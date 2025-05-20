import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const logo = '/photos/black_colored_logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 shadow-md fixed w-full z-50" style={{ backdropFilter: 'blur(4px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-2">
          <div className="relative flex items-center justify-center w-full">
            {/* Hamburger menu for mobile */}
            <div className="absolute left-0 flex items-center md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
            {/* Business Name centered */}
            <Link to="/" className="text-xl md:text-2xl font-bold text-black text-center whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="hidden md:inline">Willamette Valley Metal Buildings LLC</span>
              <span className="inline md:hidden">WVMB LLC</span>
            </Link>
          </div>
          {/* Desktop nav links */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-8 h-24">
            <Link
              to="/"
              className="h-full flex items-center px-8 text-2xl font-semibold text-black border-l border-gray-20 hover:text-blue-600 transition"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="h-full flex items-center px-8 text-2xl font-semibold text-black border-l border-gray-200 hover:text-blue-600 transition"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              About
            </Link>
            <Link
              to="/sitepreparation"
              className="h-full flex items-center px-8 text-2xl font-semibold text-black border-l border-gray-200 hover:text-blue-600 transition"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Site Preparation
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu dropdown with animation */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'max-h-60 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ willChange: 'max-height, opacity' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/sitepreparation"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Site Preparation
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;