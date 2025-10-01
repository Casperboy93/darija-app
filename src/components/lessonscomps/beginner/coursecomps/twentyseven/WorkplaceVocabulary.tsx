import React from 'react';

const WorkplaceVocabulary = () => {
  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        Workplace Vocabulary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Office Equipment</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Computer</p>
              <p className="text-green-600">كمبيوتر / حاسوب</p>
              <p className="text-green-600 italic">Computer / Hasub</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Printer</p>
              <p className="text-green-600">طابعة</p>
              <p className="text-green-600 italic">Tabi3a</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Phone</p>
              <p className="text-green-600">تيليفون</p>
              <p className="text-green-600 italic">Tilifun</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Desk</p>
              <p className="text-green-600">مكتب</p>
              <p className="text-green-600 italic">Maktab</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Chair</p>
              <p className="text-green-600">كرسي</p>
              <p className="text-green-600 italic">Kursi</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Filing cabinet</p>
              <p className="text-green-600">خزانة الملفات</p>
              <p className="text-green-600 italic">Khizanat l-malaffat</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Job Positions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Manager</p>
              <p className="text-green-600">مدير</p>
              <p className="text-green-600 italic">Mudir</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Employee</p>
              <p className="text-green-600">موظف</p>
              <p className="text-green-600 italic">Muwazzaf</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Secretary</p>
              <p className="text-green-600">سكرتير</p>
              <p className="text-green-600 italic">Sikritir</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Accountant</p>
              <p className="text-green-600">محاسب</p>
              <p className="text-green-600 italic">Muhasib</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Engineer</p>
              <p className="text-green-600">مهندس</p>
              <p className="text-green-600 italic">Muhandis</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Sales representative</p>
              <p className="text-green-600">مندوب مبيعات</p>
              <p className="text-green-600 italic">Mandub mabi3at</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Business Activities</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Meeting</p>
              <p className="text-green-600">اجتماع</p>
              <p className="text-green-600 italic">Ijtima3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Presentation</p>
              <p className="text-green-600">عرض تقديمي</p>
              <p className="text-green-600 italic">3ard taqdimi</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Project</p>
              <p className="text-green-600">مشروع</p>
              <p className="text-green-600 italic">Mashru3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Deadline</p>
              <p className="text-green-600">الموعد النهائي</p>
              <p className="text-green-600 italic">Al-maw3id n-niha'i</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Report</p>
              <p className="text-green-600">تقرير</p>
              <p className="text-green-600 italic">Taqrir</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Budget</p>
              <p className="text-green-600">ميزانية</p>
              <p className="text-green-600 italic">Mizaniya</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Work Actions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">To work</p>
              <p className="text-green-600">يخدم</p>
              <p className="text-green-600 italic">Yakhdim</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">To manage</p>
              <p className="text-green-600">يدير</p>
              <p className="text-green-600 italic">Yudir</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">To organize</p>
              <p className="text-green-600">ينظم</p>
              <p className="text-green-600 italic">Yunazzim</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">To schedule</p>
              <p className="text-green-600">يبرمج</p>
              <p className="text-green-600 italic">Yubarrmij</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">To complete</p>
              <p className="text-green-600">يكمل</p>
              <p className="text-green-600 italic">Yukammil</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">To collaborate</p>
              <p className="text-green-600">يتعاون</p>
              <p className="text-green-600 italic">Yata3awan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-md border border-green-200">
          <h3 className="font-semibold text-green-800 mb-2">Common Workplace Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I'm working on a project</p>
              <p className="text-green-600">كانخدم على مشروع</p>
              <p className="text-green-600 italic">Kankhdam 3la mashru3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">The meeting is at 2 PM</p>
              <p className="text-green-600">الاجتماع في الساعة جوج</p>
              <p className="text-green-600 italic">L-ijtima3 fi s-sa3a juj</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I need to finish this report</p>
              <p className="text-green-600">خاصني نكمل هاد التقرير</p>
              <p className="text-green-600 italic">Khassni nkammil had t-taqrir</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Can you help me with this?</p>
              <p className="text-green-600">واش تقدر تعاونني في هادشي؟</p>
              <p className="text-green-600 italic">Wash tqdar t3awanni fi hadshi?</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Professional Etiquette</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Always greet colleagues with "صباح الخير" (Sabah l-khayr) in the morning</li>
            <li>• Use formal titles when addressing superiors: "أستاذ" (Ustaz) or "سيد" (Sayyid)</li>
            <li>• Punctuality is highly valued in Moroccan business culture</li>
            <li>• Dress professionally and conservatively</li>
            <li>• Show respect for hierarchy and seniority</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkplaceVocabulary;