import React from 'react';

export default function TranslatorPage() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Darija Translator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="from-language" className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <select id="from-language" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="english">English</option>
                <option value="darija">Darija</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
              <textarea 
                className="w-full h-40 mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" 
                placeholder="Enter text to translate..."
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="to-language" className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <select id="to-language" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="darija">Darija</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
              <div className="w-full h-40 mt-3 p-3 bg-gray-50 border border-gray-300 rounded-md overflow-auto">
                <p className="text-gray-500 italic">Translation will appear here...</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90">
              Translate
            </button>
          </div>
        </div>
        
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Common Phrases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-primary">Hello / Hi</p>
              <p className="text-gray-700">Salam / Ahlan</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-primary">How are you?</p>
              <p className="text-gray-700">Labas? / Kif nta/nti?</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-primary">Thank you</p>
              <p className="text-gray-700">Shukran</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium text-primary">You're welcome</p>
              <p className="text-gray-700">Bla jmil</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">About Our Translator</h2>
          <p className="text-gray-700">
            Our translator tool helps you convert between Darija and other languages. 
            Please note that Darija is primarily a spoken dialect with regional variations, 
            so translations may vary. For more accurate learning, we recommend our 
            structured lessons.
          </p>
        </div>
      </div>
    </main>
  );
}