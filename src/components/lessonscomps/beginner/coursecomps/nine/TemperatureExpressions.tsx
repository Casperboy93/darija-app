export default function TemperatureExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Temperature Expressions
      </h2>
      
      <p className="text-gray-700 mb-6">How to describe hot, cold, and comfortable temperatures.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Skhun</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Hot</span>
          </div>
          <p className="text-gray-600">Hot / Warm</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: s-khoon</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "L-jaww skhun bzaf" (The weather is very hot)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Barid</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Cold</span>
          </div>
          <p className="text-gray-600">Cold</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ba-rid</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "L-jaww barid f-shita" (The weather is cold in winter)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Mu3tadil</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Mild</span>
          </div>
          <p className="text-gray-600">Moderate / Mild</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: mu-ta-dil</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "L-jaww mu3tadil" (The weather is mild)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Harr bzaf</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Very Hot</span>
          </div>
          <p className="text-gray-600">Very hot</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: harr b-zaf</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Describing extreme heat</p>
          </div>
        </div>
      </div>
    </div>
  );
}