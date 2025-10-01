"use client";

import React from 'react';

export default function DigitalServices() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Digital Services - الخدمات الرقمية</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Online Services</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">banque en ligne</div>
              <div className="text-sm text-gray-500">بنك إلكتروني</div>
              <div className="text-sm text-gray-700">online banking</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">shopping en ligne</div>
              <div className="text-sm text-gray-500">تسوق إلكتروني</div>
              <div className="text-sm text-gray-700">online shopping</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">réservation</div>
              <div className="text-sm text-gray-500">حجز</div>
              <div className="text-sm text-gray-700">booking/reservation</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">livraison</div>
              <div className="text-sm text-gray-500">توصيل</div>
              <div className="text-sm text-gray-700">delivery</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Popular Apps in Morocco</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">Careem/Uber</div>
              <div className="text-sm text-gray-500">كريم/أوبر</div>
              <div className="text-sm text-gray-700">ride-sharing apps</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">Glovo/Jumia Food</div>
              <div className="text-sm text-gray-500">غلوفو/جوميا فود</div>
              <div className="text-sm text-gray-700">food delivery</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">Jumia</div>
              <div className="text-sm text-gray-500">جوميا</div>
              <div className="text-sm text-gray-700">online marketplace</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">CIH Mobile</div>
              <div className="text-sm text-gray-500">سي آي إتش موبايل</div>
              <div className="text-sm text-gray-700">mobile banking</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Digital Payment Terms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><span className="font-medium">carte bancaire</span> - bank card</div>
            <div><span className="font-medium">paiement en ligne</span> - online payment</div>
            <div><span className="font-medium">virement</span> - transfer</div>
            <div><span className="font-medium">recharge</span> - top-up</div>
          </div>
          <div className="space-y-2">
            <div><span className="font-medium">n-khelles b carte</span> - pay by card</div>
            <div><span className="font-medium">n-transferi flus</span> - transfer money</div>
            <div><span className="font-medium">n-rechargi portable</span> - top up phone</div>
            <div><span className="font-medium">n-commandi online</span> - order online</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Asking for Technical Help</h3>
        <div className="space-y-2">
          <div><span className="font-medium">wash t3ref kif n-downloadi had l-app?</span> - do you know how to download this app?</div>
          <div><span className="font-medium">3awni n-connecti l-wifi</span> - help me connect to wifi</div>
          <div><span className="font-medium">kif n-dir compte f Facebook?</span> - how do I create a Facebook account?</div>
          <div><span className="font-medium">ma 3reftsh n-khddem b had l-programme</span> - I don't know how to use this program</div>
        </div>
      </div>
    </div>
  );
}