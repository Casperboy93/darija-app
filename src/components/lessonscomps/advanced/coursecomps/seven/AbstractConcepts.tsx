"use client";

import React from 'react';

export default function AbstractConcepts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Discussing Abstract Concepts
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to express complex and abstract ideas in Darija:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Philosophy & Ethics</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">العدالة</span> - Al-3adala (Justice)</p>
            <p><span className="font-medium">الأخلاق</span> - Al-akhlaq (Ethics)</p>
            <p><span className="font-medium">الوجود</span> - Al-wujud (Existence)</p>
            <p><span className="font-medium">المعنى</span> - Al-ma3na (Meaning)</p>
            <p><span className="font-medium">الحقيقة</span> - Al-haqiqa (Truth)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Social Sciences</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">المجتمع</span> - Al-mujtama3 (Society)</p>
            <p><span className="font-medium">الثقافة</span> - Ath-thaqafa (Culture)</p>
            <p><span className="font-medium">الهوية</span> - Al-hawiyya (Identity)</p>
            <p><span className="font-medium">التطور</span> - At-tatawwur (Evolution/Development)</p>
            <p><span className="font-medium">التغيير</span> - At-taghyir (Change)</p>
          </div>
        </div>
      </div>
    </div>
  );
}