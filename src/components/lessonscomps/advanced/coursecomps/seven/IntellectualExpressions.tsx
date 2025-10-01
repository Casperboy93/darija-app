"use client";

import React from 'react';

export default function IntellectualExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Intellectual Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">Sophisticated expressions for academic and intellectual discussions:</p>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Presenting Arguments</h3>
          <div className="space-y-2">
            <p><span className="font-medium">من ناحية أخرى</span> - Min nahiya ukhra (On the other hand)</p>
            <p><span className="font-medium">بناء على ذلك</span> - Bina2an 3ala dhalik (Based on that)</p>
            <p><span className="font-medium">في المقابل</span> - Fi l-muqabil (In contrast)</p>
            <p><span className="font-medium">علاوة على ذلك</span> - 3alawatan 3ala dhalik (Furthermore)</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Analyzing & Evaluating</h3>
          <div className="space-y-2">
            <p><span className="font-medium">إذا نظرنا إلى</span> - Idha nazarna ila (If we look at)</p>
            <p><span className="font-medium">يمكن القول أن</span> - Yumkin al-qawl anna (It can be said that)</p>
            <p><span className="font-medium">من المهم أن نلاحظ</span> - Min al-muhimm an nulahiz (It's important to note)</p>
            <p><span className="font-medium">هذا يشير إلى</span> - Hadha yushir ila (This indicates)</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Drawing Conclusions</h3>
          <div className="space-y-2">
            <p><span className="font-medium">في النهاية</span> - Fi n-nihaya (In the end)</p>
            <p><span className="font-medium">خلاصة القول</span> - Khulasatu l-qawl (In conclusion)</p>
            <p><span className="font-medium">مما سبق نستنتج</span> - Mimma sabaqa nastantij (From the above we conclude)</p>
            <p><span className="font-medium">وبالتالي</span> - Wa bi-t-tali (Therefore)</p>
          </div>
        </div>
      </div>
    </div>
  );
}