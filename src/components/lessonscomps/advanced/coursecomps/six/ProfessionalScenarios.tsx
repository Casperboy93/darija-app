"use client";

import React from 'react';

export default function ProfessionalScenarios() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Professional Scenarios
      </h2>
      
      <p className="text-gray-700 mb-6">Practice common workplace situations with appropriate language:</p>
      
      <div className="space-y-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Job Interview</h3>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-blue-800 mb-2">Interviewer:</p>
            <p className="text-gray-700 mb-3">حدثني عن نفسك - Haddithni 3an nafsak (Tell me about yourself)</p>
            
            <p className="font-medium text-green-800 mb-2">Candidate:</p>
            <p className="text-gray-700">اسمي أحمد، عندي خبرة خمس سنوات في المجال ديال التسويق. تخرجت من الجامعة ديال الرباط وخدمت في شركات مختلفة.</p>
            <p className="text-sm text-gray-600 italic">My name is Ahmed, I have five years of experience in marketing. I graduated from Rabat University and worked in different companies.</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Negotiating a Deal</h3>
          <div className="bg-green-50 p-4 rounded-md">
            <p className="font-medium text-blue-800 mb-2">Client:</p>
            <p className="text-gray-700 mb-3">الثمن غالي بزاف - Th-thaman ghali bzaf (The price is too high)</p>
            
            <p className="font-medium text-green-800 mb-2">Salesperson:</p>
            <p className="text-gray-700">فهمت موقفك، ولكن الجودة ديالنا عالية. ممكن نوصلو لحل يرضي الجميع.</p>
            <p className="text-sm text-gray-600 italic">I understand your position, but our quality is high. We can reach a solution that satisfies everyone.</p>
          </div>
        </div>
      </div>
    </div>
  );
}