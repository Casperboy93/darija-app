"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 1: Opening an Account</h3>
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
              <td className="px-4 py-2">Hello, I'd like to open an account.</td>
              <td className="px-4 py-2">سلام، بغيت نفتح حساب.</td>
              <td className="px-4 py-2">salam, bghit nftah hesab.</td>
              <td className="px-4 py-2">Customer starts request.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Sure, do you have your ID?</td>
              <td className="px-4 py-2">مرحبا، واش عندك بطاقة التعريف؟</td>
              <td className="px-4 py-2">marhba, wash andk bitaqat ttaarif?</td>
              <td className="px-4 py-2">Bank asks for ID.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, and proof of address.</td>
              <td className="px-4 py-2">ايه، وعندي إثبات العنوان.</td>
              <td className="px-4 py-2">ayh, w andi ithbat l unwan.</td>
              <td className="px-4 py-2">Customer confirms documents.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Please fill this form.</td>
              <td className="px-4 py-2">عفاك عمر هاد الاستمارة.</td>
              <td className="px-4 py-2">afak ammer had l istmara.</td>
              <td className="px-4 py-2">Step to open the account.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 2: Card and ATM</h3>
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
              <td className="px-4 py-2">Can I get a debit card?</td>
              <td className="px-4 py-2">نقدر ناخد بطاقة السحب؟</td>
              <td className="px-4 py-2">nqdr nakhud bitaqat ssahb?</td>
              <td className="px-4 py-2">Request for card.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Yes, it will be ready in two days.</td>
              <td className="px-4 py-2">ايه، غادي تكون واجدة ف جوج أيام.</td>
              <td className="px-4 py-2">ayh, ghadi tkwn wajda f juj ayam.</td>
              <td className="px-4 py-2">Bank gives timing.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Where is the nearest ATM?</td>
              <td className="px-4 py-2">فين كاين أقرب صراف آلي؟</td>
              <td className="px-4 py-2">fin kayn aqrab sarraaf ali?</td>
              <td className="px-4 py-2">Ask for ATM location.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Just outside, on the right.</td>
              <td className="px-4 py-2">على برا، فاليمين.</td>
              <td className="px-4 py-2">ala barra, f lyamin.</td>
              <td className="px-4 py-2">Directions given.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dialogue 3: Transfer and Fees</h3>
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
              <td className="px-4 py-2">I want to transfer money today.</td>
              <td className="px-4 py-2">بغيت نحول الفلوس اليوم.</td>
              <td className="px-4 py-2">bghit nhawwel lflus lyum.</td>
              <td className="px-4 py-2">Transfer request.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Domestic or international?</td>
              <td className="px-4 py-2">داخلي ولا دولي؟</td>
              <td className="px-4 py-2">dakhili wla dowli?</td>
              <td className="px-4 py-2">Type of transfer.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Domestic, please.</td>
              <td className="px-4 py-2">داخلي، عفاك.</td>
              <td className="px-4 py-2">dakhili, afak.</td>
              <td className="px-4 py-2">Choose domestic transfer.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">The fee is small and it arrives today.</td>
              <td className="px-4 py-2">الرسوم قليلة وغادي توصل اليوم.</td>
              <td className="px-4 py-2">russum qalila w ghadi twsl lyum.</td>
              <td className="px-4 py-2">Bank confirms fee and timing.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}