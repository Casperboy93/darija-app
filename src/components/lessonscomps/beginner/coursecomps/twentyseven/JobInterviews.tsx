import React from 'react';

const JobInterviews = () => {
  return (
    <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
        Job Interviews
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Common Interview Questions</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Tell me about yourself</p>
              <p className="text-orange-600">حدثني على راسك</p>
              <p className="text-orange-600 italic">Haddathni 3la rasak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Why do you want this job?</p>
              <p className="text-orange-600">علاش بغيتي هاد الخدمة؟</p>
              <p className="text-orange-600 italic">3lash bghiti had al-khadma?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What are your strengths?</p>
              <p className="text-orange-600">أشنو هي نقاط القوة ديالك؟</p>
              <p className="text-orange-600 italic">Ashnu hiya nuqat al-quwwa dyalak?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What are your weaknesses?</p>
              <p className="text-orange-600">أشنو هي نقاط الضعف ديالك؟</p>
              <p className="text-orange-600 italic">Ashnu hiya nuqat ad-da3f dyalak?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Where do you see yourself in 5 years?</p>
              <p className="text-orange-600">فين كاتشوف راسك من هنا لخمس سنين؟</p>
              <p className="text-orange-600 italic">Fin katshuf rasak mn hna l khamsa snin?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Sample Answers</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I have experience in...</p>
              <p className="text-orange-600">عندي تجربة في...</p>
              <p className="text-orange-600 italic">3andi tajriba fi...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm passionate about...</p>
              <p className="text-orange-600">عندي شغف ب...</p>
              <p className="text-orange-600 italic">3andi shaghaf bi...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I work well in a team</p>
              <p className="text-orange-600">كانخدم مزيان مع الفريق</p>
              <p className="text-orange-600 italic">Kankhdam mzyan ma3 al-fariq</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm always learning new skills</p>
              <p className="text-orange-600">ديما كانتعلم مهارات جديدة</p>
              <p className="text-orange-600 italic">Dima kantat3allam maharat jadida</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I want to grow professionally</p>
              <p className="text-orange-600">بغيت نتطور مهنيا</p>
              <p className="text-orange-600 italic">Bghit ntatawwar mihaniyyan</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Questions to Ask the Interviewer</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-700 font-medium">What does a typical day look like?</p>
              <p className="text-orange-600">كيفاش كايبان نهار عادي؟</p>
              <p className="text-orange-600 italic">Kifash kayban nhar 3adi?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What are the growth opportunities?</p>
              <p className="text-orange-600">أشنو هي فرص التطور؟</p>
              <p className="text-orange-600 italic">Ashnu hiya furasas at-tatawwur?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What is the company culture like?</p>
              <p className="text-orange-600">كيفاش ثقافة الشركة؟</p>
              <p className="text-orange-600 italic">Kifash thaqafat ash-sharika?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">When can I expect to hear back?</p>
              <p className="text-orange-600">إمتى نقدر نتسنى الجواب؟</p>
              <p className="text-orange-600 italic">Imta nqdar ntsanna al-jawab?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-orange-100">
          <h3 className="font-semibold text-orange-700 mb-3">Professional Phrases</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Thank you for this opportunity</p>
              <p className="text-orange-600">شكرا على هاد الفرصة</p>
              <p className="text-orange-600 italic">Shukran 3la had al-fursa</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm very interested in this position</p>
              <p className="text-orange-600">أنا مهتم بزاف بهاد المنصب</p>
              <p className="text-orange-600 italic">Ana muhtamm bi zzaf bi had al-mansab</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I believe I'm a good fit</p>
              <p className="text-orange-600">كانظن راني مناسب</p>
              <p className="text-orange-600 italic">Kanzan rani munasib</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm available to start immediately</p>
              <p className="text-orange-600">أنا متاح نبدا دغيا</p>
              <p className="text-orange-600 italic">Ana mutah nbda dghya</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-md border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">Interview Dialogue Example</h3>
          <div className="space-y-3 text-sm">
            <div className="border-l-4 border-orange-300 pl-4">
              <p className="text-gray-700 font-medium">Interviewer:</p>
              <p className="text-orange-600">حدثني على تجربتك المهنية</p>
              <p className="text-orange-600 italic">Haddathni 3la tajribtak al-mihaniya</p>
              <p className="text-gray-600">Tell me about your professional experience</p>
            </div>
            
            <div className="border-l-4 border-blue-300 pl-4">
              <p className="text-gray-700 font-medium">Candidate:</p>
              <p className="text-blue-600">خدمت ثلاث سنين في شركة للتكنولوجيا، كنت مسؤول على تطوير التطبيقات</p>
              <p className="text-blue-600 italic">Khadamt thalath snin fi sharika li t-tiknulujiya, kunt mas'ul 3la tatwir at-tatbiqat</p>
              <p className="text-gray-600">I worked for three years at a technology company, I was responsible for application development</p>
            </div>
            
            <div className="border-l-4 border-orange-300 pl-4">
              <p className="text-gray-700 font-medium">Interviewer:</p>
              <p className="text-orange-600">علاش بغيتي تبدل الخدمة؟</p>
              <p className="text-orange-600 italic">3lash bghiti tbaddal al-khadma?</p>
              <p className="text-gray-600">Why do you want to change jobs?</p>
            </div>
            
            <div className="border-l-4 border-blue-300 pl-4">
              <p className="text-gray-700 font-medium">Candidate:</p>
              <p className="text-blue-600">بغيت تحديات جديدة وفرص أكثر للتطور المهني</p>
              <p className="text-blue-600 italic">Bghit tahadiyyat jadida wa furas akthar li t-tatawwur al-mihani</p>
              <p className="text-gray-600">I want new challenges and more opportunities for professional development</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-md border border-purple-200">
          <h3 className="font-semibold text-purple-800 mb-2">Interview Success Tips</h3>
          <ul className="text-purple-700 text-sm space-y-1">
            <li>• Research the company beforehand</li>
            <li>• Dress professionally and appropriately</li>
            <li>• Arrive 10-15 minutes early</li>
            <li>• Maintain good eye contact and posture</li>
            <li>• Prepare specific examples of your achievements</li>
            <li>• Ask thoughtful questions about the role</li>
            <li>• Follow up with a thank-you email</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobInterviews;