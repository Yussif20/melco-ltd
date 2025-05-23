import { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  }, [i18n]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className="bg-gray-50 w-full border-b border-gray-300 shadow-lg px-4 sm:px-10 lg:px-20 py-4 sm:py-6"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img
              className="h-10 sm:h-15 w-auto max-w-[200px] sm:max-w-[250px]"
              src={logo}
              alt={t('logo_alt', 'Melco Logo')}
              loading="lazy"
            />
          </Link>
        </div>

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
              aria-label={t('nav_home')}
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
              aria-label={t('nav_about')}
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
              aria-label={t('nav_products')}
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
              aria-label={t('nav_contact')}
            >
              {t('nav_contact')}
            </NavLink>
          </nav>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-2">
          <span className="text-sm font-medium text-gray-700">AR</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={i18n.language === 'en'}
              onChange={toggleLanguage}
              className="sr-only peer"
              aria-label={t('language_toggle')}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#1F2937] transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>
          <span className="text-sm font-medium text-gray-700">EN</span>
        </div>

        <button
          className="md:hidden text-[#243e87] focus:outline-none"
          onClick={toggleMenu}
          aria-label={t('toggle_menu')}
          aria-expanded={isMenuOpen}
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
              aria-label={t('nav_home')}
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
              aria-label={t('nav_about')}
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
              aria-label={t('nav_products')}
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
              aria-label={t('nav_contact')}
            >
              {t('nav_contact')}
            </NavLink>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-white">AR</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={i18n.language === 'en'}
                  onChange={toggleLanguage}
                  className="sr-only peer"
                  aria-label={t('language_toggle')}
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
