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
              <p className="font-semibold text-blue-700">Dr. Amina:</p>
              <p className="text-gray-700 mb-2">Marhaban Dr. Hasan. Kayf kanat nataʾij al-dirasa al-saririyya al-jadida?</p>
              <p className="text-sm text-gray-600 italic">Welcome Dr. Hassan. How were the results of the new clinical study?</p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Dr. Hasan:</p>
              <p className="text-gray-700 mb-2">Al-nataʾij kanat waʿida jiddan. Wajadna tahassunan kabiran fi al-marda alladhina taʿataw al-dawaʾ al-jadid.</p>
              <p className="text-sm text-gray-600 italic">The results were very promising. We found significant improvement in patients who received the new medication.</p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-700">Dr. Amina:</p>
              <p className="text-gray-700 mb-2">Hadha raʾiʿ! Ma hiya al-athar al-janibiyya allati lahaztumuha?</p>
              <p className="text-sm text-gray-600 italic">That's excellent! What side effects did you observe?</p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Dr. Hasan:</p>
              <p className="text-gray-700 mb-2">Al-athar al-janibiyya kanat qalila wa ghayr khatira. Faqat baʿd al-sudaʿ wa al-ghathayan.</p>
              <p className="text-sm text-gray-600 italic">The side effects were minimal and not serious. Just some headaches and nausea.</p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-700">Dr. Amina:</p>
              <p className="text-gray-700 mb-2">Mata sa-tuqaddimun al-talab li-l-muwafaqa al-tanzimiyya?</p>
              <p className="text-sm text-gray-600 italic">When will you submit the application for regulatory approval?</p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <p className="font-semibold text-green-700">Dr. Hasan:</p>
              <p className="text-gray-700 mb-2">Nakhtut li-taqdim al-talab fi nihayat hadha al-ʿam baʿd ikmal jamiʿ al-dirasat al-matluba.</p>
              <p className="text-sm text-gray-600 italic">We plan to submit the application at the end of this year after completing all required studies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}