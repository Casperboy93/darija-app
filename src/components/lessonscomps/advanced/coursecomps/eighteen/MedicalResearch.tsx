"use client";

import React from 'react';

export default function MedicalResearch() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Medical Research and Clinical Trials
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Research Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Study Types</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Dirasa ʿashwaʾiyya:</span> Randomized study</p>
              <p><span className="font-semibold">Tajriba saririyya:</span> Clinical trial</p>
              <p><span className="font-semibold">Dirasa wasfiyya:</span> Descriptive study</p>
              <p><span className="font-semibold">Dirasa muqarana:</span> Comparative study</p>
              <p><span className="font-semibold">Dirasa mustaqbaliyya:</span> Prospective study</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Research Ethics</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Muwafaqa muʿlama:</span> Informed consent</p>
              <p><span className="font-semibold">Akhlaqiyyat bahth:</span> Research ethics</p>
              <p><span className="font-semibold">Lajna akhlaqiyya:</span> Ethics committee</p>
              <p><span className="font-semibold">Sirriyya marid:</span> Patient confidentiality</p>
              <p><span className="font-semibold">Huquq marid:</span> Patient rights</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Data Analysis</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Tahlil ihsaʾi:</span> Statistical analysis</p>
              <p><span className="font-semibold">Bayanat saririyya:</span> Clinical data</p>
              <p><span className="font-semibold">Nataʾij muhimma:</span> Significant results</p>
              <p><span className="font-semibold">Muʿayir juda:</span> Quality standards</p>
              <p><span className="font-semibold">Taqyim nataʾij:</span> Results evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}