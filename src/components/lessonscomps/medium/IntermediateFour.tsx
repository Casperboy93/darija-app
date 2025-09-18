"use client";

import React from 'react';
import Link from 'next/link';

export default function IntermediateFour() {
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
      
      <h1 className="text-3xl font-bold mb-6">Intermediate Lesson 4: Comparative Forms</h1>
      
      <div className="bg-indigo-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn how to make comparisons between people, things, and qualities in Darija.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Forming Comparatives</h2>
        <p className="mb-4">In Darija, comparatives are formed using the structure: adjective + "men" (than).</p>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-2">Basic Comparative Structure</h3>
          <p className="text-gray-600 mb-2">Structure: Subject + verb + adjective + men + object of comparison</p>
          <p className="text-gray-600">Example: Dar dyali kbira men dar dyalek. (My house is bigger than your house.)</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Comparative Adjectives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kbir/Kbira (Big)</p>
            <p className="text-gray-600">Comparative: kbir men (bigger than)</p>
            <p className="text-sm italic mt-2">Example: Had l-ktab kbir men dak l-ktab. (This book is bigger than that book.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Sghir/Sghira (Small)</p>
            <p className="text-gray-600">Comparative: sghir men (smaller than)</p>
            <p className="text-sm italic mt-2">Example: Had l-kas sghir men dak l-kas. (This glass is smaller than that glass.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Tqil/Tqila (Heavy)</p>
            <p className="text-gray-600">Comparative: tqil men (heavier than)</p>
            <p className="text-sm italic mt-2">Example: Had sh-shanta tqila men dik sh-shanta. (This bag is heavier than that bag.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Khfif/Khfifa (Light)</p>
            <p className="text-gray-600">Comparative: khfif men (lighter than)</p>
            <p className="text-sm italic mt-2">Example: Had l-kursi khfif men dak l-kursi. (This chair is lighter than that chair.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Zwin/Zwina (Beautiful)</p>
            <p className="text-gray-600">Comparative: zwin men (more beautiful than)</p>
            <p className="text-sm italic mt-2">Example: Had l-warda zwina men dik l-warda. (This flower is more beautiful than that flower.)</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Qrib/Qriba (Near)</p>
            <p className="text-gray-600">Comparative: qrib men (nearer than)</p>
            <p className="text-sm italic mt-2">Example: Dar dyali qriba men l-marché. (My house is nearer to the market.)</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Superlative Forms</h2>
        <p className="mb-4">Superlatives in Darija are formed by using the definite article with the adjective.</p>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-2">Basic Superlative Structure</h3>
          <p className="text-gray-600 mb-2">Structure: Subject + verb + l- + adjective</p>
          <p className="text-gray-600">Example: Huwa l-kbir f l-3a'ila. (He is the oldest in the family.)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">L-kbir/L-kbira</p>
            <p className="text-gray-600">The biggest/oldest</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">L-sghir/L-sghira</p>
            <p className="text-gray-600">The smallest/youngest</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">L-zwin/L-zwina</p>
            <p className="text-gray-600">The most beautiful</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">L-khayb/L-khayba</p>
            <p className="text-gray-600">The worst</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Omar:</p>
            <p className="pl-4">Wesh Marrakech kbira men Rabat? (Is Marrakech bigger than Rabat?)</p>
          </div>
          <div>
            <p className="font-medium">Samira:</p>
            <p className="pl-4">La, Rabat kbira men Marrakech, walkin Casablanca hiya l-kbira f l-Maghrib. (No, Rabat is bigger than Marrakech, but Casablanca is the biggest in Morocco.)</p>
          </div>
          <div>
            <p className="font-medium">Omar:</p>
            <p className="pl-4">Shnu l-medina lli zwina f l-Maghrib? (Which city is the most beautiful in Morocco?)</p>
          </div>
          <div>
            <p className="font-medium">Samira:</p>
            <p className="pl-4">Kayn bzzaf d l-mudun zwinin, walkin ana kanshuf Chefchaouen zwina men l-mudun l-khrin. (There are many beautiful cities, but I think Chefchaouen is more beautiful than the other cities.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/intermediate-three" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/intermediate-five" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Expressing Opinions
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}