export default function WeatherConditions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Weather Conditions
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for describing different weather conditions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shams</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Sunny</span>
          </div>
          <p className="text-gray-600">Sun / Sunny</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shams</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600"><strong>Example:</strong> "L-yum fih shams" (Today is sunny)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shta</p>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Rainy</span>
          </div>
          <p className="text-gray-600">Rain</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shta</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kayshti l-yum" (It's raining today)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Rih</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Windy</span>
          </div>
          <p className="text-gray-600">Wind</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: reeh</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kayna rih qawiyya" (There's strong wind)</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Sahab</p>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Cloudy</span>
          </div>
          <p className="text-gray-600">Clouds</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: sa-hab</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "S-sma fiha sahab" (The sky has clouds)</p>
          </div>
        </div>
      </div>
    </div>
  );
}