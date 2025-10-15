"use client";

import React from 'react';

export default function NewsWritingStyles() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        News Writing Styles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Hard News</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Khabar sahafi</p>
              <p className="text-gray-600 text-sm">Straight news story</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Waqaʾiʿ</p>
              <p className="text-gray-600 text-sm">Facts</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Mukhtasar wa wadih</p>
              <p className="text-gray-600 text-sm">Brief and clear</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">La raʾy shakhsi</p>
              <p className="text-gray-600 text-sm">No personal opinion</p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Feature Stories</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Taqrir mufassal</p>
              <p className="text-gray-600 text-sm">In-depth report</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Qisas insaniyya</p>
              <p className="text-gray-600 text-sm">Human interest stories</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Tahlil</p>
              <p className="text-gray-600 text-sm">Analysis</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Sard jadhib</p>
              <p className="text-gray-600 text-sm">Engaging narrative</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}