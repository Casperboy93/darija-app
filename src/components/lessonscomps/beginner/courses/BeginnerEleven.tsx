"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';

export default function BeginnerEleven() {
  return (
    <LessonLayout 
      title="Clothing and Colors" 
      level="beginner" 
      lessonNumber={11}
      previousLesson="beginner-ten"
      nextLesson="beginner-twelve"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn essential vocabulary for clothing items and colors in Darija. Perfect for shopping, describing what you're wearing, and expressing preferences.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master clothing vocabulary for different items</li>
            <li>Learn all basic colors in Darija</li>
            <li>Practice describing what you're wearing</li>
            <li>Understand shopping phrases for clothes</li>
          </ul>
        </div>
      </div>
      
      {/* Basic Colors */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Basic Colors
        </h2>
        
        <p className="text-gray-700 mb-6">Colors are essential for describing clothing and expressing preferences.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-gray-900">Aḥmar</p>
              <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-gray-300"></div>
            </div>
            <p className="text-gray-600">Red</p>
            <p className="text-sm text-gray-500 mt-1">أحمر</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-gray-900">Azraq</p>
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></div>
            </div>
            <p className="text-gray-600">Blue</p>
            <p className="text-sm text-gray-500 mt-1">أزرق</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-gray-900">Akhḍar</p>
              <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-300"></div>
            </div>
            <p className="text-gray-600">Green</p>
            <p className="text-sm text-gray-500 mt-1">أخضر</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-gray-900">Aṣfar</p>
              <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-gray-300"></div>
            </div>
            <p className="text-gray-600">Yellow</p>
            <p className="text-sm text-gray-500 mt-1">أصفر</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-gray-900">Abyaḍ</p>
              <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></div>
            </div>
            <p className="text-gray-600">White</p>
            <p className="text-sm text-gray-500 mt-1">أبيض</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-gray-900">Aswad</p>
              <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
            </div>
            <p className="text-gray-600">Black</p>
            <p className="text-sm text-gray-500 mt-1">أسود</p>
          </div>
        </div>
      </div>

      {/* Clothing Items */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Clothing Items
        </h2>
        
        <p className="text-gray-700 mb-6">Essential clothing vocabulary for everyday conversations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900">Qamīṣ</p>
            <p className="text-gray-600">Shirt</p>
            <p className="text-sm text-gray-500 mt-1">قميص</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900">Banṭalōn</p>
            <p className="text-gray-600">Pants/Trousers</p>
            <p className="text-sm text-gray-500 mt-1">بنطلون</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900">Jallāba</p>
            <p className="text-gray-600">Traditional Moroccan robe</p>
            <p className="text-sm text-gray-500 mt-1">جلابة</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900">Ḥidhā'</p>
            <p className="text-gray-600">Shoes</p>
            <p className="text-sm text-gray-500 mt-1">حذاء</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900">Kūfiyya</p>
            <p className="text-gray-600">Hat/Cap</p>
            <p className="text-sm text-gray-500 mt-1">كوفية</p>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900">Ṣandal</p>
            <p className="text-gray-600">Sandals</p>
            <p className="text-sm text-gray-500 mt-1">صندل</p>
          </div>
        </div>
      </div>

      {/* Useful Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Useful Phrases
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-800">Ash kāyn f-had l-maḥall?</p>
            <p className="text-gray-700">What do you have in this store?</p>
            <p className="text-sm text-gray-500 mt-1">أش كاين في هاد المحل؟</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-800">Bghīt qamīṣ azraq</p>
            <p className="text-gray-700">I want a blue shirt</p>
            <p className="text-sm text-gray-500 mt-1">بغيت قميص أزرق</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-800">Bshḥāl hāda?</p>
            <p className="text-gray-700">How much is this?</p>
            <p className="text-sm text-gray-500 mt-1">بشحال هادا؟</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-semibold text-purple-800">Kāyn ḥajm akbar?</p>
            <p className="text-gray-700">Do you have a bigger size?</p>
            <p className="text-sm text-gray-500 mt-1">كاين حجم أكبر؟</p>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Describe Your Outfit</h3>
          <p className="text-gray-700 mb-4">Practice describing what you're wearing using the vocabulary you've learned:</p>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border">
              <p className="font-medium">Example:</p>
              <p className="text-purple-700">"Ana lābes qamīṣ abyaḍ u banṭalōn azraq"</p>
              <p className="text-gray-600">"I'm wearing a white shirt and blue pants"</p>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <p className="font-medium">Your turn:</p>
              <p className="text-gray-600">Try describing your current outfit in Darija!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Cultural Note
        </h2>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <p className="text-gray-700">
            <strong>Traditional Clothing:</strong> The jellaba is a traditional Moroccan garment worn by both men and women. 
            It's especially common during religious holidays and formal occasions. When shopping for clothes in Morocco, 
            bargaining is expected in traditional markets (souks), but not in modern stores.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}