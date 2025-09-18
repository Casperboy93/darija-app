"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerTwo() {
  return (
    <LessonLayout 
      title="Numbers and Counting" 
      level="beginner" 
      lessonNumber={2}
      nextLesson="beginner-three"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">In this lesson, you'll learn how to count in Darija and use numbers in everyday situations like shopping, telling time, and expressing quantities.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master numbers 1-20 in Darija</li>
            <li>Learn how to use numbers in practical situations</li>
            <li>Understand counting patterns and number formation</li>
            <li>Practice asking about prices and quantities</li>
          </ul>
        </div>
      </div>
      
      {/* Numbers 1-10 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Numbers 1-10
        </h2>
        
        <p className="text-gray-700 mb-6">These are the fundamental numbers you'll use most often in daily conversations. Practice saying them out loud!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">1 - Wahed</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Masculine</span>
            </div>
            <p className="text-gray-600">One</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: wah-hed</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Wahed atay" (One tea)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">2 - Jouj</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Dual</span>
            </div>
            <p className="text-gray-600">Two</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: jooj</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Jouj d'qahwa" (Two coffees)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">3 - Tlata</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Three</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: tla-ta</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Tlata d'nas" (Three people)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">4 - Rb3a</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Four</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: r-ba-a</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Rb3a d'drahim" (Four dirhams)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">5 - Khamsa</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Five</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kham-sa</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Khamsa d'sa3at" (Five hours)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">6 - Stta</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Six</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: st-ta</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Stta d'kutub" (Six books)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">7 - Sb3a</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Seven</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sab-a</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Sb3a d'ayam" (Seven days)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">8 - Tmanya</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Eight</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: tman-ya</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Tmanya d'dqayeq" (Eight minutes)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">9 - Ts3od</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Nine</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ts-ood</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Ts3od d'shhor" (Nine months)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">10 - 3ashra</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Plural</span>
            </div>
            <p className="text-gray-600">Ten</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ash-ra</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "3ashra d'drahim" (Ten dirhams)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Numbers 11-20 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Numbers 11-20
        </h2>
        
        <p className="text-gray-700 mb-6">Numbers from 11-20 follow a pattern. Notice how they're formed by combining the base number with "tash" (ten).</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">11 - Hdash</p>
            <p className="text-gray-600 mb-1">Eleven</p>
            <p className="text-sm italic text-gray-500">Pronounced: h-dash</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">12 - Tnash</p>
            <p className="text-gray-600 mb-1">Twelve</p>
            <p className="text-sm italic text-gray-500">Pronounced: t-nash</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">13 - Tlatash</p>
            <p className="text-gray-600 mb-1">Thirteen</p>
            <p className="text-sm italic text-gray-500">Pronounced: tla-tash</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">20 - 3ashrin</p>
            <p className="text-gray-600 mb-1">Twenty</p>
            <p className="text-sm italic text-gray-500">Pronounced: ash-reen</p>
          </div>
        </div>
      </div>
      
      {/* Practical Usage */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practical Usage
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Common Phrases with Numbers:</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Bsh7al hada? (How much is this?)</p>
                <p className="text-gray-700">Khamsa d'drahim (Five dirhams)</p>
                <p className="text-gray-500 italic text-sm">Essential for shopping and bargaining</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Sh7al f'sa3a? (What time is it?)</p>
                <p className="text-gray-700">Tlata w nos (Three thirty)</p>
                <p className="text-gray-500 italic text-sm">Telling time using numbers</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-yellow-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">3ndi jouj d'khout (I have two brothers)</p>
                <p className="text-gray-700">Talking about family members</p>
                <p className="text-gray-500 italic text-sm">Using numbers to describe quantities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">In Moroccan markets, bargaining is expected - knowing numbers is essential!</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">The Moroccan currency is the dirham (MAD), often shortened to "dh" or "drahim" in Darija</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Numbers can change slightly depending on what you're counting (masculine/feminine nouns)</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}