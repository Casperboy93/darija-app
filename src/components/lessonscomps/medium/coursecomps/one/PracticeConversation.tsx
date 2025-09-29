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
        <p className="text-sm text-blue-700 mb-2">Topic: Talking about yesterday's activities</p>
        
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
              <p className="pl-2 text-gray-800">Fin mshiti l-bareh?</p>
              <p className="pl-2 text-gray-600 italic">(Where did you go yesterday?)</p>
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
              <p className="font-medium text-pink-800">Layla:</p>
              <p className="pl-2 text-gray-800">Mshit l-medina. Shrit bzzaf d l-hwayej.</p>
              <p className="pl-2 text-gray-600 italic">(I went to the medina. I bought a lot of things.)</p>
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
              <p className="font-medium text-blue-800">Karim:</p>
              <p className="pl-2 text-gray-800">Shnu shufti temma?</p>
              <p className="pl-2 text-gray-600 italic">(What did you see there?)</p>
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
              <p className="font-medium text-pink-800">Layla:</p>
              <p className="pl-2 text-gray-800">Sheft bzzaf d nas u bzzaf d l-hwayej zwinin.</p>
              <p className="pl-2 text-gray-600 italic">(I saw many people and many beautiful things.)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
        <p className="font-medium text-yellow-800">Practice Tip:</p>
        <p className="text-gray-700">Try to create your own conversation using the past tense verbs and time expressions you've learned in this lesson.</p>
      </div>
    </div>
  );
}