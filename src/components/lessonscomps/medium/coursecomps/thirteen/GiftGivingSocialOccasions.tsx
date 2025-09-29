"use client";

import React from 'react';

export default function GiftGivingSocialOccasions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Gift-Giving and Social Occasions
      </h2>
      
      <p className="text-gray-700 mb-6">Appropriate gifts and behavior for different social occasions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hadiyya</p>
            <span className="text-2xl">🎁</span>
          </div>
          <p className="text-gray-600">Gift</p>
          <p className="text-sm text-gray-500 mt-1">هدية</p>
          <p className="text-xs text-teal-600 mt-2">Bring when visiting</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ḥalwā</p>
            <span className="text-2xl">🍯</span>
          </div>
          <p className="text-gray-600">Sweets</p>
          <p className="text-sm text-gray-500 mt-1">حلوى</p>
          <p className="text-xs text-teal-600 mt-2">Popular gift choice</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Zafāf</p>
            <span className="text-2xl">💒</span>
          </div>
          <p className="text-gray-600">Wedding</p>
          <p className="text-sm text-gray-500 mt-1">زفاف</p>
          <p className="text-xs text-teal-600 mt-2">Bring money in envelope</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">ʿĪd</p>
            <span className="text-2xl">🎉</span>
          </div>
          <p className="text-gray-600">Holiday/Festival</p>
          <p className="text-sm text-gray-500 mt-1">عيد</p>
          <p className="text-xs text-teal-600 mt-2">Exchange greetings and gifts</p>
        </div>
      </div>
      
      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-teal-800 mb-3">Gift-Giving Etiquette</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
            Use both hands when giving or receiving gifts
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
            Don't open gifts immediately unless asked
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
            Express gratitude warmly
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
            Avoid giving alcohol or pork products
          </li>
        </ul>
      </div>
    </div>
  );
}