"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerTen() {
  return (
    <LessonLayout 
      title="Health and Body Parts" 
      level="beginner" 
      lessonNumber={10}
      previousLesson="beginner-nine"
      nextLesson=""
    >
      {/* Lesson Overview */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn essential health vocabulary, body parts, and how to communicate about medical needs. Important for emergencies and healthcare situations in Morocco.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-red-100">
          <p className="font-medium text-red-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master body parts vocabulary</li>
            <li>Learn health and illness expressions</li>
            <li>Understand medical emergency phrases</li>
            <li>Practice health-related conversations</li>
          </ul>
        </div>
      </div>
      
      {/* Body Parts Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Body Parts
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for different parts of the body.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Rās</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Head</span>
            </div>
            <p className="text-gray-600">Head</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ras</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kaywajaʿnī rāsī" (My head hurts)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">ʿAyn</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Face</span>
            </div>
            <p className="text-gray-600">Eye</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ayn</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAynī kaywajaʿnī" (My eye hurts)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Yad</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Limb</span>
            </div>
            <p className="text-gray-600">Hand / Arm</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: yad</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Ksart yadī" (I broke my arm)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Rijl</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Limb</span>
            </div>
            <p className="text-gray-600">Leg / Foot</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: rijl</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Rijlī kaywajaʿnī" (My leg hurts)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Baṭn</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
            </div>
            <p className="text-gray-600">Stomach / Belly</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: batn</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Baṭnī kaywajaʿnī" (My stomach hurts)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ḍahr</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
            </div>
            <p className="text-gray-600">Back</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: dahr</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Ḍahrī kaywajaʿnī" (My back hurts)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Health Conditions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Health Conditions
        </h2>
        
        <p className="text-gray-700 mb-6">Common health problems and how to describe them.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Marīḍ</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Condition</span>
            </div>
            <p className="text-gray-600">Sick / Ill</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma-reed</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Ana marīḍ" (I am sick)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ṣudāʿ</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Condition</span>
            </div>
            <p className="text-gray-600">Headache</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: su-da</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAndī ṣudāʿ" (I have a headache)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Sukhāna</p>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Condition</span>
            </div>
            <p className="text-gray-600">Fever</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: su-kha-na</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAndī sukhāna" (I have a fever)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Suʿāl</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Condition</span>
            </div>
            <p className="text-gray-600">Cough</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: su-al</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Kaysuʿlnī bzāf" (I'm coughing a lot)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Phrases */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Medical Phrases
        </h2>
        
        <p className="text-gray-700 mb-6">Essential phrases for medical situations and emergencies.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bghit ṭabīb</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Emergency</span>
            </div>
            <p className="text-gray-600">I need a doctor</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit ta-beeb</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Medical emergency</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Fin l-mustashfā?</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Emergency</span>
            </div>
            <p className="text-gray-600">Where is the hospital?</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: feen l-mus-tash-fa</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Finding medical help</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Kaywajaʿnī hna</p>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Symptom</span>
            </div>
            <p className="text-gray-600">It hurts here</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kay-wa-ja-nee hna</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Pointing to pain location</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bghit dawā</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Treatment</span>
            </div>
            <p className="text-gray-600">I need medicine</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit da-wa</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Context:</strong> Asking for medication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pharmacy Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Pharmacy Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Important words for visiting a pharmacy and getting medication.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ṣaydalīya</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Place</span>
            </div>
            <p className="text-gray-600">Pharmacy</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: say-da-lee-ya</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin ṣaydalīya?" (Where is the pharmacy?)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Dawā</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medicine</span>
            </div>
            <p className="text-gray-600">Medicine / Medication</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: da-wa</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Hāda d-dawā l-ṣudāʿ" (This is headache medicine)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Waṣfa</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Document</span>
            </div>
            <p className="text-gray-600">Prescription</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: was-fa</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAndī waṣfa mn ṭ-ṭabīb" (I have a prescription from the doctor)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Ḥabba</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Medicine</span>
            </div>
            <p className="text-gray-600">Pill / Tablet</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: hab-ba</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><strong>Example:</strong> "Khud ḥabba kull yūm" (Take one pill every day)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Dialogue */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Practice Dialogue
        </h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">At the Doctor's Office</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Patient</div>
              <div>
                <p className="font-medium">Salam ṭabīb, ana marīḍ</p>
                <p className="text-sm text-gray-600 italic">Hello doctor, I am sick</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Doctor</div>
              <div>
                <p className="font-medium">Ahlan, shnu kaywajaʿak?</p>
                <p className="text-sm text-gray-600 italic">Hello, what hurts you?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Patient</div>
              <div>
                <p className="font-medium">Kaywajaʿnī rāsī w ʿandī sukhāna</p>
                <p className="text-sm text-gray-600 italic">My head hurts and I have a fever</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Doctor</div>
              <div>
                <p className="font-medium">Mn imta w nta hākka?</p>
                <p className="text-sm text-gray-600 italic">Since when have you been like this?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Patient</div>
              <div>
                <p className="font-medium">Mn l-bāriḥ</p>
                <p className="text-sm text-gray-600 italic">Since yesterday</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Doctor</div>
              <div>
                <p className="font-medium">Ghādi nʿṭīk waṣfa l-dawā</p>
                <p className="text-sm text-gray-600 italic">I will give you a prescription for medicine</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Health Tips for Morocco
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Healthcare in Morocco</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Pharmacies are widely available and well-stocked</li>
                <li>• Many pharmacists speak French and some English</li>
                <li>• Private clinics offer faster service than public hospitals</li>
                <li>• Travel insurance is highly recommended</li>
                <li>• Drink bottled water to avoid stomach problems</li>
                <li>• Emergency number: 15 (SAMU) or 150 (Police)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="font-semibold text-red-800 mb-4">Medical Emergency Scenarios</h3>
          <p className="text-gray-700 mb-4">Practice describing health problems and asking for medical help in different situations.</p>
          
          <div className="bg-white p-4 rounded-md border border-red-100">
            <p className="font-medium text-red-800 mb-2">Scenarios to practice:</p>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Describe symptoms to a doctor</li>
              <li>Ask for directions to a hospital</li>
              <li>Buy medicine at a pharmacy</li>
              <li>Explain an injury or accident</li>
              <li>Call for emergency help</li>
              <li>Understand basic medical instructions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Congratulations Section */}
      <div className="mb-10">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-green-800 mb-2 text-xl">Congratulations!</h3>
              <p className="text-green-700 mb-3">You've completed all 10 beginner lessons in Moroccan Darija! You now have a solid foundation in:</p>
              <ul className="space-y-1 text-green-700 text-sm">
                <li>• Basic greetings and introductions</li>
                <li>• Numbers, time, and dates</li>
                <li>• Family and relationships</li>
                <li>• Colors and descriptions</li>
                <li>• Shopping and bargaining</li>
                <li>• Transportation and directions</li>
                <li>• Food and dining</li>
                <li>• Weather and seasons</li>
                <li>• Health and body parts</li>
              </ul>
              <p className="text-green-700 mt-3 font-medium">Keep practicing and consider moving to intermediate lessons to continue your Darija journey!</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}