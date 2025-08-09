import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import IndustryArticlesSection from '../components/IndustryArticlesSection';
import AgricultureArticlesSection from '../components/AgricultureArticlesSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <IndustryArticlesSection />
      <AgricultureArticlesSection />
    </>
  );
};

export default Home;