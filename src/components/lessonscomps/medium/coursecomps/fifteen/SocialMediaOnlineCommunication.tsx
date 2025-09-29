"use client";

import React from 'react';

export default function SocialMediaOnlineCommunication() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Social Media and Online Communication
      </h2>
      
      <p className="text-gray-700 mb-6">Navigate social media platforms and online communication in Arabic.</p>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Social Media Platforms</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Facebook - Faysbūk</span>
              <span className="text-gray-600">فيسبوك</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Instagram - Instāgrām</span>
              <span className="text-gray-600">إنستغرام</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">WhatsApp - Wātsāb</span>
              <span className="text-gray-600">واتساب</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">YouTube - Yūtyūb</span>
              <span className="text-gray-600">يوتيوب</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Online Actions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Nashr</span>
              <span className="text-gray-600">Post/Publish (نشر)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Iʿjāb</span>
              <span className="text-gray-600">Like (إعجاب)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Taʿlīq</span>
              <span className="text-gray-600">Comment (تعليق)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Mushāraka</span>
              <span className="text-gray-600">Share (مشاركة)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}