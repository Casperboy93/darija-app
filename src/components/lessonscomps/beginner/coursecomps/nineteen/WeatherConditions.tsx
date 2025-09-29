import React from 'react';

export default function WeatherConditions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Weather Conditions
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for describing different weather conditions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Shams</p>
            <span className="text-2xl">☀️</span>
          </div>
          <p className="text-gray-600">Sun/Sunny</p>
          <p className="text-sm text-gray-500 mt-1">شمس</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Shta</p>
            <span className="text-2xl">🌧️</span>
          </div>
          <p className="text-gray-600">Rain</p>
          <p className="text-sm text-gray-500 mt-1">شتا</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rīḥ</p>
            <span className="text-2xl">💨</span>
          </div>
          <p className="text-gray-600">Wind</p>
          <p className="text-sm text-gray-500 mt-1">ريح</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ghaym</p>
            <span className="text-2xl">☁️</span>
          </div>
          <p className="text-gray-600">Clouds</p>
          <p className="text-sm text-gray-500 mt-1">غيم</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Talj</p>
            <span className="text-2xl">❄️</span>
          </div>
          <p className="text-gray-600">Snow</p>
          <p className="text-sm text-gray-500 mt-1">تلج</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ḍabāb</p>
            <span className="text-2xl">🌫️</span>
          </div>
          <p className="text-gray-600">Fog</p>
          <p className="text-sm text-gray-500 mt-1">ضباب</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Barq</p>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-gray-600">Lightning</p>
          <p className="text-sm text-gray-500 mt-1">برق</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Raʿd</p>
            <span className="text-2xl">🌩️</span>
          </div>
          <p className="text-gray-600">Thunder</p>
          <p className="text-sm text-gray-500 mt-1">رعد</p>
        </div>
      </div>
    </div>
  );
}