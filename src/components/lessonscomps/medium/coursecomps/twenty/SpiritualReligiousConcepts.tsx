"use client";

import React from 'react';

export default function SpiritualReligiousConcepts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Spiritual and Religious Concepts
      </h2>
      
      <p className="text-gray-700 mb-6">Advanced vocabulary for discussing spirituality and religious philosophy.</p>
      
      <div className="space-y-4">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-3">Spiritual States</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Fanaʾ</span>
              <span className="text-gray-600">Spiritual annihilation (فناء)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Baqaʾ</span>
              <span className="text-gray-600">Spiritual subsistence (بقاء)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Hal</span>
              <span className="text-gray-600">Spiritual state (حال)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-yellow-200 rounded-lg">
              <span className="font-medium text-gray-800">Maqam</span>
              <span className="text-gray-600">Spiritual station (مقام)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}