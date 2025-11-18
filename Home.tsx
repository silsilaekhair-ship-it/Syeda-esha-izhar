import React from 'react';
import { Button } from '../components/Button';
import { Page, ServiceItem, Testimonial } from '../types';
import { Sparkles, Heart, BookOpen, Users, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Emotional Support',
      description: 'One-on-one non-clinical sessions to help you navigate through life\'s emotional complexities with a compassionate listener.',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
    },
    {
      id: '2',
      title: 'Student Guidance',
      description: 'Specialized stress management and academic anxiety support for students facing exam pressure and career confusion.',
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
    },
    {
      id: '3',
      title: 'Mindfulness Tools',
      description: 'Practical positive psychology tools and guided mindfulness activities to bring peace to your daily routine.',
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: "Aisha R.",
      role: "University Student",
      content: "Finding Silsila-e-Khair was like finding a warm hug on a cold day. The student guidance sessions helped me manage my exam anxiety tremendously."
    },
    {
      id: '2',
      name: "Sarah K.",
      role: "Creative Designer",
      content: "The mindfulness resources are my daily go-to. The design is so calming, and the content is genuinely helpful for staying grounded."
    },
    {
      id: '3',
      name: "Fatima Z.",
      role: "Homemaker",
      content: "A safe space where I felt truly heard without judgment. The empathy shown during my sessions was healing in itself."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-100 z-0" />
        <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 -ml-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-6">
              Welcome to your safe space
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight mb-6">
              Silsila-e-Khair <br />
              <span className="text-rose-500 italic text-4xl md:text-5xl">A Journey Toward Healing & Hope</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We believe in the power of gentle guidance and emotional support. Join us in a chain of benevolence designed to nurture your self-growth and bring peace to your mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate(Page.CONTACT)}>
                Book a Session
              </Button>
              <Button variant="secondary" onClick={() => onNavigate(Page.SERVICES)}>
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-t-[15rem] rounded-b-[3rem] overflow-hidden shadow-2xl shadow-rose-200 border-4 border-white">
              <img 
                src="https://picsum.photos/seed/calm/800/1000" 
                alt="Peaceful state of mind" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Users size={20} />
                </div>
                <span className="font-serif text-gray-900 font-medium">Community of Care</span>
              </div>
              <p className="text-sm text-gray-500">Join hundreds of individuals finding their path to inner peace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Purpose */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-rose-900 mb-6">Spreading Kindness, One Heart at a Time</h2>
          <p className="text-lg text-gray-600 leading-loose">
            Silsila-e-Khair is more than just a platform; it is a movement of empathy. 
            We recognize that life can be overwhelming, and sometimes, all we need is a gentle hand to guide us back to ourselves.
            Our purpose is to provide resources, confidential listening, and a sanctuary where mental well-being is prioritized with dignity and grace.
          </p>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-rose-900 mb-4">How We Can Help</h2>
            <p className="text-gray-600">Gentle ways to support your journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={() => onNavigate(Page.SERVICES)}
                  className="flex items-center text-rose-500 font-medium hover:text-rose-600"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-rose-900 mb-4">Voices of Healing</h2>
            <p className="text-gray-600">Stories from our community.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-colors duration-300">
                <div className="absolute -top-4 -left-4 text-rose-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.082 15.435 13.661 17.794 11.569L19 10.268L19 9C19 7.895 18.105 7 17 7L15 7C13.895 7 13 7.895 13 9L11 9C11 6.791 12.791 5 15 5L17 5C19.209 5 21 6.791 21 9L21 12.335C21 13.869 20.303 15.279 19.298 16.226C18.463 17.012 17.592 17.684 16.702 18.229L16.015 18.647L16.015 21L14.017 21ZM5.01697 21L5.01697 18C5.01697 16.082 6.43497 13.661 8.79397 11.569L9.99997 10.268L9.99997 9C9.99997 7.895 9.10497 7 7.99997 7L5.99997 7C4.89497 7 3.99997 7.895 3.99997 9L1.99997 9C1.99997 6.791 3.79097 5 5.99997 5L7.99997 5C10.209 5 12 6.791 12 9L12 12.335C12 13.869 11.303 15.279 10.298 16.226C9.46297 17.012 8.59197 17.684 7.70197 18.229L7.01497 18.647L7.01497 21L5.01697 21Z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-serif font-semibold text-gray-900">{testimonial.name}</h4>
                    <span className="text-xs text-rose-500 uppercase tracking-wider">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};