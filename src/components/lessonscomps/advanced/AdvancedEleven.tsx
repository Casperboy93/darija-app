"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedEleven() {
  return (
    <LessonLayout 
      title="Literary and Poetic Expression" 
      level="advanced" 
      lessonNumber={11}
      previousLesson="advanced-ten"
      nextLesson="advanced-twelve"
    >
      {/* Lesson Overview */}
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Explore the rich literary and poetic traditions of Moroccan Arabic. Learn to appreciate, understand, and create beautiful expressions using classical and modern literary techniques.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
          <p className="font-medium text-indigo-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master literary vocabulary and poetic expressions</li>
            <li>Understand classical Arabic influence in Darija poetry</li>
            <li>Learn traditional Moroccan poetic forms and meters</li>
            <li>Practice creating your own literary expressions</li>
          </ul>
        </div>
      </div>
      
      {/* Classical Poetry Influence */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
          Classical Poetry Influence
        </h2>
        
        <p className="text-gray-700 mb-6">Darija poetry draws heavily from classical Arabic traditions while maintaining its unique Moroccan character.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Qasida Tradition</p>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Classical</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Baḥr:</span> Poetic meter</p>
              <p className="text-sm"><span className="font-semibold">Qāfiya:</span> Rhyme scheme</p>
              <p className="text-sm"><span className="font-semibold">Maṭla':</span> Opening couplet</p>
              <p className="text-sm"><span className="font-semibold">Khatm:</span> Closing verse</p>
            </div>
          </div>
          
          <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Modern Adaptations</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Contemporary</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Shi'r ḥurr:</span> Free verse</p>
              <p className="text-sm"><span className="font-semibold">Zajal:</span> Folk poetry</p>
              <p className="text-sm"><span className="font-semibold">Malhūn:</span> Colloquial poetry</p>
              <p className="text-sm"><span className="font-semibold">Ghināʾ:</span> Song poetry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Literary Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Literary Vocabulary
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Poetic Terms and Expressions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Emotions & Feelings</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Hanīn:</span> Longing, nostalgia</p>
                <p><span className="font-semibold">Gharam:</span> Passionate love</p>
                <p><span className="font-semibold">Ḥuzn:</span> Deep sadness</p>
                <p><span className="font-semibold">Faraḥ:</span> Joy, happiness</p>
                <p><span className="font-semibold">Shawq:</span> Yearning</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Nature & Beauty</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Jamāl:</span> Beauty</p>
                <p><span className="font-semibold">Bahāʾ:</span> Splendor</p>
                <p><span className="font-semibold">Nūr:</span> Light, radiance</p>
                <p><span className="font-semibold">Zahr:</span> Flowers, bloom</p>
                <p><span className="font-semibold">Najm:</span> Star</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-2">Time & Memory</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Dhikrā:</span> Memory</p>
                <p><span className="font-semibold">Māḍī:</span> Past</p>
                <p><span className="font-semibold">Ḥāḍir:</span> Present</p>
                <p><span className="font-semibold">Mustaqbal:</span> Future</p>
                <p><span className="font-semibold">Zaman:</span> Time, era</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Moroccan Poetry Forms */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Traditional Moroccan Poetry Forms
        </h2>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-4">Malhūn - The People's Poetry</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Example Verse</h4>
              <div className="text-center p-4 bg-orange-50 rounded-md">
                <p className="font-semibold text-lg text-orange-800 mb-2">Yā ṭāʾir ghannī li ḥabībī</p>
                <p className="text-gray-600 mb-2">Qūl lū anna qalbī ḥazīn</p>
                <p className="text-sm text-gray-500">O bird, sing to my beloved / Tell them that my heart is sad</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-700 mb-2">Characteristics</h4>
                <ul className="text-sm space-y-1">
                  <li>• Uses colloquial Darija</li>
                  <li>• Simple, accessible themes</li>
                  <li>• Often sung or chanted</li>
                  <li>• Reflects daily life</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-700 mb-2">Common Themes</h4>
                <ul className="text-sm space-y-1">
                  <li>• Love and separation</li>
                  <li>• Social commentary</li>
                  <li>• Religious devotion</li>
                  <li>• Nature and seasons</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metaphors and Imagery */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Metaphors and Imagery
        </h2>
        
        <p className="text-gray-700 mb-6">Master the art of creating beautiful metaphors and vivid imagery in Darija.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Nature Metaphors</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-blue-700">Qalbī baḥr</p>
                <p className="text-gray-600 text-sm">My heart is an ocean (deep emotions)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">ʿAynāyk najmatayn</p>
                <p className="text-gray-600 text-sm">Your eyes are two stars (beauty)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Kalāmak ʿasal</p>
                <p className="text-gray-600 text-sm">Your words are honey (sweet speech)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-blue-800 mb-3">Abstract Concepts</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-blue-700">Aḥlām kāghaḍ</p>
                <p className="text-gray-600 text-sm">Dreams are paper (fragile hopes)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Waqt nahr</p>
                <p className="text-gray-600 text-sm">Time is a river (flowing, unstoppable)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Ḥubb nār</p>
                <p className="text-gray-600 text-sm">Love is fire (passionate, consuming)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Writing Exercise */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Creative Writing Exercise
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4">Write Your Own Poem</h3>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-gray-700 mb-4">Try writing a short poem using these prompts:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Theme Options:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Homesickness (al-hanīn lil-waṭan)</li>
                  <li>• Childhood memories (dhikrayāt aṭ-ṭufūla)</li>
                  <li>• The beauty of Morocco (jamāl al-Maghrib)</li>
                  <li>• Friendship (aṣ-ṣadāqa)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Structure Tips:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Start with a strong image</li>
                  <li>• Use metaphors from nature</li>
                  <li>• Include emotional vocabulary</li>
                  <li>• End with a memorable line</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Dialogue: Literary Discussion
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Aḥmad:</p>
              <p className="text-gray-700">Qrīt qasīda jadīda lil-shāʿir Muḥammad al-Maghribī. Kānat rāʾiʿa!</p>
              <p className="text-sm text-gray-500 mt-1">I read a new poem by the poet Muhammad al-Maghribi. It was wonderful!</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
              <p className="font-semibold text-pink-600">Fāṭima:</p>
              <p className="text-gray-700">Ayy mawḍūʿ kānat tuʿālij? Ana uḥibb ash-shiʿr alladhī yataḥaddath ʿan al-ḥubb wa al-ṭabīʿa.</p>
              <p className="text-sm text-gray-500 mt-1">What subject did it address? I love poetry that talks about love and nature.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
              <p className="font-semibold text-blue-600">Aḥmad:</p>
              <p className="text-gray-700">Kānat ʿan al-hanīn lil-waṭan. Istaʿmal ṣuwar jamīla min aṭ-ṭabīʿa al-Maghribiyya.</p>
              <p className="text-sm text-gray-500 mt-1">It was about homesickness. He used beautiful images from Moroccan nature.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
              <p className="font-semibold text-pink-600">Fāṭima:</p>
              <p className="text-gray-700">Hādhā yudhakirunī bi-shiʿr al-malhūn. Fīhi basāṭa wa ṣidq fī al-taʿbīr.</p>
              <p className="text-sm text-gray-500 mt-1">This reminds me of malhun poetry. It has simplicity and sincerity in expression.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Note */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Literary Master!
        </h2>
        <p className="text-lg">You've explored the beautiful world of Moroccan literary expression! Poetry and literature are deeply valued in Moroccan culture, from classical Arabic traditions to modern Darija expressions. This knowledge connects you to centuries of artistic heritage.</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">💡 Tip: Try attending poetry readings or "ams shiʿriyya" (poetry evenings) to experience this art form live!</p>
        </div>
      </div>
    </LessonLayout>
  );
}