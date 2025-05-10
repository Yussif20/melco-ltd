import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import headImage from '../assets/head.jpg';
import eyeImage from '../assets/eye.jpg';
import earImage from '../assets/ear.webp';
import breatheImage from '../assets/breathe.jpg';
import handImage from '../assets/hand.jpg';
import bodyImage from '../assets/body.jpg';
import footImage from '../assets/foot.jpeg';
import gasImage from '../assets/gas.jpg';

const products = [
  {
    name: 'head_protection',
    image: headImage,
    description: 'head_protection_desc',
  },
  {
    name: 'eye_face_protection',
    image: eyeImage,
    description: 'eye_face_protection_desc',
  },
  {
    name: 'hearing_protection',
    image: earImage,
    description: 'hearing_protection_desc',
  },
  {
    name: 'respiratory_protection',
    image: breatheImage,
    description: 'respiratory_protection_desc',
  },
  {
    name: 'hand_protection',
    image: handImage,
    description: 'hand_protection_desc',
  },
  {
    name: 'body_protection',
    image: bodyImage,
    description: 'body_protection_desc',
  },
  {
    name: 'foot_protection',
    image: footImage,
    description: 'foot_protection_desc',
  },
  {
    name: 'gas_detector',
    image: gasImage,
    description: 'gas_detector_desc',
  },
];

const ProductDetail = () => {
  const { t } = useTranslation();
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);
  const isRTL = document.documentElement.dir === 'rtl';

  if (!product) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#243e87] dark:text-white animate-slide-up">
            {t('product_not_found')}
          </h2>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center px-6 py-3 bg-[#1F2937] text-white rounded-full hover:bg-[#1F2937]/80 transition-all transform hover:scale-105 animate-slide-up delay-100"
            aria-label={t('back_to_products')}
          >
            <svg
              className={`w-5 h-5 ${
                isRTL ? 'me-2 transform scale-x-[-1]' : 'ms-2'
              }`}
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
            {t('back_to_products')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-background">
      {/* Product Name Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold text-[#243e87] dark:text-white tracking-tight  text-center mb-12 animate-slide-up">
        {t(product.name)}
      </h1>

      {/* Back Button */}
      <Link
        to="/products"
        className={`fixed top-20 ${
          isRTL ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
        } z-10 flex items-center justify-center w-14 h-14 bg-[#1F2937] text-white rounded-full hover:bg-[#1F2937]/90 transition-all transform hover:scale-110 shadow-card animate-slide-up`}
        aria-label={t('back_to_products')}
      >
        <svg
          className={`w-6 h-6 ${isRTL ? 'transform scale-x-[-1]' : ''}`}
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
      </Link>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center animate-slide-up delay-200">
            <div className="bg-card rounded-3xl shadow-card p-4">
              <img
                src={product.image}
                alt={t(product.name)}
                className="w-full h-96 sm:h-[32rem] object-contain transition-all duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center animate-slide-up delay-300">
            <div className="bg-gradient-card rounded-3xl shadow-card p-8">
              <div
                className={`pl-4 border-l-4 ${
                  isRTL ? 'pr-4 border-r-4 border-l-transparent' : ''
                } border-[#1F2937] mb-6`}
              >
                <p className="text-lg sm:text-xl text-foreground leading-relaxed font-semibold">
                  {t(product.description)}
                </p>
              </div>
              <div className="pt-6 ">
                <p className="text-base sm:text-lg text-foreground leading-relaxed text-center">
                  {t(`${product.name}_details`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
