"use client";

import React from 'react';

export default function MedicalTechnology() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Medical Technology and Innovation
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-teal-800 mb-4">Advanced Medical Technologies</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">Diagnostic Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Taswir tibbi</p>
                <p className="text-xs text-gray-600">Medical imaging</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ranin maghnatisi</p>
                <p className="text-xs text-gray-600">MRI</p>
              </div>
              <div>
                <p className="text-sm font-medium">Taswir tabaqi</p>
                <p className="text-xs text-gray-600">CT scan</p>
              </div>
              <div>
                <p className="text-sm font-medium">Fawq sawti</p>
                <p className="text-xs text-gray-600">Ultrasound</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">Treatment Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Jiraha rubutiyya</p>
                <p className="text-xs text-gray-600">Robotic surgery</p>
              </div>
              <div>
                <p className="text-sm font-medium">ʿIlaj ishʿaʿi</p>
                <p className="text-xs text-gray-600">Radiation therapy</p>
              </div>
              <div>
                <p className="text-sm font-medium">ʿIlaj jini</p>
                <p className="text-xs text-gray-600">Gene therapy</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ziraʿa aʿdaʾ</p>
                <p className="text-xs text-gray-600">Organ transplant</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">Digital Health</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Tibb raqami</p>
                <p className="text-xs text-gray-600">Digital medicine</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tibb ʿan buʿd</p>
                <p className="text-xs text-gray-600">Telemedicine</p>
              </div>
              <div>
                <p className="text-sm font-medium">Dhakaʾ istinaʿi</p>
                <p className="text-xs text-gray-600">Artificial intelligence</p>
              </div>
              <div>
                <p className="text-sm font-medium">Sijillat iliktruniyya</p>
                <p className="text-xs text-gray-600">Electronic records</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}