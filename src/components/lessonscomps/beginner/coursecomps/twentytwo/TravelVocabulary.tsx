"use client";

import React from 'react';

export default function TravelVocabulary() {
  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Travel Vocabulary - مفردات السفر
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Travel Documents</h3>
          <div className="space-y-2">
            <div>
              <p className="text-gray-700">Passport</p>
              <p className="font-medium text-green-600">جواز السفر - Jawaz s-safar</p>
            </div>
            <div>
              <p className="text-gray-700">Visa</p>
              <p className="font-medium text-green-600">فيزا - Visa</p>
            </div>
            <div>
              <p className="text-gray-700">Ticket</p>
              <p className="font-medium text-green-600">تذكرة - Tadhkira</p>
            </div>
            <div>
              <p className="text-gray-700">Luggage</p>
              <p className="font-medium text-green-600">الحقائب - L-haqa'ib</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Transportation</h3>
          <div className="space-y-2">
            <div>
              <p className="text-gray-700">Airplane</p>
              <p className="font-medium text-green-600">طيارة - Tayyara</p>
            </div>
            <div>
              <p className="text-gray-700">Train</p>
              <p className="font-medium text-green-600">قطار - Qitar</p>
            </div>
            <div>
              <p className="text-gray-700">Bus</p>
              <p className="font-medium text-green-600">طوبيس - Tubis</p>
            </div>
            <div>
              <p className="text-gray-700">Taxi</p>
              <p className="font-medium text-green-600">طاكسي - Taksi</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Places</h3>
          <div className="space-y-2">
            <div>
              <p className="text-gray-700">Airport</p>
              <p className="font-medium text-green-600">المطار - L-matar</p>
            </div>
            <div>
              <p className="text-gray-700">Hotel</p>
              <p className="font-medium text-green-600">فندق - Funduq</p>
            </div>
            <div>
              <p className="text-gray-700">Tourist site</p>
              <p className="font-medium text-green-600">موقع سياحي - Mawqi3 siyahi</p>
            </div>
            <div>
              <p className="text-gray-700">Beach</p>
              <p className="font-medium text-green-600">الشاطئ - Sh-shati'</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-md border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Useful Travel Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 font-medium">I want to travel to...</p>
            <p className="text-green-600">بغيت نسافر ل... - Bghit nsafar l...</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">How much is the ticket?</p>
            <p className="text-green-600">بشحال التذكرة؟ - Bshhal t-tadhkira?</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Where is my luggage?</p>
            <p className="text-green-600">فين حقائبي؟ - Fin haqa'ibi?</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">I'm a tourist</p>
            <p className="text-green-600">أنا سائح - Ana sa'ih</p>
          </div>
        </div>
      </div>
    </div>
  );
}