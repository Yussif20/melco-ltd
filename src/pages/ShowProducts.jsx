import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import productsData from '../data/productsData';

const ShowProducts = () => {
  const { category } = useParams();
  const { t } = useTranslation();
  const isRtl = document.documentElement.dir === 'rtl';
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categoryData = productsData[category];

  if (!categoryData) {
    return (
      <section className="py-20 px-6 sm:px-10 lg:px-16 text-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#243e87] mb-4">
            {t('category_not_found')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('category_not_found_desc')}
          </p>
        </div>
      </section>
    );
  }

  const { headerImage, products } = categoryData;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const formatCategoryTitle = (cat) => {
    return cat
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Full-width Header Image */}
      <div className="relative w-screen h-[300px] overflow-hidden mb-12">
        <img
          src={headerImage}
          alt={`${category} Header`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#243e87]/10 pointer-events-none" />
        <h2 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl font-semibold text-white text-center drop-shadow-lg">
          {t(`products_${category.replace(/-/g, '_')}_title`) ||
            formatCategoryTitle(category)}
        </h2>
      </div>

      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-gray-50 to-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Back Arrow */}
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer mb-6 flex items-center text-[#243e87] hover:text-[#1b2e6b] transition-colors duration-200"
          >
            <svg
              className={`w-6 h-6 ${isRtl ? 'ml-2 rotate-180' : 'mr-2'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>{t('back')}</span>
          </button>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder={t('search_products')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#243e87] focus:border-transparent shadow-sm text-gray-900 placeholder-gray-500 transition-all duration-200"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center p-6"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-medium text-[#243e87] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(product.description)}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">
                {t('no_products_found')}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 bg-[#243e87] text-white rounded-full hover:bg-[#1b2e6b] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg
                  className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-full ${
                      currentPage === page
                        ? 'bg-[#243e87] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } transition-colors duration-200 cursor-pointer`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 bg-[#243e87] text-white rounded-full hover:bg-[#1b2e6b] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg
                  className={`w-6 h-6 ${isRtl ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShowProducts;
