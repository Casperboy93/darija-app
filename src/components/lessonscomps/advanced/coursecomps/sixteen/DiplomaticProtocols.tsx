"use client";

import React from 'react';

export default function DiplomaticProtocols() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Diplomatic Protocols and Procedures
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Diplomatic Hierarchy and Titles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Diplomatic Ranks</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Safir:</span> Ambassador</p>
              <p><span className="font-semibold">Qunsul:</span> Consul</p>
              <p><span className="font-semibold">Mumaththil:</span> Representative</p>
              <p><span className="font-semibold">Mubʿuth:</span> Envoy</p>
              <p><span className="font-semibold">Mulhaq:</span> Attache</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Diplomatic Missions</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Safara:</span> Embassy</p>
              <p><span className="font-semibold">Qunsuliyya:</span> Consulate</p>
              <p><span className="font-semibold">Baʿtha:</span> Mission</p>
              <p><span className="font-semibold">Wafd:</span> Delegation</p>
              <p><span className="font-semibold">Maktab irtibat:</span> Liaison office</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Diplomatic Documents</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Jawaz siyasi:</span> Diplomatic passport</p>
              <p><span className="font-semibold">Iʿtimad:</span> Credentials</p>
              <p><span className="font-semibold">Mudhakkira:</span> Memorandum</p>
              <p><span className="font-semibold">Nota:</span> Diplomatic note</p>
              <p><span className="font-semibold">Barutukul:</span> Protocol</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}