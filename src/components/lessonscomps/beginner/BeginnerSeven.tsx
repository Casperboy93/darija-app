"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerSeven() {
  return (
    <LessonLayout 
      title="Transportation and Directions" 
      level="beginner" 
      lessonNumber={7}
      previousLesson="beginner-six"
      nextLesson="beginner-eight"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn how to navigate Moroccan cities, ask for directions, and use various forms of transportation. Essential vocabulary for getting around Morocco confidently.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master transportation vocabulary and phrases</li>
            <li>Learn how to ask for and give directions</li>
            <li>Understand location and movement expressions</li>
            <li>Practice navigation conversations</li>
          </ul>
        </div>
      </div>
      
      {/* Transportation Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Transportation Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Essential words for different modes of transport in Morocco.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Taksī</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vehicle</span>
            </div>
            <p className="text-gray-600">Taxi</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: tak-see</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Bghit taksī" (I want a taxi)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ṭūbīs</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vehicle</span>
            </div>
            <p className="text-gray-600">Bus</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: too-bees</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin ṭūbīs?" (Where is the bus?)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Qiṭār</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Vehicle</span>
            </div>
            <p className="text-gray-600">Train</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: qi-tar</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Qiṭār l-Rabat" (Train to Rabat)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Maḥaṭṭa</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Place</span>
            </div>
            <p className="text-gray-600">Station</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma-hat-ta</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Maḥaṭṭat l-qiṭār" (Train station)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Direction Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Asking for Directions
        </h2>
        
        <p className="text-gray-700 mb-6">Essential phrases for asking and understanding directions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Fin kayn...?</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">Where is...?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: feen kayn</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin kayn l-maḥaṭṭa?" (Where is the station?)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kīfāsh nmshī l...?</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">How do I go to...?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kee-fash n-mshee l</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kīfāsh nmshī l-Jamaa el-Fna?" (How do I go to Jamaa el-Fna?)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Qrīb mn hna?</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
            </div>
            <p className="text-gray-600">Is it close to here?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: qreeb mn hna</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Ask if a place is nearby</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bʿīd shwīya</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Distance</span>
            </div>
            <p className="text-gray-600">A bit far</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: b-eed shwee-ya</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Describing distance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Direction Words */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Direction Words
        </h2>
        
        <p className="text-gray-700 mb-6">Basic directional vocabulary for navigation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Līmn</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Direction</span>
            </div>
            <p className="text-gray-600">Right</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: lee-mn</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Dūr līmn" (Turn right)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Līsr</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Direction</span>
            </div>
            <p className="text-gray-600">Left</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: lee-sr</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Dūr līsr" (Turn left)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Nīshan</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Direction</span>
            </div>
            <p className="text-gray-600">Straight</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: nee-shan</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Sīr nīshan" (Go straight)</p>
            </div>
          </div>

          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Wqf hna</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Command</span>
            </div>
            <p className="text-gray-600">Stop here</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: wqf hna</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Tell taxi driver to stop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practice Dialogue
        </h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Asking for Directions to the Train Station</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Tourist</div>
              <div>
                <p className="font-medium">Salam, fin kayn maḥaṭṭat l-qiṭār?</p>
                <p className="text-sm text-gray-600 italic">Hello, where is the train station?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Local</div>
              <div>
                <p className="font-medium">Ahlan! Maḥaṭṭat l-qiṭār bʿīda shwīya</p>
                <p className="text-sm text-gray-600 italic">Hello! The train station is a bit far</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Tourist</div>
              <div>
                <p className="font-medium">Kīfāsh nmshī l-tmma?</p>
                <p className="text-sm text-gray-600 italic">How do I go there?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Local</div>
              <div>
                <p className="font-medium">Khud taksī aw ṭūbīs. Sīr nīshan, thumma dūr līmn</p>
                <p className="text-sm text-gray-600 italic">Take a taxi or bus. Go straight, then turn right</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Tourist</div>
              <div>
                <p className="font-medium">Shukran bzaf!</p>
                <p className="text-sm text-gray-600 italic">Thank you very much!</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Local</div>
              <div>
                <p className="font-medium">Bla jmīl, riḥla saʿīda!</p>
                <p className="text-sm text-gray-600 italic">You're welcome, have a good trip!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transportation Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Transportation Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Getting Around Morocco</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Petit taxis (small taxis) are for short distances within cities</li>
                <li>• Grand taxis are for longer distances between cities</li>
                <li>• Always agree on the fare before getting in a taxi</li>
                <li>• Buses are cheaper but can be crowded</li>
                <li>• Trains connect major cities and are comfortable</li>
                <li>• Download offline maps before traveling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-800 mb-4">Navigation Challenge</h3>
          <p className="text-gray-700 mb-4">You're lost in Marrakech and need to get to Jamaa el-Fna square. Practice asking a local for help and understanding their directions.</p>
          
          <div className="bg-white p-4 rounded-md border border-green-100">
            <p className="font-medium text-green-800 mb-2">Key phrases to practice:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Fin kayn Jamaa el-Fna? (Where is Jamaa el-Fna?)</li>
              <li>Qrīb mn hna? (Is it close to here?)</li>
              <li>Kīfāsh nmshī l-tmma? (How do I go there?)</li>
              <li>Bghit taksī (I want a taxi)</li>
              <li>Wqf hna, afak (Stop here, please)</li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}