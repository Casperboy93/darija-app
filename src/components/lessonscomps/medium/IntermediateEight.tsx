"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function IntermediateEight() {
  return (
    <LessonLayout 
      title="Health and Medical" 
      level="intermediate" 
      lessonNumber={8}
      previousLesson="intermediate-seven"
      nextLesson="intermediate-nine"
    >
      {/* Lesson Overview */}
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn essential health and medical vocabulary in Darija. Master conversations about symptoms, medical appointments, and health-related situations you might encounter in Morocco.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-red-100">
          <p className="font-medium text-red-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master health and medical vocabulary</li>
            <li>Learn to describe symptoms and pain</li>
            <li>Understand medical appointment conversations</li>
            <li>Practice pharmacy and emergency situations</li>
          </ul>
        </div>
      </div>
      
      {/* Body Parts and Health */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
          Body Parts and Health
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for describing body parts and health conditions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Rās</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
            </div>
            <p className="text-gray-600">Head</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: ras</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Rāsī kaywalja3nī" (My head hurts)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Qalb</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
            </div>
            <p className="text-gray-600">Heart</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: qalb</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Qalbī kayḍrab bezzāf" (My heart is beating fast)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Baṭn</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
            </div>
            <p className="text-gray-600">Stomach/Belly</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: batn</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Baṭnī kaywalja3nī men l makla" (My stomach hurts from the food)</p>
            </div>
          </div>

          <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Rigl</p>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
            </div>
            <p className="text-gray-600">Leg/Foot</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: rigl</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">Example: "Riglī mkassra" (My leg is broken)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Symptoms */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
          Common Symptoms
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">Pain and Discomfort</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Waja3:</span> Pain</p>
              <p><span className="font-semibold">Ṣudā3:</span> Headache</p>
              <p><span className="font-semibold">Ḥumma:</span> Fever</p>
              <p><span className="font-semibold">Su3la:</span> Cough</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">Digestive Issues</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ghathayān:</span> Nausea</p>
              <p><span className="font-semibold">Ishāl:</span> Diarrhea</p>
              <p><span className="font-semibold">Imsāk:</span> Constipation</p>
              <p><span className="font-semibold">Ḥurqa:</span> Heartburn</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-3">General Symptoms</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Ta3ab:</span> Fatigue</p>
              <p><span className="font-semibold">Duwār:</span> Dizziness</p>
              <p><span className="font-semibold">Ḥakka:</span> Itching</p>
              <p><span className="font-semibold">Waram:</span> Swelling</p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Professionals */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
          Medical Professionals
        </h2>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-blue-800 mb-4">Healthcare Providers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-blue-700">Ṭabīb 3āmm</p>
              <p className="text-gray-600">General doctor</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Ṭabīb asnān</p>
              <p className="text-gray-600">Dentist</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Ṭabīb 3uyūn</p>
              <p className="text-gray-600">Eye doctor</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Ṭabīb qalb</p>
              <p className="text-gray-600">Cardiologist</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Mumarriḍa</p>
              <p className="text-gray-600">Nurse</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Ṣaydalī</p>
              <p className="text-gray-600">Pharmacist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Visit Conversation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Doctor Visit Conversation
        </h2>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg text-green-800 mb-4">Sample Medical Consultation</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
              <p className="font-semibold text-green-700">Doctor: Āsh kaywalja3ak?</p>
              <p className="text-gray-600 italic">What's hurting you?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">Patient: 3andī ṣudā3 qawiyya u ḥumma</p>
              <p className="text-gray-600 italic">I have a strong headache and fever</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
              <p className="font-semibold text-green-700">Doctor: Men imta u hād l a3rāḍ?</p>
              <p className="text-gray-600 italic">Since when do you have these symptoms?</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-400">
              <p className="font-semibold text-blue-700">Patient: Men thalātha iyyām</p>
              <p className="text-gray-600 italic">Since three days</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-green-400">
              <p className="font-semibold text-green-700">Doctor: Ghādi n3ṭīk dawā u rāḥa</p>
              <p className="text-gray-600 italic">I'll give you medicine and rest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pharmacy Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Pharmacy Vocabulary
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-purple-800 mb-3">Medications</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Dawā:</span> Medicine</p>
              <p className="text-sm"><span className="font-semibold">Ḥabba:</span> Pill/Tablet</p>
              <p className="text-sm"><span className="font-semibold">Sharāb:</span> Syrup</p>
              <p className="text-sm"><span className="font-semibold">Marham:</span> Ointment</p>
              <p className="text-sm"><span className="font-semibold">Ḥuqna:</span> Injection</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
            <h3 className="font-bold text-lg text-purple-800 mb-3">Instructions</h3>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-semibold">Qbal l makla:</span> Before meals</p>
              <p className="text-sm"><span className="font-semibold">Ba3d l makla:</span> After meals</p>
              <p className="text-sm"><span className="font-semibold">Marra f nhar:</span> Once a day</p>
              <p className="text-sm"><span className="font-semibold">Thalāth marrāt:</span> Three times</p>
              <p className="text-sm"><span className="font-semibold">Kull 8 sā3āt:</span> Every 8 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Situations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-red-600 rounded-full mr-3"></div>
          Emergency Situations
        </h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-red-800 mb-4">Emergency Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-red-100">
              <p className="font-medium text-red-800 mb-2">Calling for Help:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "3āwnnī 3afākum!" (Help me please!)</li>
                <li>• "Ṭlbu l is3āf!" (Call for help!)</li>
                <li>• "Fīn l mustashfā?" (Where is the hospital?)</li>
                <li>• "Bghīt ṭabīb!" (I need a doctor!)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md border border-red-100">
              <p className="font-medium text-red-800 mb-2">Describing Urgency:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "Ḥāla ṭāriʾa!" (Emergency!)</li>
                <li>• "Kaywalja3nī bezzāf!" (It hurts a lot!)</li>
                <li>• "Ma qadartsh nmshī!" (I can't walk!)</li>
                <li>• "Ghādi nghma 3layya!" (I'm going to faint!)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Health Insurance and Appointments */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
          Appointments and Insurance
        </h2>
        
        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-indigo-800 mb-4">Making Appointments</h3>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-md">
              <p className="font-semibold text-indigo-700">Bghīt nākhud maw3id ma3 ṭabīb</p>
              <p className="text-gray-600 text-sm">I want to make an appointment with a doctor</p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <p className="font-semibold text-indigo-700">Āsh awwal maw3id fāḍī?</p>
              <p className="text-gray-600 text-sm">What's the first available appointment?</p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <p className="font-semibold text-indigo-700">3andī ta'mīn ṣiḥḥī</p>
              <p className="text-gray-600 text-sm">I have health insurance</p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <p className="font-semibold text-indigo-700">Bḥāl shḥāl l kashf?</p>
              <p className="text-gray-600 text-sm">How much is the consultation?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
          Practice Exercise
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg text-yellow-800 mb-4">Medical Role Play</h3>
          <p className="text-gray-700 mb-4">Practice these medical scenarios:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-yellow-100">
              <p className="font-medium text-yellow-800 mb-2">Scenario 1: Pharmacy Visit</p>
              <p className="text-sm text-gray-700">You have a prescription and need to buy medicine. Ask about dosage and side effects.</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-yellow-100">
              <p className="font-medium text-yellow-800 mb-2">Scenario 2: Doctor's Appointment</p>
              <p className="text-sm text-gray-700">You have stomach pain for several days. Describe your symptoms and answer the doctor's questions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Health Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
          Cultural Health Tips
        </h2>
        
        <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-teal-800 mb-2">Healthcare System</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Public hospitals are free but crowded</li>
                <li>• Private clinics are faster but expensive</li>
                <li>• Pharmacies are widely available</li>
                <li>• Many doctors speak French and Arabic</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-teal-800 mb-2">Traditional Medicine</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Herbal remedies are common</li>
                <li>• "3aṭṭār" (herbalist) shops are popular</li>
                <li>• Traditional and modern medicine coexist</li>
                <li>• Always consult qualified doctors for serious issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Health Mastery Achieved!
        </h2>
        <p className="text-lg">You've mastered essential health and medical vocabulary in Darija! You can now confidently communicate about health issues, visit doctors, and handle medical situations in Morocco. Your wellbeing is in good hands!</p>
      </div>
    </LessonLayout>
  );
}