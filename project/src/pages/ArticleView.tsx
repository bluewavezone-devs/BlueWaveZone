import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';

import { articlePosts } from './Article';


const ArticleView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const decodedSlug = slug ? decodeURIComponent(slug) : '';
  
  // Normalize slugs for comparison (trim and lowercase)
  const article = articlePosts.find(post => 
    post.slug.trim().toLowerCase() === decodedSlug.trim().toLowerCase()
  );
  
  // Get more articles from the same category, excluding the current one
  const moreArticles = article 
    ? articlePosts
        .filter(post => 
          post.slug !== article.slug && 
          post.category === article.category
        )
        .slice(0, 4)
    : articlePosts.slice(0, 4); // Fallback if no article found

  if (!article) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container pt-32 pb-20 px-4 mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Article */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative w-full h-72 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback to a default image if the specified one fails to load
                const target = e.target as HTMLImageElement;
                target.src = '/images/beneficial-bacteria-research.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{article.title}</h1>
              <p className="text-lg text-gray-200 drop-shadow-md">{article.excerpt}</p>
            </div>
          </div>
          <div className="px-6 py-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-10 5h6m-6 5h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {article.date}
              </span>
              <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold mb-4 leading-tight text-gray-900">{article.title}</h1>
            <p className="text-lg text-gray-600 mb-4 font-medium">{article.excerpt}</p>
            {/* Author Details */}
            <div className="mb-8 bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-100 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/team-logo.png" 
                    alt="BlueWave Zone Logo" 
                    className="w-14 h-14 object-contain" 
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-gray-800">BlueWave Zone</h3>
                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-medium">Team</span>
                  </div>
                  <p className="text-gray-600 mt-1">Pioneering sustainable agricultural solutions through innovative microbial research and technology</p>
                  <div className="flex items-center gap-2 mt-2">
                    <a href="/about" className="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center">
                      Learn more about us
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Rich Content */}
            <div className="prose max-w-none text-gray-800 text-base leading-relaxed mb-8">
              {article.content}
            </div>
            <button
              className="flex items-center gap-2 mt-4 px-4 py-2 bg-white border border-teal-200 text-teal-700 rounded-lg shadow-sm hover:bg-teal-50 transition-colors"
              onClick={() => navigate(-1)}
            >
              <span className="text-xl">←</span> <span className="font-medium">Back to Articles</span>
            </button>
          </div>
        </div>
        {/* Sidebar: More Articles */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-teal-700">More Articles</h2>
            <div className="flex flex-col gap-4">
              {moreArticles.map((post) => (
                <ArticleCard 
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                  image={post.image}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleView;
