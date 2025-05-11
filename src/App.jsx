import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ContactUs from './pages/ContactUs';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import i18next from 'i18next';
import AnimatedSection from './utils/AnimatedSection';

const App = () => {
  useEffect(() => {
    const handleDirection = () => {
      const currentLang = i18next.language;
      const direction = currentLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
    };

    handleDirection();
    i18next.on('languageChanged', handleDirection);

    return () => {
      i18next.off('languageChanged', handleDirection);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productName" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = {};

export default App;
