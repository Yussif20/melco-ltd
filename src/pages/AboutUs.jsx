import React from 'react';
import { useTranslation } from 'react-i18next';

import qualityIcon from '../assets/values/star.png';
import innovationIcon from '../assets/values/innovation.png';
import professionalismIcon from '../assets/values/professionalism.png';
import partnershipIcon from '../assets/values/partnership.png';
import sustainabilityIcon from '../assets/values/sustainability.png';

const AboutUs = () => {
  const { t } = useTranslation();
  const isRtl = document.documentElement.dir === 'rtl';

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#243e87] dark:text-white text-center mb-16 tracking-tight animate-fade-in">
          {t('about_title')}
        </h2>

        {/* Vision and Mission Section */}
        <div className="flex flex-col gap-12 mb-16">
          {/* Vision */}
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-gray-200 mb-4">
              {t('vision_title')}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
              {t('vision_text')}
            </p>
          </div>

          {/* Mission */}
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-gray-200 mb-4">
              {t('mission_title')}
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
              {t('mission_text')}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-fade-in delay-200">
          <h3
            className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-white mb-10 text-center lg:text-left"
            style={{ textAlign: isRtl ? 'right' : 'left' }}
          >
            {t('values_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem]">
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                {/* <svg
                  className="w-6 h-6 text-[#243e87] dark:text-gray-300"
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
                </svg> */}
                <img src={qualityIcon} alt="Quality Icon" />
              </div>
              <h4 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                {t('quality')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('quality_text')}
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem]">
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                {/* <svg
                  className="w-6 h-6 text-[#243e87] dark:text-gray-300"
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
                </svg> */}
                <img src={innovationIcon} alt="Innovation Icon" />
              </div>
              <h4 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                {t('innovation')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('innovation_text')}
              </p>
            </div>

            {/* Professionalism */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem]">
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                {/* <svg
                  className="w-6 h-6 text-[#243e87] dark:text-gray-300"
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
                </svg> */}
                <img src={professionalismIcon} alt="Professionalism Icon" />
              </div>
              <h4 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                {t('professionalism')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('professionalism_text')}
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem]">
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                {/* <svg
                  className="w-6 h-6 text-[#243e87] dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 114 0 2 2 0 01-4 0zM7 10a2 2 0 114 0 2 2 0 01-4 0z"
                  />
                </svg> */}
                <img src={partnershipIcon} alt="Partnership Icon" />
              </div>
              <h4 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                {t('partnership')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('partnership_text')}
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem]">
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                {/* <svg
                  className="w-6 h-6 text-[#243e87] dark:text-gray-300"
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
                </svg> */}
                <img src={sustainabilityIcon} alt="Sustainability Icon" />
              </div>
              <h4 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                {t('sustainability')}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('sustainability_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
