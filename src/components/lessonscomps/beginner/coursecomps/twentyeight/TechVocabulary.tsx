"use client";

import React from 'react';

export default function TechVocabulary() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Vocabulary</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Devices & Gadgets</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">تيليفون</span>
              <span className="text-gray-600">Telephone</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">بورطابل</span>
              <span className="text-gray-600">Laptop</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">تابليت</span>
              <span className="text-gray-600">Tablet</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">كاميرا</span>
              <span className="text-gray-600">Camera</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">شارجور</span>
              <span className="text-gray-600">Charger</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">سماعات</span>
              <span className="text-gray-600">Headphones</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Internet & Connectivity</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">انترنيت</span>
              <span className="text-gray-600">Internet</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">واي فاي</span>
              <span className="text-gray-600">WiFi</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">بلوتوث</span>
              <span className="text-gray-600">Bluetooth</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">موقع</span>
              <span className="text-gray-600">Website</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">ايميل</span>
              <span className="text-gray-600">Email</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="font-medium text-gray-800">باسوورد</span>
              <span className="text-gray-600">Password</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Common Tech Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">نزّل</div>
              <div className="text-blue-600 text-sm">Download</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">رفع</div>
              <div className="text-blue-600 text-sm">Upload</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">شارك</div>
              <div className="text-blue-600 text-sm">Share</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">حفظ</div>
              <div className="text-blue-600 text-sm">Save</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">حذف</div>
              <div className="text-blue-600 text-sm">Delete</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">نسخ</div>
              <div className="text-blue-600 text-sm">Copy</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">لصق</div>
              <div className="text-blue-600 text-sm">Paste</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">بحث</div>
              <div className="text-blue-600 text-sm">Search</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="font-medium text-blue-800">تحديث</div>
              <div className="text-blue-600 text-sm">Update</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-semibold text-yellow-800 mb-2">💡 Tech Tips:</h3>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• Many tech terms are borrowed from English or French</li>
          <li>• Younger Moroccans often mix languages when discussing technology</li>
          <li>• "تطبيق" (tatbiq) is used for mobile apps</li>
          <li>• "رقم سري" (raqam sirri) means PIN or secret number</li>
        </ul>
      </div>
    </div>
  );
}