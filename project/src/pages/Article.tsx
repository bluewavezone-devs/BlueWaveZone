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
  href: string;
  author: Author;
  content: React.ReactNode;
}

export const articlePosts: ArticlePost[] = [
  {
    title: 'The Hidden World of Rhizosphere Bacteria',
    excerpt: 'Exploring the complex ecosystem of bacteria that live around plant roots and their crucial role in plant health and soil fertility.',
    date: '2025-01-10',
    category: 'Rhizosphere',
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'rhizosphere-bacteria',
    author: {
      name: 'Harry Trisos',
      email: 'harrytrisos@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Harry+Trisos&background=4a7c59&color=fff',
      bio: 'Lead Researcher at BlueWave Zone'
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
      name: 'Harry Trisos',
      email: 'harrytrisos@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Harry+Trisos&background=4a7c59&color=fff',
      bio: 'Lead Researcher at BlueWave Zone'
    },
    content: (
      <div>
        <p>Discover the latest methods for extracting pure soil bacteria for scientific and industrial applications.</p>
        <ul>
          <li>Sample collection best practices</li>
          <li>Isolation and culturing techniques</li>
          <li>Quality control and contamination prevention</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Industrial Applications of Soil Bacteria',
    excerpt: 'How bacteria extracted from pure soil are revolutionizing manufacturing processes and creating sustainable industrial solutions.',
    date: '2025-01-05',
    category: 'Industry',
    image: 'https://images.pexels.com/photos/3735743/pexels-photo-3735743.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'industrial-applications',
    author: {
      name: 'Harry Trisos',
      email: 'harrytrisos@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Harry+Trisos&background=4a7c59&color=fff',
      bio: 'Lead Researcher at BlueWave Zone'
    },
    content: (
      <div>
        <p>Soil bacteria are key to eco-friendly industrial processes, from bioremediation to biofuel production.</p>
      </div>
    ),
  },
  {
    title: 'Gut Microbiota: The Human-Bacteria Connection',
    excerpt: 'Exploring the role of gut bacteria in human health, immunity, and disease prevention.',
    date: '2025-01-03',
    category: 'Medicine',
    image: 'https://images.pexels.com/photos/593836/pexels-photo-593836.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'gut-microbiota',
    author: {
      name: 'Harry Trisos',
      email: 'harrytrisos@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Harry+Trisos&background=4a7c59&color=fff',
      bio: 'Lead Researcher at BlueWave Zone'
    },
    content: (
      <div>
        <p>Gut microbiota influence everything from digestion to mental health. Learn how to support your microbiome.</p>
      </div>
    ),
  },
  {
    title: 'Bacterial Innovations in Agriculture',
    excerpt: 'Harnessing beneficial bacteria to boost crop yields, reduce chemical use, and promote sustainable farming.',
    date: '2025-01-01',
    category: 'Agriculture',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'bacterial-agriculture',
    author: {
      name: 'Harry Trisos',
      email: 'harrytrisos@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Harry+Trisos&background=4a7c59&color=fff',
      bio: 'Lead Researcher at BlueWave Zone'
    },
    content: (
      <div>
        <p>Discover how bacteria are transforming the future of food production and environmental stewardship.</p>
      </div>
    ),
  },
  {
    title: 'Sustainable Waste Treatment with Microbes',
    excerpt: 'How microbial communities are used to treat waste and protect water resources.',
    date: '2024-12-28',
    category: 'Environment',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: 'waste-treatment-microbes',
    author: {
      name: 'Harry Trisos',
      email: 'harrytrisos@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Harry+Trisos&background=4a7c59&color=fff',
      bio: 'Lead Researcher at BlueWave Zone'
    },
    content: (
      <div>
        <p>Microbial waste treatment is a sustainable solution for modern cities and industries.</p>
      </div>
    ),
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
            {articlePosts.map((article) => (
              <ArticleCard
                key={article.href}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                image={article.image}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Article;
