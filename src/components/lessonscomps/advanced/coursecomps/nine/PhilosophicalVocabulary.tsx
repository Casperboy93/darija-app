"use client";

import React from 'react';

export default function PhilosophicalVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Philosophical Vocabulary
      </h2>
      
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Essential Philosophical Terms</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 mb-3">Existence & Being</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <p><span className="font-medium">الوجود</span> - l-wujud (existence)</p>
                  <p className="text-sm text-gray-600">The fundamental concept of being</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p><span className="font-medium">الحقيقة</span> - l-haqiqa (truth/reality)</p>
                  <p className="text-sm text-gray-600">Ultimate truth or reality</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p><span className="font-medium">الجوهر</span> - l-jawhar (essence)</p>
                  <p className="text-sm text-gray-600">The essential nature of things</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 mb-3">Knowledge & Wisdom</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <p><span className="font-medium">المعرفة</span> - l-ma3rifa (knowledge)</p>
                  <p className="text-sm text-gray-600">Deep understanding and wisdom</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p><span className="font-medium">الحكمة</span> - l-hikma (wisdom)</p>
                  <p className="text-sm text-gray-600">Practical wisdom and insight</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p><span className="font-medium">الفهم</span> - l-fahm (understanding)</p>
                  <p className="text-sm text-gray-600">Comprehension and insight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-700 mb-3">Abstract Concepts</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded border">
              <p><span className="font-medium">العدالة</span> - l-3adala (justice)</p>
            </div>
            <div className="bg-white p-3 rounded border">
              <p><span className="font-medium">الحرية</span> - l-hurriya (freedom)</p>
            </div>
            <div className="bg-white p-3 rounded border">
              <p><span className="font-medium">المسؤولية</span> - l-mas'uliya (responsibility)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}