import React from 'react';

export default function NumbersElevenToTwenty() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Numbers 11-20
      </h2>
      
      <p className="text-gray-700 mb-6">Numbers from 11-20 follow a pattern. Notice how they're formed by combining the base number with "tash" (ten).</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">11 - Hdash</p>
          <p className="text-gray-600 mb-1">Eleven</p>
          <p className="text-sm italic text-gray-500">Pronounced: h-dash</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">12 - Tnash</p>
          <p className="text-gray-600 mb-1">Twelve</p>
          <p className="text-sm italic text-gray-500">Pronounced: t-nash</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">13 - Tlatash</p>
          <p className="text-gray-600 mb-1">Thirteen</p>
          <p className="text-sm italic text-gray-500">Pronounced: tla-tash</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">20 - 3ashrin</p>
          <p className="text-gray-600 mb-1">Twenty</p>
          <p className="text-sm italic text-gray-500">Pronounced: ash-reen</p>
        </div>
      </div>
    </div>
  );
}