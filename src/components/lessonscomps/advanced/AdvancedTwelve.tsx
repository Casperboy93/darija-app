"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedTwelve() {
  return (
    <LessonLayout 
      title="Diplomatic and Formal Communication" 
      level="advanced" 
      lessonNumber={12}
      previousLesson="advanced-eleven"
      nextLesson="advanced-thirteen"
    >
      {/* Lesson Overview */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master the art of diplomatic and formal communication in Darija. Learn sophisticated language for official settings, negotiations, and high-level professional interactions.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master formal and diplomatic vocabulary</li>
            <li>Learn protocol and etiquette language</li>
            <li>Practice negotiation and mediation techniques</li>
            <li>Understand official and ceremonial expressions</li>
          </ul>
        </div>
      </div>
      
      {/* Formal Greetings and Protocol */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Formal Greetings and Protocol
        </h2>
        
        <p className="text-gray-700 mb-6">Essential formal expressions for diplomatic and official encounters.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Official Greetings</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Formal</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Ahlan wa sahlan bikum:</span> Welcome (formal)</p>
              <p className="text-sm"><span className="font-semibold">Tasharrafna bi ziyāratikum:</span> We are honored by your visit</p>
              <p className="text-sm"><span className="font-semibold">Bi kull iḥtirām:</span> With all respect</p>
              <p className="text-sm"><span className="font-semibold">Fī khidmatikum:</span> At your service</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ceremonial Language</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ceremonial</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Bi hādhihi al-munāsaba:</span> On this occasion</p>
              <p className="text-sm"><span className="font-semibold">Yusarrunā an nu'lin:</span> We are pleased to announce</p>
              <p className="text-sm"><span className="font-semibold">Fī ḥaḍrat as-sāda:</span> In the presence of distinguished guests</p>
              <p className="text-sm"><span className="font-semibold">Takrīman li:</span> In honor of</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diplomatic Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Diplomatic Vocabulary
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Key Diplomatic Terms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Negotiations</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Tafāwuḍ:</span> Negotiation</p>
                <p><span className="font-semibold">Ittifāqiyya:</span> Agreement</p>
                <p><span className="font-semibold">Tasāwī:</span> Compromise</p>
                <p><span className="font-semibold">Ḥall wasat:</span> Middle solution</p>
                <p><span className="font-semibold">Tawāfuq:</span> Consensus</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Official Relations</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Siyāsa:</span> Policy</p>
                <p><span className="font-semibold">Diplomāsiyya:</span> Diplomacy</p>
                <p><span className="font-semibold">ʿAlāqāt rasmiyya:</span> Official relations</p>
                <p><span className="font-semibold">Taʿāwun:</span> Cooperation</p>
                <p><span className="font-semibold">Sharāka:</span> Partnership</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Formal Procedures</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ijrāʾāt:</span> Procedures</p>
                <p><span className="font-semibold">Brūtūkūl:</span> Protocol</p>
                <p><span className="font-semibold">Marāsim:</span> Ceremonies</p>
                <p><span className="font-semibold">Tanẓīm:</span> Organization</p>
                <p><span className="font-semibold">Tanfīdh:</span> Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Negotiation Techniques
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Advanced Negotiation Language</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Opening Positions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Presenting Your Position:</p>
                  <p className="text-sm text-gray-600">Mawqifunā huwwa anna...</p>
                  <p className="text-xs text-gray-500">Our position is that...</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Expressing Flexibility:</p>
                  <p className="text-sm text-gray-600">Naḥnu mustāʿiddūn lil-munāqasha</p>
                  <p className="text-xs text-gray-500">We are ready for discussion</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Finding Common Ground</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Nattafiq ʿalā anna:</span> We agree that</p>
                <p><span className="font-semibold">Hunāka nuqaṭ tashābuh:</span> There are points of similarity</p>
                <p><span className="font-semibold">Yumkinunā an najid ḥall:</span> We can find a solution</p>
                <p><span className="font-semibold">Hādhā fī maṣlaḥat al-jamīʿ:</span> This is in everyone's interest</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Diplomatic Disagreement</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Maʿa kāmil al-iḥtirām:</span> With all due respect</p>
                <p><span className="font-semibold">Lā nattafiq tamāman:</span> We don't completely agree</p>
                <p><span className="font-semibold">Hunāka sūʾ fahm:</span> There's a misunderstanding</p>
                <p><span className="font-semibold">Naḥtāj ilā tawḍīḥ:</span> We need clarification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Correspondence */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Official Correspondence
        </h2>
        
        <p className="text-gray-700 mb-6">Master the language of formal letters, memos, and official documents.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-green-800 mb-3">Letter Openings</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-green-700">Sayyidī al-muḥtaram</p>
                <p className="text-gray-600 text-sm">Dear Sir (formal)</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">Sayyidatī al-muḥtarama</p>
                <p className="text-gray-600 text-sm">Dear Madam (formal)</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">Aṣḥāb as-saʿāda</p>
                <p className="text-gray-600 text-sm">Your Excellencies</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-green-800 mb-3">Letter Closings</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-green-700">Taqabbalū fāʾiq al-iḥtirām</p>
                <p className="text-gray-600 text-sm">Accept our highest respect</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">Wa tafaḍḍalū bi-qabūl</p>
                <p className="text-gray-600 text-sm">Please accept</p>
              </div>
              <div>
                <p className="font-semibold text-green-700">Fī intizār radikum</p>
                <p className="text-gray-600 text-sm">Awaiting your response</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mediation and Conflict Resolution */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Mediation and Conflict Resolution
        </h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-4">Mediation Language</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-700 mb-2">De-escalation</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Daʿūnā nataʿāmal bi-hudūʾ:</span> Let's handle this calmly</p>
                <p><span className="font-semibold">Kull ṭaraf lahu wujhat naẓar:</span> Each side has a viewpoint</p>
                <p><span className="font-semibold">Al-ḥiwār huwa al-ḥall:</span> Dialogue is the solution</p>
                <p><span className="font-semibold">Lā dāʿī lil-tawattur:</span> There's no need for tension</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-700 mb-2">Finding Solutions</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Yumkinunā an najid ṭarīq:</span> We can find a way</p>
                <p><span className="font-semibold">Hunāka ḥulūl mutaʿaddida:</span> There are multiple solutions</p>
                <p><span className="font-semibold">Naḥnu fī nafs al-qārib:</span> We're in the same boat</p>
                <p><span className="font-semibold">Al-maṣlaḥa al-mushtaraka:</span> Common interest</p>
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
              <p className="font-semibold text-blue-600">Ambassador:</p>
              <p className="text-gray-700">Ahlan wa sahlan bikum fī sifāratinā. Tasharrafnā bi ziyāratikum al-karīma.</p>
              <p className="text-sm text-gray-500 mt-1">Welcome to our embassy. We are honored by your kind visit.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Minister:</p>
              <p className="text-gray-700">Shukran lakum. Jiʾnā li-munāqashat masāʾil muhimma tataʿallaq bil-taʿāwun bayn buldaynā.</p>
              <p className="text-sm text-gray-500 mt-1">Thank you. We came to discuss important matters regarding cooperation between our countries.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ambassador:</p>
              <p className="text-gray-700">Bi kull ta'kīd. Naḥnu mustāʿiddūn lil-ḥiwār al-bunāʾ wa najid ḥulūl takhdum al-jamīʿ.</p>
              <p className="text-sm text-gray-500 mt-1">Certainly. We are ready for constructive dialogue and to find solutions that serve everyone.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Minister:</p>
              <p className="text-gray-700">Hādhā mā naṣbū ilayh. Al-sharāka bayn buldaynā lahā tārīkh ṭawīl wa mustaqbal wāʿid.</p>
              <p className="text-sm text-gray-500 mt-1">This is what we aspire to. The partnership between our countries has a long history and a promising future.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
          Diplomatic Excellence!
        </h2>
        <p className="text-lg">You've mastered the sophisticated language of diplomacy and formal communication! In Moroccan culture, formal language shows respect and education. These skills will serve you in professional, academic, and official settings throughout the Arab world.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🎯 Remember: Diplomatic language emphasizes respect, patience, and finding common ground - values deeply rooted in Moroccan culture.</p>
        </div>
      </div>
    </LessonLayout>
  );
}