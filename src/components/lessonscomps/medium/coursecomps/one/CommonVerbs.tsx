"use client";

import React from 'react';

export default function CommonVerbs() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Common Verbs in Past Tense
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Msha (to go)</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Movement</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: m-sha</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ana mshit</span> (I went)</p>
            <p className="text-gray-700"><span className="font-medium">Huwa msha</span> (He went)</p>
            <p className="text-gray-700"><span className="font-medium">Huma mshaw</span> (They went)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Shaf (to see)</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Perception</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: shaf</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ana sheft</span> (I saw)</p>
            <p className="text-gray-700"><span className="font-medium">Hiya shafet</span> (She saw)</p>
            <p className="text-gray-700"><span className="font-medium">Hna shefna</span> (We saw)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Qra (to read/study)</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Education</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: q-ra</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ana qrit</span> (I read/studied)</p>
            <p className="text-gray-700"><span className="font-medium">Nta qriti</span> (You read/studied)</p>
            <p className="text-gray-700"><span className="font-medium">Huma qraw</span> (They read/studied)</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-lg text-blue-800">Shreb (to drink)</p>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Action</span>
          </div>
          <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: sh-reb</div>
          <div className="border-t border-blue-100 pt-2 mt-2">
            <p className="text-gray-700"><span className="font-medium">Ana shrebt</span> (I drank)</p>
            <p className="text-gray-700"><span className="font-medium">Huwa shreb</span> (He drank)</p>
            <p className="text-gray-700"><span className="font-medium">Ntuma shrebtu</span> (You all drank)</p>
          </div>
        </div>
      </div>
    </div>
  );
}