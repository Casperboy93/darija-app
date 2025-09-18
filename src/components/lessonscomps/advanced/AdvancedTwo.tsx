"use client";

import React from 'react';
import Link from 'next/link';

export default function AdvancedTwo() {
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
      
      <h1 className="text-3xl font-bold mb-6">Advanced Lesson 2: Dialectal Variations</h1>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Explore the regional variations of Darija across different parts of Morocco and understand how pronunciation, vocabulary, and expressions can differ.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Major Regional Dialects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Northern Dialect (Tetouan, Tangier)</p>
            <p className="text-gray-600">Heavily influenced by Spanish</p>
            <p className="text-sm italic mt-2">Example: "Feen" (where) is often pronounced as "fayn"</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Central Dialect (Casablanca, Rabat)</p>
            <p className="text-gray-600">Considered the standard Darija</p>
            <p className="text-sm italic mt-2">Example: "Daba" (now) is the common form</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Eastern Dialect (Oujda)</p>
            <p className="text-gray-600">Influenced by Algerian Arabic</p>
            <p className="text-sm italic mt-2">Example: "Khobz" (bread) might be pronounced as "khubz"</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Southern Dialect (Marrakech, Agadir)</p>
            <p className="text-gray-600">Influenced by Amazigh languages</p>
            <p className="text-sm italic mt-2">Example: "Ana" (I) might be pronounced as "nk" or "nekki"</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vocabulary Variations</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">English</th>
                <th className="py-2 px-4 border-b">Central (Casablanca)</th>
                <th className="py-2 px-4 border-b">Northern (Tangier)</th>
                <th className="py-2 px-4 border-b">Southern (Marrakech)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Now</td>
                <td className="py-2 px-4 border-b">Daba</td>
                <td className="py-2 px-4 border-b">Druk</td>
                <td className="py-2 px-4 border-b">Daba</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Come</td>
                <td className="py-2 px-4 border-b">Aji</td>
                <td className="py-2 px-4 border-b">Arwah</td>
                <td className="py-2 px-4 border-b">Aska</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Look</td>
                <td className="py-2 px-4 border-b">Shuf</td>
                <td className="py-2 px-4 border-b">Shouf</td>
                <td className="py-2 px-4 border-b">Zer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">What</td>
                <td className="py-2 px-4 border-b">Shnu/Ash</td>
                <td className="py-2 px-4 border-b">Shnu</td>
                <td className="py-2 px-4 border-b">Ma/Ash</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">How much</td>
                <td className="py-2 px-4 border-b">Shhal</td>
                <td className="py-2 px-4 border-b">Qddash</td>
                <td className="py-2 px-4 border-b">Mnain</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pronunciation Differences</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-2">Qaf (ق) Pronunciation</h3>
          <p className="text-gray-600 mb-2">• Northern: Often pronounced as "q" (like in Classical Arabic)</p>
          <p className="text-gray-600 mb-2">• Central: Often pronounced as "g" (similar to Egyptian)</p>
          <p className="text-gray-600">• Southern: Often pronounced as "q" or sometimes as a glottal stop</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Vowel Shifts</h3>
          <p className="text-gray-600 mb-2">• Northern: Tendency to use more "i" sounds</p>
          <p className="text-gray-600 mb-2">• Central: Balanced vowel usage</p>
          <p className="text-gray-600">• Southern: More open vowels, influenced by Amazigh phonology</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Tourist:</p>
            <p className="pl-4">Kifash kan3ref mnin jay shi had? (How do I know where someone is from?)</p>
          </div>
          <div>
            <p className="font-medium">Guide:</p>
            <p className="pl-4">Ghadi t3ref men l-lahja dyalu. Ila gal lik "druk" beddel "daba", rahu men sh-shamal. (You'll know from their accent. If they say "druk" instead of "daba", they're from the north.)</p>
          </div>
          <div>
            <p className="font-medium">Tourist:</p>
            <p className="pl-4">U ila kan men Marrakech? (And if they're from Marrakech?)</p>
          </div>
          <div>
            <p className="font-medium">Guide:</p>
            <p className="pl-4">Ghadi tsme3 bzzaf d l-klimat men l-Amazighiya, u ghadi ygul lik "zer" beddel "shuf". (You'll hear many words from Amazigh, and they'll say "zer" instead of "shuf".)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/advanced-one" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/advanced-three" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Cultural Context
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}