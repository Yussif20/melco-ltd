import AnimatedSection from '../utils/AnimatedSection';
import Hero from '../components/Hero';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
    </>
  );
};

export default Home;
