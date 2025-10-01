"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Environmental Leadership!
      </h2>
      <p className="text-lg">You've mastered environmental science and sustainability vocabulary in Darija! Morocco is a leader in renewable energy with projects like Noor Ouarzazate Solar Complex and ambitious climate goals. This knowledge connects you to global environmental discussions and Morocco's green initiatives.</p>
      <div className="mt-4 p-4 bg-white  text-black bg-opacity-20 rounded-md">
        <p className="text-sm">🌞 Fun fact: Morocco's Noor Ouarzazate is one of the world's largest concentrated solar power complexes!</p>
      </div>
    </div>
  );
}