"use client";

import React from 'react';

export default function AbstractReasoning() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Abstract Reasoning
      </h2>
      
      <div className="space-y-6">
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-xl font-bold text-yellow-800 mb-4">Expressing Complex Ideas</h3>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-yellow-700 mb-3">Logical Reasoning Phrases</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border">
                    <p><span className="font-medium">من جهة...</span> - mn jiha... (on one hand...)</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border">
                    <p><span className="font-medium">من جهة أخرى...</span> - mn jiha ukhra... (on the other hand...)</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border">
                    <p><span className="font-medium">بالتالي...</span> - bit-tali... (therefore...)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border">
                    <p><span className="font-medium">إذن...</span> - idhan... (thus...)</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border">
                    <p><span className="font-medium">لكن...</span> - lakin... (however...)</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border">
                    <p><span className="font-medium">رغم ذلك...</span> - raghm dhalik... (nevertheless...)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-yellow-700 mb-3">Abstract Concepts</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-300 pl-4">
                  <p className="font-medium">هاد الفكرة معقدة ولكن مهمة.</p>
                  <p className="text-sm text-gray-600 italic">Had l-fikra mu3aqqada walakin muhimma.</p>
                  <p className="text-sm text-gray-500">(This idea is complex but important.)</p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <p className="font-medium">كانشوف الموضوع من زاوية مختلفة.</p>
                  <p className="text-sm text-gray-600 italic">Kanshuf l-mawdu3 mn zawiya mukhtalifa.</p>
                  <p className="text-sm text-gray-500">(I see the topic from a different angle.)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}