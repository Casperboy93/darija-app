"use client";

import React from 'react';

export default function CommonComparativeAdjectives() {
  const adjectives = [
    {
      masculine: "kbir",
      feminine: "kbira",
      meaning: "big/large",
      category: "Size",
      example: "Dar dyali kbira men dar dyalek",
      translation: "My house is bigger than your house"
    },
    {
      masculine: "sghir",
      feminine: "sghira",
      meaning: "small/little",
      category: "Size",
      example: "Tomobil dyali sghira men tomobil dyalek",
      translation: "My car is smaller than your car"
    },
    {
      masculine: "zwin",
      feminine: "zwina",
      meaning: "beautiful/handsome",
      category: "Quality",
      example: "Bent dyali zwina men bent dyalek",
      translation: "My daughter is more beautiful than your daughter"
    },
    {
      masculine: "qbih",
      feminine: "qbiha",
      meaning: "ugly",
      category: "Quality",
      example: "Hada l-libas qbih men hadak",
      translation: "This outfit is uglier than that one"
    },
    {
      masculine: "twil",
      feminine: "twila",
      meaning: "tall/long",
      category: "Length",
      example: "Ana twil men khuya",
      translation: "I am taller than my brother"
    },
    {
      masculine: "qsir",
      feminine: "qsira",
      meaning: "short",
      category: "Length",
      example: "Hadi t-tariqa qsira men l-ukhra",
      translation: "This road is shorter than the other one"
    },
    {
      masculine: "ghali",
      feminine: "ghalya",
      meaning: "expensive",
      category: "Price",
      example: "Hadi l-blasa ghalya men hadik",
      translation: "This place is more expensive than that one"
    },
    {
      masculine: "rkhis",
      feminine: "rkhisa",
      meaning: "cheap",
      category: "Price",
      example: "L-khodra f suq rkhisa men l-hanout",
      translation: "Vegetables in the market are cheaper than in the store"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Size': return 'bg-blue-100 text-blue-800';
      case 'Quality': return 'bg-green-100 text-green-800';
      case 'Length': return 'bg-purple-100 text-purple-800';
      case 'Price': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Common Comparative Adjectives
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {adjectives.map((adj, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-800">{adj.masculine}</span>
                <span className="text-gray-500">/</span>
                <span className="font-semibold text-gray-800">{adj.feminine}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(adj.category)}`}>
                {adj.category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-3 italic">({adj.meaning})</p>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-gray-800 font-medium">{adj.example}</p>
              <p className="text-gray-600 text-sm mt-1 italic">{adj.translation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}