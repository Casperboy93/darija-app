"use client";

import React from 'react';

export default function CommonMistakes() {
  const mistakes = [
    {
      title: "Gender Agreement Issues",
      wrong: "Hiya kbir men ukhtaha",
      correct: "Hiya kbira men ukhtaha",
      explanation: "Adjectives must agree with the gender of the subject. 'Hiya' (she) requires the feminine form 'kbira', not 'kbir'.",
      tip: "Always check if your subject is masculine or feminine and adjust the adjective accordingly."
    },
    {
      title: "Incorrect Word Order",
      wrong: "Men dar dyali kbira dar dyalek",
      correct: "Dar dyali kbira men dar dyalek",
      explanation: "The comparison word 'men' (than) should come after the adjective, not at the beginning of the sentence.",
      tip: "Remember the pattern: Subject + Adjective + men + Comparison object."
    },
    {
      title: "Mixing Comparative and Superlative",
      wrong: "Huwa l-kbir men akhuh",
      correct: "Huwa kbir men akhuh OR Huwa l-kbir f l-3a'ila",
      explanation: "Don't mix comparative (men) with superlative (l-). Use either comparative structure or superlative structure, not both.",
      tip: "Comparative uses 'men' for 'than'. Superlative uses 'l-' and 'f' for 'the most... in'."
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-red-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        Common Mistakes to Avoid
      </h2>
      
      <div className="space-y-6">
        {mistakes.map((mistake, index) => (
          <div key={index} className="bg-white border border-red-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2 text-sm">
                {index + 1}
              </span>
              {mistake.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-medium text-red-800">Wrong:</span>
                </div>
                <p className="text-gray-800 font-mono">{mistake.wrong}</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-md p-3">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-green-800">Correct:</span>
                </div>
                <p className="text-gray-800 font-mono">{mistake.correct}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md mb-3">
              <p className="text-gray-700">{mistake.explanation}</p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <span className="font-medium text-blue-800">Tip: </span>
                  <span className="text-gray-700">{mistake.tip}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium text-yellow-800">Practice Tip:</p>
            <p className="text-gray-700">Start with simple comparisons using familiar adjectives like kbir/kbira (big) and sghir/sghira (small). Once you master the basic pattern, gradually add more complex adjectives and contexts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}