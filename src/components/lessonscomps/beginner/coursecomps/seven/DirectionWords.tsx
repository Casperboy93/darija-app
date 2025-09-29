"use client";

import React from 'react';

export default function DirectionWords() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Direction Words
      </h2>
      
      <p className="text-gray-700 mb-6">Basic directional vocabulary for navigation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Līmn</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Direction</span>
          </div>
          <p className="text-gray-600">Right</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: lee-mn</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Dūr līmn" (Turn right)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Līsr</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Direction</span>
          </div>
          <p className="text-gray-600">Left</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: lee-sr</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Dūr līsr" (Turn left)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Nīshan</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Direction</span>
          </div>
          <p className="text-gray-600">Straight</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: nee-shan</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Sīr nīshan" (Go straight)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Wqf hna</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Command</span>
          </div>
          <p className="text-gray-600">Stop here</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: wqf hna</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Tell taxi driver to stop</p>
          </div>
        </div>
      </div>
    </div>
  );
}