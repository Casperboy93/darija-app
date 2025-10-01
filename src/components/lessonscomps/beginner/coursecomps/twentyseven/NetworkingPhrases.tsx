import React from 'react';

const NetworkingPhrases = () => {
  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Networking Phrases
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Making Introductions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Nice to meet you</p>
              <p className="text-purple-600">متشرف بلقائك</p>
              <p className="text-purple-600 italic">Mtsharraf bi liqa'ik</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Let me introduce myself</p>
              <p className="text-purple-600">خليني نقدم راسي</p>
              <p className="text-purple-600 italic">Khallini nqaddim rasi</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I work in marketing</p>
              <p className="text-purple-600">كانخدم في التسويق</p>
              <p className="text-purple-600 italic">Kankhdam fi t-taswiq</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What do you do for work?</p>
              <p className="text-purple-600">أشنو كاتخدم؟</p>
              <p className="text-purple-600 italic">Ashnu katkhdam?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Which company do you work for?</p>
              <p className="text-purple-600">في أي شركة كاتخدم؟</p>
              <p className="text-purple-600 italic">Fi ayy sharika katkhdam?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Building Relationships</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">We should stay in touch</p>
              <p className="text-purple-600">خاصنا نبقاو على تواصل</p>
              <p className="text-purple-600 italic">Khassna nbqaw 3la tawasul</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Can I have your business card?</p>
              <p className="text-purple-600">واش نقدر ناخد كارت الأعمال ديالك؟</p>
              <p className="text-purple-600 italic">Wash nqdar nakhud kart al-a3mal dyalak?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Let's connect on LinkedIn</p>
              <p className="text-purple-600">يالله نتواصلو في لينكد إن</p>
              <p className="text-purple-600 italic">Yallah ntawasluw fi LinkedIn</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'd love to learn more about your work</p>
              <p className="text-purple-600">بغيت نتعرف أكثر على خدمتك</p>
              <p className="text-purple-600 italic">Bghit nt3arraf akthar 3la khadmatak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Maybe we can collaborate</p>
              <p className="text-purple-600">يمكن نتعاونو</p>
              <p className="text-purple-600 italic">Yumkin nta3awnuw</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Professional Interests</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">What brings you to this event?</p>
              <p className="text-purple-600">أشنو جابك لهاد الحدث؟</p>
              <p className="text-purple-600 italic">Ashnu jabak li had al-hadath?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm interested in your industry</p>
              <p className="text-purple-600">أنا مهتم بالقطاع ديالك</p>
              <p className="text-purple-600 italic">Ana muhtamm bi l-qita3 dyalak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What are the current trends?</p>
              <p className="text-purple-600">أشنو هي الاتجاهات الحالية؟</p>
              <p className="text-purple-600 italic">Ashnu hiya al-ittijahat al-haliya?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">How did you get started in this field?</p>
              <p className="text-purple-600">كيفاش بديتي في هاد المجال؟</p>
              <p className="text-purple-600 italic">Kifash bditi fi had al-majal?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What challenges do you face?</p>
              <p className="text-purple-600">أشنو التحديات اللي كاتواجه؟</p>
              <p className="text-purple-600 italic">Ashnu at-tahadiyyat lli katwajah?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Follow-up Communication</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">It was great meeting you</p>
              <p className="text-purple-600">كان من دواعي سروري لقاؤك</p>
              <p className="text-purple-600 italic">Kan min dawa3i sururi liqa'uk</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Thank you for your time</p>
              <p className="text-purple-600">شكرا على وقتك</p>
              <p className="text-purple-600 italic">Shukran 3la waqtak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'll send you that information</p>
              <p className="text-purple-600">غانصيفط ليك ديك المعلومات</p>
              <p className="text-purple-600 italic">Ghansifat lik dik al-ma3lumat</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Let's schedule a meeting</p>
              <p className="text-purple-600">يالله نبرمجو اجتماع</p>
              <p className="text-purple-600 italic">Yallah nbarrmju ijtima3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I look forward to working together</p>
              <p className="text-purple-600">كانتطلع للعمل معاك</p>
              <p className="text-purple-600 italic">Kantalla3 li l-3amal m3ak</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-md border border-purple-200">
          <h3 className="font-semibold text-purple-800 mb-3">Networking Event Scenario</h3>
          <div className="space-y-3 text-sm">
            <div className="border-l-4 border-purple-300 pl-4">
              <p className="text-gray-700 font-medium">Person A:</p>
              <p className="text-purple-600">السلام عليكم، أنا أحمد من شركة التكنولوجيا المتقدمة</p>
              <p className="text-purple-600 italic">As-salamu 3alaykum, ana Ahmad min sharikat at-tiknulujiya al-mutaqaddima</p>
              <p className="text-gray-600">Peace be upon you, I'm Ahmad from Advanced Technology Company</p>
            </div>
            
            <div className="border-l-4 border-blue-300 pl-4">
              <p className="text-gray-700 font-medium">Person B:</p>
              <p className="text-purple-600">وعليكم السلام، متشرفة بلقائك. أنا فاطمة، كانخدم في التسويق الرقمي</p>
              <p className="text-blue-600 italic">Wa 3alaykum as-salam, mtsharrafa bi liqa'ik. Ana Fatima, kankhdam fi t-taswiq ar-raqami</p>
              <p className="text-gray-600">And peace be upon you, pleased to meet you. I'm Fatima, I work in digital marketing</p>
            </div>
            
            <div className="border-l-4 border-purple-300 pl-4">
              <p className="text-gray-700 font-medium">Person A:</p>
              <p className="text-purple-600">التسويق الرقمي مجال مثير للاهتمام. أشنو التحديات اللي كاتواجهي؟</p>
              <p className="text-purple-600 italic">At-taswiq ar-raqami majal muthir li l-ihtimam. Ashnu at-tahadiyyat lli katwajhi?</p>
              <p className="text-gray-600">Digital marketing is an interesting field. What challenges do you face?</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-md border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-2">Networking Success Tips</h3>
          <ul className="text-indigo-700 text-sm space-y-1">
            <li>• Be genuine and show authentic interest in others</li>
            <li>• Listen more than you speak</li>
            <li>• Prepare a brief elevator pitch about yourself</li>
            <li>• Ask open-ended questions to encourage conversation</li>
            <li>• Follow up within 24-48 hours after meeting someone</li>
            <li>• Offer help or value before asking for something</li>
            <li>• Maintain professional relationships over time</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-md border border-green-200">
          <h3 className="font-semibold text-green-800 mb-2">Cultural Networking Notes</h3>
          <p className="text-green-700 text-sm">
            In Moroccan business culture, relationships are highly valued. Take time to build personal connections 
            before discussing business. Sharing tea or a meal is common and helps establish trust. 
            Remember to inquire about family and health, as these show genuine care for the person.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkingPhrases;