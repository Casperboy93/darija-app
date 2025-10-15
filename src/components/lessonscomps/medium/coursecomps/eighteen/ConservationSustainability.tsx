"use client";

import React from 'react';

export default function ConservationSustainability() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Conservation and Sustainability
      </h2>
      
      <p className="text-gray-700 mb-6">Efforts to protect the environment and promote sustainable development.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Himaya</p>
            <span className="text-2xl">🛡️</span>
          </div>
          <p className="text-gray-600">Protection</p>
          <p className="text-sm text-gray-500 mt-1">حماية</p>
          <p className="text-xs text-teal-600 mt-2">Environmental protection</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Istidama</p>
            <span className="text-2xl">♻️</span>
          </div>
          <p className="text-gray-600">Sustainability</p>
          <p className="text-sm text-gray-500 mt-1">استدامة</p>
          <p className="text-xs text-teal-600 mt-2">Sustainable development</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Taqa mutajaddida</p>
            <span className="text-2xl">☀️</span>
          </div>
          <p className="text-gray-600">Renewable energy</p>
          <p className="text-sm text-gray-500 mt-1">طاقة متجددة</p>
          <p className="text-xs text-teal-600 mt-2">Solar and wind power</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tadwir</p>
            <span className="text-2xl">♻️</span>
          </div>
          <p className="text-gray-600">Recycling</p>
          <p className="text-sm text-gray-500 mt-1">تدوير</p>
          <p className="text-xs text-teal-600 mt-2">Waste recycling</p>
        </div>
      </div>
    </div>
  );
}