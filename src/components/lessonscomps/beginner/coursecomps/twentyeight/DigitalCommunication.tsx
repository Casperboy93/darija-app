"use client";

import React from 'react';

export default function DigitalCommunication() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Digital Communication</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Communication Methods</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <div className="font-medium text-green-800">مكالمة هاتفية</div>
              <div className="text-green-600 text-sm">Phone call</div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="font-medium text-blue-800">رسالة نصية</div>
              <div className="text-blue-600 text-sm">Text message (SMS)</div>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded">
              <div className="font-medium text-purple-800">مكالمة فيديو</div>
              <div className="text-purple-600 text-sm">Video call</div>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded">
              <div className="font-medium text-orange-800">رسالة صوتية</div>
              <div className="text-orange-600 text-sm">Voice message</div>
            </div>
            <div className="p-3 bg-pink-50 border border-pink-200 rounded">
              <div className="font-medium text-pink-800">إيميل</div>
              <div className="text-pink-600 text-sm">Email</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Messaging Apps</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">واتساب</span>
              <span className="text-gray-600">WhatsApp</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">تيليغرام</span>
              <span className="text-gray-600">Telegram</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">ماسنجر</span>
              <span className="text-gray-600">Messenger</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">سكايب</span>
              <span className="text-gray-600">Skype</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">زوم</span>
              <span className="text-gray-600">Zoom</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">ديسكورد</span>
              <span className="text-gray-600">Discord</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Common Communication Phrases</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">صيفط ليا رسالة</div>
              <div className="text-gray-600 text-sm">Send me a message</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">عيّط ليا</div>
              <div className="text-gray-600 text-sm">Call me</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">جاوبني</div>
              <div className="text-gray-600 text-sm">Answer me</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">شوف الرسالة</div>
              <div className="text-gray-600 text-sm">Check the message</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">ما وصلتنيش الرسالة</div>
              <div className="text-gray-600 text-sm">I didn't receive the message</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">الشبكة ضعيفة</div>
              <div className="text-gray-600 text-sm">The network is weak</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">ما كنسمعكش مزيان</div>
              <div className="text-gray-600 text-sm">I can't hear you well</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-medium text-gray-800 mb-1">عاود العيطة</div>
              <div className="text-gray-600 text-sm">Call again</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Digital Etiquette Phrases</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">سمح ليا</div>
            <div className="text-blue-600 text-sm">Excuse me</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">شكرا ليك</div>
            <div className="text-blue-600 text-sm">Thank you</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">بلا مؤاخذة</div>
            <div className="text-blue-600 text-sm">No offense</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">ما عندي مانع</div>
            <div className="text-blue-600 text-sm">I don't mind</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">نشوفك غدا</div>
            <div className="text-blue-600 text-sm">See you tomorrow</div>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <div className="font-medium text-blue-800 mb-1">تصبح على خير</div>
            <div className="text-blue-600 text-sm">Good night</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Video Call Conversation</h3>
        <div className="bg-gray-50 p-4 rounded border">
          <div className="space-y-3">
            <div>
              <div className="font-medium text-gray-800">Person A:</div>
              <div className="text-gray-700 ml-4">السلام عليكم، واش كتشوفني مزيان؟</div>
              <div className="text-gray-600 ml-4 text-sm">Peace be upon you, can you see me well?</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Person B:</div>
              <div className="text-gray-700 ml-4">وعليكم السلام، آه كنشوفك، بصّح الصوت ضعيف شوية</div>
              <div className="text-gray-600 ml-4 text-sm">And upon you peace, yes I can see you, but the sound is a bit weak</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Person A:</div>
              <div className="text-gray-700 ml-4">غنقرّب من الميكرو، دابا واش أحسن؟</div>
              <div className="text-gray-600 ml-4 text-sm">I'll get closer to the microphone, is it better now?</div>
            </div>
            <div>
              <div className="font-medium text-gray-800">Person B:</div>
              <div className="text-gray-700 ml-4">آه دابا مزيان، يلا نبداو الاجتماع</div>
              <div className="text-gray-600 ml-4 text-sm">Yes, now it's good, let's start the meeting</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <h3 className="font-semibold text-green-800 mb-2">📱 Communication Tips:</h3>
        <ul className="text-green-700 text-sm space-y-1">
          <li>• WhatsApp is the most popular messaging app in Morocco</li>
          <li>• Voice messages are commonly used instead of typing</li>
          <li>• Video calls are popular for family communication</li>
          <li>• Always greet with "السلام عليكم" in formal digital communication</li>
          <li>• Emojis are widely used to express emotions</li>
        </ul>
      </div>
    </div>
  );
}