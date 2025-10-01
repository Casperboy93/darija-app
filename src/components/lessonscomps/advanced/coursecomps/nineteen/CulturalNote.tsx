"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Cultural Note: Morocco's Tech Innovation
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Digital Morocco 2025</h3>
          <p className="text-sm leading-relaxed">
            Morocco's national digital strategy aims to transform the country into a regional digital hub, 
            focusing on artificial intelligence, cybersecurity, and digital innovation.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">Tech Ecosystem</h3>
          <p className="text-sm leading-relaxed">
            Cities like Casablanca and Rabat are emerging as technology centers, with growing startup 
            ecosystems and international tech companies establishing operations in Morocco.
          </p>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
        <p className="text-sm leading-relaxed">
          <span className="font-semibold">Global Context:</span> The vocabulary you've learned connects you to 
          international discussions about artificial intelligence, cybersecurity, and emerging technologies 
          that are shaping our digital future.
        </p>
      </div>
    </div>
  );
}