import React from 'react';
import { useTranslation } from 'react-i18next';

import companyProfilePDF from '../assets/logo.png';

const CompanyProfileSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-[50vh] flex items-center">
      <meta
        name="description"
        content={t(
          'company_profile_description',
          'Download the Melco (ميلكو) company profile PDF to learn more about our safety equipment and protective gear solutions at masterequiment.com.'
        )}
      />
      <meta
        name="keywords"
        content="Melco, ميلكو, company profile, safety equipment, protective gear, download PDF"
      />
      <link rel="canonical" href="https://masterequiment.com/company-profile" />
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-15px);
            }
            60% {
              transform: translateY(-7px);
            }
          }
          .bounce {
            animation: bounce 1.5s ease-in-out infinite;
          }
          .hover\\:bounce:hover {
            animation: bounce 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#243e87] dark:text-white mb-6 animate-fade-in-up tracking-wide">
          {t('company_profile_title', 'Download Our Company Profile')}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100 leading-relaxed">
          {t(
            'company_profile_text',
            'Discover Melco (ميلكو) and our dedication to top-tier safety equipment and protective gear solutions.'
          )}
        </p>
        <a
          href={companyProfilePDF}
          download="Melco_Company_Profile.pdf"
          className="inline-block bg-gradient-to-r from-[#4b6cb7] to-[#243e87] text-white px-10 py-4 text-xl font-semibold rounded-lg hover:from-[#4b6cb7]/80 hover:to-[#243e87]/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bounce hover:bounce animate-fade-in-up delay-200"
          aria-label={t(
            'download_company_profile',
            'Download Melco Company Profile PDF'
          )}
        >
          {t('download_button', 'Download PDF')}
        </a>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23e0e7ff\' fill-opacity=\'0.2\' d=\'M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,149.3C1248,139,1344,85,1392,58.7L1440,32V320H1392H1344H1248H1152H1056H960H864H768H672H576H480H384H288H192H96H48H0V64Z\'/%3E%3C/svg%3E')] opacity-50 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
