import { useTranslation } from 'react-i18next';

import qualityIcon from '../assets/values/star.png';
import innovationIcon from '../assets/values/innovation.png';
import professionalismIcon from '../assets/values/professionalism.png';
import partnershipIcon from '../assets/values/partnership.png';
import sustainabilityIcon from '../assets/values/sustainability.png';
import aboutTitleImage from '../assets/vision-title.jpg';

const AboutUs = () => {
  const { t } = useTranslation();
  const isRtl = document.documentElement.dir === 'rtl';

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-gray-50 to-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Replaced text title with image */}
        <div className="flex justify-center mb-16 animate-fade-in">
          <img
            src={aboutTitleImage}
            alt="About Milco"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

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
          <div className="flex flex-col w-full items-center justify-center gap-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Quality */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
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
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
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
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
                  <img src={professionalismIcon} alt="Professionalism Icon" />
                </div>
                <h4 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                  {t('professionalism')}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('professionalism_text')}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Partnership */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
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
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default AboutUs;
