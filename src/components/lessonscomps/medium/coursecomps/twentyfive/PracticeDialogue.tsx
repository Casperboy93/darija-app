"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 1: Daily Office Chat</h3>
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
              <td className="px-4 py-2">Good morning, how’s the report going?</td>
              <td className="px-4 py-2">صباح الخير، كيف داير التقرير؟</td>
              <td className="px-4 py-2">sabah lkhir, kif dair ttaqrir?</td>
              <td className="px-4 py-2">Friendly check-in.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Almost done, I’ll send it soon.</td>
              <td className="px-4 py-2">قريب سالا، غادي نرسلّو قريب.</td>
              <td className="px-4 py-2">qrib sala, ghadi nrsllo qrib.</td>
              <td className="px-4 py-2">Progress update.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Great, thanks!</td>
              <td className="px-4 py-2">زوين، شكرا!</td>
              <td className="px-4 py-2">zwin, shukran!</td>
              <td className="px-4 py-2">Positive response.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 2: Delegating a Task</h3>
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
              <td className="px-4 py-2">Can you take this task today?</td>
              <td className="px-4 py-2">تقدر تدير هاد المهمة اليوم؟</td>
              <td className="px-4 py-2">tqdr tdir had l mohima lyum?</td>
              <td className="px-4 py-2">Delegation.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, I’ll finish before 5 PM.</td>
              <td className="px-4 py-2">إييه، نكمل قبل الخامسة.</td>
              <td className="px-4 py-2">iyyh, nkml qbl l khmsa.</td>
              <td className="px-4 py-2">Commitment.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Perfect, appreciate it.</td>
              <td className="px-4 py-2">مزيان، كنقدر الخدمة ديالك.</td>
              <td className="px-4 py-2">mzian, knqdr l khdma dyalk.</td>
              <td className="px-4 py-2">Gratitude.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 3: Email Follow-up</h3>
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
              <td className="px-4 py-2">Did you receive my email?</td>
              <td className="px-4 py-2">وصل ليك الإيميل ديالي؟</td>
              <td className="px-4 py-2">wssl lik l email dyali?</td>
              <td className="px-4 py-2">Confirmation.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, I’ll reply soon.</td>
              <td className="px-4 py-2">إييه، نجاوب قريب.</td>
              <td className="px-4 py-2">iyyh, njawb qrib.</td>
              <td className="px-4 py-2">Response.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Thanks, have a great day.</td>
              <td className="px-4 py-2">شكرا، نهارك مبروك.</td>
              <td className="px-4 py-2">shukran, nhark mbruk.</td>
              <td className="px-4 py-2">Polite closing.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}