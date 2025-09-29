import React from 'react';

export default function Introductions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Introductions
      </h2>
      
      <p className="text-gray-700 mb-6">Learning how to introduce yourself and ask basic questions is crucial for any conversation in Darija.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Smiti...</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Introduction</span>
          </div>
          <p className="text-gray-600">My name is...</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: smee-tee</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Smiti Ahmed"<br/>(My name is Ahmed)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shnu smitk?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">What's your name?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shnoo smee-tak</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Note:</span> Use "smitk" for masculine, "smitik" for feminine</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ana mn...</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Origin</span>
          </div>
          <p className="text-gray-600">I'm from...</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ah-na men</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Ana mn Casablanca"<br/>(I'm from Casablanca)</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Mnin nta/nti?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">Where are you from?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: mneen en-ta/en-tee</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Note:</span> "nta" for masculine, "nti" for feminine</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Tsherfna</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Polite</span>
          </div>
          <p className="text-gray-600">Nice to meet you</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: tshar-af-na</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Literal:</span> "We are honored" - shows respect</p>
          </div>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ahlan wa sahlan</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Welcome</span>
          </div>
          <p className="text-gray-600">Welcome</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ah-lan wa sah-lan</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Usage:</span> Common response when someone introduces themselves</p>
          </div>
        </div>
      </div>
      
      {/* Age and Basic Info */}
      <div className="mt-8 bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Additional Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded-md">
            <p className="font-medium">Age</p>
            <p className="text-gray-700">"Shhal f 3mrek?" (How old are you?)</p>
            <p className="text-gray-700">"3ndi ... sna" (I'm ... years old)</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-md">
            <p className="font-medium">Profession</p>
            <p className="text-gray-700">"Ash khdamti?" (What do you do?)</p>
            <p className="text-gray-700">"Ana ..." (I am a ...)</p>
          </div>
        </div>
      </div>
    </div>
  );
}