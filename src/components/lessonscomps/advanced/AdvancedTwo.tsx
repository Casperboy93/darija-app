"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedTwo() {
  return (
    <LessonLayout 
      title="Dialectal Variations" 
      level="advanced" 
      lessonNumber={2}
      nextLesson="advanced-three"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Explore the rich regional variations of Darija across different parts of Morocco. Understanding these dialectal differences will help you communicate more effectively with people from various regions and appreciate the linguistic diversity of Morocco.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Identify major regional dialects and their characteristics</li>
            <li>Understand pronunciation differences across regions</li>
            <li>Learn vocabulary variations and their origins</li>
            <li>Practice adapting your speech for different regions</li>
          </ul>
        </div>
      </div>
      
      {/* Major Regional Dialects */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Major Regional Dialects
        </h2>
        
        <p className="text-gray-700 mb-6">Morocco's diverse geography and history have created distinct regional variations of Darija:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Northern Dialect</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Tetouan, Tangier</span>
            </div>
            <p className="text-gray-600">Heavily influenced by Spanish and Andalusian Arabic</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronunciation: fayn (where) instead of feen</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Fayn ghadi?" (Where are you going?)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Central Dialect</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Casablanca, Rabat</span>
            </div>
            <p className="text-gray-600">Considered the standard Darija, most widely understood</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronunciation: Standard forms like "daba" (now)</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Daba ghadi nmshi." (Now I'm going to leave.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Eastern Dialect</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Oujda, Fez</span>
            </div>
            <p className="text-gray-600">Influenced by Algerian Arabic and classical Arabic</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronunciation: "khubz" instead of "khobz" (bread)</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Bghit khubz." (I want bread.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Southern Dialect</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Marrakech, Agadir</span>
            </div>
            <p className="text-gray-600">Influenced by Amazigh (Berber) languages</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronunciation: "nekki" instead of "ana" (I)</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Nekki men Marrakech." (I'm from Marrakech.)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pronunciation Differences */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Pronunciation Differences
        </h2>
        
        <p className="text-gray-700 mb-6">Key pronunciation variations you'll encounter across regions:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">The Letter "Q" (ق)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-medium text-purple-800">Northern</p>
                <p className="text-gray-700">"G" sound</p>
                <p className="text-sm italic text-gray-500">galb (heart)</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-purple-800">Central</p>
                <p className="text-gray-700">"G" or "Q" sound</p>
                <p className="text-sm italic text-gray-500">galb/qalb</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-purple-800">Southern</p>
                <p className="text-gray-700">"G" sound</p>
                <p className="text-sm italic text-gray-500">galb</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Vowel Variations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Word: "Where" (أين)</p>
                <ul className="mt-2 space-y-1">
                  <li><span className="font-medium">Northern:</span> fayn</li>
                  <li><span className="font-medium">Central:</span> feen</li>
                  <li><span className="font-medium">Eastern:</span> wayn</li>
                  <li><span className="font-medium">Southern:</span> feen/manik</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-purple-800">Word: "Now" (الآن)</p>
                <ul className="mt-2 space-y-1">
                  <li><span className="font-medium">Northern:</span> daba</li>
                  <li><span className="font-medium">Central:</span> daba</li>
                  <li><span className="font-medium">Eastern:</span> tawa</li>
                  <li><span className="font-medium">Southern:</span> daba/tura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vocabulary Variations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Vocabulary Variations
        </h2>
        
        <p className="text-gray-700 mb-6">Different regions use different words for the same concepts:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Food & Drink</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Bread:</span>
                <span className="text-gray-600">khobz (Central) / khubz (Eastern)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tea:</span>
                <span className="text-gray-600">atay (Most) / tay (Some regions)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Water:</span>
                <span className="text-gray-600">ma (Most) / lma (Some regions)</span>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Common Objects</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Car:</span>
                <span className="text-gray-600">tomobil (Most) / karhba (Some)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Money:</span>
                <span className="text-gray-600">flus (Most) / drhem (Formal)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">House:</span>
                <span className="text-gray-600">dar (Most) / bit (Some regions)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Influences */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Cultural Influences
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Spanish Influence (North)</h3>
            <p className="text-gray-600 mb-3">Due to historical Spanish presence in northern Morocco:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Spanish Loanwords:</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• mesa (table) → misa</li>
                  <li>• ventana (window) → bentana</li>
                  <li>• cuchara (spoon) → kuchara</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Pronunciation:</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• Softer consonants</li>
                  <li>• Different intonation patterns</li>
                  <li>• Some Spanish phonemes</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Amazigh Influence (South & Atlas)</h3>
            <p className="text-gray-600 mb-3">Berber languages have significantly influenced southern dialects:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Amazigh Loanwords:</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• azref (house) influences</li>
                  <li>• aman (water) → ma</li>
                  <li>• agadir (fortress) → city name</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Grammar Features:</p>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• Different pronoun systems</li>
                  <li>• Unique verb conjugations</li>
                  <li>• Distinct word order patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Regional Conversation Examples
        </h2>
        
        <div className="bg-white border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-purple-800">Same Conversation, Different Regions:</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-blue-700 mb-2">Northern Style (Tangier)</h4>
              <div className="space-y-2">
                <p><span className="font-medium">A:</span> Fayn ghadi?</p>
                <p className="text-gray-600 text-sm italic">Where are you going?</p>
                <p><span className="font-medium">B:</span> Ghadi l-suq bsh nshri bentana jdida.</p>
                <p className="text-gray-600 text-sm italic">I'm going to the market to buy a new window.</p>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-green-700 mb-2">Central Style (Casablanca)</h4>
              <div className="space-y-2">
                <p><span className="font-medium">A:</span> Feen ghadi?</p>
                <p className="text-gray-600 text-sm italic">Where are you going?</p>
                <p><span className="font-medium">B:</span> Ghadi l-suq bsh nshri shubak jdid.</p>
                <p className="text-gray-600 text-sm italic">I'm going to the market to buy a new window.</p>
              </div>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-orange-700 mb-2">Eastern Style (Oujda)</h4>
              <div className="space-y-2">
                <p><span className="font-medium">A:</span> Wayn rayeh?</p>
                <p className="text-gray-600 text-sm italic">Where are you going?</p>
                <p><span className="font-medium">B:</span> Rayeh l-suq bsh nshri shubak jdid.</p>
                <p className="text-gray-600 text-sm italic">I'm going to the market to buy a new window.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Adaptation Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Adaptation Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Listen carefully to locals and mirror their pronunciation and vocabulary choices</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Central Darija is understood everywhere, so it's a safe default when in doubt</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Don't worry about perfect regional accuracy - locals appreciate any effort to speak Darija</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Ask locals about regional expressions - they're usually happy to teach you</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}