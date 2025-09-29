"use client";

import React from 'react';

export default function TechnologyProblemsSolutions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Technology Problems and Solutions
      </h2>
      
      <p className="text-gray-700 mb-6">Troubleshoot technology issues and find solutions in Arabic.</p>
      
      <div className="space-y-4">
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3">Common Problems</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Lā yaʿmal</span>
                <p className="text-sm text-gray-600">Doesn't work</p>
              </div>
              <span className="text-gray-600">لا يعمل</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Inqaṭaʿa al-ittiṣāl</span>
                <p className="text-sm text-gray-600">Connection lost</p>
              </div>
              <span className="text-gray-600">انقطع الاتصال</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Baṭīʾ jiddan</span>
                <p className="text-sm text-gray-600">Very slow</p>
              </div>
              <span className="text-gray-600">بطيء جداً</span>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3">Solutions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Iʿādat tashghīl</span>
                <p className="text-sm text-gray-600">Restart</p>
              </div>
              <span className="text-gray-600">إعادة تشغيل</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Taḥdīth</span>
                <p className="text-sm text-gray-600">Update</p>
              </div>
              <span className="text-gray-600">تحديث</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Iṣlāḥ</span>
                <p className="text-sm text-gray-600">Fix/Repair</p>
              </div>
              <span className="text-gray-600">إصلاح</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <div>
                <span className="font-medium text-gray-800">Faḥṣ al-ittiṣāl</span>
                <p className="text-sm text-gray-600">Check connection</p>
              </div>
              <span className="text-gray-600">فحص الاتصال</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}