"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedTwenty() {
  return (
    <LessonLayout 
      title="Global Leadership and Cross-Cultural Communication" 
      level="advanced" 
      lessonNumber={20}
      previousLesson="advanced-nineteen"
      nextLesson={undefined}
    >
      {/* Lesson Overview */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Final Advanced Lesson
        </h2>
        <p className="text-gray-700">Master global leadership and cross-cultural communication in Darija. Learn to navigate international business, diplomatic relations, and multicultural environments with confidence and cultural sensitivity.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master global leadership vocabulary</li>
            <li>Learn cross-cultural communication skills</li>
            <li>Practice international business terminology</li>
            <li>Understand diplomatic and multicultural contexts</li>
          </ul>
        </div>
      </div>
      
      {/* Global Leadership */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Global Leadership and Management
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for international leadership and management roles.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Leadership Qualities</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Leadership</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Qiyāda ʿālamiyya:</span> Global leadership</p>
              <p className="text-sm"><span className="font-semibold">Ruʾya istirātījiyya:</span> Strategic vision</p>
              <p className="text-sm"><span className="font-semibold">Qiyāda taḥwīliyya:</span> Transformational leadership</p>
              <p className="text-sm"><span className="font-semibold">Dhakāʾ ʿāṭifī:</span> Emotional intelligence</p>
              <p className="text-sm"><span className="font-semibold">Qiyāda thaqāfiyya:</span> Cultural leadership</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Management Skills</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Management</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Idāra mutaʿaddidat thaqāfāt:</span> Multicultural management</p>
              <p className="text-sm"><span className="font-semibold">Takhtīṭ istirātījī:</span> Strategic planning</p>
              <p className="text-sm"><span className="font-semibold">Idārat taghyīr:</span> Change management</p>
              <p className="text-sm"><span className="font-semibold">Qiyādat farīq:</span> Team leadership</p>
              <p className="text-sm"><span className="font-semibold">Ittikhadh qarārāt:</span> Decision making</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Cultural Communication */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Cross-Cultural Communication
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Cultural Competency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Cultural Awareness</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Waʿy thaqāfī:</span> Cultural awareness</p>
                <p><span className="font-semibold">Ḥassāsiyya thaqāfiyya:</span> Cultural sensitivity</p>
                <p><span className="font-semibold">Tanawwuʿ thaqāfī:</span> Cultural diversity</p>
                <p><span className="font-semibold">Tafāhum mutabādal:</span> Mutual understanding</p>
                <p><span className="font-semibold">Iḥtirām thaqāfāt:</span> Cultural respect</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Communication Styles</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Tawāṣul ghayr lafẓī:</span> Non-verbal communication</p>
                <p><span className="font-semibold">Siyāq thaqāfī:</span> Cultural context</p>
                <p><span className="font-semibold">Asālīb tawāṣul:</span> Communication styles</p>
                <p><span className="font-semibold">Lugha jasad:</span> Body language</p>
                <p><span className="font-semibold">Tawāṣul fāʿil:</span> Effective communication</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Conflict Resolution</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ḥall nizāʿāt:</span> Conflict resolution</p>
                <p><span className="font-semibold">Wasāṭa thaqāfiyya:</span> Cultural mediation</p>
                <p><span className="font-semibold">Tafāwuḍ:</span> Negotiation</p>
                <p><span className="font-semibold">Binā jusūr:</span> Bridge building</p>
                <p><span className="font-semibold">Ḥulūl waṣaṭ:</span> Compromise solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* International Business */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          International Business and Trade
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Global Business Operations</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">International Trade</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Tijāra ʿālamiyya</p>
                  <p className="text-xs text-gray-600">Global trade</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ṣādirāt wa wāridāt</p>
                  <p className="text-xs text-gray-600">Exports and imports</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ittifāqiyyāt tijāriyya</p>
                  <p className="text-xs text-gray-600">Trade agreements</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Aswāq ʿālamiyya</p>
                  <p className="text-xs text-gray-600">Global markets</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Sharākāt istirātījiyya</p>
                  <p className="text-xs text-gray-600">Strategic partnerships</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Istithmār ajnabī</p>
                  <p className="text-xs text-gray-600">Foreign investment</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Business Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Tanmiya aʿmāl</p>
                  <p className="text-xs text-gray-600">Business development</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tawassuʿ ʿālamī</p>
                  <p className="text-xs text-gray-600">Global expansion</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ibtikār wa taṭwīr</p>
                  <p className="text-xs text-gray-600">Innovation and development</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tanāfusiyya</p>
                  <p className="text-xs text-gray-600">Competitiveness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diplomatic Relations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Diplomatic Relations and Protocol
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">International Diplomacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Diplomatic Protocol</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Brūtūkūl diblūmāsī:</span> Diplomatic protocol</p>
                <p><span className="font-semibold">Marāsim rasmiyya:</span> Official ceremonies</p>
                <p><span className="font-semibold">Ādāb diblūmāsiyya:</span> Diplomatic etiquette</p>
                <p><span className="font-semibold">Laqāʾāt rasmiyya:</span> Official meetings</p>
                <p><span className="font-semibold">Tashrifāt:</span> Protocol procedures</p>
                <p><span className="font-semibold">Ḥaflāt istiqbāl:</span> Reception ceremonies</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">International Relations</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">ʿAlāqāt duwaliyya:</span> International relations</p>
                <p><span className="font-semibold">Taʿāwun thunāʾī:</span> Bilateral cooperation</p>
                <p><span className="font-semibold">Taʿāwun mutaʿaddid aṭrāf:</span> Multilateral cooperation</p>
                <p><span className="font-semibold">Muʾtamarāt duwaliyya:</span> International conferences</p>
                <p><span className="font-semibold">Munāẓẓamāt duwaliyya:</span> International organizations</p>
                <p><span className="font-semibold">Siyāsa khārijiyya:</span> Foreign policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multicultural Teams */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Leading Multicultural Teams
        </h2>
        
        <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-4">Team Dynamics</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">Team Building</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Binā farīq</p>
                  <p className="text-xs text-gray-600">Team building</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taʿāwun farīq</p>
                  <p className="text-xs text-gray-600">Team collaboration</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tanwīʿ mahārāt</p>
                  <p className="text-xs text-gray-600">Skill diversity</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tawāzun farīq</p>
                  <p className="text-xs text-gray-600">Team balance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-2">Performance Management</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Taqyīm adāʾ</p>
                  <p className="text-xs text-gray-600">Performance evaluation</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taṭwīr mahārāt</p>
                  <p className="text-xs text-gray-600">Skill development</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taḥfīz farīq</p>
                  <p className="text-xs text-gray-600">Team motivation</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Qiyās natāʾij</p>
                  <p className="text-xs text-gray-600">Results measurement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Communication */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
          Global Communication Strategies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-pink-800 mb-3">Digital Communication</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-pink-700">Tawāṣul raqamī</p>
                <p className="text-gray-600 text-sm">Digital communication</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Muʾtamarāt ʿan buʿd</p>
                <p className="text-gray-600 text-sm">Video conferences</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Manāṣṣāt ʿālamiyya</p>
                <p className="text-gray-600 text-sm">Global platforms</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Tawāṣul fawrī</p>
                <p className="text-gray-600 text-sm">Instant communication</p>
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50 border border-pink-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-pink-800 mb-3">Presentation Skills</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-pink-700">Taqdīm ʿālamī</p>
                <p className="text-gray-600 text-sm">Global presentation</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Khuṭab ʿāmma</p>
                <p className="text-gray-600 text-sm">Public speaking</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Tawāṣul muʾaththir</p>
                <p className="text-gray-600 text-sm">Impactful communication</p>
              </div>
              <div>
                <p className="font-semibold text-pink-700">Iqnāʿ jamhūr</p>
                <p className="text-gray-600 text-sm">Audience persuasion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: International Summit
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ambassador Fatima:</p>
              <p className="text-gray-700">Al-Maghrib yataṭallaʿu ilā tawsīʿ sharākātih al-iqtiṣādiyya maʿ jamīʿ al-qārāt.</p>
              <p className="text-sm text-gray-500 mt-1">Morocco looks forward to expanding its economic partnerships with all continents.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Minister Johnson:</p>
              <p className="text-gray-700">Naḥnu muʿjabūn bi-ruʾyat al-Maghrib li-t-tanmiya al-mustadāma wa al-ibtikār.</p>
              <p className="text-sm text-gray-500 mt-1">We are impressed by Morocco's vision for sustainable development and innovation.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ambassador Fatima:</p>
              <p className="text-gray-700">Al-tanawwuʿ ath-thaqāfī wa al-tafāhum al-mutabādal asās najāḥ ayy sharāka.</p>
              <p className="text-sm text-gray-500 mt-1">Cultural diversity and mutual understanding are the foundation of any successful partnership.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Minister Johnson:</p>
              <p className="text-gray-700">Naḥnu mutafāʾilūn bi-shaʾn al-khuṭuwāt at-tāliya fī hādhihi al-sharāka al-istirātījiyya.</p>
              <p className="text-sm text-gray-500 mt-1">We are optimistic about the next steps in this strategic partnership.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Congratulations! Advanced Darija Master!
        </h2>
        <p className="text-xl mb-6">You have completed all 20 advanced Darija lessons! You now possess the highest level of Darija proficiency, capable of engaging in complex discussions across professional, academic, and cultural contexts.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🎯 What You've Achieved</h3>
            <ul className="space-y-2">
              <li>✅ Mastered advanced professional vocabulary</li>
              <li>✅ Developed cross-cultural communication skills</li>
              <li>✅ Learned specialized terminology across multiple fields</li>
              <li>✅ Gained confidence in formal and diplomatic contexts</li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🌟 Your Next Steps</h3>
            <ul className="space-y-2">
              <li>🗣️ Practice with native speakers</li>
              <li>📚 Read advanced Darija literature</li>
              <li>🎬 Watch Moroccan films and documentaries</li>
              <li>🌍 Engage with Moroccan communities globally</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-4">🇲🇦 You are now ready to represent Morocco's rich linguistic heritage anywhere in the world!</p>
          <p className="text-2xl font-bold">Mabrūk! مبروك!</p>
        </div>
      </div>
    </LessonLayout>
  );
}