import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import MediaEditing from './pages/MediaEditing/MediaEditing';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import Portfolio from './pages/Portfolio/Portfolio';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleClick = () => {
      document.body.classList.add('cursor-click');

      setTimeout(() => {
        document.body.classList.remove('cursor-click');
      }, 180);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edicion" element={<MediaEditing />} />
            <Route path="/web" element={<WebDevelopment />} />
            <Route path="/portafolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;