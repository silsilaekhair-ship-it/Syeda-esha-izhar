import React from 'react';
import { Page } from '../types';
import { Instagram, Twitter, Facebook, Heart, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-rose-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl text-rose-900 mb-4">Silsila-e-Khair</h2>
            <p className="text-gray-600 font-sans leading-relaxed max-w-md">
              A sanctuary for emotional healing and personal growth. We believe that kindness is a chain reaction, and every heart deserves peace.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-rose-50 p-2 rounded-full text-rose-400 hover:bg-rose-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-rose-50 p-2 rounded-full text-rose-400 hover:bg-rose-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-rose-50 p-2 rounded-full text-rose-400 hover:bg-rose-100 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-rose-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate(Page.ABOUT)} className="text-gray-600 hover:text-rose-500 transition-colors">Our Story</button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.SERVICES)} className="text-gray-600 hover:text-rose-500 transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.BLOG)} className="text-gray-600 hover:text-rose-500 transition-colors">Resources</button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.CONTACT)} className="text-gray-600 hover:text-rose-500 transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-rose-800 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-rose-400" />
                <a href="mailto:silsilaekhair@gmail.com" className="hover:text-rose-500 transition-colors">
                  silsilaekhair@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-rose-400" />
                <a href="https://wa.me/923308378949" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">
                  WhatsApp: +92 330 837 8949
                </a>
              </li>
              <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Silsila-e-Khair. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-rose-400 fill-current" /> for mental wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};