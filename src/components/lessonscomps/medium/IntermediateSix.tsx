"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateSix() {
  return (
    <LessonLayout 
      title="Travel and Directions" 
      level="intermediate" 
      lessonNumber={6}
      previousLesson="intermediate-five"
      nextLesson="intermediate-seven"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master advanced travel vocabulary and navigation skills for exploring Morocco. Learn to discuss complex travel plans, transportation options, and detailed directions in Darija.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master advanced travel and transportation vocabulary</li>
            <li>Learn to give and receive detailed directions</li>
            <li>Understand travel planning conversations</li>
            <li>Practice booking accommodations and transport</li>
          </ul>
        </div>
      </div>
      
      {/* Advanced Transportation Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Advanced Transportation
        </h2>
        
        <p className="text-gray-700 mb-6">Comprehensive vocabulary for various modes of transport and travel situations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Qitār</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
            </div>
            <p className="text-gray-600">Train</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: qi-tar</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Qitār ghadi yousel f sā3a thmanya" (The train will arrive at 8 o'clock)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ṭayyāra</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
            </div>
            <p className="text-gray-600">Airplane</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: tay-ya-ra</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Ṭayyāra ghadi tṭīr men Casablanca" (The plane will fly from Casablanca)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kār krā</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
            </div>
            <p className="text-gray-600">Rental car</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kar kra</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Bghīt nkrī kār li usbū3" (I want to rent a car for a week)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bābūr</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Transport</span>
            </div>
            <p className="text-gray-600">Ship/Boat</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ba-bur</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Bābūr ghadi yousel l Tanger" (The ship will arrive in Tangier)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Directions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Giving Detailed Directions
        </h2>
        
        <p className="text-gray-700 mb-6">Learn to give and understand complex directions with landmarks and specific instructions.</p>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Direction Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-blue-700">Sīr nīshan ḥtta tousel l...</p>
              <p className="text-gray-600">Go straight until you reach...</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Dūr 3la līmīn/līsār</p>
              <p className="text-gray-600">Turn right/left</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Ghādi tlqā... 3la yeddāk</p>
              <p className="text-gray-600">You'll find... on your right</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Qdām l masjid mubāshara</p>
              <p className="text-gray-600">Right in front of the mosque</p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Planning Conversations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Travel Planning
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-purple-800 mb-4">Sample Conversation: Planning a Trip</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
              <p className="font-semibold text-purple-700">A: Fīn ghādi tmshī f l3uṭla?</p>
              <p className="text-gray-600 italic">Where are you going for vacation?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Ghādi nmshī l Marrakech, u mnīn l Essaouira</p>
              <p className="text-gray-600 italic">I'm going to Marrakech, and then to Essaouira</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-400">
              <p className="font-semibold text-purple-700">A: Kīfāsh ghādi tmshī? B ṭayyāra wlla b tren?</p>
              <p className="text-gray-600 italic">How are you going? By plane or by train?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">B: Ghādi nākhud tren l Marrakech, u men tmma kār krā</p>
              <p className="text-gray-600 italic">I'll take the train to Marrakech, and from there a rental car</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking and Reservations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Booking and Reservations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-orange-800 mb-3">Hotel Booking</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Bghīt nḥjez bīt:</span> I want to book a room</p>
              <p className="text-sm"><span className="font-semibold">Li kam līla?:</span> For how many nights?</p>
              <p className="text-sm"><span className="font-semibold">Wāsh 3andkum bīt fāḍī?:</span> Do you have an available room?</p>
              <p className="text-sm"><span className="font-semibold">Bḥāl shḥāl f līla?:</span> How much per night?</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-orange-800 mb-3">Transport Booking</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Bghīt tīkīt l Fes:</span> I want a ticket to Fes</p>
              <p className="text-sm"><span className="font-semibold">Āsh waqt l qitār?:</span> What time is the train?</p>
              <p className="text-sm"><span className="font-semibold">Wāsh kāyn takhfīḍ?:</span> Is there a discount?</p>
              <p className="text-sm"><span className="font-semibold">Fīn l maḥaṭṭa?:</span> Where is the station?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-4">Role Play: Travel Agent</h3>
          <p className="text-gray-700 mb-4">Practice this scenario with a partner or by yourself:</p>
          <div className="bg-white p-4 rounded-md border border-red-100">
            <p className="font-medium text-red-800 mb-2">Scenario:</p>
            <p className="text-gray-700 mb-4">You're at a travel agency in Morocco planning a trip from Rabat to Chefchaouen. You need to:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Ask about transportation options</li>
              <li>Inquire about travel time and costs</li>
              <li>Book accommodation in Chefchaouen</li>
              <li>Get directions from the bus station to your hotel</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cultural Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Cultural Travel Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">Transportation Etiquette</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Always greet the driver when entering a taxi</li>
                <li>• Negotiate taxi fares before starting the journey</li>
                <li>• In shared taxis, wait for others to fill the car</li>
                <li>• Be patient with delays - they're common</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">Navigation Tips</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use landmarks rather than street names</li>
                <li>• Ask multiple people for directions</li>
                <li>• Learn key neighborhood names</li>
                <li>• Download offline maps as backup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Excellent Work!
        </h2>
        <p className="text-lg">You've mastered advanced travel and navigation vocabulary in Darija! You can now confidently plan trips, book transportation, and navigate Morocco like a local. Keep practicing these phrases during your travels!</p>
      </div>
    </LessonLayout>
  );
}