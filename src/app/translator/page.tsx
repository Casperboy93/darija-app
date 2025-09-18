"use client";

import React from 'react';

export default function TranslatorPage() {
  // Sample words and phrases for animation - expanded with 5 more each
  const words = [
    { english: "Hello", darija: "Salam" },
    { english: "Thank you", darija: "Shukran" },
    { english: "Water", darija: "Ma" },
    { english: "House", darija: "Dar" },
    { english: "Food", darija: "Makla" },
    { english: "Friend", darija: "Sahbi" },
    { english: "Good", darija: "Mezyan" },
    { english: "Beautiful", darija: "Zwin" },
    { english: "Money", darija: "Flus" },
    { english: "Time", darija: "Waqt" },
    { english: "Love", darija: "Hobb" },
    { english: "Family", darija: "3a2ila" },
    { english: "Work", darija: "Khedma" },
    { english: "School", darija: "Madrasa" },
    { english: "Car", darija: "Tomobil" }
  ];

  const phrases = [
    { english: "How are you?", darija: "Labas?" },
    { english: "What's your name?", darija: "Shno smitk?" },
    { english: "I don't understand", darija: "Ma fhemtsh" },
    { english: "Where is the bathroom?", darija: "Fin kayn bit lma?" },
    { english: "How much does this cost?", darija: "Bshhal hada?" },
    { english: "I'm hungry", darija: "Ana jo3an" },
    { english: "See you later", darija: "Nshufk men ba3d" },
    { english: "Good morning", darija: "Sbah lkhir" },
    { english: "Good night", darija: "Lila sa3ida" },
    { english: "Excuse me", darija: "Smehli" },
    { english: "I'm sorry", darija: "Smehli" },
    { english: "Can you help me?", darija: "Tqder t3awenni?" },
    { english: "Where are you from?", darija: "Mnin nta?" },
    { english: "I love Morocco", darija: "Kan7ebb lmaghrib" },
    { english: "What time is it?", darija: "Shhal f ssaa?" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center">
            <span className="bg-white text-orange-700 text-xs font-bold px-3 py-1 rounded-full mr-3">
              Tool
            </span>
            <h1 className="text-3xl font-bold">Darija Translator</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* About Section */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-3 text-orange-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About Our Translator
          </h2>
          <p className="text-gray-700 mb-4">
            Our translator tool helps you convert between Darija and other languages. 
            Please note that Darija is primarily a spoken dialect with regional variations, 
            so translations may vary. For more accurate learning, we recommend our 
            structured lessons.
          </p>
          
          <div className="mt-4 bg-white p-4 rounded-md border border-orange-100">
            <p className="font-medium text-orange-800">Features:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
              <li>Multi-language support (English, French, Spanish)</li>
              <li>Common phrases and expressions</li>
              <li>Cultural context awareness</li>
              <li>Regional variation notes</li>
            </ul>
          </div>
        </div>

        {/* Translator Tool - Moved under About section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <div className="h-8 w-1.5 bg-orange-400 rounded-full mr-3"></div>
            Translator Tool
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="from-language" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <select id="from-language" className="w-full border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
                  <option value="english">English</option>
                  <option value="darija">Darija</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
                <textarea 
                  className="w-full h-40 mt-3 p-3 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" 
                  placeholder="Enter text to translate..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="to-language" className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <select id="to-language" className="w-full border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
                  <option value="darija">Darija</option>
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
                <div className="w-full h-40 mt-3 p-3 bg-orange-50 border border-orange-300 rounded-md overflow-auto">
                  <p className="text-gray-500 italic">Translation will appear here...</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-sm">
                Translate
              </button>
            </div>
          </div>
        </div>

        {/* Animated Translation Examples */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <div className="h-8 w-1.5 bg-orange-400 rounded-full mr-3"></div>
            Common Translations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Words Section */}
            <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Words
              </h3>
              <div className="overflow-hidden h-64 relative">
                <div className="animate-scroll-up space-y-3">
                  {[...words, ...words].map((word, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-md">
                      <span className="font-medium text-gray-800">{word.english}</span>
                      <span className="text-orange-600 font-semibold">{word.darija}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phrases Section */}
            <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Phrases
              </h3>
              <div className="overflow-hidden h-64 relative">
                <div className="animate-scroll-up-delayed space-y-3">
                  {[...phrases, ...phrases].map((phrase, index) => (
                    <div key={index} className="p-3 bg-orange-50 rounded-md">
                      <div className="font-medium text-gray-800 text-sm mb-1">{phrase.english}</div>
                      <div className="text-orange-600 font-semibold">{phrase.darija}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-orange-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Want to Learn More?
          </h2>
          <p className="text-gray-700 mb-4">
            For comprehensive Darija learning with structured lessons, cultural context, and interactive exercises, 
            explore our complete course offerings.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/lessons" className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
              Browse Lessons
            </a>
            <a href="/lessons/beginner-one" className="bg-white hover:bg-gray-50 text-orange-600 border border-orange-300 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
        
        .animate-scroll-up-delayed {
          animation: scroll-up 25s linear infinite;
          animation-delay: -5s;
        }
      `}</style>
    </div>
  );
}