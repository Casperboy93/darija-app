import React from 'react';

export default function CommonResponses() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Common Responses
      </h2>
      
      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-green-800">Useful Responses to Know:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Ah / Na3am</p>
            <p className="text-gray-700 text-sm">Yes</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">3afwan</p>
            <p className="text-gray-700 text-sm">You're welcome</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Mashi mushkil</p>
            <p className="text-gray-700 text-sm">No problem</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Bzaf</p>
            <p className="text-gray-700 text-sm">A lot / Very much</p>
          </div>
        </div>
      </div>
    </div>
  );
}