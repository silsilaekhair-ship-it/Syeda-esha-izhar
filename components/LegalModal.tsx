import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, X } from 'lucide-react';

export const LegalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('silsila_terms_accepted');
    if (!hasAccepted) {
      // Show modal after a small delay
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('silsila_terms_accepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity"></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all animate-slide-up border border-rose-100">
        <div className="bg-rose-50 px-6 py-4 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center text-rose-800">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-serif font-semibold">Important Safety Notice</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start mb-6 bg-yellow-50 p-4 rounded-xl border border-yellow-100">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>Not an Emergency Service:</strong> Silsila-e-Khair provides emotional support and guidance. We are <u>not</u> a crisis intervention service.
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            If you or someone you know is in immediate danger or experiencing a life-threatening emergency, please call your local emergency number or visit the nearest hospital immediately.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            By continuing to use this website, you acknowledge that our sessions are for support and personal growth, and do not replace psychiatric medical treatment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleAccept}
              className="flex-1 bg-rose-500 hover:bg-rose-600 text-white px-4 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-rose-200"
            >
              I Understand & Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};