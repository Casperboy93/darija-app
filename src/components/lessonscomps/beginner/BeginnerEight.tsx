"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerEight() {
  return (
    <LessonLayout 
      title="Food and Dining" 
      level="beginner" 
      lessonNumber={8}
      previousLesson="beginner-seven"
      nextLesson="beginner-nine"
    >
      {/* Lesson Overview */}
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-orange-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Discover Moroccan cuisine and learn essential vocabulary for ordering food, dining out, and discussing meals. Perfect for food lovers visiting Morocco!</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-orange-100">
          <p className="font-medium text-orange-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Learn food and drink vocabulary</li>
            <li>Master restaurant ordering phrases</li>
            <li>Understand meal-related expressions</li>
            <li>Practice dining conversations</li>
          </ul>
        </div>
      </div>
      
      {/* Food Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Popular Moroccan Foods
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for traditional Moroccan dishes and ingredients.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Tajīn</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Main Dish</span>
            </div>
            <p className="text-gray-600">Tagine (traditional stew)</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ta-jeen</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Bghit tajīn djāj" (I want chicken tagine)</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kuskus</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Main Dish</span>
            </div>
            <p className="text-gray-600">Couscous</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kus-kus</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kuskus b-khuḍra" (Couscous with vegetables)</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Pastīla</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Pastry</span>
            </div>
            <p className="text-gray-600">Pastilla (sweet and savory pie)</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: pas-tee-la</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Traditional Moroccan delicacy</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ḥarīra</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Soup</span>
            </div>
            <p className="text-gray-600">Harira (traditional soup)</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ha-ree-ra</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Popular during Ramadan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Drinks and Beverages */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Drinks and Beverages
        </h2>
        
        <p className="text-gray-700 mb-6">Common drinks and how to order them in Morocco.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Atāy</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Hot Drink</span>
            </div>
            <p className="text-gray-600">Mint tea</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-tay</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kās atāy, afak" (A glass of tea, please)</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Qahwa</p>
              <span className="bg-brown-100 text-brown-800 text-xs px-2 py-1 rounded-full">Hot Drink</span>
            </div>
            <p className="text-gray-600">Coffee</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: qah-wa</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Qahwa b-ḥlīb" (Coffee with milk)</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Māʾ</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Cold Drink</span>
            </div>
            <p className="text-gray-600">Water</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Māʾ bārid" (Cold water)</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">ʿAṣīr</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Cold Drink</span>
            </div>
            <p className="text-gray-600">Juice</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-seer</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAṣīr burtuqāl" (Orange juice)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Restaurant Phrases
        </h2>
        
        <p className="text-gray-700 mb-6">Essential phrases for dining out and ordering food.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bghit nākul</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Request</span>
            </div>
            <p className="text-gray-600">I want to eat</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit na-kul</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Starting a meal request</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Shnu ʿandkum?</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">What do you have?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: shnu and-kum</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Asking about menu options</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bshḥāl hāda?</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">How much is this?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: b-shhal ha-da</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Asking about price</p>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">L-ḥisāb, afak</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Request</span>
            </div>
            <p className="text-gray-600">The bill, please</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: l-hi-sab a-fak</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Asking for the check</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Practice Dialogue
        </h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Ordering at a Restaurant</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
              <div>
                <p className="font-medium">Salam, bghit nākul</p>
                <p className="text-sm text-gray-600 italic">Hello, I want to eat</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Waiter</div>
              <div>
                <p className="font-medium">Ahlan wa sahlan! Shnu bghīti?</p>
                <p className="text-sm text-gray-600 italic">Welcome! What would you like?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
              <div>
                <p className="font-medium">Shnu ʿandkum mn tajīn?</p>
                <p className="text-sm text-gray-600 italic">What tagines do you have?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Waiter</div>
              <div>
                <p className="font-medium">ʿAndna tajīn djāj w tajīn laḥm</p>
                <p className="text-sm text-gray-600 italic">We have chicken tagine and meat tagine</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
              <div>
                <p className="font-medium">Tajīn djāj, w kās atāy</p>
                <p className="text-sm text-gray-600 italic">Chicken tagine, and a glass of tea</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Waiter</div>
              <div>
                <p className="font-medium">Wākhā, ghādi yjī f waqt qrīb</p>
                <p className="text-sm text-gray-600 italic">Okay, it will come soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Food Culture Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Moroccan Food Culture
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Dining Etiquette</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Wash your hands before eating (often provided at restaurants)</li>
                <li>• Use your right hand for eating and drinking</li>
                <li>• Bread is often used as a utensil to scoop food</li>
                <li>• Mint tea is served throughout the day and after meals</li>
                <li>• Friday couscous is a traditional family meal</li>
                <li>• Tipping 10-15% is customary in restaurants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="font-semibold text-orange-800 mb-4">Restaurant Role Play</h3>
          <p className="text-gray-700 mb-4">Practice ordering a complete meal at a Moroccan restaurant. Include appetizer, main course, drink, and asking for the bill.</p>
          
          <div className="bg-white p-4 rounded-md border border-orange-100">
            <p className="font-medium text-orange-800 mb-2">Vocabulary to use:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Bghit nākul (I want to eat)</li>
              <li>Shnu ʿandkum? (What do you have?)</li>
              <li>Tajīn djāj (Chicken tagine)</li>
              <li>Kās atāy (Glass of tea)</li>
              <li>Bshḥāl hāda? (How much is this?)</li>
              <li>L-ḥisāb, afak (The bill, please)</li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}