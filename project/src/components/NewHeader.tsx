import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Clock, FileText } from 'lucide-react';
import logo from '/images/logo.png';
import { searchContent, type SearchResult, type SearchOptions, type SortOption, searchCategories } from '../services/searchService';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchOptions>({
    sortBy: 'relevance',
  });
  const [dateRange, setDateRange] = useState<{startDate: Date | null, endDate: Date | null}>({
    startDate: null,
    endDate: null,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search functionality
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim() && !filters.category && !dateRange.startDate && !dateRange.endDate) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    try {
      const searchOptions: SearchOptions = {
        ...filters,
        dateRange: dateRange.startDate || dateRange.endDate 
          ? { startDate: dateRange.startDate || undefined, endDate: dateRange.endDate || undefined }
          : undefined
      };
      
      const results = await searchContent(query, searchOptions);
      setSearchResults(results);
      setSelectedResultIndex(-1);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([{
        id: 'error',
        title: 'Search Error',
        excerpt: 'An error occurred while searching. Please try again.',
        slug: '#',
        type: 'message'
      }]);
    } finally {
      setIsSearching(false);
    }
  }, [filters, dateRange]);
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      sortBy: 'relevance',
    });
    setDateRange({ startDate: null, endDate: null });
  };
  
  // Check if any filters are active
  const hasActiveFilters = Boolean(
    filters.category || 
    dateRange.startDate || 
    dateRange.endDate ||
    filters.sortBy !== 'relevance'
  );

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, performSearch, filters, dateRange]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isSearchOpen) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedResultIndex(prev => 
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedResultIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedResultIndex >= 0) {
      e.preventDefault();
      const result = searchResults[selectedResultIndex];
      navigate(`/articles/${result.slug}`);
      setIsSearchOpen(false);
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchRef]);

  // Navigation items
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/science', label: 'Science' },
    { to: '/about', label: 'About' },
    { to: '/articles', label: 'Articles' },
  ];

  // Animation variants with proper TypeScript types for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
        when: 'beforeChildren' as const,
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20
      }
    }
  } as const;

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut' as const
      }
    }
  } as const;
  
  // Search popup variants
  const searchPopupVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring' as const, 
        stiffness: 300, 
        damping: 25 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.98,
      transition: { 
        duration: 0.2 
      } 
    }
  } as const;

  return (
    <>
      <header 
        ref={headerRef}
        style={{ backgroundColor: 'var(--color-brown)' }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'shadow-md h-20' 
            : 'h-24'
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to="/" className="flex items-center h-full">
                <motion.img 
                  src={logo} 
                  alt="BlueWave Zone Logo" 
                  className="h-14"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex items-center space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.div 
                  key={item.to} 
                  variants={itemVariants}
                  className="relative group"
                >
                  <Link 
                    to={item.to}
                    className={`px-4 py-2 text-lg font-medium transition-colors ${
                      location.pathname === item.to 
                        ? 'text-white font-semibold' 
                        : 'text-white/90 hover:text-white'
                    }`}
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Search and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <div className="relative" ref={searchRef}>
                <motion.button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-white hover:text-teal-200 transition-colors"
                  aria-label="Search"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-6 h-6" />
                </motion.button>

                {/* Search Popup */}
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      variants={searchPopupVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                    >
                      <div className="p-3 border-b border-gray-100">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder="Search articles..."
                              className="flex-1 pl-10 pr-4 py-2 rounded-l-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              autoFocus
                            />
                            <button
                              onClick={() => setShowFilters(!showFilters)}
                              className={`h-10 px-3 border-t border-b border-r rounded-r-md ${
                                hasActiveFilters 
                                  ? 'bg-teal-50 border-teal-300 text-teal-600' 
                                  : 'border-gray-200 hover:bg-gray-50'
                              }`}
                              title="Filters"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-1 1H9a1 1 0 01-1-1v-3.586L3.293 7.707A1 1 0 013 7V3z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        {/* Active Filters */}
                        {hasActiveFilters && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {filters.category && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                                Category: {filters.category}
                                <button 
                                  onClick={() => setFilters({...filters, category: undefined})}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-teal-600 hover:bg-teal-200"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            {dateRange.startDate && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                From: {dateRange.startDate.toLocaleDateString()}
                                <button 
                                  onClick={() => setDateRange({...dateRange, startDate: null})}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-600 hover:bg-blue-200"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            {dateRange.endDate && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                To: {dateRange.endDate.toLocaleDateString()}
                                <button 
                                  onClick={() => setDateRange({...dateRange, endDate: null})}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-600 hover:bg-blue-200"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            {filters.sortBy && filters.sortBy !== 'relevance' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                Sorted: {filters.sortBy}
                                <button 
                                  onClick={() => setFilters({...filters, sortBy: 'relevance'})}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-purple-600 hover:bg-purple-200"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            <button 
                              onClick={clearFilters}
                              className="ml-auto text-xs text-gray-500 hover:text-gray-700"
                            >
                              Clear all
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {/* Filters Panel */}
                      {showFilters && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50">
                          <h3 className="text-sm font-medium text-gray-700 mb-3">Filter Results</h3>
                          
                          <div className="space-y-4">
                            {/* Category Filter */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                              <select
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                                value={filters.category || ''}
                                onChange={(e) => setFilters({
                                  ...filters,
                                  category: e.target.value || undefined
                                })}
                              >
                                <option value="">All Categories</option>
                                {searchCategories.map((category) => (
                                  <option key={category} value={category}>
                                    {category}
                                  </option>
                                ))}
                              </select>
                            </div>
                            
                            {/* Date Range */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="block text-xs text-gray-500 mb-1">From</label>
                                  <input
                                    type="date"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                    value={dateRange.startDate ? dateRange.startDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setDateRange({
                                      ...dateRange,
                                      startDate: e.target.value ? new Date(e.target.value) : null
                                    })}
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs text-gray-500 mb-1">To</label>
                                  <input
                                    type="date"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                    value={dateRange.endDate ? dateRange.endDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setDateRange({
                                      ...dateRange,
                                      endDate: e.target.value ? new Date(e.target.value) : null
                                    })}
                                    min={dateRange.startDate ? dateRange.startDate.toISOString().split('T')[0] : undefined}
                                  />
                                </div>
                              </div>
                            </div>
                            
                            {/* Sort Options */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                              <div className="space-y-2">
                                {[
                                  { value: 'relevance', label: 'Relevance' },
                                  { value: 'newest', label: 'Newest First' },
                                  { value: 'oldest', label: 'Oldest First' },
                                ].map((option) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`sort-${option.value}`}
                                      name="sort-method"
                                      type="radio"
                                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                      checked={filters.sortBy === option.value}
                                      onChange={() => setFilters({...filters, sortBy: option.value as SortOption})}
                                    />
                                    <label htmlFor={`sort-${option.value}`} className="ml-2 block text-sm text-gray-700">
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {isSearching ? (
                        <div className="p-4 text-center text-gray-500">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-500 mx-auto"></div>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="max-h-96 overflow-y-auto">
                          {searchResults.map((result, index) => (
                            <div 
                              key={result.id}
                              onClick={() => {
                                if (result.type !== 'message') {
                                  navigate(`/articles/${result.slug}`);
                                }
                                setIsSearchOpen(false);
                              }}
                              className={`block p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                                selectedResultIndex === index ? 'bg-gray-50' : ''
                              } ${result.type === 'message' ? 'bg-yellow-50' : ''}`}
                            >
                              <div className="flex items-start space-x-3">
                                {result.type !== 'message' && result.image ? (
                                  <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                                    <img 
                                      src={result.image} 
                                      alt={result.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ) : (
                                  <div className="flex-shrink-0 mt-0.5">
                                    <FileText className="h-5 w-5 text-teal-500" />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-start">
                                    <h3 className={`text-sm font-medium ${
                                      result.type === 'message' ? 'text-yellow-700' : 'text-gray-900'}
                                      line-clamp-1`}>
                                      {result.title}
                                    </h3>
                                    {result.category && !result.isComingSoon && (
                                      <span className="ml-2 px-2 py-0.5 bg-teal-100 text-teal-800 text-xs rounded-full whitespace-nowrap">
                                        {result.category}
                                      </span>
                                    )}
                                  </div>
                                  {result.excerpt && (
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                      {result.excerpt}
                                    </p>
                                  )}
                                  {result.date && !result.isComingSoon && (
                                    <div className="mt-1 flex items-center text-xs text-gray-400">
                                      <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                                      <span>{new Date(result.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>
                                  )}
                                  {result.isComingSoon && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                                      Coming Soon
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : searchQuery ? (
                        <div className="p-4 text-center text-gray-500">
                          No results found for "{searchQuery}"
                        </div>
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          <p>Start typing to search articles</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 text-white hover:text-teal-200 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-7 h-7" strokeWidth={2.5} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="container mx-auto px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={itemVariants}
                  >
                    <Link 
                      to={item.to} 
                      className={`block px-4 py-3 text-lg font-medium ${
                        location.pathname === item.to 
                          ? 'text-teal-600 font-semibold' 
                          : 'text-gray-800 hover:text-teal-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Add padding to content below fixed header */}
      <div className={`${isScrolled ? 'pt-20' : 'pt-24'}`}></div>
    </>
  );
};

export default NewHeader;
