"use client";

import React from 'react';
import Link from 'next/link';

export default function IntermediateTwo() {
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
      
      <h1 className="text-3xl font-bold mb-6">Intermediate Lesson 2: Future Tense</h1>
      
      <div className="bg-indigo-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn how to express future actions and plans in Darija using the future tense markers.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Future Tense Formation</h2>
        <p className="mb-4">In Darija, the future tense is formed by adding the prefix "ghadi" (going to) or its shortened form "gha" before the verb in present tense.</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">Future Marker</th>
                <th className="py-2 px-4 border-b">Example (mshi - to go)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Ana (I)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi nmshi (I will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Nta (You - masc.)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshi (You will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Nti (You - fem.)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshy (You will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Huwa (He)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi ymshi (He will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Hiya (She)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshi (She will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Hna (We)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi nmshu (We will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Ntuma (You - plural)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshu (You all will go)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Huma (They)</td>
                <td className="py-2 px-4 border-b">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi ymshu (They will go)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Verbs in Future Tense</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kul (to eat)</p>
            <p className="text-gray-600">Ana ghadi nakul (I will eat)</p>
            <p className="text-gray-600">Huwa ghadi yakul (He will eat)</p>
            <p className="text-gray-600">Huma ghadi yaklu (They will eat)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shuf (to see)</p>
            <p className="text-gray-600">Ana ghadi nshuf (I will see)</p>
            <p className="text-gray-600">Hiya ghadi tshuf (She will see)</p>
            <p className="text-gray-600">Hna ghadi nshufu (We will see)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Qra (to read/study)</p>
            <p className="text-gray-600">Ana ghadi nqra (I will read/study)</p>
            <p className="text-gray-600">Nta ghadi tqra (You will read/study)</p>
            <p className="text-gray-600">Huma ghadi yqraw (They will read/study)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shreb (to drink)</p>
            <p className="text-gray-600">Ana ghadi nshreb (I will drink)</p>
            <p className="text-gray-600">Huwa ghadi yshreb (He will drink)</p>
            <p className="text-gray-600">Ntuma ghadi tsherbu (You all will drink)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Expressions for Future</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Ghedda (Tomorrow)</p>
          <p className="text-gray-600">Example: Ghedda ghadi nmshi l-suq. (Tomorrow I will go to the market.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">S-simana j-jaya (Next week)</p>
          <p className="text-gray-600">Example: S-simana j-jaya ghadi nsafru. (Next week we will travel.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">Men be3d (Later)</p>
          <p className="text-gray-600">Example: Men be3d ghadi nshufuk. (Later I will see you.)</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Hassan:</p>
            <p className="pl-4">Shnu ghadi tdir ghedda? (What will you do tomorrow?)</p>
          </div>
          <div>
            <p className="font-medium">Amina:</p>
            <p className="pl-4">Ghedda ghadi nmshi l-jami3a. U nta? (Tomorrow I will go to the university. And you?)</p>
          </div>
          <div>
            <p className="font-medium">Hassan:</p>
            <p className="pl-4">Ana ghadi nkhdm f-dar. Men be3d, ghadi nkhrej m3a s-shab. (I will work at home. Later, I will go out with friends.)</p>
          </div>
          <div>
            <p className="font-medium">Amina:</p>
            <p className="pl-4">Wesh ghadi tji m3ana l-cafe s-simana j-jaya? (Will you come with us to the café next week?)</p>
          </div>
          <div>
            <p className="font-medium">Hassan:</p>
            <p className="pl-4">Ih, ghadi nji inshallah. (Yes, I will come, God willing.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/intermediate-one" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/intermediate-three" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Conditional Forms
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}