"use client";

import React from 'react';

export default function TechDialogue() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tech Support Dialogue - حوار الدعم التقني</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">At a Phone Shop - في محل الهواتف</h3>
        <div className="space-y-4">
          <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
            <div className="font-semibold text-blue-700">Customer:</div>
            <div className="text-gray-800">السلام عليكم. عندي مشكلة مع الهاتف ديالي</div>
            <div className="text-sm text-gray-600">salam 3alaykum. 3andi mushkila m3a téléphone dyali</div>
            <div className="text-sm italic text-gray-500">Peace be upon you. I have a problem with my phone</div>
          </div>
          
          <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
            <div className="font-semibold text-green-700">Shop Owner:</div>
            <div className="text-gray-800">وعليكم السلام. أش هي المشكلة؟</div>
            <div className="text-sm text-gray-600">wa 3alaykum salam. ash hiya l-mushkila?</div>
            <div className="text-sm italic text-gray-500">And upon you peace. What is the problem?</div>
          </div>
          
          <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
            <div className="font-semibold text-blue-700">Customer:</div>
            <div className="text-gray-800">البطارية كتخلص بزربة والواي فاي ما كيتصلش</div>
            <div className="text-sm text-gray-600">batterie katkhlas b-zarba w wifi ma kaytsalsh</div>
            <div className="text-sm italic text-gray-500">The battery drains quickly and the wifi doesn't connect</div>
          </div>
          
          <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
            <div className="font-semibold text-green-700">Shop Owner:</div>
            <div className="text-gray-800">خليني نشوف. إمتى شريتي هاد التليفون؟</div>
            <div className="text-sm text-gray-600">khalini n-shuf. imta shriti had téléphone?</div>
            <div className="text-sm italic text-gray-500">Let me see. When did you buy this phone?</div>
          </div>
          
          <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
            <div className="font-semibold text-blue-700">Customer:</div>
            <div className="text-gray-800">شريتو من عام تقريبا. واش يمكن تصلحو؟</div>
            <div className="text-sm text-gray-600">shrito mn 3am taqriban. wash ymkan tsalho?</div>
            <div className="text-sm italic text-gray-500">I bought it about a year ago. Can you fix it?</div>
          </div>
          
          <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-500">
            <div className="font-semibold text-green-700">Shop Owner:</div>
            <div className="text-gray-800">أيوا، غنبدل ليك البطارية ونشوف مشكلة الواي فاي</div>
            <div className="text-sm text-gray-600">aywa, ghan-baddal lik batterie w n-shuf mushkilat wifi</div>
            <div className="text-sm italic text-gray-500">Yes, I'll replace the battery for you and check the wifi problem</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Tech Support Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><span className="font-medium">3andi mushkila m3a...</span> - I have a problem with...</div>
            <div><span className="font-medium">ma khadamsh</span> - it doesn't work</div>
            <div><span className="font-medium">wash ymkan tsalho?</span> - can you fix it?</div>
            <div><span className="font-medium">bsh-hal flus?</span> - how much money?</div>
          </div>
          <div className="space-y-2">
            <div><span className="font-medium">ghan-baddal lik...</span> - I'll replace for you...</div>
            <div><span className="font-medium">khassek t-updati</span> - you need to update</div>
            <div><span className="font-medium">restart téléphone</span> - restart the phone</div>
            <div><span className="font-medium">gha-yakhdem mezyan</span> - it will work well</div>
          </div>
        </div>
      </div>
    </div>
  );
}