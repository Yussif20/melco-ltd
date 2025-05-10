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
    <header className="bg-gray-200 w-full border-b border-gray-300 shadow-lg px-4 sm:px-10 lg:px-20 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/">
          <img
            className="h-8 sm:h-10 w-auto max-w-[200px] sm:max-w-[250px]"
            src={logo}
            alt="Melco Master Equipment Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#4e4e4e] font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                  : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
              }`
            }
          >
            {t('nav_home')}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[#4e4e4e] font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                  : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
              }`
            }
          >
            {t('nav_about')}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-[#4e4e4e] font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                  : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
              }`
            }
          >
            {t('nav_products')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[#4e4e4e] font-semibold text-sm md:text-base px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                  : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
              }`
            }
          >
            {t('nav_contact')}
          </NavLink>
        </nav>

        {/* Language Toggle Switch */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">AR</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={language === 'en'}
              onChange={toggleLanguage}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#ee2e3a] transition-colors duration-300"></div>
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
          <nav className="flex flex-col items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[#4e4e4e] font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                    : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a]'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_home')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[#4e4e4e] font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                    : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a]'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_about')}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-[#4e4e4e] font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                    : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a]'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_products')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[#4e4e4e] font-semibold text-base w-full text-center py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ee2e3a] text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]'
                    : 'hover:bg-[#ee2e3a]/10 hover:text-[#ee2e3a]'
                }`
              }
              onClick={toggleMenu}
            >
              {t('nav_contact')}
            </NavLink>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-gray-700">AR</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={language === 'en'}
                  onChange={toggleLanguage}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#ee2e3a] transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>
              <span className="text-sm font-medium text-gray-700">EN</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
