"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateFive() {
  return (
    <LessonLayout 
      title="Expressing Opinions" 
      level="intermediate" 
      lessonNumber={5}
      nextLesson="advanced-one"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master the art of expressing opinions, preferences, and thoughts in Darija. Learn to share your views on various topics, agree or disagree respectfully, and engage in meaningful conversations about personal preferences.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Express likes, dislikes, and preferences clearly</li>
            <li>Share opinions on various topics with confidence</li>
            <li>Learn to agree and disagree politely</li>
            <li>Use opinion markers and hedging language appropriately</li>
          </ul>
        </div>
      </div>
      
      {/* Expressing Likes and Dislikes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Expressing Likes and Dislikes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Kan3jebni...</p>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Like</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">I like...</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Usage:</span> Express things you enjoy</p>
              <p className="text-gray-600 italic text-sm mt-1">Kan3jebni l-atay b n3na3</p>
              <p className="text-gray-500 text-xs">(I like mint tea)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ma kan3jebnish...</p>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Dislike</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">I don't like...</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Usage:</span> Express things you don't enjoy</p>
              <p className="text-gray-600 italic text-sm mt-1">Ma kan3jebnish l-hlib</p>
              <p className="text-gray-500 text-xs">(I don't like milk)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Kanbghi...</p>
              <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full">Love</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">I love...</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Usage:</span> Express strong positive feelings</p>
              <p className="text-gray-600 italic text-sm mt-1">Kanbghi l-Maghrib bzzaf</p>
              <p className="text-gray-500 text-xs">(I love Morocco a lot)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Ma kanbghish...</p>
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Don't Love</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">I don't love...</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Usage:</span> Express lack of strong feelings</p>
              <p className="text-gray-600 italic text-sm mt-1">Ma kanbghish l-brd</p>
              <p className="text-gray-500 text-xs">(I don't love the cold)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Kanfaddel...</p>
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Prefer</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">I prefer...</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Usage:</span> Express preferences between options</p>
              <p className="text-gray-600 italic text-sm mt-1">Kanfaddel l-qahwa 3la l-atay</p>
              <p className="text-gray-500 text-xs">(I prefer coffee over tea)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Kankarah...</p>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Hate</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">I hate...</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Usage:</span> Express strong negative feelings</p>
              <p className="text-gray-600 italic text-sm mt-1">Kankarah l-kadhb</p>
              <p className="text-gray-500 text-xs">(I hate lying)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-medium text-yellow-800">Intensity Levels:</p>
              <p className="text-gray-700">Notice the different levels: kan3jebni (like) → kanbghi (love) → kankarah (hate). Choose the appropriate intensity for your feelings.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Opinion Expressions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Expressing Opinions
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Basic Opinion Starters</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">F ra'yi... (In my opinion...)</p>
                <p className="text-gray-700 mt-1">F ra'yi, had l-film zwin bzzaf</p>
                <p className="text-gray-600 italic text-sm">(In my opinion, this movie is very good)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">Kanshuf belli... (I think that...)</p>
                <p className="text-gray-700 mt-1">Kanshuf belli l-waqt zwin l-riyadha</p>
                <p className="text-gray-600 italic text-sm">(I think that the weather is good for sports)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">3ndi l-i3tiqad... (I believe...)</p>
                <p className="text-gray-700 mt-1">3ndi l-i3tiqad anna l-ta3lim muhim</p>
                <p className="text-gray-600 italic text-sm">(I believe that education is important)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="font-medium text-blue-800">Hasab ra'yi... (According to my opinion...)</p>
                <p className="text-gray-700 mt-1">Hasab ra'yi, l-sayf afdal men sh-shita</p>
                <p className="text-gray-600 italic text-sm">(According to my opinion, summer is better than winter)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Expressing Certainty and Uncertainty</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-700 mb-2">Certainty</h4>
                <div className="space-y-2">
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="font-medium">Ana muta'akkid... (I'm sure...)</p>
                    <p className="text-gray-600 text-sm italic">Ana muta'akkid anna ghadi yji</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="font-medium">Bla shakk... (Without doubt...)</p>
                    <p className="text-gray-600 text-sm italic">Bla shakk, huwa l-afdal</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="font-medium">Akid... (Definitely...)</p>
                    <p className="text-gray-600 text-sm italic">Akid ghadi nkun hna</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-orange-700 mb-2">Uncertainty</h4>
                <div className="space-y-2">
                  <div className="bg-orange-50 p-3 rounded-md">
                    <p className="font-medium">Waqila... (Maybe...)</p>
                    <p className="text-gray-600 text-sm italic">Waqila ghadi yshta ghda</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-md">
                    <p className="font-medium">Ma3raftsh... (I don't know...)</p>
                    <p className="text-gray-600 text-sm italic">Ma3raftsh wesh ghadi yji</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-md">
                    <p className="font-medium">Yimken... (It's possible...)</p>
                    <p className="text-gray-600 text-sm italic">Yimken nkun ghaltan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Agreement and Disagreement */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Agreement and Disagreement
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg text-green-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Agreeing
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Mttafaq m3ak (I agree with you)</p>
                <p className="text-gray-600 text-sm">Strong agreement</p>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Sahih (That's right)</p>
                <p className="text-gray-600 text-sm">Confirming correctness</p>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Bsah (Exactly)</p>
                <p className="text-gray-600 text-sm">Emphatic agreement</p>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Nti 3andek l-haqq (You're right)</p>
                <p className="text-gray-600 text-sm">Acknowledging correctness</p>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="font-medium text-green-800">Hada ra'y zwin (That's a good opinion)</p>
                <p className="text-gray-600 text-sm">Appreciating the viewpoint</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-red-200">
            <h3 className="font-bold text-lg text-red-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Disagreeing Politely
            </h3>
            
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-md">
                <p className="font-medium text-red-800">Ma mttafaqsh m3ak (I don't agree with you)</p>
                <p className="text-gray-600 text-sm">Direct but polite disagreement</p>
              </div>
              <div className="bg-red-50 p-3 rounded-md">
                <p className="font-medium text-red-800">Smh li, walakin... (Excuse me, but...)</p>
                <p className="text-gray-600 text-sm">Polite way to introduce disagreement</p>
              </div>
              <div className="bg-red-50 p-3 rounded-md">
                <p className="font-medium text-red-800">Ana shayf ghir haka... (I see it differently...)</p>
                <p className="text-gray-600 text-sm">Expressing different perspective</p>
              </div>
              <div className="bg-red-50 p-3 rounded-md">
                <p className="font-medium text-red-800">Waqila nti ghaltan (Maybe you're wrong)</p>
                <p className="text-gray-600 text-sm">Gentle disagreement</p>
              </div>
              <div className="bg-red-50 p-3 rounded-md">
                <p className="font-medium text-red-800">Ma kanshufsh l-amr haka (I don't see it that way)</p>
                <p className="text-gray-600 text-sm">Expressing different viewpoint</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="font-medium text-blue-800">Cultural Note:</p>
          <p className="text-gray-700">In Moroccan culture, it's important to disagree respectfully. Always acknowledge the other person's viewpoint before presenting your own, and use softening language like "waqila" (maybe) or "f ra'yi" (in my opinion).</p>
        </div>
      </div>
      
      {/* Asking for Opinions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Asking for Opinions
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Shnu ra'yak? (What's your opinion?)</p>
              <p className="text-gray-700 mt-1">Shnu ra'yak f had l-film?</p>
              <p className="text-gray-600 italic text-sm">(What's your opinion about this movie?)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Kayf katshuf l-amr? (How do you see it?)</p>
              <p className="text-gray-700 mt-1">Kayf katshuf had l-mushkila?</p>
              <p className="text-gray-600 italic text-sm">(How do you see this problem?)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Wesh mttafaq m3aya? (Do you agree with me?)</p>
              <p className="text-gray-700 mt-1">Wesh mttafaq m3aya f had l-qadiya?</p>
              <p className="text-gray-600 italic text-sm">(Do you agree with me on this issue?)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Shnu kandir? (What should I do?)</p>
              <p className="text-gray-700 mt-1">Shnu kandir f had l-hal?</p>
              <p className="text-gray-600 italic text-sm">(What should I do in this situation?)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Ash bghiti tgul? (What do you want to say?)</p>
              <p className="text-gray-700 mt-1">Ash bghiti tgul 3la had l-mawdu3?</p>
              <p className="text-gray-600 italic text-sm">(What do you want to say about this topic?)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Wesh nti m3aya? (Are you with me?)</p>
              <p className="text-gray-700 mt-1">Wesh nti m3aya f had l-fikra?</p>
              <p className="text-gray-600 italic text-sm">(Are you with me on this idea?)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Practice Conversation
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-blue-700 mb-2">Topic: Discussing weekend plans</p>
          
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
                <p className="pl-2 text-gray-800">Shnu ra'yak nmshiw l-bahr f weekend?</p>
                <p className="pl-2 text-gray-600 italic">(What's your opinion about going to the beach this weekend?)</p>
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
                <p className="pl-2 text-gray-800">Kan3jebni l-fikra, walakin kanshuf belli l-waqt ghadi ykun bard shwiya.</p>
                <p className="pl-2 text-gray-600 italic">(I like the idea, but I think the weather will be a bit cold.)</p>
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
                <p className="pl-2 text-gray-800">Waqila nti 3andek l-haqq. Shnu ra'yak nmshiw l-cinema bla ma?</p>
                <p className="pl-2 text-gray-600 italic">(Maybe you're right. What's your opinion about going to the cinema instead?)</p>
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
        </div>
        
        <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
          <p className="font-medium text-yellow-800">Conversation Tips:</p>
          <p className="text-gray-700">Notice how they ask for opinions, express preferences, agree politely, and suggest alternatives. This creates a natural flow in conversation while respecting each other's views.</p>
        </div>
      </div>
      
      {/* Common Opinion Topics */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Common Opinion Topics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Food & Restaurants</h4>
            <div className="text-sm space-y-1">
              <p>• Shnu ra'yak f had l-mat3am?</p>
              <p>• L-makla zwina wlla la?</p>
              <p>• Kanfaddel l-makla l-maghribiya</p>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Movies & Entertainment</h4>
            <div className="text-sm space-y-1">
              <p>• Had l-film zwin bzzaf</p>
              <p>• Ma kan3jebnish l-musique</p>
              <p>• Kanshuf belli comedy afdal</p>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Weather & Seasons</h4>
            <div className="text-sm space-y-1">
              <p>• Kanbghi l-sayf ktar men sh-shita</p>
              <p>• L-waqt zwin l-yum</p>
              <p>• Ma kan3jebnish l-brd</p>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Work & Studies</h4>
            <div className="text-sm space-y-1">
              <p>• L-khdma s3iba shwiya</p>
              <p>• Kanshuf belli l-ta3lim muhim</p>
              <p>• Ma kanbghish l-imtihanat</p>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Travel & Places</h4>
            <div className="text-sm space-y-1">
              <p>• Marrakech zwina bzzaf</p>
              <p>• Kanfaddel l-bahr 3la l-jabal</p>
              <p>• Had l-blasa ma kan3jebnish</p>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Technology & Social Media</h4>
            <div className="text-sm space-y-1">
              <p>• L-internet mufid bzzaf</p>
              <p>• Ma kanbghish Facebook ktar</p>
              <p>• Kanshuf belli WhatsApp afdal</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Moroccans value respectful dialogue. Always listen to others' opinions before sharing your own, even if you disagree</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Use "inshallah" (God willing) when expressing future preferences or plans - it shows humility and cultural awareness</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Family and religious topics require extra sensitivity. Express opinions carefully and respectfully in these areas</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Complimenting others' opinions ("hada ra'y zwin") before disagreeing helps maintain harmony in conversations</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}