import { useTranslation } from 'react-i18next';
import qualityIcon from '../assets/values/star.png';
import innovationIcon from '../assets/values/innovation.png';
import professionalismIcon from '../assets/values/professionalism.png';
import partnershipIcon from '../assets/values/partnership.png';
import sustainabilityIcon from '../assets/values/sustainability.png';
import aboutTitleImage from '../assets/about-title.png';

const AboutUs = () => {
  const { t } = useTranslation();
  const isRtl = document.documentElement.dir === 'rtl';

  return (
    <section id="about" className="bg-white text-gray-900">
      <meta
        name="description"
        content={t(
          'about_description',
          'Learn about Melco (ميلكو), our vision, mission, and values in providing safety equipment and protective gear at masterequiment.com.'
        )}
      />
      <meta
        name="keywords"
        content="Melco, ميلكو, safety equipment, protective gear, about us"
      />
      <link rel="canonical" href="https://masterequiment.com/about" />
      <div className="w-screen relative overflow-hidden">
        <img
          src={aboutTitleImage}
          alt={t('about_title_image_alt', 'Melco About Us Title Image')}
          className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] object-cover"
        />
        {/* <div className="absolute inset-0 bg-[#1F2937]/40 pointer-events-none" /> */}
      </div>

      <div className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 mb-16">
            <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-gray-200 mb-4">
                {t('vision_title')}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
                {t('vision_text')}
              </p>
            </div>

            <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-gray-200 mb-4">
                {t('mission_title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
                {t('mission_text')}
              </p>
            </div>
          </div>

          <div className="animate-fade-in delay-200">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#243e87] dark:text-white mb-10 text-center">
              {t('values_title')}
            </h2>
            <div className="flex flex-col w-full items-center justify-center gap-8">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <img
                      src={qualityIcon}
                      alt={t(
                        'quality_icon_alt',
                        'Quality Icon for Melco Values'
                      )}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                    {t('quality')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('quality_text')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <img
                      src={innovationIcon}
                      alt={t(
                        'innovation_icon_alt',
                        'Innovation Icon for Melco Values'
                      )}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                    {t('innovation')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('innovation_text')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <img
                      src={professionalismIcon}
                      alt={t(
                        'professionalism_icon_alt',
                        'Professionalism Icon for Melco Values'
                      )}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                    {t('professionalism')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('professionalism_text')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <img
                      src={partnershipIcon}
                      alt={t(
                        'partnership_icon_alt',
                        'Partnership Icon for Melco Values'
                      )}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                    {t('partnership')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('partnership_text')}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[14rem] w-full max-w-xs">
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <img
                      src={sustainabilityIcon}
                      alt={t(
                        'sustainability_icon_alt',
                        'Sustainability Icon for Melco Values'
                      )}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#243e87] dark:text-gray-200 mb-3">
                    {t('sustainability')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('sustainability_text')}
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