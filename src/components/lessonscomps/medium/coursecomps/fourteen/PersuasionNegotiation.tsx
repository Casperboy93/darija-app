"use client";

import React from 'react';

export default function PersuasionNegotiation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Persuasion and Negotiation
      </h2>
      
      <p className="text-gray-700 mb-6">Master the art of persuasion and effective negotiation techniques.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Mā raʾyak fī</p>
            <span className="text-2xl">🤔</span>
          </div>
          <p className="text-gray-600">What do you think about</p>
          <p className="text-sm text-gray-500 mt-1">ما رأيك في</p>
          <p className="text-xs text-red-600 mt-2">Seek opinion/agreement</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hal yumkinunā an</p>
            <span className="text-2xl">🤝</span>
          </div>
          <p className="text-gray-600">Can we</p>
          <p className="text-sm text-gray-500 mt-1">هل يمكننا أن</p>
          <p className="text-xs text-red-600 mt-2">Suggest compromise</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Anā mutaʾakkid anna</p>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-gray-600">I am sure that</p>
          <p className="text-sm text-gray-500 mt-1">أنا متأكد أن</p>
          <p className="text-xs text-red-600 mt-2">Express confidence</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lākin idhā</p>
            <span className="text-2xl">⚖️</span>
          </div>
          <p className="text-gray-600">But if</p>
          <p className="text-sm text-gray-500 mt-1">لكن إذا</p>
          <p className="text-xs text-red-600 mt-2">Present conditions</p>
        </div>
      </div>
    </div>
  );
}