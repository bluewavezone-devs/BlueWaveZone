import React from 'react';
import { Link } from 'react-router-dom';

const industryArticles = [
  {
    title: 'The Role of Beneficial Bacteria in Industry',
    excerpt: 'Explore how beneficial bacteria are revolutionizing industrial processes, from waste management to sustainable production. Our solutions leverage nature\'s own mechanisms to create more efficient and environmentally friendly industrial applications.',
    image: '/images/industrial-bacteria-application.jpg',
    slug: 'industrial-bacteria-applications',
    category: 'Industry',
    date: '2025-02-15',
    author: {
      name: 'BlueWave Research Team',
      avatar: '/images/logo.png',
      bio: 'Experts in industrial microbiology applications'
    },
    content: (
      <div>
        <p>Industrial applications of beneficial bacteria are transforming how we approach manufacturing, waste management, and environmental remediation. These microorganisms offer sustainable solutions to some of industry's most pressing challenges.</p>
        <h2>Key Industrial Applications</h2>
        <ul>
          <li>Wastewater treatment and purification</li>
          <li>Bioremediation of contaminated sites</li>
          <li>Bio-based manufacturing processes</li>
          <li>Waste reduction and resource recovery</li>
        </ul>
      </div>
    )
  },
  {
    title: 'WASTE NOT WANT NOT: Application in Human Waste Management',
    excerpt: 'Discover innovative approaches to human waste management using specialized bacterial formulations that break down organic matter efficiently while minimizing environmental impact and reducing harmful byproducts.',
    image: '/images/organic-waste-management-bacteria.jpg',
    slug: 'waste-management-solutions',
    category: 'Waste Management',
    date: '2025-02-10',
    author: {
      name: 'BlueWave Research Team',
      avatar: '/images/logo.png',
      bio: 'Pioneers in sustainable waste solutions'
    },
    content: (
      <div>
        <p>Our bacterial solutions for human waste management are setting new standards for efficiency and environmental responsibility in sanitation systems worldwide.</p>
        <h2>Benefits of Our Approach</h2>
        <ul>
          <li>90% reduction in sludge volume</li>
          <li>Elimination of foul odors</li>
          <li>Pathogen reduction</li>
          <li>Production of nutrient-rich byproducts</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Industry and FOG Pollution',
    excerpt: 'Learn about our cutting-edge solutions for Fats, Oils, and Grease (FOG) pollution in industrial settings, where specialized bacterial consortia effectively degrade complex organic compounds in wastewater systems.',
    image: '/images/industrial-wastewater-treatment-bacteria.jpg',
    slug: 'fog-pollution-solutions',
    category: 'Pollution Control',
    date: '2025-02-05',
    author: {
      name: 'BlueWave Research Team',
      avatar: '/images/logo.png',
      bio: 'Leaders in industrial pollution mitigation'
    },
    content: (
      <div>
        <p>Our specialized bacterial formulations target FOG (Fats, Oils, and Grease) in industrial wastewater, breaking down these challenging pollutants into harmless byproducts.</p>
        <h2>Our FOG Treatment Process</h2>
        <ol>
          <li>Initial assessment of FOG contamination</li>
          <li>Custom bacterial consortium selection</li>
          <li>Application and monitoring</li>
          <li>Performance verification and optimization</li>
        </ol>
      </div>
    )
  },
];

const IndustryArticlesSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-brown)] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Industry Insights
        </h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Exploring the latest advancements and applications of beneficial bacteria in industrial settings
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {industryArticles.map((article) => (
          <div 
            key={article.title} 
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
          >
            <div className="relative overflow-hidden h-56">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--color-teal)] text-white rounded-full">
                  Industry
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-deep-blue)] leading-tight">
                {article.title}
              </h3>
              <p className="mb-5 text-gray-600 flex-1 leading-relaxed">
                {article.excerpt}
              </p>
              <Link 
                to={`/articles/${article.slug}`}
                className="inline-flex items-center text-[var(--color-teal)] font-medium hover:text-[var(--color-deep-blue)] transition-colors group mt-auto relative"
                aria-label={`Read more about ${article.title}`}
              >
                Read Full Article
                <svg 
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="px-8 py-3 border-2 border-[var(--color-brown)] rounded-lg text-[var(--color-brown)] font-semibold bg-white hover:bg-[var(--color-brown)] hover:text-white transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
          View All Industry Articles
        </button>
      </div>
    </div>
  </section>
);

export default IndustryArticlesSection;
