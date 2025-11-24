import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, CheckCircle, Send, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!formState.email.includes('@')) {
        setError('Please enter a valid email address.');
        return;
    }

    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setError('');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="animate-fade-in pt-28 pb-16 min-h-screen bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center animate-slide-up">
            <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-6">Let's Connect</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Whether you're looking to book a session, have a question, or just need someone to listen, we are here. Reach out to us, and take the first step towards your healing.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-rose-400 mt-1 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 border border-rose-100">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl text-gray-900 group-hover:text-rose-600 transition-colors">Email Us</h3>
                  <a href="mailto:silsilaekhair@gmail.com" className="text-gray-500 hover:text-rose-500 transition-colors block mt-1" referrerPolicy="no-referrer">silsilaekhair@gmail.com</a>
                  <p className="text-gray-400 text-sm mt-1">We reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start group p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-rose-400 mt-1 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 border border-rose-100">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp Support</h3>
                  <a href="https://wa.me/923308378949" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500 transition-colors block mt-1" referrerPolicy="no-referrer">+92 330 837 8949</a>
                  <p className="text-gray-400 text-sm mt-1">Mon-Sat, 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start group p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-rose-400 mt-1 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 border border-rose-100">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl text-gray-900 group-hover:text-teal-600 transition-colors">Location</h3>
                  <p className="text-gray-500 mt-1">Online & Remote Services</p>
                  <p className="text-gray-400 text-sm mt-1">Accessible from anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            {/* Success Overlay / Replacement */}
            {isSubmitted ? (
              <div className="bg-white rounded-[2rem] shadow-soft p-12 text-center animate-fade-in border border-green-100 h-full flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-blob">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="font-serif text-3xl text-gray-900 mb-4">Message Sent Successfully!</h2>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formState.name}</strong>. We have received your message regarding <strong>{formState.service}</strong>. 
                  <br/><br/>
                  Our team will get back to you at <strong>{formState.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => {
                      setIsSubmitted(false);
                      setFormState({...formState, message: ''});
                  }}
                  className="bg-rose-50 text-rose-600 px-8 py-3 rounded-full font-medium hover:bg-rose-100 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-[2rem] shadow-soft p-8 md:p-12 border border-rose-50/50 hover:shadow-xl transition-shadow duration-300">
                <h2 className="font-serif text-2xl text-gray-900 mb-2">Send a Message</h2>
                <p className="text-gray-500 mb-8 text-sm">We are here to listen. Fill out the form below.</p>
                
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-center text-sm">
                        <AlertCircle size={18} className="mr-2" />
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:ring-opacity-50 transition-all duration-300 bg-gray-50/50 focus:bg-white outline-none"
                      placeholder="Your gentle name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:ring-opacity-50 transition-all duration-300 bg-gray-50/50 focus:bg-white outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Topic</label>
                    <div className="relative">
                        <select 
                        id="service" 
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:ring-opacity-50 transition-all duration-300 bg-gray-50/50 focus:bg-white appearance-none outline-none cursor-pointer"
                        >
                        <option>General Inquiry</option>
                        <option>Book Emotional Support</option>
                        <option>Student Guidance</option>
                        <option>Feedback</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 focus:ring-opacity-50 transition-all duration-300 bg-gray-50/50 focus:bg-white outline-none resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full py-4 text-lg flex justify-center items-center group shadow-md shadow-rose-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">Sending...</span>
                    ) : (
                      <span className="flex items-center">Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
