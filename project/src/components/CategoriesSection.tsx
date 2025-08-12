import React from 'react';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
}

interface Category {
  name: string;
  articles: Article[];
}

interface ArticleCardProps {
  article: Article & { image: string };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="rounded-lg bg-white border border-gray-200 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-[var(--color-teal)]">
    <div className="relative overflow-hidden h-48">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-3 text-[var(--color-brown)] leading-tight">{article.title}</h3>
      <p className="mb-5 text-gray-600 flex-1 leading-relaxed line-clamp-4 article-excerpt">{article.excerpt}</p>
      <Link 
        to={`/articles/${article.slug}`}
        className="inline-flex items-center text-[var(--color-teal)] font-medium hover:text-[var(--color-deep-blue)] transition-colors group mt-auto"
      >
        Read More
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
);

const categories: Category[] = [
  {
    name: 'The Science',
    articles: [
      {
        title: "Blue Wave Zone's Approach to Beneficial Bacteria Extraction from Pure Soil",
        excerpt: "Blue Wave Zone is a pioneer in the extraction and utilization of beneficial bacteria from pure soil. The roots of this methodology trace back to its inception in Bologna, Italy, over three decades ago, reflecting a sustained trajectory of research and development.",
        slug: 'bacteria-extraction-approach',
        image: '/images/beneficial-bacteria-research.jpg',
      },
      {
        title: 'Why The Rhizosphere Is Used',
        excerpt: 'The rhizosphere constitutes a unique ecological niche, markedly distinct from other soil environments due to its intense microbial activity and diversity.',
        slug: 'why-rhizosphere',
        image: '/images/beneficial-bacteria-microscope-1.jpg',
      },
      {
        title: 'Discerning Beneficial from Pathogenic Bacteria: A Microbial Dichotomy',
        excerpt: 'The microbial world is a dichotomy of beneficial and pathogenic bacteria, each playing distinct roles in environmental ecosystems and human health.',
        slug: 'beneficial-vs-pathogenic',
        image: '/images/beneficial-bacteria-microscope-2.jpg',
      },
    ],
  },
  {
    name: 'The Rhizosphere Effect',
    articles: [
      {
        title: 'What is the Rhizosphere and How Can Bacteria in the Rhizosphere Benefit Mankind',
        excerpt: 'The rhizosphere, a term first coined in 1904 by Lorenz Hiltner, is the narrow region of soil influenced by root secretions and associated soil microorganisms.',
        slug: 'rhizosphere-benefits',
        image: '/images/sustainable-agriculture-plant-growth-1.jpg',
      },
      {
        title: 'Why Pure Soil is Important',
        excerpt: 'Understanding the critical role of uncontaminated soil in maintaining healthy rhizosphere communities and sustainable agriculture.',
        slug: 'why-pure-soil',
        image: '/images/sustainable-agriculture-plant-growth-2.jpg',
      },
      {
        title: 'The Nature of the Rhizosphere: Unveiling the Microbial Nexus',
        excerpt: 'The rhizosphere, first described by Lorenz Hiltner in 1904, is a dynamic soil zone around plant roots rich in microbial life due to root exudates.',
        slug: 'rhizosphere-nature',
        image: '/images/sustainable-agriculture-plant-growth-3.jpg',
      },
    ],
  },
  {
    name: 'History & Research',
    articles: [
      {
        title: 'Bacteria Advancement as reported by the media',
        excerpt: 'In the vast narrative of human advancement, there lies a lesser-sung epic—the remarkable history of bacterial natural products, an odyssey of minuscule marvels and microbial mastery that has been pivotal to human health.',
        slug: 'bacteria-advancement-media',
        image: '/images/fertile-soil-agriculture-2.jpg',
      },
      {
        title: 'Nobel prizes for bacteria research',
        excerpt: 'In a profound testament to the foundational role of bacteria in science and medicine, the Nobel Prize in Physiology or Medicine has, over the years, been awarded to several scientists whose work with these microscopic entities has profoundly impacted our understanding of life and disease.',
        slug: 'nobel-prizes-bacteria',
        image: '/images/soil-research-analysis.jpg',
      },
      {
        title: 'Recent Advances in the Identification of Gut Microbiota and the Rectification of Dysbiosis: A New Horizon in Gastrointestinal Health',
        excerpt: 'The human gastrointestinal (GI) tract harbors a complex and dynamic population of microorganisms, known collectively as the gut microbiota, which play an indispensable role in maintaining homeostasis and health.',
        slug: 'gut-microbiota-advances',
        image: '/images/fertile-soil-agriculture-1.jpg',
      },
    ],
  },
  {
    name: 'Industrial Applications',
    articles: [
      {
        title: 'The Role of Beneficial Bacteria in Industrial Waste Management',
        excerpt: 'Beneficial bacteria, particularly those adept at breaking down organic compounds like fats, oils, and grease, offer a natural and effective solution for managing industrial waste.',
        slug: 'bacteria-waste-management',
        image: '/images/industrial-wastewater-treatment-bacteria.jpg',
      },
      {
        title: 'WASTE NOT WANT NOT: Application in Sewage Treatment Plants',
        excerpt: 'The Daunting Challenge of Human Waste Management: Global Trends and the Coastal Crisis',
        slug: 'sewage-treatment',
        image: '/images/organic-waste-management-bacteria.jpg',
      },
      {
        title: 'Industry and FOG Pollution',
        excerpt: 'The incursion of fats, oils, and grease (FOG) into environmental matrices poses a significant and multifaceted threat to water quality and ecosystem integrity.',
        slug: 'fog-pollution',
        image: '/images/industrial-bacteria-application.jpg',
      },
    ],
  },

];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-brown)] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore Our Research Areas
          </h2>
          <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs and innovations in microbial research across various fields
          </p>
        </div>
        
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.name} className="mb-12">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-brown)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {cat.name}
                </h3>
                <div className="flex-1 h-px bg-gray-200 ml-6"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.articles.map((article) => (
                  <ArticleCard key={article.title} article={article} />
                ))}
                {/* Add an empty div to maintain the 3-column layout when there are only 2 items */}
                {cat.articles.length % 3 === 2 && <div className="hidden lg:block"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
