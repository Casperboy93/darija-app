import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Shopping for a Scarf</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Salam, bghit nshri mandil</p>
              <p className="text-sm text-gray-600 italic">Hello, I want to buy a scarf</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Seller</div>
            <div>
              <p className="font-medium">Ahlan wa sahlan! Shuf hado, zwin bzaf</p>
              <p className="text-sm text-gray-600 italic">Welcome! Look at these, they're very beautiful</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Bshhal hada l-ahmar?</p>
              <p className="text-sm text-gray-600 italic">How much is this red one?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Seller</div>
            <div>
              <p className="font-medium">Miya dirham</p>
              <p className="text-sm text-gray-600 italic">One hundred dirhams</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Ghali bzaf! Naqas shwiya</p>
              <p className="text-sm text-gray-600 italic">Too expensive! Lower it a little</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Seller</div>
            <div>
              <p className="font-medium">Akhir kalima: tmanin dirham</p>
              <p className="text-sm text-gray-600 italic">Final price: eighty dirhams</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Customer</div>
            <div>
              <p className="font-medium">Wakha, nakhdu</p>
              <p className="text-sm text-gray-600 italic">Okay, I'll take it</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}