import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, UserCircle } from 'lucide-react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Our Story', value: Page.ABOUT },
    { label: 'Services', value: Page.SERVICES },
    { label: 'Resources', value: Page.BLOG },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate(Page.HOME)}
          >
            <div className="bg-rose-100 p-2 rounded-full mr-2">
              <HeartHandshake className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-medium text-rose-900">Silsila-e-Khair</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
                  currentPage === item.value 
                    ? 'text-rose-500 font-semibold border-b-2 border-rose-400' 
                    : 'text-gray-600 hover:text-rose-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
               <button 
                onClick={() => onNavigate(Page.LOGIN)}
                className={`text-gray-500 hover:text-rose-500 transition-colors flex items-center text-sm font-medium ${currentPage === Page.LOGIN ? 'text-rose-500 font-semibold' : ''}`}
                title="Therapist Login"
              >
                <UserCircle size={20} className="mr-1" />
                Login
              </button>
              <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="bg-rose-400 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-rose-500 transition-colors shadow-md shadow-rose-200"
              >
                Book a Session
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-rose-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-rose-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-600 hover:bg-rose-50 hover:text-rose-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <hr className="border-gray-100 my-2" />
             <button
                onClick={() => {
                  onNavigate(Page.LOGIN);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${
                  currentPage === Page.LOGIN
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-600 hover:bg-rose-50 hover:text-rose-500'
                }`}
              >
                Therapist Login
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};