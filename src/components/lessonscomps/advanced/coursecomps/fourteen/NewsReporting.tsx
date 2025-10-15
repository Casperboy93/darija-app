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
              <p><span className="font-semibold">ʿUnwan:</span> Headline</p>
              <p><span className="font-semibold">ʿUnwan farʿi:</span> Subheading</p>
              <p><span className="font-semibold">Muqaddima:</span> Lead paragraph</p>
              <p><span className="font-semibold">Khabar ʿajil:</span> Breaking news</p>
              <p><span className="font-semibold">Khabar munasib:</span> Feature story</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">Story Elements</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Masdar:</span> Source</p>
              <p><span className="font-semibold">Shahid ʿiyan:</span> Eyewitness</p>
              <p><span className="font-semibold">Iqtibas:</span> Quote</p>
              <p><span className="font-semibold">Tafasil:</span> Details</p>
              <p><span className="font-semibold">Khulfiyya:</span> Background</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">News Values</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Jadid:</span> Timeliness</p>
              <p><span className="font-semibold">Muhimm:</span> Significance</p>
              <p><span className="font-semibold">Qarib:</span> Proximity</p>
              <p><span className="font-semibold">Gharib:</span> Unusualness</p>
              <p><span className="font-semibold">Taʾthir:</span> Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}