"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateOne() {
  return (
    <LessonLayout 
      title="Past Tense" 
      level="intermediate" 
      lessonNumber={1}
      nextLesson="intermediate-two"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn how to form and use the past tense in Darija to talk about completed actions and events. This is essential for telling stories, describing experiences, and discussing history.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master the past tense verb conjugation patterns</li>
            <li>Learn how to form negative past tense statements</li>
            <li>Practice using past tense in everyday conversations</li>
            <li>Understand irregular past tense verbs</li>
          </ul>
        </div>
      </div>
      
      {/* Past Tense Formation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Past Tense Formation
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
          <p className="mb-4">In Darija, the past tense is formed by adding specific endings to the verb stem. The endings change based on the subject pronoun.</p>
          
          <div className="text-sm bg-blue-50 p-3 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Pronunciation Tip:</p>
            <p>Pay attention to the stress in past tense verbs. The stress typically falls on the last syllable of the verb stem.</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Subject</th>
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Ending</th>
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Example (kla - to eat)</th>
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Pronunciation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Ana (I)</td>
                <td className="py-2 px-4 border-b font-mono">-it</td>
                <td className="py-2 px-4 border-b">klit (I ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">kleet</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Nta (You - masc.)</td>
                <td className="py-2 px-4 border-b font-mono">-iti</td>
                <td className="py-2 px-4 border-b">kliti (You ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klee-tee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Nti (You - fem.)</td>
                <td className="py-2 px-4 border-b font-mono">-iti</td>
                <td className="py-2 px-4 border-b">kliti (You ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klee-tee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Huwa (He)</td>
                <td className="py-2 px-4 border-b font-mono">-a</td>
                <td className="py-2 px-4 border-b">kla (He ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klah</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Hiya (She)</td>
                <td className="py-2 px-4 border-b font-mono">-at</td>
                <td className="py-2 px-4 border-b">klat (She ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klat</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Hna (We)</td>
                <td className="py-2 px-4 border-b font-mono">-ina</td>
                <td className="py-2 px-4 border-b">klina (We ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klee-nah</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Ntuma (You - plural)</td>
                <td className="py-2 px-4 border-b font-mono">-itu</td>
                <td className="py-2 px-4 border-b">klitu (You all ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klee-too</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Huma (They)</td>
                <td className="py-2 px-4 border-b font-mono">-aw</td>
                <td className="py-2 px-4 border-b">klaw (They ate)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">klaw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Common Verbs in Past Tense */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Common Verbs in Past Tense
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Msha (to go)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Movement</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: m-sha</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ana mshit</span> (I went)</p>
              <p className="text-gray-700"><span className="font-medium">Huwa msha</span> (He went)</p>
              <p className="text-gray-700"><span className="font-medium">Huma mshaw</span> (They went)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Shaf (to see)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Perception</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: shaf</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ana sheft</span> (I saw)</p>
              <p className="text-gray-700"><span className="font-medium">Hiya shafet</span> (She saw)</p>
              <p className="text-gray-700"><span className="font-medium">Hna shefna</span> (We saw)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Qra (to read/study)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Education</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: q-ra</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ana qrit</span> (I read/studied)</p>
              <p className="text-gray-700"><span className="font-medium">Nta qriti</span> (You read/studied)</p>
              <p className="text-gray-700"><span className="font-medium">Huma qraw</span> (They read/studied)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Shreb (to drink)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Action</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: sh-reb</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Ana shrebt</span> (I drank)</p>
              <p className="text-gray-700"><span className="font-medium">Huwa shreb</span> (He drank)</p>
              <p className="text-gray-700"><span className="font-medium">Ntuma shrebtu</span> (You all drank)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Time Expressions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Time Expressions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">L-bareh (Yesterday)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: l-ba-reh</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> L-bareh mshit l-suq.</p>
              <p className="text-gray-600 italic">(Yesterday I went to the market.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">S-simana lli fatet (Last week)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: s-see-ma-na lee fa-tet</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> S-simana lli fatet qrit bzzaf.</p>
              <p className="text-gray-600 italic">(Last week I studied a lot.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">Qbel (Before/ago)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: q-bel</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> Jit l-Maghrib 3am qbel.</p>
              <p className="text-gray-600 italic">(I came to Morocco a year ago.)</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800 mb-2">Cultural Note:</p>
          <p className="text-gray-700">In Moroccan culture, time expressions are often used more flexibly than in Western cultures. "Daba" (now) might mean "soon" or "in a little while," and specific times are often approximate.</p>
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
      
      {/* Negative Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
          Negative Form
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
          <p className="mb-3">To form the negative in the past tense, add <span className="font-medium">ma</span> before the verb and <span className="font-medium">sh</span> after it.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Affirmative:</p>
              <p className="text-gray-700">Ana mshit l-suq.</p>
              <p className="text-gray-600 italic">(I went to the market.)</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Negative:</p>
              <p className="text-gray-700">Ana ma mshit-sh l-suq.</p>
              <p className="text-gray-600 italic">(I did not go to the market.)</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}