import React from 'react';

interface Article {
  title: string;
  excerpt: string;
  href: string;
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
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-3 text-[var(--color-deep-blue)] leading-tight">{article.title}</h3>
      <p className="mb-5 text-gray-600 flex-1 leading-relaxed">{article.excerpt}</p>
      <a 
        href={article.href} 
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
      </a>
    </div>
  </div>
);

const categories: Category[] = [
  {
    name: 'Microbial Innovations',
    articles: [
      {
        title: 'CRISPR & Gene Editing',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
      {
        title: 'Synthetic Biology Frontiers',
        excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
    ],
  },
  {
    name: 'Soil Health & Sustainability',
    articles: [
      {
        title: 'Regenerative Agriculture',
        excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
      {
        title: 'Carbon Sequestration',
        excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
    ],
  },
  {
    name: 'Human Health & Microbiomes',
    articles: [
      {
        title: 'The Gut-Soil Connection',
        excerpt: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
      {
        title: 'Probiotics of the Future',
        excerpt: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
    ],
  },
  {
    name: 'Biotech & Industry',
    articles: [
      {
        title: 'Biofertilizers & Biopesticides',
        excerpt: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
      },
      {
        title: 'Bioremediation Breakthroughs',
        excerpt: 'Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: '#',
        image: 'https://placehold.co/800x600/4a7c59/ffffff?text=Placeholder',
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.articles.map((article) => (
                  <ArticleCard key={article.title} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
