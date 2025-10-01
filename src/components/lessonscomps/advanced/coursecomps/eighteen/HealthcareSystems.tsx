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
              <p><span className="font-semibold">Niẓām ṣiḥḥī:</span> Healthcare system</p>
              <p><span className="font-semibold">Riʿāya awwaliyya:</span> Primary care</p>
              <p><span className="font-semibold">Riʿāya thānawiyya:</span> Secondary care</p>
              <p><span className="font-semibold">Riʿāya mutakhaṣṣiṣa:</span> Specialized care</p>
              <p><span className="font-semibold">Ṭibb ṭawāriʾ:</span> Emergency medicine</p>
              <p><span className="font-semibold">Riʿāya munziliyya:</span> Home care</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Healthcare Policy</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Siyāsa ṣiḥḥiyya:</span> Health policy</p>
              <p><span className="font-semibold">Taʾmīn ṣiḥḥī:</span> Health insurance</p>
              <p><span className="font-semibold">Tanẓīm ṣiḥḥī:</span> Health regulation</p>
              <p><span className="font-semibold">Mīzāniyya ṣiḥḥa:</span> Health budget</p>
              <p><span className="font-semibold">Iṣlāḥ ṣiḥḥī:</span> Health reform</p>
              <p><span className="font-semibold">Jūdat riʿāya:</span> Quality of care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}