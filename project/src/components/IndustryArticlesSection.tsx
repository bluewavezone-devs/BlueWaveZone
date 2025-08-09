import React from 'react';

const industryArticles = [
  {
    title: 'The Role of Beneficial Bacteria in Industry',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
    href: '#',
  },
  {
    title: 'WASTE NOT WANT NOT: Application in Human Waste Management',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
    href: '#',
  },
  {
    title: 'Industry and FOG Pollution',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
    href: '#',
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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              <a 
                href={article.href} 
                className="inline-flex items-center text-[var(--color-teal)] font-medium hover:text-[var(--color-deep-blue)] transition-colors group mt-auto"
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
              </a>
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
