"use client";

import React from 'react';

export default function NextSteps() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Next Steps in Your Darija Journey - الخطوات التالية في رحلتك
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Continue Learning
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-indigo-50 rounded border-l-4 border-indigo-400">
              <p className="font-medium text-indigo-700">Intermediate Darija Course</p>
              <p className="text-sm text-gray-600">
                Ready to advance? Our intermediate course covers complex grammar, 
                advanced vocabulary, and cultural nuances.
              </p>
            </div>
            
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Specialized Topics</p>
              <p className="text-sm text-gray-600">
                Explore business Darija, academic vocabulary, or regional dialects 
                from different parts of Morocco.
              </p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="font-medium text-purple-700">Moroccan Arabic (Fusha)</p>
              <p className="text-sm text-gray-600">
                Learn formal Arabic as used in Morocco for official documents 
                and formal situations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Practice Opportunities
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="font-medium text-orange-700">Language Exchange</p>
              <p className="text-sm text-gray-600">
                Find Moroccan conversation partners online or in your local community 
                to practice speaking.
              </p>
            </div>
            
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
              <p className="font-medium text-blue-700">Moroccan Media</p>
              <p className="text-sm text-gray-600">
                Watch Moroccan TV shows, listen to Moroccan music, and follow 
                Moroccan social media accounts.
              </p>
            </div>
            
            <div className="p-3 bg-teal-50 rounded border-l-4 border-teal-400">
              <p className="font-medium text-teal-700">Travel to Morocco</p>
              <p className="text-sm text-gray-600">
                Nothing beats immersion! Plan a trip to Morocco to practice 
                your skills in real-life situations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Study Tips
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Practice 15-30 minutes daily rather than long sessions</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Keep a vocabulary journal with new words you encounter</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Record yourself speaking to improve pronunciation</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Use flashcards or spaced repetition apps for vocabulary</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Join online Darija learning communities and forums</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recommended Resources
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">📱</span>
              <span>Moroccan Arabic apps: Nemo, Mondly, or HelloTalk</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">📺</span>
              <span>YouTube channels: Learn Moroccan Arabic, Speak Moroccan</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">🎵</span>
              <span>Moroccan artists: Saad Lamjarred, Dounia Batma, ElGrandeToto</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">📚</span>
              <span>Books: "Moroccan Arabic Phrasebook" by Lonely Planet</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-indigo-600 font-bold">🌐</span>
              <span>Websites: Moroccan Arabic Dictionary, Peace Corps materials</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-md border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Congratulations! مبروك!
        </h3>
        <p className="text-sm text-gray-700">
          You've completed the beginner Darija course! You now have the foundation to communicate 
          in basic Moroccan Arabic. Remember, language learning is a journey - keep practicing, 
          stay curious, and don't be afraid to make mistakes. <span className="font-medium">بالتوفيق في رحلتك!</span> 
          (Good luck on your journey!)
        </p>
      </div>
    </div>
  );
}