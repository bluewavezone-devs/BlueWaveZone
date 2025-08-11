import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  slug: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  image,
  slug 
}) => {
  return (
    <Link to={`/articles/${slug}`} className="block group">
      <article className="card cursor-pointer">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Tag className="h-4 w-4" />
          <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed line-clamp-3">
        {excerpt}
      </p>
      </article>
    </Link>
  );
};

export default ArticleCard;