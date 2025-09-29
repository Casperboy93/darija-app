"use client";

import React from 'react';

export default function PracticeConversation() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
      <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Practice Conversation
      </h2>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-blue-700 mb-2">Topic: Making hypothetical plans</p>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-blue-800">Karim:</p>
              <p className="pl-2 text-gray-800">Ash gha tdir ila kan 3ndek million dirham?</p>
              <p className="pl-2 text-gray-600 italic">(What would you do if you had a million dirhams?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-pink-800">Salma:</p>
              <p className="pl-2 text-gray-800">Ila kan 3ndi million, kun shrit dar kbira u safrt l-kull blasa!</p>
              <p className="pl-2 text-gray-600 italic">(If I had a million, I would buy a big house and travel everywhere!)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-blue-800">Karim:</p>
              <p className="pl-2 text-gray-800">Zwin! U ila kunt tqdr tkhtar ay blasa f l-3alam, fin gha tmshi?</p>
              <p className="pl-2 text-gray-600 italic">(Nice! And if you could choose any place in the world, where would you go?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-pink-800">Salma:</p>
              <p className="pl-2 text-gray-800">Ila kunt nqdr, kun mshit l-Japan. Sma3t blli zwina bzaf!</p>
              <p className="pl-2 text-gray-600 italic">(If I could, I would go to Japan. I heard it's very beautiful!)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
        <p className="font-medium text-yellow-800">Practice Tip:</p>
        <p className="text-gray-700">Practice creating your own conditional sentences by thinking about different "what if" scenarios. Start with simple conditions and gradually add more complex situations.</p>
      </div>
    </div>
  );
}