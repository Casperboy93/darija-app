"use client";

import React from 'react';

export default function TechDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Tech Innovation Conference
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Layla:</p>
            <p className="text-gray-700">Al-dhakaʾ al-istinaʿi sayughayyir jamiʿ al-sinaʿat fi al-ʿuqud al-qadima.</p>
            <p className="text-sm text-gray-500 mt-1">Artificial intelligence will transform all industries in the coming decades.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Omar:</p>
            <p className="text-gray-700">Naʿam, wa lakin yajibu an nadaʿ qawanin li-daman al-amn wa al-khususiyya.</p>
            <p className="text-sm text-gray-500 mt-1">Yes, but we must establish laws to ensure security and privacy.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Layla:</p>
            <p className="text-gray-700">Al-hasub al-kwanti sayahull mushkilat maʿqada lam nakun natasawwar hallaha.</p>
            <p className="text-sm text-gray-500 mt-1">Quantum computing will solve complex problems we couldn't imagine solving.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Omar:</p>
            <p className="text-gray-700">Hadha yatatallab istithmarat kabira fi at-taʿlim wa at-tadrib at-tiqni.</p>
            <p className="text-sm text-gray-500 mt-1">This requires major investments in education and technical training.</p>
          </div>
        </div>
      </div>
    </div>
  );
}