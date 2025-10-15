export default function WeatherQuestions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Weather Questions
      </h2>
      
      <p className="text-gray-700 mb-6">Common questions and responses about weather.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Kifash l-jaww?</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">How's the weather?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kee-fash l-jaww</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Response:</strong> "L-jaww zīn" (The weather is nice)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ghadi yshti?</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">Is it going to rain?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: gha-di y-shti</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Response:</strong> "Iyeh, ghādi yshti" (Yes, it's going to rain)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Skhun wlla barid?</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">Hot or cold?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: s-khoon wlla ba-rid</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Asking about temperature</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shnu l-hal dyal l-jaww?</p>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">What's the weather condition?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shnu l-hal dyal l-jaww</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> More formal weather inquiry</p>
          </div>
        </div>
      </div>
    </div>
  );
}