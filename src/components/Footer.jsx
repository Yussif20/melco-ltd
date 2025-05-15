import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <footer
      className="bg-[#1F2937] text-white py-12 px-4 sm:px-6 lg:px-20"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Company Info */}
        <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl text-center">
          {t('footer_company_info')}
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h3 className="text-xl sm:text-2xl font-semibold text-white border-b-2 border-[#243e87] pb-2">
            {t('footer_links_title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-sm sm:text-base font-medium text-gray-300  transition-colors duration-300 hover:underline"
            >
              {t('nav_home')}
            </Link>
            <Link
              to="/about"
              className="text-sm sm:text-base font-medium text-gray-300  transition-colors duration-300 hover:underline"
            >
              {t('nav_about')}
            </Link>
            <Link
              to="/products"
              className="text-sm sm:text-base font-medium text-gray-300  transition-colors duration-300 hover:underline"
            >
              {t('nav_products')}
            </Link>
            <Link
              to="/contact"
              className="text-sm sm:text-base font-medium text-gray-300  transition-colors duration-300 hover:underline"
            >
              {t('nav_contact')}
            </Link>
          </div>
          {/* Language Toggle */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm sm:text-base font-medium text-gray-300">
              AR
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={i18n.language === 'en'}
                onChange={toggleLanguage}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-500 rounded-full peer-checked:bg-[#243e87] transition-colors duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm sm:text-base font-medium text-gray-300">
              EN
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white border-b-2 border-[#243e87] pb-2">
            {t('footer_contact_title')}
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            {t('footer_email')}
            <a href="mailto:Ahmed@melco-ltd.com">: Ahmed@melco-ltd.com</a>
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            {t('footer_phone')}
            <a href="tel:+966553653329">: +966553653329</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
