"use client";

import React from 'react';

export default function ComplexSentencePatterns() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Complex Sentence Patterns
      </h2>
      
      <p className="text-gray-700 mb-6">Master sophisticated sentence structures for advanced communication.</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Conditional with Past Result</h3>
          <p className="text-gray-700 mb-2">Lū kān jā bākir, kān lqā al-maḥall maftūḥ</p>
          <p className="text-sm text-gray-600">If he had come early, he would have found the place open</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Purpose Clauses</h3>
          <p className="text-gray-700 mb-2">Jīt hna bāsh nshūf al-ṭabīb</p>
          <p className="text-sm text-gray-600">I came here in order to see the doctor</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Concessive Clauses</h3>
          <p className="text-gray-700 mb-2">Wālū kān al-jaww bārid, kharjū</p>
          <p className="text-sm text-gray-600">Even though the weather was cold, they went out</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Result Clauses</h3>
          <p className="text-gray-700 mb-2">Kān marīḍ ḥattā ma qdarsh yajī</p>
          <p className="text-sm text-gray-600">He was so sick that he couldn't come</p>
        </div>
      </div>
    </div>
  );
}