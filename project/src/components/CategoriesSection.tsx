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
        className="w-full h-48 object-cover mb-4 rounded-lg"
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
    name: 'The Science',
    articles: [
      {
        title: 'Blue Wave Zone’s Approach to Beneficial Bacteria Extraction from Pure Soil',
        excerpt: 'The extraction and application of microorganisms from the rhizosphere of pure soil for beneficial purposes is a critical area of study in microbial biotechnology. Blue Wave Zone has been at the forefront of this field, focusing on the isolation of specific bacterial strains from unspoiled soil environments and supplying these components to our customers for further processing.',
        href: '#',
        image: '/images/beneficial-bacteria-research.jpg',
      },
      {
        title: 'Why The Rhizosphere Is Used',
        excerpt: 'The rhizosphere constitutes a unique ecological niche, markedly distinct from other soil environments due to its intense microbial activity and diversity. Root exudates transform this zone into a thriving microbial habitat, characterized by high-density populations of beneficial bacteria that are pivotal for plant growth and soil health.',
        href: '#',
        image: '/images/fertile-soil-agriculture-1.jpg',
      },
      {
        title: 'Discerning Beneficial from Pathogenic Bacteria',
        excerpt: 'The microbial world is a dichotomy of beneficial and pathogenic bacteria, each playing distinct roles in environmental ecosystems and human health. Beneficial bacteria, like probiotics, are essential for digestion, vitamin production, and immune support in humans, while also contributing to nutrient cycling and soil fertility in the environment. In contrast, pathogenic bacteria can cause disease in plants and animals, disrupting ecosystems and agriculture.',
        href: '#',
        image: '/images/beneficial-bacteria-microscope-2.jpg',
      },
    ],
  },
  {
    name: 'The Rhizosphere Effect',
    articles: [
      {
        title: 'What is the rhizosphere and how can bacteria in the rhizosphere benefit mankind',
        excerpt: 'The rhizosphere, a term first coined in 1904 by Lorenz Hiltner, is the narrow region of soil influenced by root secretions and associated soil microorganisms. It is a dynamic and intricate ecosystem vital for plant health and soil vitality, hosting a myriad of organisms, particularly beneficial bacteria. This zone is a hotbed for microbial activity, nutrient cycling, and ecological interactions, where plants and soil microorganisms engage in complex biological relationships.',
        href: '#',
        image: '/images/sustainable-agriculture-plant-growth-1.jpg',
      },
      {
        title: 'Why pure soil is important',
        excerpt: 'The purity of soil is critical for isolating beneficial rhizospheric bacteria. Untouched soil provides a balanced ecosystem where beneficial bacteria evolve in symbiosis with plant roots, free from contaminants like pesticides and pollutants. This ensures the safety and efficacy of extracted bacterial strains, making them reliable for research and commercial applications while maintaining sustainable soil health.',
        href: '#',
        image: '/images/sustainable-agriculture-plant-growth-2.jpg',
      },
      {
        title: 'The Nature of the Rhizosphere: Unveiling the Microbial Nexus',
        excerpt: 'The rhizosphere, first described by Lorenz Hiltner in 1904, is a dynamic soil zone around plant roots rich in microbial life due to root exudates. This complex ecosystem features diverse microbial communities that differ significantly from bulk soil, with bacteria being the most responsive to root-derived compounds. These microorganisms form organized biofilms and microcolonies that interact closely with plant roots, influencing nutrient cycling, plant health, and soil fertility through intricate biochemical pathways and symbiotic relationships.',
        href: '#',
        image: '/images/sustainable-agriculture-plant-growth-3.jpg',
      },
    ],
  },
  {
    name: 'The history of bacterial natural products',
    articles: [
      {
        title: 'Bacteria Advancement as reported by the media',
        excerpt: 'In the vast narrative of human advancement, there lies a lesser-sung epic—the remarkable history of bacterial natural products, an odyssey of minuscule marvels and microbial mastery that has been pivotal to human health. This saga, rich with discovery and innovation, is woven into the very fabric of modern medicine, and its chapters have been diligently chronicled not on ancient scrolls but within the archives of leading media outlets.',
        href: '#',
        image: '/images/fertile-soil-agriculture-1.jpg',
      },
      {
        title: 'Nobel prizes for bacteria research',
        excerpt: "The Nobel Prize in Physiology or Medicine has recognized groundbreaking bacterial research, including Barry Marshall and Robin Warren's 2005 award for discovering Helicobacter pylori's role in ulcers, Robert Koch's 1905 tuberculosis research, and Selman Waksman's 1952 prize for discovering streptomycin. These awards highlight how bacterial research has transformed medicine, from understanding disease causation to developing life-saving antibiotics.",
        href: '#',
        image: '/images/soil-research-analysis.jpg',
      },
      {
        title: 'Recent Advances in the Identification of Gut Microbiota and the Rectification of Dysbiosis: A New Horizon in Gastrointestinal Health',
        excerpt: 'The human gastrointestinal (GI) tract harbors a complex and dynamic population of microorganisms, known collectively as the gut microbiota, which play an indispensable role in maintaining homeostasis and health. Recent advances in high-throughput sequencing technologies and bioinformatics have led to unprecedented progress in the identification and characterization of these microbial communities...',
        href: '#',
        image: '/images/fertile-soil-agriculture-1.jpg',
      },
    ],
  },
  {
    name: 'Industrial Applications',
    articles: [
      {
        title: 'The Role of Beneficial Bacteria in Industrial Waste Management',
        excerpt: 'Beneficial bacteria, particularly those adept at breaking down organic compounds like fats, oils, and grease, offer a natural and effective solution for managing industrial waste. These microorganisms, such as species of Pseudomonas, Bacillus, and Lactobacillus, are capable of enzymatic degradation of complex FOG compounds, transforming them into simpler, non-polluting forms...',
        href: '#',
        image: '/images/industrial-wastewater-treatment-bacteria.jpg',
      },
      {
        title: 'Industry and FOG Pollution: The Peril of Industrial FOG',
        excerpt: 'The incursion of fats, oils, and grease (FOG) into environmental matrices poses a significant and multifaceted threat to water quality and ecosystem integrity. As industrial activities expand, so too does the propensity for FOG waste to seep into groundwater, obstruct sewer systems, and induce detrimental ecological effects...',
        href: '#',
        image: '/images/industrial-bacteria-application.jpg',
      },
      {
        title: 'WASTE NOT WANT NOT: Application in Sewage Treatment Plants',
        excerpt: 'The treatment and disposal of human waste represent one of the most pressing environmental and public health challenges of our time, particularly for coastal cities worldwide. Recent media reports have brought to light the contamination of the renowned beaches of the City of Cape Town, South Africa—a distressing illustration of broader global issues pertaining to waste management inefficiencies and their dire consequences on the environment...',
        href: '#',
        image: '/images/organic-waste-management-bacteria.jpg',
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
