"use client";

import React from 'react';

export default function ComputerSoftware() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Computer & Software - الحاسوب والبرمجيات</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Computer Parts</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-indigo-600">écran</div>
              <div className="text-sm text-gray-500">شاشة</div>
              <div className="text-sm text-gray-700">screen</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-indigo-600">clavier</div>
              <div className="text-sm text-gray-500">لوحة مفاتيح</div>
              <div className="text-sm text-gray-700">keyboard</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-indigo-600">souris</div>
              <div className="text-sm text-gray-500">فأرة</div>
              <div className="text-sm text-gray-700">mouse</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-indigo-600">imprimante</div>
              <div className="text-sm text-gray-500">طابعة</div>
              <div className="text-sm text-gray-700">printer</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Software & Applications</h3>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-teal-600">programme</div>
              <div className="text-sm text-gray-500">برنامج</div>
              <div className="text-sm text-gray-700">program</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-teal-600">application</div>
              <div className="text-sm text-gray-500">تطبيق</div>
              <div className="text-sm text-gray-700">application</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-teal-600">fichier</div>
              <div className="text-sm text-gray-500">ملف</div>
              <div className="text-sm text-gray-700">file</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <div className="text-md font-semibold text-teal-600">dossier</div>
              <div className="text-sm text-gray-500">مجلد</div>
              <div className="text-sm text-gray-700">folder</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Computer Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><span className="font-medium">n-ouvri l-ordinateur</span> - turn on the computer</div>
            <div><span className="font-medium">n-fermi</span> - close/shut down</div>
            <div><span className="font-medium">n-clicki</span> - click</div>
            <div><span className="font-medium">n-tapi</span> - type</div>
          </div>
          <div className="space-y-2">
            <div><span className="font-medium">n-sauvgardi</span> - save</div>
            <div><span className="font-medium">n-imprimi</span> - print</div>
            <div><span className="font-medium">n-copyi</span> - copy</div>
            <div><span className="font-medium">n-colli</span> - paste</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Common Computer Problems</h3>
        <div className="space-y-2">
          <div><span className="font-medium">ordinateur ma khadamsh</span> - the computer doesn't work</div>
          <div><span className="font-medium">internet bati</span> - internet is slow</div>
          <div><span className="font-medium">ma qadrtsh n-ouvri l-fichier</span> - I can't open the file</div>
          <div><span className="font-medium">3andi virus f ordinateur</span> - I have a virus on my computer</div>
        </div>
      </div>
    </div>
  );
}