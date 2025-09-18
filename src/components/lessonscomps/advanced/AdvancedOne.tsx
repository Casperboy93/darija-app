"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedOne() {
  return (
    <LessonLayout 
      title="Idiomatic Expressions" 
      level="advanced" 
      lessonNumber={1}
      nextLesson="advanced-two"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn common Moroccan Darija idiomatic expressions that will help you sound more natural and understand cultural nuances. These expressions are essential for advanced speakers who want to communicate like locals.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master everyday idiomatic expressions used by native speakers</li>
            <li>Understand the cultural context behind common phrases</li>
            <li>Learn when and how to use these expressions appropriately</li>
            <li>Practice incorporating these expressions in conversations</li>
          </ul>
        </div>
      </div>
      
      {/* Everyday Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Everyday Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">These expressions are used frequently in daily conversations and will help you sound more natural:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Safi</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Very Common</span>
            </div>
            <p className="text-gray-600">Literally: Enough</p>
            <p className="text-gray-600">Used as: "That's it", "Okay", "Done", "That's enough"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sa-fee</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Safi, khallina nmshiw."<br/>(Okay, let's go.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Wakhkha</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Agreement</span>
            </div>
            <p className="text-gray-600">Literally: Okay</p>
            <p className="text-gray-600">Used as: "Alright", "Fine", "I agree"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: wakh-kha</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Wakhkha, ghadi ndir hadshi."<br/>(Alright, I'll do this.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Inshallah</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Religious</span>
            </div>
            <p className="text-gray-600">Literally: If God wills</p>
            <p className="text-gray-600">Used as: "Hopefully", "God willing"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: in-sha-llah</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Ghadi nji ghedda, inshallah."<br/>(I'll come tomorrow, God willing.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bslama</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Farewell</span>
            </div>
            <p className="text-gray-600">Literally: With peace</p>
            <p className="text-gray-600">Used as: "Goodbye", "Go in peace"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bs-la-ma</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Sir bslama."<br/>(Go in peace/Goodbye.)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Cultural Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">These expressions reflect Moroccan cultural values and social norms:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Llah y3tik sshha</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Gratitude</span>
            </div>
            <p className="text-gray-600">Literally: May God give you health</p>
            <p className="text-gray-600">Used as: "Thank you", "Bless you"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: llah y3-teek s-sha</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Response:</span> "Llah y3tik sshha."<br/>(May God give you health too.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bshha</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Well-wishing</span>
            </div>
            <p className="text-gray-600">Literally: With health</p>
            <p className="text-gray-600">Used as: "Enjoy your meal", "Wear it in good health"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bsh-ha</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Response:</span> "Llah y3tik sshha."<br/>(May God give you health.)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Tbarkellah 3lik</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Praise</span>
            </div>
            <p className="text-gray-600">Literally: God's blessing upon you</p>
            <p className="text-gray-600">Used as: "Congratulations", "Well done"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: tbar-kel-lah 3-leek</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Tbarkellah 3lik, njehti f l-imtihan!"<br/>(Well done, you passed the exam!)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Mashi mushkil</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Reassurance</span>
            </div>
            <p className="text-gray-600">Literally: Not a problem</p>
            <p className="text-gray-600">Used as: "No problem", "Don't worry about it"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma-shi mush-kil</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Nsiti? Mashi mushkil."<br/>(You forgot? No problem.)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Colorful Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Colorful Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">These vivid expressions showcase the richness of Darija:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900 mb-2">Nhar zwin kif wjhek</p>
            <p className="text-gray-600">Literally: A beautiful day like your face</p>
            <p className="text-gray-600">Used as: A compliment to someone who brings joy</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: n-har z-win kif wj-hek</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Context:</span> Said to someone who brings good news or whose presence is appreciated</p>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900 mb-2">Khobz u ma</p>
            <p className="text-gray-600">Literally: Bread and water</p>
            <p className="text-gray-600">Used as: "Basic necessities", "Simple living"</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: khobz u ma</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Ma 3ndi ghir khobz u ma."<br/>(I only have bread and water/the basics.)</p>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <p className="font-bold text-lg text-gray-900 mb-2">Ras l-hanout</p>
            <p className="text-gray-600">Literally: Head of the shop</p>
            <p className="text-gray-600">Used as: The best of something, a mixture of the best spices</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ras l-ha-noot</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Context:</span> Originally referred to the best spices a shop had to offer, now a specific spice mix</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Practice Conversation
        </h2>
        
        <div className="bg-white border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-purple-800">Using Expressions in Context:</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Fatima:</p>
                <p className="text-gray-700">Sbah l-khir! Kifash nta lyum?</p>
                <p className="text-gray-500 italic text-sm">(Good morning! How are you today?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Karim:</p>
                <p className="text-gray-700">Hamdullah! Nhar zwin kif wjhek. Sme3t blli njehti f l-imtihan?</p>
                <p className="text-gray-500 italic text-sm">(Thank God! A beautiful day like your face. I heard you passed your exam?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Fatima:</p>
                <p className="text-gray-700">Ih, hamdullah. Kant s3iba shwiya walkin dert majhud.</p>
                <p className="text-gray-500 italic text-sm">(Yes, thank God. It was a bit difficult but I made an effort.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Karim:</p>
                <p className="text-gray-700">Tbarkellah 3lik! Yallah nmshiw nshurbu atay bsh nehtaflu?</p>
                <p className="text-gray-500 italic text-sm">(Well done! Let's go drink tea to celebrate?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Fatima:</p>
                <p className="text-gray-700">Wakhkha, mashi mushkil. Ghadi nmshiw l-café l-qdim?</p>
                <p className="text-gray-500 italic text-sm">(Alright, no problem. Will we go to the old café?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Karim:</p>
                <p className="text-gray-700">Ih, inshallah. Safi, yallah.</p>
                <p className="text-gray-500 italic text-sm">(Yes, God willing. Okay, let's go.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Usage Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Usage Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Pay attention to context - many expressions have multiple meanings depending on the situation</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Religious expressions are very common in daily speech, even among non-religious people</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Tone and gestures often accompany expressions and can change their meaning</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}