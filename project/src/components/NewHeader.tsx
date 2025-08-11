import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Clock, FileText } from 'lucide-react';
import logo from '/images/logo.png';
import { searchContent, type SearchResult } from '../services/searchService';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
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
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    try {
      const results = await searchContent(query);
      setSearchResults(results);
      setSelectedResultIndex(-1);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, performSearch]);

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
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search articles..."
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            autoFocus
                          />
                        </div>
                      </div>

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
