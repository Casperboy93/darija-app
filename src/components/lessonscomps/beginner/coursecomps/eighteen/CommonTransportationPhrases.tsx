import React from 'react';

export default function CommonTransportationPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Common Transportation Phrases
      </h2>
      
      <div className="space-y-3">
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Waqt l-ṭūbīs?</span>
            <span className="text-gray-600">What time is the bus?</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Waqfnī hna</span>
            <span className="text-gray-600">Stop me here</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Shḥāl bāqī?</span>
            <span className="text-gray-600">How much is left? (time/distance)</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Ṭarīq zḥām</span>
            <span className="text-gray-600">The road is crowded/traffic</span>
          </div>
        </div>
      </div>
    </div>
  );
}