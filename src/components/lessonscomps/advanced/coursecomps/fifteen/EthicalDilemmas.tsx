"use client";

import React from 'react';

export default function EthicalDilemmas() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Ethical Dilemmas and Case Studies
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Moral Dilemmas</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Discussing Ethical Issues</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Mushkila akhlaqiyya</p>
                <p className="text-xs text-gray-600">Moral problem</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tanaqud qiyam</p>
                <p className="text-xs text-gray-600">Conflict of values</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ikhtiyar saʿb</p>
                <p className="text-xs text-gray-600">Difficult choice</p>
              </div>
              <div>
                <p className="text-sm font-medium">ʿAwaqib ghayr mutawaqaʿa</p>
                <p className="text-xs text-gray-600">Unintended consequences</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Ethical Analysis</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <p className="text-sm font-medium">Min nahiya akhlaqiyya</p>
                <p className="text-xs text-gray-600">From an ethical standpoint</p>
              </div>
              <div>
                <p className="text-sm font-medium">Yajib an nuʿtabar</p>
                <p className="text-xs text-gray-600">We must consider</p>
              </div>
              <div>
                <p className="text-sm font-medium">Hadha yatrah suʾalan</p>
                <p className="text-xs text-gray-600">This raises a question</p>
              </div>
              <div>
                <p className="text-sm font-medium">La yumkin tajahul</p>
                <p className="text-xs text-gray-600">Cannot ignore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}