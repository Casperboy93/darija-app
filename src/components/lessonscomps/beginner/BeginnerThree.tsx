"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerThree() {
  return (
    <LessonLayout 
      title="Basic Phrases" 
      level="beginner" 
      lessonNumber={3}
      nextLesson="beginner-four"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn essential everyday phrases in Darija that will help you communicate in common situations like shopping, asking for help, and expressing gratitude.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master polite expressions and courtesy phrases</li>
            <li>Learn how to ask for help and directions</li>
            <li>Understand common responses and reactions</li>
            <li>Practice using phrases in real-life scenarios</li>
          </ul>
        </div>
      </div>
      
      {/* Essential Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Essential Phrases
        </h2>
        
        <p className="text-gray-700 mb-6">These phrases are the building blocks of polite conversation in Moroccan culture. They show respect and help you navigate social interactions smoothly.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Shukran</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Gratitude</span>
            </div>
            <p className="text-gray-600">Thank you</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: shook-ran</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Response:</span> "3afwan" (You're welcome)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Afak</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Request</span>
            </div>
            <p className="text-gray-600">Please</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ah-fak</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Afak, 3tini l'ma" (Please, give me water)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Smeh liya</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Apology</span>
            </div>
            <p className="text-gray-600">Excuse me / I'm sorry</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: smeh lee-ya</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Getting attention or apologizing</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">La bas</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Reassurance</span>
            </div>
            <p className="text-gray-600">No problem / It's okay</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: la bass</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Context:</span> Accepting apologies or reassuring</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Wakha</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Agreement</span>
            </div>
            <p className="text-gray-600">Okay / Alright</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: wah-kha</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Agreeing or accepting something</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Lla</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Negation</span>
            </div>
            <p className="text-gray-600">No</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: l-la</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Polite form:</span> "Lla, shukran" (No, thank you)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Asking for Help */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Asking for Help
        </h2>
        
        <p className="text-gray-700 mb-6">These phrases will help you when you need assistance or information from locals.</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">3afak, 3awnni (Please, help me)</p>
            <p className="text-gray-600 mb-1">Used when you need assistance</p>
            <p className="text-sm italic text-gray-500">Pronounced: ah-fak, ah-wen-nee</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Fin kayn...? (Where is...?)</p>
            <p className="text-gray-600 mb-1">Asking for directions or locations</p>
            <p className="text-sm italic text-gray-500">Pronounced: feen kay-en</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Wash katfhem l'ingliziya? (Do you speak English?)</p>
            <p className="text-gray-600 mb-1">Asking if someone speaks English</p>
            <p className="text-sm italic text-gray-500">Pronounced: wash kat-fhem l-ing-lee-zee-ya</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Ma fhemtsh (I don't understand)</p>
            <p className="text-gray-600 mb-1">When you need clarification</p>
            <p className="text-sm italic text-gray-500">Pronounced: ma fhemt-sh</p>
          </div>
        </div>
      </div>
      
      {/* Common Responses */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Common Responses
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Useful Responses to Know:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Ah / Na3am</p>
              <p className="text-gray-700 text-sm">Yes</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">3afwan</p>
              <p className="text-gray-700 text-sm">You're welcome</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Mashi mushkil</p>
              <p className="text-gray-700 text-sm">No problem</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Bzaf</p>
              <p className="text-gray-700 text-sm">A lot / Very much</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Scenarios */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practice Scenarios
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Real-life Situations:</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">At a Shop</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">You:</span> "Salam! Bsh7al hada?" (Hello! How much is this?)</p>
                <p><span className="font-medium">Shopkeeper:</span> "3ashrin dirham" (Twenty dirhams)</p>
                <p><span className="font-medium">You:</span> "Shukran!" (Thank you!)</p>
                <p><span className="font-medium">Shopkeeper:</span> "3afwan" (You're welcome)</p>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">Asking for Directions</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">You:</span> "Smeh liya, fin kayn l'bank?" (Excuse me, where is the bank?)</p>
                <p><span className="font-medium">Local:</span> "Ghadi nimen, tema ghadi liser" (Go right, then go left)</p>
                <p><span className="font-medium">You:</span> "Shukran bzaf!" (Thank you very much!)</p>
                <p><span className="font-medium">Local:</span> "La bas" (No problem)</p>
              </div>
            </div>
            
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">In a Restaurant</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Waiter:</span> "Ash bghiti?" (What do you want?)</p>
                <p><span className="font-medium">You:</span> "Afak, bghit tagine" (Please, I want tagine)</p>
                <p><span className="font-medium">Waiter:</span> "Wakha" (Okay)</p>
                <p><span className="font-medium">You:</span> "Shukran" (Thank you)</p>
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
              <p className="text-gray-700">Politeness is highly valued in Moroccan culture - always use "afak" (please) and "shukran" (thank you)</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">"Smeh liya" can be used both to get someone's attention and to apologize</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Adding "bzaf" (a lot) after "shukran" shows extra gratitude: "shukran bzaf" (thank you very much)</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}