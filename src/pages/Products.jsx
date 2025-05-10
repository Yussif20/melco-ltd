import React from 'react';
import { useTranslation } from 'react-i18next';
import safeImage from '../assets/safe.jpg';
import AnimatedSection from '../utils/AnimatedSection';

const products = [
  {
    name: 'head_protection',
    image: safeImage,
    description: 'head_protection_desc',
  },
  {
    name: 'eye_face_protection',
    image: safeImage,
    description: 'eye_face_protection_desc',
  },
  {
    name: 'hearing_protection',
    image: safeImage,
    description: 'hearing_protection_desc',
  },
  {
    name: 'respiratory_protection',
    image: safeImage,
    description: 'respiratory_protection_desc',
  },
  {
    name: 'hand_protection',
    image: safeImage,
    description: 'hand_protection_desc',
  },
  {
    name: 'body_protection',
    image: safeImage,
    description: 'body_protection_desc',
  },
  {
    name: 'foot_protection',
    image: safeImage,
    description: 'foot_protection_desc',
  },
  {
    name: 'gas_detector',
    image: safeImage,
    description: 'gas_detector_desc',
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <section
        id="products"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#243e87] dark:text-white text-center mb-12 tracking-tight">
            {t('products_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-xs mx-auto transform hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  src={product.image}
                  alt={t(product.name)}
                  className="w-full h-48 object-cover rounded-t-2xl group-hover:opacity-90 transition-opacity duration-200"
                  loading="lazy"
                />
                <div className="pt-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div>
                    <h3 className="text-lg font-semibold text-[#243e87] dark:text-[#ee2e3a] text-center mb-2">
                      {t(product.name)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      {t(product.description)}
                    </p>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-[#ee2e3a] text-white rounded-full hover:bg-[#ee2e3a]/80 transition-all duration-300 transform hover:scale-105">
                    {t('more_button')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Products;
