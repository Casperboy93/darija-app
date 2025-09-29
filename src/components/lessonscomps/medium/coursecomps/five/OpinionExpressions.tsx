"use client";

import React from 'react';

export default function OpinionExpressions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Expressing Opinions
      </h2>
      
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Basic Opinion Starters</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">F ra'yi... (In my opinion...)</p>
              <p className="text-gray-700 mt-1">F ra'yi, had l-film zwin bzzaf</p>
              <p className="text-gray-600 italic text-sm">(In my opinion, this movie is very good)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Kanshuf belli... (I think that...)</p>
              <p className="text-gray-700 mt-1">Kanshuf belli l-waqt zwin l-riyadha</p>
              <p className="text-gray-600 italic text-sm">(I think that the weather is good for sports)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">3ndi l-i3tiqad... (I believe...)</p>
              <p className="text-gray-700 mt-1">3ndi l-i3tiqad anna l-ta3lim muhim</p>
              <p className="text-gray-600 italic text-sm">(I believe that education is important)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Hasab ra'yi... (According to my opinion...)</p>
              <p className="text-gray-700 mt-1">Hasab ra'yi, l-sayf afdal men sh-shita</p>
              <p className="text-gray-600 italic text-sm">(According to my opinion, summer is better than winter)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Expressing Certainty and Uncertainty</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-green-700 mb-2">Certainty</h4>
              <div className="space-y-2">
                <div className="bg-green-50 p-3 rounded-md">
                  <p className="font-medium">Ana muta'akkid... (I'm sure...)</p>
                  <p className="text-gray-600 text-sm italic">Ana muta'akkid anna ghadi yji</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md">
                  <p className="font-medium">Bla shakk... (Without doubt...)</p>
                  <p className="text-gray-600 text-sm italic">Bla shakk, huwa l-afdal</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md">
                  <p className="font-medium">Akid... (Definitely...)</p>
                  <p className="text-gray-600 text-sm italic">Akid ghadi nkun hna</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-orange-700 mb-2">Uncertainty</h4>
              <div className="space-y-2">
                <div className="bg-orange-50 p-3 rounded-md">
                  <p className="font-medium">Waqila... (Maybe...)</p>
                  <p className="text-gray-600 text-sm italic">Waqila ghadi yshta ghda</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-md">
                  <p className="font-medium">Ma3raftsh... (I don't know...)</p>
                  <p className="text-gray-600 text-sm italic">Ma3raftsh wesh ghadi yji</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-md">
                  <p className="font-medium">Yimken... (It's possible...)</p>
                  <p className="text-gray-600 text-sm italic">Yimken nkun ghaltan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}