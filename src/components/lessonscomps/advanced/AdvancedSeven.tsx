"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedSeven() {
  return (
    <LessonLayout 
      title="Academic & Intellectual Discourse" 
      level="advanced" 
      lessonNumber={7}
      previousLesson="advanced-six"
      nextLesson="advanced-eight"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master sophisticated academic and intellectual discourse in Darija. Learn to discuss complex topics, express abstract concepts, and engage in scholarly conversations with appropriate vocabulary and structures.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master academic vocabulary and intellectual expressions</li>
            <li>Learn to discuss abstract concepts and theories</li>
            <li>Practice analytical and critical thinking language</li>
            <li>Understand formal academic discourse patterns</li>
          </ul>
        </div>
      </div>
      
      {/* Academic Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Academic Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for academic discussions and intellectual discourse:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Research & Study</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Research</span>
                <span className="font-medium">بحث - Bahth</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Study</span>
                <span className="font-medium">دراسة - Dirasa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Analysis</span>
                <span className="font-medium">تحليل - Tahlil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Theory</span>
                <span className="font-medium">نظرية - Nazariyya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hypothesis</span>
                <span className="font-medium">فرضية - Faradiyya</span>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Critical Thinking</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Argument</span>
                <span className="font-medium">حجة - Hujja</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Evidence</span>
                <span className="font-medium">دليل - Dalil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Conclusion</span>
                <span className="font-medium">خلاصة - Khulasa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Perspective</span>
                <span className="font-medium">منظور - Manzur</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Concept</span>
                <span className="font-medium">مفهوم - Mafhum</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intellectual Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Intellectual Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">Sophisticated expressions for academic and intellectual discussions:</p>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Presenting Arguments</h3>
            <div className="space-y-2">
              <p><span className="font-medium">من ناحية أخرى</span> - Min nahiya ukhra (On the other hand)</p>
              <p><span className="font-medium">بناء على ذلك</span> - Bina2an 3ala dhalik (Based on that)</p>
              <p><span className="font-medium">في المقابل</span> - Fi l-muqabil (In contrast)</p>
              <p><span className="font-medium">علاوة على ذلك</span> - 3alawatan 3ala dhalik (Furthermore)</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Analyzing & Evaluating</h3>
            <div className="space-y-2">
              <p><span className="font-medium">إذا نظرنا إلى</span> - Idha nazarna ila (If we look at)</p>
              <p><span className="font-medium">يمكن القول أن</span> - Yumkin al-qawl anna (It can be said that)</p>
              <p><span className="font-medium">من المهم أن نلاحظ</span> - Min al-muhimm an nulahiz (It's important to note)</p>
              <p><span className="font-medium">هذا يشير إلى</span> - Hadha yushir ila (This indicates)</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Drawing Conclusions</h3>
            <div className="space-y-2">
              <p><span className="font-medium">في النهاية</span> - Fi n-nihaya (In the end)</p>
              <p><span className="font-medium">خلاصة القول</span> - Khulasatu l-qawl (In conclusion)</p>
              <p><span className="font-medium">مما سبق نستنتج</span> - Mimma sabaqa nastantij (From the above we conclude)</p>
              <p><span className="font-medium">وبالتالي</span> - Wa bi-t-tali (Therefore)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Discussions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Academic Discussion Examples
        </h2>
        
        <p className="text-gray-700 mb-6">Practice sophisticated academic conversations:</p>
        
        <div className="space-y-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Philosophy Discussion</h3>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800 mb-2">Student A:</p>
              <p className="text-gray-700 mb-3">واش كاتعتقد أن الحرية مطلقة ولا نسبية؟</p>
              <p className="text-sm text-gray-600 italic mb-3">Do you think freedom is absolute or relative?</p>
              
              <p className="font-medium text-green-800 mb-2">Student B:</p>
              <p className="text-gray-700 mb-2">من وجهة نظري، الحرية نسبية. لأن حريتك تنتهي عندما تبدأ حرية الآخرين. هذا المفهوم معقد ويحتاج تحليل عميق.</p>
              <p className="text-sm text-gray-600 italic">From my perspective, freedom is relative. Because your freedom ends where others' freedom begins. This concept is complex and needs deep analysis.</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Scientific Debate</h3>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-medium text-blue-800 mb-2">Researcher:</p>
              <p className="text-gray-700 mb-3">النتائج ديال البحث كتبين أن هناك علاقة قوية بين المتغيرين</p>
              <p className="text-sm text-gray-600 italic mb-3">The research results show there's a strong relationship between the two variables</p>
              
              <p className="font-medium text-green-800 mb-2">Colleague:</p>
              <p className="text-gray-700 mb-2">ولكن واش العينة كافية؟ من المهم أن نأخذ بعين الاعتبار العوامل الخارجية التي قد تؤثر على النتائج.</p>
              <p className="text-sm text-gray-600 italic">But is the sample sufficient? It's important to consider external factors that might affect the results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Concepts */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Discussing Abstract Concepts
        </h2>
        
        <p className="text-gray-700 mb-6">Learn to express complex and abstract ideas in Darija:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Philosophy & Ethics</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">العدالة</span> - Al-3adala (Justice)</p>
              <p><span className="font-medium">الأخلاق</span> - Al-akhlaq (Ethics)</p>
              <p><span className="font-medium">الوجود</span> - Al-wujud (Existence)</p>
              <p><span className="font-medium">المعنى</span> - Al-ma3na (Meaning)</p>
              <p><span className="font-medium">الحقيقة</span> - Al-haqiqa (Truth)</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Social Sciences</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">المجتمع</span> - Al-mujtama3 (Society)</p>
              <p><span className="font-medium">الثقافة</span> - Ath-thaqafa (Culture)</p>
              <p><span className="font-medium">الهوية</span> - Al-hawiyya (Identity)</p>
              <p><span className="font-medium">التطور</span> - At-tatawwur (Evolution/Development)</p>
              <p><span className="font-medium">التغيير</span> - At-taghyir (Change)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Writing Patterns */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Academic Writing Patterns
        </h2>
        
        <p className="text-gray-700 mb-6">Master formal academic writing structures in Darija:</p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-4">Sample Academic Paragraph</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="mb-2">إن دراسة الظواهر الاجتماعية تتطلب منهجية علمية دقيقة. من خلال تحليل البيانات المتوفرة، يمكننا أن نلاحظ أن هناك تغيرات جذرية في بنية المجتمع المغربي خلال العقود الأخيرة. هذه التغيرات لا تقتصر على الجانب الاقتصادي فحسب، بل تشمل أيضا الجوانب الثقافية والاجتماعية.</p>
            </div>
            <div className="text-gray-600 italic text-sm">
              <p>The study of social phenomena requires precise scientific methodology. Through analyzing available data, we can observe that there are radical changes in the structure of Moroccan society during recent decades. These changes are not limited to the economic aspect only, but also include cultural and social aspects.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercises */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Practice Exercises
        </h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Exercise 1: Philosophical Debate</h3>
            <p className="text-gray-700">Engage in a philosophical discussion about the nature of knowledge and truth, using sophisticated vocabulary and logical arguments.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Exercise 2: Research Presentation</h3>
            <p className="text-gray-700">Present a research topic with proper academic structure: introduction, methodology, findings, and conclusions.</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Exercise 3: Critical Analysis</h3>
            <p className="text-gray-700">Analyze a complex social issue using critical thinking skills and academic discourse patterns.</p>
          </div>
        </div>
      </div>

      {/* Advanced Tips */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Advanced Academic Communication Tips
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-800">Code-Switching Strategy</h3>
              <p className="text-gray-700">In academic contexts, skillfully alternate between Darija and Modern Standard Arabic to demonstrate linguistic sophistication and cultural awareness.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800">Respectful Disagreement</h3>
              <p className="text-gray-700">Learn to disagree respectfully in academic discussions using phrases like "أحترم رأيك ولكن" (I respect your opinion, but) to maintain scholarly decorum.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800">Building on Ideas</h3>
              <p className="text-gray-700">Use connecting phrases to build upon others' ideas and create collaborative intellectual discourse rather than competitive debate.</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}