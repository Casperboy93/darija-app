import React from 'react';

export default function AskingForHelp() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Asking for Help
      </h2>
      
      <p className="text-gray-700 mb-6">These phrases will help you when you need assistance or information from locals.</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">3afak, 3awnni (Please, help me)</p>
          <p className="text-gray-600 mb-1">Used when you need assistance</p>
          <p className="text-sm italic text-gray-500">Pronounced: ah-fak, ah-wen-nee</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Fin kayn...? (Where is...?)</p>
          <p className="text-gray-600 mb-1">Asking for directions or locations</p>
          <p className="text-sm italic text-gray-500">Pronounced: feen kay-en</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Wash katfhem l'ingliziya? (Do you speak English?)</p>
          <p className="text-gray-600 mb-1">Asking if someone speaks English</p>
          <p className="text-sm italic text-gray-500">Pronounced: wash kat-fhem l-ing-lee-zee-ya</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Ma fhemtsh (I don't understand)</p>
          <p className="text-gray-600 mb-1">When you need clarification</p>
          <p className="text-sm italic text-gray-500">Pronounced: ma fhemt-sh</p>
        </div>
      </div>
    </div>
  );
}