import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-4">Taking a Taxi</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">P</div>
            <div>
        <p className="font-medium text-gray-800">Salam, bghit nmshi l-matar.</p>
              <p className="text-gray-600 text-sm">Hello, I want to go to the airport.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">T</div>
            <div>
        <p className="font-medium text-gray-800">Wakha, rkab. Bshhal l-matar?</p>
              <p className="text-gray-600 text-sm">Okay, get in. How much to the airport?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">P</div>
            <div>
        <p className="font-medium text-gray-800">Bshhal kayakul l-matar?</p>
              <p className="text-gray-600 text-sm">How much does it cost to the airport?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">T</div>
            <div>
        <p className="font-medium text-gray-800">200 dirham. Wash nta msafir?</p>
              <p className="text-gray-600 text-sm">200 dirhams. Are you traveling?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">P</div>
            <div>
        <p className="font-medium text-gray-800">Ih, ghadi l-Paris. Shukran.</p>
              <p className="text-gray-600 text-sm">Yes, I'm going to Paris. Thank you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}