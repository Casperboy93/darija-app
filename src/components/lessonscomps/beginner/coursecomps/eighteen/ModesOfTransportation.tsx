import React from 'react';

export default function ModesOfTransportation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Modes of Transportation
      </h2>
      
      <p className="text-gray-700 mb-6">Different ways to get around in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭūmūbīl</p>
            <span className="text-2xl">🚗</span>
          </div>
          <p className="text-gray-600">Car</p>
          <p className="text-sm text-gray-500 mt-1">طوموبيل</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭūbīs</p>
            <span className="text-2xl">🚌</span>
          </div>
          <p className="text-gray-600">Bus</p>
          <p className="text-sm text-gray-500 mt-1">طوبيس</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qiṭār</p>
            <span className="text-2xl">🚂</span>
          </div>
          <p className="text-gray-600">Train</p>
          <p className="text-sm text-gray-500 mt-1">قطار</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭāksī</p>
            <span className="text-2xl">🚕</span>
          </div>
          <p className="text-gray-600">Taxi</p>
          <p className="text-sm text-gray-500 mt-1">طاكسي</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Mūtū</p>
            <span className="text-2xl">🏍️</span>
          </div>
          <p className="text-gray-600">Motorcycle</p>
          <p className="text-sm text-gray-500 mt-1">موتو</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Baḥrīya</p>
            <span className="text-2xl">⛵</span>
          </div>
          <p className="text-gray-600">Boat</p>
          <p className="text-sm text-gray-500 mt-1">بحرية</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭayyāra</p>
            <span className="text-2xl">✈️</span>
          </div>
          <p className="text-gray-600">Airplane</p>
          <p className="text-sm text-gray-500 mt-1">طيارة</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Bijiklīt</p>
            <span className="text-2xl">🚲</span>
          </div>
          <p className="text-gray-600">Bicycle</p>
          <p className="text-sm text-gray-500 mt-1">بيجيكليت</p>
        </div>
      </div>
    </div>
  );
}