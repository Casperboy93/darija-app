"use client";

import React from 'react';

export default function AcademicPresentations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Academic Presentations
      </h2>
      
      <p className="text-gray-700 mb-6">Language for presenting research and academic work.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Presentation Structure</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-700">Muqaddima</p>
              <p className="text-gray-600 text-sm">Introduction</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">ʿArd al-mashaʾ</p>
              <p className="text-gray-600 text-sm">Problem statement</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Manhajiyyat al-bahth</p>
              <p className="text-gray-600 text-sm">Research methodology</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Khulasa</p>
              <p className="text-gray-600 text-sm">Conclusion</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Presentation Language</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-700">Sa-uqaddim lakum</p>
              <p className="text-gray-600 text-sm">I will present to you</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Kama tarawn fi hadhihi al-sura</p>
              <p className="text-gray-600 text-sm">As you see in this image</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Hadha yuʾakkid anna</p>
              <p className="text-gray-600 text-sm">This confirms that</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Fi al-khitam</p>
              <p className="text-gray-600 text-sm">In conclusion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}