"use client";

import React from 'react';
import Link from 'next/link';

export default function BeginnerFive() {
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
      
      <h1 className="text-3xl font-bold mb-6">Beginner Lesson 5: Food and Dining</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Learn essential vocabulary and phrases related to food, ordering meals, and dining experiences in Morocco.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Foods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Khobz</p>
            <p className="text-gray-600">Bread</p>
            <p className="text-sm italic mt-2">Pronounced: kh-obz</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Tajine</p>
            <p className="text-gray-600">Traditional Moroccan stew</p>
            <p className="text-sm italic mt-2">Pronounced: ta-jeen</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Kefta</p>
            <p className="text-gray-600">Meatballs</p>
            <p className="text-sm italic mt-2">Pronounced: kef-ta</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Couscous</p>
            <p className="text-gray-600">Traditional grain dish</p>
            <p className="text-sm italic mt-2">Pronounced: koos-koos</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Drinks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Atay</p>
            <p className="text-gray-600">Tea (usually mint tea)</p>
            <p className="text-sm italic mt-2">Pronounced: a-tay</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Qahwa</p>
            <p className="text-gray-600">Coffee</p>
            <p className="text-sm italic mt-2">Pronounced: qah-wa</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">Ma</p>
            <p className="text-gray-600">Water</p>
            <p className="text-sm italic mt-2">Pronounced: ma</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold text-lg">3asir</p>
            <p className="text-gray-600">Juice</p>
            <p className="text-sm italic mt-2">Pronounced: a-seer</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Restaurant Phrases</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Bghit menu, afak. (I would like a menu, please.)</p>
          <p className="text-gray-600">Asking for a menu</p>
          <p className="text-sm italic mt-2">Pronounced: b-gheet men-u, a-fak</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">Shnu katqtereh? (What do you recommend?)</p>
          <p className="text-gray-600">Asking for recommendations</p>
          <p className="text-sm italic mt-2">Pronounced: sh-nu kat-q-ter-eh</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <p className="font-bold mb-2">L-hsab, afak. (The bill, please.)</p>
          <p className="text-gray-600">Asking for the check</p>
          <p className="text-sm italic mt-2">Pronounced: l-hsab, a-fak</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <p className="font-bold mb-2">Bshha. (Enjoy your meal.)</p>
          <p className="text-gray-600">Wishing someone a good meal</p>
          <p className="text-sm italic mt-2">Pronounced: b-sh-ha</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Customer:</p>
            <p className="pl-4">Sbah l-khir. Bghit menu, afak. (Good morning. I would like a menu, please.)</p>
          </div>
          <div>
            <p className="font-medium">Waiter:</p>
            <p className="pl-4">Tfaddal. Shnu bghiti tshreb? (Here you are. What would you like to drink?)</p>
          </div>
          <div>
            <p className="font-medium">Customer:</p>
            <p className="pl-4">Bghit atay b n3na3, afak. (I would like mint tea, please.)</p>
          </div>
          <div>
            <p className="font-medium">Waiter:</p>
            <p className="pl-4">Waخa. U shnu bghiti takul? (Okay. And what would you like to eat?)</p>
          </div>
          <div>
            <p className="font-medium">Customer:</p>
            <p className="pl-4">Bghit tajine d djaj, afak. (I would like chicken tajine, please.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/beginner-four" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Back to All Lessons
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}