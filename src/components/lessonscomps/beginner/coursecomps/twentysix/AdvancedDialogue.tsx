import React from 'react';

const AdvancedDialogue = () => {
  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Advanced Dialogue Practice
      </h2>
      
      <div className="space-y-6">
        <div className="bg-white p-5 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-4">Scenario 1: Job Interview Discussion</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-300 pl-4">
              <p className="text-gray-700 font-medium">Interviewer:</p>
              <p className="text-purple-600">حدثني على نفسك وعلى تجربتك المهنية</p>
              <p className="text-purple-600 italic">Haddathni 3la nafsak w 3la tajribtak l-mihaniya</p>
              <p className="text-gray-600 text-sm">Tell me about yourself and your professional experience</p>
            </div>
            
            <div className="border-l-4 border-blue-300 pl-4">
              <p className="text-gray-700 font-medium">Candidate:</p>
              <p className="text-blue-600">أنا خريج جامعي في مجال الإعلاميات، عندي خبرة ثلاث سنوات في التطوير</p>
              <p className="text-blue-600 italic">Ana kharij jami3i fi majal l-i3lamiyat, 3andi khibra thalath sanawat fi t-tatwir</p>
              <p className="text-gray-600 text-sm">I'm a university graduate in computer science, I have three years of experience in development</p>
            </div>
            
            <div className="border-l-4 border-purple-300 pl-4">
              <p className="text-gray-700 font-medium">Interviewer:</p>
              <p className="text-purple-600">أشنو هي نقاط القوة ديالك؟</p>
              <p className="text-purple-600 italic">Ashnu hiya nuqat l-quwwa dyalak?</p>
              <p className="text-gray-600 text-sm">What are your strengths?</p>
            </div>
            
            <div className="border-l-4 border-blue-300 pl-4">
              <p className="text-gray-700 font-medium">Candidate:</p>
              <p className="text-blue-600">كانشتغل مزيان في فريق، وعندي قدرة على حل المشاكل بسرعة</p>
              <p className="text-blue-600 italic">Kanshtaghal mzyan fi fariq, w 3andi qudra 3la hall l-mashakel bi sur3a</p>
              <p className="text-gray-600 text-sm">I work well in a team, and I have the ability to solve problems quickly</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-4">Scenario 2: Discussing Future Plans</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-300 pl-4">
              <p className="text-gray-700 font-medium">Friend A:</p>
              <p className="text-green-600">أشنو هي خططك للمستقبل؟</p>
              <p className="text-green-600 italic">Ashnu hiya khututak lil-mustaqbal?</p>
              <p className="text-gray-600 text-sm">What are your plans for the future?</p>
            </div>
            
            <div className="border-l-4 border-orange-300 pl-4">
              <p className="text-gray-700 font-medium">Friend B:</p>
              <p className="text-orange-600">كانفكر نكمل الدراسة ونخد الماستر، وبعدها نبدا شركة صغيرة</p>
              <p className="text-orange-600 italic">Kanfakkar nkammil d-dirasa w nakhud l-master, w ba3daha nbda sharika sghira</p>
              <p className="text-gray-600 text-sm">I'm thinking of continuing my studies and getting a master's degree, then starting a small company</p>
            </div>
            
            <div className="border-l-4 border-green-300 pl-4">
              <p className="text-gray-700 font-medium">Friend A:</p>
              <p className="text-orange-600">هادي فكرة زوينة! أشنو نوع الشركة اللي بغيتي تديريها؟</p>
              <p className="text-green-600 italic">Hadi fikra zwina! Ashnu naw3 sh-sharika lli bghiti tdiriha?</p>
              <p className="text-gray-600 text-sm">That's a great idea! What kind of company do you want to run?</p>
            </div>
            
            <div className="border-l-4 border-orange-300 pl-4">
              <p className="text-gray-700 font-medium">Friend B:</p>
              <p className="text-orange-600">بغيت نخدم في مجال التكنولوجيا، خاصة التطبيقات المحمولة</p>
              <p className="text-orange-600 italic">Bghit nkhdim fi majal t-tiknulujiya, khassa t-tatbiqat l-mahmula</p>
              <p className="text-gray-600 text-sm">I want to work in technology, especially mobile applications</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-4">Scenario 3: Resolving a Disagreement</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-300 pl-4">
              <p className="text-gray-700 font-medium">Person A:</p>
              <p className="text-red-600">ما كانتفقش معاك في هاد النقطة</p>
              <p className="text-red-600 italic">Ma kanttafaqsh m3ak fi had n-nuqta</p>
              <p className="text-gray-600 text-sm">I don't agree with you on this point</p>
            </div>
            
            <div className="border-l-4 border-teal-300 pl-4">
              <p className="text-gray-700 font-medium">Person B:</p>
              <p className="text-teal-600">فهمت وجهة نظرك، ولكن خليني نوضح ليك موقفي</p>
              <p className="text-teal-600 italic">Fahamt wijhat nazarak, walakin khallini nuwaddih lik mawqifi</p>
              <p className="text-gray-600 text-sm">I understand your point of view, but let me clarify my position</p>
            </div>
            
            <div className="border-l-4 border-red-300 pl-4">
              <p className="text-gray-700 font-medium">Person A:</p>
              <p className="text-red-600">أنا مستعد نسمع، ولكن عندي تحفظات</p>
              <p className="text-red-600 italic">Ana musta3idd nsma3, walakin 3andi tahaffuzat</p>
              <p className="text-gray-600 text-sm">I'm ready to listen, but I have reservations</p>
            </div>
            
            <div className="border-l-4 border-teal-300 pl-4">
              <p className="text-gray-700 font-medium">Person B:</p>
              <p className="text-teal-600">هاد شي طبيعي، يمكن نلقاو حل وسط يرضي الجميع</p>
              <p className="text-teal-600 italic">Had shi tabi3i, yumkin nlqaw hall wasat yurdi l-jami3</p>
              <p className="text-gray-600 text-sm">That's natural, maybe we can find a middle ground that satisfies everyone</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-md border border-purple-200">
          <h3 className="font-semibold text-purple-800 mb-2">Key Dialogue Techniques</h3>
          <ul className="text-purple-700 text-sm space-y-1">
            <li>• Use transitional phrases to connect ideas smoothly</li>
            <li>• Ask follow-up questions to show engagement</li>
            <li>• Acknowledge the other person's viewpoint before presenting yours</li>
            <li>• Use conditional statements to soften disagreements</li>
            <li>• Employ active listening phrases like "فهمت" (I understand)</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-md border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-2">Practice Exercise</h3>
          <p className="text-indigo-700 text-sm">
            Choose one of the scenarios above and practice with a partner. Focus on using the advanced vocabulary and maintaining natural conversation flow. Pay attention to tone, body language, and cultural appropriateness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDialogue;