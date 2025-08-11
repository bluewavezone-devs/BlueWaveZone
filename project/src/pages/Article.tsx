import React from 'react';
import ArticleCard from '../components/ArticleCard';

export interface Author {
  name: string;
  email?: string;
  avatar: string;
  bio: string;
}

export interface ArticlePost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  author: Author;
  content: React.ReactNode;
}

// Export article posts for use in search functionality
export const articlePosts: ArticlePost[] = [
  // Science Category
  {
    title: "Blue Wave Zone's Approach to Beneficial Bacteria Extraction from Pure Soil",
    excerpt: "The extraction and application of microorganisms from the rhizosphere of pure soil for beneficial purposes is a critical area of study in microbial biotechnology.",
    date: '2025-08-10',
    category: 'Science',
    image: '/images/beneficial-bacteria-research.jpg',
    slug: 'bacteria-extraction-approach',
    author: {
      name: 'Blue Wave Research Team',
      email: 'research@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=BlueWave+Research&background=4a7c59&color=fff',
      bio: 'Dedicated to advancing microbial biotechnology'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Introduction</h2>
        <p>The extraction and application of microorganisms from the rhizosphere of pure soil for beneficial purposes is a critical area of study in microbial biotechnology. Blue Wave Zone has been at the forefront of this field, focusing on the isolation of specific bacterial strains from unspoiled soil environments and supplying these components to our customers for further processing.</p>
        
        <h2>Our Methodology</h2>
        <p>Our approach combines traditional isolation techniques with cutting-edge molecular biology methods to identify and cultivate beneficial bacterial strains. We focus on preserving the natural biodiversity of soil ecosystems while targeting specific bacterial species with known benefits.</p>
        
        <h2>Applications</h2>
        <ul>
          <li>Agricultural biofertilizers</li>
          <li>Bioremediation solutions</li>
          <li>Industrial waste treatment</li>
          <li>Probiotic development</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Why The Rhizosphere Is Used',
    excerpt: 'The rhizosphere constitutes a unique ecological niche, markedly distinct from other soil environments due to its intense microbial activity and diversity.',
    date: '2025-08-09',
    category: 'Science',
    image: '/images/fertile-soil-agriculture-1.jpg',
    slug: 'why-rhizosphere',
    author: {
      name: 'Dr. Sarah Chen',
      email: 'schen@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=4a7c59&color=fff',
      bio: 'Soil Microbiologist at BlueWave Zone'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Understanding the Rhizosphere</h2>
        <p>The rhizosphere constitutes a unique ecological niche, markedly distinct from other soil environments due to its intense microbial activity and diversity. Root exudates transform this zone into a thriving microbial habitat, characterized by high-density populations of beneficial bacteria that are pivotal for plant growth and soil health.</p>
        
        <h2>Key Characteristics</h2>
        <ul>
          <li>Rich in root exudates that feed microbial communities</li>
          <li>Higher microbial diversity compared to bulk soil</li>
          <li>Hotspot for beneficial plant-microbe interactions</li>
          <li>Critical for nutrient cycling and soil fertility</li>
        </ul>
      </div>
    )
  },
  // Science Articles
  {
    title: 'The Nature of the Rhizosphere: Unveiling the Microbial Nexus',
    excerpt: 'The rhizosphere, first described by Lorenz Hiltner in 1904, is a dynamic soil zone around plant roots rich in microbial life due to root exudates.',
    date: '2025-08-05',
    category: 'Science',
    image: '/images/sustainable-agriculture-plant-growth-3.jpg',
    slug: 'rhizosphere-nature',
    author: {
      name: 'Dr. Emily Zhang',
      email: 'ezhang@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Zhang&background=4a7c59&color=fff',
      bio: 'Rhizosphere Specialist at BlueWave Zone'
    },
    content: (
      <div className="prose max-w-none">
        <h2>The Rhizosphere Ecosystem</h2>
        <p>The rhizosphere, first described by Lorenz Hiltner in 1904, is a dynamic soil zone around plant roots rich in microbial life due to root exudates. This complex ecosystem features diverse microbial communities that differ significantly from bulk soil, with bacteria being the most responsive to root-derived compounds.</p>
        
        <h3>Microbial Communities</h3>
        <p>These microorganisms form organized biofilms and microcolonies that interact closely with plant roots, influencing nutrient cycling, plant health, and soil fertility through intricate biochemical pathways and symbiotic relationships.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>High microbial density and diversity</li>
          <li>Intense biochemical activity</li>
          <li>Complex plant-microbe signaling</li>
          <li>Essential for nutrient acquisition</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Why pure soil is important',
    excerpt: 'The purity of soil is critical for isolating beneficial rhizospheric bacteria.',
    date: '2025-08-04',
    category: 'Science',
    image: '/images/sustainable-agriculture-plant-growth-2.jpg',
    slug: 'importance-pure-soil',
    author: {
      name: 'Dr. James Wilson',
      email: 'jwilson@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=4a7c59&color=fff',
      bio: 'Soil Scientist at BlueWave Zone'
    },
    content: (
      <div className="prose max-w-none">
        <h2>The Importance of Soil Purity</h2>
        <p>The purity of soil is critical for isolating beneficial rhizospheric bacteria. Untouched soil provides a balanced ecosystem where beneficial bacteria evolve in symbiosis with plant roots, free from contaminants like pesticides and pollutants.</p>
        
        <h3>Benefits of Pure Soil</h3>
        <ul>
          <li>Ensures safety and efficacy of bacterial strains</li>
          <li>Maintains natural microbial diversity</li>
          <li>Provides reliable research material</li>
          <li>Supports sustainable agricultural practices</li>
        </ul>
        
        <p>This ensures the safety and efficacy of extracted bacterial strains, making them reliable for research and commercial applications while maintaining sustainable soil health.</p>
      </div>
    )
  },
  
  // Industry Articles
  {
    title: 'Industry and FOG Pollution: The Peril of Industrial FOG',
    excerpt: 'The incursion of fats, oils, and grease (FOG) into environmental matrices poses a significant and multifaceted threat to water quality and ecosystem integrity.',
    date: '2025-08-03',
    category: 'Industry',
    image: '/images/industrial-wastewater-treatment-bacteria.jpg',
    slug: 'fog-pollution',
    author: {
      name: 'Industrial Solutions Team',
      email: 'industry@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Industrial+Solutions&background=4a7c59&color=fff',
      bio: 'Experts in industrial applications of microbial solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Understanding FOG Pollution</h2>
        <p>The incursion of fats, oils, and grease (FOG) into environmental matrices poses a significant and multifaceted threat to water quality and ecosystem integrity. As industrial activities expand, so too does the propensity for FOG waste to seep into groundwater, obstruct sewer systems, and induce detrimental ecological effects.</p>
        
        <h3>Environmental Impact</h3>
        <ul>
          <li>Water contamination</li>
          <li>Ecosystem disruption</li>
          <li>Infrastructure damage</li>
          <li>Public health risks</li>
        </ul>
      </div>
    )
  },
  {
    title: 'WASTE NOT WANT NOT: Application in Sewage Treatment Plants',
    excerpt: 'The treatment and disposal of human waste represent one of the most pressing environmental and public health challenges of our time.',
    date: '2025-08-02',
    category: 'Industry',
    image: '/images/organic-waste-management-bacteria.jpg',
    slug: 'sewage-treatment',
    author: {
      name: 'Waste Management Team',
      email: 'waste@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Waste+Management&background=4a7c59&color=fff',
      bio: 'Specialists in microbial waste treatment solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Revolutionizing Sewage Treatment</h2>
        <p>The treatment and disposal of human waste represent one of the most pressing environmental and public health challenges of our time, particularly for coastal cities worldwide. Recent media reports have brought to light the contamination of the renowned beaches of the City of Cape Town, South Africa—a distressing illustration of broader global issues pertaining to waste management inefficiencies and their dire consequences on the environment.</p>
        
        <h3>Our Solution</h3>
        <p>Our bacterial solutions offer an efficient and sustainable approach to sewage treatment, helping municipalities and industries manage waste more effectively while protecting water resources.</p>
      </div>
    )
  },
  
  // Research Articles
  {
    title: 'Bacteria Advancement as reported by the media',
    excerpt: 'In the vast narrative of human advancement, there lies a lesser-sung epic—the remarkable history of bacterial natural products.',
    date: '2025-08-01',
    category: 'Research',
    image: '/images/beneficial-bacteria-microscope-2.jpg',
    slug: 'bacteria-advancement-media',
    author: {
      name: 'Media Relations Team',
      email: 'media@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Media+Relations&background=4a7c59&color=fff',
      bio: 'Communicating scientific advancements to the public'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Bacterial Advancements in the Media</h2>
        <p>In the vast narrative of human advancement, there lies a lesser-sung epic—the remarkable history of bacterial natural products, an odyssey of minuscule marvels and microbial mastery that has been pivotal to human health. This saga, rich with discovery and innovation, is woven into the very fabric of modern medicine, and its chapters have been diligently chronicled not on ancient scrolls but within the archives of leading media outlets.</p>
        
        <h3>Key Milestones</h3>
        <ul>
          <li>Discovery of antibiotics</li>
          <li>Development of vaccines</li>
          <li>Industrial applications</li>
          <li>Environmental remediation</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Nobel prizes for bacteria research',
    excerpt: 'The Nobel Prize in Physiology or Medicine has recognized groundbreaking bacterial research.',
    date: '2025-07-31',
    category: 'Research',
    image: '/images/soil-research-analysis.jpg',
    slug: 'nobel-prizes-bacteria',
    author: {
      name: 'Research Department',
      email: 'research@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Research+Dept&background=4a7c59&color=fff',
      bio: 'Dedicated to advancing microbial research'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Nobel Prizes in Bacterial Research</h2>
        <p>The Nobel Prize in Physiology or Medicine has recognized groundbreaking bacterial research, including Barry Marshall and Robin Warren's 2005 award for discovering Helicobacter pylori's role in ulcers, Robert Koch's 1905 tuberculosis research, and Selman Waksman's 1952 prize for discovering streptomycin.</p>
        
        <h3>Notable Laureates</h3>
        <ul>
          <li>Barry Marshall & Robin Warren (2005) - H. pylori and ulcers</li>
          <li>Robert Koch (1905) - Tuberculosis research</li>
          <li>Selman Waksman (1952) - Discovery of streptomycin</li>
          <li>Alexander Fleming (1945) - Discovery of penicillin</li>
        </ul>
        
        <p>These awards highlight how bacterial research has transformed medicine, from understanding disease causation to developing life-saving antibiotics.</p>
      </div>
    )
  },
  {
    title: 'Recent Advances in the Identification of Gut Microbiota and the Rectification of Dysbiosis',
    excerpt: 'The human gastrointestinal (GI) tract harbors a complex and dynamic population of microorganisms.',
    date: '2025-07-30',
    category: 'Research',
    image: '/images/fertile-soil-agriculture-1.jpg',
    slug: 'gut-microbiota-advances',
    author: {
      name: 'Gut Health Research Team',
      email: 'guthealth@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Gut+Health+Team&background=4a7c59&color=fff',
      bio: 'Exploring the gut microbiome for better health'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Advances in Gut Microbiota Research</h2>
        <p>The human gastrointestinal (GI) tract harbors a complex and dynamic population of microorganisms, known collectively as the gut microbiota, which play an indispensable role in maintaining homeostasis and health. Recent advances in high-throughput sequencing technologies and bioinformatics have led to unprecedented progress in the identification and characterization of these microbial communities.</p>
        
        <h3>Key Findings</h3>
        <ul>
          <li>Identification of core microbiome species</li>
          <li>Understanding of gut-brain axis</li>
          <li>Role in immune system development</li>
          <li>Potential therapeutic applications</li>
        </ul>
      </div>
    )
  },
  
  // Agriculture Articles
  {
    title: 'The Organic Transition',
    excerpt: 'As the global demand for organic produce escalates, farmers are increasingly interested in transitioning from conventional to organic agriculture.',
    date: '2025-07-29',
    category: 'Agriculture',
    image: '/images/soil-testing-laboratory.jpg',
    slug: 'organic-transition',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Navigating the Organic Transition</h2>
        <p>As the global demand for organic produce escalates, farmers are increasingly interested in transitioning from conventional to organic agriculture. This shift requires innovative approaches to maintain productivity while meeting organic certification standards.</p>
        
        <h3>Transition Strategies</h3>
        <ul>
          <li>Soil health improvement</li>
          <li>Natural pest management</li>
          <li>Crop rotation planning</li>
          <li>Microbial inoculants</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Bacterial Consortia in Agriculture',
    excerpt: 'In the quest to address the multifaceted challenges besieging modern agriculture, the strategic deployment of beneficial bacterial consortia emerges as a game-changing solution.',
    date: '2025-07-28',
    category: 'Agriculture',
    image: '/images/sustainable-agriculture-plant-growth-2.jpg',
    slug: 'bacterial-consortia',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Harnessing Bacterial Consortia</h2>
        <p>In the quest to address the multifaceted challenges besieging modern agriculture, the strategic deployment of beneficial bacterial consortia emerges as a game-changing solution. These microbial communities work synergistically to enhance soil fertility and plant health.</p>
        
        <h3>Benefits</h3>
        <ul>
          <li>Enhanced nutrient availability</li>
          <li>Disease suppression</li>
          <li>Improved stress tolerance</li>
          <li>Sustainable crop production</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Agriculture at a Crossroads',
    excerpt: 'Agriculture today stands at a critical juncture, confronted by a confluence of escalating challenges that threaten global food security and environmental sustainability.',
    date: '2025-07-27',
    category: 'Agriculture',
    image: '/images/agricultural-research-field.jpg',
    slug: 'agriculture-crossroads',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>The Future of Agriculture</h2>
        <p>Agriculture today stands at a critical juncture, confronted by a confluence of escalating challenges that threaten global food security and environmental sustainability. Innovative solutions are needed to ensure a resilient and productive agricultural future.</p>
        
        <h3>Key Challenges</h3>
        <ul>
          <li>Climate change impacts</li>
          <li>Soil degradation</li>
          <li>Water scarcity</li>
          <li>Growing food demand</li>
        </ul>
        
        <h3>Our Approach</h3>
        <p>At BlueWave Zone, we're developing microbial solutions to help agriculture meet these challenges through sustainable, science-based approaches.</p>
      </div>
    )
  },
  {
    title: 'Discerning Beneficial from Pathogenic Bacteria',
    excerpt: 'The microbial world is a dichotomy of beneficial and pathogenic bacteria, each playing distinct roles in environmental ecosystems and human health.',
    date: '2025-08-08',
    category: 'Science',
    image: '/images/beneficial-bacteria-microscope-2.jpg',
    slug: 'beneficial-vs-pathogenic',
    author: {
      name: 'Dr. Michael Rodriguez',
      email: 'mrodriguez@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Rodriguez&background=4a7c59&color=fff',
      bio: 'Microbial Ecologist at BlueWave Zone'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Understanding Microbial Diversity</h2>
        <p>The microbial world is a dichotomy of beneficial and pathogenic bacteria, each playing distinct roles in environmental ecosystems and human health. Beneficial bacteria, like probiotics, are essential for digestion, vitamin production, and immune support in humans, while also contributing to nutrient cycling and soil fertility in the environment.</p>
        
        <h2>Key Differences</h2>
        <table className="min-w-full my-4 border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Characteristic</th>
              <th className="border px-4 py-2">Beneficial Bacteria</th>
              <th className="border px-4 py-2">Pathogenic Bacteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Role in Nature</td>
              <td className="border px-4 py-2">Support health and balance</td>
              <td className="border px-4 py-2">Cause disease and imbalance</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Impact on Hosts</td>
              <td className="border px-4 py-2">Symbiotic or mutualistic</td>
              <td className="border px-4 py-2">Parasitic or pathogenic</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  // Industrial Applications
  {
    title: 'The Role of Beneficial Bacteria in Industrial Waste Management',
    excerpt: 'Beneficial bacteria, particularly those adept at breaking down organic compounds like fats, oils, and grease, offer a natural and effective solution for managing industrial waste.',
    date: '2025-08-07',
    category: 'Industry',
    image: '/images/industrial-wastewater-treatment-bacteria.jpg',
    slug: 'bacteria-waste-management',
    author: {
      name: 'Industrial Solutions Team',
      email: 'industry@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Industrial+Solutions&background=4a7c59&color=fff',
      bio: 'Experts in industrial applications of microbial solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Introduction</h2>
        <p>Beneficial bacteria, particularly those adept at breaking down organic compounds like fats, oils, and grease, offer a natural and effective solution for managing industrial waste. These microorganisms, such as species of Pseudomonas, Bacillus, and Lactobacillus, are capable of enzymatic degradation of complex FOG compounds, transforming them into simpler, non-polluting forms.</p>
        
        <h2>Key Benefits</h2>
        <ul>
          <li>Eco-friendly alternative to chemical treatments</li>
          <li>Reduces sludge volume in treatment plants</li>
          <li>Lowers operational costs for industries</li>
          <li>Minimizes environmental impact of industrial waste</li>
        </ul>
      </div>
    )
  },
  // Sustainable Agriculture
  {
    title: 'Revolutionizing Farming with Beneficial Bacteria',
    excerpt: 'Harnessing the power of nature\'s tiniest allies to create a sustainable future for agriculture',
    date: '2025-08-06',
    category: 'Agriculture',
    image: '/images/sustainable-agriculture-plant-growth-1.jpg',
    slug: 'farming-bacteria-revolution',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>The Future of Farming</h2>
        <p>As the global population continues to grow, sustainable agricultural practices have never been more important. At BlueWave Zone, we're harnessing the power of beneficial bacteria to revolutionize modern farming practices, reduce environmental impact, and improve crop yields.</p>
      </div>
    )
  },
  {
    title: 'The Organic Transition',
    excerpt: 'Navigating the shift from conventional to organic agriculture with microbial solutions',
    date: '2025-07-29',
    category: 'Agriculture',
    image: '/images/soil-testing-laboratory.jpg',
    slug: 'organic-transition',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>The Organic Transition</h2>
        <p>As the global demand for organic produce escalates, farmers are increasingly interested in transitioning from conventional to organic agriculture. This shift requires innovative approaches to maintain productivity while meeting organic certification standards.</p>
        <p>Our research focuses on developing microbial solutions that can help bridge the gap during this transition period, maintaining soil health and crop yields without relying on synthetic inputs.</p>
      </div>
    )
  },
  {
    title: 'Bacterial Consortia in Agriculture',
    excerpt: 'Harnessing microbial communities for enhanced soil fertility and plant health',
    date: '2025-07-28',
    category: 'Agriculture',
    image: '/images/organic-fertilizer-testing-lab.png',
    slug: 'bacterial-consortia',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Bacterial Consortia in Agriculture</h2>
        <p>In the quest to address the multifaceted challenges besieging modern agriculture, the strategic deployment of beneficial bacterial consortia emerges as a game-changing solution. These microbial communities work synergistically to enhance soil fertility and plant health.</p>
        <p>Our research has identified specific combinations of bacterial species that work together to improve nutrient cycling, suppress pathogens, and enhance plant growth through various mechanisms.</p>
      </div>
    )
  },
  {
    title: 'Agriculture at a Crossroads',
    excerpt: 'Addressing the challenges of modern agriculture through innovative microbial solutions',
    date: '2025-07-27',
    category: 'Agriculture',
    image: '/images/agricultural-research-field.jpg',
    slug: 'agriculture-crossroads',
    author: {
      name: 'Agricultural Research Team',
      email: 'agriculture@bluewavezone.com',
      avatar: 'https://ui-avatars.com/api/?name=Agri+Research&background=4a7c59&color=fff',
      bio: 'Pioneering sustainable agricultural solutions'
    },
    content: (
      <div className="prose max-w-none">
        <h2>Agriculture at a Crossroads</h2>
        <p>Agriculture today stands at a critical juncture, confronted by a confluence of escalating challenges that threaten global food security and environmental sustainability. Innovative solutions are needed to ensure a resilient and productive agricultural future.</p>
        <p>At BlueWave Zone, we believe that microbial technologies hold the key to addressing many of these challenges, from improving soil health to reducing agriculture's environmental footprint.</p>
      </div>
    )
  }
];

function Article() {
  return (
    <div className="pt-16">
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Research Article</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments in bacterial research, applications, 
              and scientific discoveries from our team at BlueWave Zone.
            </p>
          </div>
          {articlePosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No articles available</h2>
              <p className="text-gray-500">Check back later for new research articles and updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlePosts.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  category={article.category}
                  image={article.image}
                  slug={article.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Article;
