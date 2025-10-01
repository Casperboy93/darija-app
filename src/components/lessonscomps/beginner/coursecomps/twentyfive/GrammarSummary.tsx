"use client";

import React from 'react';

export default function GrammarSummary() {
  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Grammar Summary - ملخص القواعد
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Sentence Structure</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Basic Word Order</p>
              <p className="text-sm text-gray-600">Verb + Subject + Object (VSO)</p>
              <p className="text-green-600 text-sm">كلا أحمد التفاح - Kla Ahmad t-tuffah</p>
              <p className="text-xs text-gray-500">Ahmed ate the apple</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Questions</p>
              <p className="text-sm text-gray-600">Use واش (wash) for yes/no questions</p>
              <p className="text-green-600 text-sm">واش كتحب القهوة؟ - Wash kthabb l-qahwa?</p>
              <p className="text-xs text-gray-500">Do you like coffee?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Verb Conjugation</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Present Tense</p>
              <p className="text-sm text-gray-600">Add ك (k-) prefix for present</p>
              <p className="text-green-600 text-sm">كنمشي - Kanmshi (I go)</p>
              <p className="text-green-600 text-sm">كتمشي - Katmshi (You go)</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Past Tense</p>
              <p className="text-sm text-gray-600">Use root verb form</p>
              <p className="text-green-600 text-sm">مشيت - Mshit (I went)</p>
              <p className="text-green-600 text-sm">مشيتي - Mshiti (You went)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Pronouns</h3>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-700">I</p>
                <p className="font-medium text-green-600">أنا - Ana</p>
              </div>
              <div>
                <p className="text-gray-700">You (m)</p>
                <p className="font-medium text-green-600">نتا - Nta</p>
              </div>
              <div>
                <p className="text-gray-700">You (f)</p>
                <p className="font-medium text-green-600">نتي - Nti</p>
              </div>
              <div>
                <p className="text-gray-700">He</p>
                <p className="font-medium text-green-600">هو - Huwa</p>
              </div>
              <div>
                <p className="text-gray-700">She</p>
                <p className="font-medium text-green-600">هي - Hiya</p>
              </div>
              <div>
                <p className="text-gray-700">We</p>
                <p className="font-medium text-green-600">حنا - Hna</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Possessives</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="text-gray-700 font-medium">My</p>
              <p className="text-green-600">ديالي - Dyali</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">Your (m)</p>
              <p className="text-green-600">ديالك - Dyalk</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">Your (f)</p>
              <p className="text-green-600">ديالك - Dyalik</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">His/Her</p>
              <p className="text-green-600">ديالو/ديالها - Dyalu/Dyalha</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Negation</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Present Negative</p>
              <p className="text-sm text-gray-600">ما + verb + ش (ma...sh)</p>
              <p className="text-green-600 text-sm">ما كنعرفش - Ma kan3rafsh</p>
              <p className="text-xs text-gray-500">I don't know</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
              <p className="font-medium text-green-700">Past Negative</p>
              <p className="text-sm text-gray-600">ما + past verb + ش</p>
              <p className="text-green-600 text-sm">ما مشيتش - Ma mshitsh</p>
              <p className="text-xs text-gray-500">I didn't go</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Articles & Prepositions</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="text-gray-700 font-medium">The</p>
              <p className="text-green-600">ال - L- (attached to noun)</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">In/At</p>
              <p className="text-green-600">في - F-</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">With</p>
              <p className="text-green-600">مع - M3a</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-700 font-medium">From</p>
              <p className="text-green-600">من - Mn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-md border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Grammar Practice</h3>
        <p className="text-sm text-gray-700 mb-3">
          Try to form these sentences in Darija:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="bg-white p-2 rounded border">
            <p className="text-gray-700">"I am eating bread"</p>
            <p className="text-xs text-gray-500">Hint: Use present tense</p>
          </div>
          <div className="bg-white p-2 rounded border">
            <p className="text-gray-700">"Do you speak Arabic?"</p>
            <p className="text-xs text-gray-500">Hint: Use واش question</p>
          </div>
          <div className="bg-white p-2 rounded border">
            <p className="text-gray-700">"This is my house"</p>
            <p className="text-xs text-gray-500">Hint: Use possessive</p>
          </div>
          <div className="bg-white p-2 rounded border">
            <p className="text-gray-700">"I don't understand"</p>
            <p className="text-xs text-gray-500">Hint: Use negation</p>
          </div>
        </div>
      </div>
    </div>
  );
}