"use client";

import React from 'react';

export default function CulturalConversation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Cultural Conversation
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-red-800 mb-4">Discussing Traditions</h3>
        <p className="text-gray-700 mb-4">Practice conversations about Moroccan cultural traditions and customs.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-red-400">
            <p className="font-semibold text-red-700">A: Āsh hiya l taqālīd dyālkum f l 3īd?</p>
            <p className="text-gray-600 italic">What are your traditions during Eid?</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Kanṭayybu l ḥalwā u nzūru l 3āʾila</p>
            <p className="text-gray-600 italic">We prepare sweets and visit family</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-red-400">
            <p className="font-semibold text-red-700">A: U f l 3urs, āsh katdīru?</p>
            <p className="text-gray-600 italic">And in weddings, what do you do?</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Kandīru ḥenna u kanraqṣu 3la l mūsīqā l maghribiyya</p>
            <p className="text-gray-600 italic">We do henna and dance to Moroccan music</p>
          </div>
        </div>
      </div>
    </div>
  );
}