import React from 'react';

export default function PlacesDestinations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Places and Destinations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Mahatta</span>
            <span className="text-gray-600">Station</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Matar</span>
            <span className="text-gray-600">Airport</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Mina</span>
            <span className="text-gray-600">Port</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Wasat l-madina</span>
            <span className="text-gray-600">City center</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Suq</span>
            <span className="text-gray-600">Market</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Jami3a</span>
            <span className="text-gray-600">University</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Mustashfa</span>
            <span className="text-gray-600">Hospital</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Funduq</span>
            <span className="text-gray-600">Hotel</span>
          </div>
        </div>
      </div>
    </div>
  );
}