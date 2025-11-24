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
      icon: <Sparkles className="w-6 h-6 text-teal-500" />,
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
    <div className="animate-fade-in w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-teal-50 z-0" />
        <div className="absolute top-20 right-0 -mr-20 w-80 h-80 md:w-96 md:h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 md:w-96 md:h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center md:text-left">
            <div 
              className="opacity-0 animate-slide-up inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-rose-100 shadow-sm text-rose-600 text-sm font-semibold mb-8 tracking-wide hover:shadow-md transition-shadow cursor-default"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="flex h-2 w-2 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
              Welcome to your safe space
            </div>
            
            <h1 
              className="opacity-0 animate-slide-up font-serif text-5xl md:text-7xl text-gray-900 leading-[1.1] mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              Silsila-e-Khair <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-400 italic text-4xl md:text-6xl font-normal block mt-2">Healing & Hope</span>
            </h1>
            
            <p 
              className="opacity-0 animate-slide-up text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0"
              style={{ animationDelay: '0.3s' }}
            >
              We believe in the power of gentle guidance and emotional support. Join us in a chain of benevolence designed to nurture your self-growth.
            </p>
            
            <div 
              className="opacity-0 animate-slide-up flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              style={{ animationDelay: '0.4s' }}
            >
              <Button onClick={() => onNavigate(Page.CONTACT)} className="shadow-xl shadow-rose-200/50 py-4 px-8 text-lg w-full sm:w-auto">
                Book a Session
              </Button>
              <Button variant="secondary" onClick={() => onNavigate(Page.SERVICES)} className="py-4 px-8 text-lg bg-white/80 backdrop-blur-sm hover:bg-white w-full sm:w-auto">
                Explore Services
              </Button>
            </div>
            
            <div 
              className="opacity-0 animate-fade-in mt-12 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs overflow-hidden shadow-sm"><img src="https://picsum.photos/seed/u1/100" alt="User Avatar 1" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs overflow-hidden shadow-sm"><img src="https://picsum.photos/seed/u2/100" alt="User Avatar 2" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs overflow-hidden shadow-sm"><img src="https://picsum.photos/seed/u3/100" alt="User Avatar 3" /></div>
              </div>
              <p>Trusted by <span className="font-bold text-rose-500">200+</span> individuals</p>
            </div>
          </div>
          
          <div className="relative hidden md:block opacity-0 animate-fade-in group" style={{ animationDelay: '0.5s' }}>
            <div className="relative rounded-t-[15rem] rounded-b-[3rem] overflow-hidden shadow-2xl shadow-rose-200 border-8 border-white transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
              <img 
                src="https://picsum.photos/seed/calm/800/1000" 
                alt="A peaceful visual representation of mental clarity" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute top-1/2 -left-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-soft max-w-xs animate-bounce border border-rose-50" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2.5 rounded-full text-teal-600">
                  <Sparkles size={20} />
                </div>
                <div>
                    <span className="font-serif text-gray-900 font-bold block text-lg">Daily Peace</span>
                    <span className="text-xs text-gray-500">Mindfulness Goal Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Purpose */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-rose-300 mx-auto mb-6 opacity-80 animate-pulse" />
          <h2 className="font-serif text-3xl md:text-5xl text-rose-900 mb-8 leading-tight">Spreading Kindness,<br/>One Heart at a Time</h2>
          <p className="text-xl text-gray-600 leading-loose font-light">
            Silsila-e-Khair is more than just a platform; it is a movement of empathy. 
            We recognize that life can be overwhelming, and sometimes, all we need is a gentle hand to guide us back to ourselves.
            Our purpose is to provide resources, confidential listening, and a sanctuary where mental well-being is prioritized with dignity.
          </p>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-3 mb-4">Gentle ways to support your journey</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-rose-100/60 transition-all duration-300 group border border-transparent hover:border-rose-50 cursor-pointer transform hover:-translate-y-2" 
                onClick={() => onNavigate(Page.SERVICES)}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 shadow-inner ${idx === 2 ? 'bg-teal-50 group-hover:bg-teal-100' : 'bg-rose-50 group-hover:bg-rose-100'}`}>
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div 
                  className="flex items-center text-rose-500 font-bold group-hover:translate-x-2 transition-transform"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
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
            <p className="text-gray-600 text-lg">Stories from our community.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={testimonial.id} className={`relative p-10 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${idx === 1 ? 'bg-rose-50 hover:bg-rose-100' : 'bg-gray-50 hover:bg-gray-100'}`}>
                <div className="absolute -top-4 -left-4 text-rose-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.082 15.435 13.661 17.794 11.569L19 10.268L19 9C19 7.895 18.105 7 17 7L15 7C13.895 7 13 7.895 13 9L11 9C11 6.791 12.791 5 15 5L17 5C19.209 5 21 6.791 21 9L21 12.335C21 13.869 20.303 15.279 19.298 16.226C18.463 17.012 17.592 17.684 16.702 18.229L16.015 18.647L16.015 21L14.017 21ZM5.01697 21L5.01697 18C5.01697 16.082 6.43497 13.661 8.79397 11.569L9.99997 10.268L9.99997 9C9.99997 7.895 9.10497 7 7.99997 7L5.99997 7C4.89497 7 3.99997 7.895 3.99997 9L1.99997 9C1.99997 6.791 3.79097 5 5.99997 5L7.99997 5C10.209 5 12 6.791 12 9L12 12.335C12 13.869 11.303 15.279 10.298 16.226C9.46297 17.012 8.59197 17.684 7.70197 18.229L7.01497 18.647L7.01497 21L5.01697 21Z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-8 relative z-10 leading-loose text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-600 font-bold shadow-sm text-xl border border-rose-100">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-serif font-bold text-gray-900">{testimonial.name}</h4>
                    <span className="text-xs text-rose-500 uppercase tracking-wider font-semibold">{testimonial.role}</span>
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