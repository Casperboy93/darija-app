"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedThree() {
  return (
    <LessonLayout 
      title="Cultural Context" 
      level="advanced" 
      lessonNumber={3}
      nextLesson="advanced-four"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master the cultural nuances that shape Darija expressions and learn to navigate social situations with appropriate language and cultural awareness. Understanding these contexts is crucial for meaningful communication in Moroccan society.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Understand social etiquette and respectful language use</li>
            <li>Learn religious expressions and their appropriate contexts</li>
            <li>Master hospitality language and customs</li>
            <li>Navigate formal and informal social situations</li>
          </ul>
        </div>
      </div>
      
      {/* Social Etiquette in Language */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Social Etiquette in Language
        </h2>
        
        <p className="text-gray-700 mb-6">Proper social etiquette in Darija reflects respect, hierarchy, and cultural values:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Greetings & Respect</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600">• Always start with "As-salamu alaykum"</p>
              <p className="text-gray-600">• Use "Si" (Mr.) or "Lalla" (Mrs.) for elders</p>
              <p className="text-gray-600">• "Ntuma" (plural you) shows respect</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "As-salamu alaykum, Si Ahmed, kifash ntuma?"</p>
              <p className="text-sm italic text-gray-500">(Peace be upon you, Mr. Ahmed, how are you?)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Age & Status</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600">• Younger people speak first to elders</p>
              <p className="text-gray-600">• Use formal pronouns with authority figures</p>
              <p className="text-gray-600">• Show deference in tone and vocabulary</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Smehli, ustaz, wash ymken nswlek?"</p>
              <p className="text-sm italic text-gray-500">(Excuse me, teacher, may I ask you?)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Gender Considerations</h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Cultural</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600">• Mixed company requires more formal language</p>
              <p className="text-gray-600">• Same-gender groups allow casual speech</p>
              <p className="text-gray-600">• Respectful distance in conversations</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Tip:</span> Observe local customs and follow the lead of others</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Family Hierarchy</h3>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Traditional</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600">• Parents and grandparents get highest respect</p>
              <p className="text-gray-600">• Older siblings addressed formally</p>
              <p className="text-gray-600">• Family titles used instead of names</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Yemma" (mother), "Baba" (father), "Khuya" (brother)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Religious Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Religious Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">Religious phrases are deeply integrated into daily Darija and reflect cultural values:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Common Religious Phrases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Inshallah (إن شاء الله)</p>
                <p className="text-gray-600">God willing - for future plans</p>
                <p className="text-sm italic text-gray-500">"Ghadi nji ghedda, inshallah."</p>
                <p className="text-sm text-gray-400">(I'll come tomorrow, God willing.)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Alhamdulillah (الحمد لله)</p>
                <p className="text-gray-600">Praise be to God - expressing gratitude</p>
                <p className="text-sm italic text-gray-500">"Kifash nta? - Alhamdulillah, bikhir."</p>
                <p className="text-sm text-gray-400">(How are you? - Thank God, I'm well.)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Mashallah (ما شاء الله)</p>
                <p className="text-gray-600">What God willed - expressing admiration</p>
                <p className="text-sm italic text-gray-500">"Mashallah, wldk zwin bzzaf!"</p>
                <p className="text-sm text-gray-400">(Mashallah, your son is very handsome!)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Bismillah (بسم الله)</p>
                <p className="text-gray-600">In God's name - starting actions</p>
                <p className="text-sm italic text-gray-500">"Bismillah, yallah naklu."</p>
                <p className="text-sm text-gray-400">(In God's name, let's eat.)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Protective & Blessing Phrases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Llah y3tik sshha (الله يعطيك الصحة)</p>
                <p className="text-gray-600">May God give you health - blessing/thanks</p>
                <p className="text-sm italic text-gray-500">Said after someone helps you</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Llah yster (الله يستر)</p>
                <p className="text-gray-600">May God protect - expressing concern</p>
                <p className="text-sm italic text-gray-500">Used when worried about something</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Tbarkellah (تبارك الله)</p>
                <p className="text-gray-600">Blessed be God - congratulations</p>
                <p className="text-sm italic text-gray-500">Celebrating achievements</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">La hawla wla quwwa illa billah</p>
                <p className="text-gray-600">No power except with God - in difficulty</p>
                <p className="text-sm italic text-gray-500">When facing challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hospitality Language */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Hospitality Language
        </h2>
        
        <p className="text-gray-700 mb-6">Moroccan hospitality is legendary, and specific phrases accompany these customs:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Welcoming Guests</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Ahlan wa sahlan</p>
                <p className="text-gray-600">Welcome (formal greeting)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Dar dyalkum</p>
                <p className="text-gray-600">"This is your house" - making guests feel at home</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Tfeddel/Tfeddli</p>
                <p className="text-gray-600">Please come in/sit down (m/f)</p>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Food & Drink Etiquette</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Bismillah</p>
                <p className="text-gray-600">Invitation to start eating</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Bshha</p>
                <p className="text-gray-600">Enjoy your meal/drink (literally "with health")</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Kul/Kuli</p>
                <p className="text-gray-600">Eat! (encouraging guests to eat more)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Typical Hospitality Exchange</h3>
          <div className="space-y-3">
            <div className="flex">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Host:</p>
                <p className="text-gray-700">Ahlan wa sahlan! Dar dyalkum. Tfeddel.</p>
                <p className="text-gray-500 italic text-sm">(Welcome! This is your house. Please come in.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Guest:</p>
                <p className="text-gray-700">Llah y3tik sshha. Baraka llahu fik.</p>
                <p className="text-gray-500 italic text-sm">(May God give you health. God bless you.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Host (offering tea):</p>
                <p className="text-gray-700">Bismillah, shreb atay. Bshha.</p>
                <p className="text-gray-500 italic text-sm">(In God's name, drink tea. Enjoy it with health.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Formal vs Informal Contexts */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Formal vs Informal Contexts
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Formal Situations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Business/Official:</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-600">
                  <li>• Use Standard Arabic mixed with Darija</li>
                  <li>• Formal pronouns (ntuma, hadretkom)</li>
                  <li>• Professional titles and courtesy</li>
                  <li>• Avoid slang and casual expressions</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-purple-800">Religious/Cultural Events:</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-600">
                  <li>• Increased religious expressions</li>
                  <li>• Traditional greetings and blessings</li>
                  <li>• Respectful tone and vocabulary</li>
                  <li>• Cultural sensitivity required</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Informal Situations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Friends/Peers:</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-600">
                  <li>• Casual pronouns (nta, nti)</li>
                  <li>• Slang and colloquial expressions</li>
                  <li>• Relaxed grammar and structure</li>
                  <li>• Humor and playful language</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-purple-800">Family/Close Relations:</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-600">
                  <li>• Intimate vocabulary and nicknames</li>
                  <li>• Regional dialect variations</li>
                  <li>• Emotional expressions</li>
                  <li>• Family-specific terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Sensitivity Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Cultural Sensitivity Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Religious expressions are cultural, not necessarily indicating personal beliefs</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Observe and mirror the formality level of those around you</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">When in doubt, err on the side of being more formal and respectful</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Learning these expressions shows respect for Moroccan culture and values</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}