"use client";

import React from 'react';

export default function NarrativeTechniques() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Advanced Narrative Techniques
      </h2>
      
      <p className="text-gray-700 mb-6">Master sophisticated storytelling techniques:</p>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Building Suspense</h3>
          <div className="space-y-2">
            <p><span className="font-medium">فجأة...</span> - Fuj2atan... (Suddenly...)</p>
            <p><span className="font-medium">في تلك اللحظة</span> - Fi tilka l-lahza (At that moment)</p>
            <p><span className="font-medium">لم يكن يعلم أن</span> - Lam yakun ya3lam anna (He didn't know that)</p>
            <p><span className="font-medium">كان الخطر يقترب</span> - Kan al-khatar yaqtarib (Danger was approaching)</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Emotional Transitions</h3>
          <div className="space-y-2">
            <p><span className="font-medium">بعد كل هذا العذاب</span> - Ba3da kull hadha l-3adhab (After all this suffering)</p>
            <p><span className="font-medium">أخيرا وجد السعادة</span> - Akhiran wajada s-sa3ada (Finally he found happiness)</p>
            <p><span className="font-medium">تغيرت حياته تماما</span> - Taghayyarat hayatuh tamaman (His life changed completely)</p>
            <p><span className="font-medium">من ذلك اليوم</span> - Min dhalik al-yawm (From that day)</p>
          </div>
        </div>
      </div>
    </div>
  );
}