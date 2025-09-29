import React from 'react';

export default function PracticeExercise() {
  return (
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
  );
}