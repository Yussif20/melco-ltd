import AnimatedSection from '../utils/AnimatedSection';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
// import Stats from './../components/Stats';
// import Testimonials from './../components/Testimonials';

const Home = () => {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Brands />
      </AnimatedSection>
      {/* <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Stats />
      </AnimatedSection> */}
    </>
  );
};

export default Home;
