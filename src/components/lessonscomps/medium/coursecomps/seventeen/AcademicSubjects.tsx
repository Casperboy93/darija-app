"use client";

import React from 'react';

export default function AcademicSubjects() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Academic Subjects
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for academic subjects and fields of study.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Riyadiyyat</p>
            <span className="text-2xl">🔢</span>
          </div>
          <p className="text-gray-600">Mathematics</p>
          <p className="text-sm text-gray-500 mt-1">رياضيات</p>
          <p className="text-xs text-blue-600 mt-2">Numbers and calculations</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">ʿUlum</p>
            <span className="text-2xl">🔬</span>
          </div>
          <p className="text-gray-600">Science</p>
          <p className="text-sm text-gray-500 mt-1">علوم</p>
          <p className="text-xs text-blue-600 mt-2">Natural sciences</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tarikh</p>
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-gray-600">History</p>
          <p className="text-sm text-gray-500 mt-1">تاريخ</p>
          <p className="text-xs text-blue-600 mt-2">Historical studies</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jughrafiya</p>
            <span className="text-2xl">🌍</span>
          </div>
          <p className="text-gray-600">Geography</p>
          <p className="text-sm text-gray-500 mt-1">جغرافيا</p>
          <p className="text-xs text-blue-600 mt-2">Earth and places</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Lughat</p>
            <span className="text-2xl">🗣️</span>
          </div>
          <p className="text-gray-600">Languages</p>
          <p className="text-sm text-gray-500 mt-1">لغات</p>
          <p className="text-xs text-blue-600 mt-2">Language studies</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Falsafa</p>
            <span className="text-2xl">🤔</span>
          </div>
          <p className="text-gray-600">Philosophy</p>
          <p className="text-sm text-gray-500 mt-1">فلسفة</p>
          <p className="text-xs text-blue-600 mt-2">Critical thinking</p>
        </div>
      </div>
    </div>
  );
}