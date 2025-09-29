"use client";

import React from 'react';

export default function WorkplaceCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Workplace Communication
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-3">Making Requests</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Mumkin t3āwnnī?:</span> Can you help me?</p>
            <p className="text-sm"><span className="font-semibold">Bghīt nṭlub minnak:</span> I want to ask you</p>
            <p className="text-sm"><span className="font-semibold">Wāsh mumkin...?:</span> Is it possible...?</p>
            <p className="text-sm"><span className="font-semibold">3afāk dir līya:</span> Please do for me</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-3">Giving Updates</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Mashrū3 māshī mazyan:</span> Project is going well</p>
            <p className="text-sm"><span className="font-semibold">Kammelt l 3amal:</span> I finished the work</p>
            <p className="text-sm"><span className="font-semibold">Bāqī kāyn mushkil:</span> There's still a problem</p>
            <p className="text-sm"><span className="font-semibold">Ḥtāj waqt zāyid:</span> Need more time</p>
          </div>
        </div>
      </div>
    </div>
  );
}