"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Ordering at a Restaurant</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Salam, bghit nākul</p>
              <p className="text-sm text-gray-600 italic">Hello, I want to eat</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Waiter</div>
            <div>
              <p className="font-medium">Ahlan wa sahlan! Shnu bghīti?</p>
              <p className="text-sm text-gray-600 italic">Welcome! What would you like?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Shnu ʿandkum mn tajīn?</p>
              <p className="text-sm text-gray-600 italic">What tagines do you have?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Waiter</div>
            <div>
              <p className="font-medium">ʿAndna tajīn djāj w tajīn laḥm</p>
              <p className="text-sm text-gray-600 italic">We have chicken tagine and meat tagine</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Tajīn djāj, w kās atāy</p>
              <p className="text-sm text-gray-600 italic">Chicken tagine, and a glass of tea</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Waiter</div>
            <div>
              <p className="font-medium">Wākhā, ghādi yjī f waqt qrīb</p>
              <p className="text-sm text-gray-600 italic">Okay, it will come soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}