"use client";

import React from 'react';

export default function ExpressingFeelings() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Expressing Your Feelings
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to express your emotions and feelings in different situations.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Positive Feelings */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-800 flex items-center">
            <span className="text-xl mr-2">😊</span>
            Positive Feelings
          </h3>
          
          <div className="space-y-3">
            <div className="bg-white rounded-md p-3 border border-green-100">
        <p className="font-bold text-gray-900">Ana farhan bzaf</p>
              <p className="text-gray-600 text-sm">I'm very happy</p>
              <p className="text-xs text-gray-500">أنا فرحان بزاف</p>
            </div>
            
            <div className="bg-white rounded-md p-3 border border-green-100">
        <p className="font-bold text-gray-900">Ana mabsut</p>
              <p className="text-gray-600 text-sm">I'm pleased/content</p>
              <p className="text-xs text-gray-500">أنا مبسوط</p>
            </div>
            
            <div className="bg-white rounded-md p-3 border border-green-100">
        <p className="font-bold text-gray-900">Ana f hala zina</p>
              <p className="text-gray-600 text-sm">I'm in a good mood</p>
              <p className="text-xs text-gray-500">أنا في حالة زينة</p>
            </div>
          </div>
        </div>
        
        {/* Negative Feelings */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-red-800 flex items-center">
            <span className="text-xl mr-2">😔</span>
            Negative Feelings
          </h3>
          
          <div className="space-y-3">
            <div className="bg-white rounded-md p-3 border border-red-100">
        <p className="font-bold text-gray-900">Ana hazin</p>
              <p className="text-gray-600 text-sm">I'm sad</p>
              <p className="text-xs text-gray-500">أنا حزين</p>
            </div>
            
            <div className="bg-white rounded-md p-3 border border-red-100">
        <p className="font-bold text-gray-900">Ana ghadib</p>
              <p className="text-gray-600 text-sm">I'm angry</p>
              <p className="text-xs text-gray-500">أنا غاضب</p>
            </div>
            
            <div className="bg-white rounded-md p-3 border border-red-100">
        <p className="font-bold text-gray-900">Ana ta'ban bzaf</p>
              <p className="text-gray-600 text-sm">I'm very tired</p>
              <p className="text-xs text-gray-500">أنا تعبان بزاف</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}