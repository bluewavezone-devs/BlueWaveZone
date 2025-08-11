import { articlePosts, ArticlePost } from '../pages/Article';

// Search service interface
export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  type: 'article' | 'page' | 'message';
  category?: string;
  date?: string;
  image?: string;
  isComingSoon?: boolean;
}

// Map article posts to search results
const mapArticleToSearchResult = (article: ArticlePost): SearchResult => ({
  id: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  slug: article.slug,
  type: 'article',
  category: article.category,
  date: article.date,
  image: article.image
});

// Get all articles as search results
const allArticles = articlePosts.map(mapArticleToSearchResult);

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
  
  // Normalize the search query - remove special characters and convert to lowercase
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD') // Normalize diacritics
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  };

  const normalizedQuery = normalizeText(trimmedQuery);
  
  // Search in title, excerpt, and category with fuzzy matching
  const results = allArticles.filter(article => {
    const normalizedTitle = normalizeText(article.title);
    const normalizedExcerpt = normalizeText(article.excerpt);
    const normalizedCategory = article.category ? normalizeText(article.category) : '';
    
    // Check if any part of the query matches the beginning of words in the title/excerpt
    const queryWords = normalizedQuery.split(' ');
    
    const matchesTitle = queryWords.every(word => 
      normalizedTitle.includes(word) || 
      article.title.toLowerCase().includes(word)
    );
    
    const matchesExcerpt = queryWords.every(word => 
      normalizedExcerpt.includes(word) || 
      article.excerpt.toLowerCase().includes(word)
    );
    
    const matchesCategory = article.category && queryWords.every(word =>
      normalizedCategory.includes(word) ||
      article.category!.toLowerCase().includes(word)
    );
    
    return matchesTitle || matchesExcerpt || !!matchesCategory;
  });
  
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
