"use client";

import React from 'react';

export default function GivingAdviceWithConditionals() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Giving Advice with Conditionals
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-blue-200 rounded-lg p-5">
          <h4 className="font-medium text-blue-800 mb-3">Health Advice</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila kunt mrid, sir l-tbeeb</p>
              <p className="text-gray-600 italic">If you are sick, go to the doctor</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti tkhss, kul qall</p>
              <p className="text-gray-600 italic">If you want to lose weight, eat less</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila kan 3ndek suda3, shreb ma</p>
              <p className="text-gray-600 italic">If you have a headache, drink water</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila ma nmsitish mzyan, ma tsuqsh</p>
              <p className="text-gray-600 italic">If you didn't sleep well, don't drive</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-5">
          <h4 className="font-medium text-blue-800 mb-3">Study Advice</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti tnj7, qra mzyan</p>
              <p className="text-gray-600 italic">If you want to succeed, study well</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila ma fhmtish, sul l-ustad</p>
              <p className="text-gray-600 italic">If you don't understand, ask the teacher</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila kan 3ndek imtihan, qra mn qbl</p>
              <p className="text-gray-600 italic">If you have an exam, study beforehand</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti tkhdem mzyan, nsa l-tilifun</p>
              <p className="text-gray-600 italic">If you want to work well, forget the phone</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-blue-200 rounded-lg p-5">
          <h4 className="font-medium text-blue-800 mb-3">Life Advice</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti s7ab, kun zwina</p>
              <p className="text-gray-600 italic">If you want friends, be nice</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti flus, khdm bzaf</p>
              <p className="text-gray-600 italic">If you want money, work hard</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti tkon s3id, kun shaker</p>
              <p className="text-gray-600 italic">If you want to be happy, be grateful</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="font-medium">Ila bghiti tnsa l-mushkil, hdr m3a shi 7d</p>
              <p className="text-gray-600 italic">If you want to forget problems, talk to someone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}