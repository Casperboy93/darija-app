"use client";

import React from 'react';

export default function ExpressingLikesAndDislikes() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Expressing Likes and Dislikes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Kan3jebni...</p>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Like</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">I like...</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Usage:</span> Express things you enjoy</p>
            <p className="text-gray-600 italic text-sm mt-1">Kan3jebni l-atay b n3na3</p>
            <p className="text-gray-500 text-xs">(I like mint tea)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ma kan3jebnish...</p>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Dislike</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">I don't like...</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Usage:</span> Express things you don't enjoy</p>
            <p className="text-gray-600 italic text-sm mt-1">Ma kan3jebnish l-hlib</p>
            <p className="text-gray-500 text-xs">(I don't like milk)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Kanbghi...</p>
            <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full">Love</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">I love...</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Usage:</span> Express strong positive feelings</p>
            <p className="text-gray-600 italic text-sm mt-1">Kanbghi l-Maghrib bzzaf</p>
            <p className="text-gray-500 text-xs">(I love Morocco a lot)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Ma kanbghish...</p>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Don't Love</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">I don't love...</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Usage:</span> Express lack of strong feelings</p>
            <p className="text-gray-600 italic text-sm mt-1">Ma kanbghish l-brd</p>
            <p className="text-gray-500 text-xs">(I don't love the cold)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Kanfaddel...</p>
            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Prefer</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">I prefer...</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Usage:</span> Express preferences between options</p>
            <p className="text-gray-600 italic text-sm mt-1">Kanfaddel l-qahwa 3la l-atay</p>
            <p className="text-gray-500 text-xs">(I prefer coffee over tea)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Kankarah...</p>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Hate</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">I hate...</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Usage:</span> Express strong negative feelings</p>
            <p className="text-gray-600 italic text-sm mt-1">Kankarah l-kadhb</p>
            <p className="text-gray-500 text-xs">(I hate lying)</p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium text-yellow-800">Intensity Levels:</p>
            <p className="text-gray-700">Notice the different levels: kan3jebni (like) → kanbghi (love) → kankarah (hate). Choose the appropriate intensity for your feelings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}