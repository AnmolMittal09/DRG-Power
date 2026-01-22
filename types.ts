
// Import React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  imageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  capacity: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
