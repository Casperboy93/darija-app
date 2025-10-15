"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      {/* Dialogue 1: Bargaining at the Market */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Bargaining at the Market</h3>
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
              <td className="px-4 py-2">How much is this?</td>
              <td className="px-4 py-2">بشحال هادا؟</td>
              <td className="px-4 py-2">bshhal hada?</td>
              <td className="px-4 py-2">Opening question.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Can you give me a discount?</td>
              <td className="px-4 py-2">تقدر تعطيني تنقيص؟</td>
              <td className="px-4 py-2">tqdr t3tini tnaqis?</td>
              <td className="px-4 py-2">Polite bargaining.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Okay, I'll take it.</td>
              <td className="px-4 py-2">واخا، غادي ناخدوه.</td>
              <td className="px-4 py-2">wakha, ghadi nakhduh.</td>
              <td className="px-4 py-2">Acceptance.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Card or cash?</td>
              <td className="px-4 py-2">كارت ولا كاش؟</td>
              <td className="px-4 py-2">kart wla cash?</td>
              <td className="px-4 py-2">Payment method.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Cash, please.</td>
              <td className="px-4 py-2">بكاش عفاك.</td>
              <td className="px-4 py-2">b cash afak.</td>
              <td className="px-4 py-2">Preference.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialogue 2: Returning an Item */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Returning an Item</h3>
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
              <td className="px-4 py-2">I want to return this item.</td>
              <td className="px-4 py-2">بغيت نرجّع هاد السلعة.</td>
              <td className="px-4 py-2">bghit nrj3 had ssel3a.</td>
              <td className="px-4 py-2">Return request.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Do you have the receipt?</td>
              <td className="px-4 py-2">عندك الوصلة؟</td>
              <td className="px-4 py-2">3ndk l wasla?</td>
              <td className="px-4 py-2">Required doc.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, here it is.</td>
              <td className="px-4 py-2">إيه، ها هي.</td>
              <td className="px-4 py-2">ih, ha hiya.</td>
              <td className="px-4 py-2">Providing receipt.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Do you prefer exchange or refund?</td>
              <td className="px-4 py-2">تبْدل ولا ترجع الفلوس؟</td>
              <td className="px-4 py-2">tbddl wla trj3 l flus?</td>
              <td className="px-4 py-2">Option.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Refund, please.</td>
              <td className="px-4 py-2">ترجيع الفلوس عفاك.</td>
              <td className="px-4 py-2">trjii3 l flus afak.</td>
              <td className="px-4 py-2">Resolution.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dialogue 3: Online Order Delivery */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue: Online Order Delivery</h3>
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
              <td className="px-4 py-2">My order is late.</td>
              <td className="px-4 py-2">طلبي تأخر.</td>
              <td className="px-4 py-2">tlbi t akhar.</td>
              <td className="px-4 py-2">Complaint.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Can I get the tracking number?</td>
              <td className="px-4 py-2">نقدر ناخد رقم التتبع؟</td>
              <td className="px-4 py-2">nqdr nakhod rqm tt tab3?</td>
              <td className="px-4 py-2">Request info.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">It’s out for delivery.</td>
              <td className="px-4 py-2">راه خارج للتوصيل.</td>
              <td className="px-4 py-2">ra kharej ltawssil.</td>
              <td className="px-4 py-2">Status update.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Please send it to this address.</td>
              <td className="px-4 py-2">صيفطوه لهاد العنوان عفاك.</td>
              <td className="px-4 py-2">siftou lhad l 3nwan afak.</td>
              <td className="px-4 py-2">Address.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Thank you.</td>
              <td className="px-4 py-2">شكراً.</td>
              <td className="px-4 py-2">shukran.</td>
              <td className="px-4 py-2">Closing.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}