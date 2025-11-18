import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple scroll-to-top on page change
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} />;
      case Page.ABOUT:
        return <About />;
      case Page.SERVICES:
        return <Services onNavigate={handleNavigate} />;
      case Page.BLOG:
        return <Blog />;
      case Page.CONTACT:
        return <Contact />;
      case Page.LOGIN:
        return <Login />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-sans selection:bg-rose-200">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;