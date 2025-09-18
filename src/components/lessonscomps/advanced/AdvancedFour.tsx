"use client";

import React from 'react';
import Link from 'next/link';

export default function AdvancedFour() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/lessons" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Lessons
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Advanced Lesson 4: Literary Arabic Influence</h1>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Lesson Overview</h2>
        <p>Explore the relationship between Modern Standard Arabic (Fusha) and Darija, and learn how to elevate your speech with literary Arabic elements for formal contexts.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Code-Switching Between Darija and Fusha</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
          <h3 className="font-bold text-lg mb-3">When to Use Fusha Elements</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Formal speeches and presentations</li>
            <li>Academic discussions</li>
            <li>News broadcasting</li>
            <li>Religious contexts</li>
            <li>Legal and governmental settings</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Formal Vocabulary</h3>
            <p className="mb-2">• Use "ana a3taqid" instead of "ana kan-denn" (I think)</p>
            <p className="mb-2">• Use "min fadlik" instead of "afak" (please)</p>
            <p>• Use "shukran jazilan" instead of "shukran bzzaf" (thank you very much)</p>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Grammatical Shifts</h3>
            <p className="mb-2">• Use full verb conjugations instead of shortened Darija forms</p>
            <p className="mb-2">• Include case endings in formal speech</p>
            <p>• Use proper dual forms for pairs of objects</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vocabulary Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">English</th>
                <th className="py-2 px-4 border-b">Darija (Everyday)</th>
                <th className="py-2 px-4 border-b">Fusha (Formal)</th>
                <th className="py-2 px-4 border-b">Context for Fusha Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Problem</td>
                <td className="py-2 px-4 border-b">Mushkil</td>
                <td className="py-2 px-4 border-b">Mushkilah</td>
                <td className="py-2 px-4 border-b">Academic discussions</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Government</td>
                <td className="py-2 px-4 border-b">L-hukuma</td>
                <td className="py-2 px-4 border-b">Al-hukumah</td>
                <td className="py-2 px-4 border-b">News, political discourse</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">University</td>
                <td className="py-2 px-4 border-b">Ljami3a</td>
                <td className="py-2 px-4 border-b">Al-jami3ah</td>
                <td className="py-2 px-4 border-b">Educational settings</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Important</td>
                <td className="py-2 px-4 border-b">Muhim</td>
                <td className="py-2 px-4 border-b">Muhimm</td>
                <td className="py-2 px-4 border-b">Business meetings</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Development</td>
                <td className="py-2 px-4 border-b">Tatawur</td>
                <td className="py-2 px-4 border-b">At-tanmiyah</td>
                <td className="py-2 px-4 border-b">Economic discussions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pronunciation Shifts</h2>
        
        <div className="bg-white shadow-sm rounded-lg p-5 mb-6">
          <h3 className="font-bold text-lg mb-3">Key Pronunciation Differences</h3>
          <div className="space-y-3">
            <p>• <span className="font-semibold">Qaf (ق):</span> In Darija often pronounced as "g" or glottal stop, but in formal contexts returns to the classical "q" sound</p>
            <p>• <span className="font-semibold">Tha (ث):</span> In Darija often simplified to "t", but in formal speech pronounced as "th" (as in "think")</p>
            <p>• <span className="font-semibold">Dhal (ذ):</span> In Darija often simplified to "d", but in formal speech pronounced as "th" (as in "this")</p>
            <p>• <span className="font-semibold">Final vowels:</span> Case endings (damma, fatha, kasra) are pronounced in formal Arabic but typically dropped in Darija</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Formal Expressions for Professional Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-bold">Meeting Introduction</p>
            <p className="text-gray-600 mt-1">Darija: <span className="italic">Merhba bikom f had lijtima3</span></p>
            <p className="text-gray-600">Fusha: <span className="italic">Ahlan bikum fi hadha al-ijtima3</span></p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold">Presenting an Idea</p>
            <p className="text-gray-600 mt-1">Darija: <span className="italic">Bghit nqtareh 3likom wahd lfekra</span></p>
            <p className="text-gray-600">Fusha: <span className="italic">Urid an aqtariha 3alaykum fikrah</span></p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold">Asking for Opinions</p>
            <p className="text-gray-600 mt-1">Darija: <span className="italic">Shnu huwa raykom?</span></p>
            <p className="text-gray-600">Fusha: <span className="italic">Ma huwa ra'yukum?</span></p>
          </div>
          
          <div className="border rounded-lg p-4">
            <p className="font-bold">Concluding a Meeting</p>
            <p className="text-gray-600 mt-1">Darija: <span className="italic">Shukran 3la lhodor dyalkom</span></p>
            <p className="text-gray-600">Fusha: <span className="italic">Shukran 3ala hudurikum</span></p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Practice Conversation</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">TV Host:</p>
            <p className="pl-4">Ahlan wa sahlan bikum fi barnamajina al-yawm. (Welcome to our program today.)</p>
          </div>
          <div>
            <p className="font-medium">Guest:</p>
            <p className="pl-4">Shukran jazilan li-da3watikum li. (Thank you very much for your invitation.)</p>
          </div>
          <div>
            <p className="font-medium">TV Host:</p>
            <p className="pl-4">Hal yumkinuka an tuhaddithana 3an mashru3ika al-jadid? (Can you tell us about your new project?)</p>
          </div>
          <div>
            <p className="font-medium">Guest:</p>
            <p className="pl-4">Na3am, bi-kuli surur. Hadha al-mashru3 yumaththilu khutwa muhimma fi majal at-tanmiya al-mustadama... [switches to less formal] u ghadi nshufuh kaytbedel l-waq3 dyal nas f l-maghrib. (Yes, with pleasure. This project represents an important step in sustainable development... and we'll see it changing people's reality in Morocco.)</p>
          </div>
          <div>
            <p className="font-medium">TV Host:</p>
            <p className="pl-4">Hadha ra'i3! Wa mata sa-yabda' tanfidh hadha al-mashru3? (That's wonderful! And when will the implementation of this project begin?)</p>
          </div>
          <div>
            <p className="font-medium">Guest:</p>
            <p className="pl-4">Sa-yabda' al-3amal fi ash-shahr al-muqbil, insha'allah. (Work will begin next month, God willing.)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Link href="/lessons/advanced-three" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Lesson
        </Link>
        <Link href="/lessons/advanced-five" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center">
          Next Lesson: Media & Technology
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}