import React from 'react';

const SocialEtiquette = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        Social Etiquette and Cultural Norms
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-yellow-100">
          <h3 className="font-semibold text-yellow-700 mb-3">Polite Expressions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">May I interrupt?</p>
              <p className="text-yellow-600">واش نقدر نقطع؟</p>
              <p className="text-yellow-600 italic">Wash nqdar nqta3?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I beg your pardon</p>
              <p className="text-yellow-600">سمح ليا</p>
              <p className="text-yellow-600 italic">Smah liya</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">With your permission</p>
              <p className="text-yellow-600">بإذنك</p>
              <p className="text-yellow-600 italic">Bi idnak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">If you don't mind</p>
              <p className="text-yellow-600">إلا ما عندكش مانع</p>
              <p className="text-yellow-600 italic">Ila ma 3andaksh mani3</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-yellow-100">
          <h3 className="font-semibold text-yellow-700 mb-3">Showing Respect</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I respect your opinion</p>
              <p className="text-yellow-600">كانحترم رأيك</p>
              <p className="text-yellow-600 italic">Kanhtarim rayak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">You're absolutely right</p>
              <p className="text-yellow-600">عندك الحق كامل</p>
              <p className="text-yellow-600 italic">3andak l-haqq kamil</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I appreciate your help</p>
              <p className="text-yellow-600">كانقدر المساعدة ديالك</p>
              <p className="text-yellow-600 italic">Kanqaddar l-musa3ada dyalak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Thank you for your time</p>
              <p className="text-yellow-600">شكرا على الوقت ديالك</p>
              <p className="text-yellow-600 italic">Shukran 3la l-waqt dyalak</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-yellow-100">
          <h3 className="font-semibold text-yellow-700 mb-3">Making Requests</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Could you please...?</p>
              <p className="text-yellow-600">واش تقدر عافاك...؟</p>
              <p className="text-yellow-600 italic">Wash tqdar 3afak...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Would it be possible to...?</p>
              <p className="text-yellow-600">واش ممكن...؟</p>
              <p className="text-yellow-600 italic">Wash mumkin...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I would be grateful if...</p>
              <p className="text-yellow-600">غانكون ممنون إلا...</p>
              <p className="text-yellow-600 italic">Ghankon mamnun ila...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">If it's not too much trouble</p>
              <p className="text-yellow-600">إلا ما كانش مشكل</p>
              <p className="text-yellow-600 italic">Ila ma kansh mushkil</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-yellow-100">
          <h3 className="font-semibold text-yellow-700 mb-3">Social Situations</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Nice to meet you</p>
              <p className="text-yellow-600">متشرف بلقائك</p>
              <p className="text-yellow-600 italic">Mtsharraf bi liqa'ik</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Please make yourself comfortable</p>
              <p className="text-yellow-600">اجعل راسك في دارك</p>
              <p className="text-yellow-600 italic">Aj3al rasak fi darak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">It was a pleasure talking to you</p>
              <p className="text-yellow-600">كان من دواعي سروري الحديث معاك</p>
              <p className="text-yellow-600 italic">Kan min dawa3i sururi l-hadith m3ak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Let's keep in touch</p>
              <p className="text-yellow-600">خلينا نبقاو على تواصل</p>
              <p className="text-yellow-600 italic">Khallina nbqaw 3la tawasul</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-md border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">Cultural Tips</h3>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Always greet elders first and use respectful titles</li>
            <li>• Accept hospitality graciously - refusing tea or food can be considered rude</li>
            <li>• Use both hands when giving or receiving something important</li>
            <li>• Maintain appropriate eye contact but avoid staring</li>
            <li>• Be patient with conversation pace - rushing is considered impolite</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Religious Considerations</h3>
          <p className="text-blue-700 text-sm">
            Be mindful of prayer times and religious observances. Phrases like "إن شاء الله" (Insha'Allah - God willing) and "الحمد لله" (Alhamdulillah - Praise be to God) are commonly used in daily conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialEtiquette;