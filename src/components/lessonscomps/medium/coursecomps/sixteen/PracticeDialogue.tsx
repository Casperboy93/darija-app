"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-pink-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Booking a Riad in Marrakech
        </h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <p className="font-semibold text-pink-800">Tourist:</p>
            <p className="text-gray-700 mb-2">Marhaban, uridu an ahjiza ghurfa fi riyad fi Marrakush.</p>
            <p className="text-sm text-gray-600 italic">Hello, I want to book a room in a riad in Marrakech.</p>
            <p className="text-xs text-pink-600 mt-1">مرحباً، أريد أن أحجز غرفة في رياض في مراكش.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <p className="font-semibold text-pink-800">Receptionist:</p>
            <p className="text-gray-700 mb-2">Ahlan wa sahlan! Kam layla turid an tuqim?</p>
            <p className="text-sm text-gray-600 italic">Welcome! How many nights do you want to stay?</p>
            <p className="text-xs text-pink-600 mt-1">أهلاً وسهلاً! كم ليلة تريد أن تقيم؟</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <p className="font-semibold text-pink-800">Tourist:</p>
            <p className="text-gray-700 mb-2">Thalath layali, min yawm al-khamis ila yawm as-sabt.</p>
            <p className="text-sm text-gray-600 italic">Three nights, from Thursday to Saturday.</p>
            <p className="text-xs text-pink-600 mt-1">ثلاث ليالي، من يوم الخميس إلى يوم السبت.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <p className="font-semibold text-pink-800">Receptionist:</p>
            <p className="text-gray-700 mb-2">Naʿam, ʿindana ghurfa mutaha bi-itlala ʿala as-sahn.</p>
            <p className="text-sm text-gray-600 italic">Yes, we have a room available with a view of the courtyard.</p>
            <p className="text-xs text-pink-600 mt-1">نعم، عندنا غرفة متاحة بإطلالة على الصحن.</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <p className="font-semibold text-pink-800">Tourist:</p>
            <p className="text-gray-700 mb-2">Ma hiya al-khadamat al-mutawaffira?</p>
            <p className="text-sm text-gray-600 italic">What services are available?</p>
            <p className="text-xs text-pink-600 mt-1">ما هي الخدمات المتوفرة؟</p>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-pink-100">
            <p className="font-semibold text-pink-800">Receptionist:</p>
            <p className="text-gray-700 mb-2">Nahnu nuqaddim al-futur, wa khidmat al-intiqal, wa jawlat siyahiyya.</p>
            <p className="text-sm text-gray-600 italic">We offer breakfast, transfer service, and tourist tours.</p>
            <p className="text-xs text-pink-600 mt-1">نحن نقدم الفطور، وخدمة الانتقال، وجولات سياحية.</p>
          </div>
        </div>
      </div>
    </div>
  );
}