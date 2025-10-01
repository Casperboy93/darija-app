"use client";

import React from 'react';

export default function BusinessVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Business Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for professional environments and business discussions:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Company & Organization</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Company</span>
              <span className="font-medium">شركة - Shirka</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Business</span>
              <span className="font-medium">تجارة - Tijara</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Office</span>
              <span className="font-medium">مكتب - Maktab</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Manager</span>
              <span className="font-medium">مدير - Mudir</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Employee</span>
              <span className="font-medium">موظف - Muwazzaf</span>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Meetings & Presentations</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Meeting</span>
              <span className="font-medium">اجتماع - Ijtima3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Presentation</span>
              <span className="font-medium">عرض - 3ard</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Report</span>
              <span className="font-medium">تقرير - Taqrir</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Project</span>
              <span className="font-medium">مشروع - Mashru3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Deadline</span>
              <span className="font-medium">موعد نهائي - Maw3id niha2i</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}