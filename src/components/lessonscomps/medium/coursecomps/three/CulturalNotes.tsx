"use client";

import React from 'react';

export default function CulturalNotes() {
  return (
    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
      <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Cultural Notes
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-green-700 mb-2">Politeness in Hypothetical Situations</h3>
          <p className="text-gray-700 mb-2">
            Moroccans often use conditional sentences to be polite when making requests or suggestions. 
            Instead of direct commands, they prefer hypothetical phrasing.
          </p>
          <div className="bg-green-100 p-3 rounded-md">
            <p className="font-medium">Example:</p>
            <p>"Ila ma kan 3ndek mushkil..." (If you don't mind...)</p>
            <p className="text-gray-600 italic">This is much more polite than a direct request.</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-green-700 mb-2">Religious Context</h3>
          <p className="text-gray-700 mb-2">
            When discussing hypothetical future events, Moroccans often add "inshallah" (God willing) 
            to show respect for divine will and acknowledge that the future is uncertain.
          </p>
          <div className="bg-green-100 p-3 rounded-md">
            <p className="font-medium">Example:</p>
            <p>"Ila kan Allah rad, gha nkhdm f had l-mushru3" (If God wills, I will work on this project)</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-green-700 mb-2">Expressing Dreams and Aspirations</h3>
          <p className="text-gray-700 mb-2">
            Conditional sentences are commonly used to express dreams and aspirations in a humble way, 
            showing that the speaker understands these might not come true.
          </p>
          <div className="bg-green-100 p-3 rounded-md">
            <p className="font-medium">Common expressions:</p>
            <p>"Ila kan mumkin..." (If it were possible...)</p>
            <p>"Kun bghit..." (I would like...)</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-green-700 mb-2">Social Harmony</h3>
          <p className="text-gray-700">
            Using conditional sentences helps maintain social harmony by avoiding direct confrontation 
            or making others feel pressured. It's a way to express opinions without being too assertive.
          </p>
        </div>
      </div>
    </div>
  );
}