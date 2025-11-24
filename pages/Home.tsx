{
  "name": "silsila-e-khair",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^5.2.2",
    "lucide-react": "^0.264.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.2",
    "postcss": "^8.4.27",
    "autoprefixer": "^10.4.14"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
}
export enum Page {
  HOME = "HOME",
  ABOUT = "ABOUT",
  SERVICES = "SERVICES",
  BLOG = "BLOG",
  CONTACT = "CONTACT",
  DASHBOARD = "DASHBOARD",
  LOGIN = "LOGIN"
}
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/923308378949" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};
import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, UserCircle, LayoutDashboard } from 'lucide-react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isAuthenticated?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, isAuthenticated = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links: { page: Page; label: string }[] = [
    { page: Page.HOME, label: 'Home' },
    { page: Page.ABOUT, label: 'About' },
    { page: Page.SERVICES, label: 'Services' },
    { page: Page.BLOG, label: 'Blog' },
    { page: Page.CONTACT, label: 'Contact' },
  ];

  if (isAuthenticated) {
    links.push({ page: Page.DASHBOARD, label: 'Dashboard' });
  } else {
    links.push({ page: Page.LOGIN, label: 'Login' });
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <HeartHandshake size={32} className="text-green-500"/>
            <span className="font-bold text-xl text-gray-800">Silsila-e-Khair</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {links.map(link => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === link.page ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          {links.map(link => (
            <button
              key={link.page}
              onClick={() => { onNavigate(link.page); setIsOpen(false); }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === link.page ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {link.label}
            </button>import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Silsila-e-Khair</h1>
      <p className="text-gray-600">Your journey towards mental well-being and support starts here.</p>
    </div>
  );
};

          ))}
        </div>
      )}
    </nav>
  );
};
import React from 'react';

export const Services: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>Individual Counseling</li>
        <li>Group Therapy Sessions</li>
        <li>Workshops & Webinars</li>
        <li>Community Outreach Programs</li>
      </ul>
    </div>
  );
};
import React from 'react';

export const Blog: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600">Stay updated with articles and resources on mental health, wellness, and personal development.</p>
    </div>
  );
};
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600">Reach out via email, phone, or our WhatsApp support for assistance and guidance.</p>
    </div>
  );
};
import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Access personalized tools, track progress, and manage your profile.</p>
    </div>
  );
};
import React from 'react';

export const Login: React.FC = () => {
  return (
    <div className="pt-24 max-w-md mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md"/>
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-md"/>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium">Login</button>
      </form>
    </div>
  );
};
import React, { useState } from 'react';
import { Page } from './types';
import { Navigation } from './components/Navigation';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case Page.HOME: return <Home />;
      case Page.ABOUT: return <About />;
      case Page.SERVICES: return <Services />;
      case Page.BLOG: return <Blog />;
      case Page.CONTACT: return <Contact />;
      case Page.DASHBOARD: return <Dashboard />;
      case Page.LOGIN: return <Login />;
      default: return <Home />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} isAuthenticated={isAuthenticated}/>
      {renderPage()}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

