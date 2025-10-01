"use client";

import React from 'react';

export default function PracticalPhrases() {
  return (
    <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Essential Practical Phrases - العبارات العملية الأساسية
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Survival Phrases</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I don't understand</p>
              <p className="text-orange-600">ما فهمتش - Ma fhamtsh</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Can you help me?</p>
              <p className="text-orange-600">واش تقدر تعاوني؟ - Wash tqdar t3awni?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Where is the bathroom?</p>
              <p className="text-orange-600">فين كاين الحمام؟ - Fin kayn l-hammam?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">How much does this cost?</p>
              <p className="text-orange-600">بشحال هذا؟ - Bshhal hada?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Polite Expressions</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Excuse me</p>
              <p className="text-orange-600">سمح لي - Smah li</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I'm sorry</p>
              <p className="text-orange-600">سمحني - Smahni</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Please</p>
              <p className="text-orange-600">عافاك - 3afak</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">You're welcome</p>
              <p className="text-orange-600">لا شكر على واجب - La shukr 3la wajib</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Getting Around</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Where is...?</p>
              <p className="text-orange-600">فين كاين...؟ - Fin kayn...?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">How do I get to...?</p>
              <p className="text-orange-600">كيفاش نوصل ل...؟ - Kifash nusal l...?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Is it far?</p>
              <p className="text-orange-600">واش بعيد؟ - Wash b3id?</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Stop here, please</p>
              <p className="text-orange-600">وقف هنا عافاك - Wqaf hna 3afak</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Shopping & Dining</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">I want this</p>
              <p className="text-orange-600">بغيت هذا - Bghit hada</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">The bill, please</p>
              <p className="text-orange-600">الحساب عافاك - L-hisab 3afak</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">It's delicious</p>
              <p className="text-orange-600">بنين بزاف - Bnin bzaf</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">No, thank you</p>
              <p className="text-orange-600">لا شكرا - La shukran</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Emergency Phrases</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <p className="text-gray-700 font-medium">Help!</p>
              <p className="text-red-600">النجدة! - N-najda!</p>
            </div>
            
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <p className="text-gray-700 font-medium">Call the police</p>
              <p className="text-red-600">عيط للبوليس - 3ayt l-l-bulis</p>
            </div>
            
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <p className="text-gray-700 font-medium">I need a doctor</p>
              <p className="text-red-600">محتاج طبيب - Mhtaj tabib</p>
            </div>
            
            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <p className="text-gray-700 font-medium">I'm lost</p>
              <p className="text-red-600">أنا تايه - Ana tayh</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Social Phrases</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Nice to meet you</p>
              <p className="text-orange-600">متشرف - Mtsharraf</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">See you later</p>
              <p className="text-orange-600">نشوفك من بعد - Nshufak mn ba3d</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Have a good day</p>
              <p className="text-orange-600">نهار سعيد - Nhar sa3id</p>
            </div>
            
            <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
              <p className="text-gray-700 font-medium">Good luck</p>
              <p className="text-orange-600">بالتوفيق - Bil-tawfiq</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-md border border-orange-200">
        <h3 className="font-semibold text-orange-800 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pro Tip: Phrase Combinations
        </h3>
        <p className="text-sm text-gray-700">
          Combine these phrases for more natural conversations. For example: "سمح لي، فين كاين السوق؟" (Excuse me, where is the market?)
        </p>
      </div>
    </div>
  );
}