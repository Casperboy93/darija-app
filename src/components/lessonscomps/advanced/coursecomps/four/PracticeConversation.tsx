"use client";

import React from 'react';

export default function PracticeConversation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Practice Conversation: Job Interview
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
              <p className="font-bold">Interviewer (Fusha):</p>
              <p className="text-gray-700">Ahlan wa sahlan bikum. Kayf yumkinukum an tuqaddim anfusakum?</p>
              <p className="text-gray-500 italic text-sm">(Welcome. How can you introduce yourselves?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Candidate (Code-switching):</p>
              <p className="text-gray-700">Shukran jazilan. Ismi Ahmed, wa ana kharij min jami3at... (switches to Darija) wa ana kan-khdm f had l-maydaan mn 5 snin.</p>
              <p className="text-gray-500 italic text-sm">(Thank you very much. My name is Ahmed, and I graduated from university... and I've been working in this field for 5 years.)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Interviewer:</p>
              <p className="text-gray-700">Ma hiya niqat quwwatikum al-ra2isiyyah?</p>
              <p className="text-gray-500 italic text-sm">(What are your main strengths?)</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Candidate:</p>
              <p className="text-gray-700">A3taqid anna niqat quwwati al-ra2isiyyah hiya... (switches) ana daymen kan-khdm b jiddiyyah w kan-hall l-mashakel b sur3ah.</p>
              <p className="text-gray-500 italic text-sm">(I believe my main strength is... I always work seriously and solve problems quickly.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}