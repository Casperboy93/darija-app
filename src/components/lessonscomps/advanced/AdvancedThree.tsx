"use client";

import React from 'react';
import Link from 'next/link';

export default function AdvancedThree() {
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
      
      <h1 className="text-3xl font-bold mb-6">Advanced Lesson 3: Cultural Context</h1>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Understand how cultural context shapes Darija expressions and learn to navigate social situations with appropriate language and cultural awareness.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Social Etiquette in Language</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Greetings and Respect</h3>
            <p className="mb-2">• Always use "Salam" before any conversation</p>
            <p className="mb-2">• Address elders with "Si" (men) or "Lalla" (women)</p>
            <p>• Use "ntuma" (plural you) for respect, even when addressing one person</p>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Hospitality Language</h3>
            <p className="mb-2">• "Bismillah" - invitation to start eating</p>
            <p className="mb-2">• "B sahha" - wishing good health when someone eats/drinks</p>
            <p>• "Dar dyalkum" - "It's your house" (making guests feel welcome)</p>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
          <h3 className="font-bold text-lg mb-3">Religious Context</h3>
          <p className="mb-2">• "Inshallah" - "God willing" (for future events)</p>
          <p className="mb-2">• "Alhamdulillah" - "Praise be to God" (expressing gratitude)</p>
          <p className="mb-2">• "Mashallah" - Expression of joy without envy</p>
          <p>• "Bismillah" - "In the name of God" (starting an action)</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cultural Expressions</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Expression</th>
                <th className="py-2 px-4 border-b">Literal Translation</th>
                <th className="py-2 px-4 border-b">Cultural Meaning</th>
                <th className="py-2 px-4 border-b">When to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Llah y3tik sseha</td>
                <td className="py-2 px-4 border-b">May God give you health</td>
                <td className="py-2 px-4 border-b">Thank you</td>
                <td className="py-2 px-4 border-b">After someone helps you</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Barak llahu fik</td>
                <td className="py-2 px-4 border-b">May God bless you</td>
                <td className="py-2 px-4 border-b">Thank you</td>
                <td className="py-2 px-4 border-b">More formal thanks</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Tbark llah 3lik</td>
                <td className="py-2 px-4 border-b">God's blessing upon you</td>
                <td className="py-2 px-4 border-b">Compliment</td>
                <td className="py-2 px-4 border-b">Admiring someone's work</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Mashi mushkil</td>
                <td className="py-2 px-4 border-b">Not a problem</td>
                <td className="py-2 px-4 border-b">You're welcome</td>
                <td className="py-2 px-4 border-b">Response to thanks</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Llah ysehel</td>
                <td className="py-2 px-4 border-b">May God make it easy</td>
                <td className="py-2 px-4 border-b">Good luck</td>
                <td className="py-2 px-4 border-b">When someone faces a challenge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cultural Taboos in Language</h2>
        
        <div className="bg-red-50 p-5 rounded-lg">
          <h3 className="font-bold text-lg mb-3">Topics to Approach with Caution</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Avoid direct questions about someone's spouse (especially addressing women)</li>
            <li>Don't use left hand for giving/receiving (reflected in expressions like "3tini b yeminek" - give me with your right)</li>
            <li>Avoid excessive praise without saying "mashallah" (to avoid the evil eye)</li>
            <li>Religious criticism is highly sensitive (avoid expressions that could be perceived as disrespectful)</li>
            <li>Political discussions require careful language (use neutral terms like "l-hukuma" - the government)</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Visitor:</p>
            <p className="pl-4">Salam, wash mumkin ndkhul? (Hello, may I come in?)</p>
          </div>
          <div>
            <p className="font-medium">Host:</p>
            <p className="pl-4">Bismillah, tfeddel! Dar dyalkum. (Please come in! It's your house.)</p>
          </div>
          <div>
            <p className="font-medium">Visitor:</p>
            <p className="pl-4">Shukran bzzaf. Smeh liya 3la ta2khir. (Thank you very much. Sorry for being late.)</p>
          </div>
          <div>
            <p className="font-medium">Host:</p>
            <p className="pl-4">Mashi mushkil, lwaqt mazal. Wash tshreb atay? (No problem, there's still time. Would you like some tea?)</p>
          </div>
          <div>
            <p className="font-medium">Visitor:</p>
            <p className="pl-4">Inshallah, shukran. (Yes please, thank you.)</p>
          </div>
          <div>
            <p className="font-medium">Host:</p>
            <p className="pl-4">[After serving tea] Bismillah. (Please start/enjoy.)</p>
          </div>
          <div>
            <p className="font-medium">Visitor:</p>
            <p className="pl-4">[After drinking] Llah y3tik sseha. Atay bnin bzzaf. (Thank you. The tea is very delicious.)</p>
          </div>
          <div>
            <p className="font-medium">Host:</p>
            <p className="pl-4">B sahtek. (To your health.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/advanced-two" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/advanced-four" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Literary Arabic Influence
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}