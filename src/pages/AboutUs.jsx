import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../utils/AnimatedSection';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#243e87] dark:text-white text-center mb-16 tracking-tight">
            {t('about_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#ee2e3a] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#243e87] dark:text-[#ee2e3a] mt-8 mb-4 text-center">
                {t('mission_title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {t('mission_text')}
              </p>
            </div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#ee2e3a] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#243e87] dark:text-[#ee2e3a] mt-8 mb-4 text-center">
                {t('vision_title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {t('vision_text')}
              </p>
            </div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#ee2e3a] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#243e87] dark:text-[#ee2e3a] mt-8 mb-4 text-center">
                {t('values_title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {t('values_text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default AboutUs;
