import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 pb-16 min-h-screen bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-6">Let's Connect</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Whether you're looking to book a session, have a question, or just need someone to listen, we are here. Reach out to us, and take the first step towards your healing.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-rose-400 mt-1">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl text-gray-900">Email Us</h3>
                  <a href="mailto:silsilaekhair@gmail.com" className="text-gray-500 hover:text-rose-500 transition-colors">silsilaekhair@gmail.com</a>
                  <p className="text-gray-400 text-sm">We reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-rose-400 mt-1">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl text-gray-900">WhatsApp Support</h3>
                  <a href="https://wa.me/923308378949" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-500 transition-colors">+92 330 837 8949</a>
                  <p className="text-gray-400 text-sm">Mon-Sat, 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-rose-400 mt-1">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl text-gray-900">Location</h3>
                  <p className="text-gray-500">Online & Remote Services</p>
                  <p className="text-gray-400 text-sm">Accessible from anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[2rem] shadow-xl shadow-rose-100 p-8 md:p-12">
            <h2 className="font-serif text-2xl text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring focus:ring-rose-100 focus:ring-opacity-50 transition-colors bg-gray-50"
                  placeholder="Your gentle name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring focus:ring-rose-100 focus:ring-opacity-50 transition-colors bg-gray-50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring focus:ring-rose-100 focus:ring-opacity-50 transition-colors bg-gray-50"
                >
                  <option>General Inquiry</option>
                  <option>Book Emotional Support</option>
                  <option>Student Guidance</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring focus:ring-rose-100 focus:ring-opacity-50 transition-colors bg-gray-50"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full py-4 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};