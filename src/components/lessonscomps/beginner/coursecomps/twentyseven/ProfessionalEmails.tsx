import React from 'react';

const ProfessionalEmails = () => {
  return (
    <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-teal-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Professional Emails
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border border-teal-100">
          <h3 className="font-semibold text-teal-700 mb-3">Email Greetings</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Dear Sir/Madam</p>
              <p className="text-teal-600">السيد المحترم / السيدة المحترمة</p>
              <p className="text-teal-600 italic">As-sayyid al-muhtaram / As-sayyida al-muhtarama</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Dear Mr. Ahmed</p>
              <p className="text-teal-600">الأستاذ أحمد المحترم</p>
              <p className="text-teal-600 italic">Al-ustaz Ahmad al-muhtaram</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Good morning</p>
              <p className="text-teal-600">صباح الخير</p>
              <p className="text-teal-600 italic">Sabah al-khayr</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I hope this email finds you well</p>
              <p className="text-teal-600">أتمنى أن تكون بخير</p>
              <p className="text-teal-600 italic">Atamanna an takun bi khayr</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-teal-100">
          <h3 className="font-semibold text-teal-700 mb-3">Email Purposes</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">I am writing to inquire about...</p>
              <p className="text-teal-600">كانكتب باش نسأل على...</p>
              <p className="text-teal-600 italic">Kanktab bash ns'al 3la...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I would like to request...</p>
              <p className="text-teal-600">بغيت نطلب...</p>
              <p className="text-teal-600 italic">Bghit natlub...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I am writing to confirm...</p>
              <p className="text-teal-600">كانكتب باش نأكد...</p>
              <p className="text-teal-600 italic">Kanktab bash nu'akkid...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Please find attached...</p>
              <p className="text-teal-600">تلقاو مرفق...</p>
              <p className="text-teal-600 italic">Talqaw muraffaq...</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-teal-100">
          <h3 className="font-semibold text-teal-700 mb-3">Making Requests</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Could you please send me...</p>
              <p className="text-teal-600">واش تقدر تصيفط ليا...</p>
              <p className="text-teal-600 italic">Wash tqdar tsifat liya...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I would appreciate if you could...</p>
              <p className="text-teal-600">غانكون ممنون إلا قدرتي...</p>
              <p className="text-teal-600 italic">Ghankon mamnun ila qdarti...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Please let me know...</p>
              <p className="text-teal-600">عافاك علمني...</p>
              <p className="text-teal-600 italic">3afak 3allmni...</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I need this by Friday</p>
              <p className="text-teal-600">محتاج هادشي قبل الجمعة</p>
              <p className="text-teal-600 italic">Muhtaj hadshi qabl al-jum3a</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md border border-teal-100">
          <h3 className="font-semibold text-teal-700 mb-3">Email Closings</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium">Thank you for your time</p>
              <p className="text-teal-600">شكرا على وقتك</p>
              <p className="text-teal-600 italic">Shukran 3la waqtak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">I look forward to your reply</p>
              <p className="text-teal-600">كانتسنى جوابك</p>
              <p className="text-teal-600 italic">Kantsanna jawabak</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Best regards</p>
              <p className="text-teal-600">مع أطيب التحيات</p>
              <p className="text-teal-600 italic">Ma3a atyab at-tahiyyat</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Sincerely</p>
              <p className="text-teal-600">مع الاحترام</p>
              <p className="text-teal-600 italic">Ma3a al-ihtiram</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-md border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-3">Sample Professional Email</h3>
          <div className="bg-white p-4 rounded border text-sm">
            <div className="space-y-2">
              <p><strong>Subject:</strong> طلب معلومات حول المنتج الجديد</p>
              <p><strong>Subject:</strong> <em>Talab ma3lumat hawl al-muntaj al-jadid</em></p>
              <p><strong>Subject:</strong> Request for information about the new product</p>
              
              <div className="mt-4 space-y-2">
                <p className="text-teal-700">الأستاذ محمد المحترم،</p>
                <p className="text-teal-600 italic">Al-ustaz Muhammad al-muhtaram,</p>
                <p className="text-gray-600">Dear Mr. Muhammad,</p>
                
                <p className="text-teal-700 mt-3">أتمنى أن تكون بخير. كانكتب ليك باش نطلب معلومات حول المنتج الجديد اللي طلقتوه الأسبوع الفايت.</p>
                <p className="text-teal-600 italic">Atamanna an takun bi khayr. Kanktab lik bash natlub ma3lumat hawl al-muntaj al-jadid lli talaqtuh al-usbu3 al-fayit.</p>
                <p className="text-gray-600">I hope you are well. I am writing to request information about the new product you launched last week.</p>
                
                <p className="text-teal-700 mt-3">واش تقدر تصيفط ليا الكتالوج والأسعار؟</p>
                <p className="text-teal-600 italic">Wash tqdar tsifat liya al-kataluj wa al-as3ar?</p>
                <p className="text-gray-600">Could you send me the catalog and prices?</p>
                
                <p className="text-teal-700 mt-3">شكرا على وقتك، وكانتسنى جوابك.</p>
                <p className="text-teal-600 italic">Shukran 3la waqtak, wa kantsanna jawabak.</p>
                <p className="text-gray-600">Thank you for your time, and I look forward to your reply.</p>
                
                <p className="text-teal-700 mt-3">مع أطيب التحيات،<br/>فاطمة الزهراء</p>
                <p className="text-teal-600 italic">Ma3a atyab at-tahiyyat,<br/>Fatima Zahra</p>
                <p className="text-gray-600">Best regards,<br/>Fatima Zahra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Email Writing Tips</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Keep the subject line clear and specific</li>
            <li>• Use formal language and proper titles</li>
            <li>• Be concise and get to the point quickly</li>
            <li>• Proofread before sending</li>
            <li>• Include all necessary attachments</li>
            <li>• Respond promptly to professional emails</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalEmails;