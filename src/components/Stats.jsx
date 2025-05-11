import React from 'react';
import { useTranslation } from 'react-i18next';

const stats = [
  { value: '15+', label: 'years_experience' },
  { value: '500+', label: 'satisfied_clients' },
  { value: '10K+', label: 'products_sold' },
];

const Stats = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up delay-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-card rounded-3xl shadow-card p-6 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-[#243e87] dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;