"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedFourteen() {
  return (
    <LessonLayout 
      title="Media and Journalism" 
      level="advanced" 
      lessonNumber={14}
      previousLesson="advanced-thirteen"
      nextLesson="advanced-fifteen"
    >
      {/* Lesson Overview */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master media and journalism vocabulary in Darija. Learn to discuss news, reporting, broadcasting, and media ethics with professional precision.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-red-100">
          <p className="font-medium text-red-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master journalism and media terminology</li>
            <li>Learn news reporting language</li>
            <li>Practice interview techniques</li>
            <li>Understand media ethics vocabulary</li>
          </ul>
        </div>
      </div>
      
      {/* Media Types */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Media Types and Platforms
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for different media platforms and formats.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Traditional Media</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Classic</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Jarīda:</span> Newspaper</p>
              <p className="text-sm"><span className="font-semibold">Majalla:</span> Magazine</p>
              <p className="text-sm"><span className="font-semibold">Idhāʿa:</span> Radio</p>
              <p className="text-sm"><span className="font-semibold">Tilifizyūn:</span> Television</p>
              <p className="text-sm"><span className="font-semibold">Ṣaḥāfa:</span> Press/Journalism</p>
            </div>
          </div>
          
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Digital Media</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Modern</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Mawqiʿ iliktronī:</span> Website</p>
              <p className="text-sm"><span className="font-semibold">Shabakāt ijtimāʿiyya:</span> Social media</p>
              <p className="text-sm"><span className="font-semibold">Mudawwana:</span> Blog</p>
              <p className="text-sm"><span className="font-semibold">Būdkāst:</span> Podcast</p>
              <p className="text-sm"><span className="font-semibold">Fīdyū:</span> Video content</p>
            </div>
          </div>
        </div>
      </div>

      {/* News Reporting */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          News Reporting and Structure
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-4">News Article Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">Headlines & Leads</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">ʿUnwān:</span> Headline</p>
                <p><span className="font-semibold">ʿUnwān farʿī:</span> Subheading</p>
                <p><span className="font-semibold">Muqaddima:</span> Lead paragraph</p>
                <p><span className="font-semibold">Khabar ʿājil:</span> Breaking news</p>
                <p><span className="font-semibold">Khabar munāsib:</span> Feature story</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">Story Elements</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Maṣdar:</span> Source</p>
                <p><span className="font-semibold">Shāhid ʿiyān:</span> Eyewitness</p>
                <p><span className="font-semibold">Iqtibās:</span> Quote</p>
                <p><span className="font-semibold">Tafāṣīl:</span> Details</p>
                <p><span className="font-semibold">Khulfiyya:</span> Background</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">News Values</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Jadīd:</span> Timeliness</p>
                <p><span className="font-semibold">Muhimm:</span> Significance</p>
                <p><span className="font-semibold">Qarīb:</span> Proximity</p>
                <p><span className="font-semibold">Gharīb:</span> Unusualness</p>
                <p><span className="font-semibold">Taʾthīr:</span> Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Techniques */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Interview Techniques
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Professional Interviewing</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Opening Questions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Hal yumkinuka an tuḥaddithunā ʿan...</p>
                  <p className="text-xs text-gray-600">Can you tell us about...</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mā raʾyuka fī...</p>
                  <p className="text-xs text-gray-600">What's your opinion on...</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Kayf tafassir...</p>
                  <p className="text-xs text-gray-600">How do you explain...</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mā hiya khiṭṭatuka li...</p>
                  <p className="text-xs text-gray-600">What's your plan for...</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Follow-up Questions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Hal yumkinuka tawḍīḥ dhālik akthar?</p>
                  <p className="text-xs text-gray-600">Can you clarify that more?</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mā alladhī taqṣuduhu bi...</p>
                  <p className="text-xs text-gray-600">What do you mean by...</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Hal hunāka amthila ʿalā dhālik?</p>
                  <p className="text-xs text-gray-600">Are there examples of that?</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Kayf tataʿāmal maʿa...</p>
                  <p className="text-xs text-gray-600">How do you deal with...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcasting Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Broadcasting and Production
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">TV and Radio Production</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Studio Operations</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Istūdyū:</span> Studio</p>
                <p><span className="font-semibold">Kāmīrā:</span> Camera</p>
                <p><span className="font-semibold">Mikrūfūn:</span> Microphone</p>
                <p><span className="font-semibold">Iḍāʾa:</span> Lighting</p>
                <p><span className="font-semibold">Mukhrij:</span> Director</p>
                <p><span className="font-semibold">Muqaddim:</span> Presenter/Host</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Live Broadcasting</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Barāmij mubāshira:</span> Live programs</p>
                <p><span className="font-semibold">Naql mubāshir:</span> Live broadcast</p>
                <p><span className="font-semibold">Taqrīr mīdānī:</span> Field report</p>
                <p><span className="font-semibold">Muraslūn:</span> Correspondents</p>
                <p><span className="font-semibold">Nashrat akhbār:</span> News bulletin</p>
                <p><span className="font-semibold">Faṣl iʿlānī:</span> Commercial break</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Ethics */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Media Ethics and Standards
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Professional Standards</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Journalistic Principles</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Ṣidq</p>
                  <p className="text-xs text-gray-600">Truthfulness</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Mawḍūʿiyya</p>
                  <p className="text-xs text-gray-600">Objectivity</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ʿAdāla</p>
                  <p className="text-xs text-gray-600">Fairness</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Masʾūliyya</p>
                  <p className="text-xs text-gray-600">Responsibility</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Ethical Considerations</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Khuṣūṣiyya</p>
                  <p className="text-xs text-gray-600">Privacy</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Sirr mihnī</p>
                  <p className="text-xs text-gray-600">Professional secrecy</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taḍārub maṣāliḥ</p>
                  <p className="text-xs text-gray-600">Conflict of interest</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taṣḥīḥ akhṭāʾ</p>
                  <p className="text-xs text-gray-600">Correction of errors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Writing Styles */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          News Writing Styles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Hard News</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Khabar ṣaḥafī</p>
                <p className="text-gray-600 text-sm">Straight news story</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Waqāʾiʿ</p>
                <p className="text-gray-600 text-sm">Facts</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Mukhtaṣar wa wāḍiḥ</p>
                <p className="text-gray-600 text-sm">Brief and clear</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Lā raʾy shakhṣī</p>
                <p className="text-gray-600 text-sm">No personal opinion</p>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Feature Stories</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Taqrīr mufaṣṣal</p>
                <p className="text-gray-600 text-sm">In-depth report</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Qiṣaṣ insāniyya</p>
                <p className="text-gray-600 text-sm">Human interest stories</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Taḥlīl</p>
                <p className="text-gray-600 text-sm">Analysis</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Sard jādhib</p>
                <p className="text-gray-600 text-sm">Engaging narrative</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Press Conference
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ṣaḥafī:</p>
              <p className="text-gray-700">Sayyid al-wazīr, mā taʿlīqukum ʿalā al-qararāt al-jadīda?</p>
              <p className="text-sm text-gray-500 mt-1">Mr. Minister, what's your comment on the new decisions?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Al-Wazīr:</p>
              <p className="text-gray-700">Hādhihi al-qararāt satakūn lahā taʾthīr ījābī ʿalā al-iqtiṣād al-waṭanī.</p>
              <p className="text-sm text-gray-500 mt-1">These decisions will have a positive impact on the national economy.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ṣaḥafī:</p>
              <p className="text-gray-700">Hal yumkinukum iʿṭāʾ tafāṣīl akthar ḥawl al-jadwal az-zamanī?</p>
              <p className="text-sm text-gray-500 mt-1">Can you give more details about the timeline?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Al-Wazīr:</p>
              <p className="text-gray-700">Sa-nabdaʾ bi-tanfīdh al-marḥala al-ūlā khilāl al-shahr al-qādim.</p>
              <p className="text-sm text-gray-500 mt-1">We will begin implementing the first phase during the next month.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Media Mastery!
        </h2>
        <p className="text-lg">You've mastered media and journalism vocabulary in Darija! Morocco has a vibrant media landscape with newspapers like Al-Alam and L'Opinion, and TV channels like 2M and Al Aoula. This knowledge connects you to Morocco's dynamic media scene.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">📺 Fun fact: Morocco was one of the first Arab countries to launch color television broadcasting in 1972!</p>
        </div>
      </div>
    </LessonLayout>
  );
}