import React from 'react';

const agricultureArticles = [
  {
    title: 'The Organic Transition',
    excerpt: 'As the global demand for organic produce escalates, farmers are increasingly interested in transitioning from conventional to organic agriculture. This shift requires innovative approaches to maintain productivity while meeting organic certification standards.',
    image: '/images/soil-testing-laboratory.jpg',
    href: '#',
  },
  {
    title: 'Bacterial Consortia in Agriculture',
    excerpt: 'In the quest to address the multifaceted challenges besieging modern agriculture, the strategic deployment of beneficial bacterial consortia emerges as a game-changing solution. These microbial communities work synergistically to enhance soil fertility and plant health.',
    image: '/images/organic-fertilizer-testing-lab.png',
    href: '#',
  },
  {
    title: 'Agriculture at a Crossroads',
    excerpt: 'Agriculture today stands at a critical juncture, confronted by a confluence of escalating challenges that threaten global food security and environmental sustainability. Innovative solutions are needed to ensure a resilient and productive agricultural future.',
    image: '/images/agricultural-research-field.jpg',
    href: '#',
  },
];

const AgricultureArticlesSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brown)]/30 to-[var(--color-deep-blue)]/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-white uppercase bg-[var(--color-teal)] rounded-full">
            Sustainable Agriculture
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Revolutionizing Farming with Beneficial Bacteria
          </h2>
          <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Harnessing the power of nature's tiniest allies to create a sustainable future for agriculture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {agricultureArticles.map((article, index) => (
            <div 
              key={article.title}
              className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[var(--color-teal)] font-semibold mb-2">
                  {`0${index + 1}`}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <a 
                  href={article.href} 
                  className="inline-flex items-center text-[var(--color-teal)] font-medium hover:text-[var(--color-deep-blue)] transition-colors"
                >
                  Learn more
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
          <button className="px-8 py-3 bg-[var(--color-teal)] text-white font-semibold rounded-lg hover:bg-[var(--color-deep-blue)] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Explore Our Agricultural Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgricultureArticlesSection;
