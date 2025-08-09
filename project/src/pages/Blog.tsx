import React from 'react';
import ArticleCard from '../components/ArticleCard';

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface ArticlePost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
  author: Author;
  content: React.ReactNode;
}

export const blogPosts: ArticlePost[] = [
  {
    title: 'The Hidden World of Rhizosphere Bacteria',
    excerpt: 'Exploring the complex ecosystem of bacteria that live around plant roots and their crucial role in plant health and soil fertility.',
    date: '2025-01-10',
    category: 'Rhizosphere',
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'rhizosphere-bacteria',
    author: {
      name: 'Dr. Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Soil microbiologist and science communicator.'
    },
    content: (
      <div>
        <p>The rhizosphere is a dynamic environment teeming with beneficial bacteria that support plant growth and soil health.</p>
        <img src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rhizosphere Bacteria" className="rounded-lg my-4 mx-auto" style={{maxWidth:'100%'}} />
        <h2>Watch: Rhizosphere Bacteria in Action</h2>
        <div className="my-4 aspect-video">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/1QqY8q8Z8wE" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <h2>Bacteria Types Table</h2>
        <table className="min-w-full my-4 border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Example Species</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Nitrogen-fixing</td>
              <td className="border px-4 py-2">Enrich soil with nitrogen</td>
              <td className="border px-4 py-2">Rhizobium</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Phosphate-solubilizing</td>
              <td className="border px-4 py-2">Make phosphorus available</td>
              <td className="border px-4 py-2">Pseudomonas</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Disease-suppressive</td>
              <td className="border px-4 py-2">Protect plants from pathogens</td>
              <td className="border px-4 py-2">Bacillus</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: 'Pure Soil Extraction Methods: A Technical Guide',
    excerpt: 'Advanced techniques for isolating and purifying beneficial bacteria from pristine soil samples for research and application.',
    date: '2025-01-08',
    category: 'Pure Soil',
    image: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'extraction-methods',
    author: {
      name: 'Dr. John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Environmental scientist and laboratory lead.'
    },
    content: <div>Full article content for Pure Soil Extraction Methods goes here.</div>,
  },
  {
    title: 'Industrial Applications of Soil Bacteria',
    excerpt: 'How bacteria extracted from pure soil are revolutionizing manufacturing processes and creating sustainable industrial solutions.',
    date: '2025-01-05',
    category: 'Industry',
    image: 'https://images.pexels.com/photos/3735743/pexels-photo-3735743.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'industrial-applications',
    author: {
      name: 'Dr. Lisa Green',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Industrial microbiologist specializing in bioprocesses.'
    },
    content: (
  <div>
    <h2 className="text-2xl font-bold mb-4">Harnessing Bacteria for Sustainable Industry</h2>
    <p className="mb-4">Soil bacteria are at the forefront of green industrial innovation, powering processes from waste treatment to material manufacturing. Their unique metabolic capabilities enable sustainable solutions that reduce environmental impact and create new economic opportunities.</p>

    <img src="https://images.pexels.com/photos/3735743/pexels-photo-3735743.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Industrial Fermentation" className="rounded-lg my-4 mx-auto" style={{maxWidth:'100%'}} />

    <h3 className="text-xl font-semibold mt-8 mb-2">Key Industrial Applications</h3>
    <ul className="list-disc pl-6 mb-4">
      <li><strong>Bioremediation:</strong> Cleaning up oil spills and toxic waste using bacteria that degrade pollutants.</li>
      <li><strong>Bioleaching:</strong> Extracting metals from ores with bacteria in mining industries.</li>
      <li><strong>Bioplastics:</strong> Producing biodegradable plastics through bacterial fermentation.</li>
      <li><strong>Enzyme Production:</strong> Manufacturing industrial enzymes for detergents, food, and textiles.</li>
    </ul>

    <div className="my-6">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/6pF5V5bKQ1A" title="Industrial Bacteria Applications" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>

    <h3 className="text-xl font-semibold mt-8 mb-2">Industrial Bacteria Comparison Table</h3>
    <table className="min-w-full my-4 border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Process</th>
          <th className="border px-4 py-2">Bacterial Genus</th>
          <th className="border px-4 py-2">Industrial Use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Bioremediation</td>
          <td className="border px-4 py-2">Pseudomonas</td>
          <td className="border px-4 py-2">Oil spill cleanup</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Bioleaching</td>
          <td className="border px-4 py-2">Acidithiobacillus</td>
          <td className="border px-4 py-2">Metal extraction</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Bioplastics</td>
          <td className="border px-4 py-2">Ralstonia</td>
          <td className="border px-4 py-2">PHA production</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Enzyme Production</td>
          <td className="border px-4 py-2">Bacillus</td>
          <td className="border px-4 py-2">Detergents, food</td>
        </tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-8 mb-2">Sample Bioprocess Code</h3>
    <pre className="bg-gray-100 rounded p-4 text-sm overflow-x-auto mb-6"><code>{`
// Simulate a bioreactor batch process
function runBioreactorBatch(input, bacteria) {
  let output = input;
  for (let hour = 0; hour < 24; hour++) {
    output = bacteria.metabolize(output);
  }
  return output;
}
`}</code></pre>

    <h3 className="text-xl font-semibold mt-8 mb-2">Bacterial Bioprocess Flowchart</h3>
    <div className="flex justify-center my-4">
      <svg width="340" height="180" viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="80" height="40" fill="#e0f2fe" stroke="#14b8a6" strokeWidth="2" rx="8"/>
        <text x="50" y="45" textAnchor="middle" fill="#0f172a" fontSize="14">Input Waste</text>
        <rect x="120" y="20" width="100" height="40" fill="#fef9c3" stroke="#f59e42" strokeWidth="2" rx="8"/>
        <text x="170" y="45" textAnchor="middle" fill="#92400e" fontSize="14">Bioreactor</text>
        <rect x="250" y="20" width="80" height="40" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" rx="8"/>
        <text x="290" y="45" textAnchor="middle" fill="#14532d" fontSize="14">Clean Output</text>
        <line x1="90" y1="40" x2="120" y2="40" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <line x1="220" y1="40" x2="250" y2="40" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,10 L10,5 z" fill="#64748b" />
          </marker>
        </defs>
      </svg>
    </div>

    <blockquote className="border-l-4 border-teal-400 pl-4 italic my-6 text-gray-600">
      "Harnessing soil bacteria in industry is key to a greener, more sustainable future."
    </blockquote>
  </div>
),
  },
  {
    title: 'Bacterial Bioinoculants in Modern Agriculture',
    excerpt: 'The science behind using beneficial bacteria to enhance crop productivity while reducing environmental impact.',
    date: '2025-01-03',
    category: 'Agriculture',
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'bioinoculants-agriculture',
    author: {
      name: 'Dr. Alan White',
      avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
      bio: 'Agricultural scientist focused on sustainable solutions.'
    },
    content: <div>Full article content for Bacterial Bioinoculants in Modern Agriculture goes here.</div>,
  },
  {
    title: 'Gut Microbiome and Soil Bacteria Connections',
    excerpt: 'Understanding the fascinating relationships between environmental bacteria and human gut health.',
    date: '2025-01-01',
    category: 'Gut Microbiota',
    image: 'https://images.pexels.com/photos/3735788/pexels-photo-3735788.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'gut-microbiome-connections',
    author: {
      name: 'Dr. Emily Brown',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: 'Expert in microbiome research and health.'
    },
    content: <div>Full article content for Gut Microbiome and Soil Bacteria Connections goes here.</div>,
  },
  {
    title: 'Advanced Bacterial Characterization Techniques',
    excerpt: 'Modern methods for identifying, characterizing, and validating beneficial bacteria for various applications.',
    date: '2024-12-28',
    category: 'Bacteria Research',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'characterization-techniques',
    author: {
      name: 'Dr. Peter Black',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      bio: 'Bacterial genomics and lab automation specialist.'
    },
    content: <div>Full article content for Advanced Bacterial Characterization Techniques goes here.</div>,
  },
  {
    title: 'Bioremediation: Bacteria as Environmental Cleaners',
    excerpt: 'Harnessing the power of soil bacteria to clean up contaminated environments and restore ecological balance.',
    date: '2024-12-25',
    category: 'Industry',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'bioremediation-bacteria',
    author: {
      name: 'Dr. Nancy Grey',
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
      bio: 'Environmental biotechnologist and cleanup expert.'
    },
    content: <div>Full article content for Bioremediation: Bacteria as Environmental Cleaners goes here.</div>,
  },
  {
    title: 'The Future of Sustainable Agriculture',
    excerpt: 'How bacterial innovations are paving the way for more sustainable and productive farming practices.',
    date: '2024-12-22',
    category: 'Agriculture',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'sustainable-agriculture-future',
    author: {
      name: 'Dr. Michael Lee',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      bio: 'Futurist and agricultural technology researcher.'
    },
    content: <div>Full article content for The Future of Sustainable Agriculture goes here.</div>,
  },
  {
    title: 'Probiotics Beyond the Gut: Therapeutic Applications',
    excerpt: 'Exploring novel therapeutic applications of bacteria beyond traditional probiotic uses.',
    date: '2024-12-20',
    category: 'Gut Microbiota',
    image: 'https://images.pexels.com/photos/3735744/pexels-photo-3735744.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'probiotics-therapeutic-applications',
    author: {
      name: 'Dr. Sarah Lin',
      avatar: 'https://randomuser.me/api/portraits/women/80.jpg',
      bio: 'Medical microbiologist and probiotics specialist.'
    },
    content: <div>Full article content for Probiotics Beyond the Gut: Therapeutic Applications goes here.</div>,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ArticleCard key={index} {...post} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                3
              </button>
              <span className="px-4 py-2 text-gray-500">...</span>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;