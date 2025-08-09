import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Cog, Heart } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';
import FeatureCard from '../components/FeatureCard';
import ArticleCard from '../components/ArticleCard';

const Home: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Enhancing crop yields and soil health through beneficial bacterial applications that improve nutrient uptake and disease resistance.',
      color: '#22c55e'
    },
    {
      icon: Cog,
      title: 'Industry',
      description: 'Developing innovative biotechnoArticleical solutions for manufacturing, waste treatment, and sustainable production processes.',
      color: '#f59e0b'
    },
    {
      icon: Heart,
      title: 'Medicine',
      description: 'Researching therapeutic bacteria for gut health, immune system support, and novel treatment approaches for various conditions.',
      color: '#ef4444'
    }
  ];

  const recentArticles = [
    {
      title: 'The Hidden World of Rhizosphere Bacteria',
      excerpt: 'Exploring the complex ecosystem of bacteria that live around plant roots and their crucial role in plant health and soil fertility.',
      date: '2025-01-10',
      category: 'Rhizosphere',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: 'rhizosphere-bacteria'
    },
    {
      title: 'Pure Soil Extraction Methods: A Technical Guide',
      excerpt: 'Advanced techniques for isolating and purifying beneficial bacteria from pristine soil samples for research and application.',
      date: '2025-01-08',
      category: 'Pure Soil',
      image: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: 'extraction-methods'
    },
    {
      title: 'Industrial Applications of Soil Bacteria',
      excerpt: 'How bacteria extracted from pure soil are revolutionizing manufacturing processes and creating sustainable industrial solutions.',
      date: '2025-01-05',
      category: 'Industry',
      image: 'https://images.pexels.com/photos/3735743/pexels-photo-3735743.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: 'industrial-applications'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section py-24">
        <div className="container flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
            MICROBIAL <span className="text-teal-600 underline decoration-4 decoration-teal-400">FRONTIER</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 mt-2">
            Extracting Bacteria From Pure Soil To Use As Powerful Tools For Agriculture, Industry, And Health.
          </p>
          <Link
            to="/science"
            className="px-6 py-3 rounded border border-teal-600 text-teal-700 bg-white font-medium shadow hover:bg-teal-50 transition-colors mb-10"
          >
            Explore Our Science
          </Link>
        </div>
      </section>
      <div className="w-full border-t border-gray-200 mb-2"></div>
      <div className="text-center text-lg font-serif text-gray-800 mb-8">
        The Science <span className="text-teal-600">Is AN Innovative</span> Solution
      </div>

      {/* About Preview Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At BlueWave Zone, we're pioneering the extraction and application of beneficial bacteria 
              from pristine soil environments. Our research focuses on harnessing the natural power 
              of rhizosphere bacteria to create innovative solutions that benefit agriculture, industry, 
              and human health.
            </p>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll">
            Our Research Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-on-scroll">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section section-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Articles</h2>
            <Link to="/bArticle" className="btn btn-primary">
              View All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div key={index} className="animate-on-scroll">
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;