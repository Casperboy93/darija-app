"use client";

import React from 'react';

export default function AcademicDegreesQualifications() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Academic Degrees and Qualifications
      </h2>
      
      <p className="text-gray-700 mb-6">Different academic degrees and professional qualifications.</p>
      
      <div className="space-y-4">
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3">University Degrees</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Shahadat al-bakaluriya</span>
              <span className="text-gray-600">Bachelor's degree (شهادة البكالوريا)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Shahadat al-laysans</span>
              <span className="text-gray-600">License degree (شهادة الليسانس)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Shahadat al-majistir</span>
              <span className="text-gray-600">Master's degree (شهادة الماجستير)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-teal-200 rounded-lg">
              <span className="font-medium text-gray-800">Shahadat ad-dukturah</span>
              <span className="text-gray-600">PhD degree (شهادة الدكتوراه)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}