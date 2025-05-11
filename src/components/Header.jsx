import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-200 w-full border-b border-gray-300 shadow-lg px-4 sm:px-10 lg:px-20 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img
              className="h-10 sm:h-15 w-auto max-w-[200px] sm:max-w-[250px]"
              src={logo}
              alt="Milco Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-2 bg-[#1F2937] rounded-lg px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.2)] w-full justify-around">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white hover:shadow-[0_1px_4px_rgba(0,0,0,0.2)]'
                }`
              }
            >
              {t('nav_home')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white hover:shadow-[0_1px_4px_rgba(0,0,0,0.2)]'
                }`
              }
            >
              {t('nav_about')}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white hover:shadow-[0_1px_4px_rgba(0,0,0,0.2)]'
                }`
              }
            >
              {t('nav_products')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white hover:shadow-[0_1px_4px_rgba(0,0,0,0.2)]'
                }`
              }
            >
              {t('nav_contact')}
            </NavLink>
          </nav>
        </div>

        {/* Language Toggle Switch */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-2">
          <span className="text-sm font-medium text-gray-700">AR</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={language === 'en'}
              onChange={toggleLanguage}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#1F2937] transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>
          <span className="text-sm font-medium text-gray-700">EN</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#243e87] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center gap-4 bg-[#1F2937] rounded-lg px-4 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_home')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_about')}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_products')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-[#243e87] shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
                    : 'text-white hover:bg-[#243e87]/80 hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_contact')}
            </NavLink>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-white">AR</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={language === 'en'}
                  onChange={toggleLanguage}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-500 rounded-full peer-checked:bg-[#243e87] transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>
              <span className="text-sm font-medium text-white">EN</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
