"use client";

import React from 'react';

export default function ComparingQuantities() {
  const moreQuantityExamples = [
    {
      expression: "ktar men",
      meaning: "more than",
      example: "3ndi ktar men 3ashra drahim",
      translation: "I have more than ten dirhams"
    },
    {
      expression: "qall men",
      meaning: "less than",
      example: "Kla qall men nuss",
      translation: "He ate less than half"
    },
    {
      expression: "bzaf men",
      meaning: "much more than",
      example: "Hada bzaf men l-lazim",
      translation: "This is much more than necessary"
    },
    {
      expression: "shwiya men",
      meaning: "a little more than",
      example: "Ghadi nakhud shwiya men wahd s-sa3a",
      translation: "It will take a little more than an hour"
    }
  ];

  const equalQuantityExamples = [
    {
      darija: "3ndna nafs l-3adad",
      english: "We have the same number",
      context: "Equal amounts"
    },
    {
      darija: "Kayshriw nafs l-kamiya",
      english: "They buy the same quantity",
      context: "Equal quantities"
    },
    {
      darija: "Khassna nafs l-waqt",
      english: "We need the same time",
      context: "Equal time"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11H3v2h4v2l3-3-3-3v2zM21 11h-4v2h4v2l3-3-3-3v2z" />
        </svg>
        Comparing Quantities
      </h2>
      
      <div className="space-y-6">
        {/* More/Less Quantities */}
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">More/Less Quantities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreQuantityExamples.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                    {item.expression}
                  </span>
                  <span className="text-gray-600 text-sm italic">({item.meaning})</span>
                </div>
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-gray-600 italic text-sm">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equal Quantities */}
        <div className="bg-white p-5 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold mb-4 text-green-600">Equal Quantities</h3>
          
          <div className="bg-green-50 p-3 rounded-md mb-4 border-l-4 border-green-400">
            <p className="text-green-800 font-medium">Pattern: nafs l-[quantity word]</p>
            <p className="text-gray-600 text-sm mt-1">Use "nafs" (same) with quantity words like 3adad (number), kamiya (quantity), waqt (time)</p>
          </div>
          
          <div className="space-y-3">
            {equalQuantityExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-800">{example.darija}</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {example.context}
                  </span>
                </div>
                <p className="text-gray-600 italic text-sm">{example.english}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-medium text-purple-800">Usage Tip:</p>
            <p className="text-gray-700">Quantity comparisons are very common in shopping, cooking, and daily conversations. Practice using these expressions when talking about amounts, prices, and measurements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}