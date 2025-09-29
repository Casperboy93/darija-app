export default function ClimateTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Moroccan Climate Tips
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Weather in Different Regions</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• <strong>Coast:</strong> Mild temperatures year-round, ocean breeze</li>
              <li>• <strong>Mountains:</strong> Cold winters, snow possible, cool summers</li>
              <li>• <strong>Desert:</strong> Very hot days, cold nights, minimal rainfall</li>
              <li>• <strong>Cities:</strong> Hot summers, mild winters, occasional rain</li>
              <li>• <strong>Best time to visit:</strong> Spring (March-May) and Fall (September-November)</li>
              <li>• <strong>Ramadan weather:</strong> Consider fasting hours during hot months</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}