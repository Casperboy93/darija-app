import React from 'react';

export default function WeatherExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Weather Expressions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Asking About Weather:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Kif l-jaww l-yum?</span>
              <span className="text-gray-600 text-sm">How's the weather today?</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Wash ghadi tshti?</span>
              <span className="text-gray-600 text-sm">Is it going to rain?</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Jaww zin walla la?</span>
              <span className="text-gray-600 text-sm">Is the weather nice or not?</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">Describing Weather:</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
        <span className="text-gray-700">L-jaww harr bazzaf</span>
              <span className="text-gray-600 text-sm">The weather is very hot</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Bard shwiya</span>
              <span className="text-gray-600 text-sm">It's a bit cold</span>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-gray-700">Kayshti mn l-barih</span>
              <span className="text-gray-600 text-sm">It's been raining since yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}