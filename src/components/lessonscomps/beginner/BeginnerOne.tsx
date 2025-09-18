"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerOne() {
  return (
    <LessonLayout 
      title="Greetings and Introductions" 
      level="beginner" 
      lessonNumber={1}
      nextLesson="beginner-two"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">In this lesson, you'll learn essential greetings and introductions in Darija (Moroccan Arabic). By the end, you'll be able to greet people, introduce yourself, and have a basic conversation in Darija.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master common Moroccan greetings for different times of day</li>
            <li>Learn how to introduce yourself and ask basic questions</li>
            <li>Understand cultural context of Moroccan greetings</li>
            <li>Practice a simple conversation</li>
          </ul>
        </div>
      </div>
      
      {/* Common Greetings */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Common Greetings
        </h2>
        
        <p className="text-gray-700 mb-6">Greetings are an essential part of Moroccan culture. They tend to be longer and more elaborate than in Western cultures, reflecting the importance of social connections.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Salam</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Formal & Informal</span>
            </div>
            <p className="text-gray-600">Hello/Peace</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sah-lam</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Salam, kifash nta/nti?"<br/>(Hello, how are you?)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Labas?</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Informal</span>
            </div>
            <p className="text-gray-600">How are you?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: la-bass</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Labas? Kulshi bikhir?"<br/>(How are you? Everything good?)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Labas, hamdullah</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Common Response</span>
            </div>
            <p className="text-gray-600">I'm fine, thank God</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: la-bass, ham-doo-lee-lah</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Cultural note:</span> "Hamdullah" (thank God) is commonly added to positive responses</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Sbah l'khir</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Morning</span>
            </div>
            <p className="text-gray-600">Good morning</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sbah l-kheer</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Response:</span> "Sbah noor"<br/>(Morning of light)</p>
            </div>
          </div>
        </div>
        
        {/* Time-specific Greetings */}
        <div className="mt-8 bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4 text-gray-800">Time-specific Greetings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Morning</p>
              <p className="text-gray-700">Sbah l'khir → Sbah noor</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Afternoon/Evening</p>
              <p className="text-gray-700">Msa l'khir → Msa noor</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Night</p>
              <p className="text-gray-700">Layla sa'ida</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Introductions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Introducing Yourself
        </h2>
        
        <p className="text-gray-700 mb-6">After greeting someone, you'll often want to introduce yourself. Here are some common phrases for introductions:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Smiti... (My name is...)</p>
            <p className="text-gray-600 mb-1">Example: "Smiti Mohamed" (My name is Mohamed)</p>
            <p className="text-sm italic text-gray-500">Pronounced: smee-tee [your name]</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Shnu smitk? (What's your name?)</p>
            <p className="text-gray-600 mb-1">For male: "Shnu smitek?" / For female: "Shnu smitik?"</p>
            <p className="text-sm italic text-gray-500">Pronounced: sh-noo smee-tek/smee-teek</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Ana mn... (I'm from...)</p>
            <p className="text-gray-600 mb-1">Example: "Ana mn Marrakech" (I'm from Marrakech)</p>
            <p className="text-sm italic text-gray-500">Pronounced: ana min [place]</p>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practice Conversation
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Try this simple conversation:</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Person A:</p>
                <p className="text-gray-700">Salam! Labas?</p>
                <p className="text-gray-500 italic text-sm">(Hello! How are you?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Person B:</p>
                <p className="text-gray-700">Salam! Labas, hamdullah. W nta/nti?</p>
                <p className="text-gray-500 italic text-sm">(Hello! I'm good, thank God. And you?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Person A:</p>
                <p className="text-gray-700">Bikhir, shukran. Smiti Ahmed. Shnu smitek/smitik?</p>
                <p className="text-gray-500 italic text-sm">(Good, thanks. My name is Ahmed. What's your name?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Person B:</p>
                <p className="text-gray-700">Smiti Sara. M3a salama!</p>
                <p className="text-gray-500 italic text-sm">(My name is Sara. Goodbye!)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Greetings in Morocco often include asking about family members' wellbeing</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Handshakes are common between people of the same gender</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Religious phrases like "inshallah" (God willing) and "hamdullah" (thank God) are commonly used in everyday conversation</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}
        
