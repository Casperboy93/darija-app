"use client";

import React from 'react';

export default function PracticeConversation() {
  const conversation = [
    {
      speaker: "Ahmed",
      text: "Shnu ra'yek f hadi l-shaqqa f Agdal?",
      translation: "What do you think of this apartment in Agdal?",
      type: "question"
    },
    {
      speaker: "Fatima",
      text: "Zwina, walakin sghira men lli kunt kanqallib 3liha",
      translation: "It's nice, but smaller than what I was looking for",
      type: "response"
    },
    {
      speaker: "Ahmed", 
      text: "Wa hadi f Rabat? Kbira men hadik",
      translation: "What about this one in Rabat? It's bigger than that one",
      type: "suggestion"
    },
    {
      speaker: "Fatima",
      text: "Ayeh, walakin ghali men l-budget dyali",
      translation: "Yes, but more expensive than my budget",
      type: "concern"
    },
    {
      speaker: "Ahmed",
      text: "Hmmm... Hadi l-afdal. Nafs s-si3r walakin kbira",
      translation: "Hmmm... This one is the best. Same price but bigger",
      type: "solution"
    },
    {
      speaker: "Fatima",
      text: "Perfect! Hadi l-ahsan wahda shufna",
      translation: "Perfect! This is the best one we've seen",
      type: "agreement"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'question': return 'bg-blue-50 border-blue-200';
      case 'response': return 'bg-green-50 border-green-200';
      case 'suggestion': return 'bg-yellow-50 border-yellow-200';
      case 'concern': return 'bg-red-50 border-red-200';
      case 'solution': return 'bg-purple-50 border-purple-200';
      case 'agreement': return 'bg-emerald-50 border-emerald-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Practice Conversation: Apartment Hunting
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-blue-100">
        <p className="text-gray-600 mb-4 italic">Ahmed and Fatima are looking for an apartment and comparing different options.</p>
        
        <div className="space-y-4">
          {conversation.map((line, index) => (
            <div key={index} className={`p-4 rounded-lg border ${getTypeColor(line.type)}`}>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {line.speaker[0]}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-800">{line.speaker}:</span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded capitalize">
                      {line.type}
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium mb-1">{line.text}</p>
                  <p className="text-gray-600 italic text-sm">{line.translation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <h3 className="font-semibold text-blue-800 mb-2">Key Comparative Structures Used:</h3>
        <ul className="space-y-1 text-gray-700">
          <li><span className="font-mono bg-white px-2 py-1 rounded">sghira men</span> - smaller than</li>
          <li><span className="font-mono bg-white px-2 py-1 rounded">kbira men</span> - bigger than</li>
          <li><span className="font-mono bg-white px-2 py-1 rounded">ghali men</span> - more expensive than</li>
          <li><span className="font-mono bg-white px-2 py-1 rounded">l-afdal</span> - the best</li>
          <li><span className="font-mono bg-white px-2 py-1 rounded">nafs s-si3r</span> - same price</li>
          <li><span className="font-mono bg-white px-2 py-1 rounded">l-ahsan</span> - the best</li>
        </ul>
      </div>
    </div>
  );
}