"use client";

import React from 'react';

export default function GreetingsSocialInteractions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Greetings and Social Interactions
      </h2>
      
      <p className="text-gray-700 mb-6">Proper ways to greet and interact in different social situations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">As-salamu 'alaykum</p>
            <span className="text-2xl">🤝</span>
          </div>
          <p className="text-gray-600">Peace be upon you (formal)</p>
          <p className="text-sm text-gray-500 mt-1">السلام عليكم</p>
          <p className="text-xs text-blue-600 mt-2">Response: Wa 'alaykum as-salam</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kayf sahtak?</p>
            <span className="text-2xl">❤️</span>
          </div>
          <p className="text-gray-600">How is your health?</p>
          <p className="text-sm text-gray-500 mt-1">كيف صحتك؟</p>
          <p className="text-xs text-blue-600 mt-2">Shows genuine concern for wellbeing</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kayf al-'a'ila?</p>
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
          </div>
          <p className="text-gray-600">How is the family?</p>
          <p className="text-sm text-gray-500 mt-1">كيف العائلة؟</p>
          <p className="text-xs text-blue-600 mt-2">Important in Moroccan culture</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Barak Allahu fik</p>
            <span className="text-2xl">🙏</span>
          </div>
          <p className="text-gray-600">May God bless you</p>
          <p className="text-sm text-gray-500 mt-1">بارك الله فيك</p>
          <p className="text-xs text-blue-600 mt-2">Used to show appreciation</p>
        </div>
      </div>
    </div>
  );
}