"use client";

import React from 'react';

export default function RelativeClauses() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Relative Clauses
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to connect ideas using relative pronouns and create more sophisticated sentences.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lli</p>
            <span className="text-2xl">🔗</span>
          </div>
          <p className="text-gray-600">Who/That/Which</p>
          <p className="text-sm text-gray-500 mt-1">اللي</p>
          <p className="text-xs text-blue-600 mt-2">Ar-rajul lli sheft - The man that I saw</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lli fīh</p>
            <span className="text-2xl">📍</span>
          </div>
          <p className="text-gray-600">Where/In which</p>
          <p className="text-sm text-gray-500 mt-1">اللي فيه</p>
          <p className="text-xs text-blue-600 mt-2">Al-maḥall lli fīh - The place where</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lli ʿandū</p>
            <span className="text-2xl">🤝</span>
          </div>
          <p className="text-gray-600">Who has/Whose</p>
          <p className="text-sm text-gray-500 mt-1">اللي عندو</p>
          <p className="text-xs text-blue-600 mt-2">Ar-rajul lli ʿandū - The man who has</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lli kaydir</p>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-gray-600">Who does/is doing</p>
          <p className="text-sm text-gray-500 mt-1">اللي كيدير</p>
          <p className="text-xs text-blue-600 mt-2">Al-walad lli kaydir - The boy who is doing</p>
        </div>
      </div>
    </div>
  );
}