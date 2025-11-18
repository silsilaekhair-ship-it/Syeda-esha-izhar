import React from 'react';
import { Button } from '../components/Button';
import { Page } from '../types';
import { Smile, Coffee, Feather, PenTool } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in pt-24 pb-16">
      <div className="bg-gradient-to-b from-rose-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-6">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Gentle interventions designed to help you find your balance.
            <br />
            <span className="text-sm italic text-rose-400 mt-2 block">*Disclaimer: We provide non-clinical support. For severe clinical conditions, we recommend seeking medical professionals.*</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Service 1 */}
        <div className="bg-white rounded-3xl shadow-lg shadow-rose-100/50 overflow-hidden border border-rose-50 flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-rose-100 p-10 flex items-center justify-center">
            <Coffee className="w-32 h-32 text-rose-400 opacity-80" />
          </div>
          <div className="md:w-2/3 p-10 flex flex-col justify-center">
            <h2 className="font-serif text-2xl text-gray-900 mb-4">Emotional Support Sessions</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes, the heaviest burdens are the ones we carry silently. Our one-on-one sessions provide a safe harbor to unload your thoughts. We use active listening and empathetic dialogue to help you process grief, sadness, or general overwhelm.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>45-minute private sessions</li>
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Video or Audio call options</li>
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Personalized coping strategies</li>
            </ul>
            <div>
              <Button onClick={() => onNavigate(Page.CONTACT)}>Book a Session</Button>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-3xl shadow-lg shadow-rose-100/50 overflow-hidden border border-rose-50 flex flex-col md:flex-row-reverse">
          <div className="md:w-1/3 bg-pink-100 p-10 flex items-center justify-center">
            <PenTool className="w-32 h-32 text-rose-400 opacity-80" />
          </div>
          <div className="md:w-2/3 p-10 flex flex-col justify-center">
            <h2 className="font-serif text-2xl text-gray-900 mb-4">Student Stress Management</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Academic pressure shouldn't cost you your peace of mind. We work with students to build resilience against exam anxiety, procrastination, and fear of failure. 
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Time management counseling</li>
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Exam anxiety reduction techniques</li>
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Career path clarity discussions</li>
            </ul>
            <div>
              <Button onClick={() => onNavigate(Page.CONTACT)}>Book a Session</Button>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-3xl shadow-lg shadow-rose-100/50 overflow-hidden border border-rose-50 flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-rose-50 p-10 flex items-center justify-center">
            <Feather className="w-32 h-32 text-rose-400 opacity-80" />
          </div>
          <div className="md:w-2/3 p-10 flex flex-col justify-center">
            <h2 className="font-serif text-2xl text-gray-900 mb-4">Mindfulness & Positive Psychology</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Rewire your brain for happiness. We offer curated activities based on positive psychology to help you focus on gratitude, strengths, and present-moment awareness.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Guided meditation resources</li>
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Gratitude journaling workshops</li>
              <li className="flex items-center text-gray-600"><div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>Strength-finding exercises</li>
            </ul>
            <div>
              <Button variant="secondary" onClick={() => onNavigate(Page.BLOG)}>View Resources</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};