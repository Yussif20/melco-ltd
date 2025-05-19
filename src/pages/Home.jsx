import AnimatedSection from '../utils/AnimatedSection';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import { useTranslation } from 'react-i18next';
import CompanyProfileSection from '../components/CompanyProfileSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatedSection>
        <div>
          <h1 className="sr-only">
            {t('home_title', 'Melco - Safety Equipment & Protective Gear')}
          </h1>
          <meta
            name="description"
            content={t(
              'home_description',
              'Explore Melco safety equipment, including protective gear and hand protection solutions at masterequiment.com.'
            )}
          />
          <Hero />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <Brands />
      </AnimatedSection>
      <AnimatedSection>
        <CompanyProfileSection />
      </AnimatedSection>
    </>
  );
};

export default Home;
