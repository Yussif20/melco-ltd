import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import productsData from '../data/productsData';

const ShowProducts = () => {
  const { category } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const products = productsData[category] || [];

  // Map category ID to translation key for ar/en support
  const categoryTranslationMap = {
    'head-protection': 'head_protection',
    'eye-and-face-protection': 'eye_face_protection',
    'hearing-protection': 'hearing_protection',
    'respiratory-protection': 'respiratory_protection',
    'hand-protection': 'hand_protection',
    'body-protection': 'body_protection',
    'foot-protection': 'foot_protection',
    'gas-detector': 'gas_detector',
  };
  const translationKey = categoryTranslationMap[category] || category;
  const categoryTitle = t(translationKey);

  // Navigate back to the categories page
  const handleBackClick = () => {
    navigate('/products');
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackClick}
            className="cursor-pointer flex items-center text-[#243e87] dark:text-white hover:text-[#1F2937] dark:hover:text-gray-300 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-lg font-semibold">
              {t('back_to_categories')}
            </span>
          </button>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#243e87] dark:text-white text-center mb-16 tracking-tight animate-slide-up font-heading">
          {categoryTitle}
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            {t('no_products_found')}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center h-[30rem] justify-between"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-[#243e87] dark:text-white mb-2 text-center font-heading">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      {t(product.description)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowProducts;
