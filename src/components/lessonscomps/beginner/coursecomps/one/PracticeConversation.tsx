import React from 'react';

export default function PracticeConversation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Practice Conversation
      </h2>
      
      <p className="text-gray-700 mb-6">Here's a typical conversation between two people meeting for the first time. Practice reading it aloud and try to memorize the flow.</p>
      
      <div className="bg-white border border-green-200 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-gray-900">Salam!</p>
                <p className="text-sm text-gray-600 mt-1">Hello!</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 justify-end">
            <div className="flex-1 text-right">
              <div className="bg-green-50 rounded-lg p-3 inline-block">
                <p className="font-medium text-gray-900">Salam! Labas?</p>
                <p className="text-sm text-gray-600 mt-1">Hello! How are you?</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-gray-900">Labas, hamdullah. Nta?</p>
                <p className="text-sm text-gray-600 mt-1">I'm fine, thank God. And you?</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 justify-end">
            <div className="flex-1 text-right">
              <div className="bg-green-50 rounded-lg p-3 inline-block">
                <p className="font-medium text-gray-900">Labas, hamdullah. Smiti Omar. Shnu smitk?</p>
                <p className="text-sm text-gray-600 mt-1">I'm fine, thank God. My name is Omar. What's your name?</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-gray-900">Smiti Fatima. Tsherfna!</p>
                <p className="text-sm text-gray-600 mt-1">My name is Fatima. Nice to meet you!</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 justify-end">
            <div className="flex-1 text-right">
              <div className="bg-green-50 rounded-lg p-3 inline-block">
                <p className="font-medium text-gray-900">Ahlan wa sahlan! Mnin nti?</p>
                <p className="text-sm text-gray-600 mt-1">Welcome! Where are you from?</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
            <div className="flex-1">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="font-medium text-gray-900">Ana mn Rabat. Nta?</p>
                <p className="text-sm text-gray-600 mt-1">I'm from Rabat. And you?</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 justify-end">
            <div className="flex-1 text-right">
              <div className="bg-green-50 rounded-lg p-3 inline-block">
                <p className="font-medium text-gray-900">Ana mn Casablanca. Marhba bik!</p>
                <p className="text-sm text-gray-600 mt-1">I'm from Casablanca. Welcome!</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
          </div>
        </div>
      </div>
      
      {/* Practice Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-3 text-yellow-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Practice Tips
        </h3>
        <ul className="space-y-2 text-yellow-800">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Read the conversation aloud multiple times to get comfortable with pronunciation</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Practice with a partner, taking turns being Person A and Person B</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Try substituting your own name and city in the conversation</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Focus on the natural flow - Moroccans often ask multiple questions in one breath</span>
          </li>
        </ul>
      </div>
    </div>
  );
}