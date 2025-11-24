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
            scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div 
                className="flex items-center cursor-pointer group"
                onClick={() => onNavigate(Page.HOME)}
              >
                <div className="bg-rose-100 p-2.5 rounded-full mr-3 group-hover:bg-rose-200 transition-colors duration-300">
                  <HeartHandshake className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-bold text-rose-900 tracking-tight">Silsila-e-Khair</h1>
                </div>
              </div>
    
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => onNavigate(item.value)}
                    className={`font-sans text-sm tracking-wide transition-all duration-200 relative group ${
                      currentPage === item.value 
                        ? 'text-rose-600 font-semibold' 
                        : 'text-gray-600 hover:text-rose-500'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-rose-400 transform origin-left transition-transform duration-300 ${
                      currentPage === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </button>
                ))}
                
                <div className="flex items-center space-x-3 pl-6 border-l border-gray-200 ml-2">
                  {isAuthenticated ? (
                    <button 
                      onClick={() => onNavigate(Page.DASHBOARD)}
                      className={`text-rose-500 hover:text-rose-600 transition-colors flex items-center text-sm font-medium bg-rose-50 px-4 py-2 rounded-full hover:bg-rose-100 ${currentPage === Page.DASHBOARD ? 'ring-2 ring-rose-200' : ''}`}
                      title="Go to Dashboard"
                    >
                      <LayoutDashboard size={18} className="mr-1.5" />
                      Dashboard
                    </button>
                  ) : (
                    <button 
                      onClick={() => onNavigate(Page.LOGIN)}
                      className={`text-gray-500 hover:text-rose-500 transition-colors flex items-center text-sm font-medium px-2 ${currentPage === Page.LOGIN ? 'text-rose-500 font-semibold' : ''}`}
                      title="Therapist Login"
                    >
                      <UserCircle size={20} className="mr-1.5" />
                      Login
                    </button>
                  )}
                  
                  <button 
                    onClick={() => onNavigate(Page.CONTACT)}
                    className="bg-rose-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-600 transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5"
                  >
                    Book a Session
                  </button>
                </div>
              </div>
    
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-600 hover:text-rose-500 focus:outline-none hover:bg-rose-50 rounded-lg transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-rose-100 shadow-xl animate-fade-in h-screen">
              <div className="px-6 py-8 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onNavigate(item.value);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-5 py-4 rounded-xl text-lg font-medium transition-all ${
                      currentPage === item.value
                        ? 'bg-rose-50 text-rose-600 shadow-sm border border-rose-100'
                        : 'text-gray-600 hover:bg-rose-50 hover:text-rose-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <hr className="border-gray-100 my-4" />
                <div className="space-y-4">
                    {isAuthenticated ? (
                       <button
                        onClick={() => {
                          onNavigate(Page.DASHBOARD);
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-center px-5 py-4 rounded-xl text-lg font-medium bg-rose-50 text-rose-600"
                      >
                        <LayoutDashboard size={20} className="mr-2" />
                        Dashboard
                      </button>
                    ) : (
                       <button
                        onClick={() => {
                          onNavigate(Page.LOGIN);
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-center px-5 py-4 rounded-xl text-lg font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <UserCircle size={20} className="mr-2" />
                        Therapist Login
                      </button>
                    )}
                    
                    <button 
                        onClick={() => {
                          onNavigate(Page.CONTACT);
                          setIsOpen(false);
                        }}
                        className="w-full bg-rose-500 text-white py-4 rounded-xl text-lg font-semibold shadow-lg shadow-rose-200 active:scale-95 transition-transform"
                    >
                        Book a Session
                    </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      );
    };
