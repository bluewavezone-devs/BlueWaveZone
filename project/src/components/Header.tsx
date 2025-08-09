import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, XCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../public/images/logo.png';
import { articlePosts } from '../pages/Article';

// Generate search suggestions from article posts
const useSearchSuggestions = () => {
  return useMemo(() => {
    // Convert article posts to search suggestions
    const articleSuggestions = articlePosts.map(article => ({
      id: article.href,
      title: article.title,
      type: 'Article',
      url: `/articles/${article.href}`,
      category: article.category,
      excerpt: article.excerpt
    }));

    // Add static pages
    const staticPages = [
      { id: 'science', title: 'Microbial Innovations', type: 'Category', url: '/science#microbial-innovations' },
      { id: 'about', title: 'About Our Team', type: 'Page', url: '/about#team' },
      { id: 'contact', title: 'Contact Us', type: 'Page', url: '/contact' },
    ];

    return [...articleSuggestions, ...staticPages];
  }, []);
};

// Toast notification component
const Toast = ({ 
  message, 
  type, 
  onClose 
}: { 
  message: string; 
  type: 'success' | 'error' | 'info'; 
  onClose: () => void 
}) => {
  const bgColor = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  }[type];

  const icon = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    info: <AlertCircle className="w-5 h-5" />,
  }[type];

  return (
    <motion.div 
      ref={searchRef}
      initial="hidden"
      animate={isMounted ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`fixed bottom-4 right-4 border-l-4 ${bgColor} p-4 rounded shadow-lg flex items-center space-x-2 z-50`}
      role="alert"
    >
      {icon}
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="ml-2 text-gray-500 hover:text-gray-700"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const Header: React.FC = () => {
  const searchSuggestions = useSearchSuggestions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info');
  const [isMounted, setIsMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof searchSuggestions>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  
  const searchVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  // Navigation links
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Science', href: '/science' },
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/articles' },
  ];

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Set mounted state for initial animation
    setIsMounted(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-focus search input when shown
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <Toast 
          message={toastMessage} 
          type={toastType} 
          onClose={() => setShowToast(false)} 
        />
      )}
      
      <header 
        ref={searchRef}
        className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm ${
          isScrolled ? 'py-3 shadow-md' : 'py-5'
        }`}
        style={{
          height: isScrolled ? '80px' : '100px',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div variants={itemVariants}>
              <Link to="/" className="flex items-center h-full">
                <motion.img 
                  src={logo} 
                  alt="BlueWave Zone Logo" 
                  className="h-16"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex items-center space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { to: '/', label: 'Home' },
                { to: '/science', label: 'Science' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' }
              ].map((item) => (
                <motion.div key={item.to} variants={itemVariants}>
                  <Link 
                    to={item.to}
                    className={`relative text-base font-medium transition-colors ${
                      location.pathname === item.to ? 'text-teal-600 font-medium' : 'text-white hover:text-teal-600'
                    }`}
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      fontSize: '1.1rem',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    {item.label}
                    {location.pathname === item.to && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600"
                        layoutId="activeNav"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Search Button */}
              <motion.div variants={itemVariants}>
                <motion.button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-white hover:text-teal-300 transition-colors"
                  aria-label="Search"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-6 h-6" strokeWidth={2.5} />
                </motion.button>
              </motion.div>
            </motion.nav>

            {/* Search and Contact */}
            <div className="flex items-center gap-6">
              {/* Search Container */}
              <div className="relative" ref={searchRef}>
                {/* Search Input */}
                {isSearchOpen && (
                  <motion.form 
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Show toast notification
                      setToastMessage(`Searching for "${searchQuery}"`);
                      setToastType('info');
                      setShowToast(true);
                      
                      // In a real app, you would trigger an API call here
                      console.log('Searching for:', searchQuery);
                      
                      // Clear search and close after delay
                      setTimeout(() => {
                        setSearchQuery('');
                        setIsSearchOpen(false);
                        
                        // Show no results message
                        setToastMessage(`No results found for "${searchQuery}"`);
                        setToastType('error');
                      }, 1500);
                    }}
                    className="relative"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search articles, categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchOpen(true)}
                      className="transition-all duration-300 px-4 py-2 pr-10 text-sm rounded-full bg-white text-black outline-none border border-[var(--color-teal)] shadow-md focus:w-64 w-48"
                      style={{ minWidth: 150 }}
                      aria-label="Search"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        searchInputRef.current?.focus();
                      }}
                      className={`absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors ${
                        !searchQuery ? 'hidden' : ''
                      }`}
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--color-teal)] hover:text-[var(--color-deep-blue)] transition-colors"
                      aria-label="Submit search"
                    >
                      <Search className="w-6 h-6" strokeWidth={2.5} />
                    </button>
                  </motion.form>
                )}

                {/* Search Results Dropdown */}
                {isSearchOpen && searchQuery && (
                  <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                    {filteredSuggestions.length > 0 ? (
                      <ul className="py-1 max-h-96 overflow-y-auto">
                        {filteredSuggestions.map((item, index) => (
                          <li key={item.id}>
                            <Link
                              to={item.url}
                              className={`flex items-start px-4 py-3 hover:bg-gray-100 ${
                                index === 0 ? 'bg-gray-50' : ''
                              }`}
                              onClick={() => {
                                setSearchQuery('');
                                setIsSearchOpen(false);
                              }}
                            >
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{item.title}</div>
                                {item.excerpt && (
                                  <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                    {item.excerpt}
                                  </div>
                                )}
                                <div className="mt-1">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {item.type}
                                  </span>
                                  {item.category && (
                                    <span className="ml-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      {item.category}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="ml-2 text-gray-400 flex-shrink-0 mt-1">
                                <svg 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : searchQuery ? (
                      <div className="px-4 py-6 text-center text-gray-500">
                        <p>No results found for</p>
                        <p className="font-medium">"{searchQuery}"</p>
                      </div>
                    ) : null}
                    
                    {filteredSuggestions.length > 0 && (
                      <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100 bg-gray-50">
                        {filteredSuggestions.length} result{filteredSuggestions.length !== 1 ? 's' : ''} found. Press Enter to search all.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen(s => !s)}
                className={`p-2 rounded-full transition-colors ${
                  isSearchOpen ? 'bg-white/20' : 'hover:bg-white/20'
                }`}
                style={{ marginRight: 8 }}
                aria-label={isSearchOpen ? 'Close search' : 'Open search'}
                aria-expanded={isSearchOpen}
              >
                <Search 
                  className={`w-5 h-5 ${
                    isSearchOpen ? 'text-[var(--color-teal)]' : 'text-white'
                  }`} 
                  strokeWidth={2.5}
                />
              </button>
              
              {/* Contact Button */}
              <button 
                className="bg-[var(--color-teal)] text-white rounded px-5 py-1.5 font-heading font-semibold text-sm hover:bg-[var(--color-deep-blue)] transition-colors"
                onClick={() => navigate('/contact')}
              >
                Get in touch
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.div 
              className="md:hidden flex items-center"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-teal-300 transition-colors mr-2"
                aria-label="Search"
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white hover:text-teal-300 transition-colors"
                aria-label="Menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-7 h-7" strokeWidth={2.5} />
                )}
              </motion.button>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    className="md:hidden bg-white shadow-lg overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileMenuVariants}
                  >
                    <div className="container mx-auto px-4 py-4 space-y-4">
                      {[
                        { to: '/', label: 'Home' },
                        { to: '/science', label: 'Science' },
                        { to: '/about', label: 'About' },
                        { to: '/contact', label: 'Contact' }
                      ].map((item) => (
                        <motion.div
                          key={item.to}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link 
                            to={item.to} 
                            className={`block py-2 transition-colors ${
                              location.pathname === item.to 
                                ? 'text-teal-600 font-medium' 
                                : 'text-white hover:text-teal-600'
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;