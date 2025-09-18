"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedFour() {
  return (
    <LessonLayout 
      title="Literary Arabic Influence" 
      level="advanced" 
      lessonNumber={4}
      nextLesson="advanced-five"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master the sophisticated art of code-switching between Darija and Modern Standard Arabic (Fusha) to elevate your speech for formal contexts and demonstrate linguistic versatility.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Understand when and how to incorporate Fusha elements</li>
            <li>Master formal vocabulary and grammatical structures</li>
            <li>Learn code-switching techniques for different contexts</li>
            <li>Practice elevated speech patterns for professional settings</li>
          </ul>
        </div>
      </div>
      
      {/* Code-Switching Fundamentals */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Code-Switching Fundamentals
        </h2>
        
        <p className="text-gray-700 mb-6">Code-switching between Darija and Fusha is a sophisticated linguistic skill that demonstrates education and cultural awareness:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">When to Use Fusha</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600">• Formal speeches and presentations</p>
              <p className="text-gray-600">• Academic and educational contexts</p>
              <p className="text-gray-600">• News broadcasting and media</p>
              <p className="text-gray-600">• Religious and ceremonial occasions</p>
              <p className="text-gray-600">• Legal and governmental settings</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Code-Switching Strategies</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-gray-600">• Start with Fusha, transition to Darija</p>
              <p className="text-gray-600">• Use Fusha for key concepts</p>
              <p className="text-gray-600">• Maintain Darija for personal anecdotes</p>
              <p className="text-gray-600">• Adjust based on audience reaction</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Formal Vocabulary Elevation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Formal Vocabulary Elevation
        </h2>
        
        <p className="text-gray-700 mb-6">Transform your everyday Darija vocabulary into sophisticated Fusha expressions:</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Common Expressions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Thinking & Opinions</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Ana kan-denn</span>
                    <span className="text-gray-800 font-medium">Fusha: Ana a3taqid</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: F ra2yi</span>
                    <span className="text-gray-800 font-medium">Fusha: Fi nazari</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Hada mzyan</span>
                    <span className="text-gray-800 font-medium">Fusha: Hatha jayyid</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Politeness & Courtesy</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Afak</span>
                    <span className="text-gray-800 font-medium">Fusha: Min fadlik</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Shukran bzzaf</span>
                    <span className="text-gray-800 font-medium">Fusha: Shukran jazilan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Smeh liya</span>
                    <span className="text-gray-800 font-medium">Fusha: A3dhurni</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Time & Scheduling</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Daba</span>
                    <span className="text-gray-800 font-medium">Fusha: Al-an</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Ghedda</span>
                    <span className="text-gray-800 font-medium">Fusha: Ghadan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: L-bareh</span>
                    <span className="text-gray-800 font-medium">Fusha: Al-barihah</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Professional Terms</p>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Khedma</span>
                    <span className="text-gray-800 font-medium">Fusha: Amal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Mushkil</span>
                    <span className="text-gray-800 font-medium">Fusha: Mushkilah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Darija: Hal</span>
                    <span className="text-gray-800 font-medium">Fusha: Hal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grammatical Structures */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibent mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Grammatical Structures
        </h2>
        
        <p className="text-gray-700 mb-6">Master the grammatical differences that distinguish formal from casual speech:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Verb Conjugations</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Present Tense (I write)</p>
                <p className="text-gray-600 text-sm">Darija: Ana kan-kteb</p>
                <p className="text-gray-800 text-sm font-medium">Fusha: Ana aktub</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Past Tense (I wrote)</p>
                <p className="text-gray-600 text-sm">Darija: Ana ktbt</p>
                <p className="text-gray-800 text-sm font-medium">Fusha: Ana katabtu</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Future Tense (I will write)</p>
                <p className="text-gray-600 text-sm">Darija: Ana ghadi n-kteb</p>
                <p className="text-gray-800 text-sm font-medium">Fusha: Ana sa-aktub</p>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Sentence Structure</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Question Formation</p>
                <p className="text-gray-600 text-sm">Darija: Wash nta mzyan?</p>
                <p className="text-gray-800 text-sm font-medium">Fusha: Hal anta bi-khayr?</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Negation</p>
                <p className="text-gray-600 text-sm">Darija: Ma-kan-qrash</p>
                <p className="text-gray-800 text-sm font-medium">Fusha: La aqra2</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Possession</p>
                <p className="text-gray-600 text-sm">Darija: Dyali</p>
                <p className="text-gray-800 text-sm font-medium">Fusha: Li / Khassi bi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Context-Specific Applications */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Context-Specific Applications
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Business Presentations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Opening Statements</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">"As-salamu alaykum wa rahmatullahi wa barakatuh"</p>
                  <p className="text-gray-700">"Uhibbu an uqaddim lakum..."</p>
                  <p className="text-gray-500 italic">(I would like to present to you...)</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Transitional Phrases</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">"Bi-l-nisba li..." (Regarding...)</p>
                  <p className="text-gray-700">"Min jiha ukhra..." (On the other hand...)</p>
                  <p className="text-gray-700">"Fi l-khitam..." (In conclusion...)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Academic Discussions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">Expressing Analysis</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">"Min khilal al-tahlil..." (Through analysis...)</p>
                  <p className="text-gray-700">"Yumkin al-qawl anna..." (It can be said that...)</p>
                  <p className="text-gray-700">"Hadhihi al-nata2ij tudhill..." (These results indicate...)</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Citing Sources</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">"Hasab al-bahith..." (According to the researcher...)</p>
                  <p className="text-gray-700">"Kama dhakara..." (As mentioned by...)</p>
                  <p className="text-gray-700">"Fi dirasa sabiqah..." (In a previous study...)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Media & Broadcasting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800">News Reporting</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">"Fi akhbar al-yawm..." (In today's news...)</p>
                  <p className="text-gray-700">"Hasab masadir rasimiyyah..." (According to official sources...)</p>
                  <p className="text-gray-700">"Wa fi tatauwwur akhar..." (In another development...)</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-purple-800">Interview Techniques</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-700">"Kayf tuqayyim..." (How do you evaluate...)</p>
                  <p className="text-gray-700">"Ma ra2yuk fi..." (What is your opinion on...)</p>
                  <p className="text-gray-700">"Hal yumkin an tuwaddih..." (Can you clarify...)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Practice Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Practice Conversation: Job Interview
        </h2>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5">
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Interviewer (Fusha):</p>
                <p className="text-gray-700">Ahlan wa sahlan bikum. Kayf yumkinukum an tuqaddim anfusakum?</p>
                <p className="text-gray-500 italic text-sm">(Welcome. How can you introduce yourselves?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Candidate (Code-switching):</p>
                <p className="text-gray-700">Shukran jazilan. Ismi Ahmed, wa ana kharij min jami3at... (switches to Darija) wa ana kan-khdm f had l-maydaan mn 5 snin.</p>
                <p className="text-gray-500 italic text-sm">(Thank you very much. My name is Ahmed, and I graduated from university... and I've been working in this field for 5 years.)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Interviewer:</p>
                <p className="text-gray-700">Ma hiya niqat quwwatikum al-ra2isiyyah?</p>
                <p className="text-gray-500 italic text-sm">(What are your main strengths?)</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Candidate:</p>
                <p className="text-gray-700">A3taqid anna niqat quwwati al-ra2isiyyah hiya... (switches) ana daymen kan-khdm b jiddiyyah w kan-hall l-mashakel b sur3ah.</p>
                <p className="text-gray-500 italic text-sm">(I believe my main strength is... I always work seriously and solve problems quickly.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Advanced Code-Switching Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Start formal, then gradually incorporate Darija for relatability</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Use Fusha for technical terms, Darija for explanations</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Practice smooth transitions - avoid abrupt switches</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Match your audience's level - don't over-formalize with casual speakers</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}