import React from 'react';

export default function Seasons() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Seasons
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-green-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rabīʿ</p>
            <span className="text-2xl">🌸</span>
          </div>
          <p className="text-gray-600">Spring</p>
          <p className="text-sm text-gray-500 mt-1">ربيع</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-yellow-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṣayf</p>
            <span className="text-2xl">🌞</span>
          </div>
          <p className="text-gray-600">Summer</p>
          <p className="text-sm text-gray-500 mt-1">صيف</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-orange-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kharīf</p>
            <span className="text-2xl">🍂</span>
          </div>
          <p className="text-gray-600">Autumn/Fall</p>
          <p className="text-sm text-gray-500 mt-1">خريف</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Shitā</p>
            <span className="text-2xl">❄️</span>
          </div>
          <p className="text-gray-600">Winter</p>
          <p className="text-sm text-gray-500 mt-1">شتاء</p>
        </div>
      </div>
    </div>
  );
}