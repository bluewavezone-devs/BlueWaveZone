import React from 'react';
import { Link } from 'react-router-dom';

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ title, description, image, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <Link 
          to={`/articles/${slug}`}
          className="mt-auto text-[var(--color-teal)] font-medium hover:underline self-start"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ResearchCard;
