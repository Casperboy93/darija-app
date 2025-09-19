"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerNine() {
  return (
    <LessonLayout 
      title="Weather and Seasons" 
      level="beginner" 
      lessonNumber={9}
      previousLesson="beginner-eight"
      nextLesson="beginner-ten"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn to describe weather conditions, seasons, and climate in Morocco. Essential vocabulary for daily conversations and travel planning.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master weather vocabulary and expressions</li>
            <li>Learn about Moroccan seasons and climate</li>
            <li>Understand temperature and weather descriptions</li>
            <li>Practice weather-related conversations</li>
          </ul>
        </div>
      </div>
      
      {/* Weather Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Weather Conditions
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for describing different weather conditions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Shams</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Sunny</span>
            </div>
            <p className="text-gray-600">Sun / Sunny</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: shams</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "L-yūm fīh shams" (Today is sunny)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Shta</p>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Rainy</span>
            </div>
            <p className="text-gray-600">Rain</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: shta</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kayshti l-yūm" (It's raining today)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Rīḥ</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Windy</span>
            </div>
            <p className="text-gray-600">Wind</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: reeh</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kayna rīḥ qawīya" (There's strong wind)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Sahāb</p>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Cloudy</span>
            </div>
            <p className="text-gray-600">Clouds</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sa-hab</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "S-smā fīha sahāb" (The sky has clouds)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Temperature Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">How to describe hot, cold, and comfortable temperatures.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Skhūn</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Hot</span>
            </div>
            <p className="text-gray-600">Hot / Warm</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: s-khoon</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "L-jaww skhūn bzāf" (The weather is very hot)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bārid</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Cold</span>
            </div>
            <p className="text-gray-600">Cold</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ba-rid</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "L-jaww bārid f-shitā" (The weather is cold in winter)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Muʿtadil</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Mild</span>
            </div>
            <p className="text-gray-600">Moderate / Mild</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: mu-ta-dil</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "L-jaww muʿtadil" (The weather is mild)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ḥārr bzāf</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Very Hot</span>
            </div>
            <p className="text-gray-600">Very hot</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: harr b-zaf</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Describing extreme heat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seasons in Morocco */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Seasons in Morocco
        </h2>
        
        <p className="text-gray-700 mb-6">The four seasons and their characteristics in Morocco.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ṣayf</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Season</span>
            </div>
            <p className="text-gray-600">Summer</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sayf</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Hot and dry, especially inland</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Shitā</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Season</span>
            </div>
            <p className="text-gray-600">Winter</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: shi-ta</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Mild and rainy, cold in mountains</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Rabīʿ</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Season</span>
            </div>
            <p className="text-gray-600">Spring</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ra-bee</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Pleasant temperatures, flowers bloom</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kharīf</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Season</span>
            </div>
            <p className="text-gray-600">Autumn / Fall</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kha-reef</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Comfortable temperatures, harvest time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Questions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Weather Questions
        </h2>
        
        <p className="text-gray-700 mb-6">Common questions and responses about weather.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kīfāsh l-jaww?</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">How's the weather?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kee-fash l-jaww</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Response:</strong> "L-jaww zīn" (The weather is nice)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ghādi yshti?</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">Is it going to rain?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: gha-di y-shti</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Response:</strong> "Iyeh, ghādi yshti" (Yes, it's going to rain)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Skhūn wlla bārid?</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">Hot or cold?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: s-khoon wlla ba-rid</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Asking about temperature</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Shnu l-ḥāl dyal l-jaww?</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">What's the weather condition?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: shnu l-hal dyal l-jaww</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> More formal weather inquiry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Practice Dialogue
        </h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Discussing Weather Plans</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend A</div>
              <div>
                <p className="font-medium">Kīfāsh l-jaww l-yūm?</p>
                <p className="text-sm text-gray-600 italic">How's the weather today?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend B</div>
              <div>
                <p className="font-medium">L-jaww zīn, fīh shams w muʿtadil</p>
                <p className="text-sm text-gray-600 italic">The weather is nice, sunny and mild</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend A</div>
              <div>
                <p className="font-medium">Wākhā, nmshīw l-l-baḥr?</p>
                <p className="text-sm text-gray-600 italic">Okay, shall we go to the beach?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend B</div>
              <div>
                <p className="font-medium">Fikra zīna! Walakin khāṣṣna nshūfū ghādi yshti wlla lā</p>
                <p className="text-sm text-gray-600 italic">Good idea! But we need to see if it's going to rain or not</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend A</div>
              <div>
                <p className="font-medium">Shftu s-smā, mā fīhāsh sahāb</p>
                <p className="text-sm text-gray-600 italic">Look at the sky, there are no clouds</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend B</div>
              <div>
                <p className="font-medium">Ṣaḥīḥ, yallah nmshīw!</p>
                <p className="text-sm text-gray-600 italic">True, let's go!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Climate Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Moroccan Climate Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Weather in Different Regions</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>Coast:</strong> Mild temperatures year-round, ocean breeze</li>
                <li>• <strong>Mountains:</strong> Cold winters, snow possible, cool summers</li>
                <li>• <strong>Desert:</strong> Very hot days, cold nights, minimal rainfall</li>
                <li>• <strong>Cities:</strong> Hot summers, mild winters, occasional rain</li>
                <li>• <strong>Best time to visit:</strong> Spring (March-May) and Fall (September-November)</li>
                <li>• <strong>Ramadan weather:</strong> Consider fasting hours during hot months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-800 mb-4">Weather Forecast</h3>
          <p className="text-gray-700 mb-4">Practice describing the weather for different days and seasons. Plan activities based on weather conditions.</p>
          
          <div className="bg-white p-4 rounded-md border border-blue-100">
            <p className="font-medium text-blue-800 mb-2">Scenarios to practice:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Describe today's weather to a friend</li>
              <li>Ask about tomorrow's weather forecast</li>
              <li>Discuss seasonal changes in Morocco</li>
              <li>Plan outdoor activities based on weather</li>
              <li>Compare weather in different Moroccan cities</li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}