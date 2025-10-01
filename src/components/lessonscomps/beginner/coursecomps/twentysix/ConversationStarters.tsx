import React from 'react';

const ConversationStarters = () => {
  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Advanced Conversation Starters
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Breaking the Ice</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">What do you think about...?</p>
              <p className="text-green-600">أش كاتشوف في...؟</p>
              <p className="text-green-600 italic">Ash katshuf fi...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Have you heard about...?</p>
              <p className="text-green-600">واش سمعتي ب...؟</p>
              <p className="text-green-600 italic">Wash sm3ti b...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm curious about your opinion on...</p>
              <p className="text-green-600">محتاج نعرف رأيك في...</p>
              <p className="text-green-600 italic">Mhtaj n3raf rayak fi...</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Personal Interests</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">What are your hobbies?</p>
              <p className="text-green-600">أش كاتدير في وقت الفراغ؟</p>
              <p className="text-green-600 italic">Ash katdir fi waqt l-faragh?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Do you enjoy...?</p>
              <p className="text-green-600">واش كاتبغي...؟</p>
              <p className="text-green-600 italic">Wash katbghi...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm passionate about...</p>
              <p className="text-green-600">أنا مولع ب...</p>
              <p className="text-green-600 italic">Ana mwal3 b...</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Current Events</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Did you see the news about...?</p>
              <p className="text-green-600">واش شفتي الأخبار ديال...؟</p>
              <p className="text-green-600 italic">Wash shfti l-akhbar dyal...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What's happening these days?</p>
              <p className="text-green-600">أش كايوقع هاد الأيام؟</p>
              <p className="text-green-600 italic">Ash kaywaqa3 had l-ayam?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Things are changing so fast</p>
              <p className="text-green-600">الأمور كاتبدل بزربة</p>
              <p className="text-green-600 italic">L-umur katbaddal bzarba</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-green-100">
          <h3 className="font-semibold text-green-700 mb-3">Cultural Topics</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">How do you celebrate...?</p>
              <p className="text-green-600">كيفاش كاتحتافلو ب...؟</p>
              <p className="text-green-600 italic">Kifash kathataflw b...?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What's your favorite tradition?</p>
              <p className="text-green-600">أشنو أحسن تقليد عندك؟</p>
              <p className="text-green-600 italic">Ashnu ahsan taqlid 3andak?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">In my culture, we...</p>
              <p className="text-green-600">في ثقافتي، كاندير...</p>
              <p className="text-green-600 italic">Fi thaqafti, kandir...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-md border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">Practice Tips</h3>
        <p className="text-green-700 text-sm">Start with topics you're genuinely interested in. People appreciate authentic curiosity and engagement in conversations.</p>
      </div>
    </div>
  );
};

export default ConversationStarters;