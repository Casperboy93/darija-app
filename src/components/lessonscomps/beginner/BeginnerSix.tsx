"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerSix() {
  return (
    <LessonLayout 
      title="Shopping and Markets" 
      level="beginner" 
      lessonNumber={6}
      previousLesson="beginner-five"
      nextLesson="beginner-seven"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn essential vocabulary and phrases for shopping in Moroccan markets and stores. Master the art of bargaining and navigate shopping situations with confidence.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master shopping vocabulary and market terms</li>
            <li>Learn numbers and prices in Darija</li>
            <li>Understand bargaining phrases and cultural context</li>
            <li>Practice shopping conversations and negotiations</li>
          </ul>
        </div>
      </div>
      
      {/* Shopping Vocabulary */}
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

      {/* Bargaining Phrases */}
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

      {/* Practice Dialogue */}
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

      {/* Cultural Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Shopping Etiquette in Morocco</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Bargaining is expected in markets (souks) but not in modern stores</li>
                <li>• Start by offering about 30-40% of the asking price</li>
                <li>• Be polite and patient - bargaining is a social interaction</li>
                <li>• It's okay to walk away if you can't agree on a price</li>
                <li>• Learn some numbers in Darija to understand prices better</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-800 mb-4">Role Play: At the Souk</h3>
          <p className="text-gray-700 mb-4">Practice this scenario: You want to buy a traditional Moroccan lamp. The seller asks for 200 dirhams, but you think it's too expensive. Try to negotiate a better price.</p>
          
          <div className="bg-white p-4 rounded-md border border-green-100">
            <p className="font-medium text-green-800 mb-2">Key phrases to use:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Bghit nshri mjmar (I want to buy a lamp)</li>
              <li>Bshhal hada? (How much is this?)</li>
              <li>Ghali bzaf! (Too expensive!)</li>
              <li>Naqas shwiya (Lower it a little)</li>
              <li>Akhir kalima? (Final price?)</li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}