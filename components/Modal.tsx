import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      const timer = setTimeout(() => setShow(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-rose-900/30 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 px-6 py-4 border-b border-rose-50 flex justify-between items-center">
          <h2 className="font-serif text-xl md:text-2xl text-rose-900">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-rose-50 text-gray-500 hover:text-rose-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 md:p-8 text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
        
        <div className="p-6 border-t border-rose-50 bg-rose-50/30 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-rose-100 text-rose-600 font-medium hover:bg-rose-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};