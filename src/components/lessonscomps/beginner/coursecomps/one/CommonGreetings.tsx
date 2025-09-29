import React from 'react';

export default function CommonGreetings() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Common Greetings
      </h2>
      
      <p className="text-gray-700 mb-6">Greetings are an essential part of Moroccan culture. They tend to be longer and more elaborate than in Western cultures, reflecting the importance of social connections.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Salam</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Formal & Informal</span>
          </div>
          <p className="text-gray-600">Hello/Peace</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: sah-lam</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Salam, kifash nta/nti?"<br/>(Hello, how are you?)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Labas?</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Informal</span>
          </div>
          <p className="text-gray-600">How are you?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: la-bass</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Labas? Kulshi bikhir?"<br/>(How are you? Everything good?)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Labas, hamdullah</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Common Response</span>
          </div>
          <p className="text-gray-600">I'm fine, thank God</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: la-bass, ham-doo-lee-lah</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Cultural note:</span> "Hamdullah" (thank God) is commonly added to positive responses</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Sbah l'khir</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Morning</span>
          </div>
          <p className="text-gray-600">Good morning</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: sbah l-kheer</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Response:</span> "Sbah noor"<br/>(Morning of light)</p>
          </div>
        </div>
      </div>
      
      {/* Time-specific Greetings */}
      <div className="mt-8 bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Time-specific Greetings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Morning</p>
            <p className="text-gray-700">Sbah l'khir → Sbah noor</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Afternoon/Evening</p>
            <p className="text-gray-700">Msa l'khir → Msa noor</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Night</p>
            <p className="text-gray-700">Layla sa'ida</p>
          </div>
        </div>
      </div>
    </div>
  );
}