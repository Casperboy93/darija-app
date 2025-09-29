"use client";

import React from 'react';

export default function CulturalTips() {
  const tips = [
    {
      title: "Bargaining and Comparisons",
      icon: "💰",
      content: "In Moroccan markets (souks), comparisons are essential for bargaining. Use phrases like 'ghali bzaf men l-3ada' (much more expensive than usual) or 'rkhis men l-mahal l-akhar' (cheaper than the other store) to negotiate prices.",
      example: "Hada ghali men lli shrit mbareh - This is more expensive than what I bought yesterday"
    },
    {
      title: "Family Comparisons",
      icon: "👨‍👩‍👧‍👦",
      content: "Moroccans often compare family members, but it's important to be tactful. Avoid direct negative comparisons, especially about appearance. Instead, focus on positive qualities or achievements.",
      example: "Waladi zwin bhal babah - My son is handsome like his father (positive comparison)"
    },
    {
      title: "Compliments and Superlatives",
      icon: "🌟",
      content: "Using superlatives is a common way to give compliments in Moroccan culture. Phrases like 'nti l-zwina f l-3alam' (you're the most beautiful in the world) are expressions of affection, not literal statements.",
      example: "Hada l-atay l-atyab f l-maghrib - This is the most delicious tea in Morocco"
    },
    {
      title: "Modesty in Self-Comparison",
      icon: "🤲",
      content: "Moroccans value modesty. When comparing yourself to others, it's polite to downplay your achievements or qualities. This shows humility and respect for others.",
      example: "Ana ma3ndi walou men l-3ilm dyalek - I don't have anything compared to your knowledge"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
        Cultural Tips
      </h2>
      
      <div className="space-y-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  {tip.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{tip.title}</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">{tip.content}</p>
                <div className="bg-purple-50 border border-purple-200 rounded-md p-3">
                  <p className="font-medium text-purple-800 mb-1">Example:</p>
                  <p className="text-gray-800 font-mono text-sm">{tip.example}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-5 mt-6">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <div>
            <p className="font-semibold text-purple-800 mb-2">Cultural Wisdom:</p>
            <p className="text-gray-700 leading-relaxed">
              In Moroccan culture, comparisons are not just about stating facts—they're about building relationships, showing respect, and maintaining social harmony. 
              Use comparisons to compliment others, express gratitude, and demonstrate your appreciation for Moroccan hospitality and culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}