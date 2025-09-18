"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateTwo() {
  return (
    <LessonLayout 
      title="Future Tense" 
      level="intermediate" 
      lessonNumber={2}
      nextLesson="intermediate-three"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master the future tense in Darija to express plans, intentions, and predictions. Learn to communicate about upcoming events and future actions with confidence.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master future tense formation with "ghadi" and "gha"</li>
            <li>Learn immediate vs. distant future expressions</li>
            <li>Practice making plans and predictions</li>
            <li>Understand conditional future statements</li>
          </ul>
        </div>
      </div>
      
      {/* Future Tense Formation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Future Tense Formation
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
          <p className="mb-4">In Darija, the future tense is formed by adding the prefix <span className="font-bold text-blue-700">"ghadi"</span> (going to) or its shortened form <span className="font-bold text-blue-700">"gha"</span> before the verb in present tense form.</p>
          
          <div className="text-sm bg-blue-50 p-3 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Formation Pattern:</p>
            <p><span className="font-mono">ghadi/gha + present tense verb</span></p>
            <p className="mt-1 text-gray-600">Example: ghadi nmshi (I will go) = ghadi + nmshi (I go)</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Subject</th>
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Future Marker</th>
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Example (mshi - to go)</th>
                <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Pronunciation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Ana (I)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi nmshi (I will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee n-mshee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Nta (You - masc.)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshi (You will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee t-mshee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Nti (You - fem.)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshi (You will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee t-mshee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Huwa (He)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi ymshi (He will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee y-mshee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Hiya (She)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshi (She will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee t-mshee</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Hna (We)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi nmshiw (We will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee n-mshee-oo</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Ntuma (You - plural)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi tmshiw (You all will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee t-mshee-oo</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="py-2 px-4 border-b">Huma (They)</td>
                <td className="py-2 px-4 border-b font-mono">ghadi/gha</td>
                <td className="py-2 px-4 border-b">ghadi ymshiw (They will go)</td>
                <td className="py-2 px-4 border-b text-gray-600 italic">gha-dee y-mshee-oo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Future Tense Variations */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Future Tense Variations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg text-blue-800">Immediate Future</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Soon</span>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha nmshi daba</p>
                <p className="text-gray-600 italic">I'm going to go now</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha ykun hna qrib</p>
                <p className="text-gray-600 italic">He'll be here soon</p>
              </div>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg text-blue-800">Distant Future</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Later</span>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ghadi nmshi l-Fransa l-3am jay</p>
                <p className="text-gray-600 italic">I will go to France next year</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ghadi nkun tbeeb</p>
                <p className="text-gray-600 italic">I will be a doctor</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-medium text-yellow-800 mb-2">Usage Note:</h4>
          <p className="text-gray-700">"Gha" is more commonly used in casual conversation, while "ghadi" is more formal and emphatic. Both are correct and widely understood.</p>
        </div>
      </div>
      
      {/* Common Future Expressions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Common Future Expressions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Gha nkhdm (I will work)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Career</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: gha n-kh-dem</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Gha nkhdm f had l-shirka</span></p>
              <p className="text-gray-600 italic">(I will work at this company)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Gha nsafr (I will travel)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Travel</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: gha n-sa-fer</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Gha nsafr l-Marrakech</span></p>
              <p className="text-gray-600 italic">(I will travel to Marrakech)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Gha nqra (I will study)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Education</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: gha n-q-ra</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Gha nqra l-jami3a</span></p>
              <p className="text-gray-600 italic">(I will study at university)</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-lg text-blue-800">Gha nzwj (I will get married)</p>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Life Events</span>
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">Pronunciation: gha n-zwej</div>
            <div className="border-t border-blue-100 pt-2 mt-2">
              <p className="text-gray-700"><span className="font-medium">Gha nzwj l-3am jay</span></p>
              <p className="text-gray-600 italic">(I will get married next year)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Time Expressions for Future */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Time Expressions for Future
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">Ghedda (Tomorrow)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: ghed-da</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> Ghedda gha nmshi l-khdma.</p>
              <p className="text-gray-600 italic">(Tomorrow I will go to work.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">S-simana jaya (Next week)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: s-see-ma-na ja-ya</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> S-simana jaya gha nsafr.</p>
              <p className="text-gray-600 italic">(Next week I will travel.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">L-3am jay (Next year)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: l-am jay</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> L-3am jay gha nkun f Fransa.</p>
              <p className="text-gray-600 italic">(Next year I will be in France.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">Ba3d shwiya (Later/After a while)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: ba-ed shwee-ya</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> Ba3d shwiya gha nrj3.</p>
              <p className="text-gray-600 italic">(Later I will come back.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">Daba (Now/Soon)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: da-ba</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> Daba gha nkhrj.</p>
              <p className="text-gray-600 italic">(Now I will go out.)</p>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <p className="font-bold mb-2 text-blue-800">Mn ba3d (Later on)</p>
            <p className="text-sm text-gray-500 italic mb-2">Pronunciation: men ba-ed</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-gray-700"><span className="font-medium">Example:</span> Mn ba3d gha nshuf.</p>
              <p className="text-gray-600 italic">(Later on I will see.)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Making Plans and Predictions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Making Plans and Predictions
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Personal Plans</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha nkhdm f had l-mashru3</p>
                <p className="text-gray-600 italic">I will work on this project</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha nshri dar jdida</p>
                <p className="text-gray-600 italic">I will buy a new house</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha nt3lm l-ingliziya</p>
                <p className="text-gray-600 italic">I will learn English</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha nzur l-walidayn</p>
                <p className="text-gray-600 italic">I will visit my parents</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Weather Predictions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Ghedda gha tkun shta</p>
                <p className="text-gray-600 italic">Tomorrow it will rain</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha ykun l-jaw zwin</p>
                <p className="text-gray-600 italic">The weather will be nice</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha tkun l-harara 3aliya</p>
                <p className="text-gray-600 italic">The temperature will be high</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha ykun barrd bzaf</p>
                <p className="text-gray-600 italic">It will be very cold</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-5">
            <h4 className="font-medium text-blue-800 mb-3">Social Predictions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha yji bzzaf d nas</p>
                <p className="text-gray-600 italic">Many people will come</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha tkun l-hafla zwina</p>
                <p className="text-gray-600 italic">The party will be nice</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha nkunu s3da bzaf</p>
                <p className="text-gray-600 italic">We will be very happy</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="font-medium">Gha ykun nhar zwin</p>
                <p className="text-gray-600 italic">It will be a beautiful day</p>
              </div>
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
          <p className="text-sm text-blue-700 mb-2">Topic: Making weekend plans</p>
          
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
                <p className="pl-2 text-gray-800">Ash gha tdir f weekend?</p>
                <p className="pl-2 text-gray-600 italic">(What will you do on the weekend?)</p>
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
                <p className="font-medium text-pink-800">Fatima:</p>
                <p className="pl-2 text-gray-800">Gha nmshi l-beach m3a s7abti. U nta?</p>
                <p className="pl-2 text-gray-600 italic">(I will go to the beach with my friends. And you?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-blue-800">Youssef:</p>
                <p className="pl-2 text-gray-800">Ana gha nqra shwiya, u ba3dha gha nshuf film.</p>
                <p className="pl-2 text-gray-600 italic">(I will study a bit, and then I will watch a movie.)</p>
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
                <p className="font-medium text-pink-800">Fatima:</p>
                <p className="pl-2 text-gray-800">Zwin! Gha nkunu s3da bzaf!</p>
                <p className="pl-2 text-gray-600 italic">(Nice! We will be very happy!)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
          <p className="font-medium text-yellow-800">Practice Tip:</p>
          <p className="text-gray-700">Practice making your own future plans using "gha" + present tense verbs. Start with simple activities and gradually add more complex plans.</p>
        </div>
      </div>
      
      {/* Negative Future */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
          Negative Future
        </h2>
        
        <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
          <p className="mb-3">To form the negative future, add <span className="font-medium">ma</span> before "ghadi/gha" and <span className="font-medium">sh</span> after the verb.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Affirmative:</p>
              <p className="text-gray-700">Gha nmshi l-suq.</p>
              <p className="text-gray-600 italic">(I will go to the market.)</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Negative:</p>
              <p className="text-gray-700">Ma gha nmshi-sh l-suq.</p>
              <p className="text-gray-600 italic">(I will not go to the market.)</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ma gha nkhdm-sh ghedda</p>
              <p className="text-gray-600 italic">I will not work tomorrow</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ma gha yji-sh l-hafla</p>
              <p className="text-gray-600 italic">He will not come to the party</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="font-medium">Ma gha nsafr-sh had l-3am</p>
              <p className="text-gray-600 italic">I will not travel this year</p>
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
              <p className="text-gray-700">Moroccans often use "Inshallah" (God willing) when talking about future plans, showing respect for divine will</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Time is often viewed more flexibly in Moroccan culture - "gha nji ba3d shwiya" might mean anywhere from 30 minutes to 2 hours</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">When making plans with Moroccans, it's polite to be flexible and understanding about timing</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Family obligations often take priority over other plans, so future commitments may change</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}