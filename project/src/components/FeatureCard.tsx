import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="card group cursor-pointer">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-colors duration-300`}
           style={{ backgroundColor: color + '20', color: color }}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;