"use client";

import React from 'react';

export default function SocialEconomicIssues() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Social and Economic Issues
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary for discussing social problems and economic policies.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Baṭāla</p>
            <span className="text-2xl">📉</span>
          </div>
          <p className="text-gray-600">Unemployment</p>
          <p className="text-sm text-gray-500 mt-1">بطالة</p>
          <p className="text-xs text-teal-600 mt-2">Economic issue</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Faqr</p>
            <span className="text-2xl">💸</span>
          </div>
          <p className="text-gray-600">Poverty</p>
          <p className="text-sm text-gray-500 mt-1">فقر</p>
          <p className="text-xs text-teal-600 mt-2">Social issue</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tanmiya</p>
            <span className="text-2xl">📈</span>
          </div>
          <p className="text-gray-600">Development</p>
          <p className="text-sm text-gray-500 mt-1">تنمية</p>
          <p className="text-xs text-teal-600 mt-2">Economic growth</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">ʿAdāla ijtimāʿiyya</p>
            <span className="text-2xl">⚖️</span>
          </div>
          <p className="text-gray-600">Social justice</p>
          <p className="text-sm text-gray-500 mt-1">عدالة اجتماعية</p>
          <p className="text-xs text-teal-600 mt-2">Equality and fairness</p>
        </div>
      </div>
    </div>
  );
}