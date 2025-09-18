"use client";

import React from 'react';
import Link from 'next/link';

export default function IntermediateOne() {
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
      
      <h1 className="text-3xl font-bold mb-6">Intermediate Lesson 1: Past Tense</h1>
      
      <div className="bg-indigo-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn how to form and use the past tense in Darija to talk about completed actions and events.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Past Tense Formation</h2>
        <p className="mb-4">In Darija, the past tense is formed by adding specific endings to the verb stem. The endings change based on the subject pronoun.</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">Ending</th>
                <th className="py-2 px-4 border-b">Example (kla - to eat)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Ana (I)</td>
                <td className="py-2 px-4 border-b">-it</td>
                <td className="py-2 px-4 border-b">klit (I ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Nta (You - masc.)</td>
                <td className="py-2 px-4 border-b">-iti</td>
                <td className="py-2 px-4 border-b">kliti (You ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Nti (You - fem.)</td>
                <td className="py-2 px-4 border-b">-iti</td>
                <td className="py-2 px-4 border-b">kliti (You ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Huwa (He)</td>
                <td className="py-2 px-4 border-b">-a</td>
                <td className="py-2 px-4 border-b">kla (He ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Hiya (She)</td>
                <td className="py-2 px-4 border-b">-at</td>
                <td className="py-2 px-4 border-b">klat (She ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Hna (We)</td>
                <td className="py-2 px-4 border-b">-ina</td>
                <td className="py-2 px-4 border-b">klina (We ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Ntuma (You - plural)</td>
                <td className="py-2 px-4 border-b">-itu</td>
                <td className="py-2 px-4 border-b">klitu (You all ate)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Huma (They)</td>
                <td className="py-2 px-4 border-b">-aw</td>
                <td className="py-2 px-4 border-b">klaw (They ate)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Verbs in Past Tense</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Msha (to go)</p>
            <p className="text-gray-600">Ana mshit (I went)</p>
            <p className="text-gray-600">Huwa msha (He went)</p>
            <p className="text-gray-600">Huma mshaw (They went)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shaf (to see)</p>
            <p className="text-gray-600">Ana sheft (I saw)</p>
            <p className="text-gray-600">Hiya shafet (She saw)</p>
            <p className="text-gray-600">Hna shefna (We saw)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Qra (to read/study)</p>
            <p className="text-gray-600">Ana qrit (I read/studied)</p>
            <p className="text-gray-600">Nta qriti (You read/studied)</p>
            <p className="text-gray-600">Huma qraw (They read/studied)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shreb (to drink)</p>
            <p className="text-gray-600">Ana shrebt (I drank)</p>
            <p className="text-gray-600">Huwa shreb (He drank)</p>
            <p className="text-gray-600">Ntuma shrebtu (You all drank)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Time Expressions</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">L-bareh (Yesterday)</p>
          <p className="text-gray-600">Example: L-bareh mshit l-suq. (Yesterday I went to the market.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">S-simana lli fatet (Last week)</p>
          <p className="text-gray-600">Example: S-simana lli fatet qrit bzzaf. (Last week I studied a lot.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">Qbel (Before/ago)</p>
          <p className="text-gray-600">Example: Jit l-Maghrib 3am qbel. (I came to Morocco a year ago.)</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Karim:</p>
            <p className="pl-4">Fin mshiti l-bareh? (Where did you go yesterday?)</p>
          </div>
          <div>
            <p className="font-medium">Layla:</p>
            <p className="pl-4">Mshit l-medina. Shrit bzzaf d l-hwayej. (I went to the medina. I bought a lot of things.)</p>
          </div>
          <div>
            <p className="font-medium">Karim:</p>
            <p className="pl-4">Shnu shufti temma? (What did you see there?)</p>
          </div>
          <div>
            <p className="font-medium">Layla:</p>
            <p className="pl-4">Sheft bzzaf d nas u bzzaf d l-hwayej zwinin. (I saw many people and many beautiful things.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Lessons
        </Link>
        <Link href="/lessons/intermediate-two" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Future Tense
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}