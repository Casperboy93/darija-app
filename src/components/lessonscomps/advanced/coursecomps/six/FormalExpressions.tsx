"use client";

import React from 'react';

export default function FormalExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Formal Professional Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">Key phrases for professional communication and business interactions:</p>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Opening a Meeting</h3>
          <div className="space-y-2">
            <p><span className="font-medium">نبداو الاجتماع</span> - Nbdaw l-ijtima3 (Let's start the meeting)</p>
            <p><span className="font-medium">شكرا ليكم على الحضور</span> - Shukran likum 3la l-hudur (Thank you for attending)</p>
            <p><span className="font-medium">اليوم غادي نناقشو</span> - Lyum ghadi nnaaqshu (Today we will discuss)</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Expressing Opinions Professionally</h3>
          <div className="space-y-2">
            <p><span className="font-medium">من وجهة نظري</span> - Min wijhat nazari (From my point of view)</p>
            <p><span className="font-medium">أعتقد أن</span> - A3taqid anna (I believe that)</p>
            <p><span className="font-medium">بصراحة</span> - Bi-saraha (Frankly speaking)</p>
            <p><span className="font-medium">إذا سمحتو</span> - Idha samahtu (If you allow me)</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Making Requests & Suggestions</h3>
          <div className="space-y-2">
            <p><span className="font-medium">ممكن نقترح</span> - Mumkin naqtarih (May I suggest)</p>
            <p><span className="font-medium">واش ممكن</span> - Wash mumkin (Is it possible)</p>
            <p><span className="font-medium">أقترح أن</span> - Aqtarih anna (I suggest that)</p>
            <p><span className="font-medium">لو سمحتو</span> - Law samahtu (Please/If you would)</p>
          </div>
        </div>
      </div>
    </div>
  );
}