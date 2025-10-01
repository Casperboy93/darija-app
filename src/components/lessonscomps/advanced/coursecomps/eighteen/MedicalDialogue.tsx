"use client";

import React from 'react';

export default function MedicalDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Practice Dialogue: Medical Research Conference
      </h2>
      
      <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
        <div className="bg-white p-6 rounded-lg border border-indigo-200">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-700">Dr. Amīna:</p>
              <p className="text-gray-700 mb-2">Marḥaban Dr. Ḥasan. Kayf kānat natāʾij al-dirāsa al-sarīriyya al-jadīda?</p>
              <p className="text-sm text-gray-600 italic">Welcome Dr. Hassan. How were the results of the new clinical study?</p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Dr. Ḥasan:</p>
              <p className="text-gray-700 mb-2">Al-natāʾij kānat wāʿida jiddan. Wajadnā taḥassunan kabīran fī al-marḍā alladhīna taʿāṭaw al-dawāʾ al-jadīd.</p>
              <p className="text-sm text-gray-600 italic">The results were very promising. We found significant improvement in patients who received the new medication.</p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-700">Dr. Amīna:</p>
              <p className="text-gray-700 mb-2">Hādhā rāʾiʿ! Mā hiya al-āthār al-jānibiyya allatī lāḥaẓtumūhā?</p>
              <p className="text-sm text-gray-600 italic">That's excellent! What side effects did you observe?</p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Dr. Ḥasan:</p>
              <p className="text-gray-700 mb-2">Al-āthār al-jānibiyya kānat qalīla wa ghayr khāṭira. Faqaṭ baʿḍ al-ṣudāʿ wa al-ghathayān.</p>
              <p className="text-sm text-gray-600 italic">The side effects were minimal and not serious. Just some headaches and nausea.</p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-700">Dr. Amīna:</p>
              <p className="text-gray-700 mb-2">Matā sa-tuqaddimūn al-ṭalab li-l-muwāfaqa al-tanẓīmiyya?</p>
              <p className="text-sm text-gray-600 italic">When will you submit the application for regulatory approval?</p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Dr. Ḥasan:</p>
              <p className="text-gray-700 mb-2">Nakhṭuṭ li-taqdīm al-ṭalab fī nihāyat hādhā al-ʿām baʿd ikmāl jamīʿ al-dirāsāt al-maṭlūba.</p>
              <p className="text-sm text-gray-600 italic">We plan to submit the application at the end of this year after completing all required studies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}