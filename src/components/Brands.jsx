import React from 'react';
// import { useTranslation } from 'react-i18next';

// Import brand images
import brand1 from '../assets/brands/3m.png';
import brand2 from '../assets/brands/bw-technologies.svg';
import brand3 from '../assets/brands/safety-jogger.png';
import brand4 from '../assets/brands/msa.jpg';
import brand5 from '../assets/brands/red-wing-shoes.png';
import brand6 from '../assets/brands/ansell.svg';
import brand7 from '../assets/brands/dupont.png';
import brand8 from '../assets/brands/uvex.png';
import brand9 from '../assets/brands/honeywell.png';
import brand10 from '../assets/brands/sarena-textile.jpg';

// Define the brands array
const brands = [
  { name: '3M', image: brand1, link: 'https://www.3m.com/' },
  {
    name: 'Red Wing Shoes',
    image: brand5,
    link: 'https://www.redwingshoes.com/',
  },
  { name: 'MSA', image: brand4, link: 'https://us.msasafety.com/' },
  {
    name: 'BW Technologies',
    image: brand2,
    link: 'https://www.honeywellanalytics.com/',
  },
  {
    name: 'Safety Jogger',
    image: brand3,
    link: 'https://www.safetyjogger.com/',
  },
  { name: 'Ansell', image: brand6, link: 'https://www.ansell.com/' },
  { name: 'Dupont', image: brand7, link: 'https://www.dupont.com/' },
  { name: 'Uvex', image: brand8, link: 'https://www.uvex-safety.com/' },
  { name: 'Honeywell', image: brand9, link: 'https://www.honeywell.com/' },
  {
    name: 'Sarena Textile',
    image: brand10,
    link: 'https://sarenapk.com/',
  },
];

const Brands = () => {
  // const { t } = useTranslation();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 animate-slide-up delay-200 max-sm:justify-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-card rounded-3xl shadow-card p-6 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={brand.link}
                className="w-36 h-30 flex items-center justify-center"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
