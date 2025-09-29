"use client";

import React from 'react';

export default function LikesDislikes() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Expressing Likes and Dislikes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-green-700">Likes</h3>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-800">Ana kan-ḥabb...</p>
            <p className="text-gray-700">I like...</p>
            <p className="text-sm text-gray-500 mt-1">أنا كنحب...</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-800">Kan-ḥabb bzāf...</p>
            <p className="text-gray-700">I really like...</p>
            <p className="text-sm text-gray-500 mt-1">كنحب بزاف...</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-800">Hāda shi zwin</p>
            <p className="text-gray-700">This is nice/good</p>
            <p className="text-sm text-gray-500 mt-1">هادا شي زوين</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-red-700">Dislikes</h3>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-800">Ma kan-ḥabbsh...</p>
            <p className="text-gray-700">I don't like...</p>
            <p className="text-sm text-gray-500 mt-1">ما كنحبش...</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-800">Hāda mā 'ajbabnīsh</p>
            <p className="text-gray-700">I don't like this</p>
            <p className="text-sm text-gray-500 mt-1">هادا ما عجبنيش</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-800">Hāda khayb</p>
            <p className="text-gray-700">This is bad</p>
            <p className="text-sm text-gray-500 mt-1">هادا خايب</p>
          </div>
        </div>
      </div>
    </div>
  );
}