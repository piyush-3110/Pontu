import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Pontu from './pages/Pontu';
import Strategy from './pages/Strategy';
import WhyPontu from './pages/WhyPontu';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#f5f3e8]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'Home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'Pontu' && <Pontu />}
      {currentPage === 'Strategy' && <Strategy />}
      {currentPage === 'Why Pontu' && <WhyPontu />}
    </div>
  );
}

export default App;
