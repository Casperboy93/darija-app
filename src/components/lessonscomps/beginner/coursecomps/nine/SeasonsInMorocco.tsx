export default function SeasonsInMorocco() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Seasons in Morocco
      </h2>
      
      <p className="text-gray-700 mb-6">The four seasons and their characteristics in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ṣayf</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Season</span>
          </div>
          <p className="text-gray-600">Summer</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: sayf</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Hot and dry, especially inland</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shitā</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Season</span>
          </div>
          <p className="text-gray-600">Winter</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shi-ta</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Mild and rainy, cold in mountains</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Rabīʿ</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Season</span>
          </div>
          <p className="text-gray-600">Spring</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ra-bee</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Pleasant temperatures, flowers bloom</p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Kharīf</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Season</span>
          </div>
          <p className="text-gray-600">Autumn / Fall</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kha-reef</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Characteristics:</strong> Comfortable temperatures, harvest time</p>
          </div>
        </div>
      </div>
    </div>
  );
}