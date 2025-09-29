import React from 'react';

export default function BargainingPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Bargaining Phrases
      </h2>
      
      <p className="text-gray-700 mb-6">Bargaining is an art form in Morocco. These phrases will help you negotiate better prices.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Naqas shwiya</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Negotiation</span>
          </div>
          <p className="text-gray-600">Lower the price a little</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: na-qas shwee-ya</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Polite way to ask for a discount</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Akhir kalima</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Final offer</span>
          </div>
          <p className="text-gray-600">Final word/Last price</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-kheer ka-lee-ma</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Ask for the seller's final price</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ma kanakhudsh</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Refusal</span>
          </div>
          <p className="text-gray-600">I won't take it</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma ka-na-khudsh</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Polite way to decline an offer</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Wakha</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Agreement</span>
          </div>
          <p className="text-gray-600">Okay/Agreed</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: wa-kha</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Accept a price or deal</p>
          </div>
        </div>
      </div>
    </div>
  );
}