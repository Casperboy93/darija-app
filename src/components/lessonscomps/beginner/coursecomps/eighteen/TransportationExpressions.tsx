import React from 'react';

export default function TransportationExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Transportation Expressions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Getting Around:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Kīf ghādī l...?</span>
              <span className="text-gray-600 text-sm">How are you going to...?</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Ghādī b ṭūbīs</span>
              <span className="text-gray-600 text-sm">I'm going by bus</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Fīn l-maḥaṭṭa?</span>
              <span className="text-gray-600 text-sm">Where is the station?</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Taking a Taxi:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Wāsh kāyn ṭāksī?</span>
              <span className="text-gray-600 text-sm">Is there a taxi?</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Bghīt nmshī l...</span>
              <span className="text-gray-600 text-sm">I want to go to...</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Bshḥāl?</span>
              <span className="text-gray-600 text-sm">How much?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}