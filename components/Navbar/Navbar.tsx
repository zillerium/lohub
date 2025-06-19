import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 lg:px-16 py-2 lg:py-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex text-lg font-semibold">
          <img
            src="lohublogonew2.svg"
            width="100"
            height="100"
            className="p-2"
            alt="logo"
          />
        </a>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden block text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* Desktop Menu */}
      </div>

    </nav>
  );
};

export default Navbar;

