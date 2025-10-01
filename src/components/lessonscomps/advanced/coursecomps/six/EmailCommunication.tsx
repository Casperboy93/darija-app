"use client";

import React from 'react';

export default function EmailCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Professional Email & Written Communication
      </h2>
      
      <p className="text-gray-700 mb-6">Learn formal written communication patterns in Darija:</p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Sample Business Email</h3>
        <div className="space-y-3 text-sm">
          <p><span className="font-medium">Subject:</span> بخصوص الاجتماع ديال غدا - Bi-khusus l-ijtima3 dyal ghudda</p>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="mb-2">السلام عليكم ورحمة الله وبركاته</p>
            <p className="mb-2">أستاذ محمد المحترم،</p>
            <p className="mb-2">أكتب لكم بخصوص الاجتماع المقرر غدا في الساعة العاشرة صباحا.</p>
            <p className="mb-2">أرجو التأكيد على الحضور وإحضار التقارير المطلوبة.</p>
            <p className="mb-2">مع فائق الاحترام والتقدير</p>
            <p>أحمد الإدريسي</p>
          </div>
          <div className="text-gray-600 italic text-xs mt-4">
            <p>Peace be upon you,</p>
            <p>Respected Mr. Mohammed,</p>
            <p>I am writing regarding tomorrow's meeting scheduled at 10 AM.</p>
            <p>Please confirm attendance and bring the required reports.</p>
            <p>With highest respect and appreciation,</p>
            <p>Ahmed Al-Idrisi</p>
          </div>
        </div>
      </div>
    </div>
  );
}