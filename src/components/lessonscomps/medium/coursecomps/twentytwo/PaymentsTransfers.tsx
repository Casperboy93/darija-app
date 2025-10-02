"use client";

import React from 'react';

export default function PaymentsTransfers() {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Payments & Transfers</h3>
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
            <td className="px-4 py-2">I'd like to transfer money</td>
            <td className="px-4 py-2">بغيت نحول الفلوس</td>
            <td className="px-4 py-2">bghit nhawwel lflus</td>
            <td className="px-4 py-2">Initiate a transfer request.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Domestic transfer</td>
            <td className="px-4 py-2">تحويل داخلي</td>
            <td className="px-4 py-2">tahwil dakhili</td>
            <td className="px-4 py-2">Within the same country.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">International transfer</td>
            <td className="px-4 py-2">تحويل دولي</td>
            <td className="px-4 py-2">tahwil dowli</td>
            <td className="px-4 py-2">Cross-border transfer.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">What's the fee?</td>
            <td className="px-4 py-2">شنو هي الرسوم؟</td>
            <td className="px-4 py-2">shnu hiya rrusum</td>
            <td className="px-4 py-2">Confirm transfer charges.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">When will it arrive?</td>
            <td className="px-4 py-2">فاش غادي توصل؟</td>
            <td className="px-4 py-2">fash ghadi twsl</td>
            <td className="px-4 py-2">Ask for expected timing.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Payment by card</td>
            <td className="px-4 py-2">خلص بالبطاقة</td>
            <td className="px-4 py-2">khalles b lbitaqa</td>
            <td className="px-4 py-2">Pay with card.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">Payment in cash</td>
            <td className="px-4 py-2">خلص بالنقد</td>
            <td className="px-4 py-2">khalles b nnaqed</td>
            <td className="px-4 py-2">Pay with cash.</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2">I need the receipt</td>
            <td className="px-4 py-2">بغيت الوصل</td>
            <td className="px-4 py-2">bghit l wasl</td>
            <td className="px-4 py-2">Proof of payment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}