import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';

import { articlePosts } from './Article';


const ArticleView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articlePosts.find(post => post.href === slug);
  const moreArticles = articlePosts.filter(post => post.href !== slug).slice(0, 4); // show 4 others

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
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-72 object-cover object-center mb-0"
            style={{ maxHeight: '340px' }}
          />
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
            <div className="flex items-center gap-4 mb-8">
              <img src={article.author.avatar} alt={article.author.name} className="w-14 h-14 rounded-full border-2 border-teal-300" />
              <div>
                <div className="font-semibold text-gray-900">{article.author.name}</div>
                <div className="text-gray-500 text-sm">{article.author.bio}</div>
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
              {moreArticles.map((post, idx) => (
                <ArticleCard key={post.href} {...post} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleView;
