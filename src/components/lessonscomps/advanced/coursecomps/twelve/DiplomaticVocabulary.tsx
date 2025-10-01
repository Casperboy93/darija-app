"use client";

import React from 'react';

export default function DiplomaticVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Diplomatic Vocabulary
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Key Diplomatic Terms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Negotiations</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Tafāwuḍ:</span> Negotiation</p>
              <p><span className="font-semibold">Ittifāqiyya:</span> Agreement</p>
              <p><span className="font-semibold">Tasāwī:</span> Compromise</p>
              <p><span className="font-semibold">Ḥall wasat:</span> Middle solution</p>
              <p><span className="font-semibold">Tawāfuq:</span> Consensus</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Official Relations</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Siyāsa:</span> Policy</p>
              <p><span className="font-semibold">Diplomāsiyya:</span> Diplomacy</p>
              <p><span className="font-semibold">ʿAlāqāt rasmiyya:</span> Official relations</p>
              <p><span className="font-semibold">Taʿāwun:</span> Cooperation</p>
              <p><span className="font-semibold">Sharāka:</span> Partnership</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Formal Procedures</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ijrāʾāt:</span> Procedures</p>
              <p><span className="font-semibold">Brūtūkūl:</span> Protocol</p>
              <p><span className="font-semibold">Marāsim:</span> Ceremonies</p>
              <p><span className="font-semibold">Tanẓīm:</span> Organization</p>
              <p><span className="font-semibold">Tanfīdh:</span> Implementation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}