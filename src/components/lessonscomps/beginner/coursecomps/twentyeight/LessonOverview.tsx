"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200 mb-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Technology and Modern Life</h2>
      <p className="text-green-700 mb-4">
        Welcome to Lesson 28! In this lesson, you'll learn essential vocabulary and phrases related to technology and modern life in Morocco. 
        From smartphones to social media, discover how to navigate the digital world in Darija.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-green-800 mb-2">Learning Objectives:</h3>
          <ul className="text-green-700 space-y-1 text-sm">
            <li>• Master technology vocabulary in Darija</li>
            <li>• Learn social media and internet terms</li>
            <li>• Understand online shopping expressions</li>
            <li>• Practice digital communication phrases</li>
            <li>• Explore modern technology trends</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-green-800 mb-2">Key Topics:</h3>
          <ul className="text-green-700 space-y-1 text-sm">
            <li>• Devices and gadgets</li>
            <li>• Internet and connectivity</li>
            <li>• Social media platforms</li>
            <li>• Online shopping and e-commerce</li>
            <li>• Digital communication methods</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Cultural Context:</h3>
        <p className="text-green-700 text-sm">
          Morocco has embraced digital technology rapidly, with widespread smartphone usage and growing e-commerce. 
          Understanding tech vocabulary helps you connect with younger generations and navigate modern Moroccan society.
        </p>
      </div>
    </div>
  );
}