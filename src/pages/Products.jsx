import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import headImage from '../assets/products/head.png';
import eyeImage from '../assets/products/eye.jpg';
import earImage from '../assets/products/hear.jpg';
import breatheImage from '../assets/products/resp.jpg';
import handImage from '../assets/products/hand.jpg';
import bodyImage from '../assets/products/body.jpg';
import footImage from '../assets/products/foot.jpg';
import gasImage from '../assets/products/gas.jpg';

const products = [
  {
    id: 'head-protection',
    name: 'head_protection',
    image: headImage,
    description: 'head_protection_desc',
  },
  {
    id: 'eye-and-face-protection',
    name: 'eye_face_protection',
    image: eyeImage,
    description: 'eye_face_protection_desc',
  },
  {
    id: 'hearing-protection',
    name: 'hearing_protection',
    image: earImage,
    description: 'hearing_protection_desc',
  },
  {
    id: 'respiratory-protection',
    name: 'respiratory_protection',
    image: breatheImage,
    description: 'respiratory_protection_desc',
  },
  {
    id: 'hand-protection',
    name: 'hand_protection',
    image: handImage,
    description: 'hand_protection_desc',
  },
  {
    id: 'body-protection',
    name: 'body_protection',
    image: bodyImage,
    description: 'body_protection_desc',
  },
  {
    id: 'foot-protection',
    name: 'foot_protection',
    image: footImage,
    description: 'foot_protection_desc',
  },
  {
    id: 'gas-detector',
    name: 'gas_detector',
    image: gasImage,
    description: 'gas_detector_desc',
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20 bg-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl shadow-xl p-6 w-full max-w-xs mx-auto transform hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={product.image}
                alt={t(product.name)}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:opacity-90 transition-opacity duration-200"
                loading="lazy"
              />
              <div className="pt-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-lg font-semibold text-[#243e87] dark:text-[#1F2937] text-center mb-2">
                    {t(product.name)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {t(product.description)}
                  </p>
                </div>
                <Link
                  to={`/show-products/${product.id}`}
                  className="w-full mt-4 px-4 py-2 bg-[#1F2937] text-white rounded-full hover:bg-[#1F2937]/80 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  {t('more_button')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
