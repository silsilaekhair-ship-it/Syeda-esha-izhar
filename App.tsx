import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Scroll to top on page change
  const handleNavigate = (page: Page) => {
    // Protect Dashboard Route
    if (page === Page.DASHBOARD && !isAuthenticated) {
      setCurrentPage(Page.LOGIN);
      return;
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    handleNavigate(Page.DASHBOARD);
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
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case Page.DASHBOARD:
        return isAuthenticated ? <Dashboard /> : <Login onLoginSuccess={handleLoginSuccess} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-sans selection:bg-rose-200">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        isAuthenticated={isAuthenticated}
      />
      
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      {/* Global Overlays */}
      <FloatingWhatsApp />
      <LegalModal />
    </div>
  );
};

export default App;