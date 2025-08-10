import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import AgricultureArticlesSection from '../components/AgricultureArticlesSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <AgricultureArticlesSection />
    </>
  );
};

export default Home;