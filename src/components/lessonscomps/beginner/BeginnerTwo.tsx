"use client";

import React from 'react';
import Link from 'next/link';

export default function BeginnerTwo() {
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
      
      <h1 className="text-3xl font-bold mb-6">Beginner Lesson 2: Numbers and Counting</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>In this lesson, you'll learn how to count in Darija and use numbers in everyday situations.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Numbers 1-10</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">1 - Wahed</p>
            <p className="text-sm italic mt-2">Pronounced: wah-hed</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">2 - Jouj</p>
            <p className="text-sm italic mt-2">Pronounced: jooj</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">3 - Tlata</p>
            <p className="text-sm italic mt-2">Pronounced: tla-ta</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">4 - Rb3a</p>
            <p className="text-sm italic mt-2">Pronounced: r-ba-a</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">5 - Khamsa</p>
            <p className="text-sm italic mt-2">Pronounced: kham-sa</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">6 - Stta</p>
            <p className="text-sm italic mt-2">Pronounced: s-ta</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">7 - Sb3a</p>
            <p className="text-sm italic mt-2">Pronounced: s-ba-a</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">8 - Tmnya</p>
            <p className="text-sm italic mt-2">Pronounced: tam-nya</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">9 - Ts3oud</p>
            <p className="text-sm italic mt-2">Pronounced: t-sood</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">10 - 3chra</p>
            <p className="text-sm italic mt-2">Pronounced: ash-ra</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Counting Objects</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Wahed [object]</p>
          <p className="text-gray-600">One [object]</p>
          <p className="text-sm italic mt-2">Example: Wahed ktab (One book)</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Jouj [object]</p>
          <p className="text-gray-600">Two [object]</p>
          <p className="text-sm italic mt-2">Example: Jouj ktub (Two books)</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Practical Examples</h2>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="font-bold mb-2">Shopping</p>
          <p className="mb-2">3tini jouj khobzat. (Give me two loaves of bread.)</p>
          <p className="mb-2">B7al chhal had teffah? (How much are these apples?)</p>
          <p className="mb-2">B3ashara drahm. (For ten dirhams.)</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-bold mb-2">Phone Numbers</p>
          <p className="mb-2">Raqm dyali: stta, tmnya, tlata... (My number is: 6, 8, 3...)</p>
          <p className="mb-2">Note: In Morocco, phone numbers are usually read digit by digit.</p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/beginner-one" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/beginner-three" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Basic Phrases
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}