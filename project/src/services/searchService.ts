// Search service interface
export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  type: 'article' | 'page' | 'message';
  category?: string;
  date?: string;
  isComingSoon?: boolean;
}

// Mock articles data - matching the actual articles from Article.tsx
const mockArticles = [
  {
    id: '1',
    title: 'The Hidden World of Rhizosphere Bacteria',
    excerpt: 'Exploring the complex ecosystem of bacteria that live around plant roots and their crucial role in plant health and soil fertility.',
    slug: 'rhizosphere-bacteria',
    type: 'article' as const,
    category: 'Rhizosphere',
    date: '2025-01-10'
  }
  // Add more articles here as they are created in the Article.tsx file
];

export const searchContent = async (query: string): Promise<SearchResult[]> => {
  const trimmedQuery = query.trim();
  
  if (!trimmedQuery) {
    return [];
  }
  
  if (trimmedQuery.length < 3) {
    return [{
      id: 'min-length',
      title: 'Keep typing...',
      excerpt: 'Please enter at least 3 characters to search.',
      slug: '#',
      type: 'message'
    }];
  }
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const lowerQuery = trimmedQuery.toLowerCase();
  
  // Search in title, excerpt, and category
  const results = mockArticles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.excerpt.toLowerCase().includes(lowerQuery) ||
    (article.category && article.category.toLowerCase().includes(lowerQuery))
  );
  
  if (results.length === 0) {
    return [{
      id: 'no-results',
      title: 'No results found',
      excerpt: `We couldn't find any articles matching "${trimmedQuery}". Try different keywords.`,
      slug: '#',
      type: 'message'
    }];
  }
  
  return results;
};
