"use client";

import React from 'react';

export default function GlobalCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Global Communication Strategies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-pink-800 mb-3">Digital Communication</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-pink-700">Tawāṣul raqamī</p>
              <p className="text-gray-600 text-sm">Digital communication</p>
            </div>
            <div>
              <p className="font-semibold text-pink-700">Muʾtamarāt ʿan buʿd</p>
              <p className="text-gray-600 text-sm">Video conferences</p>
            </div>
            <div>
              <p className="font-semibold text-pink-700">Manāṣṣāt ʿālamiyya</p>
              <p className="text-gray-600 text-sm">Global platforms</p>
            </div>
            <div>
              <p className="font-semibold text-pink-700">Tawāṣul fawrī</p>
              <p className="text-gray-600 text-sm">Instant communication</p>
            </div>
          </div>
        </div>
        
        <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-pink-800 mb-3">Presentation Skills</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-pink-700">Taqdīm ʿālamī</p>
              <p className="text-gray-600 text-sm">Global presentation</p>
            </div>
            <div>
              <p className="font-semibold text-pink-700">Khuṭab ʿāmma</p>
              <p className="text-gray-600 text-sm">Public speaking</p>
            </div>
            <div>
              <p className="font-semibold text-pink-700">Tawāṣul muʾaththir</p>
              <p className="text-gray-600 text-sm">Impactful communication</p>
            </div>
            <div>
              <p className="font-semibold text-pink-700">Iqnāʿ jamhūr</p>
              <p className="text-gray-600 text-sm">Audience persuasion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}