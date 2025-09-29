import React from 'react';

export default function ShoppingVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Shopping Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential words and phrases you'll need when shopping in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Souk</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Place</span>
          </div>
          <p className="text-gray-600">Market</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: sook</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin kayn souk?" (Where is the market?)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bghit nshri</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Action</span>
          </div>
          <p className="text-gray-600">I want to buy</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit n-shree</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Bghit nshri hadi" (I want to buy this)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bshhal?</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">How much?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: b-shal</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Bshhal hadi?" (How much is this?)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ghali bzaf</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Expression</span>
          </div>
          <p className="text-gray-600">Too expensive</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: gha-lee b-zaf</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Hadi ghali bzaf!" (This is too expensive!)</p>
          </div>
        </div>
      </div>
    </div>
  );
}