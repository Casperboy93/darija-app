"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedThirteen() {
  return (
    <LessonLayout 
      title="Scientific and Technical Discourse" 
      level="advanced" 
      lessonNumber={13}
      previousLesson="advanced-twelve"
      nextLesson="advanced-fourteen"
    >
      {/* Lesson Overview */}
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-teal-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master scientific and technical vocabulary in Darija. Learn to discuss complex scientific concepts, technology, research, and academic topics with precision and clarity.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-teal-100">
          <p className="font-medium text-teal-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master scientific and technical vocabulary</li>
            <li>Learn research and academic terminology</li>
            <li>Practice explaining complex concepts clearly</li>
            <li>Understand methodology and analysis language</li>
          </ul>
        </div>
      </div>
      
      {/* Scientific Fields */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Scientific Fields and Disciplines
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for different scientific and technical fields.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Physical Sciences</p>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Sciences</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Fīziyāʾ:</span> Physics</p>
              <p className="text-sm"><span className="font-semibold">Kīmiyāʾ:</span> Chemistry</p>
              <p className="text-sm"><span className="font-semibold">Riyāḍiyyāt:</span> Mathematics</p>
              <p className="text-sm"><span className="font-semibold">Falak:</span> Astronomy</p>
              <p className="text-sm"><span className="font-semibold">Jiyūlūjiyā:</span> Geology</p>
            </div>
          </div>
          
          <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Life Sciences</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Biology</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Aḥyāʾ:</span> Biology</p>
              <p className="text-sm"><span className="font-semibold">Ṭibb:</span> Medicine</p>
              <p className="text-sm"><span className="font-semibold">Wirātha:</span> Genetics</p>
              <p className="text-sm"><span className="font-semibold">Bīʾa:</span> Ecology</p>
              <p className="text-sm"><span className="font-semibold">Nafs:</span> Psychology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Methodology */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Research Methodology
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Research Process Vocabulary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Research Design</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Baḥth:</span> Research</p>
                <p><span className="font-semibold">Dirāsa:</span> Study</p>
                <p><span className="font-semibold">Manhaj:</span> Methodology</p>
                <p><span className="font-semibold">Farḍiyya:</span> Hypothesis</p>
                <p><span className="font-semibold">Tajriba:</span> Experiment</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Data Collection</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Bayānāt:</span> Data</p>
                <p><span className="font-semibold">Iḥṣāʾiyyāt:</span> Statistics</p>
                <p><span className="font-semibold">ʿAyyna:</span> Sample</p>
                <p><span className="font-semibold">Istibiyān:</span> Survey</p>
                <p><span className="font-semibold">Muqābala:</span> Interview</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Analysis</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Taḥlīl:</span> Analysis</p>
                <p><span className="font-semibold">Natāʾij:</span> Results</p>
                <p><span className="font-semibold">Istintāj:</span> Conclusion</p>
                <p><span className="font-semibold">Taqyīm:</span> Evaluation</p>
                <p><span className="font-semibold">Tafسīr:</span> Interpretation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Terminology */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Technical Terminology
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Technology and Engineering</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Computing and IT</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Ḥāsūb</p>
                  <p className="text-xs text-gray-600">Computer</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Barnāmaj</p>
                  <p className="text-xs text-gray-600">Software</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Shabakat</p>
                  <p className="text-xs text-gray-600">Network</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Qāʿidat bayānāt</p>
                  <p className="text-xs text-gray-600">Database</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Engineering</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Handasa</p>
                  <p className="text-xs text-gray-600">Engineering</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Taṣmīm</p>
                  <p className="text-xs text-gray-600">Design</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Inshāʾ</p>
                  <p className="text-xs text-gray-600">Construction</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Takhnūlūjiyā</p>
                  <p className="text-xs text-gray-600">Technology</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Medical Sciences</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Tashkhīṣ</p>
                  <p className="text-xs text-gray-600">Diagnosis</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ʿIlāj</p>
                  <p className="text-xs text-gray-600">Treatment</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Jarāḥa</p>
                  <p className="text-xs text-gray-600">Surgery</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Dawāʾ</p>
                  <p className="text-xs text-gray-600">Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Presentations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Academic Presentations
        </h2>
        
        <p className="text-gray-700 mb-6">Language for presenting research and academic work.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Presentation Structure</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-blue-700">Muqaddima</p>
                <p className="text-gray-600 text-sm">Introduction</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">ʿArḍ al-mashaʾ</p>
                <p className="text-gray-600 text-sm">Problem statement</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Manhajiyyat al-baḥth</p>
                <p className="text-gray-600 text-sm">Research methodology</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Khulāṣa</p>
                <p className="text-gray-600 text-sm">Conclusion</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Presentation Language</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-blue-700">Sa-uqaddim lakum</p>
                <p className="text-gray-600 text-sm">I will present to you</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Kama tarawn fī hādhihi al-ṣūra</p>
                <p className="text-gray-600 text-sm">As you see in this image</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Hādhā yuʾakkid anna</p>
                <p className="text-gray-600 text-sm">This confirms that</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Fī al-khitām</p>
                <p className="text-gray-600 text-sm">In conclusion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scientific Discussion */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Scientific Discussion and Debate
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Academic Discourse</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Presenting Evidence</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Al-adilla tushīr ilā:</span> Evidence points to</p>
                <p><span className="font-semibold">Wafqan lil-dirāsāt:</span> According to studies</p>
                <p><span className="font-semibold">Hādhā yuthbit anna:</span> This proves that</p>
                <p><span className="font-semibold">Lā yumkin inkār:</span> Cannot deny</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Questioning and Analysis</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Kayf yumkin tafsīr:</span> How can we interpret</p>
                <p><span className="font-semibold">Mā hiya al-asbāb:</span> What are the causes</p>
                <p><span className="font-semibold">Hal hunāka ʿalāqa:</span> Is there a relationship</p>
                <p><span className="font-semibold">Mā madā ṣiḥḥat:</span> How valid is</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Research Conference
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Aḥmad:</p>
              <p className="text-gray-700">Sa-uqaddim lakum natāʾij baḥthinā ḥawl taʾthīr at-takhnūlūjiyā ʿalā at-taʿlīm.</p>
              <p className="text-sm text-gray-500 mt-1">I will present to you the results of our research on the impact of technology on education.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Fāṭima:</p>
              <p className="text-gray-700">Mā hiya al-manhajiyya allatī istaʿmaltumūhā fī hādhihi ad-dirāsa?</p>
              <p className="text-sm text-gray-500 mt-1">What methodology did you use in this study?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Dr. Aḥmad:</p>
              <p className="text-gray-700">Istaʿmalnā manhajan mukhtaliṭan: istibiyānāt wa muqābalāt maʿa 500 ṭālib.</p>
              <p className="text-sm text-gray-500 mt-1">We used a mixed methodology: surveys and interviews with 500 students.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Dr. Fāṭima:</p>
              <p className="text-gray-700">Hādhihi natāʾij muhimma. Hal takhtalifu bākhtalāf al-marāḥil at-taʿlīmiyya?</p>
              <p className="text-sm text-gray-500 mt-1">These are important results. Do they differ according to educational levels?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Scientific Excellence!
        </h2>
        <p className="text-lg">You've mastered scientific and technical discourse in Darija! Morocco has a rich tradition of scientific achievement, from medieval scholars like Ibn Battuta to modern researchers. This vocabulary connects you to the global scientific community while honoring Arabic scientific heritage.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🔬 Fun fact: Many scientific terms in Arabic were adopted into European languages during the Islamic Golden Age!</p>
        </div>
      </div>
    </LessonLayout>
  );
}