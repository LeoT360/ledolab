import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { siteConfig } from './config/site';
import Home from './pages/Home/Home';
import MediaEditing from './pages/MediaEditing/MediaEditing';
import Portfolio from './pages/Portfolio/Portfolio';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';

function App() {
  // Efecto de "clic" del cursor personalizado (ver styles/global.css)
  useEffect(() => {
    let timeout;
    const handleClick = () => {
      document.body.classList.add('cursor-click');
      clearTimeout(timeout);
      timeout = setTimeout(() => document.body.classList.remove('cursor-click'), 180);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edicion" element={<MediaEditing />} />
            <Route path="/web" element={<WebDevelopment />} />
            {siteConfig.showPortfolio && <Route path="/portafolio" element={<Portfolio />} />}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
