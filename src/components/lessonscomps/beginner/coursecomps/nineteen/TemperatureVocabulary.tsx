import React from 'react';

export default function TemperatureVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Temperature Vocabulary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Ḥārr</span>
            <span className="text-gray-600">Hot</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Bārd</span>
            <span className="text-gray-600">Cold</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Dāfī</span>
            <span className="text-gray-600">Warm</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Bārd qāsiḥ</span>
            <span className="text-gray-600">Very cold</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Muʿtadil</span>
            <span className="text-gray-600">Moderate</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Ḥārr bazzāf</span>
            <span className="text-gray-600">Very hot</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Raṭb</span>
            <span className="text-gray-600">Humid</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Nāshif</span>
            <span className="text-gray-600">Dry</span>
          </div>
        </div>
      </div>
    </div>
  );
}