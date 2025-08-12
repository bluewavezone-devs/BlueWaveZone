import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/NewHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import Science from './pages/Science';
import About from './pages/About';
import Article from './pages/Article';
import Industry from './pages/Industry';
import ArticleView from './pages/ArticleView';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CodeOfConduct from './pages/CodeOfConduct';
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
            <Route path="/industry" element={<Industry />} />
            <Route path="/articles/:slug" element={<ArticleView />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;