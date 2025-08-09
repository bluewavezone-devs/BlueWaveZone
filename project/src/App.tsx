import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Science from './pages/Science';
import About from './pages/About';
import Article from './pages/Article';
import ArticleView from './pages/ArticleView';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/science" element={<Science />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/articles/:slug" element={<ArticleView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;