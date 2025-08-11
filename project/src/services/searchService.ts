import { articlePosts, ArticlePost } from '../pages/Article';

// Types
export type SortOption = 'relevance' | 'newest' | 'oldest';
export type DateRange = {
  startDate?: Date | null;
  endDate?: Date | null;
};

export interface SearchOptions {
  category?: string;
  dateRange?: DateRange;
  sortBy?: SortOption;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  type: 'article' | 'page' | 'message';
  image?: string;
  category?: string;
  date?: string;
  isComingSoon?: boolean;
}

// Get all unique categories from articles
const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  articlePosts.forEach(article => {
    if (article.category) {
      categories.add(article.category);
    }
  });
  return Array.from(categories).sort();
};

export const searchCategories = getAllCategories();

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

export const searchContent = async (
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> => {
  const trimmedQuery = query.trim();
  
  // If no query and no filters, return empty results
  if (!trimmedQuery && !options.category && !options.dateRange) {
    return [];
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Normalization for search
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '');
  };

  const normalizedQuery = trimmedQuery ? normalizeText(trimmedQuery) : '';
  
  // Apply filters
  let filteredArticles = [...allArticles];
  
  // Filter by category if specified
  if (options.category) {
    filteredArticles = filteredArticles.filter(
      article => article.category === options.category
    );
  }
  
  // Filter by date range if specified
  if (options.dateRange) {
    const { startDate, endDate } = options.dateRange;
    filteredArticles = filteredArticles.filter(article => {
      if (!article.date) return true;
      const articleDate = new Date(article.date);
      return (
        (!startDate || articleDate >= startDate) &&
        (!endDate || articleDate <= endDate)
      );
    });
  }
  
  // If no search query, return filtered results
  if (!trimmedQuery) {
    return filteredArticles;
  }
  
  // Search in title, excerpt, and category with fuzzy matching
  let results = filteredArticles.filter(article => {
    const normalizedTitle = normalizeText(article.title);
    const normalizedExcerpt = normalizeText(article.excerpt);
    const normalizedCategory = article.category ? normalizeText(article.category) : '';
    
    // Split query into words for more flexible matching
    const queryWords = normalizedQuery.split(' ').filter(Boolean);
    
    // Check if all query words appear in any field
    return queryWords.every(word => 
      normalizedTitle.includes(word) || 
      normalizedExcerpt.includes(word) ||
      normalizedCategory.includes(word)
    );
  });
  
  // Apply sorting if specified
  if (options.sortBy) {
    results = [...results].sort((a, b) => {
      switch (options.sortBy) {
        case 'newest':
          return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
        case 'oldest':
          return new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime();
        case 'relevance':
        default:
          // Simple relevance scoring (can be enhanced)
          const scoreA = calculateRelevance(a, normalizedQuery);
          const scoreB = calculateRelevance(b, normalizedQuery);
          return scoreB - scoreA;
      }
    });
  }
  
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

// Helper function to calculate relevance score
const calculateRelevance = (article: SearchResult, query: string): number => {
  if (!query) return 0;
  
  let score = 0;
  const title = article.title.toLowerCase();
  const excerpt = article.excerpt.toLowerCase();
  const category = article.category?.toLowerCase() || '';
  
  // Higher weight for title matches
  if (title.includes(query)) score += 30;
  if (excerpt.includes(query)) score += 10;
  if (category.includes(query)) score += 20;
  
  // Add more relevance for exact matches
  if (title === query) score += 50;
  if (category === query) score += 30;
  
  // Add date-based relevance (newer is slightly better)
  if (article.date) {
    const daysOld = (Date.now() - new Date(article.date).getTime()) / (1000 * 60 * 60 * 24);
    score += Math.max(0, 10 - (daysOld / 30)); // Up to 10 points for recent articles
  }
  
  return score;
};
