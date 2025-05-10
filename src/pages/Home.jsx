import AnimatedSection from '../utils/AnimatedSection';
import Hero from '../components/Hero';
import Brands from '../components/Brands';

const Home = () => {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Brands />
      </AnimatedSection>
    </>
  );
};

export default Home;
