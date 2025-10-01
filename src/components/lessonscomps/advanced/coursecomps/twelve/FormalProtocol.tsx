"use client";

import React from 'react';

export default function FormalProtocol() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Formal Greetings and Protocol
      </h2>
      
      <p className="text-gray-700 mb-6">Essential formal expressions for diplomatic and official encounters.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Official Greetings</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Formal</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Ahlan wa sahlan bikum:</span> Welcome (formal)</p>
            <p className="text-sm"><span className="font-semibold">Tasharrafna bi ziyāratikum:</span> We are honored by your visit</p>
            <p className="text-sm"><span className="font-semibold">Bi kull iḥtirām:</span> With all respect</p>
            <p className="text-sm"><span className="font-semibold">Fī khidmatikum:</span> At your service</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ceremonial Language</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ceremonial</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Bi hādhihi al-munāsaba:</span> On this occasion</p>
            <p className="text-sm"><span className="font-semibold">Yusarrunā an nu'lin:</span> We are pleased to announce</p>
            <p className="text-sm"><span className="font-semibold">Fī ḥaḍrat as-sāda:</span> In the presence of distinguished guests</p>
            <p className="text-sm"><span className="font-semibold">Takrīman li:</span> In honor of</p>
          </div>
        </div>
      </div>
    </div>
  );
}