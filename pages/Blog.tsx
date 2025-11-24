import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Modal } from '../components/Modal';
import { Clock, Tag } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: '1',
      title: "5 Ways to Practice Self-Kindness Today",
      excerpt: "Self-love isn't just a buzzword; it's a survival mechanism. Here are simple ways to be gentler with yourself.",
      content: `In a world that constantly demands more from us, being kind to ourselves can feel like a radical act. But self-kindness is the foundation of mental well-being. Here are 5 actionable ways to practice it today:

      1. Change Your Internal Monologue: Notice when you are being critical. Would you say those things to a friend? If not, don't say them to yourself. Replace "I'm so stupid for making that mistake" with "I'm human and I'm learning."

      2. Prioritize Rest: Productivity culture tells us rest is a reward. It isn't. It's a biological necessity. Take a 15-minute break without your phone. Just breathe.

      3. Set Boundaries: Saying "no" to others is often saying "yes" to your own peace. It is okay to decline invitations or requests that drain you.

      4. Celebrate Small Wins: Did you get out of bed today? Did you drink water? These are victories. Acknowledge them.

      5. Physical Touch: Place your hand on your heart and take a deep breath. This physical gesture releases oxytocin and signals safety to your nervous system.`,
      date: "Oct 12, 2023",
      category: "Wellness",
      imageUrl: "https://picsum.photos/seed/flower/600/400"
    },
    {
      id: '2',
      title: "Overcoming Exam Anxiety: A Student's Guide",
      excerpt: "Sweaty palms and racing heart? Learn breathing techniques that can calm your nervous system before a test.",
      content: `Exam anxiety is a physiological response to stress, but it doesn't have to control your performance.

      Understanding the Cycle:
      Anxiety triggers the "fight or flight" response, which shuts down the prefrontal cortex—the part of the brain you need for critical thinking. To ace the test, you first need to calm the body.

      Technique 1: Box Breathing
      Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat this 3 times before flipping the exam paper.

      Technique 2: The Grounding Exercise (5-4-3-2-1)
      Acknowledge 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. This brings you back to the present moment.

      Preparation Tip:
      Study in chunks (Pomodoro technique) rather than cramming. Your brain retains information better when it has time to consolidate memories during breaks.`,
      date: "Oct 05, 2023",
      category: "Student Life",
      imageUrl: "https://picsum.photos/seed/book/600/400"
    },
    {
      id: '3',
      title: "The Art of Active Listening",
      excerpt: "How to be a better friend and partner by truly hearing what is being said, not just waiting to speak.",
      content: `We often listen with the intent to reply, not to understand. Active listening is a gift you give to others that says, "I see you, and you matter."

      Key Components of Active Listening:
      
      1. Eye Contact: Put the phone away. Give the speaker your full visual attention.
      
      2. Non-Verbal Cues: Nodding, leaning in, and open body language encourage the speaker to continue.
      
      3. Reflection: Paraphrase what they said. "It sounds like you're feeling really overwhelmed by work right now." This confirms understanding.
      
      4. Validation: You don't have to agree to validate. "I can see why that would be upsetting" is a powerful phrase.
      
      5. Curiosity over Judgment: Ask open-ended questions like "How did that make you feel?" instead of "Why did you do that?"`,
      date: "Sep 28, 2023",
      category: "Relationships",
      imageUrl: "https://picsum.photos/seed/listen/600/400"
    },
    {
      id: '4',
      title: "Morning Routines for Mental Clarity",
      excerpt: "Start your day with intention. A look at how the first hour of your day impacts your mental state.",
      content: `The way you spend the first hour of your day sets the thermostat for the rest of it. If you start with chaos, you invite chaos.

      The "Anti-Anxiety" Morning Routine:
      
      1. No Phone First: Do not check notifications for at least 20 minutes. Keep the world out until you have established your own peace.
      
      2. Hydrate: Drink a glass of water before coffee.
      
      3. Movement: Gentle stretching or a short walk to wake up the body.
      
      4. Intention Setting: Ask yourself, "How do I want to feel today?" (e.g., Calm, Focused, Kind).
      
      5. Sunlight: Get natural light in your eyes to regulate your circadian rhythm and mood.`,
      date: "Sep 15, 2023",
      category: "Lifestyle",
      imageUrl: "https://picsum.photos/seed/coffee/600/400"
    }
  ];

  return (
    <div className="animate-fade-in pt-24 pb-16 bg-rose-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Knowledge Hub</span>
          <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Resources & Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Curated articles, tips, and guides to support your journey toward a lighter mind and a happier heart.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-2xl hover:shadow-rose-100/40 transition-all duration-300 group cursor-pointer border border-transparent hover:border-rose-100 flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-rose-500 uppercase tracking-wide flex items-center shadow-sm">
                  <Tag size={12} className="mr-1.5" />
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-400 mb-4 font-medium">
                  <span>{post.date}</span>
                  <span className="mx-2 text-rose-300">•</span>
                  <span className="flex items-center"><Clock size={14} className="mr-1" /> 5 min read</span>
                </div>
                <h2 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-rose-600 transition-colors leading-tight">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-rose-500 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">Read Full Article &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 bg-gradient-to-br from-rose-100 to-rose-50 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-lg shadow-rose-50/50">
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>
           
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl text-rose-900 mb-4">Get Positivity Delivered</h3>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg">Join our community newsletter for weekly mindfulness tips, uplifting stories, and gentle reminders to breathe.</p>
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full border border-white/50 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white/80 backdrop-blur-sm shadow-sm placeholder-gray-400 text-gray-700"
              />
              <button className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-600 transition-all shadow-lg shadow-rose-300/50 hover:shadow-rose-400/50 transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-rose-800/60 mt-4">We respect your inbox. No spam, ever.</p>
          </div>
        </div>
      </div>

      {/* Modal Integration */}
      {selectedPost && (
        <Modal 
          isOpen={!!selectedPost} 
          onClose={() => setSelectedPost(null)} 
          title={selectedPost.title}
        >
          <div className="mb-4 text-sm text-gray-500 font-medium flex items-center gap-4">
             <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full">{selectedPost.category}</span>
             <span>{selectedPost.date}</span>
          </div>
          <div className="whitespace-pre-line text-lg leading-loose text-gray-700">
            {selectedPost.content}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100">
             <p className="italic text-gray-500 text-sm">Written by Silsila-e-Khair Editorial Team</p>
          </div>
        </Modal>
      )}
    </div>
  );
};