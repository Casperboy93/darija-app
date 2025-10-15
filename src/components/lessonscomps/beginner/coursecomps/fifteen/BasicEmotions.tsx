"use client";

import React from 'react';

export default function BasicEmotions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Basic Emotions
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for expressing different emotional states.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Farhan</p>
            <span className="text-2xl">😊</span>
          </div>
          <p className="text-gray-600">Happy</p>
          <p className="text-sm text-gray-500 mt-1">فرحان</p>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Hazin</p>
            <span className="text-2xl">😢</span>
          </div>
          <p className="text-gray-600">Sad</p>
          <p className="text-sm text-gray-500 mt-1">حزين</p>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Ghadib</p>
            <span className="text-2xl">😠</span>
          </div>
          <p className="text-gray-600">Angry</p>
          <p className="text-sm text-gray-500 mt-1">غاضب</p>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Khaif</p>
            <span className="text-2xl">😨</span>
          </div>
          <p className="text-gray-600">Scared/Afraid</p>
          <p className="text-sm text-gray-500 mt-1">خايف</p>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Muta'ajjib</p>
            <span className="text-2xl">😲</span>
          </div>
          <p className="text-gray-600">Surprised</p>
          <p className="text-sm text-gray-500 mt-1">متعجب</p>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Ta'ban</p>
            <span className="text-2xl">😴</span>
          </div>
          <p className="text-gray-600">Tired</p>
          <p className="text-sm text-gray-500 mt-1">تعبان</p>
        </div>
      </div>
    </div>
  );
}