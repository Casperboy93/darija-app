"use client";

import React from 'react';
import LessonLayout from '../common/LessonLayout';

export default function AdvancedSix() {
  return (
    <LessonLayout 
      title="Professional Communication" 
      level="advanced" 
      lessonNumber={6}
      previousLesson="advanced-five"
      nextLesson="advanced-seven"
    >
      {/* Lesson Overview */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lesson Overview
        </h2>
        <p className="text-gray-700">Master professional communication in Darija for business settings, formal meetings, and workplace interactions. Learn to navigate professional hierarchies and express complex ideas with appropriate formality.</p>
        
        <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
          <p className="font-medium text-purple-800">Learning Goals:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
            <li>Master formal business vocabulary and expressions</li>
            <li>Learn professional meeting and presentation language</li>
            <li>Understand workplace hierarchy and respectful communication</li>
            <li>Practice negotiation and persuasion techniques</li>
          </ul>
        </div>
      </div>
      
      {/* Business Vocabulary */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Business Vocabulary
        </h2>
        
        <p className="text-gray-700 mb-6">Essential vocabulary for professional environments and business discussions:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Company & Organization</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Company</span>
                <span className="font-medium">شركة - Shirka</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Business</span>
                <span className="font-medium">تجارة - Tijara</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Office</span>
                <span className="font-medium">مكتب - Maktab</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Manager</span>
                <span className="font-medium">مدير - Mudir</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Employee</span>
                <span className="font-medium">موظف - Muwazzaf</span>
              </div>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-900">Meetings & Presentations</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Meeting</span>
                <span className="font-medium">اجتماع - Ijtima3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Presentation</span>
                <span className="font-medium">عرض - 3ard</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Report</span>
                <span className="font-medium">تقرير - Taqrir</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Project</span>
                <span className="font-medium">مشروع - Mashru3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Deadline</span>
                <span className="font-medium">موعد نهائي - Maw3id niha2i</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formal Expressions */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Formal Professional Expressions
        </h2>
        
        <p className="text-gray-700 mb-6">Key phrases for professional communication and business interactions:</p>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Opening a Meeting</h3>
            <div className="space-y-2">
              <p><span className="font-medium">نبداو الاجتماع</span> - Nbdaw l-ijtima3 (Let's start the meeting)</p>
              <p><span className="font-medium">شكرا ليكم على الحضور</span> - Shukran likum 3la l-hudur (Thank you for attending)</p>
              <p><span className="font-medium">اليوم غادي نناقشو</span> - Lyum ghadi nnaaqshu (Today we will discuss)</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Expressing Opinions Professionally</h3>
            <div className="space-y-2">
              <p><span className="font-medium">من وجهة نظري</span> - Min wijhat nazari (From my point of view)</p>
              <p><span className="font-medium">أعتقد أن</span> - A3taqid anna (I believe that)</p>
              <p><span className="font-medium">بصراحة</span> - Bi-saraha (Frankly speaking)</p>
              <p><span className="font-medium">إذا سمحتو</span> - Idha samahtu (If you allow me)</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Making Requests & Suggestions</h3>
            <div className="space-y-2">
              <p><span className="font-medium">ممكن نقترح</span> - Mumkin naqtarih (May I suggest)</p>
              <p><span className="font-medium">واش ممكن</span> - Wash mumkin (Is it possible)</p>
              <p><span className="font-medium">أقترح أن</span> - Aqtarih anna (I suggest that)</p>
              <p><span className="font-medium">لو سمحتو</span> - Law samahtu (Please/If you would)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scenarios */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Professional Scenarios
        </h2>
        
        <p className="text-gray-700 mb-6">Practice common workplace situations with appropriate language:</p>
        
        <div className="space-y-6">
          <div className="border border-purple-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Job Interview</h3>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800 mb-2">Interviewer:</p>
              <p className="text-gray-700 mb-3">حدثني عن نفسك - Haddithni 3an nafsak (Tell me about yourself)</p>
              
              <p className="font-medium text-green-800 mb-2">Candidate:</p>
              <p className="text-gray-700">اسمي أحمد، عندي خبرة خمس سنوات في المجال ديال التسويق. تخرجت من الجامعة ديال الرباط وخدمت في شركات مختلفة.</p>
              <p className="text-sm text-gray-600 italic">My name is Ahmed, I have five years of experience in marketing. I graduated from Rabat University and worked in different companies.</p>
            </div>
          </div>
          
          <div className="border border-purple-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Negotiating a Deal</h3>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-medium text-blue-800 mb-2">Client:</p>
              <p className="text-gray-700 mb-3">الثمن غالي بزاف - Th-thaman ghali bzaf (The price is too high)</p>
              
              <p className="font-medium text-green-800 mb-2">Salesperson:</p>
              <p className="text-gray-700">فهمت موقفك، ولكن الجودة ديالنا عالية. ممكن نوصلو لحل يرضي الجميع.</p>
              <p className="text-sm text-gray-600 italic">I understand your position, but our quality is high. We can reach a solution that satisfies everyone.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email & Written Communication */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Professional Email & Written Communication
        </h2>
        
        <p className="text-gray-700 mb-6">Learn formal written communication patterns in Darija:</p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-4">Sample Business Email</h3>
          <div className="space-y-3 text-sm">
            <p><span className="font-medium">Subject:</span> بخصوص الاجتماع ديال غدا - Bi-khusus l-ijtima3 dyal ghudda</p>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="mb-2">السلام عليكم ورحمة الله وبركاته</p>
              <p className="mb-2">أستاذ محمد المحترم،</p>
              <p className="mb-2">أكتب لكم بخصوص الاجتماع المقرر غدا في الساعة العاشرة صباحا.</p>
              <p className="mb-2">أرجو التأكيد على الحضور وإحضار التقارير المطلوبة.</p>
              <p className="mb-2">مع فائق الاحترام والتقدير</p>
              <p>أحمد الإدريسي</p>
            </div>
            <div className="text-gray-600 italic text-xs mt-4">
              <p>Peace be upon you,</p>
              <p>Respected Mr. Mohammed,</p>
              <p>I am writing regarding tomorrow's meeting scheduled at 10 AM.</p>
              <p>Please confirm attendance and bring the required reports.</p>
              <p>With highest respect and appreciation,</p>
              <p>Ahmed Al-Idrisi</p>
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
            <h3 className="font-semibold text-yellow-800 mb-2">Exercise 1: Role Play</h3>
            <p className="text-gray-700">Practice a business meeting scenario where you need to present a new project proposal to your team.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Exercise 2: Email Writing</h3>
            <p className="text-gray-700">Write a formal email requesting a meeting with a potential client to discuss a business partnership.</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Exercise 3: Negotiation</h3>
            <p className="text-gray-700">Practice negotiating contract terms while maintaining professional courtesy and respect.</p>
          </div>
        </div>
      </div>

      {/* Cultural Notes */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
          <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
          Professional Culture Notes
        </h2>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-800">Hierarchy & Respect</h3>
              <p className="text-gray-700">Moroccan business culture emphasizes respect for hierarchy. Always use formal titles and show deference to senior colleagues.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800">Relationship Building</h3>
              <p className="text-gray-700">Personal relationships are crucial in Moroccan business. Take time for small talk and relationship building before diving into business matters.</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800">Time & Punctuality</h3>
              <p className="text-gray-700">While flexibility exists, showing respect for others' time by being punctual demonstrates professionalism and consideration.</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}