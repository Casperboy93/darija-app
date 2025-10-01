"use client";

import React from 'react';

export default function NewsReporting() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        News Reporting and Structure
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-blue-800 mb-4">News Article Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Headlines & Leads</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">ʿUnwān:</span> Headline</p>
              <p><span className="font-semibold">ʿUnwān farʿī:</span> Subheading</p>
              <p><span className="font-semibold">Muqaddima:</span> Lead paragraph</p>
              <p><span className="font-semibold">Khabar ʿājil:</span> Breaking news</p>
              <p><span className="font-semibold">Khabar munāsib:</span> Feature story</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Story Elements</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Maṣdar:</span> Source</p>
              <p><span className="font-semibold">Shāhid ʿiyān:</span> Eyewitness</p>
              <p><span className="font-semibold">Iqtibās:</span> Quote</p>
              <p><span className="font-semibold">Tafāṣīl:</span> Details</p>
              <p><span className="font-semibold">Khulfiyya:</span> Background</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">News Values</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Jadīd:</span> Timeliness</p>
              <p><span className="font-semibold">Muhimm:</span> Significance</p>
              <p><span className="font-semibold">Qarīb:</span> Proximity</p>
              <p><span className="font-semibold">Gharīb:</span> Unusualness</p>
              <p><span className="font-semibold">Taʾthīr:</span> Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}