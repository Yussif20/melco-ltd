import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  const isRtl = document.documentElement.dir === 'rtl';

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#243e87] dark:text-white text-center mb-16 tracking-tight animate-slide-up">
          {t('about_title')}
        </h2>

        {/* Values Section */}
        <div className="animate-slide-up delay-400 relative flex flex-col md:flex-row items-center">
          {/* Values Title with Icon */}
          <div
            className={`flex-shrink-0 mb-8 md:mb-0 flex items-center h-full ${
              isRtl ? ' md:ml-12 md:mr-0' : ' md:mr-12 md:ml-0'
            }`}
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-6 h-6 text-[#243e87] dark:text-gray-300 mb-2"
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
              <h3
                className={`text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-white writing-mode-vertical ${
                  isRtl
                    ? 'writing-mode-vertical-rl'
                    : 'writing-mode-vertical-lr'
                }`}
              >
                {t('values_title')}
              </h3>
            </div>
          </div>

          {/* Values Flex Container */}
          <div className={`flex-1 `}>
            <div className="flex flex-col gap-6">
              {/* First Row: Quality, Innovation, Integrity */}
              <div className="flex flex-wrap justify-between gap-6">
                {/* Quality */}
                <div className="flex-1 min-w-[200px] border-2 border-[#243e87] dark:border-gray-500 rounded-lg p-4 flex flex-col items-center text-center min-h-[12rem]">
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">
                    <svg
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
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#243e87] dark:text-gray-200 mb-2">
                    {t('quality')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('quality_text')}
                  </p>
                </div>

                {/* Innovation */}
                <div className="flex-1 min-w-[200px] border-2 border-[#243e87] dark:border-gray-500 rounded-lg p-4 flex flex-col items-center text-center min-h-[12rem]">
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">
                    <svg
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
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#243e87] dark:text-gray-200 mb-2">
                    {t('innovation')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('innovation_text')}
                  </p>
                </div>

                {/* Integrity */}
                <div className="flex-1 min-w-[200px] border-2 border-[#243e87] dark:border-gray-500 rounded-lg p-4 flex flex-col items-center text-center min-h-[12rem]">
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">
                    <svg
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
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#243e87] dark:text-gray-200 mb-2">
                    {t('integrity')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('integrity_text')}
                  </p>
                </div>
              </div>

              {/* Second Row: Mission, Vision */}
              <div className="flex flex-wrap gap-6">
                {/* Mission */}
                <div className="flex-1 min-w-[300px] border-2 border-[#243e87] dark:border-gray-500 rounded-lg p-4 flex flex-col items-center text-center min-h-[12rem]">
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#243e87] dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-[#243e87] dark:text-gray-200 mb-2">
                    {t('mission_title')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('mission_text')}
                  </p>
                </div>

                {/* Vision */}
                <div className="flex-1 min-w-[300px] border-2 border-[#243e87] dark:border-gray-500 rounded-lg p-4 flex flex-col items-center text-center min-h-[12rem]">
                  <div className="w-8 h-8 mb-2 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#243e87] dark:text-gray-300"
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
                  <h4 className="text-lg font-semibold text-[#243e87] dark:text-gray-200 mb-2">
                    {t('vision_title')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('vision_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
