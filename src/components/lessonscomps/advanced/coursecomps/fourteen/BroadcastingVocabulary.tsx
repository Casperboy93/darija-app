"use client";

import React from 'react';

export default function BroadcastingVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Broadcasting and Production
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">TV and Radio Production</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Studio Operations</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Istūdyū:</span> Studio</p>
              <p><span className="font-semibold">Kāmīrā:</span> Camera</p>
              <p><span className="font-semibold">Mikrūfūn:</span> Microphone</p>
              <p><span className="font-semibold">Iḍāʾa:</span> Lighting</p>
              <p><span className="font-semibold">Mukhrij:</span> Director</p>
              <p><span className="font-semibold">Muqaddim:</span> Presenter/Host</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Live Broadcasting</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Barāmij mubāshira:</span> Live programs</p>
              <p><span className="font-semibold">Naql mubāshir:</span> Live broadcast</p>
              <p><span className="font-semibold">Taqrīr mīdānī:</span> Field report</p>
              <p><span className="font-semibold">Muraslūn:</span> Correspondents</p>
              <p><span className="font-semibold">Nashrat akhbār:</span> News bulletin</p>
              <p><span className="font-semibold">Faṣl iʿlānī:</span> Commercial break</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}