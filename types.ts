import React from 'react';

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT',
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details?: string; // Extended content for "Read More"
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Full article content
  date: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}