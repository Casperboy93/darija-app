"use client";

import React from 'react';

export default function PracticeConversation() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3v-1M9 12h.01M9 16h.01M9 8h.01" />
        </svg>
        Practice Conversation
      </h2>
      
      <div className="bg-white border border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-lg text-blue-800 mb-4">Weekend Plans Discussion</h3>
        
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
              <p className="font-medium text-blue-800">Youssef:</p>
              <p className="pl-2 text-gray-800">Shnu ra'yak nmshiw l-bahr ghda?</p>
              <p className="pl-2 text-gray-600 italic">(What's your opinion about going to the beach tomorrow?)</p>
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
              <p className="font-medium text-pink-800">Aicha:</p>
              <p className="pl-2 text-gray-800">Kan3jebni l-fikra, walakin kanshuf belli l-waqt ghadi ykun bard.</p>
              <p className="pl-2 text-gray-600 italic">(I like the idea, but I think the weather will be cold.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-blue-800">Youssef:</p>
              <p className="pl-2 text-gray-800">Waqila nti 3andek l-haqq. Shnu ra'yak f cinema?</p>
              <p className="pl-2 text-gray-600 italic">(Maybe you're right. What's your opinion about the cinema?)</p>
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
              <p className="font-medium text-pink-800">Aicha:</p>
              <p className="pl-2 text-gray-800">Mttafqa m3ak! Kanfaddel l-cinema 3la l-bahr f had l-waqt.</p>
              <p className="pl-2 text-gray-600 italic">(I agree with you! I prefer the cinema over the beach at this time.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-blue-800">Youssef:</p>
              <p className="pl-2 text-gray-800">Zwin! Shnu ra'yak f film jadid li khraj?</p>
              <p className="pl-2 text-gray-600 italic">(Great! What's your opinion about the new movie that came out?)</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
          <p className="font-medium text-yellow-800">Conversation Tips:</p>
          <p className="text-gray-700">Notice how they ask for opinions, express preferences, agree politely, and suggest alternatives. This creates a natural flow in conversation while respecting each other's views.</p>
        </div>
      </div>
    </div>
  );
}