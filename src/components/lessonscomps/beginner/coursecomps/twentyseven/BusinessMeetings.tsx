import React from 'react';

const BusinessMeetings = () => {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Business Meetings
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3">Meeting Setup</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Let's schedule a meeting</p>
              <p className="text-indigo-600">يالله نبرمجو اجتماع</p>
              <p className="text-indigo-600 italic">Yallah nbarrmju ijtima3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What time works for you?</p>
              <p className="text-indigo-600">أشمن وقت مناسب ليك؟</p>
              <p className="text-indigo-600 italic">Ashman waqt munasib lik?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">The meeting room is booked</p>
              <p className="text-indigo-600">قاعة الاجتماعات محجوزة</p>
              <p className="text-indigo-600 italic">Qa3at l-ijtima3at mahjuza</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Please send the agenda</p>
              <p className="text-indigo-600">عافاك صيفط جدول الأعمال</p>
              <p className="text-indigo-600 italic">3afak sifat jadwal l-a3mal</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">We need to reschedule</p>
              <p className="text-indigo-600">خاصنا نأجلو الموعد</p>
              <p className="text-indigo-600 italic">Khassna nu'ajjilu l-maw3id</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3">During the Meeting</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Let's start the meeting</p>
              <p className="text-indigo-600">يالله نبداو الاجتماع</p>
              <p className="text-indigo-600 italic">Yallah nbdaw l-ijtima3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">May I have your attention?</p>
              <p className="text-indigo-600">واش نقدر ناخد انتباهكم؟</p>
              <p className="text-indigo-600 italic">Wash nqdar nakhud intibahkum?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What's your opinion on this?</p>
              <p className="text-indigo-600">أشنو رأيك في هادشي؟</p>
              <p className="text-indigo-600 italic">Ashnu rayak fi hadshi?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'd like to add something</p>
              <p className="text-indigo-600">بغيت نزيد شي حاجة</p>
              <p className="text-indigo-600 italic">Bghit nzid shi haja</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Can we move to the next point?</p>
              <p className="text-indigo-600">واش نقدرو نمشيو للنقطة اللي جاية؟</p>
              <p className="text-indigo-600 italic">Wash nqadru nmshiw li n-nuqta lli jaya?</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3">Expressing Ideas</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I suggest that we...</p>
              <p className="text-indigo-600">كانقترح باش...</p>
              <p className="text-indigo-600 italic">Kanqtarih bash...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">In my opinion...</p>
              <p className="text-indigo-600">في رأيي...</p>
              <p className="text-indigo-600 italic">Fi rayyi...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I think we should...</p>
              <p className="text-indigo-600">كانظن خاصنا...</p>
              <p className="text-indigo-600 italic">Kanzan khassna...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What if we try...</p>
              <p className="text-indigo-600">أشنو إلا جربنا...</p>
              <p className="text-indigo-600 italic">Ashnu ila jarrabna...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">The main issue is...</p>
              <p className="text-indigo-600">المشكل الأساسي هو...</p>
              <p className="text-indigo-600 italic">L-mushkil l-asasi huwa...</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-indigo-100">
          <h3 className="font-semibold text-indigo-700 mb-3">Meeting Conclusion</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Let's summarize the key points</p>
              <p className="text-indigo-600">يالله نلخصو النقط المهمة</p>
              <p className="text-indigo-600 italic">Yallah nlakhkhsu n-nuqat l-muhimma</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Who will be responsible for this?</p>
              <p className="text-indigo-600">شكون غايكون مسؤول على هادشي؟</p>
              <p className="text-indigo-600 italic">Shkun ghaykon mas'ul 3la hadshi?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">When is the deadline?</p>
              <p className="text-indigo-600">إمتى الموعد النهائي؟</p>
              <p className="text-indigo-600 italic">Imta l-maw3id n-niha'i?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'll send the meeting minutes</p>
              <p className="text-indigo-600">غانصيفط محضر الاجتماع</p>
              <p className="text-indigo-600 italic">Ghansifat mahdar l-ijtima3</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Thank you for your time</p>
              <p className="text-indigo-600">شكرا على وقتكم</p>
              <p className="text-indigo-600 italic">Shukran 3la waqtkum</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-md border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-2">Meeting Etiquette Tips</h3>
          <ul className="text-indigo-700 text-sm space-y-1">
            <li>• Arrive on time or slightly early</li>
            <li>• Turn off or silence mobile phones</li>
            <li>• Listen actively and take notes</li>
            <li>• Speak clearly and at an appropriate volume</li>
            <li>• Respect others' opinions even when disagreeing</li>
            <li>• Stay focused on the agenda items</li>
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-md border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Virtual Meeting Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Can you hear me?</p>
              <p className="text-blue-600">واش كاتسمعني؟</p>
              <p className="text-blue-600 italic">Wash katsma3ni?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Please mute your microphone</p>
              <p className="text-blue-600">عافاك اقفل الميكرو</p>
              <p className="text-blue-600 italic">3afak aqfal l-mikru</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Can you share your screen?</p>
              <p className="text-blue-600">واش تقدر تشارك الشاشة؟</p>
              <p className="text-blue-600 italic">Wash tqdar tsharik sh-shasha?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">The connection is poor</p>
              <p className="text-blue-600">الاتصال ضعيف</p>
              <p className="text-blue-600 italic">L-ittisal da3if</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessMeetings;