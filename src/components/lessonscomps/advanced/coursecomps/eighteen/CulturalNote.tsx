"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Cultural Note: Morocco's Medical Excellence
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <div className="bg-white p-6 rounded-lg border border-red-200">
          <h3 className="font-bold text-lg text-red-800 mb-4">Medical Innovation in Morocco</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Morocco has made significant strides in healthcare and medical research, establishing itself as a regional leader in medical innovation. The country's medical schools and research institutions contribute to global medical knowledge while addressing local health challenges.
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">Key Medical Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Mohammed VI University Hospital:</strong> Advanced cardiac surgery and organ transplantation</li>
                <li><strong>Rabat Medical School:</strong> Leading research in infectious diseases and tropical medicine</li>
                <li><strong>Casablanca Oncology Center:</strong> Cancer research and innovative treatment protocols</li>
                <li><strong>Traditional Medicine Integration:</strong> Research on medicinal plants and traditional remedies</li>
              </ul>
            </div>
            
            <p>
              The vocabulary you've learned enables you to discuss these medical advances and participate in international medical conferences, contributing to Morocco's growing reputation in global healthcare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}