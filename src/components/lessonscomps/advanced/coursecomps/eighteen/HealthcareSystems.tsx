"use client";

import React from 'react';

export default function HealthcareSystems() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Healthcare Systems and Policy
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Healthcare Organization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Healthcare Delivery</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Nizam sihhi:</span> Healthcare system</p>
              <p><span className="font-semibold">Riʿaya awwaliyya:</span> Primary care</p>
              <p><span className="font-semibold">Riʿaya thanawiyya:</span> Secondary care</p>
              <p><span className="font-semibold">Riʿaya mutakhassisa:</span> Specialized care</p>
              <p><span className="font-semibold">Tibb tawariʾ:</span> Emergency medicine</p>
              <p><span className="font-semibold">Riʿaya munziliyya:</span> Home care</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Healthcare Policy</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Siyasa sihhiyya:</span> Health policy</p>
              <p><span className="font-semibold">Taʾmin sihhi:</span> Health insurance</p>
              <p><span className="font-semibold">Tanzim sihhi:</span> Health regulation</p>
              <p><span className="font-semibold">Mizaniyya sihha:</span> Health budget</p>
              <p><span className="font-semibold">Islah sihhi:</span> Health reform</p>
              <p><span className="font-semibold">Judat riʿaya:</span> Quality of care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}