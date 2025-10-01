"use client";

import React from 'react';

export default function RenewableEnergy() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Renewable Energy and Clean Technology
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-yellow-800 mb-4">Energy Sources and Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-700 mb-2">Solar Energy</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ṭāqa shamsiyya:</span> Solar energy</p>
              <p><span className="font-semibold">Alwāḥ shamsiyya:</span> Solar panels</p>
              <p><span className="font-semibold">Khaḷāyā ḍawʾiyya:</span> Photovoltaic cells</p>
              <p><span className="font-semibold">Maḥaṭṭa shamsiyya:</span> Solar power plant</p>
              <p><span className="font-semibold">Takhzīn ṭāqa:</span> Energy storage</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-700 mb-2">Wind Energy</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ṭāqa riyāḥ:</span> Wind energy</p>
              <p><span className="font-semibold">Ṭawāḥīn hawāʾ:</span> Wind turbines</p>
              <p><span className="font-semibold">Ḥaql riyāḥ:</span> Wind farm</p>
              <p><span className="font-semibold">Riyāḥ baḥriyya:</span> Offshore wind</p>
              <p><span className="font-semibold">Kahraba riyāḥ:</span> Wind electricity</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-700 mb-2">Other Sources</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ṭāqa māʾiyya:</span> Hydroelectric</p>
              <p><span className="font-semibold">Ṭāqa jawfiyya:</span> Geothermal</p>
              <p><span className="font-semibold">Ṭāqa ḥayawiyya:</span> Biomass</p>
              <p><span className="font-semibold">Waqūd ḥayawī:</span> Biofuel</p>
              <p><span className="font-semibold">Hidrūjīn:</span> Hydrogen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}