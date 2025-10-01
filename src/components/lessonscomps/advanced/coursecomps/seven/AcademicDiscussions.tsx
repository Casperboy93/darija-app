"use client";

import React from 'react';

export default function AcademicDiscussions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Academic Discussion Examples
      </h2>
      
      <p className="text-gray-700 mb-6">Practice sophisticated academic conversations:</p>
      
      <div className="space-y-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Philosophy Discussion</h3>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-blue-800 mb-2">Student A:</p>
            <p className="text-gray-700 mb-3">واش كاتعتقد أن الحرية مطلقة ولا نسبية؟</p>
            <p className="text-sm text-gray-600 italic mb-3">Do you think freedom is absolute or relative?</p>
            
            <p className="font-medium text-green-800 mb-2">Student B:</p>
            <p className="text-gray-700 mb-2">من وجهة نظري، الحرية نسبية. لأن حريتك تنتهي عندما تبدأ حرية الآخرين. هذا المفهوم معقد ويحتاج تحليل عميق.</p>
            <p className="text-sm text-gray-600 italic">From my perspective, freedom is relative. Because your freedom ends where others' freedom begins. This concept is complex and needs deep analysis.</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Scientific Debate</h3>
          <div className="bg-green-50 p-4 rounded-md">
            <p className="font-medium text-blue-800 mb-2">Researcher:</p>
            <p className="text-gray-700 mb-3">النتائج ديال البحث كتبين أن هناك علاقة قوية بين المتغيرين</p>
            <p className="text-sm text-gray-600 italic mb-3">The research results show there's a strong relationship between the two variables</p>
            
            <p className="font-medium text-green-800 mb-2">Colleague:</p>
            <p className="text-gray-700 mb-2">ولكن واش العينة كافية؟ من المهم أن نأخذ بعين الاعتبار العوامل الخارجية التي قد تؤثر على النتائج.</p>
            <p className="text-sm text-gray-600 italic">But is the sample sufficient? It's important to consider external factors that might affect the results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}