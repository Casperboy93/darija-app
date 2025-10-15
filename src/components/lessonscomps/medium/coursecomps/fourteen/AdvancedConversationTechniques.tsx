"use client";

import React from 'react';

export default function AdvancedConversationTechniques() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Advanced Conversation Techniques
      </h2>
      
      <p className="text-gray-700 mb-6">Sophisticated techniques for maintaining engaging conversations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Bi-'ibara ukhra</p>
            <span className="text-2xl">🔄</span>
          </div>
          <p className="text-gray-600">In other words</p>
          <p className="text-sm text-gray-500 mt-1">بعبارة أخرى</p>
          <p className="text-xs text-teal-600 mt-2">Rephrase for clarity</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hal fahimta maqsudi?</p>
            <span className="text-2xl">❓</span>
          </div>
          <p className="text-gray-600">Do you understand what I mean?</p>
          <p className="text-sm text-gray-500 mt-1">هل فهمت مقصودي؟</p>
          <p className="text-xs text-teal-600 mt-2">Check understanding</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Da'ni uwasil</p>
            <span className="text-2xl">➡️</span>
          </div>
          <p className="text-gray-600">Let me continue</p>
          <p className="text-sm text-gray-500 mt-1">دعني أواصل</p>
          <p className="text-xs text-teal-600 mt-2">Maintain speaking turn</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hadha yudhakkiruni bi</p>
            <span className="text-2xl">💡</span>
          </div>
          <p className="text-gray-600">This reminds me of</p>
          <p className="text-sm text-gray-500 mt-1">هذا يذكرني بـ</p>
          <p className="text-xs text-teal-600 mt-2">Make connections</p>
        </div>
      </div>
    </div>
  );
}