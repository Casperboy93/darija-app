"use client";

import React from 'react';

export default function ImmediateFamily() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Immediate Family
      </h2>
      
      <p className="text-gray-700 mb-6">These are the core family members you'll refer to most often in daily conversation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bba</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Parent</span>
          </div>
          <p className="text-gray-600">Father</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: bah</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Formal:</span> "Waldi" (My father)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Mma</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Parent</span>
          </div>
          <p className="text-gray-600">Mother</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: mah</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Formal:</span> "Walida" (My mother)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Khay</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sibling</span>
          </div>
          <p className="text-gray-600">Brother</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kh-eye</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Plural:</span> "Khawti" (My brothers)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Khti</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sibling</span>
          </div>
          <p className="text-gray-600">Sister</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kh-tee</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Plural:</span> "Khawati" (My sisters)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Weld</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Child</span>
          </div>
          <p className="text-gray-600">Son</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: weld</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Weldi" (My son)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bent</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Child</span>
          </div>
          <p className="text-gray-600">Daughter</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: bent</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Benti" (My daughter)</p>
          </div>
        </div>
      </div>
    </div>
  );
}