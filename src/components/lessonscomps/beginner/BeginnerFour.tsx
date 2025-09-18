"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function BeginnerFour() {
  return (
    <LessonLayout 
      title="Family and Relations" 
      level="beginner" 
      lessonNumber={4}
      nextLesson="beginner-five"
    >
      {/* Lesson Overview */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Learn vocabulary related to family members and relationships in Darija, essential for talking about your family or understanding when Moroccans talk about theirs.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master immediate family member names</li>
            <li>Learn extended family vocabulary</li>
            <li>Understand relationship terms and expressions</li>
            <li>Practice describing family structures</li>
          </ul>
        </div>
      </div>
      
      {/* Immediate Family */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Immediate Family
        </h2>
        
        <p className="text-gray-700 mb-6">These are the core family members you'll refer to most often in daily conversation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bba</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Parent</span>
            </div>
            <p className="text-gray-600">Father</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bah</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Formal:</span> "Waldi" (My father)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Mma</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Parent</span>
            </div>
            <p className="text-gray-600">Mother</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: mah</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Formal:</span> "Walida" (My mother)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Khay</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sibling</span>
            </div>
            <p className="text-gray-600">Brother</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kh-eye</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Plural:</span> "Khawti" (My brothers)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Khti</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sibling</span>
            </div>
            <p className="text-gray-600">Sister</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: kh-tee</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Plural:</span> "Khawati" (My sisters)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Weld</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Child</span>
            </div>
            <p className="text-gray-600">Son</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: weld</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Weldi" (My son)</p>
            </div>
          </div>
          
          <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Bent</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Child</span>
            </div>
            <p className="text-gray-600">Daughter</p>
            <p className="text-sm italic mt-2 text-gray-500">Pronounced: bent</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Benti" (My daughter)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Extended Family */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Extended Family
        </h2>
        
        <p className="text-gray-700 mb-6">Important family members in Moroccan culture, where extended family plays a significant role.</p>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-lg mb-2">Jedd / Jedda</p>
                <p className="text-gray-600 mb-1">Grandfather / Grandmother</p>
                <p className="text-sm italic text-gray-500">Pronounced: jed / jed-da</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-2">3amm / 3amma</p>
                <p className="text-gray-600 mb-1">Uncle / Aunt (father's side)</p>
                <p className="text-sm italic text-gray-500">Pronounced: amm / am-ma</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-lg mb-2">Khal / Khala</p>
                <p className="text-gray-600 mb-1">Uncle / Aunt (mother's side)</p>
                <p className="text-sm italic text-gray-500">Pronounced: khal / kha-la</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-2">Weld 3amm / Bent 3amm</p>
                <p className="text-gray-600 mb-1">Male / Female cousin (father's side)</p>
                <p className="text-sm italic text-gray-500">Pronounced: weld amm / bent amm</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-lg mb-2">Weld khal / Bent khal</p>
                <p className="text-gray-600 mb-1">Male / Female cousin (mother's side)</p>
                <p className="text-sm italic text-gray-500">Pronounced: weld khal / bent khal</p>
              </div>
              <div>
                <p className="font-medium text-lg mb-2">7ma / 7mo</p>
                <p className="text-gray-600 mb-1">Father-in-law / Mother-in-law</p>
                <p className="text-sm italic text-gray-500">Pronounced: hma / hmo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Marital Status */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Marital Status & Relationships
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Relationship Terms:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Rajel / Mra</p>
              <p className="text-gray-700 text-sm">Husband / Wife</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">3azeb / 3azba</p>
              <p className="text-gray-700 text-sm">Single (male / female)</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Mtzawej / Mtzawja</p>
              <p className="text-gray-700 text-sm">Married (male / female)</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="font-medium">Mtalaq / Mtalaqa</p>
              <p className="text-gray-700 text-sm">Divorced (male / female)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Common Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Common Family Expressions
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Kifash l3a'ila? (How is the family?)</p>
            <p className="text-gray-600 mb-1">A common greeting asking about family</p>
            <p className="text-sm italic text-gray-500">Pronounced: kee-fash l-ah-ee-la</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">3andi khamsa f l3a'ila (I have five in the family)</p>
            <p className="text-gray-600 mb-1">Describing family size</p>
            <p className="text-sm italic text-gray-500">Pronounced: an-dee kham-sa f l-ah-ee-la</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Ana l kbir / Ana s-sghir (I'm the oldest / I'm the youngest)</p>
            <p className="text-gray-600 mb-1">Describing birth order</p>
            <p className="text-sm italic text-gray-500">Pronounced: ah-na l k-beer / ah-na s-sgheer</p>
          </div>
          
          <div className="bg-white border border-green-200 rounded-lg p-5">
            <p className="font-medium text-lg mb-2">Hada khay / Hadi khti (This is my brother / This is my sister)</p>
            <p className="text-gray-600 mb-1">Introducing family members</p>
            <p className="text-sm italic text-gray-500">Pronounced: ha-da kh-eye / ha-dee kh-tee</p>
          </div>
        </div>
      </div>
      
      {/* Practice Conversations */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Practice Conversations
        </h2>
        
        <div className="bg-white border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4 text-green-800">Family Discussions:</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">Meeting Someone New</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Person A:</span> "Wash 3andek khawt?" (Do you have siblings?)</p>
                <p><span className="font-medium">Person B:</span> "Ah, 3andi khay w khti" (Yes, I have a brother and sister)</p>
                <p><span className="font-medium">Person A:</span> "Nta l kbir?" (Are you the oldest?)</p>
                <p><span className="font-medium">Person B:</span> "Lla, ana l wast" (No, I'm the middle one)</p>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">Asking About Family</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">You:</span> "Kifash bba w mma?" (How are your father and mother?)</p>
                <p><span className="font-medium">Friend:</span> "Bikhir, shukran. W nta, kifash l3a'ila?" (They're well, thank you. And you, how's the family?)</p>
                <p><span className="font-medium">You:</span> "Kulshi bikhir, l7amdulillah" (Everyone's well, thank God)</p>
              </div>
            </div>
            
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-medium text-gray-800 mb-2">Introducing Family</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">You:</span> "Hada rajli, Ahmed" (This is my husband, Ahmed)</p>
                <p><span className="font-medium">Friend:</span> "Ahlan wa sahlan! Wash 3andkum wlad?" (Welcome! Do you have children?)</p>
                <p><span className="font-medium">You:</span> "Ah, 3andna weld w bent" (Yes, we have a son and daughter)</p>
                <p><span className="font-medium">Friend:</span> "Mabrook!" (Congratulations!)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Tips */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
          Cultural Tips
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Family is extremely important in Moroccan culture - always ask about someone's family when greeting</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">Extended family terms are used respectfully - "3amm" and "khala" can also be used for older non-relatives</p>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">When introducing family, it's common to mention their profession or achievements as a sign of pride</p>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}