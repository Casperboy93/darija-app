import React from 'react';

export default function EssentialPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Essential Phrases
      </h2>
      
      <p className="text-gray-700 mb-6">These phrases are the building blocks of polite conversation in Moroccan culture. They show respect and help you navigate social interactions smoothly.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shukran</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Gratitude</span>
          </div>
          <p className="text-gray-600">Thank you</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shook-ran</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Response:</span> "3afwan" (You're welcome)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Afak</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Request</span>
          </div>
          <p className="text-gray-600">Please</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ah-fak</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Afak, 3tini l'ma" (Please, give me water)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Smeh liya</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Apology</span>
          </div>
          <p className="text-gray-600">Excuse me / I'm sorry</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: smeh lee-ya</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Getting attention or apologizing</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">La bas</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Reassurance</span>
          </div>
          <p className="text-gray-600">No problem / It's okay</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: la bass</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Context:</span> Accepting apologies or reassuring</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Wakha</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Agreement</span>
          </div>
          <p className="text-gray-600">Okay / Alright</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: wah-kha</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Agreeing or accepting something</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Lla</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Negation</span>
          </div>
          <p className="text-gray-600">No</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: l-la</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Polite form:</span> "Lla, shukran" (No, thank you)</p>
          </div>
        </div>
      </div>
    </div>
  );
}