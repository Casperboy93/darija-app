"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      {/* Dialogue 1: At the Municipality */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: At the Municipality</h3>
        <table className="min-w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="px-4 py-2 text-left">English</th>
              <th className="px-4 py-2 text-left">Darija (Arabic)</th>
              <th className="px-4 py-2 text-left">Darija (ASCII)</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t">
              <td className="px-4 py-2">Hello, I need a residence certificate.</td>
              <td className="px-4 py-2">سلام، خاصني شهادة السكنى.</td>
              <td className="px-4 py-2">salam, khasni shahadat sskna.</td>
              <td className="px-4 py-2">Opening request.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Do you have your ID card?</td>
              <td className="px-4 py-2">عندك بطاقة التعريف؟</td>
              <td className="px-4 py-2">3ndk btaqat tta3rif?</td>
              <td className="px-4 py-2">Document check.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, here it is.</td>
              <td className="px-4 py-2">إيه، ها هي.</td>
              <td className="px-4 py-2">ih, ha hiya.</td>
              <td className="px-4 py-2">Providing ID.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Please fill this form.</td>
              <td className="px-4 py-2">عفاك عمر هاد الفورم.</td>
              <td className="px-4 py-2">afak 3mmar had l form.</td>
              <td className="px-4 py-2">Form handed.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Okay, where do I submit it?</td>
              <td className="px-4 py-2">واخا، فين نقدمو؟</td>
              <td className="px-4 py-2">wakha, fin nqddmo?</td>
              <td className="px-4 py-2">Submission desk.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialogue 2: Scheduling a Government Appointment */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Scheduling a Government Appointment</h3>
        <table className="min-w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="px-4 py-2 text-left">English</th>
              <th className="px-4 py-2 text-left">Darija (Arabic)</th>
              <th className="px-4 py-2 text-left">Darija (ASCII)</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t">
              <td className="px-4 py-2">I want to book an appointment for tomorrow.</td>
              <td className="px-4 py-2">بغيت نحجز موعد لغدا.</td>
              <td className="px-4 py-2">bghit nhjz maw3id l ghdda.</td>
              <td className="px-4 py-2">Booking request.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Morning or afternoon?</td>
              <td className="px-4 py-2">الصباح ولا العشية؟</td>
              <td className="px-4 py-2">ssbah wla l 3shiya?</td>
              <td className="px-4 py-2">Time options.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Morning is better for me.</td>
              <td className="px-4 py-2">الصباح حسن ليا.</td>
              <td className="px-4 py-2">ssbah 7san liya.</td>
              <td className="px-4 py-2">Preference.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Okay, 10 AM is available.</td>
              <td className="px-4 py-2">واخا، العشرة ديال الصباح متاحة.</td>
              <td className="px-4 py-2">wakha, l 3shra dyal ssbah mtaha.</td>
              <td className="px-4 py-2">Availability.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Please confirm the appointment.</td>
              <td className="px-4 py-2">عفاك أكّد الموعد.</td>
              <td className="px-4 py-2">afak akkd l maw3id.</td>
              <td className="px-4 py-2">Confirmation.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialogue 3: Submitting an Application */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Submitting an Application</h3>
        <table className="min-w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="px-4 py-2 text-left">English</th>
              <th className="px-4 py-2 text-left">Darija (Arabic)</th>
              <th className="px-4 py-2 text-left">Darija (ASCII)</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t">
              <td className="px-4 py-2">I finished the form.</td>
              <td className="px-4 py-2">ساليت الفورم.</td>
              <td className="px-4 py-2">salit l form.</td>
              <td className="px-4 py-2">Completion.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Do I need to pay a fee?</td>
              <td className="px-4 py-2">واش خاص نخلص شي واجب؟</td>
              <td className="px-4 py-2">wash khas nkhlas shi wajib?</td>
              <td className="px-4 py-2">Payment info.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, please pay at the counter.</td>
              <td className="px-4 py-2">إيه، خلص فالشباك عفاك.</td>
              <td className="px-4 py-2">ih, khallas f shbbak afak.</td>
              <td className="px-4 py-2">Cashier desk.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Okay, where do I pick up the certificate?</td>
              <td className="px-4 py-2">واخا، فين ناخد الشهادة؟</td>
              <td className="px-4 py-2">wakha, fin nakhod shshahada?</td>
              <td className="px-4 py-2">Collection.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">You can pick it up next week.</td>
              <td className="px-4 py-2">تقدر تاخدها السيمانة الجاية.</td>
              <td className="px-4 py-2">tqdr takhdha ssimana jaya.</td>
              <td className="px-4 py-2">Processing time.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}