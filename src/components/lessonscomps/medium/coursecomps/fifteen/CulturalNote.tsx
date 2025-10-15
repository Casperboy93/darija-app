"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-amber-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-800 mb-4">Technology in Morocco</h3>
        
        <div className="space-y-4 text-gray-700">
          <p>
            Morocco has rapidly embraced digital technology, with widespread smartphone adoption and growing internet connectivity. 
            Social media platforms like Facebook, Instagram, and WhatsApp are extremely popular among Moroccans of all ages.
          </p>
          
          <p>
            The Arabic language online often mixes Modern Standard Arabic with borrowed terms from French and English, 
            especially for technology-related vocabulary. Many tech terms are simply transliterated into Arabic script.
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
            <h4 className="font-medium text-amber-800 mb-2">Language Mixing Examples:</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Computer:</strong> Both "al-hasub" (الحاسوب) and "kumbiyutar" (كمبيوتر) are used</li>
              <li><strong>Internet:</strong> "Internet" (إنترنت) is more common than "shabakat al-'ankabut" (شبكة العنكبوت)</li>
              <li><strong>Email:</strong> "Email" (إيميل) is often used alongside "barid iliktroni" (بريد إلكتروني)</li>
            </ul>
          </div>
          
          <p>
            Understanding both formal Arabic tech terms and commonly used borrowed words will help you communicate 
            effectively about technology in Morocco.
          </p>
        </div>
      </div>
    </div>
  );
}