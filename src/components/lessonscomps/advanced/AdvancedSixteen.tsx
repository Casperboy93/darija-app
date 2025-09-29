"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedSixteen() {
  return (
    <LessonLayout 
      title="International Relations and Diplomacy" 
      level="advanced" 
      lessonNumber={16}
      previousLesson="advanced-fifteen"
      nextLesson="advanced-seventeen"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master international relations and diplomatic vocabulary in Darija. Learn to discuss global politics, treaties, international organizations, and diplomatic protocols with sophistication.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master diplomatic and international relations terminology</li>
            <li>Learn treaty and agreement language</li>
            <li>Practice formal diplomatic communication</li>
            <li>Understand global politics vocabulary</li>
          </ul>
        </div>
      </div>
      
      {/* International Organizations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          International Organizations
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for major international organizations and institutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">United Nations System</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Global</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Al-Umam al-Muttaḥida:</span> United Nations</p>
              <p className="text-sm"><span className="font-semibold">Majlis al-Amn:</span> Security Council</p>
              <p className="text-sm"><span className="font-semibold">Al-Jamʿiyya al-ʿĀmma:</span> General Assembly</p>
              <p className="text-sm"><span className="font-semibold">Maḥkamat al-ʿAdl:</span> International Court of Justice</p>
              <p className="text-sm"><span className="font-semibold">Al-Amīn al-ʿĀmm:</span> Secretary-General</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Regional Organizations</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Regional</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Jāmiʿat al-Duwal al-ʿArabiyya:</span> Arab League</p>
              <p className="text-sm"><span className="font-semibold">Al-Ittiḥād al-Ūrūbbī:</span> European Union</p>
              <p className="text-sm"><span className="font-semibold">Al-Ittiḥād al-Afrīqī:</span> African Union</p>
              <p className="text-sm"><span className="font-semibold">Ḥilf Shamāl al-Aṭlasī:</span> NATO</p>
              <p className="text-sm"><span className="font-semibold">Munẓẓamat al-Taʿāwun al-Islāmī:</span> OIC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diplomatic Protocols */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Diplomatic Protocols and Procedures
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Diplomatic Hierarchy and Titles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Diplomatic Ranks</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Safīr:</span> Ambassador</p>
                <p><span className="font-semibold">Qunṣul:</span> Consul</p>
                <p><span className="font-semibold">Mumaththil:</span> Representative</p>
                <p><span className="font-semibold">Mubʿūth:</span> Envoy</p>
                <p><span className="font-semibold">Mulḥaq:</span> Attaché</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Diplomatic Missions</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Safāra:</span> Embassy</p>
                <p><span className="font-semibold">Qunṣuliyya:</span> Consulate</p>
                <p><span className="font-semibold">Baʿtha:</span> Mission</p>
                <p><span className="font-semibold">Wafd:</span> Delegation</p>
                <p><span className="font-semibold">Maktab irtibāṭ:</span> Liaison office</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Diplomatic Documents</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Jawāz siyāsī:</span> Diplomatic passport</p>
                <p><span className="font-semibold">Iʿtimād:</span> Credentials</p>
                <p><span className="font-semibold">Mudhakkira:</span> Memorandum</p>
                <p><span className="font-semibold">Nota:</span> Diplomatic note</p>
                <p><span className="font-semibold">Barūtūkūl:</span> Protocol</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treaties and Agreements */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Treaties and International Agreements
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Types of International Agreements</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Agreement Types</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Muʿāhada</p>
                  <p className="text-xs text-gray-600">Treaty</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ittifāqiyya</p>
                  <p className="text-xs text-gray-600">Agreement</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mīthāq</p>
                  <p className="text-xs text-gray-600">Charter</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Brūtūkūl</p>
                  <p className="text-xs text-gray-600">Protocol</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tafāhum</p>
                  <p className="text-xs text-gray-600">Understanding</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ḥilf</p>
                  <p className="text-xs text-gray-600">Alliance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Treaty Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Tafāwuḍ</p>
                  <p className="text-xs text-gray-600">Negotiation</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tawqīʿ</p>
                  <p className="text-xs text-gray-600">Signing</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taṣdīq</p>
                  <p className="text-xs text-gray-600">Ratification</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tanfīdh</p>
                  <p className="text-xs text-gray-600">Implementation</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Insiḥāb</p>
                  <p className="text-xs text-gray-600">Withdrawal</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ilghāʾ</p>
                  <p className="text-xs text-gray-600">Abrogation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Issues */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Global Issues and Challenges
        </h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-4">Contemporary Global Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-700 mb-2">Security Issues</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Irhāb:</span> Terrorism</p>
                <p><span className="font-semibold">Asliḥa damār shāmil:</span> WMD</p>
                <p><span className="font-semibold">Ṣirāʿāt:</span> Conflicts</p>
                <p><span className="font-semibold">Lājīʾūn:</span> Refugees</p>
                <p><span className="font-semibold">Amn qawmī:</span> National security</p>
                <p><span className="font-semibold">Ḥifẓ salām:</span> Peacekeeping</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-700 mb-2">Economic & Environmental</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Taghyīr munākhī:</span> Climate change</p>
                <p><span className="font-semibold">Faqr:</span> Poverty</p>
                <p><span className="font-semibold">Tanmiya mustadāma:</span> Sustainable development</p>
                <p><span className="font-semibold">Tijāra ʿālamiyya:</span> Global trade</p>
                <p><span className="font-semibold">Azma māliyya:</span> Financial crisis</p>
                <p><span className="font-semibold">Ḥuqūq insān:</span> Human rights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diplomatic Language */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Diplomatic Language and Communication
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Formal Diplomatic Expressions</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Formal Openings</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Bi-ism ḥukūmatī</p>
                  <p className="text-xs text-gray-600">On behalf of my government</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Yashrafunī an uʿbir</p>
                  <p className="text-xs text-gray-600">I have the honor to express</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Bi-kāmil al-iḥtirām</p>
                  <p className="text-xs text-gray-600">With full respect</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Fī iṭār al-ʿalāqāt</p>
                  <p className="text-xs text-gray-600">Within the framework of relations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Diplomatic Positions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Mawqif rasmī</p>
                  <p className="text-xs text-gray-600">Official position</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taʾkīd iltizām</p>
                  <p className="text-xs text-gray-600">Reaffirm commitment</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Iʿrāb ʿan qalaq</p>
                  <p className="text-xs text-gray-600">Express concern</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Daʿwa ilā ḥiwār</p>
                  <p className="text-xs text-gray-600">Call for dialogue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multilateral Diplomacy */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Multilateral Diplomacy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Summit Meetings</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Qimma</p>
                <p className="text-gray-600 text-sm">Summit</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Muʾtamar</p>
                <p className="text-gray-600 text-sm">Conference</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Jalsa ʿāmma</p>
                <p className="text-gray-600 text-sm">Plenary session</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Lajān farʿiyya</p>
                <p className="text-gray-600 text-sm">Working committees</p>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Voting and Decisions</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Taṣwīt</p>
                <p className="text-gray-600 text-sm">Voting</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Ijmāʿ</p>
                <p className="text-gray-600 text-sm">Consensus</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Aghalbiyya</p>
                <p className="text-gray-600 text-sm">Majority</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Ḥaqq naqḍ</p>
                <p className="text-gray-600 text-sm">Veto power</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Diplomatic Meeting
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">As-Safīr al-Maghribī:</p>
              <p className="text-gray-700">Yashrafunī an uʿbir ʿan taqdīr ḥukūmatī lil-juhūd al-mubadhūla fī ḥall hādhihi al-azma.</p>
              <p className="text-sm text-gray-500 mt-1">I have the honor to express my government's appreciation for the efforts made in resolving this crisis.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">As-Safīr al-Faransī:</p>
              <p className="text-gray-700">Naḥnu muqtaniʿūn bi-anna al-ḥall yajibu an yakūn ʿan ṭarīq al-tafāwuḍ wa al-ḥiwār.</p>
              <p className="text-sm text-gray-500 mt-1">We are convinced that the solution must come through negotiation and dialogue.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">As-Safīr al-Maghribī:</p>
              <p className="text-gray-700">Naḥnu mustāʿiddūn lil-mushāraka fī ayy mubādara tadʿam al-istiqrār fī al-minṭaqa.</p>
              <p className="text-sm text-gray-500 mt-1">We are ready to participate in any initiative that supports stability in the region.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">As-Safīr al-Faransī:</p>
              <p className="text-gray-700">Hādhā yataṭallab tanṣīq wathīq bayna jamīʿ al-aṭrāf al-muʿniyya.</p>
              <p className="text-sm text-gray-500 mt-1">This requires close coordination between all concerned parties.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
          Diplomatic Excellence!
        </h2>
        <p className="text-lg">You've mastered international relations and diplomatic vocabulary in Darija! Morocco has a rich diplomatic tradition and plays an active role in international organizations like the UN, Arab League, and African Union. This knowledge prepares you for high-level international discourse.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🌍 Fun fact: Morocco was one of the first countries to recognize the United States' independence in 1777!</p>
        </div>
      </div>
    </LessonLayout>
  );
}