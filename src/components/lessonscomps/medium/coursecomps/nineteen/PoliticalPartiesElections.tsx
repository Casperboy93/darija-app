"use client";

import React from 'react';

export default function PoliticalPartiesElections() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Political Parties and Elections
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary for discussing democratic processes and political participation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Intikhābāt</p>
            <span className="text-2xl">🗳️</span>
          </div>
          <p className="text-gray-600">Elections</p>
          <p className="text-sm text-gray-500 mt-1">انتخابات</p>
          <p className="text-xs text-green-600 mt-2">Democratic process</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Taṣwīt</p>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-gray-600">Vote</p>
          <p className="text-sm text-gray-500 mt-1">تصويت</p>
          <p className="text-xs text-green-600 mt-2">Civic duty</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Murashshah</p>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-gray-600">Candidate</p>
          <p className="text-sm text-gray-500 mt-1">مرشح</p>
          <p className="text-xs text-green-600 mt-2">Running for office</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ḥizb siyāsī</p>
            <span className="text-2xl">🏛️</span>
          </div>
          <p className="text-gray-600">Political party</p>
          <p className="text-sm text-gray-500 mt-1">حزب سياسي</p>
          <p className="text-xs text-green-600 mt-2">Political organization</p>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-800 mb-4">Major Moroccan Political Parties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">PJD</h4>
            <p className="text-sm text-gray-600">Justice and Development Party</p>
            <p className="text-xs text-gray-500 mt-1">حزب العدالة والتنمية</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">RNI</h4>
            <p className="text-sm text-gray-600">National Rally of Independents</p>
            <p className="text-xs text-gray-500 mt-1">التجمع الوطني للأحرار</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">PAM</h4>
            <p className="text-sm text-gray-600">Authenticity and Modernity Party</p>
            <p className="text-xs text-gray-500 mt-1">حزب الأصالة والمعاصرة</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Istiqlal</h4>
            <p className="text-sm text-gray-600">Independence Party</p>
            <p className="text-xs text-gray-500 mt-1">حزب الاستقلال</p>
          </div>
        </div>
      </div>
    </div>
  );
}