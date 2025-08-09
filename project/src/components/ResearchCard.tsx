import React from 'react';

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <button className="mt-auto text-[var(--color-teal)] font-medium hover:underline self-start">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ResearchCard;
