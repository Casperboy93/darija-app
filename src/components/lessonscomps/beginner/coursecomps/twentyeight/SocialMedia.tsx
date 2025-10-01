"use client";

import React from 'react';

export default function SocialMedia() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Media & Online Platforms</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Popular Platforms</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="font-medium text-blue-800">فيسبوك</div>
              <div className="text-blue-600 text-sm">Facebook</div>
            </div>
            <div className="p-3 bg-pink-50 border border-pink-200 rounded">
              <div className="font-medium text-pink-800">انستغرام</div>
              <div className="text-pink-600 text-sm">Instagram</div>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <div className="font-medium text-green-800">واتساب</div>
              <div className="text-green-600 text-sm">WhatsApp</div>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <div className="font-medium text-red-800">يوتيوب</div>
              <div className="text-red-600 text-sm">YouTube</div>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded">
              <div className="font-medium text-purple-800">تيك توك</div>
              <div className="text-purple-600 text-sm">TikTok</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Social Media Actions</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">لايك</span>
              <span className="text-gray-600">Like</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">كومنت</span>
              <span className="text-gray-600">Comment</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">شير</span>
              <span className="text-gray-600">Share</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">فولو</span>
              <span className="text-gray-600">Follow</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">بوست</span>
              <span className="text-gray-600">Post</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">ستوري</span>
              <span className="text-gray-600">Story</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Common Social Media Phrases</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">شنو كتبوستي؟</div>
              <div className="text-gray-600 text-sm">What are you posting?</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">عجبني البوست ديالك</div>
              <div className="text-gray-600 text-sm">I liked your post</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">شاركني الرابط</div>
              <div className="text-gray-600 text-sm">Share the link with me</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">نزّل التطبيق</div>
              <div className="text-gray-600 text-sm">Download the app</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">عندي متابعين بزاف</div>
              <div className="text-gray-600 text-sm">I have many followers</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">شوف الستوري ديالي</div>
              <div className="text-gray-600 text-sm">Check out my story</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Online Communication</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">رسالة</div>
            <div className="text-blue-600 text-sm">Message</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">شات</div>
            <div className="text-blue-600 text-sm">Chat</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">فيديو كول</div>
            <div className="text-blue-600 text-sm">Video call</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">إيموجي</div>
            <div className="text-blue-600 text-sm">Emoji</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">نوتيفيكيشن</div>
            <div className="text-blue-600 text-sm">Notification</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">بروفايل</div>
            <div className="text-blue-600 text-sm">Profile</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <h3 className="font-semibold text-green-800 mb-2">🌍 Cultural Note:</h3>
        <p className="text-green-700 text-sm">
          Social media is extremely popular in Morocco, especially among young people. WhatsApp is widely used for 
          business communication, while Instagram and TikTok are popular for entertainment. Many Moroccans use 
          social media to stay connected with family abroad.
        </p>
      </div>
    </div>
  );
}