"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateNine() {
  return (
    <LessonLayout 
      title="Culture and Traditions" 
      level="intermediate" 
      lessonNumber={9}
      previousLesson="intermediate-eight"
      nextLesson="intermediate-ten"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Explore the rich cultural heritage and traditions of Morocco through Darija. Learn about festivals, customs, traditional practices, and cultural expressions that define Moroccan identity.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master cultural and traditional vocabulary</li>
            <li>Learn about Moroccan festivals and celebrations</li>
            <li>Understand traditional customs and practices</li>
            <li>Practice discussing cultural topics and heritage</li>
          </ul>
        </div>
      </div>
      
      {/* Moroccan Festivals */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Moroccan Festivals
        </h2>
        
        <p className="text-gray-700 mb-6">Learn about the major festivals and celebrations in Moroccan culture.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">3īd l Fiṭr</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
            </div>
            <p className="text-gray-600">Eid al-Fitr (End of Ramadan)</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: eed al-fitr</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "3īd l Fiṭr 3īd kbīr f l Maghrib" (Eid al-Fitr is a big celebration in Morocco)</p>
            </div>
          </div>

          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">3īd l Aḍḥā</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
            </div>
            <p className="text-gray-600">Eid al-Adha (Festival of Sacrifice)</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: eed al-ad-ha</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "F 3īd l Aḍḥā kandhbaḥu l kharūf" (On Eid al-Adha we sacrifice the sheep)</p>
            </div>
          </div>

          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Mawlid</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
            </div>
            <p className="text-gray-600">Prophet's Birthday</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: maw-lid</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "F Mawlid kanqraw l Qur'ān" (On Mawlid we recite the Quran)</p>
            </div>
          </div>

          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Āshūrā</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Festival</span>
            </div>
            <p className="text-gray-600">Day of Ashura</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-shu-ra</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "F Āshūrā l aṭfāl kayāklu l ḥalwā" (On Ashura children eat sweets)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Customs */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Traditional Customs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">Wedding Traditions</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">3urs:</span> Wedding</p>
              <p><span className="font-semibold">Ḥenna:</span> Henna ceremony</p>
              <p><span className="font-semibold">Takht:</span> Wedding throne</p>
              <p><span className="font-semibold">Negāfa:</span> Wedding planner</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">Birth Traditions</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Sbu3:</span> Naming ceremony (7th day)</p>
              <p><span className="font-semibold">3aqīqa:</span> Birth celebration</p>
              <p><span className="font-semibold">Khitān:</span> Circumcision</p>
              <p><span className="font-semibold">Tamr u lben:</span> Dates and milk</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">Hospitality</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ḍiyāfa:</span> Hospitality</p>
              <p><span className="font-semibold">Atāy:</span> Tea ceremony</p>
              <p><span className="font-semibold">Kuskus l jum3a:</span> Friday couscous</p>
              <p><span className="font-semibold">Baraka:</span> Blessing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Arts and Crafts */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Traditional Arts and Crafts
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-blue-800 mb-4">Moroccan Craftsmanship</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-blue-700">Zellīj</p>
              <p className="text-gray-600">Traditional mosaic tilework</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Taqshīr</p>
              <p className="text-gray-600">Wood carving</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Ṣinā3a</p>
              <p className="text-gray-600">Handicrafts</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Khayāṭa</p>
              <p className="text-gray-600">Embroidery</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Fakhkhār</p>
              <p className="text-gray-600">Pottery</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Nasj</p>
              <p className="text-gray-600">Weaving</p>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Music and Dance */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Traditional Music and Dance
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-green-800 mb-4">Musical Heritage</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
              <p className="font-semibold text-green-700">Gnāwa</p>
              <p className="text-gray-600">Spiritual music tradition with African roots</p>
              <p className="text-sm text-gray-500 mt-1">Instruments: Qrāqib (metal castanets), Sintīr (bass lute)</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">Andalusī</p>
              <p className="text-gray-600">Classical Andalusian music</p>
              <p className="text-sm text-gray-500 mt-1">Instruments: 3ūd (lute), Qānūn (zither), Riqq (tambourine)</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
              <p className="font-semibold text-purple-700">Sha3bī</p>
              <p className="text-gray-600">Popular folk music</p>
              <p className="text-sm text-gray-500 mt-1">Instruments: Banjo, Darbouka, Bendir</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-orange-400">
              <p className="font-semibold text-orange-700">Ahwāsh</p>
              <p className="text-gray-600">Berber traditional dance and music</p>
              <p className="text-sm text-gray-500 mt-1">Performed in groups with drums and chanting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Cultural Conversation
        </h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-red-800 mb-4">Discussing Traditions</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border-l-4 border-red-400">
              <p className="font-semibold text-red-700">A: Āsh hiya l taqālīd dyālkum f l 3īd?</p>
              <p className="text-gray-600 italic">What are your traditions during Eid?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Kanṭayybu l ḥalwā u nzūru l 3āʾila</p>
              <p className="text-gray-600 italic">We prepare sweets and visit family</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-red-400">
              <p className="font-semibbold text-red-700">A: U f l 3urs, āsh katdīru?</p>
              <p className="text-gray-600 italic">And in weddings, what do you do?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Kandīru ḥenna u kanraqṣu 3la l mūsīqā l maghribiyya</p>
              <p className="text-gray-600 italic">We do henna and dance to Moroccan music</p>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Clothing */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
          Traditional Clothing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-indigo-800 mb-3">Men's Traditional Wear</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Jallāba:</span> Traditional robe</p>
              <p className="text-sm"><span className="font-semibold">Tarbūsh:</span> Traditional hat (fez)</p>
              <p className="text-sm"><span className="font-semibold">Sarwāl:</span> Traditional pants</p>
              <p className="text-sm"><span className="font-semibold">Belgha:</span> Traditional slippers</p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-indigo-800 mb-3">Women's Traditional Wear</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Qafṭān:</span> Traditional dress</p>
              <p className="text-sm"><span className="font-semibold">Takshīṭa:</span> Formal traditional dress</p>
              <p className="text-sm"><span className="font-semibold">Ḥāʾik:</span> Traditional white wrap</p>
              <p className="text-sm"><span className="font-semibold">Mdamma:</span> Traditional slippers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Religious and Spiritual Practices */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Religious and Spiritual Practices
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-yellow-800 mb-4">Spiritual Vocabulary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Prayer & Worship</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Ṣalāt:</span> Prayer</p>
                <p><span className="font-semibold">Masjid:</span> Mosque</p>
                <p><span className="font-semibold">Wuḍūʾ:</span> Ablution</p>
                <p><span className="font-semibold">Qibla:</span> Direction of prayer</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Holy Months</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Ramaḍān:</span> Holy month of fasting</p>
                <p><span className="font-semibold">Ṣiyām:</span> Fasting</p>
                <p><span className="font-semibold">Ifṭār:</span> Breaking fast</p>
                <p><span className="font-semibold">Suḥūr:</span> Pre-dawn meal</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Pilgrimage</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-semibold">Ḥajj:</span> Pilgrimage to Mecca</p>
                <p><span className="font-semibold">3umra:</span> Lesser pilgrimage</p>
                <p><span className="font-semibold">Ḥājj:</span> One who completed Hajj</p>
                <p><span className="font-semibold">Ziyāra:</span> Religious visit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-4">Cultural Presentation</h3>
          <p className="text-gray-700 mb-4">Prepare a presentation about a Moroccan tradition using these elements:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">Structure your presentation:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>1. Introduction: "Ghādi nḥkī 3la..."</li>
                <li>2. History: "Hād t taqālīd jāt men..."</li>
                <li>3. Practice: "Kanṭayybu u kandīru..."</li>
                <li>4. Significance: "Hāda muhimm ḥīt..."</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">Choose a topic:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tea ceremony (Atāy)</li>
                <li>• Wedding traditions (3urs)</li>
                <li>• Ramadan customs (Ramaḍān)</li>
                <li>• Traditional music (Mūsīqā)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Etiquette */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
          Cultural Etiquette
        </h2>
        
        <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-pink-800 mb-2">Respectful Behavior</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Remove shoes when entering homes</li>
                <li>• Use right hand for eating and greeting</li>
                <li>• Dress modestly, especially in religious sites</li>
                <li>• Accept hospitality graciously</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-pink-800 mb-2">Cultural Sensitivity</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Learn basic Islamic customs</li>
                <li>• Respect prayer times and Ramadan</li>
                <li>• Ask permission before photographing people</li>
                <li>• Show interest in local traditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cultural Mastery Achieved!
        </h2>
        <p className="text-lg">You've gained deep insight into Moroccan culture and traditions! You can now participate meaningfully in cultural discussions, understand traditional practices, and appreciate the rich heritage of Morocco. You're truly connecting with the heart of Moroccan society!</p>
      </div>
    </LessonLayout>
  );
}