import React from 'react';
import { Heart, Shield, Sun, GraduationCap, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-24 pb-16">
      {/* Header */}
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Our Story</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Rooted in compassion, growing through kindness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl text-gray-900 mb-6">The Birth of Silsila-e-Khair</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Silsila-e-Khair began with a simple observation: that in our fast-paced world, genuine connection and empathetic listening are becoming rare commodities. We saw students struggling in silence, individuals carrying the weight of unexpressed emotions, and a general need for a sanctuary.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name, meaning "Chain of Goodness", reflects our core belief. When one person finds peace, they radiate it to others. We exist to start that chain reaction, providing a soft, supportive landing for anyone weathering a storm.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-[3rem] overflow-hidden shadow-xl shadow-rose-100">
              <img src="https://picsum.photos/seed/kindness/800/600" alt="Team meeting" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Therapist Profile Section */}
        <div className="mt-24 bg-white rounded-[3rem] border border-rose-100 shadow-xl shadow-rose-50 overflow-hidden">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-5 bg-rose-200 h-96 md:h-auto relative">
              <img 
                src="https://picsum.photos/seed/therapist/600/800" 
                alt="Syeda Esha Izhar" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent md:hidden"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white md:hidden">
                <h3 className="font-serif text-2xl font-semibold">Syeda Esha Izhar</h3>
                <p className="opacity-90">Lead Therapist</p>
              </div>
            </div>
            <div className="md:col-span-7 p-10 md:p-16 flex flex-col justify-center">
              <div className="hidden md:block mb-6">
                <h3 className="font-serif text-3xl text-rose-900 mb-2">Syeda Esha Izhar</h3>
                <p className="text-rose-500 font-medium uppercase tracking-wide">Clinical Psychologist & Therapist</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Dedicated to creating a safe space for healing, Syeda Esha Izhar brings professional expertise and profound empathy to Silsila-e-Khair. With a deep understanding of psychological principles and a compassionate approach, she guides individuals through their journey of self-discovery and mental well-being.
              </p>

              <div className="space-y-4">
                <h4 className="font-serif text-lg text-gray-900 border-b border-rose-100 pb-2 mb-4 inline-block">Education & Qualifications</h4>
                
                <div className="flex items-start">
                  <div className="bg-rose-50 p-2 rounded-lg text-rose-500 mr-4 mt-1">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">M.Phil in Psychology</p>
                    <p className="text-sm text-gray-500">Iqra University</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-rose-50 p-2 rounded-lg text-rose-500 mr-4 mt-1">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Masters in Psychology</p>
                    <p className="text-sm text-gray-500">University of Karachi (KU)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">The pillars that hold our sanctuary together.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">Empathy First</h3>
              <p className="text-gray-500">
                We listen not to respond, but to understand. Every emotion is valid, and every story deserves to be heard with a gentle heart.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">Confidentiality</h3>
              <p className="text-gray-500">
                Your privacy is sacred. We create a secure, non-judgmental space where you can be your authentic self without fear.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">Personal Growth</h3>
              <p className="text-gray-500">
                We believe in your capacity to heal and bloom. Our tools and guidance are designed to empower you on your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};