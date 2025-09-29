"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Talking About Hobbies</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-pink-500">
            <p className="font-medium text-pink-700">Sara:</p>
            <p className="text-gray-800">"Ash kat-ḥabb tdir f waqt al-farāgh?"</p>
            <p className="text-gray-600 text-sm">"What do you like to do in your free time?"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <p className="font-medium text-blue-700">Omar:</p>
            <p className="text-gray-800">"Ana kan-ḥabb al-qirā'a u kan-l'ab kūra ma' ṣḥābī"</p>
            <p className="text-gray-600 text-sm">"I like reading and I play football with my friends"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-pink-500">
            <p className="font-medium text-pink-700">Sara:</p>
            <p className="text-gray-800">"Zwin! Ana kan-ḥabb al-mūsīqā u al-rasm"</p>
            <p className="text-gray-600 text-sm">"Nice! I like music and drawing"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <p className="font-medium text-blue-700">Omar:</p>
            <p className="text-gray-800">"Ayy naw' mūsīqā kat-ḥabbī?"</p>
            <p className="text-gray-600 text-sm">"What kind of music do you like?"</p>
          </div>
        </div>
      </div>
    </div>
  );
}