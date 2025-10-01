"use client";

import React from 'react';

export default function ContextSpecificApplications() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Context-Specific Applications
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Business Presentations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Opening Statements</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">"As-salamu alaykum wa rahmatullahi wa barakatuh"</p>
                <p className="text-gray-700">"Uhibbu an uqaddim lakum..."</p>
                <p className="text-gray-500 italic">(I would like to present to you...)</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Transitional Phrases</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">"Bi-l-nisba li..." (Regarding...)</p>
                <p className="text-gray-700">"Min jiha ukhra..." (On the other hand...)</p>
                <p className="text-gray-700">"Fi l-khitam..." (In conclusion...)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Academic Discussions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Expressing Analysis</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">"Min khilal al-tahlil..." (Through analysis...)</p>
                <p className="text-gray-700">"Yumkin al-qawl anna..." (It can be said that...)</p>
                <p className="text-gray-700">"Hadhihi al-nata2ij tudhill..." (These results indicate...)</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Citing Sources</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">"Hasab al-bahith..." (According to the researcher...)</p>
                <p className="text-gray-700">"Kama dhakara..." (As mentioned by...)</p>
                <p className="text-gray-700">"Fi dirasa sabiqah..." (In a previous study...)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Media & Broadcasting</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">News Reporting</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">"Fi akhbar al-yawm..." (In today's news...)</p>
                <p className="text-gray-700">"Hasab masadir rasimiyyah..." (According to official sources...)</p>
                <p className="text-gray-700">"Wa fi tatauwwur akhar..." (In another development...)</p>
              </div>
            </div>
            <div>
              <p className="font-medium text-purple-800">Interview Techniques</p>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-gray-700">"Kayf tuqayyim..." (How do you evaluate...)</p>
                <p className="text-gray-700">"Ma ra2yuk fi..." (What is your opinion on...)</p>
                <p className="text-gray-700">"Hal yumkin an tuwaddih..." (Can you clarify...)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}