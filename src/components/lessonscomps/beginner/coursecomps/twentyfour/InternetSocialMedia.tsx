"use client";

import React from 'react';

export default function InternetSocialMedia() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Internet & Social Media - الإنترنت ووسائل التواصل</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Internet Terms</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">internet</div>
              <div className="text-sm text-gray-500">إنترنت</div>
              <div className="text-sm text-gray-700">internet</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">wifi</div>
              <div className="text-sm text-gray-500">واي فاي</div>
              <div className="text-sm text-gray-700">wifi</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">site web</div>
              <div className="text-sm text-gray-500">موقع</div>
              <div className="text-sm text-gray-700">website</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-green-600">email</div>
              <div className="text-sm text-gray-500">إيميل</div>
              <div className="text-sm text-gray-700">email</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Social Media</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">Facebook</div>
              <div className="text-sm text-gray-500">فيسبوك</div>
              <div className="text-sm text-gray-700">Facebook</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">Instagram</div>
              <div className="text-sm text-gray-500">إنستغرام</div>
              <div className="text-sm text-gray-700">Instagram</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">WhatsApp</div>
              <div className="text-sm text-gray-500">واتساب</div>
              <div className="text-sm text-gray-700">WhatsApp</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-purple-600">YouTube</div>
              <div className="text-sm text-gray-500">يوتيوب</div>
              <div className="text-sm text-gray-700">YouTube</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Internet Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><span className="font-medium">n-connecti l-wifi</span> - connect to wifi</div>
            <div><span className="font-medium">n-téléchargi</span> - download</div>
            <div><span className="font-medium">n-partagé</span> - share</div>
            <div><span className="font-medium">n-posté</span> - post</div>
          </div>
          <div className="space-y-2">
            <div><span className="font-medium">n-cherché f Google</span> - search on Google</div>
            <div><span className="font-medium">n-sifet message</span> - send a message</div>
            <div><span className="font-medium">n-suivé</span> - follow</div>
            <div><span className="font-medium">n-liké</span> - like</div>
          </div>
        </div>
      </div>
    </div>
  );
}