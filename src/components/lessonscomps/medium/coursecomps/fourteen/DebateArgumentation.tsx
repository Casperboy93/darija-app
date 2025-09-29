"use client";

import React from 'react';

export default function DebateArgumentation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Debate and Argumentation
      </h2>
      
      <p className="text-gray-700 mb-6">Express opinions, present arguments, and engage in debates effectively.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Anā muqtaniʿ bi-anna</p>
            <span className="text-2xl">💭</span>
          </div>
          <p className="text-gray-600">I am convinced that</p>
          <p className="text-sm text-gray-500 mt-1">أنا مقتنع بأن</p>
          <p className="text-xs text-blue-600 mt-2">Strong opinion expression</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Min nāḥiya ukhrā</p>
            <span className="text-2xl">↔️</span>
          </div>
          <p className="text-gray-600">On the other hand</p>
          <p className="text-sm text-gray-500 mt-1">من ناحية أخرى</p>
          <p className="text-xs text-blue-600 mt-2">Present counterarguments</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lā yumkinunī an uwāfiq</p>
            <span className="text-2xl">❌</span>
          </div>
          <p className="text-gray-600">I cannot agree</p>
          <p className="text-sm text-gray-500 mt-1">لا يمكنني أن أوافق</p>
          <p className="text-xs text-blue-600 mt-2">Polite disagreement</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hādhā dalīl qawī</p>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-gray-600">This is strong evidence</p>
          <p className="text-sm text-gray-500 mt-1">هذا دليل قوي</p>
          <p className="text-xs text-blue-600 mt-2">Support your argument</p>
        </div>
      </div>
    </div>
  );
}