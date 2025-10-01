"use client";

import React from 'react';

export default function TravelDialogue() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8h1a4 4 0 110 8h-1m-10-4H8a4 4 0 118 0H8m-5 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Travel Dialogue - حوار السفر
      </h2>
      
      <div className="bg-white p-4 rounded-md border border-indigo-100">
        <h3 className="font-semibold text-indigo-700 mb-4">At the Tourist Information Center</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-blue-700 mb-1">Tourist (سائح):</p>
            <p className="text-gray-700 mb-2">السلام عليكم، بغيت معلومات على الأماكن السياحية في مراكش</p>
            <p className="text-blue-600 italic">Salam 3alaykum, bghit ma3lumat 3la l-amakin s-siyahiyya f Marrakech</p>
            <p className="text-sm text-gray-600">Hello, I want information about tourist places in Marrakech</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-green-700 mb-1">Information Officer (موظف المعلومات):</p>
            <p className="text-gray-700 mb-2">أهلا وسهلا! عندنا بزاف ديال الأماكن الزوينة. واش بغيتي تزور جامع الفنا؟</p>
            <p className="text-green-600 italic">Ahlan wa sahlan! 3andna bzaf dyal l-amakin z-zwina. Wash bghiti tzur jama3 l-fna?</p>
            <p className="text-sm text-gray-600">Welcome! We have many beautiful places. Do you want to visit Jemaa el-Fnaa?</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-blue-700 mb-1">Tourist:</p>
            <p className="text-gray-700 mb-2">أيوا، وبغيت نعرف كيفاش نوصل لهناك من الفندق ديالي</p>
            <p className="text-blue-600 italic">Aywa, wa bghit n3raf kifash nusal l-hnak mn l-funduq dyali</p>
            <p className="text-sm text-gray-600">Yes, and I want to know how to get there from my hotel</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-green-700 mb-1">Information Officer:</p>
            <p className="text-gray-700 mb-2">تقدر تاخد التاكسي أو تمشي على رجليك. المسافة قريبة، تقريبا عشر دقائق مشيا</p>
            <p className="text-green-600 italic">Tqdar takhud t-taksi aw tmshi 3la rjlik. L-masafa qriba, taqriban 3ashr daqa'iq mshyan</p>
            <p className="text-sm text-gray-600">You can take a taxi or walk. The distance is close, about ten minutes walking</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-blue-700 mb-1">Tourist:</p>
            <p className="text-gray-700 mb-2">زوين! وشنو هي أحسن وقت باش نزور؟</p>
            <p className="text-blue-600 italic">Zwin! Wa shnu hiya ahsan waqt bash nzur?</p>
            <p className="text-sm text-gray-600">Great! And what's the best time to visit?</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-green-700 mb-1">Information Officer:</p>
            <p className="text-gray-700 mb-2">أحسن وقت هو العشية، من الساعة خمسة. كيكون عندك بزاف ديال الأنشطة والموسيقى</p>
            <p className="text-green-600 italic">Ahsan waqt huwa l-3shiya, mn s-sa3a khamsa. Kaykun 3andak bzaf dyal l-anshita wa l-musiqa</p>
            <p className="text-sm text-gray-600">The best time is in the evening, from five o'clock. There are many activities and music</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-blue-700 mb-1">Tourist:</p>
            <p className="text-gray-700 mb-2">شكرا بزاف على المعلومات! واش عندكم خريطة؟</p>
            <p className="text-blue-600 italic">Shukran bzaf 3la l-ma3lumat! Wash 3andkum kharita?</p>
            <p className="text-sm text-gray-600">Thank you very much for the information! Do you have a map?</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-green-700 mb-1">Information Officer:</p>
            <p className="text-gray-700 mb-2">أيوا، هاك الخريطة. وهاد الكتيب فيه معلومات على جميع الأماكن السياحية</p>
            <p className="text-green-600 italic">Aywa, hak l-kharita. Wa had l-kutayyib fih ma3lumat 3la jami3 l-amakin s-siyahiyya</p>
            <p className="text-sm text-gray-600">Yes, here's the map. And this brochure has information about all tourist places</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-md border border-indigo-200">
        <h3 className="font-semibold text-indigo-800 mb-2">Key Travel Phrases from the Dialogue</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-indigo-700">Tourist information</p>
            <p className="text-indigo-600">معلومات سياحية - Ma3lumat siyahiyya</p>
          </div>
          <div>
            <p className="font-medium text-indigo-700">Tourist places</p>
            <p className="text-indigo-600">أماكن سياحية - Amakin siyahiyya</p>
          </div>
          <div>
            <p className="font-medium text-indigo-700">How to get there</p>
            <p className="text-indigo-600">كيفاش نوصل - Kifash nusal</p>
          </div>
          <div>
            <p className="font-medium text-indigo-700">Best time</p>
            <p className="text-indigo-600">أحسن وقت - Ahsan waqt</p>
          </div>
          <div>
            <p className="font-medium text-indigo-700">Activities</p>
            <p className="text-indigo-600">أنشطة - Anshita</p>
          </div>
          <div>
            <p className="font-medium text-indigo-700">Brochure</p>
            <p className="text-indigo-600">كتيب - Kutayyib</p>
          </div>
        </div>
      </div>
    </div>
  );
}