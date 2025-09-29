"use client";

import React from 'react';

export default function TimeExpressions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Time Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
          <p className="font-bold mb-2 text-blue-800">L-bareh (Yesterday)</p>
          <p className="text-sm text-gray-500 italic mb-2">Pronunciation: l-ba-reh</p>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-gray-700"><span className="font-medium">Example:</span> L-bareh mshit l-suq.</p>
            <p className="text-gray-600 italic">(Yesterday I went to the market.)</p>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
          <p className="font-bold mb-2 text-blue-800">S-simana lli fatet (Last week)</p>
          <p className="text-sm text-gray-500 italic mb-2">Pronunciation: s-see-ma-na lee fa-tet</p>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-gray-700"><span className="font-medium">Example:</span> S-simana lli fatet qrit bzzaf.</p>
            <p className="text-gray-600 italic">(Last week I studied a lot.)</p>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
          <p className="font-bold mb-2 text-blue-800">Qbel (Before/ago)</p>
          <p className="text-sm text-gray-500 italic mb-2">Pronunciation: q-bel</p>
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-gray-700"><span className="font-medium">Example:</span> Jit l-Maghrib 3am qbel.</p>
            <p className="text-gray-600 italic">(I came to Morocco a year ago.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-blue-50 p-4 rounded-md border border-blue-100">
        <p className="font-medium text-blue-800 mb-2">Cultural Note:</p>
        <p className="text-gray-700">In Moroccan culture, time expressions are often used more flexibly than in Western cultures. "Daba" (now) might mean "soon" or "in a little while," and specific times are often approximate.</p>
      </div>
    </div>
  );
}