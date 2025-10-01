"use client";

import React from 'react';

export default function PracticeConversation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Practice Conversation: Tech Support
      </h2>
      
      <div className="bg-white border border-purple-200 rounded-lg p-5">
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Customer:</p>
              <p className="text-gray-700">Salam, 3andi mushkil m3a l-wifi dyali. Ma-kayconnectish.</p>
              <p className="text-gray-500 italic text-sm">(Hello, I have a problem with my wifi. It won't connect.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Tech Support:</p>
              <p className="text-gray-700">Ahlan, ana ghadi n3awnek. Wash drti restart l l-router?</p>
              <p className="text-gray-500 italic text-sm">(Hello, I'll help you. Did you restart the router?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Customer:</p>
              <p className="text-gray-700">La, ma-drtsh. Kifash ndir restart?</p>
              <p className="text-gray-500 italic text-sm">(No, I didn't. How do I restart it?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Tech Support:</p>
              <p className="text-gray-700">Sahel. Shuf l-router, kayen button sghir f l-wra. Ghez 3lih 10 secondes, then shel sbaa3k.</p>
              <p className="text-gray-500 italic text-sm">(Easy. Look at the router, there's a small button in the back. Press it for 10 seconds, then release your finger.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Customer:</p>
              <p className="text-gray-700">Drt hakkak, u daba l-lights kay-clignoti. Shhal mn wqt khassni ntsenna?</p>
              <p className="text-gray-500 italic text-sm">(I did that, and now the lights are blinking. How long should I wait?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Tech Support:</p>
              <p className="text-gray-700">Mzyan! Tsenna 2-3 dqa2iq. Ila bqaw kay-clignoti, jreb t-connecti mn l-portable dyalk.</p>
              <p className="text-gray-500 italic text-sm">(Good! Wait 2-3 minutes. If they keep blinking, try to connect from your phone.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}