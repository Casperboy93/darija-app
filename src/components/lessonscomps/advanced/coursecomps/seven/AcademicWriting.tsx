"use client";

import React from 'react';

export default function AcademicWriting() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Academic Writing Patterns
      </h2>
      
      <p className="text-gray-700 mb-6">Master formal academic writing structures in Darija:</p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Sample Academic Paragraph</h3>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="mb-2">إن دراسة الظواهر الاجتماعية تتطلب منهجية علمية دقيقة. من خلال تحليل البيانات المتوفرة، يمكننا أن نلاحظ أن هناك تغيرات جذرية في بنية المجتمع المغربي خلال العقود الأخيرة. هذه التغيرات لا تقتصر على الجانب الاقتصادي فحسب، بل تشمل أيضا الجوانب الثقافية والاجتماعية.</p>
          </div>
          <div className="text-gray-600 italic text-sm">
            <p>The study of social phenomena requires precise scientific methodology. Through analyzing available data, we can observe that there are radical changes in the structure of Moroccan society during recent decades. These changes are not limited to the economic aspect only, but also include cultural and social aspects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}