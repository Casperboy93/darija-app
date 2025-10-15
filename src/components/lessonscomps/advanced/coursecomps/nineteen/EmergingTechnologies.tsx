"use client";

import React from 'react';

export default function EmergingTechnologies() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Emerging Technologies
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Next-Generation Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Quantum Computing</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Hasub kwanti:</span> Quantum computer</p>
              <p><span className="font-semibold">Fiziyaʾ kwantiyya:</span> Quantum physics</p>
              <p><span className="font-semibold">Khuwarizmiyyat kwantiyya:</span> Quantum algorithms</p>
              <p><span className="font-semibold">Tashabuk kwanti:</span> Quantum entanglement</p>
              <p><span className="font-semibold">Fawqiyya kwantiyya:</span> Quantum supremacy</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Blockchain Technology</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Silsilat kutla:</span> Blockchain</p>
              <p><span className="font-semibold">ʿUmla raqamiyya:</span> Cryptocurrency</p>
              <p><span className="font-semibold">ʿUqud dhakiyya:</span> Smart contracts</p>
              <p><span className="font-semibold">Tashfir:</span> Encryption</p>
              <p><span className="font-semibold">Lamarkaziyya:</span> Decentralization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}