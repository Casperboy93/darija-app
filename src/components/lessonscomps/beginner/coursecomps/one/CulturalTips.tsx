import React from 'react';

export default function CulturalTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Cultural Tips
      </h2>
      
      <p className="text-gray-700 mb-6">Understanding the cultural context behind greetings and introductions will help you navigate social situations more effectively in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-purple-800">Take Your Time</h3>
          </div>
          <p className="text-gray-700">Greetings in Morocco are not rushed. It's common to spend several minutes asking about health, family, and well-being before getting to business. This shows respect and builds relationships.</p>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-purple-800">Physical Greetings</h3>
          </div>
          <p className="text-gray-700">Handshakes are common between people of the same gender. Close friends may kiss on both cheeks. Be mindful of religious and cultural boundaries, especially between men and women.</p>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-purple-800">Religious Expressions</h3>
          </div>
          <p className="text-gray-700">"Hamdullah" (thank God) is frequently used in responses. Even non-religious people use it as it's deeply embedded in the culture. It shows gratitude and humility.</p>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-purple-800">Repetition is Normal</h3>
          </div>
          <p className="text-gray-700">Don't be surprised if the same questions are asked multiple times during a conversation. This repetition shows continued interest and care for the other person's well-being.</p>
        </div>
      </div>
      
      {/* Do's and Don'ts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-medium mb-4 text-gray-800">Do's and Don'ts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-green-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Do's
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Always respond to "Labas?" even if asked multiple times</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ask about family and health - it shows you care</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Use "hamdullah" when expressing that things are going well</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Be patient with longer greeting exchanges</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Don'ts
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Don't rush through greetings to get to your point</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Don't ignore gender-appropriate greeting customs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Don't be surprised by personal questions - they show interest</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Don't forget to ask the same questions back</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}