"use client";

import React from 'react';

export default function BasicComparativeStructure() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Basic Comparative Structure
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-blue-100 mb-6">
        <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
          <p className="font-medium text-blue-800">Basic Pattern:</p>
          <p><span className="font-mono">Subject + adjective + men + object of comparison</span></p>
          <p className="mt-1 text-gray-600">The word "men" means "than" and connects the two things being compared</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-blue-800">Structure Example:</p>
            <p className="text-gray-700 mt-1">Dar dyali kbira men dar dyalek</p>
            <p className="text-gray-600 italic text-sm">(My house is bigger than your house)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium text-blue-800">Word Order:</p>
            <p className="text-gray-700 mt-1">Subject → Adjective → "men" → Comparison</p>
            <p className="text-gray-600 italic text-sm">(House mine) → (big) → (than) → (house yours)</p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium text-yellow-800">Pronunciation Tip:</p>
            <p className="text-gray-700">"Men" is pronounced like "min" in English, with a short 'e' sound. Don't confuse it with the English word "men".</p>
          </div>
        </div>
      </div>
    </div>
  );
}