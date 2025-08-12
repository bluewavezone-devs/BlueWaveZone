import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';

// Import industry-related articles from the main articles list
import { articlePosts } from './Article';

const Industry: React.FC = () => {
  // Filter articles that belong to the Industry category
  const industryArticles = articlePosts.filter(
    article => article.category === 'Industry' || article.category === 'Industrial Applications'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-[var(--color-deep-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Applications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Harnessing the power of beneficial bacteria for innovative industrial solutions
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-16">
        {industryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                category={article.category}
                image={article.image}
                slug={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No industrial articles found</h2>
            <p className="text-gray-500 mb-6">Check back later for updates on our industrial applications.</p>
            <Link
              to="/articles"
              className="inline-block px-6 py-3 bg-[var(--color-teal)] text-white rounded-lg hover:bg-[var(--color-deep-blue)] transition-colors"
            >
              View All Articles
            </Link>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-[var(--color-brown)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in our industrial solutions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to learn how our bacterial technologies can benefit your industrial processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contact@bluewavezone.co.za"
              className="px-8 py-3 bg-white text-[var(--color-brown)] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
