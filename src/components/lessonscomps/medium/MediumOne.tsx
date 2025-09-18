"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function MediumOne() {
  return (
    <LessonLayout 
      title="Daily Conversations" 
      level="intermediate" 
      lessonNumber={1}
      nextLesson="medium-two"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">In this intermediate lesson, you'll learn how to have everyday conversations in Darija. This includes discussing daily activities, expressing preferences, and navigating common social situations.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master vocabulary for daily activities and routines</li>
            <li>Learn how to express likes, dislikes, and preferences</li>
            <li>Understand how to ask and answer common questions</li>
            <li>Practice conversational phrases for various social settings</li>
          </ul>
        </div>
      </div>
      
      {/* Daily Activities */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Daily Activities
        </h2>
        
        <p className="text-gray-700 mb-6">Here are some common phrases to discuss daily activities and routines in Darija:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Faq n3ass</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Morning</span>
            </div>
            <p className="text-gray-600">I wake up</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: faq n-aas</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Kan-faq n3ass f sab3a d sbah"<br/>(I wake up at 7 in the morning)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kan-mshi l-khdma</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Daily</span>
            </div>
            <p className="text-gray-600">I go to work</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kan-m-shee l-kh-d-ma</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Kan-mshi l-khdma f t-tomobil"<br/>(I go to work by car)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kan-akol l-ftour</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Morning</span>
            </div>
            <p className="text-gray-600">I eat breakfast</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kan-a-kol l-f-tour</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Kan-akol l-ftour m3a l-qhwa"<br/>(I eat breakfast with coffee)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kan-n3ass</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Evening</span>
            </div>
            <p className="text-gray-600">I go to sleep</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kan-n-aas</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Kan-n3ass f 11 d lil"<br/>(I go to sleep at 11 at night)</p>
            </div>
          </div>
        </div>
        
        {/* Time Expressions */}
        <div className="mt-8 bg-white border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4 text-gray-800">Time Expressions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="font-medium">Morning</p>
              <p className="text-gray-700">Sbah (صباح)</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="font-medium">Afternoon</p>
              <p className="text-gray-700">3shiya (عشية)</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="font-medium">Evening/Night</p>
              <p className="text-gray-700">Lil (ليل)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expressing Preferences */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Expressing Preferences
        </h2>
        
        <p className="text-gray-700 mb-6">Learn how to express your likes and dislikes in Darija:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Kan-bghee... (I like...)</p>
            <p className="text-gray-600 mb-1">Example: "Kan-bghee l-atay" (I like tea)</p>
            <p className="text-sm italic text-gray-500">Pronounced: kan-b-ghee</p>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Ma-kan-bghee-sh... (I don't like...)</p>
            <p className="text-gray-600 mb-1">Example: "Ma-kan-bghee-sh l-hlib" (I don't like milk)</p>
            <p className="text-sm italic text-gray-500">Pronounced: ma-kan-b-ghee-sh</p>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Kan-fdel... (I prefer...)</p>
            <p className="text-gray-600 mb-1">Example: "Kan-fdel l-qhwa bla sukkar" (I prefer coffee without sugar)</p>
            <p className="text-sm italic text-gray-500">Pronounced: kan-f-del</p>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Practice Conversation
        </h2>
        
        <div className="bg-white border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-blue-800">At a Café:</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Server:</p>
                <p className="text-gray-700">Sbah l-khir, shnu bgheeti t-shreb?</p>
                <p className="text-gray-500 italic text-sm">(Good morning, what would you like to drink?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Customer:</p>
                <p className="text-gray-700">Sbah n-noor. Kan-bghee qhwa, 3afak.</p>
                <p className="text-gray-500 italic text-sm">(Good morning. I would like coffee, please.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Server:</p>
                <p className="text-gray-700">B sukkar wla bla sukkar?</p>
                <p className="text-gray-500 italic text-sm">(With sugar or without sugar?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Customer:</p>
                <p className="text-gray-700">Kan-fdel bla sukkar. Shukran.</p>
                <p className="text-gray-500 italic text-sm">(I prefer without sugar. Thank you.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Useful Phrases */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Useful Phrases
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700"><span className="font-medium">3afak</span> - Please</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700"><span className="font-medium">Shukran</span> - Thank you</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700"><span className="font-medium">Smeh liya</span> - Excuse me/I'm sorry</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700"><span className="font-medium">B shhal?</span> - How much?</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}