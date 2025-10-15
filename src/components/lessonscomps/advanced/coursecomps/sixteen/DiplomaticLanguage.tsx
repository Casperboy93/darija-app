"use client";

import React from 'react';

export default function DiplomaticLanguage() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Diplomatic Language and Communication
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Formal Diplomatic Expressions</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Formal Openings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Bi-ism hukumati</p>
                <p className="text-xs text-gray-600">On behalf of my government</p>
              </div>
              <div>
                <p className="text-sm font-medium">Yashrafuni an uʿbir</p>
                <p className="text-xs text-gray-600">I have the honor to express</p>
              </div>
              <div>
                <p className="text-sm font-medium">Bi-kamil al-ihtiram</p>
                <p className="text-xs text-gray-600">With full respect</p>
              </div>
              <div>
                <p className="text-sm font-medium">Fi itar al-ʿalaqat</p>
                <p className="text-xs text-gray-600">Within the framework of relations</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Diplomatic Positions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Mawqif rasmi</p>
                <p className="text-xs text-gray-600">Official position</p>
              </div>
              <div>
                <p className="text-sm font-medium">Taʾkid iltizam</p>
                <p className="text-xs text-gray-600">Reaffirm commitment</p>
              </div>
              <div>
                <p className="text-sm font-medium">Iʿrab ʿan qalaq</p>
                <p className="text-xs text-gray-600">Express concern</p>
              </div>
              <div>
                <p className="text-sm font-medium">Daʿwa ila hiwar</p>
                <p className="text-xs text-gray-600">Call for dialogue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}