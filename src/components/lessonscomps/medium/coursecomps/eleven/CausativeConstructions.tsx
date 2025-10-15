"use client";

import React from 'react';

export default function CausativeConstructions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Causative Constructions
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to express causing someone to do something or having something done.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Khallit</p>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-gray-600">I made/let (someone do)</p>
          <p className="text-sm text-gray-500 mt-1">خليت</p>
          <p className="text-xs text-red-600 mt-2">Khallitu yakul - I made him eat</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tlabt</p>
            <span className="text-2xl">🙏</span>
          </div>
          <p className="text-gray-600">I asked (someone to do)</p>
          <p className="text-sm text-gray-500 mt-1">طلبت</p>
          <p className="text-xs text-red-600 mt-2">Tlabt minnu yaji - I asked him to come</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ammart</p>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600">I ordered (someone to do)</p>
          <p className="text-sm text-gray-500 mt-1">أمرت</p>
          <p className="text-xs text-red-600 mt-2">Ammart bih yruh - I ordered him to go</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sa'adt</p>
            <span className="text-2xl">🤝</span>
          </div>
          <p className="text-gray-600">I helped (someone do)</p>
          <p className="text-sm text-gray-500 mt-1">ساعدت</p>
          <p className="text-xs text-red-600 mt-2">Sa'adtu yafham - I helped him understand</p>
        </div>
      </div>
    </div>
  );
}