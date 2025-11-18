import React from 'react';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: "5 Ways to Practice Self-Kindness Today",
      excerpt: "Self-love isn't just a buzzword; it's a survival mechanism. Here are simple ways to be gentler with yourself.",
      date: "Oct 12, 2023",
      category: "Wellness",
      imageUrl: "https://picsum.photos/seed/flower/600/400"
    },
    {
      id: '2',
      title: "Overcoming Exam Anxiety: A Student's Guide",
      excerpt: "Sweaty palms and racing heart? Learn breathing techniques that can calm your nervous system before a test.",
      date: "Oct 05, 2023",
      category: "Student Life",
      imageUrl: "https://picsum.photos/seed/book/600/400"
    },
    {
      id: '3',
      title: "The Art of Active Listening",
      excerpt: "How to be a better friend and partner by truly hearing what is being said, not just waiting to speak.",
      date: "Sep 28, 2023",
      category: "Relationships",
      imageUrl: "https://picsum.photos/seed/listen/600/400"
    },
    {
      id: '4',
      title: "Morning Routines for Mental Clarity",
      excerpt: "Start your day with intention. A look at how the first hour of your day impacts your mental state.",
      date: "Sep 15, 2023",
      category: "Lifestyle",
      imageUrl: "https://picsum.photos/seed/coffee/600/400"
    }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-16 bg-rose-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-rose-900 mb-4">Resources & Insights</h1>
          <p className="text-gray-600">Articles to support your journey toward a lighter mind.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-rose-500 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h2 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-rose-500 transition-colors">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <span className="text-rose-500 font-medium border-b-2 border-transparent group-hover:border-rose-200 transition-colors pb-1">Read Full Article</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 bg-rose-100 rounded-3xl p-10 md:p-16 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-rose-900 mb-4">Get Positivity Delivered</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Join our weekly newsletter for mindfulness tips, uplifting stories, and updates on our services.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 rounded-full border-2 border-rose-200 focus:outline-none focus:border-rose-400 bg-white"
            />
            <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-300/50">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};