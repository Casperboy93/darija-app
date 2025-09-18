"use client";

import React from 'react';
import Link from 'next/link';

export default function IntermediateThree() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/lessons" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Lessons
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Intermediate Lesson 3: Conditional Forms</h1>
      
      <div className="bg-indigo-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn how to express hypothetical situations and conditions in Darija using conditional forms.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Forming Conditionals</h2>
        <p className="mb-4">In Darija, conditionals are formed using "ila" (if) followed by a verb in the appropriate tense.</p>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-2">Real Conditions (Likely to happen)</h3>
          <p className="text-gray-600 mb-2">Structure: ila + verb (present tense) → result (future tense)</p>
          <p className="text-gray-600">Example: Ila jiti ghedda, ghadi nmshiw l-suq. (If you come tomorrow, we will go to the market.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Unreal Conditions (Hypothetical)</h3>
          <p className="text-gray-600 mb-2">Structure: kun + verb (past tense) → kun + verb (past tense)</p>
          <p className="text-gray-600">Example: Kun jiti l-bareh, kun mshina l-suq. (If you had come yesterday, we would have gone to the market.)</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Conditional Expressions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ila kan 3ndek wqt...</p>
            <p className="text-gray-600">If you have time...</p>
            <p className="text-sm italic mt-2">Example: Ila kan 3ndek wqt, ajini l-dar. (If you have time, come to my house.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ila bghiti...</p>
            <p className="text-gray-600">If you want...</p>
            <p className="text-sm italic mt-2">Example: Ila bghiti, n3awnk. (If you want, I'll help you.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kun kent f blastek...</p>
            <p className="text-gray-600">If I were in your place...</p>
            <p className="text-sm italic mt-2">Example: Kun kent f blastek, ma nmshish. (If I were in your place, I wouldn't go.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ila ma jash...</p>
            <p className="text-gray-600">If he doesn't come...</p>
            <p className="text-sm italic mt-2">Example: Ila ma jash, ghadi nbdaw bla bih. (If he doesn't come, we'll start without him.)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Wishes and Desires</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Kun ghir... (If only...)</p>
          <p className="text-gray-600">Used to express wishes</p>
          <p className="text-sm italic mt-2">Example: Kun ghir 3ndi flus bzzaf. (If only I had a lot of money.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">Ntemenna... (I wish...)</p>
          <p className="text-gray-600">Used to express desires</p>
          <p className="text-sm italic mt-2">Example: Ntemenna nji l-Maghrib merra khra. (I wish to come to Morocco again.)</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Yousef:</p>
            <p className="pl-4">Ila kan l-hal zwine ghedda, wesh ghadi tmshi m3aya l-bhar? (If the weather is nice tomorrow, will you go with me to the beach?)</p>
          </div>
          <div>
            <p className="font-medium">Nadia:</p>
            <p className="pl-4">Ih, ila ma kan 3ndi shghl, ghadi nji m3ak. (Yes, if I don't have work, I will come with you.)</p>
          </div>
          <div>
            <p className="font-medium">Yousef:</p>
            <p className="pl-4">Kun jiti m3ana l-bhar l-bareh, kun shefti l-hwayej zwinin. (If you had come with us to the beach yesterday, you would have seen beautiful things.)</p>
          </div>
          <div>
            <p className="font-medium">Nadia:</p>
            <p className="pl-4">Ntemenna nkun jit. Ila bghiti, nqder nji m3ak l-weekend j-jay. (I wish I had come. If you want, I can come with you next weekend.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/intermediate-two" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/intermediate-four" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Comparative Forms
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}