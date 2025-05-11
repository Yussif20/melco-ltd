import React from 'react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: 'Ahmed Al-Farsi',
    role: 'Construction Manager',
    text: 'Melco’s PPE has been a game-changer for our team. The quality and durability of their products ensure our workers’ safety on every project.',
  },
  {
    name: 'Sara Khan',
    role: 'Industrial Safety Officer',
    text: 'The respiratory protection gear from Melco is top-notch. Their customer service is excellent, always ensuring we get the right equipment for our needs.',
  },
  {
    name: 'John Smith',
    role: 'Manufacturing Supervisor',
    text: 'We trust Melco for all our safety equipment needs. Their gas detectors have helped us maintain a safe working environment for years.',
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#243e87] dark:text-white text-center mb-16 tracking-tight animate-slide-up">
        {t('testimonials_title')}
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up delay-200 place-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 min-h-[12rem] flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#1F2937] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <h4 className="text-lg font-semibold text-[#243e87] dark:text-[#1F2937] text-center">
                  {testimonial.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;