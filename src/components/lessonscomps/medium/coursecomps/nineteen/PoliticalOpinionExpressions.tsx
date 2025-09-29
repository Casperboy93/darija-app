"use client";

import React from 'react';

export default function PoliticalOpinionExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Political Opinion Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">Phrases for expressing political opinions respectfully and diplomatically.</p>
      
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-3">Opinion Phrases</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Fī raʾyī...</span>
              <span className="text-gray-600">In my opinion... (في رأيي)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Aʿtaqid anna...</span>
              <span className="text-gray-600">I believe that... (أعتقد أن)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Min wijhat naẓarī...</span>
              <span className="text-gray-600">From my point of view... (من وجهة نظري)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-indigo-200 rounded-lg">
              <span className="font-medium text-gray-800">Lā aṭṭafiq maʿa...</span>
              <span className="text-gray-600">I disagree with... (لا أتفق مع)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}