"use client";

import React from 'react';

export default function ComplexConversationExample() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Complex Conversation Example
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Debate: Traditional vs Modern Education</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
            <p className="font-semibold text-purple-700">A: Ash rayak f t ta3lim l 3asri?</p>
            <p className="text-gray-600 italic">What do you think about modern education?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Akid anna t ta3lim l 3asri muhimm, lakin ma ykhallinash nansaw t turath</p>
            <p className="text-gray-600 italic">Certainly modern education is important, but it shouldn't make us forget our heritage</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
            <p className="font-semibold text-purple-700">A: 3andak l haqq, lakin l 3alam ghadi l quddum u lazim nwakbu</p>
            <p className="text-gray-600 italic">You're right, but the world is moving forward and we must keep up</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Muttafiq m3ak, lakin yumkin ndiru tawazun bayn l qadim u l jadid</p>
            <p className="text-gray-600 italic">I agree with you, but we can create balance between old and new</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
            <p className="font-semibold text-purple-700">A: Hada fikra zayina. Kifash yumkin ndiru had t tawazun?</p>
            <p className="text-gray-600 italic">That's a good idea. How can we create this balance?</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
            <p className="font-semibold text-blue-700">B: Matalan, n3allmu t teknolojiya u f nafs l waqt n3allmu l lugha l 3arabiyya u t tarikh</p>
            <p className="text-gray-600 italic">For example, we teach technology and at the same time teach Arabic language and history</p>
          </div>
        </div>
      </div>
    </div>
  );
}