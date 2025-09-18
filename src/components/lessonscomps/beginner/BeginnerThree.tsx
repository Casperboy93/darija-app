"use client";

import React from 'react';
import Link from 'next/link';

export default function BeginnerThree() {
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
      
      <h1 className="text-3xl font-bold mb-6">Beginner Lesson 3: Basic Phrases</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn essential everyday phrases in Darija that will help you communicate in common situations.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Essential Phrases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shukran</p>
            <p className="text-gray-600">Thank you</p>
            <p className="text-sm italic mt-2">Pronounced: shook-ran</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Afak</p>
            <p className="text-gray-600">Please</p>
            <p className="text-sm italic mt-2">Pronounced: ah-fak</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Smeh liya</p>
            <p className="text-gray-600">Excuse me / I'm sorry</p>
            <p className="text-sm italic mt-2">Pronounced: smeh lee-ya</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">La bas</p>
            <p className="text-gray-600">No problem / It's okay</p>
            <p className="text-sm italic mt-2">Pronounced: la bass</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Asking Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Fin...?</p>
            <p className="text-gray-600">Where...?</p>
            <p className="text-sm italic mt-2">Example: Fin l-hammam? (Where is the bathroom?)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shkun...?</p>
            <p className="text-gray-600">Who...?</p>
            <p className="text-sm italic mt-2">Example: Shkun nta/nti? (Who are you?)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Shhal...?</p>
            <p className="text-gray-600">How much...?</p>
            <p className="text-sm italic mt-2">Example: Shhal hada? (How much is this?)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kifash...?</p>
            <p className="text-gray-600">How...?</p>
            <p className="text-sm italic mt-2">Example: Kifash ndir hada? (How do I do this?)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Useful Expressions</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Bghit... (I want...)</p>
          <p className="text-gray-600">Used to express desires or needs</p>
          <p className="text-sm italic mt-2">Example: Bghit shi ma nshrab. (I want something to drink.)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Ma fhemtsh (I don't understand)</p>
          <p className="text-gray-600">Useful when you're confused</p>
          <p className="text-sm italic mt-2">Pronounced: ma fhemt-sh</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">3awed afak (Please repeat)</p>
          <p className="text-gray-600">When you need something repeated</p>
          <p className="text-sm italic mt-2">Pronounced: aa-wed ah-fak</p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/beginner-two" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/beginner-four" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Family and Relations
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}