"use client";

import React from 'react';

const AdvancedExercises: React.FC = () => {
  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        💪 Advanced Exercises
      </h2>
      
      <div className="bg-white p-4 rounded-md border border-purple-100 mb-6">
        <p className="text-gray-700">
          These advanced exercises will challenge your Darija skills and prepare you 
          for real-world situations. Complete these activities to demonstrate mastery 
          of the language and build confidence for complex interactions.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border border-purple-100 mb-8">
        <h3 className="text-xl font-semibold mb-6 text-purple-800 flex items-center">
          <span className="text-2xl mr-2">🎭</span>
          Role-Play Scenarios
        </h3>
        
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="text-lg font-semibold mb-4 text-purple-800">Scenario 1: Job Interview</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-3 rounded-md border border-purple-100">
                  <p className="font-medium text-purple-700">Setting:</p>
                  <p className="text-sm text-gray-600">You're interviewing for a position at a Moroccan company</p>
                </div>
                <div className="bg-white p-3 rounded-md border border-purple-100">
                  <p className="font-medium text-purple-700">Your Role:</p>
                  <p className="text-sm text-gray-600">Job candidate</p>
                </div>
                <div className="bg-white p-3 rounded-md border border-purple-100">
                  <p className="font-medium text-purple-700">Partner's Role:</p>
                  <p className="text-sm text-gray-600">Hiring manager</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-md border border-purple-100">
                <p className="font-medium text-purple-700 mb-3">Key phrases to use:</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">عندي تجربة فـ...</span> (3ndi tajriba f...) - I have experience in...</li>
                  <li><span className="font-medium">كانقدر نخدم...</span> (kanqder nkhedem...) - I can work...</li>
                  <li><span className="font-medium">هدفي هو...</span> (hadafi huwa...) - My goal is...</li>
                  <li><span className="font-medium">كانتعلم بزربة</span> (kant3allem bzerba) - I learn quickly</li>
                </ul>
                
                <div className="mt-4 p-3 bg-purple-50 rounded-md">
                  <p className="font-medium text-purple-700 mb-2">Sample Exchange:</p>
                  <div className="space-y-2">
                    <div className="bg-blue-100 p-2 rounded text-sm">
                      <span className="font-medium text-blue-800">Interviewer:</span> قول ليا على راسك شوية
                    </div>
                    <div className="bg-green-100 p-2 rounded text-sm">
                      <span className="font-medium text-green-800">You:</span> سميتي... عندي تجربة فالتسويق، وكانحب نخدم مع فريق ديناميكي
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h4 className="text-xl font-semibold text-purple-700 mb-4">Scenario 2: Medical Emergency</h4>
            <div className="space-y-4">
              <p><strong className="text-gray-700">Setting:</strong> You need to explain a health problem to a doctor</p>
              <p><strong className="text-gray-700">Your Role:</strong> Patient</p>
              <p><strong className="text-gray-700">Partner's Role:</strong> Doctor</p>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-purple-800 mb-3">Key phrases to use:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>كايوجعني... (kayawja3ni...)</strong> - It hurts me...</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>عندي حرارة (3ndi 7rara)</strong> - I have a fever</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>ماكانقدرش ناكل (makanqdersh nakul)</strong> - I can't eat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>من امتى وأنا حاس بـ... (mn imta w ana 7ass b...)</strong> - Since when I feel...</span>
                  </li>
                </ul>
                
                <div className="mt-4 bg-white p-3 rounded border">
                  <p className="font-semibold text-purple-800 mb-2">Sample Exchange:</p>
                  <div className="space-y-2">
                    <div className="bg-gray-100 p-2 rounded">
                      <strong className="text-blue-600">Doctor:</strong> أش كايوجعك؟
                    </div>
                    <div className="bg-purple-100 p-2 rounded">
                      <strong className="text-purple-600">You:</strong> كايوجعني راسي بزاف، ومن البارح وأنا حاس بالدوخة
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h4 className="text-xl font-semibold text-purple-700 mb-4">Scenario 3: Business Negotiation</h4>
            <div className="space-y-4">
              <p><strong className="text-gray-700">Setting:</strong> Negotiating a business deal in a Moroccan market</p>
              <p><strong className="text-gray-700">Your Role:</strong> Buyer</p>
              <p><strong className="text-gray-700">Partner's Role:</strong> Seller</p>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-purple-800 mb-3">Key phrases to use:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>السعر غالي شوية (s-si3r ghali shwiya)</strong> - The price is a bit expensive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>واش يمكن تنقص؟ (wash yemken tenqes?)</strong> - Can you reduce it?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>نديك... (ndik...)</strong> - I'll give you...</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>هادي آخر كلمة (hadi akher kelma)</strong> - This is my final offer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">📝</span>
          Complex Translation Exercises
        </h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">English to Darija - Advanced Sentences</h4>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                <p className="text-gray-800 mb-2"><strong>1.</strong> "If I had known you were coming, I would have prepared dinner."</p>
                <p className="text-blue-700 font-medium"><em>Answer:</em> إلا كنت عرفت بلي غادي تجي، كنت غادي نوجد العشا</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                <p className="text-gray-800 mb-2"><strong>2.</strong> "The meeting that was supposed to happen yesterday has been postponed until next week."</p>
                <p className="text-blue-700 font-medium"><em>Answer:</em> الاجتماع اللي كان خاصو يكون البارح تأجل للأسبوع الجاي</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                <p className="text-gray-800 mb-2"><strong>3.</strong> "Despite the difficulties, we managed to complete the project on time."</p>
                <p className="text-blue-700 font-medium"><em>Answer:</em> رغم الصعوبات، قدرنا نكملو المشروع فالوقت</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                <p className="text-gray-800 mb-2"><strong>4.</strong> "I've been learning Darija for six months, but I still need more practice."</p>
                <p className="text-blue-700 font-medium"><em>Answer:</em> كانتعلم الدارجة من ستة شهور، ولكن مازال خاصني تمرين كتر</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Darija to English - Complex Expressions</h4>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
                <p className="text-gray-800 mb-2"><strong>1.</strong> لو كان عندي الوقت، كنت غادي نزور جميع المدن المغربية</p>
                <p className="text-green-700 font-medium"><em>Answer:</em> If I had time, I would visit all Moroccan cities</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
                <p className="text-gray-800 mb-2"><strong>2.</strong> كيما قلت ليك من قبل، هاد الموضوع معقد بزاف</p>
                <p className="text-green-700 font-medium"><em>Answer:</em> As I told you before, this topic is very complicated</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
                <p className="text-gray-800 mb-2"><strong>3.</strong> واخا الطقس كان خايب، الحفلة كانت زوينة</p>
                <p className="text-green-700 font-medium"><em>Answer:</em> Although the weather was bad, the party was beautiful</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">🧩</span>
          Grammar Challenges
        </h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
            <h4 className="text-xl font-semibold text-orange-700 mb-4">Conditional Sentences</h4>
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Complete these conditional sentences:</p>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
                <p className="text-gray-800 mb-2">1. إلا كان عندك فلوس، _____ (If you had money, you would...)</p>
                <p className="text-orange-700 font-medium"><em>Sample answer:</em> كنت غادي تشري طوموبيل جديدة</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
                <p className="text-gray-800 mb-2">2. إلا ما جاش المطر، _____ (If it doesn't rain, ...)</p>
                <p className="text-orange-700 font-medium"><em>Sample answer:</em> غانمشيو للبحر</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
                <p className="text-gray-800 mb-2">3. لو كنت مكانك، _____ (If I were you, I would...)</p>
                <p className="text-orange-700 font-medium"><em>Sample answer:</em> كنت غادي نتكلم معاه</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
            <h4 className="text-xl font-semibold text-red-700 mb-4">Complex Verb Forms</h4>
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Conjugate in different tenses:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-red-50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-red-200">
                      <th className="border border-red-300 px-4 py-2 text-red-800 font-semibold">Pronoun</th>
                      <th className="border border-red-300 px-4 py-2 text-red-800 font-semibold">Past (كتب)</th>
                      <th className="border border-red-300 px-4 py-2 text-red-800 font-semibold">Present (كايكتب)</th>
                      <th className="border border-red-300 px-4 py-2 text-red-800 font-semibold">Future (غايكتب)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-red-100">
                      <td className="border border-red-300 px-4 py-2 font-medium text-gray-800">أنا</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">كتبت</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">كانكتب</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">غانكتب</td>
                    </tr>
                    <tr className="hover:bg-red-100">
                      <td className="border border-red-300 px-4 py-2 font-medium text-gray-800">نتا</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">كتبتي</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">كاتكتب</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">غاتكتب</td>
                    </tr>
                    <tr className="hover:bg-red-100">
                      <td className="border border-red-300 px-4 py-2 font-medium text-gray-800">هو</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">كتب</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">كايكتب</td>
                      <td className="border border-red-300 px-4 py-2 text-gray-700">غايكتب</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">🎯</span>
          Listening Comprehension Challenges
        </h3>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
          <h4 className="text-xl font-semibold text-indigo-700 mb-4">News Report Comprehension</h4>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Listen to this Moroccan news report and answer:</p>
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-300">
              <p className="text-gray-800 italic mb-4">الحكومة المغربية أعلنت على مشروع جديد للطاقة المتجددة. هاد المشروع غايخلق ألف منصب شغل جديد فالمناطق القروية. الوزير قال بلي هاد المبادرة غاتساعد فالتنمية الاقتصادية ديال البلاد.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-indigo-800 mb-3">Questions:</p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>What did the Moroccan government announce?</li>
                <li>How many jobs will be created?</li>
                <li>Where will these jobs be located?</li>
                <li>What did the minister say about the initiative?</li>
              </ol>
              
              <div className="mt-4 bg-white p-3 rounded border">
                <p className="font-semibold text-indigo-800 mb-2">Answers:</p>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>A new renewable energy project</li>
                  <li>1000 new jobs</li>
                  <li>In rural areas</li>
                  <li>It will help the country's economic development</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">✍️</span>
          Creative Writing Challenges
        </h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-500">
            <h4 className="text-xl font-semibold text-teal-700 mb-4">Descriptive Essay</h4>
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Write a 150-word description in Darija about:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Your ideal vacation in Morocco</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>A traditional Moroccan wedding you attended</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Your experience learning Darija</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>A day in a Moroccan souk</span>
                </li>
              </ul>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="font-semibold text-teal-800 mb-2">Include:</p>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Descriptive adjectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Cultural references</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Personal emotions and reactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Specific details and examples</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500">
            <h4 className="text-xl font-semibold text-cyan-700 mb-4">Formal Letter</h4>
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Write a formal business letter in Darija:</p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">You are applying for a job at a Moroccan company. Write a cover letter explaining:</p>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Your qualifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Why you want to work there</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>What you can contribute</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Your availability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <p className="font-semibold text-cyan-800 mb-2">Letter Structure:</p>
                <ol className="space-y-1 text-gray-700 list-decimal list-inside">
                  <li>Formal greeting</li>
                  <li>Introduction and purpose</li>
                  <li>Main content (qualifications, motivation)</li>
                  <li>Closing and next steps</li>
                  <li>Formal sign-off</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">🗣️</span>
          Pronunciation Challenges
        </h3>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-pink-500">
          <h4 className="text-xl font-semibold text-pink-700 mb-4">Difficult Sound Combinations</h4>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Practice these challenging Darija sounds:</p>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-300">
                <h5 className="font-semibold text-pink-800 mb-3">ع (3ayn) combinations:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>عقل (3aql)</strong> - mind</li>
                  <li><strong>معقول (ma3qul)</strong> - reasonable</li>
                  <li><strong>اجتماع (ijtima3)</strong> - meeting</li>
                  <li><strong>مجتمع (mujtama3)</strong> - society</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-300">
                <h5 className="font-semibold text-pink-800 mb-3">خ (kh) and غ (gh) combinations:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>مخزن (makhzan)</strong> - warehouse</li>
                  <li><strong>مغرب (maghrib)</strong> - Morocco/sunset</li>
                  <li><strong>خضرة (khodra)</strong> - vegetables</li>
                  <li><strong>غرفة (ghorfa)</strong> - room</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-300">
                <h5 className="font-semibold text-pink-800 mb-3">ق (q) combinations:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>قرآن (qur'an)</strong> - Quran</li>
                  <li><strong>طريق (tariq)</strong> - road</li>
                  <li><strong>صديق (sadiq)</strong> - friend</li>
                  <li><strong>موسيقى (musiqa)</strong> - music</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 border border-purple-200">
        <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">💡</span>
          Exercise Tips
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-400 hover:shadow-md transition-shadow">
            <span className="text-2xl mb-2 block">⏰</span>
            <p className="font-semibold text-purple-800 mb-1">Time Yourself:</p>
            <p className="text-gray-700 text-sm">Complete exercises within set time limits</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow">
            <span className="text-2xl mb-2 block">🎯</span>
            <p className="font-semibold text-blue-800 mb-1">Focus on Accuracy:</p>
            <p className="text-gray-700 text-sm">Prioritize correctness over speed</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400 hover:shadow-md transition-shadow">
            <span className="text-2xl mb-2 block">🔄</span>
            <p className="font-semibold text-green-800 mb-1">Repeat Difficult Exercises:</p>
            <p className="text-gray-700 text-sm">Practice challenging areas multiple times</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow">
            <span className="text-2xl mb-2 block">📱</span>
            <p className="font-semibold text-orange-800 mb-1">Record Yourself:</p>
            <p className="text-gray-700 text-sm">Listen to your pronunciation and improve</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedExercises;