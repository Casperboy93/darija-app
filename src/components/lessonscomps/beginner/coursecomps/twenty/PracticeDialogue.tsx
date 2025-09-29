"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-4">Eid Celebration</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="font-medium text-gray-800">ʿĪd mubārak! Kīf dūztū l-ʿīd?</p>
              <p className="text-gray-600 text-sm">Eid Mubarak! How did you spend Eid?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <div>
              <p className="font-medium text-gray-800">Allāh yabārak fīk! Dūznāh maʿ l-ʿāyla.</p>
              <p className="text-gray-600 text-sm">May Allah bless you! We spent it with family.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="font-medium text-gray-800">Zīn! Āsh ṭayyabtū f l-ʿīd?</p>
              <p className="text-gray-600 text-sm">Great! What did you cook for Eid?</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <div>
              <p className="font-medium text-gray-800">Ṭayyabnā mechoui u couscous u ḥalwiyyāt.</p>
              <p className="text-gray-600 text-sm">We cooked roasted lamb, couscous, and sweets.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <p className="font-medium text-gray-800">Bṣaḥa! Kull ʿām u ntūma b khayr.</p>
              <p className="text-gray-600 text-sm">Enjoy! May you be well every year.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}