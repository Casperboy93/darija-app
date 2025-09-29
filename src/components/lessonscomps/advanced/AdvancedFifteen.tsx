"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedFifteen() {
  return (
    <LessonLayout 
      title="Philosophy and Ethics" 
      level="advanced" 
      lessonNumber={15}
      previousLesson="advanced-fourteen"
      nextLesson="advanced-sixteen"
    >
      {/* Lesson Overview */}
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Explore philosophical and ethical concepts in Darija. Learn to discuss moral principles, philosophical schools of thought, and ethical dilemmas with depth and nuance.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
          <p className="font-medium text-indigo-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master philosophical terminology</li>
            <li>Learn ethical vocabulary and concepts</li>
            <li>Practice moral reasoning language</li>
            <li>Understand Islamic and Western philosophical traditions</li>
          </ul>
        </div>
      </div>
      
      {/* Philosophical Schools */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
          Philosophical Schools and Traditions
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for different philosophical traditions and schools of thought.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Islamic Philosophy</p>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Traditional</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Falsafa islāmiyya:</span> Islamic philosophy</p>
              <p className="text-sm"><span className="font-semibold">Kalām:</span> Theology</p>
              <p className="text-sm"><span className="font-semibold">Taṣawwuf:</span> Sufism</p>
              <p className="text-sm"><span className="font-semibold">Akhlāq:</span> Ethics/Morality</p>
              <p className="text-sm"><span className="font-semibold">Ḥikma:</span> Wisdom</p>
            </div>
          </div>
          
          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Western Philosophy</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Modern</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Falsafa gharbiyya:</span> Western philosophy</p>
              <p className="text-sm"><span className="font-semibold">Manṭiq:</span> Logic</p>
              <p className="text-sm"><span className="font-semibold">Wujūdiyya:</span> Existentialism</p>
              <p className="text-sm"><span className="font-semibold">Naẓariyyat maʿrifa:</span> Epistemology</p>
              <p className="text-sm"><span className="font-semibold">Mītāfīzīqā:</span> Metaphysics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Concepts */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Ethical Concepts and Principles
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Moral Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Moral Values</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Khayr:</span> Good</p>
                <p><span className="font-semibold">Sharr:</span> Evil</p>
                <p><span className="font-semibold">ʿAdl:</span> Justice</p>
                <p><span className="font-semibold">Ẓulm:</span> Injustice</p>
                <p><span className="font-semibold">Faḍīla:</span> Virtue</p>
                <p><span className="font-semibold">Radhīla:</span> Vice</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Ethical Principles</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Masʾūliyya:</span> Responsibility</p>
                <p><span className="font-semibold">Ḥurriyya:</span> Freedom</p>
                <p><span className="font-semibold">Karāma:</span> Dignity</p>
                <p><span className="font-semibold">Musāwāt:</span> Equality</p>
                <p><span className="font-semibold">Raḥma:</span> Compassion</p>
                <p><span className="font-semibold">Ṣidq:</span> Honesty</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">Moral Reasoning</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Ḍamīr:</span> Conscience</p>
                <p><span className="font-semibold">Ikhtiyār:</span> Choice</p>
                <p><span className="font-semibold">Niyya:</span> Intention</p>
                <p><span className="font-semibold">ʿAwāqib:</span> Consequences</p>
                <p><span className="font-semibold">Wājib:</span> Duty</p>
                <p><span className="font-semibold">Ḥaqq:</span> Right</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophical Arguments */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Philosophical Arguments and Reasoning
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-4">Logical Reasoning</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">Argument Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Muqaddimāt</p>
                  <p className="text-xs text-gray-600">Premises</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Natīja</p>
                  <p className="text-xs text-gray-600">Conclusion</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Burhān</p>
                  <p className="text-xs text-gray-600">Proof</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Dalīl</p>
                  <p className="text-xs text-gray-600">Evidence</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-2">Types of Arguments</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">Istidlāl istiqrāʾī</p>
                  <p className="text-xs text-gray-600">Inductive reasoning</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Istidlāl istinbāṭī</p>
                  <p className="text-xs text-gray-600">Deductive reasoning</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Qiyās</p>
                  <p className="text-xs text-gray-600">Analogy</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Jadal</p>
                  <p className="text-xs text-gray-600">Dialectic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Existential Questions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Existential and Metaphysical Questions
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Fundamental Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Existence and Being</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Mā hiya ḥaqīqat al-wujūd?</span></p>
                <p className="text-gray-600">What is the nature of existence?</p>
                <p><span className="font-semibold">Mā maʿnā al-ḥayāt?</span></p>
                <p className="text-gray-600">What is the meaning of life?</p>
                <p><span className="font-semibold">Hal hunāka hadaf min al-wujūd?</span></p>
                <p className="text-gray-600">Is there a purpose to existence?</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Knowledge and Reality</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Kayf naʿrif al-ḥaqīqa?</span></p>
                <p className="text-gray-600">How do we know truth?</p>
                <p><span className="font-semibold">Mā hiya ḥudūd al-maʿrifa?</span></p>
                <p className="text-gray-600">What are the limits of knowledge?</p>
                <p><span className="font-semibold">Hal al-wāqiʿ mawjūd ḥaqqan?</span></p>
                <p className="text-gray-600">Does reality truly exist?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Dilemmas */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Ethical Dilemmas and Case Studies
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Moral Dilemmas</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Discussing Ethical Issues</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Mushkila akhlāqiyya</p>
                  <p className="text-xs text-gray-600">Moral problem</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tanāquḍ qiyam</p>
                  <p className="text-xs text-gray-600">Conflict of values</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Ikhtiyār ṣaʿb</p>
                  <p className="text-xs text-gray-600">Difficult choice</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ʿAwāqib ghayr mutawaqaʿa</p>
                  <p className="text-xs text-gray-600">Unintended consequences</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Ethical Analysis</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-sm font-medium">Min nāḥiya akhlāqiyya</p>
                  <p className="text-xs text-gray-600">From an ethical standpoint</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Yajib an nuʿtabar</p>
                  <p className="text-xs text-gray-600">We must consider</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Hādhā yaṭraḥ suʾālan</p>
                  <p className="text-xs text-gray-600">This raises a question</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Lā yumkin tajāhul</p>
                  <p className="text-xs text-gray-600">Cannot ignore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Famous Philosophers */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Famous Philosophers and Their Ideas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Islamic Philosophers</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Ibn Sīnā (Avicenna)</p>
                <p className="text-gray-600 text-sm">Metaphysics and medicine</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Ibn Rushd (Averroes)</p>
                <p className="text-gray-600 text-sm">Aristotelian philosophy</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Al-Ghazālī</p>
                <p className="text-gray-600 text-sm">Theology and mysticism</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Ibn Khaldūn</p>
                <p className="text-gray-600 text-sm">Social philosophy</p>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-teal-800 mb-3">Western Philosophers</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-teal-700">Arisṭū (Aristotle)</p>
                <p className="text-gray-600 text-sm">Logic and ethics</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Kant</p>
                <p className="text-gray-600 text-sm">Moral philosophy</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Nietzsche</p>
                <p className="text-gray-600 text-sm">Existentialism</p>
              </div>
              <div>
                <p className="font-semibold text-teal-700">Sartre</p>
                <p className="text-gray-600 text-sm">Freedom and existence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Philosophical Discussion
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ṭālib:</p>
              <p className="text-gray-700">Ustādh, mā raʾyuka fī masʾalat al-ḥurriyya wa al-jabriyya?</p>
              <p className="text-sm text-gray-500 mt-1">Professor, what's your opinion on the question of free will versus determinism?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Ustādh:</p>
              <p className="text-gray-700">Hādhihi min akbar al-masāʾil fī at-tārīkh al-falsafī. Hal taʿtaqid anna laka ikhtiyār ḥaqīqī?</p>
              <p className="text-sm text-gray-500 mt-1">This is one of the greatest questions in philosophical history. Do you believe you have real choice?</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Ṭālib:</p>
              <p className="text-gray-700">Aʿtaqid anna al-insān yaḥmil masʾūliyyat afʿālihi, wa hādhā yaʿnī wujūd al-ḥurriyya.</p>
              <p className="text-sm text-gray-500 mt-1">I believe humans bear responsibility for their actions, and this means freedom exists.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-green-600">Ustādh:</p>
              <p className="text-gray-700">Ḥujja qawiyya, lākin kayf tufassir taʾthīr al-bīʾa wa al-wirātha ʿalā sulūkinā?</p>
              <p className="text-sm text-gray-500 mt-1">A strong argument, but how do you explain the influence of environment and genetics on our behavior?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Philosophical Wisdom!
        </h2>
        <p className="text-lg">You've mastered philosophical and ethical discourse in Darija! Morocco has a rich philosophical tradition, from medieval Islamic philosophers like Ibn Rushd to modern thinkers. This vocabulary connects you to centuries of wisdom and intellectual tradition.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🤔 Fun fact: Córdoba-born Ibn Rushd (Averroes) was known as "The Commentator" for his influential works on Aristotle!</p>
        </div>
      </div>
    </LessonLayout>
  );
}