"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateSeven() {
  return (
    <LessonLayout 
      title="Business and Work" 
      level="intermediate" 
      lessonNumber={7}
      previousLesson="intermediate-six"
      nextLesson="intermediate-eight"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master professional vocabulary and business communication in Darija. Learn to discuss work, careers, and business interactions confidently in Moroccan Arabic.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master professional and business vocabulary</li>
            <li>Learn workplace communication phrases</li>
            <li>Understand job interview conversations</li>
            <li>Practice business meeting discussions</li>
          </ul>
        </div>
      </div>
      
      {/* Professional Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Professional Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Essential terms for discussing work, careers, and business in Morocco.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Khidma</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Work</span>
            </div>
            <p className="text-gray-600">Job/Work</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: khid-ma</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Lqīt khidma jdīda f Casablanca" (I found a new job in Casablanca)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Mudīr</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Position</span>
            </div>
            <p className="text-gray-600">Manager/Director</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: mu-dir</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Mudīr ghadi yji f l ijtimā3" (The manager will come to the meeting)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Sharika</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Business</span>
            </div>
            <p className="text-gray-600">Company</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: sha-ri-ka</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Sharika kbīra u mashūra" (A big and famous company)</p>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Maktab</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Place</span>
            </div>
            <p className="text-gray-600">Office</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: mak-tab</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Maktabī f ṭābiq thālith" (My office is on the third floor)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Titles and Professions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Job Titles and Professions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-3">Professional Services</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Muḥāsib:</span> Accountant</p>
              <p><span className="font-semibold">Muḥāmī:</span> Lawyer</p>
              <p><span className="font-semibold">Muhandis:</span> Engineer</p>
              <p><span className="font-semibold">Ṭabīb:</span> Doctor</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-3">Business Roles</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Bāyi3:</span> Salesperson</p>
              <p><span className="font-semibold">Kātib:</span> Secretary</p>
              <p><span className="font-semibold">Muwaẓẓaf:</span> Employee</p>
              <p><span className="font-semibold">Rāʾīs:</span> Boss/Chief</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-3">Technical Fields</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Mubaramij:</span> Programmer</p>
              <p><span className="font-semibold">Muṣammim:</span> Designer</p>
              <p><span className="font-semibold">Mudarris:</span> Teacher</p>
              <p><span className="font-semibold">Ṣaḥafī:</span> Journalist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Meeting Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Business Meeting Phrases
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Essential Meeting Vocabulary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-purple-700">Ijtimā3</p>
              <p className="text-gray-600">Meeting</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Jadwal a3māl</p>
              <p className="text-gray-600">Agenda</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Mashrū3</p>
              <p className="text-gray-600">Project</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Taqrīr</p>
              <p className="text-gray-600">Report</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Qarār</p>
              <p className="text-gray-600">Decision</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">Mīzāniyya</p>
              <p className="text-gray-600">Budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Interview Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Job Interview Conversation
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Sample Interview Dialogue</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
              <p className="font-semibold text-orange-700">Interviewer: Qūl līya 3la nafsak</p>
              <p className="text-gray-600 italic">Tell me about yourself</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">Candidate: Smītī Ahmed, 3andī diploma f l informatique</p>
              <p className="text-gray-600 italic">My name is Ahmed, I have a degree in computer science</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
              <p className="font-semibold text-orange-700">Interviewer: Āsh hiya l khibra dyālak?</p>
              <p className="text-gray-600 italic">What is your experience?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">Candidate: Khdemt thalāth snīn f sharika teknolojiya</p>
              <p className="text-gray-600 italic">I worked three years at a technology company</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
              <p className="font-semibold text-orange-700">Interviewer: Līsh bghītī tkhdem m3āna?</p>
              <p className="text-gray-600 italic">Why do you want to work with us?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">Candidate: Sharikatkum mashūra u bghīt nta3allem aktar</p>
              <p className="text-gray-600 italic">Your company is famous and I want to learn more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workplace Communication */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Workplace Communication
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-red-800 mb-3">Making Requests</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Mumkin t3āwnnī?:</span> Can you help me?</p>
              <p className="text-sm"><span className="font-semibold">Bghīt nṭlub minnak:</span> I want to ask you</p>
              <p className="text-sm"><span className="font-semibold">Wāsh mumkin...?:</span> Is it possible...?</p>
              <p className="text-sm"><span className="font-semibold">3afāk dir līya:</span> Please do for me</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-red-800 mb-3">Giving Updates</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Mashrū3 māshī mazyan:</span> Project is going well</p>
              <p className="text-sm"><span className="font-semibold">Kammelt l 3amal:</span> I finished the work</p>
              <p className="text-sm"><span className="font-semibold">Bāqī kāyn mushkil:</span> There's still a problem</p>
              <p className="text-sm"><span className="font-semibold">Ḥtāj waqt zāyid:</span> Need more time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Etiquette */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
          Business Etiquette
        </h2>
        
        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-indigo-800 mb-2">Professional Greetings</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use "Salāmu 3alaykum" in formal settings</li>
                <li>• Shake hands with same-gender colleagues</li>
                <li>• Address seniors with respect titles</li>
                <li>• Wait to be invited to sit</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-indigo-800 mb-2">Meeting Behavior</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Arrive on time or slightly early</li>
                <li>• Bring business cards if available</li>
                <li>• Listen actively and take notes</li>
                <li>• Ask questions respectfully</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-yellow-800 mb-4">Business Presentation</h3>
          <p className="text-gray-700 mb-4">Prepare a short presentation about your work or a project using these phrases:</p>
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-yellow-800 mb-2">Opening:</p>
                <p className="text-sm text-gray-700">"Ahlan wa sahlan, ghādi nḥkī 3la..."</p>
                <p className="text-xs text-gray-500">(Welcome, I'm going to talk about...)</p>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Main Points:</p>
                <p className="text-sm text-gray-700">"L nuqṭa l muhimma hiya..."</p>
                <p className="text-xs text-gray-500">(The important point is...)</p>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Conclusion:</p>
                <p className="text-sm text-gray-700">"F l khitām, natāʾij kānat..."</p>
                <p className="text-xs text-gray-500">(In conclusion, the results were...)</p>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Questions:</p>
                <p className="text-sm text-gray-700">"Wāsh 3andkum asʾila?"</p>
                <p className="text-xs text-gray-500">(Do you have questions?)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Professional Achievement!
        </h2>
        <p className="text-lg">You've mastered business and workplace vocabulary in Darija! You can now confidently participate in professional conversations, job interviews, and business meetings. Your career prospects in Morocco just got much brighter!</p>
      </div>
    </LessonLayout>
  );
}