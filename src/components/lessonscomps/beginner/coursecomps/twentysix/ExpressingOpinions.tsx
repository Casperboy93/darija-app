import React from 'react';

const ExpressingOpinions = () => {
  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z" />
        </svg>
        Expressing Opinions and Emotions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Sharing Your Opinion</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">In my opinion...</p>
              <p className="text-purple-600">من رأيي...</p>
              <p className="text-purple-600 italic">Min rayi...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I think that...</p>
              <p className="text-purple-600">كانضن بلي...</p>
              <p className="text-purple-600 italic">Kandhann blli...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I believe...</p>
              <p className="text-purple-600">كانعتاقد...</p>
              <p className="text-purple-600 italic">Kan3taqad...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">From my perspective...</p>
              <p className="text-purple-600">من وجهة نظري...</p>
              <p className="text-purple-600 italic">Min wijhat nadhri...</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Agreement & Disagreement</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I completely agree</p>
              <p className="text-purple-600">متافق معاك بزاف</p>
              <p className="text-purple-600 italic">Mttafaq m3ak bzaf</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I respectfully disagree</p>
              <p className="text-purple-600">ما متافقش معاك بكل احترام</p>
              <p className="text-purple-600 italic">Ma mttafaqsh m3ak b kull ihtiram</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">You have a point, but...</p>
              <p className="text-purple-600">عندك الحق، ولكن...</p>
              <p className="text-purple-600 italic">3andak l-haqq, walakin...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I see it differently</p>
              <p className="text-purple-600">كانشوفها بطريقة أخرى</p>
              <p className="text-purple-600 italic">Kanshufha b tariqa ukhra</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Expressing Emotions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I'm excited about...</p>
              <p className="text-purple-600">أنا متحمس ل...</p>
              <p className="text-purple-600 italic">Ana muthammis l...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm worried about...</p>
              <p className="text-purple-600">أنا قلقان من...</p>
              <p className="text-purple-600 italic">Ana qalqan min...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">That makes me happy</p>
              <p className="text-purple-600">هادشي كايفرحني</p>
              <p className="text-purple-600 italic">Hadshi kayfarrahni</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I'm disappointed</p>
              <p className="text-purple-600">أنا محبط</p>
              <p className="text-purple-600 italic">Ana muhbit</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-3">Asking for Opinions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">What do you think?</p>
              <p className="text-purple-600">أش كاتشوف؟</p>
              <p className="text-purple-600 italic">Ash katshuf?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">How do you feel about it?</p>
              <p className="text-purple-600">كيف كاتحس بيه؟</p>
              <p className="text-purple-600 italic">Kif kathass bih?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">What's your take on this?</p>
              <p className="text-purple-600">أش رأيك في هادشي؟</p>
              <p className="text-purple-600 italic">Ash rayak fi hadshi?</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Do you have any thoughts?</p>
              <p className="text-purple-600">واش عندك شي أفكار؟</p>
              <p className="text-purple-600 italic">Wash 3andak shi afkar?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-md border border-purple-200">
        <h3 className="font-semibold text-purple-800 mb-2">Cultural Note</h3>
        <p className="text-purple-700 text-sm">In Moroccan culture, it's important to express disagreement respectfully. Use phrases like "بكل احترام" (with all respect) to maintain harmony in conversations.</p>
      </div>
    </div>
  );
};

export default ExpressingOpinions;