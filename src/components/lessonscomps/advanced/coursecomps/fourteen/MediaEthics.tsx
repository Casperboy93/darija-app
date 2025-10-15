"use client";

import React from 'react';

export default function MediaEthics() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Media Ethics and Standards
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Professional Standards</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Journalistic Principles</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Sidq</p>
                <p className="text-xs text-gray-600">Truthfulness</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mawduʿiyya</p>
                <p className="text-xs text-gray-600">Objectivity</p>
              </div>
              <div>
                <p className="text-sm font-medium">ʿAdala</p>
                <p className="text-xs text-gray-600">Fairness</p>
              </div>
              <div>
                <p className="text-sm font-medium">Masʾuliyya</p>
                <p className="text-xs text-gray-600">Responsibility</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Ethical Considerations</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Khususiyya</p>
                <p className="text-xs text-gray-600">Privacy</p>
              </div>
              <div>
                <p className="text-sm font-medium">Sirr mihni</p>
                <p className="text-xs text-gray-600">Professional secrecy</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tadarub masalih</p>
                <p className="text-xs text-gray-600">Conflict of interest</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tashih akhtaʾ</p>
                <p className="text-xs text-gray-600">Correction of errors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}