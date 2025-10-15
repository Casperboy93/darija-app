import React from 'react';

export default function WeatherActivities() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Weather-Related Activities
      </h2>
      
      <div className="space-y-3">
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">F l-harr: nmshiwu l-l-bahr</span>
            <span className="text-gray-600">In hot weather: we go to the beach</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">F l-bard: nlbisu hwayij skhayna</span>
            <span className="text-gray-600">In cold weather: we wear warm clothes</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">F sh-shta: nq3du f d-dar</span>
            <span className="text-gray-600">In rain: we stay at home</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">F r-rabi3: nzuru l-hadayiq</span>
            <span className="text-gray-600">In spring: we visit gardens</span>
          </div>
        </div>
      </div>
    </div>
  );
}