"use client";

import React from 'react';

export default function EducationalInstitutions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Educational Institutions
      </h2>
      
      <p className="text-gray-700 mb-6">Different levels and types of educational institutions in Morocco.</p>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Primary and Secondary Education</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Madrasa ibtidāʾiyya</span>
              <span className="text-gray-600">Primary school (مدرسة ابتدائية)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Madrasa iʿdādiyya</span>
              <span className="text-gray-600">Middle school (مدرسة إعدادية)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Thānawiyya</span>
              <span className="text-gray-600">High school (ثانوية)</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Higher Education</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Jāmiʿa</span>
              <span className="text-gray-600">University (جامعة)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Maʿhad ʿālī</span>
              <span className="text-gray-600">Higher institute (معهد عالي)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Kulliyya</span>
              <span className="text-gray-600">Faculty/College (كلية)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}