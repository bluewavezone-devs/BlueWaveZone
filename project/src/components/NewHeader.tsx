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
          isScrolled ? 'shadow-md py-2' : 'py-3'
        }`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible">
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
                      className="absolute right-0 mt-2 w-[32rem] bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                    >
                      <div className="p-4 border-b border-gray-100 bg-gray-50">
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder="Search articles, categories, or topics..."
                              className="flex-1 pl-12 pr-5 py-3 rounded-xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-gray-800 placeholder-gray-400 transition-all duration-200"
                              autoFocus
                            />
                            <button
                              onClick={() => setShowFilters(!showFilters)}
                              className={`ml-2 h-12 w-12 flex items-center justify-center rounded-xl transition-all duration-200 ${
                                hasActiveFilters 
                                  ? 'bg-teal-100 text-teal-600 shadow-md' 
                                  : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm hover:shadow-md'
                              }`}
                              title="Filters"
                              aria-label="Filters"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-1 1H9a1 1 0 01-1-1v-3.586L3.293 7.707A1 1 0 013 7V3z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        
                        {/* Active Filters */}
                        {hasActiveFilters && (
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-medium text-gray-500 mr-1">Filters:</span>
                            {filters.category && (
                              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                                {filters.category}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setFilters({...filters, category: undefined});
                                  }}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-teal-500 hover:bg-teal-100 transition-colors"
                                  aria-label={`Remove category filter: ${filters.category}`}
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            {dateRange.startDate && (
                              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                From {dateRange.startDate.toLocaleDateString()}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDateRange({...dateRange, startDate: null});
                                  }}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-500 hover:bg-blue-100 transition-colors"
                                  aria-label="Clear start date"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            {dateRange.endDate && (
                              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                To {dateRange.endDate.toLocaleDateString()}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDateRange({...dateRange, endDate: null});
                                  }}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-blue-500 hover:bg-blue-100 transition-colors"
                                  aria-label="Clear end date"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            {filters.sortBy && filters.sortBy !== 'relevance' && (
                              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                Sorted: {filters.sortBy}
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setFilters({...filters, sortBy: 'relevance'});
                                  }}
                                  className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-purple-500 hover:bg-purple-100 transition-colors"
                                  aria-label="Reset sorting"
                                >
                                  &times;
                                </button>
                              </span>
                            )}
                            <button 
                              onClick={clearFilters}
                              className="ml-auto text-xs font-medium text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                            >
                              Clear all filters
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {/* Filters Panel */}
                      <AnimatePresence>
                        {showFilters && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-gray-200 overflow-hidden"
                          >
                            <div className="p-5 bg-gray-50">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Filter Results</h3>
                                <button 
                                  onClick={() => setShowFilters(false)}
                                  className="text-gray-400 hover:text-gray-600 transition-colors"
                                  aria-label="Hide filters"
                                >
                                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                              
                              <div className="space-y-6">
                                {/* Category Filter */}
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                  <select
                                    className="block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 rounded-lg bg-white shadow-sm transition-all duration-200"
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
                                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <label className="block text-xs text-gray-500 mb-1">From</label>
                                      <input
                                        type="date"
                                        className="mt-1 block w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
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
                                        className="mt-1 block w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                                        value={dateRange.endDate ? dateRange.endDate.toISOString().split('T')[0] : ''}
                                        min={dateRange.startDate ? dateRange.startDate.toISOString().split('T')[0] : undefined}
                                        onChange={(e) => setDateRange({
                                          ...dateRange,
                                          endDate: e.target.value ? new Date(e.target.value) : null
                                        })}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Search Results */}
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
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {result.title}
                                  </p>
                                  {result.excerpt && (
                                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                      {result.excerpt}
                                    </p>
                                  )}
                                  {result.date && (
                                    <div className="mt-1 flex items-center text-xs text-gray-500">
                                      <Clock className="h-3 w-3 mr-1" />
                                      <span>{new Date(result.date).toLocaleDateString()}</span>
                                    </div>
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
