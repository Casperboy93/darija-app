export default function LessonOverview() {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Learn to describe weather conditions, seasons, and climate in Morocco. Essential vocabulary for daily conversations and travel planning.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
        <p className="font-medium text-blue-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master weather vocabulary and expressions</li>
          <li>Learn about Moroccan seasons and climate</li>
          <li>Understand temperature and weather descriptions</li>
          <li>Practice weather-related conversations</li>
        </ul>
      </div>
    </div>
  );
}