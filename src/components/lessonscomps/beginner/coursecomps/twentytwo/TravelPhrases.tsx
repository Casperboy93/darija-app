"use client";

import React from 'react';

export default function TravelPhrases() {
  return (
    <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Essential Travel Phrases - العبارات الأساسية للسفر
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">At the Airport</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Where is check-in?</p>
              <p className="text-orange-600">فين تسجيل الدخول؟ - Fin tasjil d-dukhul?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I have a reservation</p>
              <p className="text-orange-600">عندي حجز - 3andi hajz</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Is the flight delayed?</p>
              <p className="text-orange-600">واش الرحلة متأخرة؟ - Wash r-rihla muta'akhira?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Where is the baggage claim?</p>
              <p className="text-orange-600">فين استلام الحقائب؟ - Fin istilam l-haqa'ib?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Getting Around</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">How do I get to...?</p>
              <p className="text-orange-600">كيفاش نوصل ل...؟ - Kifash nusal l...?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Is it far from here?</p>
              <p className="text-orange-600">واش بعيد من هنا؟ - Wash b3id mn hna?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Can you call a taxi?</p>
              <p className="text-orange-600">واش تقدر تعيط لتاكسي؟ - Wash tqdar t3ayyat l-taksi?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I'm lost</p>
              <p className="text-orange-600">أنا تايه - Ana tayih</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Emergency Travel Phrases</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I lost my passport</p>
              <p className="text-orange-600">ضيعت جواز السفر ديالي - Dayya3t jawaz s-safar dyali</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I missed my flight</p>
              <p className="text-orange-600">فاتني الطيارة - Fatni t-tayyara</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Can you help me?</p>
              <p className="text-orange-600">واش تقدر تعاوني؟ - Wash tqdar t3awni?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Where is the embassy?</p>
              <p className="text-orange-600">فين السفارة؟ - Fin s-safara?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Tourist Information</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">What time does it open?</p>
              <p className="text-orange-600">فوقاش كيحل؟ - Fuqash kayhal?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">How much is the entrance fee?</p>
              <p className="text-orange-600">بشحال رسوم الدخول؟ - Bshhal rusum d-dukhul?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Can I take photos?</p>
              <p className="text-orange-600">واش يمكن ناخد صور؟ - Wash yumkin nakhud suwar?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Do you have a map?</p>
              <p className="text-orange-600">واش عندك خريطة؟ - Wash 3andak kharita?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}