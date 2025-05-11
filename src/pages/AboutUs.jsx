import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/about.avif';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div
        style={{ backgroundImage: `url(${aboutImage})` }}
        className="absolute inset-0 bg-cover bg-center opacity-10"
      ></div>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#243e87] dark:text-white text-center mb-16 tracking-tight animate-slide-up">
          {t('about_title')}
        </h2>

        {/* Vision Section */}
        <div className="mb-12 animate-slide-up delay-200">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-white text-center mb-6">
            {t('vision_title')}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed max-w-2xl mx-auto">
            {t('vision_text')}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 animate-slide-up delay-300">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-white text-center mb-6">
            {t('mission_title')}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed max-w-2xl mx-auto">
            {t('mission_text')}
          </p>
        </div>

        {/* Values Section */}
        <div className="animate-slide-up delay-400">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-white text-center mb-8">
            {t('values_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 min-h-[10rem] flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1F2937] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#243e87] dark:text-[#1F2937] mt-4 mb-2 text-center">
                  {t('quality')}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {t('quality_text')}
                </p>
              </div>
            </div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 min-h-[10rem] flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1F2937] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#243e87] dark:text-[#1F2937] mt-4 mb-2 text-center">
                  {t('innovation')}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {t('innovation_text')}
                </p>
              </div>
            </div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 min-h-[10rem] flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1F2937] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#243e87] dark:text-[#1F2937] mt-4 mb-2 text-center">
                  {t('integrity')}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {t('integrity_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
