import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Page, ServiceItem } from '../types';
import { Smile, Coffee, Feather, PenTool, ArrowRight, HeartHandshake } from 'lucide-react';
import { Modal } from '../components/Modal';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Emotional Support Sessions',
      description: 'One-on-one non-clinical sessions to help you navigate through life\'s emotional complexities.',
      details: `Our Emotional Support Sessions are designed to be a sanctuary for your thoughts. In these 45-minute private sessions, we provide a non-judgmental, empathetic ear to help you voice your struggles. 

      We utilize active listening techniques and humanistic approaches to help you process grief, sadness, relationship issues, or general life overwhelm. 
      
      What to expect:
      • A safe, confidential environment.
      • Validation of your feelings.
      • Collaborative exploration of coping mechanisms.
      • Gentle guidance towards self-clarity.
      
      Note: These sessions are non-clinical and do not involve medical diagnosis or medication.`,
      icon: <Coffee className="w-full h-full text-rose-400 opacity-80" />,
    },
    {
      id: '2',
      title: 'Student Stress Management',
      description: 'Specialized support for students facing exam pressure, academic anxiety, and career confusion.',
      details: `Academic life is demanding, but it shouldn't cost you your peace. Our Student Stress Management program is tailored for high school and university students.

      We focus on:
      • Exam Anxiety Reduction: Breathing techniques and cognitive reframing to handle test nerves.
      • Procrastination: Understanding the emotional root of procrastination and building sustainable habits.
      • Career Clarity: Discussing future paths without the pressure of expectations.
      • Time Management: creating realistic schedules that prioritize mental rest.`,
      icon: <PenTool className="w-full h-full text-rose-400 opacity-80" />,
    },
    {
      id: '3',
      title: 'Mindfulness & Positive Psychology',
      description: 'Practical tools based on positive psychology to help you focus on gratitude and strengths.',
      details: `Rewire your brain for happiness with our evidence-based Positive Psychology interventions. We move beyond just "fixing what's wrong" to "building what's strong."

      Activities include:
      • Gratitude Journaling Workshops: Learning to see the good in the mundane.
      • Strength Finding: Identifying your core character strengths and using them daily.
      • Guided Mindfulness: Audio and visual exercises to ground you in the present moment.
      • Self-Compassion Breaks: Techniques to treat yourself with the same kindness you offer a friend.`,
      icon: <Feather className="w-full h-full text-teal-500 opacity-80" />,
    }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-rose-50 to-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-4 animate-slide-up">
            <HeartHandshake className="text-rose-500 w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-6 font-medium tracking-tight">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Gentle interventions designed to help you find your balance. We believe in holistic healing that respects your pace and journey.
          </p>
          <div className="mt-8 bg-rose-50/50 border border-rose-100 rounded-lg p-4 inline-block max-w-2xl">
             <span className="text-sm font-medium text-rose-500 block uppercase tracking-wide mb-1">Important Notice</span>
             <span className="text-sm text-gray-600 italic">*Disclaimer: We provide non-clinical support. For severe clinical conditions or emergencies, please seek medical professionals immediately.*</span>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12 md:space-y-16">
        
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`group bg-white rounded-[2.5rem] shadow-soft hover:shadow-2xl hover:shadow-rose-100/50 transition-all duration-500 overflow-hidden border border-gray-50 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Icon/Image Section */}
            <div className={`md:w-1/3 p-12 flex items-center justify-center transition-colors duration-500 ${index === 2 ? 'bg-teal-50 group-hover:bg-teal-100' : 'bg-rose-50 group-hover:bg-rose-100'}`}>
              <div className="w-32 h-32 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                {service.icon}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="md:w-2/3 p-8 md:p-14 flex flex-col justify-center">
              <h2 className="font-serif text-3xl text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => onNavigate(Page.CONTACT)} className="shadow-lg shadow-rose-200/50">
                  Book a Session
                </Button>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="flex items-center px-6 py-3 rounded-full border-2 border-gray-100 text-gray-600 font-semibold hover:border-rose-200 hover:text-rose-500 transition-all active:scale-95"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Modal Integration */}
      {selectedService && (
        <Modal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          title={selectedService.title}
        >
          <div className="whitespace-pre-line text-lg">
            {selectedService.details}
          </div>
          <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100">
             <h4 className="font-serif text-lg text-rose-800 mb-2">Ready to start?</h4>
             <p className="text-gray-600 mb-4">Take the first step towards feeling better. Book this session today.</p>
             <Button onClick={() => { setSelectedService(null); onNavigate(Page.CONTACT); }}>
               Book Now
             </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
