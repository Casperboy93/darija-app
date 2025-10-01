"use client";

import React from 'react';

export default function GlobalLeadership() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Global Leadership and Management
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for international leadership and management roles.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Leadership Qualities</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Leadership</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Qiyāda ʿālamiyya:</span> Global leadership</p>
            <p className="text-sm"><span className="font-semibold">Ruʾya istirātījiyya:</span> Strategic vision</p>
            <p className="text-sm"><span className="font-semibold">Qiyāda taḥwīliyya:</span> Transformational leadership</p>
            <p className="text-sm"><span className="font-semibold">Dhakāʾ ʿāṭifī:</span> Emotional intelligence</p>
            <p className="text-sm"><span className="font-semibold">Qiyāda thaqāfiyya:</span> Cultural leadership</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Management Skills</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Management</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Idāra mutaʿaddidat thaqāfāt:</span> Multicultural management</p>
            <p className="text-sm"><span className="font-semibold">Takhtīṭ istirātījī:</span> Strategic planning</p>
            <p className="text-sm"><span className="font-semibold">Idārat taghyīr:</span> Change management</p>
            <p className="text-sm"><span className="font-semibold">Qiyādat farīq:</span> Team leadership</p>
            <p className="text-sm"><span className="font-semibold">Ittikhadh qarārāt:</span> Decision making</p>
          </div>
        </div>
      </div>
    </div>
  );
}