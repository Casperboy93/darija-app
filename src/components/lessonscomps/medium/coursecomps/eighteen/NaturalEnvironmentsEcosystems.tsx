"use client";

import React from 'react';

export default function NaturalEnvironmentsEcosystems() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Natural Environments and Ecosystems
      </h2>
      
      <p className="text-gray-700 mb-6">Morocco's diverse natural environments and ecosystems.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ghāba</p>
            <span className="text-2xl">🌲</span>
          </div>
          <p className="text-gray-600">Forest</p>
          <p className="text-sm text-gray-500 mt-1">غابة</p>
          <p className="text-xs text-blue-600 mt-2">Cedar and oak forests</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṣaḥrāʾ</p>
            <span className="text-2xl">🏜️</span>
          </div>
          <p className="text-gray-600">Desert</p>
          <p className="text-sm text-gray-500 mt-1">صحراء</p>
          <p className="text-xs text-blue-600 mt-2">Sahara Desert</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jabal</p>
            <span className="text-2xl">⛰️</span>
          </div>
          <p className="text-gray-600">Mountain</p>
          <p className="text-sm text-gray-500 mt-1">جبل</p>
          <p className="text-xs text-blue-600 mt-2">Atlas Mountains</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sāḥil</p>
            <span className="text-2xl">🏖️</span>
          </div>
          <p className="text-gray-600">Coast</p>
          <p className="text-sm text-gray-500 mt-1">ساحل</p>
          <p className="text-xs text-blue-600 mt-2">Atlantic and Mediterranean</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Nahr</p>
            <span className="text-2xl">🏞️</span>
          </div>
          <p className="text-gray-600">River</p>
          <p className="text-sm text-gray-500 mt-1">نهر</p>
          <p className="text-xs text-blue-600 mt-2">Sebou, Moulouya rivers</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Buḥayra</p>
            <span className="text-2xl">🏞️</span>
          </div>
          <p className="text-gray-600">Lake</p>
          <p className="text-sm text-gray-500 mt-1">بحيرة</p>
          <p className="text-xs text-blue-600 mt-2">Natural and artificial lakes</p>
        </div>
      </div>
    </div>
  );
}