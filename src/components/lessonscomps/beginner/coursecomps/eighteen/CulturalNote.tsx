import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">Transportation in Morocco</h3>
            <p className="text-amber-700 mb-3">Morocco has a well-developed transportation system. Grand taxis (shared taxis) are common for intercity travel, while petit taxis operate within cities. The train system connects major cities efficiently. Always negotiate taxi fares beforehand or ensure the meter is running.</p>
            <p className="text-amber-700">In cities like Casablanca and Rabat, trams are modern and efficient. Buses are affordable but can be crowded during peak hours. For tourists, organized tours and rental cars are also popular options.</p>
          </div>
        </div>
      </div>
    </div>
  );
}