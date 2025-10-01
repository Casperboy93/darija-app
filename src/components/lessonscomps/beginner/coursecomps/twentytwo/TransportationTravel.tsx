"use client";

import React from 'react';

export default function TransportationTravel() {
  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        Transportation for Travel - وسائل النقل للسفر
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Air Travel</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Flight</p>
              <p className="text-purple-600">رحلة جوية - Rihla jawiyya</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Departure</p>
              <p className="text-purple-600">المغادرة - L-mughadara</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Arrival</p>
              <p className="text-purple-600">الوصول - L-wusul</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Gate</p>
              <p className="text-purple-600">البوابة - L-bawaba</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Ground Transportation</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Car rental</p>
              <p className="text-purple-600">كراء السيارات - Kira' s-sayyarat</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Bus station</p>
              <p className="text-purple-600">محطة الحافلات - Mahatta l-hafilat</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Train station</p>
              <p className="text-purple-600">محطة القطار - Mahatta l-qitar</p>
            </div>
            
            <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
              <p className="text-gray-700 font-medium">Taxi stand</p>
              <p className="text-purple-600">موقف التاكسي - Mawqif t-taksi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-md border border-purple-200">
        <h3 className="font-semibold text-purple-800 mb-2">Transportation Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 font-medium">What time does the bus leave?</p>
            <p className="text-purple-600">فوقاش كيمشي الطوبيس؟ - Fuqash kaymshi t-tubis?</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">How long is the journey?</p>
            <p className="text-purple-600">شحال كتاخد الرحلة؟ - Shhal katakhud r-rihla?</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Is this seat taken?</p>
            <p className="text-purple-600">واش هاد الكرسي مشغول؟ - Wash had l-kursi mashghul?</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">I need to get off here</p>
            <p className="text-purple-600">خاصني نحط هنا - Khassni nahatt hna</p>
          </div>
        </div>
      </div>
    </div>
  );
}