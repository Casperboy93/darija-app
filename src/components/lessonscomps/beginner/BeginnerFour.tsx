"use client";

import React from 'react';
import Link from 'next/link';

export default function BeginnerFour() {
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
      
      <h1 className="text-3xl font-bold mb-6">Beginner Lesson 4: Family and Relations</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn vocabulary related to family members and relationships in Darija, essential for talking about your family or understanding when Moroccans talk about theirs.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Immediate Family</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Bba</p>
            <p className="text-gray-600">Father</p>
            <p className="text-sm italic mt-2">Pronounced: bah</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Mma</p>
            <p className="text-gray-600">Mother</p>
            <p className="text-sm italic mt-2">Pronounced: mah</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Khay</p>
            <p className="text-gray-600">Brother</p>
            <p className="text-sm italic mt-2">Pronounced: kh-eye</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Khti</p>
            <p className="text-gray-600">Sister</p>
            <p className="text-sm italic mt-2">Pronounced: kh-tee</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Extended Family</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Jedd</p>
            <p className="text-gray-600">Grandfather</p>
            <p className="text-sm italic mt-2">Pronounced: jed</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Jedda</p>
            <p className="text-gray-600">Grandmother</p>
            <p className="text-sm italic mt-2">Pronounced: jed-da</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">3emm</p>
            <p className="text-gray-600">Uncle (paternal)</p>
            <p className="text-sm italic mt-2">Pronounced: am</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Khali</p>
            <p className="text-gray-600">Uncle (maternal)</p>
            <p className="text-sm italic mt-2">Pronounced: kha-lee</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">3emma</p>
            <p className="text-gray-600">Aunt (paternal)</p>
            <p className="text-sm italic mt-2">Pronounced: am-ma</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Khala</p>
            <p className="text-gray-600">Aunt (maternal)</p>
            <p className="text-sm italic mt-2">Pronounced: kha-la</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Useful Phrases</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">3endi... (I have...)</p>
          <p className="text-gray-600">Used to talk about family members you have</p>
          <p className="text-sm italic mt-2">Example: 3endi juj khut. (I have two brothers.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Shkun f l-3a'ila dyalek? (Who is in your family?)</p>
          <p className="text-gray-600">Asking about someone's family</p>
          <p className="text-sm italic mt-2">Pronounced: shkoon f la-ee-la dee-ya-lek</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">L-3a'ila dyali kbira/sghira. (My family is big/small.)</p>
          <p className="text-gray-600">Describing your family size</p>
          <p className="text-sm italic mt-2">Pronounced: la-ee-la dee-ya-lee k-bee-ra/s-ghee-ra</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Ahmed:</p>
            <p className="pl-4">Shkun f l-3a'ila dyalek? (Who is in your family?)</p>
          </div>
          <div>
            <p className="font-medium">Fatima:</p>
            <p className="pl-4">3endi bba, mma, juj khut u khti. (I have a father, mother, two brothers and a sister.)</p>
          </div>
          <div>
            <p className="font-medium">Ahmed:</p>
            <p className="pl-4">Fin sakna l-3a'ila dyalek? (Where does your family live?)</p>
          </div>
          <div>
            <p className="font-medium">Fatima:</p>
            <p className="pl-4">Saknin f Casablanca. U nta? (They live in Casablanca. And you?)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/beginner-three" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/beginner-five" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Food and Dining
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}