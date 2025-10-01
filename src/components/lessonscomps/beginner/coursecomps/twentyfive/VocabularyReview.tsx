"use client";

import React from 'react';

export default function VocabularyReview() {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Essential Vocabulary Review - مراجعة المفردات الأساسية
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Basic Greetings</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-700">Hello</p>
              <p className="font-medium text-blue-600">السلام عليكم - Salam 3alaykum</p>
            </div>
            <div>
              <p className="text-gray-700">How are you?</p>
              <p className="font-medium text-blue-600">كيف داير؟ - Kif dayr?</p>
            </div>
            <div>
              <p className="text-gray-700">Thank you</p>
              <p className="font-medium text-blue-600">شكرا - Shukran</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Family & People</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-700">Father</p>
              <p className="font-medium text-blue-600">بابا - Baba</p>
            </div>
            <div>
              <p className="text-gray-700">Mother</p>
              <p className="font-medium text-blue-600">ماما - Mama</p>
            </div>
            <div>
              <p className="text-gray-700">Friend</p>
              <p className="font-medium text-blue-600">صاحب - Sahab</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Numbers & Time</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-700">One</p>
              <p className="font-medium text-blue-600">واحد - Wahad</p>
            </div>
            <div>
              <p className="text-gray-700">Today</p>
              <p className="font-medium text-blue-600">اليوم - Lyum</p>
            </div>
            <div>
              <p className="text-gray-700">Tomorrow</p>
              <p className="font-medium text-blue-600">غدا - Ghda</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Food & Drink</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-700">Bread</p>
              <p className="font-medium text-blue-600">خبز - Khubz</p>
            </div>
            <div>
              <p className="text-gray-700">Tea</p>
              <p className="font-medium text-blue-600">أتاي - Atay</p>
            </div>
            <div>
              <p className="text-gray-700">Water</p>
              <p className="font-medium text-blue-600">الما - L-ma</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Places & Directions</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-700">House</p>
              <p className="font-medium text-blue-600">دار - Dar</p>
            </div>
            <div>
              <p className="text-gray-700">Market</p>
              <p className="font-medium text-blue-600">السوق - S-suq</p>
            </div>
            <div>
              <p className="text-gray-700">Right</p>
              <p className="font-medium text-blue-600">اليمين - L-yamin</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-blue-100">
          <h3 className="font-semibold text-blue-700 mb-3">Common Verbs</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-700">To go</p>
              <p className="font-medium text-blue-600">مشا - Msha</p>
            </div>
            <div>
              <p className="text-gray-700">To eat</p>
              <p className="font-medium text-blue-600">كلا - Kla</p>
            </div>
            <div>
              <p className="text-gray-700">To want</p>
              <p className="font-medium text-blue-600">بغا - Bgha</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Quick Vocabulary Test</h3>
        <p className="text-sm text-gray-700 mb-3">
          Try to recall the Darija words for these English words before checking:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <span className="bg-white px-2 py-1 rounded border">Good morning</span>
          <span className="bg-white px-2 py-1 rounded border">Please</span>
          <span className="bg-white px-2 py-1 rounded border">Excuse me</span>
          <span className="bg-white px-2 py-1 rounded border">How much?</span>
          <span className="bg-white px-2 py-1 rounded border">Where?</span>
          <span className="bg-white px-2 py-1 rounded border">Yes</span>
          <span className="bg-white px-2 py-1 rounded border">No</span>
          <span className="bg-white px-2 py-1 rounded border">Beautiful</span>
        </div>
      </div>
    </div>
  );
}