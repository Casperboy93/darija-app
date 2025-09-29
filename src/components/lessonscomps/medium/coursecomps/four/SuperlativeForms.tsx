"use client";

import React from 'react';

export default function SuperlativeForms() {
  const examples = [
    {
      darija: "Huwa l-kbir f l-3a'ila",
      english: "He is the biggest/oldest in the family",
      structure: "l- + kbir + f + l-3a'ila"
    },
    {
      darija: "Hiya l-zwina f l-qism",
      english: "She is the most beautiful in the class",
      structure: "l- + zwina + f + l-qism"
    },
    {
      darija: "Hada l-ghali f s-suq",
      english: "This is the most expensive in the market",
      structure: "l- + ghali + f + s-suq"
    },
    {
      darija: "Ana l-twil f l-fariq",
      english: "I am the tallest in the team",
      structure: "l- + twil + f + l-fariq"
    },
    {
      darija: "Hadi l-sghira f d-dar",
      english: "This is the smallest in the house",
      structure: "l- + sghira + f + d-dar"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
        </svg>
        Superlative Forms
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-blue-100 mb-6">
        <div className="bg-green-50 p-4 rounded-md mb-4 border-l-4 border-green-400">
          <p className="font-medium text-green-800">Superlative Pattern:</p>
          <p><span className="font-mono">l- + adjective + f + group/context</span></p>
          <p className="mt-1 text-gray-600">Use "l-" (the) before the adjective and "f" (in) to show the context or group</p>
        </div>
        
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">{example.darija}</p>
                  <p className="text-gray-600 italic text-sm">{example.english}</p>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">
                    {example.structure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-medium text-blue-800">Remember:</p>
            <p className="text-gray-700">The adjective must agree in gender with the subject. Use masculine forms for masculine subjects and feminine forms for feminine subjects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}