"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Asking for Directions to the Train Station</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Tourist</div>
            <div>
              <p className="font-medium">Salam, fin kayn maḥaṭṭat l-qiṭār?</p>
              <p className="text-sm text-gray-600 italic">Hello, where is the train station?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Local</div>
            <div>
              <p className="font-medium">Ahlan! Maḥaṭṭat l-qiṭār bʿīda shwīya</p>
              <p className="text-sm text-gray-600 italic">Hello! The train station is a bit far</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Tourist</div>
            <div>
              <p className="font-medium">Kīfāsh nmshī l-tmma?</p>
              <p className="text-sm text-gray-600 italic">How do I go there?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Local</div>
            <div>
              <p className="font-medium">Khud taksī aw ṭūbīs. Sīr nīshan, thumma dūr līmn</p>
              <p className="text-sm text-gray-600 italic">Take a taxi or bus. Go straight, then turn right</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Tourist</div>
            <div>
              <p className="font-medium">Shukran bzaf!</p>
              <p className="text-sm text-gray-600 italic">Thank you very much!</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Local</div>
            <div>
              <p className="font-medium">Bla jmīl, riḥla saʿīda!</p>
              <p className="text-sm text-gray-600 italic">You're welcome, have a good trip!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}