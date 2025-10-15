"use client";

import React from 'react';

export default function SocialDynamicsRelationships() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Social Dynamics and Relationships
      </h2>
      
      <p className="text-gray-700 mb-6">Advanced vocabulary for discussing complex social relationships and cultural dynamics.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Karama</p>
            <span className="text-2xl">👑</span>
          </div>
          <p className="text-gray-600">Dignity/Honor</p>
          <p className="text-sm text-gray-500 mt-1">كرامة</p>
          <p className="text-xs text-teal-600 mt-2">Personal worth</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Wafaʾ</p>
            <span className="text-2xl">🤝</span>
          </div>
          <p className="text-gray-600">Loyalty/Faithfulness</p>
          <p className="text-sm text-gray-500 mt-1">وفاء</p>
          <p className="text-xs text-teal-600 mt-2">Commitment</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hasab wa nasab</p>
            <span className="text-2xl">🏛️</span>
          </div>
          <p className="text-gray-600">Lineage/Ancestry</p>
          <p className="text-sm text-gray-500 mt-1">حسب ونسب</p>
          <p className="text-xs text-teal-600 mt-2">Social status</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tadamun</p>
            <span className="text-2xl">🤲</span>
          </div>
          <p className="text-gray-600">Solidarity</p>
          <p className="text-sm text-gray-500 mt-1">تضامن</p>
          <p className="text-xs text-teal-600 mt-2">Mutual support</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ihtiram</p>
            <span className="text-2xl">🙏</span>
          </div>
          <p className="text-gray-600">Respect</p>
          <p className="text-sm text-gray-500 mt-1">احترام</p>
          <p className="text-xs text-teal-600 mt-2">Mutual regard</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tanaghum</p>
            <span className="text-2xl">🎼</span>
          </div>
          <p className="text-gray-600">Harmony</p>
          <p className="text-sm text-gray-500 mt-1">تناغم</p>
          <p className="text-xs text-teal-600 mt-2">Social balance</p>
        </div>
      </div>
    </div>
  );
}