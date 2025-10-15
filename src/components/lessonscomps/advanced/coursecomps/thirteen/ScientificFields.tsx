"use client";

import React from 'react';

export default function ScientificFields() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Scientific Fields and Disciplines
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different scientific and technical fields.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Physical Sciences</p>
            <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Sciences</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Fiziyaʾ:</span> Physics</p>
            <p className="text-sm"><span className="font-semibold">Kimiyaʾ:</span> Chemistry</p>
            <p className="text-sm"><span className="font-semibold">Riyadiyyat:</span> Mathematics</p>
            <p className="text-sm"><span className="font-semibold">Falak:</span> Astronomy</p>
            <p className="text-sm"><span className="font-semibold">Jiyulujiya:</span> Geology</p>
          </div>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Life Sciences</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Biology</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Ahyaʾ:</span> Biology</p>
            <p className="text-sm"><span className="font-semibold">Tibb:</span> Medicine</p>
            <p className="text-sm"><span className="font-semibold">Wiratha:</span> Genetics</p>
            <p className="text-sm"><span className="font-semibold">Biʾa:</span> Ecology</p>
            <p className="text-sm"><span className="font-semibold">Nafs:</span> Psychology</p>
          </div>
        </div>
      </div>
    </div>
  );
}