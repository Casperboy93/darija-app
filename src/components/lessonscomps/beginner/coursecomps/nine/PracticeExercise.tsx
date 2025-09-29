export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-4">Weather Forecast</h3>
        <p className="text-gray-700 mb-4">Practice describing the weather for different days and seasons. Plan activities based on weather conditions.</p>
        
        <div className="bg-white p-4 rounded-md border border-blue-100">
          <p className="font-medium text-blue-800 mb-2">Scenarios to practice:</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Describe today's weather to a friend</li>
            <li>Ask about tomorrow's weather forecast</li>
            <li>Discuss seasonal changes in Morocco</li>
            <li>Plan outdoor activities based on weather</li>
            <li>Compare weather in different Moroccan cities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}