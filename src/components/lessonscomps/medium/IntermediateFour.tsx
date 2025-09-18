"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateFour() {
  return (
    <LessonLayout 
      title="Comparative Forms" 
      level="intermediate" 
      lessonNumber={4}
      nextLesson="intermediate-five"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master comparative forms in Darija to compare people, objects, and qualities. Learn to express differences in size, quality, quantity, and characteristics using proper comparative structures.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master basic comparative structures with "men" (than)</li>
            <li>Learn superlative forms for expressing extremes</li>
            <li>Practice comparing physical characteristics and qualities</li>
            <li>Understand equality comparisons and their usage</li>
          </ul>
        </div>
      </div>
      
      {/* Basic Comparative Structure */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Basic Comparative Structure
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-6">
          <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Basic Pattern:</p>
            <p><span className="font-mono">Subject + adjective + men + object of comparison</span></p>
            <p className="mt-1 text-gray-600">The word "men" means "than" and connects the two things being compared</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Structure Example:</p>
              <p className="text-gray-700 mt-1">Dar dyali kbira men dar dyalek</p>
              <p className="text-gray-600 italic text-sm">(My house is bigger than your house)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Word Order:</p>
              <p className="text-gray-700 mt-1">Subject → Adjective → "men" → Comparison</p>
              <p className="text-gray-600 italic text-sm">(House mine) → (big) → (than) → (house yours)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-medium text-yellow-800">Pronunciation Tip:</p>
              <p className="text-gray-700">"Men" is pronounced like "min" in English, with a short 'e' sound. Don't confuse it with the English word "men".</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Common Comparative Adjectives */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Common Comparative Adjectives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Kbir/Kbira</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Size</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Big/Large</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> kbir men (bigger than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Had l-ktab kbir men dak l-ktab</p>
              <p className="text-gray-500 text-xs">(This book is bigger than that book)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Sghir/Sghira</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Size</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Small</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> sghir men (smaller than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Had l-kas sghir men dak l-kas</p>
              <p className="text-gray-500 text-xs">(This glass is smaller than that glass)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Zwin/Zwina</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Quality</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Beautiful/Nice</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> zwin men (more beautiful than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Had l-blasa zwina men dik l-blasa</p>
              <p className="text-gray-500 text-xs">(This place is more beautiful than that place)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Qbih/Qbiha</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Quality</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Ugly/Bad</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> qbih men (uglier than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Had l-film qbih men dak l-film</p>
              <p className="text-gray-500 text-xs">(This movie is worse than that movie)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Twil/Twila</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Length</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Long/Tall</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> twil men (longer/taller than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Huwa twil men khuya</p>
              <p className="text-gray-500 text-xs">(He is taller than my brother)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Qsir/Qsira</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Length</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Short</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> qsir men (shorter than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Hiya qsira men ukhtha</p>
              <p className="text-gray-500 text-xs">(She is shorter than her sister)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ghali/Ghalya</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Price</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Expensive</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> ghali men (more expensive than)</p>
              <p className="text-gray-600 italic text-sm mt-1">Had l-hut ghali men dak l-hut</p>
              <p className="text-gray-500 text-xs">(This fish is more expensive than that fish)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Rkhis/Rkhisa</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Price</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Cheap</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Comparative:</span> rkhis men (cheaper than)</p>
              <p className="text-gray-600 italic text-sm mt-1">L-khodra rkhisa men l-lham</p>
              <p className="text-gray-500 text-xs">(Vegetables are cheaper than meat)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Superlative Forms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
          </svg>
          Superlative Forms (The Most/The Best)
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-6">
          <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Superlative Pattern:</p>
            <p><span className="font-mono">l- + adjective + f + group/context</span></p>
            <p className="mt-1 text-gray-600">Used to express the highest degree of a quality within a group</p>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">The Biggest:</p>
                <p className="text-gray-700">L-kbir f l-3a'ila</p>
                <p className="text-gray-600 italic text-sm">(The biggest in the family)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">The Most Beautiful:</p>
                <p className="text-gray-700">L-zwin f l-madina</p>
                <p className="text-gray-600 italic text-sm">(The most beautiful in the city)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">The Tallest:</p>
                <p className="text-gray-700">L-twil f l-fariq</p>
                <p className="text-gray-600 italic text-sm">(The tallest in the team)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">The Most Expensive:</p>
                <p className="text-gray-700">L-ghali f l-suq</p>
                <p className="text-gray-600 italic text-sm">(The most expensive in the market)</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="font-medium text-yellow-800">Complete Examples:</p>
              <div className="mt-2 space-y-2">
                <p className="text-gray-700">Huwa l-twil f l-qism → <span className="italic">He is the tallest in the class</span></p>
                <p className="text-gray-700">Hadi l-zwina f l-blasa → <span className="italic">This is the most beautiful in the place</span></p>
                <p className="text-gray-700">Had l-ktab l-mufid f l-maktaba → <span className="italic">This is the most useful book in the library</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Equality Comparisons */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Equality Comparisons (As... As)
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Using "bhal" (like/as)</h3>
            
            <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
              <p className="font-medium text-blue-800">Pattern:</p>
              <p><span className="font-mono">Subject + adjective + bhal + comparison object</span></p>
              <p className="mt-1 text-gray-600">Used to show that two things are equal in some quality</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Huwa twil bhal khuya</p>
                <p className="text-gray-600 italic">He is as tall as my brother</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">Hiya zwina bhal ukhtha</p>
                <p className="text-gray-600 italic">She is as beautiful as her sister</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">L-ktab rkhis bhal l-jarida</p>
                <p className="text-gray-600 italic">The book is as cheap as the newspaper</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">L-dar kbira bhal l-madrasa</p>
                <p className="text-gray-600 italic">The house is as big as the school</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Using "nafs" (same)</h3>
            
            <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-400">
              <p className="font-medium text-blue-800">Pattern:</p>
              <p><span className="font-mono">Subject + nafs + adjective + bhal + comparison</span></p>
              <p className="mt-1 text-gray-600">Emphasizes exact equality between two things</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">3ndi nafs l-3umr bhal khti</p>
                <p className="text-gray-600 italic">I have the same age as my sister</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium">3ndna nafs l-fikra</p>
                <p className="text-gray-600 italic">We have the same idea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Comparing Quantities */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          Comparing Quantities
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">More/Less Quantities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ktar men (more than)</p>
                <p className="text-gray-700">3ndi ktar men 3ashara kutub</p>
                <p className="text-gray-600 italic">(I have more than ten books)</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Qall men (less than)</p>
                <p className="text-gray-700">Shrit qall men khamsa t-tuffahat</p>
                <p className="text-gray-600 italic">(I bought less than five apples)</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Bzaf men (much more than)</p>
                <p className="text-gray-700">Kan 3ndna bzaf men l-ma</p>
                <p className="text-gray-600 italic">(We had much more than water)</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Shwiya men (a little more than)</p>
                <p className="text-gray-700">Khdmt shwiya men sa3a</p>
                <p className="text-gray-600 italic">(I worked a little more than an hour)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Equal Quantities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Nafs l-3adad (same number)</p>
                <p className="text-gray-700">3ndna nafs l-3adad dyal l-kutub</p>
                <p className="text-gray-600 italic">(We have the same number of books)</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Bhal bhal (equally)</p>
                <p className="text-gray-700">Khdmna bhal bhal</p>
                <p className="text-gray-600 italic">(We worked equally)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Practice Conversation
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-blue-700 mb-2">Topic: Comparing apartments for rent</p>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-blue-800">Ahmed:</p>
                <p className="pl-2 text-gray-800">Sheft l-appartement li f Agdal? Kbir men li f Rabat.</p>
                <p className="pl-2 text-gray-600 italic">(Did you see the apartment in Agdal? It's bigger than the one in Rabat.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-pink-800">Fatima:</p>
                <p className="pl-2 text-gray-800">Ih, walakin ghali men li f Rabat. L-kira 4000 dirham f sh-shahr.</p>
                <p className="pl-2 text-gray-600 italic">(Yes, but it's more expensive than the one in Rabat. The rent is 4000 dirhams per month.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-blue-800">Ahmed:</p>
                <p className="pl-2 text-gray-800">Waqila l-afdal nakhdu li f Rabat. Rkhis u qrib men l-khdma.</p>
                <p className="pl-2 text-gray-600 italic">(Maybe it's better we take the one in Rabat. It's cheaper and closer to work.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-pink-800">Fatima:</p>
                <p className="pl-2 text-gray-800">Mzyan. Huwa l-afdal f had l-waqt. Gha nshuf shi appartement akhar.</p>
                <p className="pl-2 text-gray-600 italic">(Good. It's the best at this time. I'll look for another apartment.)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
          <p className="font-medium text-yellow-800">Practice Tip:</p>
          <p className="text-gray-700">When comparing, always consider context. What's "better" depends on priorities - price, location, size, etc. Practice using different comparative forms in real-life scenarios.</p>
        </div>
      </div>
      
      {/* Common Mistakes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Common Mistakes to Avoid
        </h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-medium text-red-800 mb-3">❌ Forgetting Gender Agreement</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-red-200">
                <p className="font-medium text-red-700">Wrong:</p>
                <p className="text-gray-700">L-bnt kbir men l-wld</p>
                <p className="text-gray-600 italic">(Using masculine form for feminine subject)</p>
              </div>
              <div className="bg-white p-3 rounded-md border border-green-200">
                <p className="font-medium text-green-700">Correct:</p>
                <p className="text-gray-700">L-bnt kbira men l-wld</p>
                <p className="text-gray-600 italic">(Feminine adjective for feminine subject)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-medium text-red-800 mb-3">❌ Wrong Word Order</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-red-200">
                <p className="font-medium text-red-700">Wrong:</p>
                <p className="text-gray-700">Men dar dyali kbira dar dyalek</p>
                <p className="text-gray-600 italic">(Putting "men" at the beginning)</p>
              </div>
              <div className="bg-white p-3 rounded-md border border-green-200">
                <p className="font-medium text-green-700">Correct:</p>
                <p className="text-gray-700">Dar dyali kbira men dar dyalek</p>
                <p className="text-gray-600 italic">(Subject + adjective + men + comparison)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-medium text-red-800 mb-3">❌ Mixing Comparative and Superlative</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-md border border-red-200">
                <p className="font-medium text-red-700">Wrong:</p>
                <p className="text-gray-700">Huwa l-kbir men kull nas</p>
                <p className="text-gray-600 italic">(Mixing superlative "l-" with comparative "men")</p>
              </div>
              <div className="bg-white p-3 rounded-md border border-green-200">
                <p className="font-medium text-green-700">Correct:</p>
                <p className="text-gray-700">Huwa l-kbir f kull nas</p>
                <p className="text-gray-600 italic">(Superlative uses "f" not "men")</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Be careful when comparing people directly - it can be considered rude. Use gentle language and focus on positive qualities</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Moroccans often use comparisons when bargaining in markets - "hada ghali men dak" (this is more expensive than that)</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Family comparisons are common but should be made with love and respect, especially when talking about children</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">When complimenting, Moroccans often use superlatives: "nti l-zwina f l-3alam" (you are the most beautiful in the world)</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}