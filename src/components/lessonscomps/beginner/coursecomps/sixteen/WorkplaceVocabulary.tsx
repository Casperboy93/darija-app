"use client";

import React from 'react';

export default function WorkplaceVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Workplace Vocabulary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Maktab</span>
            <span className="text-gray-600">Office</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Ma3mal</span>
            <span className="text-gray-600">Factory</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Hanut</span>
            <span className="text-gray-600">Shop</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Mustashfa</span>
            <span className="text-gray-600">Hospital</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Madrasa</span>
            <span className="text-gray-600">School</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Mat3am</span>
            <span className="text-gray-600">Restaurant</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
            <span className="font-medium text-gray-800">Bank</span>
            <span className="text-gray-600">Bank</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Farmasiya</span>
            <span className="text-gray-600">Pharmacy</span>
          </div>
        </div>
      </div>
    </div>
  );
}